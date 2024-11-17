import React, { useContext, useEffect, useState } from 'react'
import Pagination from './Pagination';
import Card from './Card';
import Popup from './Popup';
import AddToCart from './AddToCart';
import { AllMenuContext } from './AllMenuContext'

function FilteredDishes() {

    const allMenus = useContext(AllMenuContext)
    

    let [allCategories, setAllCategories] = useState([]); //Let's create state for all categories 
    let [singleDish, setSingleDish] = useState([])
    let [filteredDishes, setFilteredDishes] = useState([]) //Let's create a state to display filtered dishes
    let [activeDish, setActiveDish] = useState('Beef');
    let [isVisible, setIsVisible] = useState(false);


    //POPUP
    let [showPopup, setShowPopup] = useState(false); //state for popup display
    let [currentDish, setCurrentDish] = useState('')


    //Let's set API for all Categories 
    async function getAllCategories() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL)
        let categoryData = await response.json()
        setAllCategories(categoryData.categories)
    }

    //Let's set API for display single category when 1st loading
    async function getAllSingleDish() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Beef";
        let response = await fetch(API_URL)
        let singleData = await response.json()
        setSingleDish(singleData.meals)
    }

    useEffect(() => {
        getAllCategories();
        getAllSingleDish();
    }, [])


    //Lets define the body of the function from card.js
    function showPopupHandler(dishName) {
        setShowPopup(true)
        setCurrentDish(dishName)
    }

    //Lets define the body of the function from popup.js
    function closePopupHandler() {
        setShowPopup(false)
    }

    //PAGINATION
    // Creating current page and items for each page
    let [currentPage, setCurrentPage] = useState(1)
    let [itemsPerPage, setItemsPerPage] = useState(4)

    //States for first index and last index
    let indexOfLastDish = currentPage * itemsPerPage;
    let indexOfFirstDish = indexOfLastDish - itemsPerPage;

    //Lets  Slice the array to show only the dishes that correspond to the current page
    let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish)

    //let's map categories for display the categories on page
    let allFilteredCategories = allCategories.map((item) => {
        return (
            <li className={item.strCategory === activeDish ? "active" : ' '}
                onClick={() => { fliteredDishesHandler(item.strCategory) }}>
                {item.strCategory}
            </li>
        )
    })

    //Lets handle the function when clicking on <li>
    function fliteredDishesHandler(category) {
        setIsVisible(true)
        setActiveDish(category)
        setSingleDish([])

        let filteredDishesAre = allMenus.filter((items) => {
            return items.strCategory === category;
        }).map((items) => {
            return (
                <Card items={items} showPopupHandler={showPopupHandler} />
            )
        })
        setFilteredDishes(filteredDishesAre)
    }

    //Lets map single dishes for display in page
    let maxSingleDish = 4;
    let showSingleDishes = singleDish.map((items, index) => {
        if (index < maxSingleDish) {
            return (
                <Card items={items} showPopupHandler={showPopupHandler} />
            )
        }
    })
    return (
        <section>
            <div className="container">

                {showPopup && <Popup closePopupHandler={closePopupHandler} currentDish={currentDish} />}
                <div className="filtered-dishes-content content-style">
                    <h1> Explore Our Full Menu </h1>
                    <p> Explore our full menu, featuring a wide range of delicious options from juicy beef and chicken dishes to flavorful specialties. Whatever you're craving, we have something to satisfy every taste! </p>
                </div>

                <div className="filtered-category-display">
                    <ul className='d-flex'> {allFilteredCategories} </ul>
                </div>

                <div className="filtered-dishes-display">

                    <ul className='d-flex textCenter'>
                        {showSingleDishes}
                        {filteredDishes.length != 0 ? showTheseDishesNow : (isVisible && (
                            <div className="alert">
                                <h1> Sorry! This category is currently unavailable.</h1>
                                <h3>  Please explore our other delicious options!</h3>
                            </div>
                        ))
                        }
                    </ul>
                </div>
                <Pagination filteredDishes={filteredDishes} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
            </div>
        </section>
    )
}

export default FilteredDishes
