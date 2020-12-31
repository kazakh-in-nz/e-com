import React, { useState } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

export default function DashBoardPagination({dataLength, currentPage, setCurrentPage, numCustomerDisplayed}) {
    
    let maxPageNum = dataLength % numCustomerDisplayed !== 0 ? Math.floor(dataLength/numCustomerDisplayed) + 1 : dataLength/numCustomerDisplayed
    let [leftButton, setLeftButton] = useState(1)
    let [centralButton, setCentralButton] = useState(2)
    let [rightButton, setRightButton] = useState(3)

    let changePage = (position) => {
        if(position === 'first') {
            setCurrentPage(1)
            setLeftButton(1)
            setCentralButton(2)
            setRightButton(3)
        } else if (position === 'left'){
            setLeftButton(leftButton-1 < 1 ? 1 : leftButton - 1)
            setCentralButton(centralButton-1 < 2 ? 2 : centralButton - 1)
            setRightButton(rightButton-1 < 3 ? 3 : rightButton - 1)
            setCurrentPage(currentPage - 1 < 1 ? 3 : currentPage - 1)
        } else if (position === 'right') {
            setLeftButton(leftButton+1 > maxPageNum - 2 ? maxPageNum - 2 : leftButton + 1)
            setCentralButton(centralButton+1 > maxPageNum - 1 ? maxPageNum - 1 : centralButton + 1)
            setRightButton(rightButton+1 > maxPageNum ? maxPageNum : rightButton + 1)
            setCurrentPage(currentPage+1 > maxPageNum ? maxPageNum : currentPage + 1)
        } else if (position === 'last') {
            setCurrentPage(maxPageNum)
            setLeftButton(maxPageNum-2)
            setCentralButton(maxPageNum-1)
            setRightButton(maxPageNum)
        }
    }

    const disableButton = (edge) => {
        console.log(currentPage)
        return edge === currentPage ? true : false
    }

    return (
        <Pagination className="pagination" aria-label="Page navigation example">
            <PaginationItem disabled={disableButton(1)}>
                <PaginationLink onClick={() => {changePage('first')}} first href="#" />
            </PaginationItem>
            <PaginationItem disabled={disableButton(1)}>
                <PaginationLink onClick={() => {changePage('left')}} previous href="#" />
            </PaginationItem>
            <PaginationItem active={leftButton === currentPage}>
                <PaginationLink onClick={() => {setCurrentPage(leftButton)}} href="#">
                    {leftButton}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem active={centralButton === currentPage}>
                <PaginationLink onClick={() => {setCurrentPage(centralButton)}} href="#">
                    {centralButton}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem active={rightButton === currentPage}>
                <PaginationLink onClick={() => {setCurrentPage(rightButton)}} href="#">
                    {rightButton}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem  disabled={disableButton(maxPageNum)}>
                <PaginationLink onClick={() => {changePage('right')}} next href="#" />
            </PaginationItem>
            <PaginationItem  disabled={disableButton(maxPageNum)}>
                <PaginationLink onClick={() => {changePage('last')}} last href="#" />
            </PaginationItem>
        </Pagination>
    )
}
