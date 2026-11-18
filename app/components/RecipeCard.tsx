
import { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <p>Cooking time: {recipe.minutes} minutes</p>
      <p>Cuisine: {recipe.cuisine}</p>
    </div>
  );
}
