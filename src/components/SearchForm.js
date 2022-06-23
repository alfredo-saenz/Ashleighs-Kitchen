import React, { useState } from 'react';

function SearchForm({handleSubmit, handleChange, search}) {
    return (
        <div>
            <form className='search-bar' onSubmit={handleSubmit}>
            
                <h1 className='logo'>Ashleigh's <span className='kitchen'>Kitchen</span></h1>
                <input
                type="text"
                name='search'
                required
                onChange={handleChange}
                value = {search}
                />
                <button type='submit'>search</button>

            </form>

        </div>
    );
}

export default SearchForm;
