function SearchBox({ searchText, onSearchChange }) {
    return (
        <div className="search-box">
            Search : <input type="text" value={searchText} onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    );
}

export default SearchBox;