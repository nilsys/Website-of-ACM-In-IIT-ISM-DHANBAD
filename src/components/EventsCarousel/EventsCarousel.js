import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {MDBAnimation } from "mdbreact"
import { Card, Button } from 'react-bootstrap';


class EventsCarousel extends React.Component {
  constructor(props){
    super(props);
    this.date = props.date;
    this.title = props.title;
    this.description = props.description;
    this.imageURL = props.imageURL;
  }

  render() {

    return (
      <MDBAnimation reveal type="fadeInUp">
      <div className="slick-div">
        <h6 className="slick-h6">{this.title}</h6>
        <h6 className="slick-h6">{this.date}</h6>
      </div>
      </MDBAnimation>

    );
  }
}

EventsCarousel.propTypes = {
   date: PropTypes.string,
}

export default EventsCarousel;
