import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase';
import * as history from 'history';
import * as _ from 'lodash';
import firebaseService from '../services/firebase/firebaseService';

// const historyTS: any = history;

export const setUserDataFirebase = (user, authUser) => async (dispatch) => {
	if (
		user &&
		user.data &&
		user.data.settings &&
		user.data.settings.theme &&
		user.data.settings.layout &&
		user.data.settings.layout.style
	) {
		// Set user data but do not update
		return dispatch(setUserData(user));
	}

	// Create missing user settings
	return dispatch(createUserSettingsFirebase(authUser));
};

export const createUserSettingsFirebase = (authUser) => async (dispatch, getState) => {
	const guestUser = getState().auth.user;
	const fuseDefaultSettings = getState().fuse.settings.defaults;
	const { currentUser } = firebase.auth();

	/**
	 * Merge with current Settings
	 */
	const user = _.merge({}, guestUser, {
		uid: authUser.uid,
		from: 'firebase',
		role: ['user'],
		data: {
			displayName: authUser.displayName,
			email: authUser.email,
			settings: { ...fuseDefaultSettings }
		}
	});

	if(currentUser) {
		currentUser.updateProfile(user.data);
	}

	dispatch(updateUserData(user));

	return dispatch(setUserData(user));
};

export const setUserData = (user) => async (dispatch, getState) => {
	/*
        You can redirect the logged-in user to a specific route depending on his role
         */

		historyTS.location.state = {
		redirectUrl: user.redirectUrl // for example 'apps/academy'
	};

	/*
    Set User Settings
     */
	// dispatch(setDefaultSettings(user.data.settings));

	dispatch(setUser(user));
};

// export const updateUserSettings = settings => async (dispatch, getState) => {
// 	const oldUser = getState().auth.user;
// 	const user = _.merge({}, oldUser, { data: { settings } });

// 	dispatch(updateUserData(user));

// 	return dispatch(setUserData(user));
// };

// export const updateUserShortcuts = shortcuts => async (dispatch, getState) => {
// 	const { user } = getState().auth;
// 	const newUser = {
// 		...user,
// 		data: {
// 			...user.data,
// 			shortcuts
// 		}
// 	};

// 	dispatch(updateUserData(user));

// 	return dispatch(setUserData(newUser));
// };

export const logoutUser = () => async (dispatch, getState) => {
	const { user } = getState().auth;

	if (!user.role || user.role.length === 0) {
		// is guest
		return null;
	}

	historyTS.push({
		pathname: '/'
	});

	switch (user.from) {
		case 'firebase': {
			firebaseService.signOut();
			break;
		}
		default: {
			firebaseService.signOut();
		}
	}

	// dispatch(setInitialSettings());

	dispatch(userLoggedOut());
};

export const updateUserData = (user) => async (dispatch, getStatea) => {
	if (!user.role || user.role.length === 0) {
		// is guest
		return;
	}
	switch (user.from) {
		case 'firebase': {
			firebaseService
				.updateUserData(user)
				.then(() => {
					// dispatch(showMessage({ message: 'User data saved to firebase' }));
					console.log('user updated');
				})
				.catch((error) => {
					// dispatch(showMessage({ message: error.message }));
					console.log('user update error');
				});
			break;
		}
		default: {
			firebaseService
				.updateUserData(user)
				.then(() => {
					// dispatch(showMessage({ message: 'User data saved to firebase' }));
					console.log('user updated');
				})
				.catch((error) => {
					// dispatch(showMessage({ message: error.message }));
					console.log('user update error');
				});
			break;
		}
	}
};

const initialState = {
	role: [], // guest
	data: {
		displayName: 'John Doe',
		photoURL: 'assets/images/avatars/Velazquez.jpg',
		email: 'johndoe@withinpixels.com',
	}
};

const userSlice = createSlice({
	name: 'auth/user',
	initialState,
	reducers: {
		setUser: (state, action) => action.payload,
		userLoggedOut: (state, action) => initialState
	},
	extraReducers: {}
});

export const { setUser, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
