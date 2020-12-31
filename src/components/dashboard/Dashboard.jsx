import React from 'react'
import DashBoardTable from './DashBoardTable'

export default function DashBoard({dashBoardData}) {
    console.log('From DashBoard component', dashBoardData)
    return (
        <div className="db-wrapper">
            <div className="overView">
                Over View
            </div>
            <div className="charts">
                Chart
            </div>
            <DashBoardTable tableData={dashBoardData} />
        </div>
    )
}
