import { Link } from 'react-router-dom';

export default function HipaaNotice() {
  const effectiveDate = 'July 24, 2025';
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="font-heading font-bold text-3xl text-primary mb-2">Notice of Privacy Practices</h1>
      <p className="text-sm text-muted-foreground mb-2">Effective Date: {effectiveDate}</p>
      <p className="text-sm text-muted-foreground mb-10">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="bg-primary/5 border-l-4 border-primary px-5 py-4 rounded-r-lg mb-10">
        <p className="text-sm font-medium text-primary leading-relaxed">
          THIS NOTICE DESCRIBES HOW INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">Who We Are</h2>
        <p className="text-sm text-foreground leading-relaxed">
          Headquarters of Hope Foundation, Inc. (&ldquo;HOH&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a Texas 501(c)(3) nonprofit organization providing transitional housing, employment readiness, life skills education, and supportive services to veterans, returning citizens, and foster youth aging out of the system. EIN: 39-3366072. We are committed to protecting the privacy of your health and personal information in accordance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and applicable Texas law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">Our Legal Duties</h2>
        <ul className="space-y-2 text-sm text-foreground leading-relaxed">
          <li className="pl-4 border-l-2 border-secondary">We are required by law to maintain the privacy of your protected health information (PHI).</li>
          <li className="pl-4 border-l-2 border-secondary">We are required to provide you with this Notice of our legal duties and privacy practices.</li>
          <li className="pl-4 border-l-2 border-secondary">We are required to abide by the terms of this Notice currently in effect.</li>
          <li className="pl-4 border-l-2 border-secondary">We reserve the right to change this Notice and to make the revised Notice effective for PHI we already have about you as well as any information we receive in the future.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">How We May Use and Disclose Your Information</h2>
        <p className="text-sm text-foreground leading-relaxed mb-4">The following describes the ways we may use and disclose your health and personal information:</p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Treatment and Program Services</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">We may use your information to provide, coordinate, or manage your participation in our programs including housing, employment readiness, life skills, and referral services. We may share your information with partner organizations, case managers, referral agencies, and service providers involved in your care and program participation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Program Operations</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">We may use your information for internal operations including quality improvement, staff training, compliance audits, and program evaluation. All such uses are limited to the minimum necessary to accomplish the purpose.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Required by Law</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">We may disclose your information when required by federal, state, or local law, including disclosures to law enforcement, courts, or regulatory agencies as legally required.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Public Health and Safety</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">We may disclose your information to prevent or lessen a serious and imminent threat to the health or safety of a person or the public, to the extent permitted by applicable law.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Grant Reporting and Funding Compliance</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">We may use de-identified or aggregated information for grant reporting and outcomes tracking. We will not disclose individually identifiable information to funders without your written authorization.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">42 CFR Part 2 — Substance Use Disorder Records</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-4">
          <p className="text-sm font-semibold text-amber-900 mb-2">Special Protections for Substance Use Disorder Information</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Federal law (42 CFR Part 2) provides special protections for records related to substance use disorder treatment, referral, or diagnosis. If you share information about substance use or treatment with us, this information is protected by federal law and CANNOT be disclosed without your written consent EXCEPT in the following limited circumstances: (1) as permitted by your written consent; (2) as allowed by a court order; (3) to medical personnel in a medical emergency; (4) to qualified personnel for research, audit, or program evaluation. Violation of the federal law is a crime. Suspected violations may be reported to appropriate authorities.
          </p>
        </div>
        <p className="text-sm text-foreground leading-relaxed">
          HOH does not operate a federally-assisted substance use disorder treatment program. However, if you voluntarily share substance use history or treatment information with us as part of your intake or program participation, we will treat that information with the highest level of protection consistent with 42 CFR Part 2 principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">Uses and Disclosures Requiring Your Written Authorization</h2>
        <p className="text-sm text-foreground leading-relaxed mb-3">We will obtain your written authorization before using or disclosing your information for purposes not described in this Notice, including:</p>
        <ul className="space-y-2 text-sm text-foreground leading-relaxed">
          <li className="pl-4 border-l-2 border-secondary">Marketing purposes</li>
          <li className="pl-4 border-l-2 border-secondary">Sale of your information</li>
          <li className="pl-4 border-l-2 border-secondary">Psychotherapy notes (if applicable)</li>
          <li className="pl-4 border-l-2 border-secondary">Sharing with media or publishing your story</li>
          <li className="pl-4 border-l-2 border-secondary">Any other use not permitted by law without consent</li>
        </ul>
        <p className="text-sm text-foreground leading-relaxed mt-3">You may revoke your authorization in writing at any time, except to the extent that we have already taken action in reliance on it.</p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">Your Rights Regarding Your Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Right to Access and Copy</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">You have the right to inspect and obtain a copy of your records maintained by HOH. We will respond to your request within 30 days. We may charge a reasonable fee for copies.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Right to Amend</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">If you believe your information is incorrect or incomplete, you may request an amendment. We will respond within 60 days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Right to an Accounting of Disclosures</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">You have the right to request a list of certain disclosures we have made of your information, covering up to six years prior to your request.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Right to Request Restrictions</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">You may request that we restrict certain uses or disclosures of your information. We are not required to agree to your request, but if we do, we will comply with it.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary mb-1">Right to a Paper Copy of This Notice</h3>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-secondary">You may request a paper copy of this Notice at any time, even if you have agreed to receive it electronically.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">How to File a Complaint</h2>
        <p className="text-sm text-foreground leading-relaxed mb-3">
          If you believe your privacy rights have been violated, you may file a complaint with HOH or with the U.S. Department of Health and Human Services (HHS). You will not be retaliated against for filing a complaint.
        </p>
        <div className="space-y-2 text-sm text-foreground">
          <p><strong>File with HOH:</strong></p>
          <p className="pl-4">
            Headquarters of Hope Foundation, Inc. &mdash; Attn: Privacy Officer<br />
            Phone: <a href="tel:7372558355" className="text-secondary underline">737-255-8355</a><br />
            Email: <a href="mailto:info@headquartersofhope.org" className="text-secondary underline">info@headquartersofhope.org</a>
          </p>
          <p className="mt-3"><strong>File with HHS Office for Civil Rights:</strong></p>
          <p className="pl-4">
            U.S. Department of Health and Human Services<br />
            <a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/" target="_blank" rel="noreferrer" className="text-secondary underline">www.hhs.gov/ocr/privacy/hipaa/complaints/</a><br />
            Toll-Free: 1-800-368-1019
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-primary mb-3">Contact Our Privacy Officer</h2>
        <div className="text-sm text-foreground space-y-1">
          <p><strong>Headquarters of Hope Foundation, Inc.</strong></p>
          <p>Privacy Officer: Rodney E. Jones, Executive Director</p>
          <p>Phone: <a href="tel:7372558355" className="text-secondary underline">737-255-8355</a></p>
          <p>Email: <a href="mailto:info@headquartersofhope.org" className="text-secondary underline">info@headquartersofhope.org</a></p>
          <p>EIN: 39-3366072 | Texas 501(c)(3) Public Charity</p>
        </div>
      </section>

      <div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground">
        <p>This Notice of Privacy Practices is effective as of {effectiveDate}. We reserve the right to change this Notice at any time. The current version will always be posted on our website at <Link to="/hipaa-notice" className="text-secondary underline">headquartersofhope.org/hipaa-notice</Link>.</p>
      </div>
    </div>
  );
}
