import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom';
import { Apilink } from "../../../Constants/Apilink";

export default function Approved() {
  const navigate = useNavigate();
  const openFileDetial = (fileDetails) =>{
    navigate("/editfile", {
      state: {
        fileDetails: fileDetails
      }
    });
  }
  const [allData,setAllData] = React.useState([])
  React.useEffect(()=>{
    fetchAllData()
  },[])
  const fetchAllData = async()=>{
    await fetch(Apilink+"/files/getallfiledata/",{
      method:'GET',
      headers:{
        'Content-Type' : 'application/json',
      }
    })
    .then((res)=>res.json())
    .then((res)=>setAllData(res))
  }
  return (
    <>
    <Typography variant="h5" component="div" color="black" fontFamily='"Helvetica Neue"' sx={{m:2}}>
        Approved    
    </Typography> 
    <TableContainer component={Paper}>      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Sl. No.</TableCell>
            <TableCell align="center">File No.</TableCell>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Mobile No</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Loan Amount</TableCell>
            <TableCell align="center">File Type</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">View Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>{allData.length>0?
          allData.map((row) => (
            row.status==="Approved"?
            <TableRow
              key={row?.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.file_number}</TableCell>
              <TableCell align="center">{row.customername}</TableCell>
              <TableCell align="center">{row.mobileno}</TableCell>
              <TableCell align="center">{row.product}</TableCell>
              <TableCell align="center">{row.loanamount}</TableCell>
              <TableCell align="center">{row.filetype}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center"><Button variant="outlined" onClick={()=>{openFileDetial(row)}}>View Details</Button></TableCell>              
            </TableRow>:
            <></>
          )):
          <Typography variant="h5" component="div" color="black" fontFamily='"Helvetica Neue"' sx={{m:2}}>
             Don't have any file to show  
          </Typography>
            }</>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
