 import initializedAuth from "../components/Firebase/Firebase-init";
 import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut ,createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


 initializedAuth();
 const useFirebase = () => {

   const [isLoading,setIsLoading] = useState(true);
   const auth =getAuth();
   const [user,setUser]=useState({});
   const [email,setEmail] =useState("");
   const [password,setPassword] =useState("");
   const [error,setError] = useState("");
   const [error2,setError2] = useState("");
   const [displayName,setDisplayName]=useState("");
   const [admin,setAdmin]=useState(false);
   const googleProvider = new GoogleAuthProvider();
   
   
   const signInUsingGoogle =()=>{
    setIsLoading(true);
    return  signInWithPopup(auth,googleProvider)
    .finally(()=>{
      setIsLoading(false)
    })
   }

   useEffect(()=>{
fetch(`https://motorcycle-server.onrender.com/users/${user.email}`)
.then(res=>res.json())
.then(data =>setAdmin(data.admin))

   },[user.email])
   
   const logOut = ()=>{
    setIsLoading(true);
     signOut(auth)
     .then(()=>{
       setUser({})
     })
     .finally(()=>{
      setIsLoading(false)
    })
   }
   
  //  observer user state
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
        else{
          setUser({})
        }
        setIsLoading(false)
      });
      return unsubscribe;
    },[auth])
   
  
   // here processLogin
     const signInWithEmail=(email,password)=>{
    setIsLoading(true);
     return signInWithEmailAndPassword(auth,email,password)
     .finally(()=>{
      setIsLoading(false)
    })
     
     }
   // here new user Create
     const createNewUser =(email,password)=>{
      setIsLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
       .finally(()=>{
        setIsLoading(false)
      })
     }
   
   // here Email Change
      const handleEmailChange = e=>{
        setEmail(e.target.value);
      }
      // here password Change
      const handlePasswordChange = e=>{
        setPassword(e.target.value);
      }
    
      // here password Change
      const handleNameChange = e=>{
        console.log(e.target.value);
        setDisplayName(e.target.value);
      }
    

  // here save user information
  const saveUser = (email,displayName)=>{
   const user = {email, displayName};
   fetch('https://motorcycle-server.onrender.com/users',{
     method: "POST",
     headers:{
       'content-type': 'application/json'
     },
     body:JSON.stringify(user)
   })
  }

  const saveUser2 = (email,displayName)=>{
   const user = {email, displayName};
   fetch('https://motorcycle-server.onrender.com/users',{
     method: "PUT",
     headers:{
       'content-type': 'application/json'
     },
     body:JSON.stringify(user)
   })
  }


    // here return all property
   
   return{
     user,
     error,
     error2,
     email,
     password,
     displayName,
     admin,
     setError,
     setError2,
     signInUsingGoogle,
     logOut,
     handleEmailChange,
     handlePasswordChange,
     handleNameChange,
     createNewUser,
     signInWithEmail,
     isLoading,
     saveUser,
     saveUser2
    
   }
   
};

export default useFirebase;