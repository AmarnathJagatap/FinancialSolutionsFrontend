import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Apilink } from '../../../Constants/Apilink';
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



export default function CreateNewFile() {
  const [file_number,setFileNumer]=React.useState('')
  const [customername,setCustomerName]= React.useState('')
  const [mobileno,setMobileno]= React.useState('')
  const [product,setProduct]= React.useState('')
  const [loanAmount,setLoanAmount]= React.useState('')
  const [place,setPlace]= React.useState('')
  const [fileType, setfileType] = React.useState('')
  const [referencename,setReferenceName]=React.useState('')
  const [status,setStatus] = React.useState('NotLogged In')
  const formData={file_number,customername,mobileno,product,loanAmount,place,referencename,status,fileType}
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
  const showToastMessage = () => {
    toast.success('File Created !', {
        position: toast.POSITION.TOP_CENTER
    });
};
const showErrorMessage = () => {
  toast.error('Something is Wrong tr again!', {
    position: toast.POSITION.TOP_CENTER
});
};
const showErrornotMessage = () => {
  toast.error('All Filed are Compulsory', {
    position: toast.POSITION.TOP_CENTER
});
};
  const createfileData = async()=>{
    const Length = allData.length+1;
    const fileNUmber = `FS2023${Length}`
    if(fileNUmber==='' || customername===''|| mobileno==='' || product==='' || loanAmount==='' || place==='' || referencename==='' || fileType===''){
      showErrornotMessage();
    }else{
      await fetch(Apilink+"/files/createnewfile/",{
        method:'POST',
        body : JSON.stringify({
          "file_number": fileNUmber,
          "customername": formData.customername,
          "mobileno": formData.mobileno,
          "product": formData.product,
          "loanamount": formData.loanAmount,
          "place": formData.place,
          "filetype": formData.fileType,
          "referencename": formData.referencename,
          "status": formData.status
        }),
        headers:{
          'Content-Type' : 'application/json',
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        if(res["response"]){
          showToastMessage();
          setFileNumer('');
          setCustomerName('');
          setMobileno('');
          setProduct('');
          setLoanAmount('');
          setReferenceName('');
          setPlace('');
          setfileType('');
          }else{
          showErrorMessage();
        }
      })
     
    }
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
       <Typography variant="h5" component="div" color="black" fontFamily='"Helvetica Neue"' sx={{mv:1}}>
                      Create New File     
        </Typography> 
        <ToastContainer />
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(e)=>setCustomerName(e.target.value)}
          value={customername}
        />
        <TextField
          required
          id="outlined-required"
          label="Mobile Number"
          onChange={(e)=>setMobileno(e.target.value)}
          value={mobileno}
        />
         <TextField
          id="outlined-select-currency"
          select
          label="File Type"
          onChange={(e)=>setfileType(e.target.value)}
          value={fileType}
        >
          {FiletypeList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Product"
          onChange={(e)=>setProduct(e.target.value)}
          value={product}
        >
          {products.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Loan Amount"
          onChange={(e)=>setLoanAmount(e.target.value)}
          value={loanAmount}
        />
         <TextField
          required
          id="outlined-required"
          label="Place"
          onChange={(e)=>setPlace(e.target.value)}
          value={place}
        />
        <TextField
          required
          id="outlined-required"
          label="Reference Name"
          onChange={(e)=>setReferenceName(e.target.value)}
          value={referencename}
        />    
       </div>
      <div>
      <Button sx={{mb:3}} variant="contained" onClick={()=>{createfileData()}}>Submit</Button>        
      </div>
      
    </Box>
  );
}
