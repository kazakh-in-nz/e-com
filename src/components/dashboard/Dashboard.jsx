import React, { useEffect, useState } from 'react'
import DashBoardTable from './DashBoardTable'
import DashBoardPagination from './DashBoardPagination'
import helperFunctions from '../../utilities/helperFunctions'
import BarChart from './BarChart'

const numCustomersDisplayed = 10

export default function DashBoard({dashBoardData}) {

    const [currentPage, setCurrentPage] = useState(1)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(currentPage*numCustomersDisplayed)
    const [tableData, setTableData] = useState([])
    const [lastWeekData, setLastWeekData] = useState([]) // all data from the last week
    const [lastWeekDays, setLastWeekDays] = useState([]) // dates of the last week to be used for x axis labelling

    useEffect(() => {
        if (tableData.length === 0) {
            setTableData(subSetData(start, end))
        }
        if (lastWeekData.length === 0) {
            getLastWeekData()
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
        dashBoardData = sortedData
        setTableData(subSetData(start, end))
    }

    const getLastWeekData = () => {
        let today = new Date('2020-12-30')
        let firstDay = new Date(today.getTime() - 7*24*3600*1000)
        setLastWeekDays(helperFunctions.getDatesOfLastWeek(firstDay))


        let filtered = dashBoardData.filter(item => {
            if(helperFunctions.formDate(item.purchaseOn) >= new Date(firstDay.getFullYear(),firstDay.getMonth(),firstDay.getDate())) return true
            else return false
        })
        setLastWeekData(filtered)
    }

    return (
        <div className="db-wrapper">
            <div className="overView">
                Over View
            </div>
            <div className="charts">
                <BarChart barChartData={lastWeekData} lastWeek={lastWeekDays}/>
            </div>
            <div className="table">
                <DashBoardTable tableData={tableData} sortBy={sortBy}/>
                <DashBoardPagination dataLength={dashBoardData.length} currentPage={currentPage} setCurrentPage={setCurrentPage} numCustomerDisplayed={numCustomersDisplayed}/>
            </div>
        </div>
    )
}




