import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: props.checkboxes,
      checkedItems: new Map()
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  render() {
    return (
      <div className="App">
        {this.state.checkboxes.map((el, index) => <div>
          <input type="checkbox" id={this.generateID(index)} name={el.label} checked={this.state.checkedItems.get(el.label)} onChange={this.handleOnChange}></input>
          <label>{el.label}</label>
        </div>)}
      </div>
    );
  }

  generateID(index) {
    return `checkbox-${index}`
  }
  
  handleOnChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    if (item === this.props.selectAllCheckbox.label) {
      this.state.checkboxes.forEach(element => {
        if (element.label !== this.props.selectAllCheckbox.label) {
          this.setState((state) => ({ checkedItems: state.checkedItems.set(element.label, isChecked) }));
        }        
      });
    } else {
      if (!isChecked) {
        this.setState((state) => ({ checkedItems: state.checkedItems.set(this.props.selectAllCheckbox.label, isChecked) }));
      }
      this.setState((state) => ({ checkedItems: state.checkedItems.set(item, isChecked) }));
    }
  }
}
