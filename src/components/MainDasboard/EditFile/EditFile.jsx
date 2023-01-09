import * as React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container,Toolbar,Stack,Alert } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { bankname } from './BankList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const products = [
  {
    value: 'Housing Loan',
    label: 'Housing Loan',
  },
  {
    value: 'LAP(Mortgage Loan)',
    label: 'LAP(Mortgage Loan)',
  },
  {
    value: 'Personal Loan',
    label: 'Personal Loan',
  },
  {
    value: 'Business Loan',
    label: 'Business Loan',
  },
  {
    value: 'Vehicle Loan',
    label: 'Vehicle Loan',
  },
  {
    value: 'Agri Loan',
    label: 'Agri Loan',
  },
];

const FiletypeList = [
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
  {
    value: 'C',
    label: 'C',
  }
];

const StatusList = [
  {
    value: 'NotLogged In',
    label: 'NotLogged In',
  },
  {
    value: 'Logged In',
    label: 'Logged In',
  },
  {
    value: 'Approved',
    label: 'Approved',
  },
  {
    value: 'Rejected',
    label: 'Rejected',
  },
  {
    value: 'Disbursed',
    label: 'Disbursed',
  }
];




export default function EditFile() {
  const showToastMessage = () => {
    toast.success('File Updated !', {
        position: toast.POSITION.TOP_CENTER
    });
};
const showErrorMessage = () => {
  toast.success('Something is Wrong tr again!', {
    position: toast.POSITION.TOP_CENTER
});
};
    const location = useLocation();
    const navigate = useNavigate();
    const [referencename,setreferencename] = React.useState(location.state.fileDetails.referencename);
    const [product,setProduct] = React.useState(location.state.fileDetails.product);
    const [place,setPlace] = React.useState(location.state.fileDetails.place);
    const [mobileno,setMobileno] = React.useState(location.state.fileDetails.mobileno);
    const [loanamount,setloanamount] = React.useState(location.state.fileDetails.loanamount);
    const [customername,setcustomername] = React.useState(location.state.fileDetails.customername);
    const [status,setStatus] = React.useState(location.state.fileDetails.status);
    const [filetype,setFileType] = React.useState(location.state.fileDetails.filetype);
    const [presentbankname,setpresentbankname] = React.useState(location.state.fileDetails.presentbankname);
    const [bankemployeename,setbankemployeename]= React.useState(location.state.fileDetails.bankemployeename);
    const [logindate,setlogindate]= React.useState(location.state.fileDetails.logindate);
    const [approveddate,setapproveddate]= React.useState(location.state.fileDetails.approveddate);
    const [rejeceddate,setrejeceddate]= React.useState(location.state.fileDetails.rejeceddate);
    const [disburseddate,setdisburseddate]= React.useState(location.state.fileDetails.disburseddate);
    const [techincaldate,settechincaldate]= React.useState(location.state.fileDetails.techincaldate);
    const [techincalvaluvation,settechincalvaluvation]= React.useState(location.state.fileDetails.techincalvaluvation);
    const [remark,setremark]= React.useState(location.state.fileDetails.remark);

    const editfileData = async()=>{

     
      const formData = {status,filetype,presentbankname,bankemployeename,logindate,approveddate,rejeceddate,disburseddate,techincaldate,techincalvaluvation,remark,customername,referencename,product,place,mobileno,loanamount}
      await fetch(`https://financialsolutions.pythonanywhere.com/files/getfiledata/${location.state.fileDetails.id}`,{
        method:'PUT',
        body : JSON.stringify({
          "place":formData.place,
          "referencename":formData.referencename,
          "mobileno":formData.mobileno,
          "laonamount":formData.loanamount,
          "product":formData.product,
          "file_number":location.state.fileDetails.file_number,
          "customername":formData.customername,
          "status": formData.status,
          "filetype": formData.filetype,
          "presentbankname": formData.presentbankname,
          "bankemployeename": formData.bankemployeename,
          "logindate": formData.logindate,
          "approveddate": formData.approveddate,
          "rejeceddate": formData.rejeceddate,
          "disburseddate": formData.disburseddate,
          "techincaldate": formData.techincaldate,
          "techincalvaluvation": formData.techincalvaluvation,
          "remark": formData.remark         
        }),
        headers:{
          'Content-Type' : 'application/json',
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        if(res["id"]){
            showToastMessage();
        }else{
          showErrorMessage();
        }
      })
    }

  return (
    <>
    <Toolbar sx={{ marginBottom: "20px" }}>
    
    <Stack
                  sx={{ width: "100%" }}
                  direction="row"
                  justifyContent="center"
                > 
                <Typography variant="h6" noWrap component="div">Financial Solutions</Typography>
                </Stack>
 </Toolbar>
    <Container sx={{m:5}}>
    <ToastContainer />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m:1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" component="div" color="black" fontFamily='"Helvetica Neue"' sx={{m:1}}>
                    View / Edit File: {location.state.fileDetails.file_number}     
      </Typography>
      <div style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Button sx={{m:3}} onClick={()=>{navigate('/dashboard')}} variant="contained">Go Back</Button>        
      </div>
       <TextField
          id="outlined-select-currency"
          label="Customer Name"
          onChange={(e)=>setcustomername(e.target.value)}
          defaultValue={customername}        >
        </TextField>
        
      <div>
      <TextField
          id="outlined-select-currency"
          select
          label="Status"
          onChange={(e)=>setStatus(e.target.value)}
          defaultValue={status}
        >
          {StatusList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <TextField
          id="outlined-select-currency"
          select
          label="File Type"
          onChange={(e)=>setFileType(e.target.value)}
          defaultValue={filetype}
        >
          {FiletypeList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          label="Mobile No"
          onChange={(e)=>setMobileno(e.target.value)}
          defaultValue={mobileno}        >
        </TextField>
        <TextField
          id="outlined-select-currency"
          label="Loan Amount"
          onChange={(e)=>setloanamount(e.target.value)}
          defaultValue={loanamount}        >
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Prodcut"
          onChange={(e)=>setProduct(e.target.value)}
          defaultValue={product}
        >
          {products.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
        <TextField
          id="outlined-select-currency"
          select
          label="Bank Name"
          onChange={(e)=>setpresentbankname(e.target.value)}
          defaultValue={setpresentbankname}
        >
          {bankname.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Bank Employee Name"
          onChange={(e)=>setbankemployeename(e.target.value)}
          defaultValue={bankemployeename}

        />
        <TextField
          id="outlined-select-currency"
          required
          label="Login Date"
          onChange={(e)=>setlogindate(e.target.value)}
          defaultValue={setlogindate}

        >
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Approve Date"
          onChange={(e)=>setapproveddate(e.target.value)}
          defaultValue={approveddate}

        />
         <TextField
          required
          id="outlined-required"
          label="Rejected Date"
          onChange={(e)=>setrejeceddate(e.target.value)}
          defaultValue={rejeceddate}

        />
        <TextField
          required
          id="outlined-required"
          label="Disbursed Date"
          onChange={(e)=>setdisburseddate(e.target.value)}
          defaultValue={disburseddate}

        />
        <TextField
          required
          id="outlined-required"
          label="Tehnical Date"
          onChange={(e)=>settechincaldate(e.target.value)}
          defaultValue={techincaldate}


        /> 
        <TextField
          required
          id="outlined-required"
          label="Tehnical Amount"
          onChange={(e)=>settechincalvaluvation(e.target.value)}
          defaultValue={techincalvaluvation}

        />  
         <TextField
          required
          id="outlined-required"
          label="Reference"
          onChange={(e)=>setreferencename(e.target.value)}
          defaultValue={referencename}
        />  
          <TextField
          required
          id="outlined-required"
          label="Place"
          onChange={(e)=>setPlace(e.target.value)}
          defaultValue={place}
        />    
         <TextField
          required
          id="outlined-required"
          label="Remark"
          onChange={(e)=>setremark(e.target.value)}
          defaultValue={remark}
        />        
       
      </div>
      <div style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Button sx={{m:3}} onClick={()=>{navigate('/dashboard')}} variant="contained">Go Back</Button>        

      <Button sx={{m:3}} onClick={()=>{editfileData()}} variant="contained">Submit</Button>        
      </div>
      
    </Box>
    </Container>
    </>
  );
}
