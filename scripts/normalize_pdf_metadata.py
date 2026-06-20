from __future__ import annotations

import hashlib
import io
import shutil
from pathlib import Path

import pypdfium2 as pdfium
from pypdf import PdfReader, PdfWriter


ROOT = Path(__file__).resolve().parents[1]
RESOURCE_DIR = ROOT / "public" / "resources"
TMP_DIR = ROOT / "tmp" / "pdfs"

DOCUMENTS = {
    "donation-drive-wishlist.pdf": (
        "REGI Donation Drive Wish List",
        "Printable supply wish list for Raptor Education Group, Inc.",
    ),
    "dont-feed-waterfowl-bread.pdf": (
        "Don't Feed Waterfowl Bread",
        "Wildlife education guide from Raptor Education Group, Inc.",
    ),
    "keep-cats-indoors.pdf": (
        "Keep Cats Indoors",
        "Wildlife education guide from Raptor Education Group, Inc.",
    ),
    "taking-flight-winter-2025.pdf": (
        "Taking Flight - Winter 2025",
        "The newsletter of Raptor Education Group, Inc.",
    ),
    "volunteer-application.pdf": (
        "REGI Volunteer Application",
        "Printable volunteer application for Raptor Education Group, Inc.",
    ),
    "volunteer-transporter-application.pdf": (
        "REGI Volunteer Transporter Application",
        "Printable volunteer transporter application for Raptor Education Group, Inc.",
    ),
}


def render_hashes(path: Path, output_dir: Path) -> list[str]:
    output_dir.mkdir(parents=True, exist_ok=True)
    pdf = pdfium.PdfDocument(path)
    hashes: list[str] = []
    for index in range(len(pdf)):
        image = pdf[index].render(scale=1).to_pil()
        output = output_dir / f"{path.stem}-{index + 1}.png"
        image.save(output)
        hashes.append(hashlib.sha256(output.read_bytes()).hexdigest())
    pdf.close()
    return hashes


def normalize(path: Path, title: str, subject: str) -> None:
    reader = PdfReader(io.BytesIO(path.read_bytes()))
    writer = PdfWriter(clone_from=reader)
    writer.add_metadata(
        {
            "/Title": title,
            "/Author": "Raptor Education Group, Inc.",
            "/Subject": subject,
            "/Keywords": "REGI, wildlife rehabilitation, bird education, Antigo Wisconsin",
            "/Creator": "Raptor Education Group, Inc.",
        }
    )
    temporary = path.with_suffix(".normalized.pdf")
    with temporary.open("wb") as handle:
        writer.write(handle)
    temporary.replace(path)


def main() -> None:
    if TMP_DIR.exists():
        shutil.rmtree(TMP_DIR)
    before_dir = TMP_DIR / "before"
    after_dir = TMP_DIR / "after"

    for filename, (title, subject) in DOCUMENTS.items():
        path = RESOURCE_DIR / filename
        before_reader = PdfReader(io.BytesIO(path.read_bytes()))
        before_text = "".join(page.extract_text() or "" for page in before_reader.pages)
        before_hashes = render_hashes(path, before_dir)

        normalize(path, title, subject)

        after_reader = PdfReader(io.BytesIO(path.read_bytes()))
        after_text = "".join(page.extract_text() or "" for page in after_reader.pages)
        after_hashes = render_hashes(path, after_dir)

        if len(before_reader.pages) != len(after_reader.pages):
            raise RuntimeError(f"Page count changed for {filename}")
        if before_text != after_text:
            raise RuntimeError(f"Extracted text changed for {filename}")
        if before_hashes != after_hashes:
            raise RuntimeError(f"Rendered pages changed for {filename}")

        print(f"Verified {filename}: {len(after_reader.pages)} page(s), visuals unchanged")

    shutil.rmtree(TMP_DIR)
    print("Removed temporary PDF renders")


if __name__ == "__main__":
    main()
