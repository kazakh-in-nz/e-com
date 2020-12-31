import React from 'react'
import { Table, Button } from 'reactstrap'

export default function DashBoardTable({tableData}) {
    return (
        <React.Fragment>
            <Table striped>
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Customer</th>
                        <th>Purchase On</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Tracking</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, ind)=> {
                        return (
                            <tr key={ind}>
                                <th scope="row">{item.invoice}</th>
                                <th>{`${item.first_name} ${item.last_name}`}</th>
                                <th>{item.purchaseOn}</th>
                                <th>{item.amount}</th>
                                <th>{item.status}</th>
                                <th>{item.tracking}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
        </React.Fragment>
    )
}
