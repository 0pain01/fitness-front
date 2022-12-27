import React, { useRef, useState } from 'react';
import axios from 'axios'
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material';


const Register = () => {
    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const [alert, setAlert] = useState(false);
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit=(e)=>{
        console.log("subscribed");

        e.preventDefault();
        const x = {
            method:"post",
            url:"https://fitness-web.onrender.com/subs",
            data: {
                name,
                email
            }
        }
        setName('');
        setEmail('');

        axios(x)
        .then((result)=>{
            console.log("success");
            setAlert(true);
        }).catch((error)=>{
            console.log("failed");
            setAlert(false);
        })
    }

  return (
    <Stack id="register" alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={600} sx={{ fontSize: { lg: '35px', xs: '20px' } }} mb="49px" textAlign="center">
        Subscribe <br /> To our NewsLetter
      </Typography>
      <Box position="relative" mb="72px" >
        <TextField
          ref={firstRef}
          height="76px"
          label="Name"
          sx={{ input: { fontWeight: '700', border: 'none' }, width: {lg: '550px' ,xs:'200px'}, backgroundColor: '#fff', borderRadius: '10px',margin:'20px' }}
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          placeholder="Enter Name"
          type="text"
        />
        <TextField
          ref={lastRef}
          height="76px"
          label="Email"
          sx={{ input: { fontWeight: '700', border: 'none' }, width: {lg: '550px' ,xs:'200px'}, backgroundColor: '#fff', borderRadius: '10px',margin:'20px' }}
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Enter Email"
          type="text"
        />
        <br></br>
        <Button position="relative" variant="contained" color="success" sx={{ textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', fontSize: { lg: '20px', xs: '14px' },margin :'20px' }} 
        onClick={(e)=>handleSubmit(e)}
        >
          Subscribe
        </Button>
        {alert ? <Alert severity='success'>Subscribed</Alert> : <></> }
      </Box>
    </Stack>
  )
}

export default Register
