import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPosts } from './socialPostsSlice';

const Social = () => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

    return (
        <div>Social Page</div>
    )
}

export default Social;