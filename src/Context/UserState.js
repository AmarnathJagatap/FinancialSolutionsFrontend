import { useState } from "react";
import { Apilink } from "../Constants/Apilink";
import { UserContext } from "./UserContext";

const Userstate = (props) => {
    const [userloggedin, setuserloggedin] = useState(false);
    const getuser = async () => {
        const access = localStorage.getItem('accesstoken') 
        const refresh = localStorage.getItem('refreshtoken')
        if(access!==null || refresh!==null ){
          const verifyRefreshToken=async()=>{
            const response = await fetch(Apilink+"/auth/api/token/verify/", {
              method: "POST",
              body : JSON.stringify({
                 "token": refresh
              }),
              headers: {
                  'Content-Type' : 'application/json',
              }
            })
            const data = response.json();
            console.log(data)
            if(Object.keys(data).length > 0){
                setuserloggedin(false)
                localStorage.removeItem('refreshtoken')
                localStorage.removeItem('accesstoken')
                console.log("Refresh Token Expired")
            }else{
              console.log("Continued to check  Access Token")
                const verifyAccessToken=async()=>{
                  await fetch(Apilink+"/auth/api/token/verify/", {
                    method: "POST",
                    body : JSON.stringify({
                       "token":access
                    }),
                    headers: {
                        'Content-Type' : 'application/json',
                    }
                  })  
                  .then((res)=>res.json())
                  .then((res)=>{
                    if(Object.keys(res).length > 0){
                      console.log("Access Token Expired")
                        const getNewAccessToken=async()=>{
                            await fetch(Apilink+"/auth/api/token/refresh/", {
                              method: "POST",
                              body : JSON.stringify({
                                 "refresh":"Token "+refresh
                              }),
                              headers: {
                                  'Content-Type' : 'application/json',
                              }
                            }) 
                            .then((res)=>res.json())
                            .then((data)=>{
                              console.log("Got Tokens")
                              console.log("New Access Token: ",data["access"])
                              console.log("New Refresh Token: ",data["refresh"])
                              async function Storing(){
                              if(data["access"]){
                                localStorage.setItem('accesstoken',data["access"]);
                                localStorage.setItem('refreshtoken',data["refresh"]);
                                setuserloggedin(true)
                              }      
                              }
                              Storing();
                            }).catch((error)=>{
                              console.log("Got some error while getting new tokens")
                            })
                          }
                          getNewAccessToken();
                    }else{
                        console.log("Both Tokens are verified setting to True")
                        setuserloggedin(true)  
                        console.log(userloggedin)                   
                    }
                  })
                }  
                verifyAccessToken();    
          }

        }
        verifyRefreshToken();
        }else{
          setuserloggedin(false)            
        }                    
    }
    
    return (
        <UserContext.Provider value={{ getuser, userloggedin }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Userstate;