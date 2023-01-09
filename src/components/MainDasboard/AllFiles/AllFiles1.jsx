import { Box, Button, useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import React from 'react';
import { Apilink } from "../../../Constants/Apilink";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const AllFiles1 = () => {
    const navigate = useNavigate();
    const openFileDetial = (fileDetails) =>{
        navigate("/filedetail", {
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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "file_number",
      headerName: "File Number",
      flex: 1,
    },
    {
        field: "filetype",
        headerName: "File Type",
        flex: 1,
        cellClassName:(params)=>{
            if(params.value == null){
                return '';
            }

            return clsx('file-type',{
                classA : params.value==="A",
                classB : params.value==="B",
                classC : params.value==="C"
            }
            )
        }
    },
    {
      field: "customername",
      headerName: "Name",
      flex: 1,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
        cellClassName:(params)=>{
            if(params.value == null){
                return '';
            }

            return clsx('status-type',{
                loggedIn : params.value==="Logged In",
                approved : params.value==="Approved",
                rejected : params.value==="Rejected",
                disbursed : params.value==="Disbursed",
                pending : params.value==="Pending",

            }
            )
        }
    },
    {
      field: "mobileno",
      headerName: "Mobile No",
      flex: 1,
      hide:true,
    },
    {
        field: "product",
        headerName: "Product",
        flex: 1,
    }, 
    {
        field: "loanamount",
        headerName: "Loan Amount",
        flex: 1,
    },   
    {
        field: "referencename",
        headerName: "Reference Name",
        flex: 1,  
        hide:true,     
    },
    {
        field: "place",
        headerName: "Place",
        flex: 1,  
        hide:true,     
    },
    {
        field: "presentbankname",
        headerName: "Bank Name",
        flex: 1, 
        hide:true,      
    },
    {
        field: "bankemployeename",
        headerName: "Bank Employee",
        flex: 1, 
        hide:true,      
    },
    {
        field: "logindate",
        headerName: "Login Date",
        flex: 1, 
        hide:true,      
    },
    {
        field: "approveddate",
        headerName: "Approved Date",
        flex: 1,  
        hide:true,     
    },
    {
        field: "santionedamount",
        headerName: "Sanctioned Amount",
        flex: 1, 
        hide:true,      
    },
    {
        field: "personaldiscussion",
        headerName: "PD Date",
        flex: 1,  
        hide:true,     
    },
    {
        field: "techincaldate",
        headerName: "Techincal Date",
        flex: 1, 
        hide:true,      
    },
    {
        field: "techincalvaluvation",
        headerName: "Technical Valuation",
        flex: 1, 
        hide:true,      
    },
    {
        field: "disburseddate",
        headerName: "Disbursed Date",
        flex: 1, 
        hide:true,      
    },
    {
        field: "remark",
        headerName: "Remark",
        flex: 1,  
        hide:true,     
    },
   
  ];

  return (
    <Box >
      <Box
        height="80vh" 
        sx={{
            '& .file-type.classA' :{
                backgroundColor: 'rgba(157, 255, 118, 0.69)',
                color: '#1a3e72',
                fontWeight: '600',
            },
            '& .file-type.classB' :{
                backgroundColor: '#B1D4E0',
                color: '#1a3e72',
                fontWeight: '600',
            },
            '& .file-type.classC' :{
                backgroundColor: '#d47483',
                color: '#1a3e72',
                fontWeight: '600',
            },
            '& .status-type.loggedIn' :{
                backgroundColor: '#2E8BC0',
                color: '#eeeeee',
                fontWeight: '600',
            },
            '& .status-type.approved' :{
                backgroundColor: '#04fb7f',
                color: '#1a3e72',
                fontWeight: '600',
            },
            '& .status-type.rejected' :{
                backgroundColor: '#e85660',
                color: '#eeeeee',
                fontWeight: '600',
            },
            '& .status-type.pending' :{
                backgroundColor: '#dde41b',
                color: '#eeeeee',
                fontWeight: '600',
            },
            '& .status-type.disbursed' :{
                backgroundColor: '#FFAEBC',
                color: '#1a3e72',
                fontWeight: '600',
            }
        }}      
      >
        <DataGrid getRowId={(row) => row.id} rowHeight={70} rows={allData} columns={columns}  components={{
          Toolbar: GridToolbar,
        }}/>
      </Box>
    </Box>
  );
};

export default AllFiles1;
