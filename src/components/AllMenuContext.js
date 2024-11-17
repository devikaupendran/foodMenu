import React, { useContext, useState, useEffect } from 'react'
import Loading from './Loading';

export const AllMenuContext = React.createContext();
export const AllMenus = (props) => {

    let [allMenus, setAllMenus] = useState([]) //Let's create state for display menu
    let [loading, setLoading] = useState(false);

    // Let's set API for all menus 
    async function getAllMenus() {
        setLoading(true)
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data = await response.json();
        setAllMenus(data.meals) //lets pass the data to state
        setLoading(false)
    }

    useEffect(() => {
        getAllMenus();
    }, [])

    return (
        <div>
            <AllMenuContext.Provider value={allMenus}>
            {!loading ?  props.children : <Loading />}
            </AllMenuContext.Provider>
        </div>
    )
}


