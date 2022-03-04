import React from 'react';
import Button from './Button';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/profileimg4.jpg';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection_left,
  .aboutSection_right {
    flex: 1;
  }
  .aboutSection_right {
    border: 2px solid var(--gray-1);
  }
  .section_title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    padding: 10rem 0 0;

    .aboutSection_left {
      flex: 4;
    }
    .aboutSection_right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      margin-top: 6rem;
      flex-direction: column;
      text-align: center;
    }
    .aboutSection_left,
    .aboutSection_right {
      width: 100%;
    }
    .aboutSection_right {
      margin-top: 3rem;
    }
    .section_title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection_buttons {
      flex-direction: column;
      gap: 0rem;
      .button_wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <Ptext>
            Well-organized person, problem solver, independent employee, but
            also a team-player with high attention to detail. Fan of football,
            outdoor activities, skateboarding, jazz music, minimalist designs
            and art. A family person and father of three stubborn boys.
            Interested in the entire web development spectrum and working on
            ambitious projects with positive people.
          </Ptext>
          <div className="aboutSection_buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection_right">
          <img className="aboutImg" src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
