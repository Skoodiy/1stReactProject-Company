import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [
        {id: 1, name: 'Kostya M.', salary: 4000, increase: true, rise: true},
        {id: 2, name: 'Postya N.', salary: 11000, increase: false, rise: false},
        {id: 3, name: 'Mostya K.', salary: 3000, increase: false, rise: false},
      ]
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {      
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addEmployee = (name, salary) => {
    if (name && salary) {
      let newEmployee = {
        id: this.maxId,
        name,
        salary,
        increase: false,
        rise: false
      };
      this.maxId += 1;
  
      this.setState(({data}) => {
        return {
          data: [...data, newEmployee]
        }
      })
    }
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }


  render() {
    return (
      <div className="app">
        <AppInfo data={this.state.data}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployeeList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}/>
        <EmployeeAddForm
            onAddEmployee={this.addEmployee}
        />
      </div>
    )
  }
}

export default App;