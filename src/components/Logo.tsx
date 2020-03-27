import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
export const LogoField = styled.div`
margin-right: auto;
flex-direction: row;
display: flex;
align-content: center;
align-items: center;
justify-content: center;
`
export const LogoImage = styled.img`
align-self: center;
justify-self: center;
`
export const FirstName = styled.span`
color: ${props => props.theme.colors.white};
font-size: 22px;
margin: 0 0 0 6px;
`
export const SecondName = styled.span`
color: ${props => props.theme.colors.primary};
font-size: 22px;

`
const Logo = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <LogoField>
            {
                themeContext.colors.primary === '#FF9140' ?
                    <LogoImage src={require('../assets/logo/logo-orange.png')} width="40" /> :
                    <LogoImage src={require('../assets/logo/logo-1920.svg')} width="40" />
            }
            <FirstName>SPLIT</FirstName>
            <SecondName>MASTER</SecondName>
        </LogoField>
    )
}

export default Logo
