import React from 'react'
import Header from '../Componants/HEADER/Header'
import { Button, TextField } from '@mui/material'

const Contact = () => {
  return (
    <div>
      <Header />
      <h1 style={{textAlign:'center',fontSize:'50px',margin:'0px'}}>Contact</h1>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center', gap:'45px',marginTop:'100px'}}>
      <TextField style={{width:"500px"}} id="outlined-basic" label="Name" variant="outlined" />
      <TextField style={{width:"500px"}}  id="outlined-basic" label="EmailAddress" variant="outlined" />

      <TextField style={{width:"500px"}}  id="outlined-basic" label="Massage" variant="outlined" multiline rows={5} />
      <Button>Submit</Button>


     
      
      
      </div>
    </div>
  )
}

export default Contact