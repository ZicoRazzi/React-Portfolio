import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import Ptext from './Ptext';

const FooterStyles = styled.div`
  padding-top: 5rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
    width: 100%;
  }
  /* .footer_col1{
  flex: 2;
  text-align: center;
  .footer_col1_title{
    margin-bottom: 2rem;
    font-size: 3.5rem;
  }
} */
  .footer_col1,
  .footer_col2,
  .footer_col3 {
    /* flex: 1; */
    width: 33.33%;
    padding: 0 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      width: 100%;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer_col1,
    .footer_col2,
    .footer_col3 {
      /* flex: 1; */
      width: 100%;
      padding: 0 2rem;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        {/* <div className="footer_col1">
          <h2 className="footer_col1_title">
            Zico Rasimogli
          </h2>
          <Ptext>
          I’m a Front End Developer located in The Netherlands. I have a serious passion for UI effects, animation and creating intuitive, dynamic user experiences.
          </Ptext>
        </div> */}
        <div className="footer_col1">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer_col2">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+31 641328542',
                path: 'tel: +31 641328542',
              },
              {
                title: 'zicorazzi@gmail.com',
                path: 'mailto:zicorazzi@gmail.com',
              },
              {
                title: 'Zaanweg 46, 1521Dl Wormerveer',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading="Socials"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
              {
                title: 'GitHub',
                path: 'http://github.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>Ⓒ 2022 - Designed by ZR</Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
