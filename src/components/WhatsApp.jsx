
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "919477110367";

  const handleWhatsApp = () => {
    const message =
      "Hello TravelNext! I would like to know more about your travel packages and services.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[100] flex items-center gap-3">

      {/* TOOLTIP */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative bg-white shadow-xl rounded-2xl px-4 py-3 border border-slate-100 hidden sm:block"
        >
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-800 text-white rounded-full flex items-center justify-center"
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>

          <p className="text-slate-900 text-xs font-black">
            Need Travel Assistance?
          </p>

          <p className="text-slate-400 text-[10px] mt-1">
            Chat with us on WhatsApp
          </p>
        </motion.div>
      )}

      {/* WHATSAPP BUTTON */}
      <motion.button
        onClick={handleWhatsApp}
        aria-label="Chat with TravelNext on WhatsApp"
        title="Chat with us on WhatsApp"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/40 flex items-center justify-center"
      >
        {/* PULSE EFFECT */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />

        <MessageCircle size={32} className="relative z-10" />
      </motion.button>
    </div>
  );
}
