import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { increase, decrease } from '../../redux/actions/testActions'
const Testing = () => {
    const dispatch = useDispatch();

    const value = useSelector((state) => {
        return (state.tests.value);
    })

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increase(10))}>increase</button>
            <button onClick={() => dispatch(decrease(1))}>decrease</button>

        </div>
    );
};

export default Testing;