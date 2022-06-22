import React, { useState } from 'react';

function SearchForm({handleSubmit, handleChange, search}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
