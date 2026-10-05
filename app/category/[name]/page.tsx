import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, categorySlug, reviews } from "../../reviews";

export function generateStaticParams() {
  return categories.map((category) => ({ name: categorySlug(category) }));
}

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const category = categories.find((item) => categorySlug(item) === name);
  if (!category) notFound();
  const items = reviews.filter((review) => review.category === category);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[#8a3d2f]">Noted</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none">{category}</h1>
      <ul className="mt-10 grid gap-3">
        {items.map((review) => (
          <li key={review.slug}>
            <Link
              href={`/reviews/${review.slug}`}
              className="card block rounded-2xl border border-transparent bg-white px-5 py-4 shadow-[0_12px_30px_rgba(27,23,20,0.05)]"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl">{review.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
