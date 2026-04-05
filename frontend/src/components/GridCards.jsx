import React from "react";

export default function GridCards({ title, items = [], action }) {
  if (!items || !items.length) return null;

  return (
    <section className="container mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {action}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <article key={it._id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={it.cover || "https://picsum.photos/600/400?grayscale"}
              alt={it.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-4">
              {it.category && (
                <div className="text-xs text-blue-600 font-medium mb-1">
                  {typeof it.category === "object" ? it.category.name : it.category}
                </div>
              )}
              <h3 className="font-semibold">{it.title}</h3>
              {it.excerpt && (
                <p className="text-sm text-gray-600 line-clamp-2">{it.excerpt}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
