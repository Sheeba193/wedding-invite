
export default function InviteReveal() {
  return (
    <div className="section relative">

      {/* BACKGROUND GLOW */}
      <div className="glow-bg"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-md w-full">

        <p className="script text-3xl mb-6">
          Together with their families
        </p>

        {/* IMAGE */}
        {/* <div className="width-50% height-50% flex justify-center mb-6">
          <img
            src={couple}
            className="w-40 h-40 object-cover rounded-full border-2 border-[#b76e79]"
          />
        </div> */}

        {/* NAMES */}
        <h1 className="text-4xl font-semibold">
          Faith Chepkirui
        </h1>

        <p className="text-[#b76e79] tracking-[0.4em] my-3 text-xs">
          AND
        </p>

        <h1 className="text-4xl font-semibold mb-6">
          Benard Langat
        </h1>

        {/* INVITE TEXT */}
        <p className="text-lg opacity-90 mb-4">
          You are warmly invited to celebrate our wedding
        </p>

        <p className="text-xs tracking-[0.4em] text-[#b76e79]">
          Dansed, Kericho
        </p>

      </div>
    </div>
  );
}