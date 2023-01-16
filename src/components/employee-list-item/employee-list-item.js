import React from 'react';

import './employee-list-item.css';

class EmployeeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      isLike: false
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }))
  }

  onLike = () => {
    this.setState(({isLike}) => ({
      isLike: !isLike
    }))
  }

  render() {
    const {salary, name} = this.props;
    const {increase, isLike} = this.state;

    let classNames = "list-group-item d-flex justify-content-between";

    if(increase) {
    classNames += " increase";
    }
    if(isLike) {
      classNames += " like";
      }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.onIncrease}>
              <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm">
              <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployeeListItem;