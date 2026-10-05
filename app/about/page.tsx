export const metadata = { title: "About — Noted" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[#8a3d2f]">About</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
        A review should match the photograph.
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-[#5e564e]">
        <p>
          Noted writes only about what a picture actually contains. A ward is called a ward. A guest room is called a guest room. A classroom is not called a hotel.
        </p>
        <p>There are twenty notes: four restaurants, four schools, four universities, four hospitals, and four hotels.</p>
      </div>
    </main>
  );
}
