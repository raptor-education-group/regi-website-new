"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { siteConfig } from "../lib/site-config";

type NavItem = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  href: string;
  activePaths: string[];
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    activePaths: ["/about", "/staff", "/board", "/careers"],
    items: [
      { label: "About REGI", href: "/about" },
      { label: "Meet the staff", href: "/staff" },
      { label: "Our board", href: "/board" },
      { label: "Careers & internships", href: "/careers" },
    ],
  },
  {
    label: "Bird Assistance",
    href: "/rescue",
    activePaths: ["/rescue"],
    items: [
      { label: "Injured bird help", href: "/rescue" },
      { label: "Handling injured raptors", href: "/rescue#safe-recovery" },
      { label: "Injured songbird help", href: "/rescue/songbirds" },
      { label: "Found a baby bird?", href: "/rescue/baby-birds" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    activePaths: ["/education", "/ambassadors", "/newsletter"],
    items: [
      { label: "Education at REGI", href: "/education" },
      { label: "Raptor programs", href: "/education#programs" },
      { label: "Avian ambassadors", href: "/ambassadors" },
      {
        label: "Newsletter",
        href: "/newsletter",
      },
    ],
  },
  {
    label: "Visit REGI",
    href: "/visit",
    activePaths: ["/visit", "/summer-camp"],
    items: [
      { label: "Plan your visit", href: "/visit" },
      { label: "Seasonal Raptor Tours", href: "/visit#raptor-tours" },
      { label: "Owl-O-Ween Tours", href: "/visit#owl-o-ween" },
      { label: "Raptor Adventures Summer Camp", href: "/summer-camp" },
    ],
  },
  {
    label: "Make a Difference",
    href: "/make-a-difference",
    activePaths: ["/make-a-difference", "/resources", "/protect-wildlife"],
    items: [
      { label: "Ways to make a difference", href: "/make-a-difference" },
      { label: "Apply to volunteer", href: "/make-a-difference#volunteer" },
      { label: "Clinical & education internships", href: "/careers#internships" },
      { label: "Going lead free", href: "/make-a-difference#lead-free" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    label: "Support",
    href: "/support",
    activePaths: ["/support", "/adopt-a-bird", "/giving-tuesday", "/shop", "/cart"],
    items: [
      { label: "Donate", href: "/support" },
      {
        label: "Adopt a bird",
        href: "/adopt-a-bird",
      },
      {
        label: "GivingTuesday",
        href: "/giving-tuesday",
      },
      {
        label: "Gift shop",
        href: "/shop",
      },
    ],
  },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

function NavLink({ item, className }: { item: NavItem; className?: string }) {
  if (isExternal(item.href)) {
    return (
      <a className={className} href={item.href}>
        {item.label}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const closeMenus = useCallback(() => {
    document.body.classList.remove("menu-open");
    headerRef.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((menu) => menu.removeAttribute("open"));
  }, []);

  useEffect(() => {
    closeMenus();
  }, [pathname, closeMenus]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node) || !headerRef.current?.contains(target)) {
        closeMenus();
        return;
      }

      headerRef.current
        .querySelectorAll<HTMLDetailsElement>(".nav-disclosure[open]")
        .forEach((menu) => {
          if (!menu.contains(target)) menu.removeAttribute("open");
        });
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      closeMenus();
      headerRef.current
        ?.querySelector<HTMLElement>(".nav-disclosure summary, .menu-toggle")
        ?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [closeMenus]);

  return (
    <>
      <div className="emergency-bar">
        <div className="shell emergency-inner">
          <p>
            <span className="pulse-dot" aria-hidden="true" />
            Found an injured bird?
          </p>
          <Link href="/rescue">
            Get help now · <strong>{siteConfig.clinic.phone}</strong>
          </Link>
        </div>
      </div>

      <header className="site-header" ref={headerRef}>
        <div className="shell header-inner">
          <Link className="brand" href="/">
            <Image
              src="/images/regi-logo.png"
              alt=""
              width={152}
              height={96}
              priority
            />
            <span>
              <strong>Raptor Education Group Inc.</strong>
              <small>Antigo, Wisconsin</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navGroups.map((group) => {
              const isActive = group.activePaths.some(
                (path) => pathname === path || pathname.startsWith(`${path}/`),
              );

              return (
                <div
                  className={`nav-group${isActive ? " active" : ""}`}
                  key={group.label}
                >
                  <Link className="nav-group-link" href={group.href}>{group.label}</Link>
                  <details className="nav-disclosure" name="main-navigation">
                    <summary aria-label={`Open ${group.label} menu`}>
                      <span aria-hidden="true">+</span>
                    </summary>
                    <div className="nav-dropdown">
                      <p>{group.label}</p>
                      {group.items.map((item) => (
                        <NavLink item={item} key={item.href + item.label} />
                      ))}
                    </div>
                  </details>
                </div>
              );
            })}
          </nav>

          <Link
            className={`header-contact${pathname === "/contact" ? " active" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
          <Link className="button button-small header-donate" href="/support">
            Donate
            <span aria-hidden="true">→</span>
          </Link>

          <details
            className="mobile-menu"
            onToggle={(event) =>
              document.body.classList.toggle(
                "menu-open",
                event.currentTarget.open,
              )
            }
          >
            <summary className="menu-toggle" aria-label="Navigation menu">
              <span />
              <span />
            </summary>
            <div className="mobile-panel">
              <nav aria-label="Mobile navigation">
                {navGroups.map((group, index) => (
                  <div className="mobile-nav-group" key={group.label}>
                    <Link className="mobile-nav-heading" href={group.href}>
                      <span>0{index + 1}</span>
                      {group.label}
                    </Link>
                    <div>
                      {group.items.map((item) => (
                        <NavLink item={item} key={item.href + item.label} />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="mobile-action-row">
                  <Link className="mobile-contact" href="/contact">
                    Contact us
                  </Link>
                  <Link className="mobile-donate" href="/support">
                    Donate <span>→</span>
                  </Link>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
