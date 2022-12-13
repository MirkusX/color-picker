import { useContext, useEffect, useState } from "react";
import { ColorContext, DataContext, ModeContext } from "../components/Context";
import {
  Checkmark,
  CopiedDiv,
  CopiedP,
  HexDiv,
  InputDiv,
  StyledDiv,
  StyledRow,
  StyledSection,
  StyledSelect,
} from "../components/StyledComponents";

export const Frontpage = () => {
  const { data, setData } = useContext(DataContext);
  const { color, setColor } = useContext(ColorContext);
  const { mode, setMode } = useContext(ModeContext);
  const [display, setDisplay] = useState(false);
  //Displays text when you copy color code
  const text = () => {
    setDisplay((display) => (display = !display));
  };
  //Function for copying color code
  const copy = (props) => {
    navigator.clipboard.writeText(props);
    text();
  };
  //Hides text that appears after copying color code after 1.5s
  useEffect(() => {
    if (display === true) {
      setTimeout(() => {
        text();
      }, 1500);
    }
  });
  return (
    <>
      <StyledSection>
        <InputDiv>
          {/* Sets what color should be displayed */}
          <input
            type="color"
            onChange={(e) =>
              setColor((color) => (color = e.target.value.slice(1)))
            }
          />
          {/* Sets what mode should be used */}
          <StyledSelect
            onChange={(e) => setMode((mode) => (mode = e.target.value))}
          >
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome-Dark</option>
            <option value="monochrome-light">Monochrome-Light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic-Complement</option>
            <option value="triad">Triad</option>
            <option value="quad">Quad</option>
          </StyledSelect>
        </InputDiv>
        <StyledRow>
          {/* Displays colors and makes it able to be copied on click */}
          {data.colors.map((item, index) => {
            return (
              <>
                <StyledDiv
                  key={index}
                  style={{ background: `${item.hex.value}` }}
                  onClick={() => {
                    copy(item.hex.value);
                  }}
                >
                  <HexDiv>
                    <p>{item.hex.value}</p>
                  </HexDiv>
                </StyledDiv>
              </>
            );
          })}
        </StyledRow>
      </StyledSection>
      <CopiedDiv copied={display}>
        <StyledRow copyDiv>
          <Checkmark />
          <p>Copied</p>
        </StyledRow>
      </CopiedDiv>
    </>
  );
};
