import "./ExpenseToolBar.css";
import CategoryFilter from "./CategoryFilter";
import SearchBox from "./SearchBox";
import SortSelector from "./SortSelector";

function ExpenseToolBar({ searchText, setSearchText, selectedCategory, setSelectedCategory, categories, sortOption, setSortOption }) {
    return (
        <div className="expense-tool-bar">
            <SearchBox searchText={searchText} onSearchChange={setSearchText} />
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} categories={categories} />
            <SortSelector sortOption={sortOption} onSortChange={setSortOption} />
        </div>
    )
}

export default ExpenseToolBar;