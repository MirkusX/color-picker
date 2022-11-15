import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: 28.75em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  min-height: fit-content;
  width: 70%;
  background-color: white;
  border: gray 1px solid;
  border-radius: 3px;
  font-size: large;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.copyDiv)
      return `
    gap: 0.5em;`;
  }}
`;

export const StyledSection = styled.section`
  width: 40%;
  margin: 0 auto;
  background-color: white;
  margin-bottom: 1em;
  padding-bottom: 0.1em;
  border-radius: 3px;
`;

export const HexDiv = styled.div`
  background-color: white;
  width: 100%;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  padding: 1em;
`;

export const CopiedDiv = styled.div`
  display: none;
  color: black;
  background-color: white;
  border-radius: 3px;
  width: fit-content;
  margin: 0 auto;
  padding: 0.5em;
  ${(props) => {
    if (props.copied)
      return `
    display: block;`;
  }};
`;

export const Checkmark = styled(FcCheckmark)``;
