import Link from "next/link";
import { getPublishedIngredients } from "@/lib/ingredients";

export default async function Ingredients() {
  const ingredients = (await getPublishedIngredients()).slice(0, 6);

  return (
    <section className="ingredients-section" id="ingredients">
      <div className="ingredients-inner">
        <div className="ingredients-header-row">
          <div>
            <h2 className="ingredients-title">Learn about Super Ingredients</h2>
            <p className="ingredients-subtitle">
              Learn about key ingredients, their benefits, dosage, sources and side effects.
            </p>
          </div>
          <Link href="/ingredients" className="ingredients-link">
            Explore All Ingredients →
          </Link>
        </div>

        <div className="ingredients-grid-clean">
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <Link
                href={`/ingredients/${ingredient.slug}`}
                className="ingredient-clean-card"
                key={ingredient.id}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    ingredient.featuredImage ||
                    `/images/ingredients/${ingredient.slug}.jpeg`
                  }
                  alt={ingredient.featuredImageAlt || ingredient.title}
                  className="ingredient-clean-image"
                />
                <div className="ingredient-clean-body">
                  <h3 className="ingredient-clean-title">{ingredient.title}</h3>
                  <p className="ingredient-clean-desc">{ingredient.excerpt}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="ingredients-subtitle">Ingredient guides coming soon.</p>
          )}
        </div>
      </div>
    </section>
  );
}
