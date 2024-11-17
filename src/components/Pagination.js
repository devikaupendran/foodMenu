import React from 'react'

function Pagination({ filteredDishes, setCurrentPage , itemsPerPage }) {
    
    let noOfPages = []
    let len = filteredDishes.length

    // STEP 3 : Let's loop the pages and push into an array
    for (let i = 1; i <= Math.ceil(len / itemsPerPage) ; i++) {
        noOfPages.push(i)
    }

    // Step 4 : Let's display the pages
    let pages = noOfPages.map( (item) => {
        return ( <li id= {item} onClick={showDishesHandler}> { item} </li>)
    })
    
    // Lets handle the <li>
    function  showDishesHandler(event){
        let currentPage = event.target.id;
        setCurrentPage(currentPage)
    }

    return (
        <ul className='pagination d-flex'> {pages} </ul>
    )
}

export default Pagination
