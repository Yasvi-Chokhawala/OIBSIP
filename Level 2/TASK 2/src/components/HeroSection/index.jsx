import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import image from '../../images/image1.jpg'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    border-bottom: 1px solid #000000;

    @media (max-width: 700px){
        flex-direction: column;
        height: 800px;
        margin-bottom: 20px;
    }
`

const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border-right: 1px solid #000000;

    @media (max-width: 700px){
        width: 100%;
        border: none;
        padding: 20px;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 450px;
    overflow: hidden;
    border: 1px solid #333;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: auto;
    width: 100%;
    border: 1px solid #333;
`

const RightSection = styled.div`
    background-color: #F4F5F2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border-left: 1px solid #000000;

    @media (max-width: 700px){
        width: 100%;
        border: none;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`

const Title = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    color: #333;
    text-align: center;
    width: 100%;
    line-height: 1;
    margin-bottom: 0.7rem;

    @media (max-width: 1220px){
        font-size: 3.5rem;
    }
`

const YearRange = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    color: #666;
    text-align: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0.7rem;

    @media (max-width: 1220px){
        font-size: 2rem;
    }
`

const Tagline = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #666;
    text-align: center;
    width: 100%;

    @media (max-width: 1220px){
        font-size: 1.5rem;
    }
`

const HeroSection = () => {
    return (
        <Wrapper>
            <LeftSection>
                <ImageWrapper>
                    <Image src={image} alt="Robert Downey Jr."/>
                </ImageWrapper>
            </LeftSection>
            <RightSection>
                <ContentWrapper>
                    <Title>
                        Bhagat Singh
                    </Title>
                    <YearRange>
                        (1907 - 1931)
                    </YearRange>
                    <Tagline>
                        A Life That Inspires, a Spirit That Never Dies
                    </Tagline>
                </ContentWrapper>
            </RightSection>
        </Wrapper>
    )
}

export default HeroSection