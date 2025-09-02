import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipePage() {
  const { mealId } = useParams(); // route should be /recipes/:mealId
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load recipes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading…</h1>;

  const recipe = recipes.find((r) => r.Meal_ID === mealId);

  if (!recipe) return <h1>Recipe not found</h1>;

  return (
    <div>
      <h1>{recipe.Meal_Name}</h1>

      <ul>
        {recipe.Ingredients.map((ing, i) => (
          <li key={i}>
            {ing.Ingredient_Name}
            {ing.Weight_g ? ` (${ing.Weight_g}g)` : ""}
          </li>
        ))}
      </ul>

      <Link to="/">← Back to all recipes</Link>
    </div>
  );
}

export default RecipePage;
