import React from 'react'
import styled from 'styled-components'
import image from '../../images/image2.jpg'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 0 0 30px 0;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 900px;
    overflow: hidden;
    margin-top: 50px;
    padding: 10px;
    border: 1px solid #333;

    @media (max-width: 900px){
        margin-top: 0;
        max-width: 100%;
        border: none;
    }
`

const Image = styled.img`
    width: 100%;
    height: auto;
    border: 1px solid #333;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 50px;
`

const Title = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    color: #333;
    text-align: center;
    width: 100%;
    line-height: 1;

    @media (max-width: 1220px){
        font-size: 3.5rem;
    }
`

const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: #666;
    text-align: justify;
    width: 100%;
    margin-top: 30px;

    @media (max-width: 1220px){
        font-size: 1rem;
    }
`

const About = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={image} alt="ironman" />
            </ImageWrapper>
            <ContentWrapper>
                <Title>
                    From Ink to Infinity: The Enduring Legacy of Bhagat Singh
                </Title>
                <Description>
                    Bhagat Singh (1907-1931) was a pivotal figure in India's fight for independence. Born into a politically active family, Bhagat Singh's revolutionary spirit ignited at a young age. Witnessing the brutality of British rule and the Jallianwala Bagh massacre deeply impacted him. He became actively involved in the freedom struggle, joining the Hindustan Republican Association (HRA).
                    <br /><br />
                    Bhagat Singh's actions were daring and symbolic. He participated in the assassination of a British police officer in retaliation for the death of an Indian nationalist leader. Later, along with his comrades, he orchestrated the bombing of the Central Legislative Assembly in Delhi – a powerful act intended to awaken the nation.
                    <br /><br />
                    His defiance and subsequent trial captivated the country. Bhagat Singh, despite his young age, displayed remarkable courage and conviction. He turned his trial into a platform to condemn British imperialism and inspire others to fight for freedom. Even while incarcerated, he embarked on a hunger strike to protest the harsh conditions faced by Indian political prisoners.
                    <br /><br />
                    Bhagat Singh's execution at the age of 23 only amplified his legacy. He became a symbol of unwavering resistance and a martyr for India's cause. His name continues to evoke immense respect and inspire generations of Indians in the fight for justice and equality.
                </Description>
            </ContentWrapper>
        </Wrapper>
    )
}

export default About