import React, { Component } from "react";
import "./Tour.scss";

export default class TourList extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <soan className="close-btn">
            <i className="fas fa-window-close"></i>
          </soan>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info<span className="fas fa-caret-square-down"></span>
          </h5>
          <p>acasfvaswfweiuhgewi weihfiwejgfwej qwhfiqwfn</p>
        </div>
      </article>
    );
  }
}
