"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "../lib/site-config";

type InquiryReason = {
  label: string;
  destination: string;
  guidance: string;
  include: string[];
  patientUpdate?: boolean;
  other?: boolean;
};

const inquiryReasons: Record<string, InquiryReason> = {
  "raptor-update": {
    label: "Update on a raptor's condition",
    destination: siteConfig.email.updates,
    guidance:
      "Patient care comes first, and an update may not be immediately available. Providing every detail below helps staff identify the correct bird without delaying treatment.",
    include: [
      "Patient or case number, if one was provided",
      "Species—or the best description you can give",
      "Date the bird arrived at REGI",
      "Exact location where the bird was found",
      "Name of the person who found or transported the bird",
      "What happened and any injuries that were observed",
    ],
    patientUpdate: true,
  },
  "other-bird-update": {
    label: "Update on a songbird or other bird's condition",
    destination: siteConfig.email.updates,
    guidance:
      "REGI may be caring for several similar birds at once. Complete the patient details below so the team can confidently match your request to the correct bird.",
    include: [
      "Patient or case number, if one was provided",
      "Species, size, colors, or other identifying details",
      "Date the bird arrived at REGI",
      "Exact location where the bird was found",
      "Name of the person who found or transported the bird",
      "What happened and any injuries that were observed",
    ],
    patientUpdate: true,
  },
  "clinical-question": {
    label: "Non-emergency clinical question",
    destination: siteConfig.email.updates,
    guidance:
      "This option is only for non-urgent questions. If a bird is injured, bleeding, unable to stand, or in immediate danger, call the clinic instead of using this form.",
    include: [
      "Species or a detailed description of the bird",
      "Your city and county",
      "What you observed and when it began",
      "What steps, if any, you have already taken",
    ],
  },
  "education-question": {
    label: "Education program question",
    destination: siteConfig.education.email,
    guidance:
      "Use this for program details, curriculum, accessibility, or general education questions—not to schedule a program or visit.",
    include: [
      "School, organization, or group name, if applicable",
      "Age range and approximate group size",
      "The program or topic you are asking about",
      "Any accessibility or accommodation questions",
    ],
  },
  "tour-question": {
    label: "Raptor Tour or visit question",
    destination: siteConfig.education.email,
    guidance:
      "This form cannot reserve or schedule a visit. Please use the Visit page for current tour information and booking; use this option only for a question not answered there.",
    include: [
      "The tour or visit information you reviewed",
      "Your question about access, policies, or an existing reservation",
      "Existing reservation name or date, if applicable",
    ],
  },
  "volunteer-question": {
    label: "Volunteer question",
    destination: siteConfig.email.volunteer,
    guidance:
      "Tell the volunteer team what role or opportunity interests you and enough about your availability to give you a useful answer.",
    include: [
      "Your age, if relevant to eligibility",
      "Area of interest",
      "General weekly or seasonal availability",
      "Relevant experience or required service hours",
    ],
  },
  "career-question": {
    label: "Career or internship question",
    destination: siteConfig.education.email,
    guidance:
      "Review the Careers & Internships page before contacting REGI. Use the application on that page when applying; this option is for questions the page does not answer.",
    include: [
      "The position or internship track",
      "School and program, if applicable",
      "Your specific question",
      "The application period or desired dates",
    ],
  },
  "donation-question": {
    label: "Donation, receipt, or adoption question",
    destination: siteConfig.education.email,
    guidance:
      "Do not include credit-card or bank information. Staff can help locate a gift or answer questions using non-sensitive transaction details.",
    include: [
      "Donor name and email used for the gift",
      "Approximate donation date and amount",
      "Type of gift or symbolic adoption",
      "Receipt or order number, if available",
    ],
  },
  "media-question": {
    label: "Media, research, or partnership inquiry",
    destination: siteConfig.education.email,
    guidance:
      "Please include your organization, intended audience, deadline, and the specific REGI expertise or participation you are requesting.",
    include: [
      "Organization and your role",
      "Topic and intended audience",
      "Requested interview, information, or participation",
      "Publication, event, or response deadline",
    ],
  },
  "website-question": {
    label: "Website or accessibility feedback",
    destination: siteConfig.education.email,
    guidance:
      "Describe where the issue occurred and what you were trying to do. Please do not include passwords or payment information.",
    include: [
      "Page name or web address",
      "Device and browser, if known",
      "What you expected to happen",
      "What happened instead",
    ],
  },
  other: {
    label: "Other non-emergency inquiry",
    destination: siteConfig.education.email,
    guidance:
      "Briefly explain what your inquiry concerns so it can be routed to the right person. Emergencies and scheduling requests should not be submitted here.",
    include: [
      "A clear description of the topic",
      "Any relevant dates, names, or reference numbers",
      "The specific question you would like REGI to answer",
    ],
    other: true,
  },
};

