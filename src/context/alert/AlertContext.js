import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  // Set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    })

    setTimeout(() => dispatch({ 
        type: 'REMOVE_ALERT' }), 3000)
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext



// import { createContext, useReducer } from "react";
// import { REMOVE_ALERT, SET_ALERT } from "../../types";
// import alertReducer from './alertReducer';


// const  alertContext = createContext()

// export const AlertProvider = ({children}) => {
//     const initialState = null

//     const [state, dispatch] = useReducer (alertReducer , initialState)

//     //Set an Alert
//     const setAlert = (msg,type) => {
//         dispatch ({
//             type: SET_ALERT,
//             payload: {msg, type},    
//         });
//         setTimeout (() => dispatch ({ 
//             type: REMOVE_ALERT
//         }) ,5000);
//         };

//     return (
//         <alertContext.Provider
//         value ={{
//             alert: state,
//             setAlert,
//         }}
//         >
//             {children}
//         </alertContext.Provider>
//     );

// };

// export default alertContext;

// import { createContext, useReducer } from 'react';
// import alertReducer from './alertReducer'

// const AlertContext = createContext();

// export const AlertProvider = ({children }) => {
//     const initialState = null 

// const [state, dispatch] = useReducer(alertReducer,initialState)

// //Set an Alert
// const setAlert = (msg, type) => {
//     dispatch({
//         type: 'SET_ALERT',
//         payload: {msg, type}
//     })

//     setTimeout(()=> dispatch ({type: 'REMOVE_ALERT'}), 3000)
// }




// return (

// <AlertContext.Provider value = {{alert: state, setAlert}}>
//     {children}
// </AlertContext.Provider>
// )
// }
// export default AlertContext;
