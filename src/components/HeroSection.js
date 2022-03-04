import React from 'react';
import HeroImg from '../assets/images/profileimg3.jpg';
import Ptext from './Ptext';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    font-size: 2rem;
    margin-bottom: 8rem;
    top: 11rem;
    position: relative;
  }
  span {
    display: inline-block;
    width: 100%;
  }
  .hero_name {
    font-size: 5rem;
    font-family: 'RobotoMono Regular';
    color: var(--white);
  }
  .hero_img {
    max-width: 800px;
    width: 100%;
    height: 600px;
    background-size: cover;

    margin: 0 auto;
    border: 2px solid var(--gray-1);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .hero_info {
    margin-top: -8rem;
    .para {
      margin-top: 3rem;
    }
  }

  .hero_social,
  .hero_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero_social {
    left: 50px;
    bottom: 35%;
  }
  .hero_scrollDown {
    right: 50px;
    bottom: 35%;
  }
  .hero_social_indicator,
  .hero_scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      min-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
    .hero_scrollDown {
      img {
        max-height: 70px;
      }
    }
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 1.4rem;
    }

    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: 6rem;
      .hero_name {
        font-size: 4.5rem;
      }
    }
    .hero_img {
      height: 300px;
    }
    .hero_info {
      margin-top: 3rem;
    }

    .hero_social {
      left: 0px;
      bottom: -30%;
      width: 20px;
      .hero_social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
    }
    .hero_social_text {
      ul {
        li {
          a {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
    .hero_scrollDown {
      right: 0px;
      width: 20px;
      bottom: -25%;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello, This is</span>
            <span className="hero_name">Zico Rasimogli</span>
          </h1>
          <div className="hero_img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero_info">
            <Button
              class="hero_btn"
              btnLink="/Projects"
              btnText="see my works"
            />
            <Ptext>
              I’m a Front End Developer located in The Netherlands. I have a
              serious passion for UI effects, animation and creating intuitive,
              dynamic user experiences.
            </Ptext>
          </div>
          <div className="hero_social">
            <div className="hero_social_indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/?lang=nl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
