import style from './Table.module.css';
import React from 'react';

const TableTotalRow = ({ total }) => {
    return (
        <tr className={style.noBorder + ' ' + style.totalRow} >
            <td colSpan='3'>Итого</td>

            <td className={style.leftBorder}>{total.trafic.show}</td>
            <td>{total.trafic.click}</td>
            <td>{total.trafic.sessions}</td>
            <td>{total.trafic.CTR}</td>
            <td>{total.trafic.priceClick}</td>
            <td>{total.trafic.expenses}</td>

            <td className={style.leftBorder}>{total.sales.number}</td>
            <td>{total.sales.CPA}</td>
            <td>{total.sales.proceeds}</td>

            <td className={style.leftBorder}>{total.target.number}</td>
            <td>{total.target.CPA}</td>
            <td>{total.target.CR}</td>
        </tr>
    )
}

export default TableTotalRow;