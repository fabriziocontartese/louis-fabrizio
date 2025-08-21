import { Link, useParams } from "react-router-dom";

function RecipePage() {
  const { Meal_ID, Meal_Name } = useParams();

  return (
    <>
      <Link to="/">Back to Home</Link>
      <h1>Recipe for {Meal_Name}</h1>
      <Link to={`/recipes/${Meal_ID}/edit`} className="recipeCardEdit">
        Edit
      </Link>
    </>
  );
}

export default RecipePage;

