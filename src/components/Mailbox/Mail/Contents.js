import React, { Component } from "react";

class Contents extends Component {
  render() {
    return (
      <div className="mb-block">
        <b>Hey,</b>
        <p>
          Suspendisse congue turpis vitae lectus condimentum, non dapibus justo
          scelerisque. Aenean sit amet elementum eros. Vivamus finibus, augue
          sed mollis accumsan, felis odio congue risus, vel laoreet felis metus
          vel purus.
        </p>
        <p>
          Fusce efficitur, diam non aliquam scelerisque, erat lacus posuere
          purus, eget suscipit nisl leo nec arcu:
        </p>
        <ul>
          <li>
            Nam nisl ipsum, blandit vitae hendrerit ut, tincidunt at orci.
          </li>
          <li>Aliquam lacinia tempor nibh.</li>
          <li>Aliquam dictum dignissim dolor a venenatis.</li>
        </ul>

        <p>
          Donec ornare velit ut volutpat blandit. Cras sit amet euismod erat,
          vitae congue justo. Sed auctor sagittis urna at mattis. Aliquam
        </p>
        <b>
          <p>Best,</p>
        </b>
        <b>
          <p>Rick</p>
        </b>
      </div>
    );
  }
}

export default Contents;
