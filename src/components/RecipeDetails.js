import React, { useEffect } from 'react';

function RecipeDetails(props) {
    const [recipe, setRecipe] = useEffect(null);

    useEffect(() => {
        fetch(`/api/recipes/v2/${recipeID}?type=public&app_id=6a8184b2&app_key=62a5a405e361a6061d328aaa1c86a04c`)
        .then((res) => res.json())
        .then((json) => {
            setRecipe(json)
        }, [])
    })
    return (
        <div className='details-container'>
            <img src="" alt="" />
            <div className='recipe'>
                <h3>Recipe Name</h3>
                <p>Recipe Ingredients</p>
                <p>Instructions On how to make recipe</p>
            </div>

        </div>
    );
}

export default RecipeDetails;
