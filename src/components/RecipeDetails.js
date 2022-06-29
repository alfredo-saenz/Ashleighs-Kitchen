import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function RecipeDetails(props) {
	// const [recipeDet, setRecipeDet] = useState(null)
	// const { id } = useParams();
	// const searchOptionsDetails = {
	// 	key: process.env.REACT_APP_EDAMAM_KEY,
	// 	limit: 25,
	// 	api: 'https://api.edamam.com',
	// 	endpoint: '/api/recipes/v2',
	// 	appID: '6a8184b2',
	// };
	// const url2 = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${searchOptionsDetails.appID}app_key=${searchOptionsDetails.key}`;

	// `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=6a8184b2&app_key=62a5a405e361a6061d328aaa1c86a04c`;
	useEffect(() => {
  fetch(
		`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=6a8184b2&app_key=62a5a405e361a6061d328aaa1c86a04c`
	)
		.then((res) => res.json())
		.then((json) => {
			setRecipeDet(json);
		})
		.catch(console.error);
}, []);

	if (!recipeDet) {
	return <p>Loading...</p>;
}

	return (
		<div className='details-container'>
			<>
				<header>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<h1 className='top-logo'>Ashleigh's Kitchen</h1>
					</Link>
				</header>
				<div className='recipe-details'>
					<img className='image-details' src={recipeDet.recipe.images.LARGE.url} />
					<div className='ingredient-list'>

					<h3 className='recipe-label'>{recipeDet.recipe.label}</h3>
					{recipeDet.recipe.ingredientLines.map((ingredient) => {
						return (
							<ul >
								<li>{ingredient}</li>
							</ul>
						)
					})}
					</div>

				</div>
			</>
		</div>
	);
}

export default RecipeDetails;
