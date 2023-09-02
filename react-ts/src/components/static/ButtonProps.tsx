import React  from "react"
import styled from "styled-components"
interface iButton {
    text?: string;
    bg?: string;
    col?: string;
 
}

const ButtonProps: React.FC<iButton> = ({text, bg, col}) => {


  return (
    <div>
        <Button bg={bg!} col={col!}>
                {text}
        </Button>
    </div>
  )
}

export default ButtonProps

const Button = styled.button<{bg: string, col: string}>`
padding: 10px 20px;
border-radius: 20px;
font-weight: 700;
border: 1px solid black;
background-color: ${({bg}) => bg};
color: ${({col}) => col };
`;