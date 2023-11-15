import { createContext, useState } from 'react';

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
    const [categories, setCategories] = useState();

    return <CategoryContext.provider value={categories}>{children} </CategoryContext.provider>

};

export { CategoryContext, CategoryContextProvider };