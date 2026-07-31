import Dropdown from './Dropdown';

function SortSelector({ sortOption, onSortChange }) {
    return (
        <Dropdown value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
            <option value="Amount ↑">Amount ↑</option>
            <option value="Amount ↓">Amount ↓</option>
            <option value="Title A-Z">Title A-Z</option>
            <option value="Title Z-A">Title Z-A</option>
        </Dropdown>
    );
}

export default SortSelector;