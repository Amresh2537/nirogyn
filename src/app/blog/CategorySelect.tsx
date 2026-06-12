"use client";

import { useRouter } from "next/navigation";

interface CategorySelectProps {
  categories: string[];
  activeCategory: string;
  className?: string;
}

export default function CategorySelect({
  categories,
  activeCategory,
  className,
}: CategorySelectProps) {
  const router = useRouter();

  const handleChange = (value: string) => {
    if (value === "all") {
      router.push("/blog");
      return;
    }
    router.push(`/blog?category=${encodeURIComponent(value)}`);
  };

  return (
    <select
      name="category"
      value={activeCategory}
      onChange={(event) => handleChange(event.target.value)}
      className={className}
      aria-label="Filter blog category"
    >
      <option value="all">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}