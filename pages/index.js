import { TextField, Button } from "@material-ui/core";

const Home = () => {
  const onSubmit = event => {
    console.log(event)
    event.preventDefault();
    console.log('evennnt', event);
  };

  return (
    <>
      <div>Entre em contato</div>
      <form onSubmit={onSubmit} style={{ width: "650px", margin: '40px auto', textAlign: 'center' }}>
        <div style={{ marginBottom: "24px", display: "flex" }}>
          <div style={{ width: "50%", marginRight: "32px" }}>
            <TextField fullWidth id="name" label="name" variant="outlined" />
          </div>
          <div style={{ width: "50%" }}>
            <TextField fullWidth id="email" label="email" variant="outlined" />
          </div>
        </div>
        <div style={{ marginBottom: "24px", display: "flex" }}>
          <div style={{ width: "50%", marginRight: "32px" }}>
            <TextField
              fullWidth
              id="Subject"
              label="Subject"
              variant="outlined"
            />
          </div>
          <div style={{ width: "50%" }}>
            <TextField
              fullWidth
              id="telephone"
              label="telephone"
              variant="outlined"
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
