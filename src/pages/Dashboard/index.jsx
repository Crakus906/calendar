import React, { useEffect } from 'react';
import Calendar from '../../moduls/Calendar';
import { useDispatch } from 'react-redux';
import { fetchDog } from '../../redux/action'

import './style.scss';

export default function Dashboard(props) {
    const dispatch = useDispatch(); 

    return (
        <div className="wraper">
            <button onClick={() => console.log(dispatch(fetchDog())) }>Click</button>
            {props.loading ? <div>loading...</div> : props.error  ? <p>Error, try again</p>
                : <img src={props.url}/>}
            <Calendar />
        </div>
    )
}