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
      // si on coche select all on set tous les éléments avec la valeur checked du select all
      this.state.checkboxes.forEach(element => {
        this.setState((state) => ({ checkedItems: state.checkedItems.set(element.label, isChecked) }));  
      });
    } else {
      if (!isChecked) {
        // des qu'on décoche une case, on met le checked du select all à faux
        this.setState((state) => ({ checkedItems: state.checkedItems.set(this.props.selectAllCheckbox.label, isChecked) }));
        this.setState((state) => ({ checkedItems: state.checkedItems.set(item, isChecked) }));
      } else {
        this.setState((state) => ({ checkedItems: state.checkedItems.set(item, isChecked) }));
        // on compte le nombre d'élément checked qui ne sont pas le select all 
        let counter = 1;
        this.state.checkedItems.forEach((element, key) => {
          if (key !== this.props.selectAllCheckbox.label && element) {
            counter += 1;
            // si tous les éléments sont checked alors le select all passe à l'état checked
            if (counter === (this.state.checkboxes.length-1)) {
              this.setState((state) => ({ checkedItems: state.checkedItems.set(this.props.selectAllCheckbox.label, true) }));
            }
          }
        });
      }
    }
  }
}
