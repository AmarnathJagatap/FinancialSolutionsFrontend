import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { Apilink } from '../Constants/Apilink';


const Login = ({prevPath}) => {
    const paperStyle={padding :20,height:'80vh',width:350, margin:"40px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [username,setUsername]= React.useState('')
    const [password,setPassword] = React.useState('')
    const navigate = useNavigate();
    const LoginFunction = async()=>{
        if(username!==''&&password!==''){
        await fetch(Apilink+"/auth/login/",{
          method:'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body:JSON.stringify({
            "username":username,
            "password":password
          })
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res["Token"]){
                localStorage.setItem("accesstoken", res["Token"]['access'])
                localStorage.setItem("refreshtoken", res["Token"]['refresh'])
                navigate("/dashboard")
              }
        })
        }else{
            return(
                <Alert severity="error">Username and Password is Compulsory</Alert>                
            )            
        }        
      }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>           
            <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                   Sign in
            </h1>
            <TextField 
            label='Username'
            placeholder='Enter username'
            fullWidth
            required
            sx={{marginBottom:2}}
            onChange={(e)=>setUsername(e.target.value)}/>
            <TextField 
            label='Password' 
            placeholder='Enter password' 
            type='password' 
            fullWidth 
            required
            onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={()=>{LoginFunction()}} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        </Paper>
    </Grid>
    )
}

export default Login;