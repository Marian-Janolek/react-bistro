import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const openSidebar= () =>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }

    return <AppContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar, isLoading, setIsLoading}}>{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}