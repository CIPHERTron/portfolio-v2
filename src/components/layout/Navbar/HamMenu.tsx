/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";

const HamIcon = styled.div`
  display: inline-block;
  margin-left: 14px;
  .col:first-of-type {
    margin-left: 0;
  }

  .three {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }

  .hamburger .line {
    width: 35px;
    height: 2px;
    background-color: #fff;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  #hamburger-6.is-active {
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #hamburger-6.is-active .line:nth-of-type(2) {
    width: 0px;
  }

  #hamburger-6.is-active .line:nth-of-type(1),
  #hamburger-6.is-active .line:nth-of-type(3) {
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  #hamburger-6.is-active .line:nth-of-type(1) {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }

  #hamburger-6.is-active .line:nth-of-type(3) {
    -webkit-transform: translateY(-10px) rotate(90deg);
    -ms-transform: translateY(-10px) rotate(90deg);
    -o-transform: translateY(-10px) rotate(90deg);
    transform: translateY(-10px) rotate(90deg);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HamMenu({ isOpen, setIsOpen }: any) {
  const { colorMode } = useColorMode();
  return (
    <HamIcon>
      <div className="three col">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`hamburger ${isOpen ? "is-active" : ""}`}
          id="hamburger-6"
        >
          <span
            style={
              colorMode === "dark"
                ? { backgroundColor: "#ecf0f1" }
                : { backgroundColor: "#1A202C" }
            }
            className="line"
          />
          <span
            style={
              colorMode === "dark"
                ? { backgroundColor: "#ecf0f1" }
                : { backgroundColor: "#1A202C" }
            }
            className="line"
          />
          <span
            style={
              colorMode === "dark"
                ? { backgroundColor: "#ecf0f1" }
                : { backgroundColor: "#1A202C" }
            }
            className="line"
          />
        </div>
      </div>
    </HamIcon>
  );
}
