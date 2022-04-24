import styled from "styled-components";
import { Button } from "evergreen-ui";
const BTN_LOOK_PROPS: any = {
  "primary-filled": {
    color: "#fff",
    backgroundColor: "#272E71",
    borderColor: "#272E71",
    hoverColor: "#fff",
    hoverBackgroundColor: "#272E71",
    hoverBorderColor: "#272E71",
  },
  "primary-outlined": {
    color: "#272E71",
    backgroundColor: "#fff",
    borderColor: "#272E71",
    hoverColor: "#272E71",
    hoverBackgroundColor: "#fff",
    hoverBorderColor: "#272E71",
  },
  "secondary-filled": {
    color: "#fff",
    backgroundColor: "#828A97",
    borderColor: "#828A97",
    hoverColor: "#fff",
    hoverBackgroundColor: "#828A97",
    hoverBorderColor: "#828A97",
  },
  "secondary-outlined": {
    color: "#828A97",
    backgroundColor: "#fff",
    borderColor: "#828A97",
    hoverColor: "#828A97",
    hoverBackgroundColor: "#fff",
    hoverBorderColor: "#828A97",
  },
};
const StyledButton = styled(Button)`
  padding: 10px 8px;
  box-shadow: none !important;
  line-height: 1.2 !important;
  width: ${(props: any) => props.width || "100%"};
  border: 1px solid;
  border-color: ${(props: any) => BTN_LOOK_PROPS[props.look].borderColor};
  color: ${(props: any) => BTN_LOOK_PROPS[props.look].color};
  background-color: ${(props: any) =>
    BTN_LOOK_PROPS[props.look].backgroundColor};
  transition: all 500ms ease-out;
  cursor: pointer;
  border-radius: ${(props: any) => `${props.borderRadius ?? 4}px`};

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transform: skewX(5deg);
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:hover {
    border-color: ${(props) =>
      `${BTN_LOOK_PROPS[props.look].hoverBorderColor} !important`};
    color: ${(props) => `${BTN_LOOK_PROPS[props.look].hoverColor} !important`};
    background-color: ${(props) =>
      `${BTN_LOOK_PROPS[props.look].hoverBackgroundColor} !important`};
  }
`;

export default StyledButton;
