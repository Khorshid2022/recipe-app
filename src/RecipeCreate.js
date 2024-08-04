import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" value={recipe.name} onChange={handleChange} placeholder="Name" /></td>
            <td><input name="cuisine" value={recipe.cuisine} onChange={handleChange} placeholder="Cuisine" /></td>
            <td><input name="photo" value={recipe.photo} onChange={handleChange} placeholder="Photo URL" /></td>
            <td><textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Ingredients" /></td>
            <td><textarea name="preparation" value={recipe.preparation} onChange={handleChange} placeholder="Preparation" /></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
