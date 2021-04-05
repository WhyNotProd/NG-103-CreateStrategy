import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './selectStrategyStyle.css';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import Select from 'react-select';
import {getStrategies} from "../strategySlice";

interface strategyItem {
	strategy: {
		createdDate: string;
		id: any;
		isActive: boolean;
		isBenchmark: boolean;
		isShared: boolean;
		isStatic: boolean;
		isUserEquityAccount: boolean;
		rank: any;
		strategyID: any;
		strategyName: string;
		updatedBy: string;
		updatedDate: string;
		userID: any;
	};
}

interface strategySelect {
	strategy: {
		strategies: strategyItem[];
	}
}

const SelectStrategyForm = (props) => {

	const options1: any = useSelector<strategySelect>((state) => {
		return state.strategy.strategies;
	})
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getStrategies)
	}, [dispatch]);

	const onChange = (event) => {
		let strategy;
		if (event) {
			strategy = options1.filter((s) => s.strategy.id === event.id);
			if (strategy.length > 0) {
				strategy = strategy[0].strategy
			}
		}
		props.onStrategySelect(strategy);
	};

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
							options={options1.map((item)=>{
								return item.strategy;
							})}
							getOptionLabel ={(option)=>option.strategyName}
							getOptionValue ={(option)=>option.strategyName}
							className='react-select-container'
							classNamePrefix="react-select"
							isClearable="true"
							isSearchable="true"
							name="color"
							onChange={onChange}
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
