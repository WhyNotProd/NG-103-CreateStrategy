import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTrends, getTrendData } from './trendSlice';

const Trends = () => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getTrends());
	}, [dispatch]);

    const getTrendDataMock = () => {
        const assets = ['SPY', 'BND'];
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);

        const payload = {
            assets,
            startDate,
            endDate: today
        }

        dispatch(getTrendData(payload))
    }

    return (
        <>
        <div>Trends Page</div>
        <button onClick={getTrendDataMock}>GetTrendData</button>
        </>
    )
}

export default Trends;