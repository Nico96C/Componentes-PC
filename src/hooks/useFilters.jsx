import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters () {
    const { filters, setFilters} = useContext(FiltersContext)

    const filterProducts = (products) => {
        let filteredProducts = products.filter(product => {
            return (
                product.price >= filters.minPrice && 
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        });

        if (filters.sort === 'lowToHigh') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'highToLow') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        return filteredProducts;
    }

    return { filters, filterProducts, setFilters}
}