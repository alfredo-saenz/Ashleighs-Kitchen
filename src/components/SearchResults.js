import React from 'react';

function SearchResults({ recipes }) {
	if (!recipes.length) {
		return <h3>Uhhhh..... hamburger</h3>;
	}
	return <div>{recipes.map((recipe) => {return<div>{recipe.recipe.label}
    <img src={recipe.recipe.image}/>
    </div>})}</div>;
}

export default SearchResults;
