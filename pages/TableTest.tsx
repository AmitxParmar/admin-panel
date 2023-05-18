import TableRef from '@/components/TableRef'
import React from 'react'

type Props = {}

const TableTest = (props: Props) => {
    const data = [{
        title: "Company Name",
        id: "Link"
    },{
        title: "Company Name",
        id: "Link"
    },{
        title: "Company Name",
        id: "Link"
    },{
        title: "Company Name",
        id: "Link"
    },{
        title: "Company Name",
        id: "Link"
    },]
    return (
        <div>
            <TableRef data={data} />
        </div>
    )
}

export default TableTest