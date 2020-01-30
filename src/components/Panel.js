import React, {Component} from "react";

class Panel extends Component {
  render() {
    const {lable, value, onSelect} = this.props;

    return (
      <section className="dashboard__panel" onClick={onSelect}>
  <h1 className="dashboard__panel-header">{lable}</h1>
    <p className="dashboard__panel-value">{value}</p>
    </section>
    );
  }
}
export default Panel;
