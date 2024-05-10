import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    max-width: 500px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 30px;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 5px;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 0 30px;
`

const Title = styled.h1`
    font-weight: 600;
`

const SubTitle = styled.h3`
    font-weight: 500;
`

const LogoutButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #893DFF;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #333;
    } 
`

const SecuredPage = (props) => {
    const { showAlert } = props
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Secured Page"
    })

    const handleClick = () => {
        showAlert("success", "You have successfully logged out.")
        localStorage.removeItem("authToken")
        navigate('/login')
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Secured Page</Title>
                <SubTitle>You have successfully logged in.</SubTitle>
            </TitleWrapper>
            <LogoutButton onClick={handleClick}>Logout</LogoutButton>
        </Wrapper>
    )
}

export default SecuredPage