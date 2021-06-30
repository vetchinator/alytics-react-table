import React, { useEffect, useState } from 'react';
import useSortableData from '../useSortableData/useSortableData';
import style from './TableRow.module.css';

const TableRow = ({ data, sortConfig }) => {
   

    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow(() => !show);
    }

    const { items, requestSort} = useSortableData(data.sources);
    useEffect(() => {
        if(sortConfig !== null && data.sources !== []) {
            requestSort(sortConfig.key)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortConfig, data.sources])
    
    return (
        <>
            <tr className={style.noBorder + ' ' + (show ? style.show : '')}>
                <td colSpan='3'>
                    <div className={style.title}>
                        {(data.sources.length > 0) && <button className={style.button} onClick={onClick}>{show ? '-' : '+'}</button>}
                        <img style={{ width: '20px', height: '20px' }} src={process.env.PUBLIC_URL + data.imgSrc} alt="logo" />
                        <p>{data.name}</p>
                    </div>
                    <p className={style.type}>{data.type} {data.type === 'Группа.' && (data.sources.length > 0) ? <span>{`Источников ${data.sources.length}`} </span> : null}</p>
                </td>

                <td className={style.leftBorder}>{data.traficShow}</td>
                <td>{data.traficClick}</td>
                <td>{data.traficSessions}</td>
                <td>{data.traficCTR}</td>
                <td>{data.traficPriceClick}</td>
                <td>{data.traficExpenses}</td>

                <td className={style.leftBorder}>{data.salesNumber}</td>
                <td>{data.salesCPA}</td>
                <td>{data.salesProceeds}</td>

                <td className={style.leftBorder}>{data.targetNumber}</td>
                <td>{data.targetCPA}</td>
                <td>{data.targetCR}</td>
            </tr>

            {data.sources && show &&
                items.map((s) => (
                    <tr key={s.id} className={style.noBorder + ' ' + style.show}>
                        <td colSpan='3'>
                            <div className={style.title}>
                                <img style={{ width: '20px', height: '20px' }} src={process.env.PUBLIC_URL +s.imgSrc} alt="logo" />
                                <p>{s.name}</p>
                            </div>

                        </td>

                        <td className={style.leftBorder}>{data.traficShow}</td>
                        <td>{s.traficClick}</td>
                        <td>{s.traficSessions}</td>
                        <td>{s.traficCTR}</td>
                        <td>{s.traficPriceClick}</td>
                        <td>{s.traficExpenses}</td>

                        <td className={style.leftBorder}>{s.salesNumber}</td>
                        <td>{s.salesCPA}</td>
                        <td>{s.salesProceeds}</td>

                        <td className={style.leftBorder}>{s.targetNumber}</td>
                        <td>{s.targetCPA}</td>
                        <td>{s.targetCR}</td>
                    </tr>
                ))
            }
        </>
    )
}

export default React.memo(TableRow);