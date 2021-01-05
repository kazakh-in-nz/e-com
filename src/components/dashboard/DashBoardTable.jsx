import React from 'react'
import { Table } from 'reactstrap'

let sortParam = ''
let sortOrder = ''

export default function DashBoardTable({tableData, sortBy}) {
    

    const sortData = (param) => {
        if (param !== sortParam) {
            sortOrder = 'asc'
        } else {
            sortOrder = sortOrder === 'asc' ? 'des' : 'asc'
        }
        sortParam = param
        sortBy(sortParam, sortOrder)
    }

    return (
        <React.Fragment>
            <Table striped>
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th onClick={() => {sortData('first_name')}}>Customer</th>
                        <th onClick={() => {sortData('purchaseOn')}}>Purchase On</th>
                        <th onClick={() => {sortData('amount')}}>Amount</th>
                        <th onClick={() => {sortData('status')}}>Status</th>
                        <th>Tracking</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, ind)=> {
                        return (
                            <tr key={ind}>
                                <th className="invoice" scope="row">{item.invoice}</th>
                                <th className="customer">{`${item.first_name} ${item.last_name}`}</th>
                                <th className="purchaseOn">{item.purchaseOn}</th>
                                <th className="amount">{item.amount}</th>
                                <th className="status">{item.status}</th>
                                <th className="tracking">{item.tracking}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </React.Fragment>
    )
}
