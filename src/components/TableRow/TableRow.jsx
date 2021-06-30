import React, { useState } from 'react';
import style from './TableRow.module.css';

const TableRow = ({ data }) => {

    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow(() => !show)
    }

    return (
        <>
            <tr className={style.noBorder + ' ' + (show ? style.show : '')}>
                <td colSpan='3'>
                    <div className={style.title}>
                        {data.sources && <button className={style.button} onClick={onClick}>{show ? '-' : '+'}</button>}
                        <img style={{ width: '20px', height: '20px' }} src={data.imgSrc} alt="logo" />
                        <p>{data.name}</p>
                    </div>
                    <p>{data.type} {data.type === 'Группа.' && data.sources ? <span>{`Источников ${data.sources.length}`} </span> : null}</p>
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
                data.sources.map((s) => (
                    <tr key={s.id} className={style.noBorder + ' ' + style.show}>
                        <td colSpan='3'>
                            <div className={style.title}>
                                <img style={{ width: '20px', height: '20px' }} src={s.imgSrc} alt="logo" />
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