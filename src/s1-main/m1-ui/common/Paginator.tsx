import React, {useState} from 'react';
import styles from "s2-features/f6-users/Users.module.css";
import {UsersPropsType} from "s2-features/f6-users/Users";

export const Paginator = ({onPageChanged, totalItemsCount, itemsPerPage, currentPage, pagesPerPortion, ...props}: UsersPropsType) => {
    let pagesTotalNumber = Math.ceil(totalItemsCount / itemsPerPage)
    let pages = []
    for (let i = 0; i < pagesTotalNumber; i++) {
        pages.push(i + 1)
    }

    const [portionNumber, setPortionNumber] = useState(1)

    const totalPortionsNumber = Math.ceil(pagesTotalNumber / pagesPerPortion)
    const leftPortionSidePageNumber = (portionNumber - 1) * pagesPerPortion + 1
    const rightPortionSidePageNumber = portionNumber * pagesPerPortion

    const previousPageHandler = () => {
        setPortionNumber(portionNumber - 1)
    }
    const nextPageHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    return <div>
        {portionNumber > 1 && <button onClick={previousPageHandler}>previous</button>}
        {
            pages
                .filter(p => p >= leftPortionSidePageNumber && p <= rightPortionSidePageNumber)
                .map(p => {
                    return <span className={currentPage === p ? styles.selectedPage : styles.page}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })
        }
        {portionNumber < totalPortionsNumber && <button onClick={nextPageHandler}>next</button>}
    </div>
}

