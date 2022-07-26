
import { configureStore } from '@reduxjs/toolkit'



const userInfoFromStorage = localStorage.getItem("studentInfo")
  ? JSON.parse(localStorage.getItem("studentInfo"))
  : null;

  

const initialState = {
  studentLogin: { userInfo: userInfoFromStorage },
  
};


const store = configureStore({
  reducer:{
    
  },
  initialState,
 
}
  
  
);

export default store;

