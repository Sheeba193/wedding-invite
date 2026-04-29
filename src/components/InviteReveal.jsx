import { useState } from "react";
import confetti from "canvas-confetti";

export default function InviteReveal() {
  const [opened, setOpened] = useState(false);
  const [showScratch, setShowScratch] = useState(false);

  const handleAccept = () => {
    setOpened(true);

    // 🎉 CENTER CONFETTI BURST
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });

    // extra cinematic burst
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 160,
        origin: { x: 0.5, y: 0.4 },
      });
    }, 300);

    // ⏳ transition to next page after animation
    setTimeout(() => {
      setShowScratch(true);
    }, 1800);
  };

  return (
    
    <section className="section relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="petals"></div>

      <div className="relative flex flex-col items-center justify-center text-center gap-6">

        {/* 💌 ENVELOPE */}
        {!showScratch && (
          <div className={`envelope transition-all duration-700 ${opened ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>

            {!opened && (
              <>
                <h1 className="script mb-4">
                  Join us for the celebration of love and laughter!
                </h1>

                <h2 className="names">
                  Faith Chepkirui
                </h2>

                <h2 className="and">
                  and
                </h2>
                <h2 className="names">
                  Benard Langat
                </h2>
                <h2 className="invite-text">
                  are getting married!
                </h2>
                

                <button onClick={handleAccept} className="invite-btn">
                  Accept Invitation 💌
                </button>
              </>
            )}

          </div>
        )}

        {/* ✨ SCRATCH PAGE */}
        {showScratch && (
          <div className="scratch-page fade-in">
            <h2 className="script text-2xl mb-6">
              SAVE THE DATE
            </h2>

            <div className="scratch-card">
             15th December 2026
            </div>
          </div>
        )}

      </div>

    </section>

  );
}