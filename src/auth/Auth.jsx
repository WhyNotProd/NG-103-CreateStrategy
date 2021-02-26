import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import SplashScreen from '../features/components/SplashScreen';
import firebaseService from '../services/firebase/firebaseService';


import { setUserDataFirebase, setUserData, logoutUser } from './userSlice';

class Auth extends Component {
	state = {
		waitAuthCheck: true
	};

	componentDidMount() {
		return Promise.all([
			// Comment the lines which you do not use
			this.firebaseCheck(),
			// this.auth0Check(),
			// this.jwtCheck()
		]).then(() => {
			this.setState({ waitAuthCheck: false });
		});
	}

	firebaseCheck = () =>
		new Promise((resolve) => {
			firebaseService.init((success) => {
				if (!success) {
					resolve();
				}
			});

			firebaseService.onAuthStateChanged((authUser) => {
				if (authUser) {
					// this.props.showMessage({ message: 'Logging in with Firebase' });
					console.log('logging in with firebase');
					/**
					 * Retrieve user data from Firebase
					 */
					firebaseService.getUserData(authUser.uid).then(
						(user) => {
							this.props.setUserDataFirebase(user, authUser);

							resolve();

							// this.props.showMessage({ message: 'Logged in with Firebase' });
							console.log('logged in with firebase');
						},
						error => {
							resolve();
						}
					);
				} else {
					resolve();
				}
			});

			return Promise.resolve();
		});

	render() {
		return this.state.waitAuthCheck ? (<SplashScreen />) : (<>{this.props.children}</>);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			logout: logoutUser,
			setUserData,
			setUserDataFirebase,
		},
		dispatch
	);
}

export default connect(null, mapDispatchToProps)(Auth);
