/* eslint-disable react/prop-types */
export const CategoryFilter = ({categories, selectedCategory, onSelectCategory}) => {
    return (
        <div className="col-span-1">
            <h2 className="font-semibold text-lg mb-4">Product Category</h2>
            <button
                className={`btn rounded-full btn-sm my-4 w-full ${
                    selectedCategory === '' ? 'btn-primary' : 'btn-outline'
                }`}
                onClick={() => onSelectCategory('')}
            >
                All Categories
            </button>
            <div className="flex flex-col gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`btn rounded-full btn-sm w-full ${
                            selectedCategory === category ? 'btn-primary' : 'btn-outline'
                        }`}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}