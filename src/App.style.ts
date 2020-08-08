import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    body{
        background-color: #212529;
        margin: 0;
        padding: 0 20px;
        display:flex;
        justify-content: center;
    }
    *{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    position: relative;
    top: 45px;
    background-color: #ced4da;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 18px solid #212529;
  }
  .score p {
    color: #212529;
    font-size: 4.8rem;
    padding: 0 0 0 38px;
  }
  h1 {
    color: #e9ecef;
    font-size: 70px;
    font-weight: 400;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #e9ecef, #ced4da);
    border: 2px solid #f8f9fa;
    box-shadow: 0px 5px 10px rgba(248, 249, 250, 0.25);
    border-radius: 10px;
    height: 60px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 300px;
    font-size: 30px;
  }
`;
