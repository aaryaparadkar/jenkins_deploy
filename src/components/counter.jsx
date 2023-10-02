import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge bg-success m-2 p-2"> {this.formatcount()}</span>
        <button
          style={{ border: 0 }}
          onClick={() => this.props.onIncremet(this.props.counter)}
          className="badge bg-primary m-2 p-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Del
        </button>
      </div>
    );
  }

  formatcount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
