import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function RecipePage() {
  const { mealId } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((builtin) => {
        const raw = localStorage.getItem("userRecipes");
        const user = raw ? JSON.parse(raw) : [];
        setRecipes([...(builtin || []), ...user]);
        setLoading(false);
      })
      .catch(() => {
        const raw = localStorage.getItem("userRecipes");
        const user = raw ? JSON.parse(raw) : [];
        setRecipes(user);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading…</h1>;
// convert params into number
  const recipeId = Number(mealId);
  const recipe = recipes.find((r) => r.Meal_ID === recipeId);

  if (!recipe) return <h1>Recipe not found</h1>;

  return (
    <div>
      <div  className='recipe-heading'>
        <h1 className='title'>{recipe.Meal_Name}</h1>
        <Link to={`/recipes/${recipe.Meal_ID}/edit`}>
          <img 
          src="/edit-icon.png" 
          alt="edit"
          className="edit-icon-img"
          />
        </Link>
      </div>
      <div className="recipePage-content">
        <div className="meal-image">
          {recipe.Image && (
            <div className="recipe-image">
              <img 
                src={recipe.Image} 
                alt={recipe.Meal_Name} 
                style={{ maxWidth: "300px", borderRadius: "12px", objectFit: "cover" }} 
              />
            </div>
          )}
        </div>
        <div className="ingredients-list">
        <ul>
          {recipe.Ingredients.map((ing, i) => (
            <li key={i}>
              {ing.Ingredient_Name}
              {ing.Weight_g ? ` (${ing.Weight_g}g)` : ""}
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="recipe-page-nav">
        <Link to="/">← Back to all recipes</Link>
      </div>



    </div>
  );
}

export default RecipePage;
