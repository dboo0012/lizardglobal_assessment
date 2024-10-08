import React, { ChangeEvent } from 'react';

interface Category {
    id: string;
    name: string;
}

interface SearchFilterProps {
    categories: Category[];
    onFilterChange: (categoryId: string) => void;
}

/**
 * The search filter component is used to filter the data based on the category selected.
 * The selected category is passed back to the parent component, to trigger a re render of the table
 * based on the selected category.
 */
const SearchFilter = ({ categories, onFilterChange }: SearchFilterProps) => {
    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        onFilterChange(selectedCategory); // Trigger the filter change in the parent component
    };

    return (
        <div className="mb-4 ml-6">
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text font-semibold">Sort by Category:</span>
            </div>
            <select className="select select-bordered" onChange={handleCategoryChange}>
                <option value="">All Categories</option>

                {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                        {category.name}
                    </option>
                ))}

            </select>
            </label>
        </div>
    );
};

export default SearchFilter;
