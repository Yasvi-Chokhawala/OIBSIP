import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 430px;
    max-width: 400px;
    width: 100%;
    gap: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ffffff;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 0 30px;
`

const Title = styled.h1`
    font-weight: 600;
`

const SubTitle = styled.h3`
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 90%;
    padding: 0 30px;    
`

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3px;
`

const Label = styled.label`
    width: 100%;
    text-align: left;
`

const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;

    &:focus {
        border: 1px solid #000;
    }
`

const LoginButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
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

const Switch = styled.div`
    font-size: 14px;
`

const Span = styled.a`
    color: #893DFF;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: underline;
`

const Login = (props) => {
    const { showAlert } = props
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Login Page"
    })

    const [userCredentials, setUserCredentials] = useState({
        username: "",
        password: ""
    })

    const onChange = (e) => {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        
        const url = "http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCredentials)
        })

        const json = await response.json()

        if(json.success){
            showAlert("success", "Login successful!")
            navigate("/secured")
        }
        else{
            showAlert("error", "Invalid credentials!")
        }
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Login</Title>
            </TitleWrapper>
            <Form onSubmit={onSubmit}>
                <FieldWrapper>
                    <Label>Username</Label>
                    <Input type="text" name="username" placeholder="Enter your username" onChange={onChange} required/>
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Enter your password" onChange={onChange} required/>
                </FieldWrapper>
                <LoginButton type="submit">Login</LoginButton>
            </Form>
            <Switch>
                <SubTitle>Don't have an account? <Span><Link to="/register">Sign up!</Link></Span></SubTitle>
            </Switch>
        </Wrapper>
    )
}

export default Login