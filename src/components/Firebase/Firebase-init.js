import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase-config";

const initializedAuth =()=>{

  initializeApp(firebaseConfig);

}

export default initializedAuth;