import recipesData from "../assets/recipes.json"
import { useState } from "react";
import { Link } from "react-router-dom";

function BookPage() {

  const [recipes] = useState(recipesData);

  return (
    <div className="bookPage">
      <div className="header">
        <h1 className="title">All Recipes</h1>
      </div>

      <div className="grid">
        {recipes.map((meal) => (
          <div key={meal.Meal_ID} className="recipeCard">
            <h2 className="recipeCardTitle">{meal.Meal_Name}</h2>
            <p className="recipeCardId">ID: {meal.Meal_ID}</p>
            <img src="" alt={meal.Meal_Name}></img>
            <div className="recipeCardActions">
              <Link to={`/recipes/${meal.Meal_ID}`} className="recipeCardSeeFull">
                See full recipe
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookPage