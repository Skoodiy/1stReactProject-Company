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
        {id: 2, name: 'Postya N.', salary: 900, increase: false, rise: false},
        {id: 3, name: 'Mostya K.', salary: 3000, increase: false, rise: false},
      ],
      term: '',
      filter: 'all'
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

  searchEmp = (items, term) => {
    if(term.length === 0) {
      return items;
    }
    
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterEmp = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'rised': 
        return items.filter(item => item.rise);
      case 'more1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo data={data}/>
  
        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter 
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeeList 
            data={visibleData}
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