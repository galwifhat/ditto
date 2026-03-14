export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-4">
      <span className="text-8xl mb-6">🌿</span>
      <h1 className="text-4xl font-bold text-foreground mb-3">
        Page Not Found
      </h1>
      <p className="text-muted-foreground mb-8">
        Looks like this page went looking for moisture somewhere else.
      </p>
      <a
        href="/"
        className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </a>
    </main>
  );
}
