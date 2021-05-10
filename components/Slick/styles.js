import styled from "styled-components";

export const Container = styled.section`
  background-color: purple;
  padding: 40px 0px;
  .slick-slider.slick-initialized {
    /* display: flex; */
    text-align: center;
  }

  .slick-slide {
    background: #fff;
    padding: 40px 0px;
    border-radius: 5px;
  }

  .slick-center {
    z-index: 3;
  }

  .slick-slide:not(.slick-center) {
    transform: scale(0.8);
    transition:  0.4s ease-in-out;
  }

  /* .slick-current  div {
    background: red;
    transform: translateX(-40%) scale(0.8) !important;
    z-index: -4;
    opacity: 0.7;
  } */

  .slick-current {
    transform: none;
  }

  .slick-arrow {
    height: 58px;
    width: 58px;
    z-index: 1;

    &::before {
      content: "";
      display: inline-block;
      background: none;
      border: none;
      box-shadow: inset 3px -3px 0 0px #fff;
      border-width: 0 0 5px 5px;
      transition: 0.2s;
      padding: 0;
      position: absolute;
      transform: rotate(0deg);
    }
  }

  .slick-prev::before {
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-right: 25px solid #c9c9c9;
  }

  .slick-next::before {
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-left: 25px solid #c9c9c9;
  }
  .slick-current {
    display: flex;
    justify-content: center;
  }
`;

export const Tecnology = styled.div``;
