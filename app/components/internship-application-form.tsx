"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const DRAFT_KEY = "regi-internship-application-draft";

const fieldLabels: Record<string, string> = {
  fullName: "Full name",
  email: "Email",
  phone: "Phone",
  address: "Street address",
  city: "City",
  state: "State",
  postalCode: "ZIP code",
  school: "School or institution",
  program: "Program or field of study",
  graduation: "Expected graduation",
  track: "Preferred internship track",
  startDate: "Available start date",
  endDate: "Available end date",
  housing: "Onsite housing requested",
  academicCredit: "Seeking academic credit",
  driverLicense: "Valid driver's license",
  weekendAvailability: "Weekend availability",
  animalExperience: "Animal care or wildlife experience",
  educationExperience: "Teaching, outreach, or public-speaking experience",
  motivation: "Why REGI and this internship",
  learningGoals: "Learning goals",
  physicalWork: "Outdoor and physical-work readiness",
  referenceOne: "Reference 1",
  referenceTwo: "Reference 2",
  referenceThree: "Reference 3",
  resume: "Résumé file selected",
  coverLetter: "Cover-letter file selected",
};

function readableValue(value: FormDataEntryValue) {
  return value instanceof File ? value.name || "Not selected" : value;
}

export function InternshipApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (!saved || !formRef.current) return;

    let values: Record<string, string>;
    try {
      values = JSON.parse(saved) as Record<string, string>;
    } catch {
      localStorage.removeItem(DRAFT_KEY);
      return;
    }
    formRef.current.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[name]")
      .forEach((field) => {
        const value = values[field.name];
        if (value === undefined || field instanceof HTMLInputElement && field.type === "file") return;
        if (field instanceof HTMLInputElement && (field.type === "radio" || field.type === "checkbox")) {
          field.checked = value === field.value;
        } else {
          field.value = value;
        }
      });
  }, []);

  function saveDraft() {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const values: Record<string, string> = {};
    data.forEach((value, key) => {
      if (!(value instanceof File)) values[key] = value;
    });
    localStorage.setItem(DRAFT_KEY, JSON.stringify(values));
    setStatus("Draft saved on this device.");
  }

  function clearDraft() {
    formRef.current?.reset();
    localStorage.removeItem(DRAFT_KEY);
    setStatus("Saved draft cleared.");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "REGI INTERNSHIP APPLICATION",
      `Prepared ${new Date().toLocaleDateString()}`,
      "",
    ];

    for (const [key, value] of data.entries()) {
      if (key === "confirmation") continue;
      lines.push(`${fieldLabels[key] || key}:`);
      lines.push(String(readableValue(value)).trim() || "Not provided");
      lines.push("");
    }

    const file = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const download = document.createElement("a");
    const applicant = String(data.get("fullName") || "applicant").trim().replace(/[^a-z0-9]+/gi, "-").toLowerCase();
    download.href = url;
    download.download = `regi-internship-application-${applicant}.txt`;
    download.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);

    const track = String(data.get("track") || "internship");
    const subject = encodeURIComponent(`Internship Application — ${data.get("fullName")}`);
    const body = encodeURIComponent(
      `Hello Marge and Samantha,\n\nI completed the REGI ${track} internship application. My application file has been downloaded and I will attach it here with my résumé and cover letter.\n\nThank you,\n${data.get("fullName")}`,
    );
    localStorage.removeItem(DRAFT_KEY);
    setStatus("Application prepared. Attach the downloaded application, résumé, and cover letter in the email window that opens.");
    window.location.href = `mailto:marge@raptoreducationgroup.org?cc=samantha@raptoreducationgroup.org&subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="internship-application-form"
      id="internship-application"
      ref={formRef}
      onInput={saveDraft}
      onSubmit={handleSubmit}
    >
      <div className="application-form-intro">
        <div>
          <p className="eyebrow">On-site application</p>
          <h2>Tell us where you are—and where you hope to grow.</h2>
        </div>
        <p>
          Complete the form in one sitting or return on this device to continue
          a saved draft. Your information stays in this browser until you
          prepare the application email.
        </p>
      </div>

      <fieldset>
        <legend><span>01</span> Contact information</legend>
        <div className="application-field-grid">
          <label className="field-wide"><span>Full name</span><input name="fullName" autoComplete="name" required /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required /></label>
          <label className="field-wide"><span>Street address</span><input name="address" autoComplete="street-address" required /></label>
          <label><span>City</span><input name="city" autoComplete="address-level2" required /></label>
          <label><span>State</span><input name="state" autoComplete="address-level1" required /></label>
          <label><span>ZIP code</span><input name="postalCode" inputMode="numeric" autoComplete="postal-code" required /></label>
        </div>
      </fieldset>

      <fieldset>
        <legend><span>02</span> Education &amp; availability</legend>
        <div className="application-field-grid">
          <label><span>School or institution</span><input name="school" required /></label>
          <label><span>Program or field of study</span><input name="program" required /></label>
          <label><span>Expected graduation</span><input name="graduation" placeholder="Month and year" required /></label>
          <label><span>Available start date</span><input name="startDate" type="date" required /></label>
          <label><span>Available end date</span><input name="endDate" type="date" required /></label>
        </div>
        <div className="application-choice-grid">
          <fieldset>
            <legend>Preferred track</legend>
            <label><input name="track" type="radio" value="Avian rehabilitation" required /> Avian rehabilitation</label>
            <label><input name="track" type="radio" value="Wildlife education" required /> Wildlife education</label>
            <label><input name="track" type="radio" value="Open to either track" required /> Open to either</label>
          </fieldset>
          <fieldset>
            <legend>Practical planning</legend>
            <label><input name="housing" type="radio" value="Yes" required /> Onsite housing requested</label>
            <label><input name="housing" type="radio" value="No" required /> Housing not requested</label>
            <label><input name="academicCredit" type="checkbox" value="Yes" /> Seeking academic credit</label>
            <label><input name="driverLicense" type="checkbox" value="Yes" /> Valid driver&apos;s license</label>
            <label><input name="weekendAvailability" type="checkbox" value="Yes" /> Available for some weekends</label>
          </fieldset>
        </div>
      </fieldset>

      <fieldset>
        <legend><span>03</span> Experience &amp; goals</legend>
        <div className="application-long-fields">
          <label><span>Animal care, wildlife, laboratory, or clinical experience</span><textarea name="animalExperience" rows={5} required /></label>
          <label><span>Teaching, outreach, camp, customer-service, or public-speaking experience</span><textarea name="educationExperience" rows={5} required /></label>
          <label><span>Why are you interested in REGI and this internship?</span><textarea name="motivation" rows={6} required /></label>
          <label><span>What skills or understanding do you hope to develop?</span><textarea name="learningGoals" rows={5} required /></label>
          <label><span>Describe your comfort with physical work, outdoor conditions, cleaning, and variable daily tasks.</span><textarea name="physicalWork" rows={4} required /></label>
        </div>
      </fieldset>

      <fieldset>
        <legend><span>04</span> References &amp; materials</legend>
        <p className="application-field-note">For each reference, include name, relationship, email, and phone.</p>
        <div className="application-long-fields">
          <label><span>Reference 1</span><textarea name="referenceOne" rows={3} required /></label>
          <label><span>Reference 2</span><textarea name="referenceTwo" rows={3} required /></label>
          <label><span>Reference 3</span><textarea name="referenceThree" rows={3} required /></label>
        </div>
        <div className="application-field-grid application-file-grid">
          <label><span>Résumé</span><input name="resume" type="file" accept=".pdf,.doc,.docx" required /><small>You will attach this file when your email opens.</small></label>
          <label><span>Cover letter</span><input name="coverLetter" type="file" accept=".pdf,.doc,.docx" required /><small>You will attach this file when your email opens.</small></label>
        </div>
      </fieldset>

      <div className="application-confirmation">
        <label>
          <input name="confirmation" type="checkbox" required />
          <span>I confirm that the information provided is accurate and understand that preparing this application will open my email program for final review and sending.</span>
        </label>
      </div>

      <div className="application-form-actions">
        <button className="button" type="submit">Prepare application email</button>
        <button className="text-button" type="button" onClick={clearDraft}>Clear saved draft</button>
        <p aria-live="polite">{status}</p>
      </div>
    </form>
  );
}
