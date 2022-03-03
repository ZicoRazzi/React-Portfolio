import React from 'react';
import Ptext from './Ptext';
import MapImg from '../assets/images/map.png';
import styled from 'styled-components';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 600px;
  margin-top: 5rem;
  .container {
    position: relative;
    min-height: 600px;
  }
  .map_card {
    position: absolute;
    left: 15%;
    bottom: 20%;
    padding: 2rem;
    background-color: var(--gray-2);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map_card_heading {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
  .map_card_link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  @media only screen and(max-width: 768px) {
    background-position: 70% center;
  }
  @media only screen and(max-width: 440px) {
    .map_card {
      max-width: 200px;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map_card">
          <div className="map_card_heading">
            <h3>My location</h3>
            <Ptext>De gouden bocht, Wormerveer, The Netherlands</Ptext>
            <a
              href="https://www.google.nl/maps/place/Zaanweg+46,+1521+DL+Wormerveer/@52.4906186,4.7957653,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5fc6fcb9be7e3:0xc510fde0f2495e7d!8m2!3d52.4906186!4d4.797954"
              className="map_card_link"
              target="_blank"
              rel="norefferer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </MapStyles>
  );
}
