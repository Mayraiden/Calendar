import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCep9zXR5K7HEH-r513QaqL0cTGENrvyJA',
	authDomain: 'calendarprogress.firebaseapp.com',
	projectId: 'calendarprogress',
	storageBucket: 'calendarprogress.firebasestorage.app',
	messagingSenderId: '405597550853',
	appId: '1:405597550853:web:a60533342e63ab23d35f6c',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
