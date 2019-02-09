import React, { Component } from 'react';
import './MemoryCard.css';


class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
    this.props = {};
  }
  clickHandler() {
    this.setState({ isFlipped: !(this.state.isFlipped) })
  }
  render() {
    var memoryCardInnerClass = "MemoryCardInner"
    if (this.props.isFlipped) {
      memoryCardInnerClass = memoryCardInnerClass + " flipped"
    }
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"></img>
          </div>
          <div className="MemoryCardFront">
            {this.props.symbol}
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;