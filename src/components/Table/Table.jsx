import TableRow from "../TableRow/TableRow";
import useSortableData from "../useSortableData/useSortableData";
import React from 'react';
import TableTotalRow from "./TableTotalRow";
import TableHeader from "./TableHeader";

const Table = ({ total, services }) => {

    const { items, requestSort, sortConfig } = useSortableData(services);

    return (
        <table>
            <thead>
                <TableHeader requestSort={requestSort} sortConfig={sortConfig}/>
            </thead>
            <tbody>
                <TableTotalRow total={total} />
                {items.map((item) => (<TableRow sortConfig={sortConfig} key={item.id} data={item} />))}
            </tbody>
        </table>
    )
}

export default Table;
