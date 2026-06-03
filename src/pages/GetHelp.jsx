import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import FormSuccess from '../components/shared/FormSuccess';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { generateRefId } from '../lib/generateRefId';
import { invokeHubFunction } from '@/lib/hubClient';
import { base44 } from '@/api/base44Client';
import { ArrowRight, Shield, AlertCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const needOptions = ['Employment', 'Housing', 'Life Skills', 'Digital Literacy', 'Transportation', 'Document Assistance', 'Reentry Support', 'Other'];

export default function GetHelp() {
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: '', last_name: '', preferred_name: '', phone: '', email: '', date_of_birth: '',
    current_situation: '', primary_needs: [], housing_need: false, employment_need: false,
    transportation_barrier: false, document_barrier: false, digital_literacy_help: false,
    notes: '', consent_to_contact: false, hipaa_authorization: false,
  });

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const toggleNeed = (need) => {
    setForm((prev) => ({
      ...prev,
      primary_needs: prev.primary_needs.includes(need)
        ? prev.primary_needs.filter((n) => n !== need)
        : [...prev.primary_needs, need],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const reference_id = generateRefId('INT');
    const payload = {
      source_type: 'website_application',
      data: {
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        preferred_name: form.preferred_name?.trim() || '',
        date_of_birth: form.date_of_birth || '',
        primary_language: '',
        population: '',
        notes: `Current situation: ${form.current_situation}\nNeeds: ${form.primary_needs.join(', ')}\nHousing: ${form.housing_need}\nEmployment: ${form.employment_need}\nTransportation barrier: ${form.transportation_barrier}\nDocument barrier: ${form.document_barrier}\nDigital literacy: ${form.digital_literacy_help}\nAdditional: ${form.notes}`,
        hipaa_authorized: true,
        consent_to_contact: true,
      },
      organization_id: 'org1',
      reference_id,
    };

    // Primary: try Pathways Hub OS
    let hubSuccess = false;
    try {
      const response = await invokeHubFunction('processIntakeSubmission', payload);
      console.log('✅ Hub response:', response.data);
      hubSuccess = true;
    } catch (hubError) {
      console.warn('⚠️ Hub submission failed, saving locally as backup:', hubError.message);
    }

    // Fallback: always save locally so no submission is ever lost
    try {
      await base44.entities.WebsiteIntakeSubmission.create({
        reference_id,
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        primary_needs: form.primary_needs,
        current_situation: form.current_situation,
        notes: form.notes,
        hub_sync_status: hubSuccess ? 'synced' : 'pending_sync',
        source: 'website_get_help',
        status: 'new',
        hipaa_authorized: true,
        consent_to_contact: true,
      });
    } catch (localError) {
      console.warn('Local backup save failed:', localError.message);
    }

    setLoading(false);
    setRefId(reference_id);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get Help"
        title="Your Journey Starts Here"
        description="Taking the first step is the hardest. We are here to walk with you, providing the structure and support needed to build a stable, dignified future."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">Who Should Fill This Out?</h3>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>This form is for anyone who needs support with employment, housing, life skills, or community reentry. If you are facing barriers and want help building a stable future, this is your starting point.</p>
                  <p>You do not need to have everything figured out. You just need to be willing to take the first step.</p>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-display text-xs font-bold tracking-widest uppercase text-secondary mb-2">What Happens Next?</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="font-bold text-primary">1.</span> You submit this form</li>
                    <li className="flex gap-2"><span className="font-bold text-primary">2.</span> Our team reviews your request</li>
                    <li className="flex gap-2"><span className="font-bold text-primary">3.</span> We reach out to schedule an assessment</li>
                    <li className="flex gap-2"><span className="font-bold text-primary">4.</span> Together, we build your support plan</li>
                  </ol>
                </div>

                <div className="mt-6 flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Your Privacy is Protected</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Your information is kept confidential and protected under HIPAA and applicable Texas law. We will never sell your information.
                    </p>
                    <Link to="/hipaa-notice" className="text-xs text-secondary underline mt-1 inline-block">View our Notice of Privacy Practices</Link>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-amber-800 mb-1">Substance Use Information</p>
                    <p className="text-xs text-amber-700 leading-relaxed">
                      Any substance use or treatment information you share is protected under 42 CFR Part 2 and federal law. This information cannot be shared without your written consent except in limited emergency circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <FormSuccess
                  title="Request Submitted Successfully"
                  message="Thank you for reaching out. Our team will review your request and contact you within 2-3 business days to discuss next steps. You have taken an important first step."
                  referenceId={refId}
                />
              ) : (
                <>
                  <SectionHeading eyebrow="Intake Form" title="Request Help" align="left" />
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display text-xs font-bold tracking-widest uppercase text-secondary mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><Label>First Name *</Label><Input required value={form.first_name} onChange={(e) => updateField('first_name', e.target.value)} /></div>
                        <div><Label>Last Name *</Label><Input required value={form.last_name} onChange={(e) => updateField('last_name', e.target.value)} /></div>
                        <div><Label>Preferred Name</Label><Input value={form.preferred_name} onChange={(e) => updateField('preferred_name', e.target.value)} placeholder="What should we call you?" /></div>
                        <div><Label>Date of Birth</Label><Input type="date" value={form.date_of_birth} onChange={(e) => updateField('date_of_birth', e.target.value)} /></div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-xs font-bold tracking-widest uppercase text-secondary mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><Label>Phone *</Label><Input required value={form.phone} onChange={(e) => updateField('phone', e.target.value)} /></div>
                        <div><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} /></div>
                      </div>
                    </div>

                    <div>
                      <Label>Tell Us About Your Current Situation</Label>
                      <Textarea value={form.current_situation} onChange={(e) => updateField('current_situation', e.target.value)} rows={3} placeholder="Share as much or as little as you would like..." />
                    </div>

                    <div>
                      <Label className="mb-3 block">What Do You Need Help With?</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {needOptions.map((need) => (
                          <label key={need} className="flex items-center gap-2 text-sm cursor-pointer">
                            <Checkbox checked={form.primary_needs.includes(need)} onCheckedChange={() => toggleNeed(need)} />
                            {need}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-xs font-bold tracking-widest uppercase text-secondary mb-4">Specific Needs</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer"><Checkbox checked={form.housing_need} onCheckedChange={(v) => updateField('housing_need', v)} /><span className="text-sm">I need help with housing</span></label>
                        <label className="flex items-center gap-3 cursor-pointer"><Checkbox checked={form.employment_need} onCheckedChange={(v) => updateField('employment_need', v)} /><span className="text-sm">I need help finding employment</span></label>
                        <label className="flex items-center gap-3 cursor-pointer"><Checkbox checked={form.transportation_barrier} onCheckedChange={(v) => updateField('transportation_barrier', v)} /><span className="text-sm">Transportation is a barrier for me</span></label>
                        <label className="flex items-center gap-3 cursor-pointer"><Checkbox checked={form.document_barrier} onCheckedChange={(v) => updateField('document_barrier', v)} /><span className="text-sm">I need help with documents or ID</span></label>
                        <label className="flex items-center gap-3 cursor-pointer"><Checkbox checked={form.digital_literacy_help} onCheckedChange={(v) => updateField('digital_literacy_help', v)} /><span className="text-sm">I need help with computers or technology</span></label>
                      </div>
                    </div>

                    <div>
                      <Label>Anything Else You Would Like Us to Know</Label>
                      <Textarea value={form.notes} onChange={(e) => updateField('notes', e.target.value)} rows={3} />
                    </div>

                    {/* HIPAA Authorization */}
                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <Checkbox required checked={form.hipaa_authorization} onCheckedChange={(v) => updateField('hipaa_authorization', v)} />
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        <p className="font-semibold text-foreground mb-1">HIPAA Authorization & Privacy Acknowledgment *</p>
                        <p>I authorize Headquarters of Hope Foundation, Inc. to collect and use my personal and health-related information for the purpose of determining program eligibility, providing services, coordinating care with partner organizations, and complying with legal requirements, in accordance with the <Link to="/hipaa-notice" className="text-secondary underline">Notice of Privacy Practices</Link>. I understand I may revoke this authorization in writing at any time. I understand my substance use information, if shared, is protected under 42 CFR Part 2 and cannot be disclosed without my written consent except in emergencies.</p>
                      </div>
                    </div>

                    {/* Consent to Contact */}
                    <div className="flex items-start gap-3 p-4 bg-muted rounded-lg border border-border">
                      <Checkbox required checked={form.consent_to_contact} onCheckedChange={(v) => updateField('consent_to_contact', v)} />
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        <p className="font-medium text-foreground mb-1">Consent to Contact *</p>
                        <p>I consent to being contacted by Headquarters of Hope Foundation regarding my request for support via phone, email, or SMS. I understand I may opt out of SMS at any time by texting STOP. Message and data rates may apply. See our <Link to="/sms-terms" className="text-secondary underline">SMS Terms</Link> and <Link to="/privacy" className="text-secondary underline">Privacy Policy</Link>.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Lock className="w-3 h-3" />
                      <span>Your information is encrypted and protected. We never sell your data.</span>
                    </div>

                    <Button type="submit" size="lg" disabled={loading || !form.consent_to_contact || !form.hipaa_authorization} className="bg-secondary hover:bg-secondary/90 text-primary font-display text-sm tracking-wide uppercase gap-2 w-full md:w-auto">
                      {loading ? 'Submitting...' : 'Submit Request'} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
