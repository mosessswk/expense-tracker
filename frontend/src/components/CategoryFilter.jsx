import Dropdown from "./ui/Dropdown";

function CategoryFilter({ selectedCategory, onCategoryChange, categories=["test"] }) {
    return (
        <Dropdown value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
            <option value="">All</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </Dropdown>
    )
}

export default CategoryFilter;