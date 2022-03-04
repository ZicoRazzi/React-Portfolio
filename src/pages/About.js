import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import Button from '../components/Button';
import ContactBanner from '../components/ContactBanner';
import Ptext from '../components/Ptext';
import AboutImg from './../assets/images/profileimg.jpg';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    border: 2px solid var(--gray-1);

    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about_heading {
      font-size: 2.6rem;
    }
    .about_info_heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">
              Hi, I am <span>Zico Rasimogli</span>
            </p>
            <h2 className="about_heading">A Front End Developer</h2>
            <div className="about_info">
              <Ptext>
                I’m a Front End Developer located in The Netherlands. I have a
                serious passion for UI effects, animation and creating
                intuitive, dynamic user experiences.
                <br />
                <br />
                Well-organized person, problem solver, independent employee, but
                also a team-player with high attention to detail. Fan of
                football, outdoor activities, skatebording, jazz music,
                minimalist designs and art.
                <br />
                <br />A family person and father of three stubborn boys.
                Interested in the entire web development spectrum and working on
                ambitious projects with positive people.
              </Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about_info_items">
          <h1 className="about_info_heading">Education</h1>
          <AboutInfoItem title="College" items={['Fashion College, Baku']} />
          <AboutInfoItem
            title="University"
            items={['State Academy of Art, Baku']}
          />
          <AboutInfoItem title="College" items={['GMI, Amsterdam']} />
          <AboutInfoItem title="College" items={['TechGrounds, Amsterdam']} />
        </div>
        <div className="about_info_items">
          <h1 className="about_info_heading">My Skills</h1>
          <AboutInfoItem
            title="Front-End"
            items={['HTML', 'CSS', 'JS', 'REACT']}
          />
          <AboutInfoItem title="Design" items={['Photoshop', 'Figma']} />
        </div>
        {/* <div className="about_info_items">

             <h1 className="about_info_heading">Experiences</h1>
            <AboutInfoItem 
            title="College"
            items={['Fashion College, Baku']}
            />
            <AboutInfoItem 
            title="University"
            items={['State Academy of Art, Baku']}
            />
          </div> */}
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
