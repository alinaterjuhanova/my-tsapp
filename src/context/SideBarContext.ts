import { createContext } from "react";

interface SideBarContextInterface {
    isSideBarOpen: boolean;
    setIsSideBarOpen: (isOpen: boolean) => void
}

const SideBarContext = createContext<SideBarContextInterface>({
    isSideBarOpen: false,
    setIsSideBarOpen: () => {}
})

export default SideBarContext