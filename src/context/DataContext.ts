import { createContext } from "react";

interface DataContextInterface {
    categories: string[] | [];
    setCategories: (category: any) => void
}

const DataContext = createContext<DataContextInterface>({
    categories: [],
    setCategories: () => []
})

export default DataContext