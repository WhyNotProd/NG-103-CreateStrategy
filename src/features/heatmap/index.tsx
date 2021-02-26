import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeatMap } from './heatMapSlice';

const HeatMap = () => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getHeatMap());
	}, [dispatch]);

    return (
        <div>HeatMap Page</div>
    )
}

export default HeatMap;