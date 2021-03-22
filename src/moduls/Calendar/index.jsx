/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import moment from 'moment';
import { DAYS_OF_WEEK } from '../../constants/date';
import './style.scss'

export default function Calendar() {
    const [ date, setDate ] = useState(moment());

    
    
    const dataTask = [{title: 'task1', date: '2-17-2021'},{title: 'task2', date: '2-5-2021'}]

    const toSwitchMounth = (props) => setDate(props ? moment(date).add(1, 'months') : moment(date).subtract(1, "months"));

    const handleDataTask = (e) => {
        const data = moment(e).format("YYYY-MM-DD");
        return data
    }
    const d = moment(date).diff(moment(date).startOf('week'),'days')
    const monthsDays = moment(date).daysInMonth();
    const start = moment(date).startOf("months").day();
    const afore =  moment(date).subtract(1, "months").daysInMonth();

    const daysNext = monthsDays + start;
    const afterDays = 42 - daysNext

    const getDays = Array.from(Array(monthsDays), (_,i) => i + 1);
    const startNumber = Array(start).fill().map((_,i) => i + 1)
    const beforeDays = Array.from(Array(afore), (_,i) => i + 1);
    const next = Array.from(Array(afterDays), (_,i) => i + 1);

    const before = beforeDays.reverse().splice(0, start)
    before.reverse()

    const calendar = [{
        startNember: [...startNumber],
        getDays: [...getDays],
        dataTask: [...dataTask]}
    ]

    const toDay = date.format("YYYY-MM-DD");
    return (
        <div className="calendar">
            <div className="pagination">
                <button onClick={() => toSwitchMounth(false)}>{"<"}</button>
                <h1>{date.format("MMMM")}{date.format("YYYY")}</h1>
                <button onClick={() => toSwitchMounth(true)}>{">"}</button>
            </div>
            <div className="container">
                <div className="week">
                    {
                        DAYS_OF_WEEK.map((day, i) => ( 
                            <div key={i} className="week-day">{day}</div>
                        ))
                    }
                </div>
                <div className="days">
                    {/* {
                        calendar[1].map((index, i) => (
                            <div className="calendarDay">
                                {console.log(index, i)}
                                <span>{index}</span>
                            </div>
                        ) )
                    } */}
                    {
                        calendar.map((index, i) => (
                            <div className="day">
                                {
                                    before.map((item, i) => (
                                        <div className="none" key={i}></div>
                                    ))
                                }
                                {index.getDays.map((id) => (
                                    <div className="calendarDay">
                                        {/* {index.dataTask.map((task) =>(
                                           console.log(handleDataTask(task.date)) 
                                        //    <div>{task.date}</div>
                                           
                                        ))} */}
                                        {id}    
                                    </div>
                                ))}
                                {
                                    next.map((item, i) => (
                                        <div className="none" key={i}></div>
                                    ))
                                }
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}