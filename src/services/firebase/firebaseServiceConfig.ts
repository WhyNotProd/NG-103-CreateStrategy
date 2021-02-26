const prodConfig = {
	// apiKey           : "YOUR_API_KEY",
	// authDomain       : "your-app.firebaseapp.com",
	// databaseURL      : "https://your-app.firebaseio.com",
	// projectId        : "your-app",
	// storageBucket    : "your-app.appspot.com",
	// messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

// const devConfig = {
// 	// apiKey           : "YOUR_API_KEY",
// 	// authDomain       : "your-app.firebaseapp.com",
// 	// databaseURL      : "https://your-app.firebaseio.com",
// 	// projectId        : "your-app",
// 	// storageBucket    : "your-app.appspot.com",
// 	// messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
// };

const devConfig = {
	apiKey: "AIzaSyCTNp9JSVQtrneOz5Qxko7IsmAm3S2NN3o",
	authDomain: "shutswealth.firebaseapp.com",
	databaseURL: "https://shutswealth.firebaseio.com",
	projectId: "shutswealth",
	storageBucket: "shutswealth.appspot.com",
	messagingSenderId: "281105773164",
	appId: "1:281105773164:web:3cb3795d1381fac2819e49",
	measurementId: "G-JTHN187LHJ"
  };

const config = import.meta.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default devConfig;
