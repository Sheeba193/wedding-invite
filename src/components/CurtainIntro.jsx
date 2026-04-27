import { motion } from "framer-motion";
import { useState } from "react";

export default function CurtainIntro({ onOpen }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      onOpen(); // move to next section
    }, 1500);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-burgundy flex items-center justify-center cursor-pointer"
      onClick={handleOpen}
    >
      {/* LEFT CURTAIN */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "-100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-1/2 bg-burgundy z-20 shadow-2xl"
      />

      {/* RIGHT CURTAIN */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-1/2 bg-burgundy z-20 shadow-2xl"
      />

      {/* CENTER TEXT */}
      <div className="z-10 text-center text-beige">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          You’re Invited
        </h1>
        <p className="text-lg opacity-80">Tap to open</p>
      </div>
    </div>
  );
}