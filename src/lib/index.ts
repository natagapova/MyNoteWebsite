import { initializeApp, type FirebaseApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBokwO39CZYR5dfWv8MDHXw5I75ODDH2G4',
	authDomain: 'frontendretake.firebaseapp.com',
	databaseURL: 'https://frontendretake-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'frontendretake',
	storageBucket: 'frontendretake.appspot.com',
	messagingSenderId: '965550793515',
	appId: '1:965550793515:web:b7cce0f0b6386b47b55b6e'
};

let app: FirebaseApp | undefined;

export function getFirebase(): FirebaseApp {
	if (app) return app;

	app = initializeApp(firebaseConfig);
	return app;
}
