// import styled from "styled-components";

// export const StyledSearchInput = styled.section`
//   display: flex;
//   justify-content: center;
//   margin: 1.5rem;

//   .Card {
//     padding: 10px;
//     border-radius: 10px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     width: 100%;
//     max-width: 400px;
//     background: #ffffff;
//   }

//   .CardInner {
//     padding: 10px;
//     background-color: #f5f7fa;
//     border-radius: 10px;
//   }

//   .container {
//     display: flex;
//     align-items: center;
//   }

//   .Icon {
//     width: 36px;
//     height: 36px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     background: #e2e9f4;
//     margin-right: 8px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//     svg {
//       width: 18px;
//       height: 18px;
//     }
//   }

//   .InputContainer {
//     flex: 1;
//     position: relative;
//     border-radius: 10px;
//     overflow: hidden;
//   }

//   input {
//     width: 100%;
//     padding: 10px;
//     border: none;
//     background-color: #e3edf7;
//     font-family: "Arial", sans-serif;
//     font-weight: 500;
//     color: #333;
//     border-radius: 10px;
//     box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
//     transition: all 0.2s ease-in-out;
//     font-size: 14px;

//     &::placeholder {
//       color: #aaa;
//       font-weight: 400;
//     }

//     &:focus {
//       outline: none;
//       background-color: #d9e6f2;
//       box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
//     }
//   }
// `;
import styled from "styled-components";

export const StyledSearchInput = styled.section`
  display: flex;
  justify-content: center;
  margin: 1.5rem;

  .Card {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    background: #ffffff;
  }

  .CardInner {
    padding: 10px;
    background-color: #f5f7fa;
    border-radius: 10px;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .Icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #e2e9f4;
    margin-right: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .InputContainer {
    flex: 1;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #e3edf7;
    font-family: "Arial", sans-serif;
    font-weight: 500;
    color: #333;
    border-radius: 10px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    font-size: 14px;

    &::placeholder {
      color: #aaa;
      font-weight: 400;
    }

    &:focus {
      outline: none;
      background-color: #d9e6f2;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .Popup {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #f0f4f8, #d9e6f2);
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 15px;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

.Popup p {
  margin: 0;
  padding: 0;
  color: black;
  font-size: 20px;
  font-weight: 500;
}

.Popup button {
  margin-top: 15px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
`;
