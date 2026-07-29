function CategoryFilter({ selectedCategory, onCategoryChange, categories=["test"] }) {
    return (
        <select className="category-filter" value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
            <option value="">All</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    )
}

export default CategoryFilter;