import React, { Component } from "react";
import "./Tour.scss";

export default class TourList extends Component {
  state = {
    showInfo: false
  };

  //es funkcian showInfon ete false sarkuma true u hakarake
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { id, img, city, name, info } = this.props.tour;
    const { removeTours } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span
            className="close-btn"
            onClick={() => {
              removeTours(id);
            }}
          >
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
