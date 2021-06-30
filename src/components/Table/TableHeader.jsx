import style from './Table.module.css';
import React from 'react';

const TableHeader = ({ sortConfig, requestSort }) => {

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    }

    const ButtonSort = (props) => {
        return (
            <div
                type="button"
                name={props.name}
                onClick={() => requestSort(props.name)}
                className={getClassNamesFor(props.name)}>
                {props.children}
            </div>
        )
    }

    return (
        <>
            <tr style={{ color: '#b55e7d' }}>
                <th colSpan='3'>Источники трафика</th>
                <th colSpan='6'>Трафик</th>
                <th colSpan='3'>
                    <div className={style.firstTitle}>
                        <img src="/images/crm.png" alt="crm" />
                        <p>Продажи</p>
                    </div>
                    <div className={style.secondTitle}>
                        <img src='/images/model-linear.png' alt="linear" />
                        <p>Линейная модель</p>
                    </div>
                </th>
                <th colSpan='3'>
                    <div className={style.firstTitle}>
                        <img src="/images/composite.png" alt="" />
                        <p>Цель с осн. GA</p>
                    </div>
                    <div className={style.secondTitle}>
                        <img src="/images/composite-2.png" alt="crm" />
                        <p>Составная цель</p>
                    </div>
                </th>
            </tr>
            <tr className={style.noBorder}>
                <td colSpan='3'><ButtonSort name='name'>Название</ButtonSort></td>

                <td className={style.leftBorder}><ButtonSort name='traficShow'>Показы</ButtonSort></td>
                <td><ButtonSort name='traficClick'>Клики</ButtonSort></td>
                <td><ButtonSort name='traficSessions'>Сеансы</ButtonSort></td>
                <td> <ButtonSort name='traficCTR'>CTR, %</ButtonSort></td>
                <td> <ButtonSort name='traficPriceClick'>Цена клика</ButtonSort></td>
                <td> <ButtonSort name='traficExpenses'>Затраты</ButtonSort></td>

                <td className={style.leftBorder}> <ButtonSort name='salesNumber'>Кол-во</ButtonSort></td>
                <td> <ButtonSort name='salesCPA'>CPA</ButtonSort></td>
                <td> <ButtonSort name='salesProceeds'>Выручка</ButtonSort></td>

                <td className={style.leftBorder}> <ButtonSort name='targetNumber'>Кол-во</ButtonSort></td>
                <td><ButtonSort name='targetCPA'>CPA</ButtonSort></td>
                <td><ButtonSort name='targetCR'>CR, %</ButtonSort></td>
            </tr>
        </>
    )
}

export default TableHeader;
