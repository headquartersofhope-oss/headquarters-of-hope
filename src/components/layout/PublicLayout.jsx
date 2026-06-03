import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppAssistant from "@/components/ai/AppAssistant";
import { useState } from "react";
import { X, Info, CheckCircle } from "lucide-react";

function PreLaunchBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="bg-[#0A1628] border-b-2 border-[#C8962E] px-4 py-4 relative">
      <div className="max-w-7xl mx-auto pr-8">
        <div className="flex items-start gap-3 mb-3">
          <Info className="w-5 h-5 text-[#C8962E] flex-shrink-0 mt-0.5" />
          <p className="text-white text-sm leading-relaxed">
            <span className="font-bold text-[#C8962E]">Building Phase Notice — </span>
            Headquarters of Hope Foundation is actively building our infrastructure and securing funding.{" "}
            <span className="font-semibold">We are not yet accepting residents or providing direct client services.</span>{" "}
            If you submit a Get Help form, you are joining our waitlist — we will contact you personally when we are ready to serve.
          </p>
        </div>
        <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            "✅ Accepting donations — 100% go to HOH",
            "✅ Partnering with employers now",
            "✅ Partnering with resource providers now",
            "✅ Partnering with referral agencies now",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-[#C8962E] text-xs font-semibold leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <p className="ml-8 mt-2 text-white/60 text-xs">
          Employer partners, resource providers, volunteers, and donors — your forms are reviewed and responded to promptly. Thank you for helping us build.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-3 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss notice"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PreLaunchBanner />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
      <AppAssistant />
    </div>
  );
}
