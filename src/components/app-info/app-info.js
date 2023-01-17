import './app-info.css';

const AppInfo = (props) => {
  const {data} = props;
  let increaseCount = data.filter(item => item.increase === true).length;

  return (
    <div className="app-info">
      <h1>Учёт сотрудников компании BagPol</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат: {increaseCount}</h2>
    </div>
  )
}

export default AppInfo;