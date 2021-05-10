import Slider from "react-slick";
import Head from "next/head";
import { Container, Tecnology } from "./styles";

const slick = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    centerMode: true,
    centerPadding: '15px',
  };

  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings}>
        <div style={{width: '400px'}}>
          <img />
          <h1>landtech1</h1>
          <p>paragraph</p>
          <h2>tecnologias usadas</h2>
          <Tecnology>
            <button>PhP</button>
            <button>JS</button>
            <button>C#</button>
          </Tecnology>
        </div>
        <div style={{width: '400px'}}>
          <img />
          <h1>landtech2</h1>
          <p>paragraph</p>
          <h2>tecnologias usadas</h2>
          <Tecnology>
            <button>PhP</button>
            <button>JS</button>
            <button>C#</button>
          </Tecnology>
        </div>
        <div style={{ width: '400px'}}>
          <img />
          <h1>landtech3</h1>
          <p>paragraph</p>
          <h2>tecnologias usadas</h2>
          <Tecnology>
            <button>PhP</button>
            <button>JS</button>
            <button>C#</button>
          </Tecnology>
        </div>
        <div style={{ width: '400px'}}>
          <img />
          <h1>landtech4</h1>
          <p>paragraph</p>
          <h2>tecnologias usadas</h2>
          <Tecnology>
            <button>PhP</button>
            <button>JS</button>
            <button>C#</button>
          </Tecnology>
        </div>
      </Slider>
    </Container>
  );
};

export default slick;
