import { useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';

const Home = () => {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [subject, setSubject]= useState('');
  const [telephone, setTelephone]= useState('');
  const [body, setBody]= useState('');
  
  const onSubmit = async e => {
    e.preventDefault();

    if(name && email && subject && telephone && body) {
      try {
       await axios.post('/api/contact', { name, email, subject, telephone, body})
        
      } catch (error) {
        console.log('error =>>', error)
      }
    } else {
      // alert('nada')
    }
  };

  return (
    <>
      <div>Entre em contato</div>
      <form onSubmit={onSubmit} style={{ width: "650px", margin: '40px auto', textAlign: 'center' }}>
        <div style={{ marginBottom: "24px", display: "flex" }}>
          <div style={{ width: "50%", marginRight: "32px" }}>
            <TextField onChange={e => setName(e.target.value)} fullWidth id="name" label="name" variant="outlined" />
          </div>
          <div style={{ width: "50%" }}>
            <TextField onChange={e => setEmail(e.target.value)} fullWidth id="email" label="email" variant="outlined" />
          </div>
        </div>
        <div style={{ marginBottom: "24px", display: "flex" }}>
          <div style={{ width: "50%", marginRight: "32px" }}>
            <TextField
              fullWidth
              id="Subject"
              label="Subject"
              variant="outlined"
              onChange={e => setSubject(e.target.value)}
            />
          </div>
          <div style={{ width: "50%" }}>
            <TextField
              fullWidth
              id="telephone"
              label="telephone"
              variant="outlined"
              onChange={e => setTelephone(e.target.value)}
            />
          </div>
        </div>
        <div>
          <TextField
            fullWidth
            multiline
            rows={4}
            id="body"
            label="body"
            variant="outlined"
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <div style={{ width:' 50%', margin: '0 auto' }}>
          <Button fullWidth type="submit" variant="contained" color="primary" style={{marginTop:'32px'}}>Enviar</Button>
        </div>
      </form>
    </>
  );
};

export default Home;
