import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewFile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const openFileDetial = (fileDetails) =>{
        navigate("/editfile", {
        state: {
            fileDetails: fileDetails
        }
        });
    }
    return(
        <div>
            <div style={{flex:1,flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <div>
                    <Typography variant="h5" component="div" color="black" fontFamily='"Helvetica Neue"' sx={{m:1}}>
                    File Number: {location.state.fileDetails.file_number}
                    </Typography>
                    <Typography variant="h5" component="div" color="black" fontFamily='"Helvetica Neue"' sx={{m:1}}>
                        File Type: {location.state.fileDetails.filetype}
                    </Typography>
                </div>
                <div>
                    <Button variant="outlined" onClick={()=>{openFileDetial(location.state.fileDetails)}}>Edit Details</Button>
                </div>
            </div>
            
            <Paper elevation={5} sx={{p:1}}>
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Customer Name : {location.state.fileDetails.customername}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Mobile No : {location.state.fileDetails.mobileno}
            </Typography>  
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Product : {location.state.fileDetails.product}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Loan Amount : {location.state.fileDetails.loanamount}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Created Date : {location.state.fileDetails.creationdate}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Place : {location.state.fileDetails.place}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Reference Name : {location.state.fileDetails.referencename}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Bank Name : {location.state.fileDetails.presentbankname}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Bank Employee Name : {location.state.fileDetails.bankemployeename}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Status : {location.state.fileDetails.status}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Login Date : {location.state.fileDetails.logindate}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Approved Date : {location.state.fileDetails.approveddate}
            </Typography>
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Sanctioned Amount : {location.state.fileDetails.santionedamount}
            </Typography>
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      PD Date: {location.state.fileDetails.personaldiscussion}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Technical Date: {location.state.fileDetails.techincaldate}
            </Typography>
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Technical Valuvation: {location.state.fileDetails.techincalvaluvation}
            </Typography> 
            <Typography sx={{ fontSize: 20, alignSelf:'center' }} color="InfoText" gutterBottom>
                      Remark: {location.state.fileDetails.remark}
            </Typography>   
            </Paper>
        </div>

    )
}

export default ViewFile