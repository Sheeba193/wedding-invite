export default function InviteReveal() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[var(--color-surface)] text-center">
      
      <div className="glass p-10 max-w-xl w-full animate-fade-up">
        
        <p className="script text-3xl text-[var(--color-highlight)] mb-4">
          Together with their families
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-primary)]">
          Faith Chepkirui
        </h2>

        <p className="my-3 text-muted-foreground">and</p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-primary)] mb-6">
          Benard Langat
        </h2>

        <div className="divider"></div>

        <p className="text-lg text-[var(--color-muted-foreground)] mt-4">
          joyfully invite you to celebrate their wedding
        </p>

        <p className="mt-6 text-sm tracking-wide text-[var(--color-highlight)]">
          Dansed, Kericho
        </p>

      </div>
    </div>
  );
}