function SearchBox({ searchText, onSearchChange }) {
    return (
        <div className="p-2">
            <label>Search :</label>
            <input className="bg-brand-secondary rounded-full ml-2 px-5 py-2 outline outline-blue-300" type="text" value={searchText} onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    );
}

export default SearchBox;