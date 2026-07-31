import "./ExpenseToolBar.css";
import CategoryFilter from "./CategoryFilter";
import SearchBox from "./SearchBox";
import SortSelector from "./SortSelector";

function ExpenseToolBar({ searchText, setSearchText, selectedCategory, setSelectedCategory, categories, sortOption, setSortOption }) {
    return (
        <div className="justify-self-center max-w-[800px] m-5 p-5 flex justify-center items-center flex-wrap gap-5 rounded-2xl bg-pink-200">
            <SearchBox searchText={searchText} onSearchChange={setSearchText} />
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} categories={categories} />
            <SortSelector sortOption={sortOption} onSortChange={setSortOption} />
        </div>
    )
}

export default ExpenseToolBar;