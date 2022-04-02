import { TextField, Button, Typography } from "@mui/material";
import { Header, Slick } from "../components";
import { useFormik } from "formik";
import axios from "axios";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      telephone: "",
      body: "",
    },
    onSubmit: async (e) => {
      console.log("e", e);
      // await axios.post("/api/contact", {
      //   name: e.name,
      //   email: e.email,
      //   subject: e.subject,
      //   telephone: e.telephone,
      //   body: e.body,
      // });
    },
  });

  return (
    <>
      <Header />
      <Slick />
      <section
        style={{
          margin: "40px auto",
          width: '75%',
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            padding: "16px",
            borderRadius: "32px",
            color: '#FFFFFF',
            textAlign: 'center'
          }}
        >
          <Typography>Educação</Typography>
        </div>
        <div
          style={{
            backgroundColor: "red",
            width: "50%",
            padding: "16px",
            borderRadius: "32px",
            color: '#FFFFFF',
            textAlign: 'center'
          }}
        >
          <Typography>Habilidades</Typography>
        </div>
      </section>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "650px", margin: "40px auto", textAlign: "center" }}
      >
        <div style={{ marginBottom: "24px", display: "flex" }}>
          <div style={{ width: "50%", marginRight: "32px" }}>
            <TextField
              onChange={formik.handleChange}
              fullWidth
              id="name"
              name="name"
              label="name"
              variant="outlined"
            />
          </div>
          <div style={{ width: "50%" }}>
            <TextField
              onChange={formik.handleChange}
              fullWidth
              name="email"
              id="email"
              label="email"
              variant="outlined"
            />
          </div>
        </div>
        <div style={{ marginBottom: "24px", display: "flex" }}>
          <div style={{ width: "50%", marginRight: "32px" }}>
            <TextField
              fullWidth
              id="subject"
              name="subject"
              label="Subject"
              variant="outlined"
              onChange={formik.handleChange}
            />
          </div>
          <div style={{ width: "50%" }}>
            <TextField
              fullWidth
              id="telephone"
              name="telephone"
              label="telephone"
              variant="outlined"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div>
          <TextField
            fullWidth
            multiline
            rows={4}
            id="body"
            name="body"
            label="body"
            variant="outlined"
            onChange={formik.handleChange}
          />
        </div>
        <div style={{ width: " 50%", margin: "0 auto" }}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "32px" }}
          >
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
};

export default Home;
