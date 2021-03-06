﻿//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'reactstrap';
import "./HomeFooter.scss"
//const bootstrap = require('react-bootstrap');
//import Popper from 'popper.js'
//import Head from 'next/head'
//import "../../bootstrap-override.css"
//import console = require('console');
//import "./menu.scss"
import { MDBRow, MDBCol, MDBFooter, MDBContainer } from 'mdbreact'
export default class HomeFooter extends React.Component {
  render() {
    return (
      <MDBFooter color="black" className="HomeFooter footer font-small ">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <NavLink className="FooterNavLink" style={{ fontFamily: "Graphik Web", lineHeight: "32px", fontWeight: "bold", fontSize: "18px", color: "#1A1A1A" }} href="connect">Connect</NavLink>
              <NavLink className="FooterNavLink" style={{ fontFamily: "Graphik Web", lineHeight: "32px", fontWeight: "bold", fontSize: "18px", color: "#1A1A1A" }} href="about-us">About Us</NavLink>
              <NavLink className="FooterNavLink" style={{ fontFamily: "Graphik Web", lineHeight: "32px", fontWeight: "bold", fontSize: "18px", color: "#1A1A1A" }} href="careers">Staff &amp; Careers</NavLink>
              <NavLink className="FooterNavLink" style={{ fontFamily: "Graphik Web", lineHeight: "32px", fontWeight: "bold", fontSize: "18px", color: "#1A1A1A" }} target="_blank" rel="noopener noreferrer" href="http://www.tmhrentals.com">Oakville Facility Rentals</NavLink>
              <br />
              <br />
              {/*              <img src="/static/google-play-badge.png" width="135" height="52" alt="Download App on Google Play Store" />
              <a href="https://apps.apple.com/us/app/meeting-house/id917315049?mt=8"><img src="/static/AppleStore-badge.svg" width="135" height="38" alt="Download App on Apple Store" /></a>
    */}           </MDBCol>
            <MDBCol md="6">
              <p className="HomeFooterP" style={{ lineHeight: "16px", fontSize: "12px", fontFamily: "Graphik Web", color: "#1A1A1A" }}>
                <b>Main Office</b><br />
                <a href="https://www.google.com/maps/place/The+Meeting+House+Oakville/@43.5114145,-79.6860044,18.75z/data=!4m13!1m7!3m6!1s0x882b43061295ed3d:0x6c6d4c16d7ec8f0e!2s2700+Bristol+Cir,+Oakville,+ON+L6H+6E1!3b1!8m2!3d43.5111738!4d-79.685115!3m4!1s0x882b430685cd3af1:0xd4bac54f4e0dde88!8m2!3d43.5112168!4d-79.6853386" rel="noopener noreferrer" target="_blank">2700 Bristol Circle</a><br />
                Oakville, ON L6H 6E1<br />
                Canada<br /><br />
                <b>Phone</b><br />
                <a href="tel:+1-905-287-7000">905-287-7000</a><br /><br />
                <b>Email</b><br />
                <a className="HomeFooterA" href="mailto:hello@themeetinghouse.com" style={{ color: "#1A1A1A" }}>hello@themeetinghouse.com</a></p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <div className="footerSocial">
            <span><a href="https://www.facebook.com/themeetinghousechurch/" rel="noopener noreferrer" target="_blank" className="FooterSocialA" style={{ whiteSpace: "nowrap", color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginTop: "2.5vw", marginBottom: "2.5vw" }} className="FooterSocialImg" src="/static/svg/Facebook.svg" alt="Facebook Logo" />Facebook</a></span>
            <span><a href="https://twitter.com/TheMeetingHouse" rel="noopener noreferrer" target="_blank" className="FooterSocialA" style={{ whiteSpace: "nowrap", color: "#1A1A1A" }}><img className="FooterSocialImg" style={{ marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw" }} src="/static/svg/Twitter.svg" alt="Twitter Logo" />Twitter</a></span>
            <span><a href="https://www.youtube.com/themeetinghouse" rel="noopener noreferrer" target="_blank" className="FooterSocialA" style={{ whiteSpace: "nowrap", color: "#1A1A1A" }}><img className="FooterSocialImg" style={{ marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw" }} src="/static/svg/Youtube.svg" alt="Youtube Logo" />Youtube</a></span>
            <span><a href="https://www.instagram.com/themeetinghouse/" rel="noopener noreferrer" target="_blank" className="FooterSocialA" style={{ whiteSpace: "nowrap", color: "#1A1A1A" }}><img className="FooterSocialImg" style={{ marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw" }} src="/static/svg/Instagram.svg" alt="Instagram Logo" />Instagram</a></span>
          </div>
          <br />
          <br />
          <br />
          <p className="HomeFooterCopyright" style={{ fontFamily: "Graphik Web", fontSize: "12px", margin: "0px", padding: "5px", color: "#646469" }}>             All Rights Reserved. &copy; {new Date().getFullYear()} The Meeting House</p>
        </MDBContainer>
      </MDBFooter>
    );
  }
}
