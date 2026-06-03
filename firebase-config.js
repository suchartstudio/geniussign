import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set, update, push, remove, onDisconnect } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0kMrUtVNSIzlAF9Rm6pSlJQ5eRZ3pk90",
  authDomain: "signage-b807a.firebaseapp.com",
  databaseURL: "https://signage-b807a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "signage-b807a",
  storageBucket: "signage-b807a.firebasestorage.app",
  messagingSenderId: "777605695730",
  appId: "1:777605695730:web:bc0760e01e4022d94be86b",
  measurementId: "G-VW6B5QM551"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { db, ref, onValue, set, update, push, remove, onDisconnect, storage, storageRef, uploadBytesResumable, getDownloadURL, deleteObject };
