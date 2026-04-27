import { useState } from "react";
import "./curtain.css";

export default function CurtainIntro({ onOpen }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);

    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div className="curtain-wrapper" onClick={handleClick}>
      
      {/* CENTER TEXT */}
      <div className="curtain-center">
        <h1>We have a big Announcement!</h1>
        <p>Tap to open</p>
      </div>

      {/* CURTAINS */}
      <div className={`curtainBody ${open ? "open" : ""}`}>
        
        {/* LEFT */}
        <div className="curtainContainer leftCurtain">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="unCurtain"></div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="curtainContainer rightCurtain">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="unCurtain"></div>
          ))}
        </div>

        <div className="overlay"></div>
      </div>
    </div>
  );
}