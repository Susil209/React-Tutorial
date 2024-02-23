/* eslint-disable react/prop-types */
import { recipes } from "./data.js";

// id, name, and ingredients

function List({ id, name, ingredients }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <List
          key={recipe.id}
          {...recipe}
        />
      ))}
    </div>
  );
}
