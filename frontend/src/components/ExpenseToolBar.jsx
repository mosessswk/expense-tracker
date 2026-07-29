import CategoryFilter from "./CategoryFilter";
import SearchBox from "./SearchBox";
import SortSelector from "./SortSelector";

function ExpenseToolBar({ searchText, setSearchText, selectedCategory, setSelectedCategory, categories, sortOption, setSortOption }) {
    return (
        <div>
            <SearchBox searchText={searchText} onSearchChange={setSearchText} />
            &nbsp;
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} categories={categories} />
            &nbsp;
            <SortSelector sortOption={sortOption} onSortChange={setSortOption} />
        </div>
    )
}

export default ExpenseToolBar;