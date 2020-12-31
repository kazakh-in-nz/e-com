import React, { useEffect, useState } from 'react'
import DashBoardTable from './DashBoardTable'
import DashBoardPagination from './DashBoardPagination'
import helperFunctions from '../../utilities/helperFunctions'

const numCustomersDisplayed = 10

export default function DashBoard({dashBoardData}) {

    const [currentPage, setCurrentPage] = useState(1)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(currentPage*numCustomersDisplayed)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        if (tableData.length === 0) {
            setTableData(subSetData(start, end))
        }
    }, [])

    useEffect(() => {
        const newStart = (currentPage - 1) * numCustomersDisplayed
        const newEnd = currentPage * numCustomersDisplayed
        setStart(newStart)
        setEnd(newEnd)
        setTableData(subSetData(newStart, newEnd))
    }, [currentPage])

    let subSetData = (start, end) => {
        return dashBoardData.slice(start, end)
    }

    const sortBy = (param, order) => {
        const dir = order === 'asc' ? 1 : -1
        let sortedData = dashBoardData.sort((a, b) => helperFunctions.customSort(a, b, param) * dir)
        console.log(sortedData)
        dashBoardData = sortedData
        setTableData(subSetData(start, end))
    }

    return (
        <div className="db-wrapper">
            <div className="overView">
                Over View
            </div>
            <div className="charts">
                Chart
            </div>
            <div className="table">
                <DashBoardTable tableData={tableData} sortBy={sortBy}/>
                <DashBoardPagination dataLength={dashBoardData.length} currentPage={currentPage} setCurrentPage={setCurrentPage} numCustomerDisplayed={numCustomersDisplayed}/>
            </div>
        </div>
    )
}

