import { useState } from "react";
import { SetPageContext } from "./SetPageContext";

const SetPageState = (props) => {
    const [menuItem, setMenuItem] = useState("Dashboard");
    const [userID, setUserID] = useState('');

    
    return (
        <SetPageContext.Provider value={{menuItem,setMenuItem,userID,setUserID}}>
            {props.children}
        </SetPageContext.Provider>
    )
}

export default SetPageState;