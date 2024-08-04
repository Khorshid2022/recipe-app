import React from "react";

function Recipe({ recipe, deleteRecipe, index }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt={recipe.name} style={{width: "100%", height: "100%", objectFit: "scale-down"}} /></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
    </tr>
  );
}

export default Recipe;
