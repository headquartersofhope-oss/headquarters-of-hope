import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppAssistant from "@/components/ai/AppAssistant";
import { useState } from "react";
import { X, Info } from "lucide-react";

function PreLaunchBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="bg-[#0A1628] border-b-2 border-[#C8962E] px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 pr-8">
        <Info className="w-5 h-5 text-[#C8962E] flex-shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-white text-sm leading-relaxed">
          <span className="font-bold text-[#C8962E]">Infrastructure Stage Notice:</span>{" "}
          Headquarters of Hope Foundation is currently in our infrastructure and funding stage.{" "}
          <span className="font-medium">We are not yet accepting residents or providing direct services.</span>{" "}
          If you submit a Get Help form, we will personally contact you when we are ready to serve.{" "}
          We are actively securing funding and building toward our first house opening.{" "}
          Thank you for your patience and support.
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-3 sm:top-1/2 sm:-translate-y-1/2 text-white/60 hover:text-white transition-colors"
          aria-label="Dismiss notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
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
