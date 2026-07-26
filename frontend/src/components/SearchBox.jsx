import { useState } from 'react';

function SearchBox({ searchText, onSearchChange }) {
    return (
        <>
            <div>
                <h2>Search here : </h2>
                <input type="text" value={searchText} onChange={onSearchChange}/>
                <button onClick={() => setSearchText("")}>Clear</button>
            </div>
            <div>Current search : {searchText}</div>
            <div>Characters : {searchText.length}</div>

        </>
    )
}

export default SearchBox;