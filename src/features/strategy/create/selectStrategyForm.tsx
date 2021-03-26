import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './selectStrategyStyle.css';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import Select from 'react-select'
import {RootState} from "../../../store/rootReducer";
import {getStrategies} from "../strategySlice";

const options = [
	{ value: 'A - Agilent Technologies, Inc.', label: 'A - Agilent Technologies, Inc.' },
	{ value: '100 VOO2', label: '100 VOO2' },
	{ value: '80 - 20 VOO TLT', label: '80 - 20 VOO TLT' },
	{ value: 'All-Weather/All-Seasons Portfolio...', label: 'All-Weather/All-Seasons' },
	{ value: 'Accelerated Dual', label: 'Accelerated Dual' },
	{ value: '100 VOO1', label: '100 VOO1' },
	{ value: '80 - 20 VOO TLT', label: '80 - 20 VOO TLT' },
	{ value: 'All-Weather/All', label: 'All-Weather/All' },
	{ value: 'Accelerated Dual', label: 'Accelerated Dual' },
	{ value: '100 VOO', label: '100 VOO' },
	{ value: '80 - 20 VOO TLT', label: '80 - 20 VOO TLT' },
	{ value: 'All-Weather/All-Seasons Portfolio', label: 'All-Weather/All-Seasons Portfolio' },
	{ value: 'Accelerated Dual Momentum', label: 'Accelerated Dual Momentum' },
]

const SelectStrategyForm = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getStrategies());
	}, [dispatch]);

	return (
		<div className="select-stategy">
			<div className="select-stategy-left">
				<div className="btnBack" onClick={()=>{props.toggleFun()}}>
					<span className="btnBackIcon"><ArrowBack /></span>
					<p>Back</p>
				</div>
				<div className="header-section">
					<div className="header-section-heading"> Select a Strategy</div>
					<div className="select-stategy-dropdown">
						<Select 
							options={options} 
							className='react-select-container' 
							classNamePrefix="react-select"
							isClearable="true"
							isSearchable="true"
							name="color"
						/>
					</div>
				</div>
			</div>
			<div className="select-stategy-right">
				<img src="/assets/images/strategy/strategy-2.png" />
			</div>
		</div>
	);
};

export default SelectStrategyForm;
