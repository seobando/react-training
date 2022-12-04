// styles
import { useState, useRef } from "react";

import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient,setNewIngedient] = useState('')
  const [ingredients,setIngredients] = useState([])
  const ingredientInput = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients,ing])
    }
    setNewIngedient('')
    ingredientInput.current.focus()
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients</span>
          <inpit 
            type="text" 
            onChange={(e)=>setNewIngedient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
          />
          <button onClick={handleAdd} className="btn">add</button>
        </label>
        <p>Current ingredients: {ingredients.map(i=><em key={i}>{i},</em>)}</p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  );
}
