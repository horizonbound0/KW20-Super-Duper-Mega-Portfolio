import { createContext, useState, useContext } from 'react';

export const TabContext = createContext();

export const useTab = () => useContext(TabContext);

export default function TabProvider({ children }) {
    const [currentTab, setCurrentTab] = useState("AboutMe");

    const toggleActive = (active) => {

    }
}