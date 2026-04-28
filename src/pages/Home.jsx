import { useState } from "react";
import CurtainIntro from "@/components/CurtainIntro";
import InviteReveal from "@/components/InviteReveal";

export default function Home() {
  const [showInvite, setShowInvite] = useState(false);

  return (
    <div>
      {!showInvite ? (
        <CurtainIntro onOpen={() => setShowInvite(true)} />
      ) : (
        <InviteReveal />
      )}
    </div>
  );
}