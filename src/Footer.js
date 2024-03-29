import styled from "styled-components";
import React from "react";

export const Box = styled.div`
  padding: auto;
  background: #dc143c;
  bottom: 0;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  @media (max-width: 1000px) {
    padding: 50px 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: auto;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: #dc143c;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <Box id="contact">
      <h1 style={{ color: "white", textAlign: "center", fontSize: "40px" }}>
        Contacts
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Info</Heading>
            <FooterLink>347-801-3240</FooterLink>
            <FooterLink href="mailto:Md4376@nyu.edu">Md4376@nyu.edu</FooterLink>
            <a href="https://madany-diallo.netlify.app/">
              <b>Made with 💙 by Madany Diallo</b>
            </a>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink>
              <a href="https://www.linkedin.com/in/moussa-diallo-8654a81bb/">
                <img
                  alt=""
                  src="https://img.icons8.com/bubbles/50/000000/linkedin.png"
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  alt=""
                  src="https://img.icons8.com/bubbles/50/000000/youtube.png"
                />
              </a>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
