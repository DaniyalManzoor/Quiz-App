import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 80%;
  font-size: 1.2rem;
  .quest {
    border: 1px solid #0033;
    border-radius: 40px;
    padding: 40px;
    background: #ced4da;
  }
`;
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    :hover{
        opacity 0.8;
    }
    button{
        cursor: pointer;
        user-select:none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
        border-radius: 10px;
        color: #212529;
        background: ${({ correct, userClicked }) =>
          correct
            ? "linear-gradient(90deg, #56ffa4, #56bc86)"
            : !correct && userClicked
            ? "linear-gradient(90deg, #ff5656, #c16868)"
            : "linear-gradient(90deg, #56ccff, #6eafb4)"} 
    }
`;
