import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewRecipePage() {
  const navigate = useNavigate();

  const [mealId, setMealId] = useState("");
  const [mealName, setMealName] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // very basic shape — you control the ID & name
    const newRecipe = {
      Meal_ID: mealId,
      Meal_Name: mealName,
      Ingredients: ingredients
        .filter((i) => i.Ingredient_Name.trim() !== "")
        .map((i) => ({
          Ingredient_Name: i.Ingredient_Name,
          ...(i.Weight_g !== "" ? { Weight_g: Number(i.Weight_g) } : {}),
        })),
    };

    // save to localStorage (can't write to /public/recipes.json from the browser)
    const raw = localStorage.getItem("userRecipes");
    const current = raw ? JSON.parse(raw) : [];
    localStorage.setItem("userRecipes", JSON.stringify([...current, newRecipe]));

    // go to the recipe page
    navigate(`/recipes/${mealId}`);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>New Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Meal ID</label>
          <input
            type="text"
            value={mealId}
            onChange={(e) => setMealId(e.target.value)}
            placeholder="e.g. 03"
            style={{ display: "block", width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Meal Name</label>
          <input
            type="text"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="e.g. Lasagna"
            style={{ display: "block", width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <h3>Ingredients</h3>
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

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
