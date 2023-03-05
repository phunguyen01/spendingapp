// Kết nối(connect) với firebase để trao đổi dữ liệu
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVMfAUzvOD-c4JFVVhcFCu1vG57fcEiXc",
  authDomain: "spending-a740b.firebaseapp.com",
  projectId: "spending-a740b",
  storageBucket: "spending-a740b.appspot.com",
  messagingSenderId: "437879236318",
  appId: "1:437879236318:web:72fe99b0ade3b5c3b4844f",
  measurementId: "G-ZJ4BB3R20V",
};

firebase.initializeApp(firebaseConfig);

// Firebase Authentication <=> firebase.auth();
// Firebase Authentication là tính năng xác thực người dùng bằng Password, số điện thoại.
// hoặc tài khoản Google, Facebook hay Twitter
// Tính năng này còn cho phép thực hiện chia sẻ ID giữa các ứng dụng một cách dễ dàng.

const projectAuth = firebase.auth();
const projectStorerage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.severTimestamp;
export { projectAuth, projectStorerage, projectFirestore, timestamp };