export function ContactInquiryForm() {
  const [reasonKey, setReasonKey] = useState("");
  const [status, setStatus] = useState("");
  const reason = inquiryReasons[reasonKey];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!reason) return;

    const data = new FormData(event.currentTarget);
    const patientDetails = reason.patientUpdate
      ? [
          `Patient or case number: ${data.get("patientNumber") || "Not provided"}`,
          `Species or description: ${data.get("species") || "Not provided"}`,
          `Date admitted: ${data.get("admissionDate") || "Not provided"}`,
          `Found at: ${data.get("foundLocation") || "Not provided"}`,
          `Finder or transporter: ${data.get("finderName") || "Not provided"}`,
          `Circumstances or observed injuries: ${data.get("patientCircumstances") || "Not provided"}`,
          "",
        ]
      : [];
    const otherDetails = reason.other
      ? [`Inquiry topic: ${data.get("otherReason") || "Not provided"}`, ""]
      : [];
    const subject = encodeURIComponent(`Website inquiry: ${reason.label}`);
    const body = encodeURIComponent(
      [
        `CONTACT REASON: ${reason.label}`,
        "",
        `Name: ${data.get("fullName")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "Not provided"}`,
        `Preferred response: ${data.get("responsePreference")}`,
        "",
        ...patientDetails,
        ...otherDetails,
        "MESSAGE",
        String(data.get("message") || ""),
      ].join("\n"),
    );

    setStatus(
      "Your inquiry is prepared. Review and send it in the email window that opens.",
    );
    window.location.href = `mailto:${reason.destination}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-inquiry-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <div>
          <p className="eyebrow">Non-emergency contact</p>
          <h2>Help us answer well.</h2>
        </div>
        <p>
          Submit education, non-emergency clinical, and patient-update
          questions here first. Please allow <strong>3–5 business days</strong>
          for a response before calling, so REGI&apos;s phone lines remain
          available for wildlife emergencies.
        </p>
      </div>

      <div className="contact-form-emergency-note" role="note">
        <strong>This form is not monitored for emergencies.</strong>
        <span>
          For an injured bird or immediate wildlife concern, call the clinic at{" "}
          <a href={siteConfig.clinic.phoneHref}>{siteConfig.clinic.phone}</a>.
          To schedule a visit, use the <a href="/visit">Visit REGI page</a>.
        </span>
      </div>

      <fieldset>
        <legend><span>01</span> Your inquiry</legend>
        <label className="contact-reason-field">
          <span>What can REGI help with?</span>
          <select
            name="reason"
            value={reasonKey}
            onChange={(event) => {
              setReasonKey(event.target.value);
              setStatus("");
            }}
            required
          >
            <option value="">Select a contact reason</option>
            {Object.entries(inquiryReasons).map(([value, item]) => (
              <option key={value} value={value}>{item.label}</option>
            ))}
          </select>
        </label>

        {reason && (
          <div className="contact-reason-guidance" aria-live="polite">
            <p>{reason.guidance}</p>
            <div>
              <strong>Include these details:</strong>
              <ul>
                {reason.include.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        )}

        {reason?.other && (
          <label className="contact-other-field">
            <span>Please explain the reason for your inquiry</span>
            <input name="otherReason" required placeholder="A short topic or description" />
          </label>
        )}
      </fieldset>

      <fieldset>
        <legend><span>02</span> Contact information</legend>
        <div className="contact-field-grid">
          <label><span>Full name</span><input name="fullName" autoComplete="name" required /></label>
          <label><span>Email address</span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>Phone <small>Optional</small></span><input name="phone" type="tel" autoComplete="tel" /></label>
          <label>
            <span>Preferred response</span>
            <select name="responsePreference" defaultValue="Email" required>
              <option>Email</option>
              <option>Phone</option>
              <option>Either</option>
            </select>
          </label>
        </div>
      </fieldset>

      {reason?.patientUpdate && (
        <fieldset className="contact-patient-fields">
          <legend><span>03</span> Help us identify the bird</legend>
          <p>Complete every field you can. These details are used to match your request to the correct patient.</p>
          <div className="contact-field-grid">
            <label><span>Patient or case number <small>If provided</small></span><input name="patientNumber" /></label>
            <label><span>Species or best description</span><input name="species" required /></label>
            <label><span>Date admitted or dropped off</span><input name="admissionDate" type="date" required /></label>
            <label><span>Finder or transporter&apos;s full name</span><input name="finderName" required /></label>
            <label className="contact-field-wide"><span>Exact location where the bird was found</span><input name="foundLocation" placeholder="Address, road, landmark, city, and county" required /></label>
            <label className="contact-field-wide"><span>What happened and what injuries were observed?</span><textarea name="patientCircumstances" rows={4} required /></label>
          </div>
        </fieldset>
      )}

      <fieldset>
        <legend><span>{reason?.patientUpdate ? "04" : "03"}</span> Your message</legend>
        <label className="contact-message-field">
          <span>Question or message</span>
          <textarea name="message" rows={7} required />
        </label>
      </fieldset>

      <div className="contact-form-consent">
        <label>
          <input name="acknowledgement" type="checkbox" required />
          <span>
            I understand this form is for non-emergency inquiries, does not
            schedule visits, and REGI may need 3–5 business days to respond.
          </span>
        </label>
      </div>

      <div className="contact-form-actions">
        <button className="button" type="submit">Prepare inquiry email</button>
        <p aria-live="polite">{status}</p>
      </div>
    </form>
  );
}
