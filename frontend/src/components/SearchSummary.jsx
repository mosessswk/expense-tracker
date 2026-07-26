import { useState } from 'react';

function SearchSummary({ searchText }) {
    return (
        <>
            <h3>Searching for : <br />{searchText || "(no search entered)"}</h3>
        </>
    )
}

export default SearchSummary;