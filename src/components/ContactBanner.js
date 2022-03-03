import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Ptext from './Ptext';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .contactBanner_wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
  .contactBanner_heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner_heading {
      font-size: 1.8rem;
      margin-bottom: 1.4rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner_wrapper">
          <Ptext>Have a project in mind?</Ptext>
          <h3 className="contactBanner_heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
