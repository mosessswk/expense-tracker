function SearchBox({ searchText, onSearchChange }) {
    return (
        <>
            Search : <input type="text" value={searchText} onChange={(e) => onSearchChange(e.target.value)} />
        </>
    );
}

export default SearchBox;