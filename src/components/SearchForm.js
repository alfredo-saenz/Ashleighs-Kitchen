import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchForm({ handleSubmit, handleChange, search }) {
	return (
		<div>
			<form className='search-bar' onSubmit={handleSubmit}>
				<h1 className='logo'>
					Ashleigh's <span className='kitchen'>Kitchen</span>
				</h1>

				<input
					id='searchForm'
					type='text'
					name='search'
					required
					onChange={handleChange}
					value={search}
				/>
				{/* <Link to='component'> */}
					<button type='submit'>search</button>
				{/* </Link> */}
			</form>
		</div>
	);
}

export default SearchForm;
