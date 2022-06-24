import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ recipes }) {
	if (!recipes.length) {
		return <h3>Nothing to Display</h3>;
	}

	return (
		<div className='recipe-container'>
			{recipes.map((recipe) => {
				let re = new RegExp('v2/([a-z0-9]*)', 'i');
				let matchResult = recipe._links.self.href.match(re);
				// console.log()
				const recipeID = matchResult[1];
				return (
					<Link to={`details/${recipeID}`} key={recipeID} style={{ textDecoration: 'none', color: 'white' }}>
						<div className='cardbox'>
							<h1 className='label'>{recipe.recipe.label}</h1>
							<img src={recipe.recipe.image} />
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default SearchResults;
