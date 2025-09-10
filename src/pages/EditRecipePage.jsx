import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'


function EditRecipePage() {
  const { mealId } = useParams();
  const navigate = useNavigate();

  // rename to recipeId
  const recipeId = Number(mealId);

  const [mealName, setMealName] = useState("");
  const [mealImage, setMealImage] = useState("");
  const [ingredients, setIngredients] = useState([
    { Ingredient_Name: "", Weight_g: "" }
  ]);

// gets recipe from local storage
  useEffect(() => {
    const raw = localStorage.getItem("userRecipes");
    const userRecipes = raw ? JSON.parse(raw) : [];

    const recipe = userRecipes.find((r) => String(r.Meal_ID) === String(mealId));

    if (recipe) {
      setMealName(recipe.Meal_Name);
      setIngredients(recipe.Ingredients.length ? recipe.Ingredients : [{ Ingredient_Name: "", Weight_g: "" }]);
      setMealImage(recipe.Image || "");
    } else {
      alert("Cannot edit built-in recipe.");
      navigate("/");
    }
  }, [mealId, navigate]);


// ingredient rows: add/remove/edit
  const addRow = () => {
    setIngredients((prev) => [...prev, { Ingredient_Name: "", Weight_g: "" }]);
  };

  const removeRow = (index) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  const updateRow = (index, field, value) => {
    setIngredients((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

// form sumbit 
  const handleSubmit = (e) => {
    e.preventDefault();

    const raw = localStorage.getItem("userRecipes");
    const current = raw ? JSON.parse(raw) : [];

    const updatedRecipe = {
      Meal_ID: recipeId,
      Meal_Name: mealName,
      Image: mealImage,
      Ingredients: ingredients
        .filter((i) => i.Ingredient_Name.trim() !== "")
        .map((i) => ({
          Ingredient_Name: i.Ingredient_Name,
          ...(i.Weight_g !== "" ? { Weight_g: Number(i.Weight_g) } : {}),
        })),
    };

    const newRecipes = current.map((r) => (String(r.Meal_ID) === String(recipeId) ? updatedRecipe : r));

    localStorage.setItem("userRecipes", JSON.stringify(newRecipes));
    navigate(`/recipes/${recipeId}`);
  };

// delete button function
  const handleDelete = () => {
    const raw = localStorage.getItem("userRecipes");
    const user = raw ? JSON.parse(raw) : [];
    const updated = user.filter((r) => r.Meal_ID !== recipeId);
    localStorage.setItem("userRecipes", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div style={{ padding: 16 }}>
      <h1 className='title'>Edit Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-details">
          <div className="recipe-details">
            <div style={{ marginBottom: 12 }}>
              <h2>Meal Name</h2>
              <input
                type="text"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
                style={{ display: "block", width: "100%", padding: 8 }}
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <h2>Ingredients</h2>
              {ingredients.map((ing, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <input
                    type="text"
                    placeholder="Ingredient name"
                    value={ing.Ingredient_Name}
                    onChange={(e) => updateRow(i, "Ingredient_Name", e.target.value)}
                    style={{ flex: 1, padding: 8 }}
                  />
                  <input
                    type="number"
                    placeholder="Weight (g)"
                    value={ing.Weight_g}
                    onChange={(e) => updateRow(i, "Weight_g", e.target.value)}
                    style={{ width: 140, padding: 8 }}
                    min="0"
                  />
                  <button type="button" onClick={() => removeRow(i)}>
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={addRow}>
                + Add ingredient
              </button>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <h2>Meal Image</h2>
            <div className="meal-image-box" onClick={() => document.getElementById("mealImageInput").click()}>
              {mealImage ? (
                <img src={mealImage} alt="Meal Preview" />
              ) : (
                <span className="plus-sign">+</span>
              )}
              <input
                id="mealImageInput"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => setMealImage(e.target.result);
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
          </div>
        </div>


        <div className='action-buttons'>
          <button type="submit" className='save-button'>
            Save Changes
          </button>
          <button type="button" onClick={handleDelete} className="delete-button" to="/">
            Delete Recipe
        </button>
      </div>
      </form>
    </div>
  );
}

export default EditRecipePage