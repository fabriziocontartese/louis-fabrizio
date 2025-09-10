import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewRecipePage() {
  const navigate = useNavigate();

  const [mealName, setMealName] = useState("");
  const [mealImage, setMealImage] = useState("");
  const [ingredients, setIngredients] = useState([
    { Ingredient_Name: "", Weight_g: "" },
  ]);

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



  const handleSubmit = async (e) => {
    e.preventDefault();

    // load user recipes
    const raw = localStorage.getItem("userRecipes");
    const current = raw ? JSON.parse(raw) : [];

    // load database recipes
    let builtin = [];
      try {
        const res = await fetch("/recipes.json");
        builtin = await res.json();
      } catch {
        builtin = [];
      }

    // all recipes
    const allRecipes = [...builtin, ...current];

    // generate ID
    const maxId = allRecipes.reduce((max, r) => Math.max(max, r.Meal_ID), 0);
    const newId = maxId + 1;

    // new recipe onject
    const newRecipe = {
      Meal_ID: newId,
      Meal_Name: mealName,
      Image: mealImage,
      Ingredients: ingredients
        .filter((i) => i.Ingredient_Name.trim() !== "")
        .map((i) => ({
          Ingredient_Name: i.Ingredient_Name,
          ...(i.Weight_g !== "" ? { Weight_g: Number(i.Weight_g) } : {}),
        })),
    };


    // save to localStorage (can't write to /public/recipes.json from the browser)
    localStorage.setItem("userRecipes", JSON.stringify([...current, newRecipe]));

    // go to the recipe page
    navigate(`/recipes/${newId}`);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1 className="title">New Recipe</h1>

      <form onSubmit={handleSubmit}>
      <div className="form-details">
        <div className="recipe-details">
          <div style={{ marginBottom: 12 }}>
            <h2>Meal Name</h2>
            <input
              type="text"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
              placeholder="e.g. Lasagna"
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
                  onChange={(e) =>
                    updateRow(i, "Ingredient_Name", e.target.value)
                  }
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
          <button type="submit" className="save-button">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
