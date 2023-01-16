import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';
import './app.css';

function App() {

  const data = [
    {id: 1, name: 'Kostya M.', salary: 4000, increase: true},
    {id: 2, name: 'Postya N.', salary: 11000, increase: false},
    {id: 3, name: 'Mostya K.', salary: 3000, increase: false},
  ]

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeeList data={data}/>
      <EmployeeAddForm/>
    </div>
  )
}

export default App;