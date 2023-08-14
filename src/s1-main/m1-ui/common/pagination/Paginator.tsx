import React, {useState} from 'react';
import s from './Paginator.module.css'
import {UsersPropsType} from "s2-features/f7-users/Users";
import {SuperButton} from "s1-main/m1-ui/common/SuperButton/SuperButton";
import Paper from "@mui/material/Paper";

export const Paginator = ({
                              onPageChanged,
                              totalItemsCount,
                              itemsPerPage,
                              currentPage,
                              pagesPerPortion,
                              ...props
                          }: UsersPropsType) => {
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

    return <div className={s.paginatorContainer}>
        <div className={s.paginatorButton}>
            {portionNumber > 1 && <SuperButton onClick={previousPageHandler}>prev</SuperButton>}
        </div>
        {
            pages
                .filter(p => p >= leftPortionSidePageNumber && p <= rightPortionSidePageNumber)
                .map(p => {
                    return <Paper
                        elevation={5}
                        className={s.page + ' ' + (currentPage === p && s.selectedPage)}
                        onClick={() => {
                            onPageChanged(p)
                        }}>{p}</Paper>
                })
        }
        <div className={s.paginatorButton}>
            {portionNumber < totalPortionsNumber && <SuperButton onClick={nextPageHandler}>next</SuperButton>}
        </div>
    </div>
}

