import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.scss';
import DashBoard from './components/dashboard/Dashboard';
import ProductList from './components/productList/ProductList';
import data from './data/data.js'

let dashBoardData = null

function App() {

  const cleanData = () => {
    if (dashBoardData === null) {
      data.dashBoardData.forEach(item => {
        item.amount = Number(item.amount)
      })
    }
    return data.dashBoardData
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
            <Link to='/dash-board'>Dashboard</Link>
            </li>
            <li>
              <Link to='/product-list'>Product List</Link>
            </li>
          </ul>
        </header>
      </div>
      <Switch>
        <Route path='/dash-board'>
          <DashBoard dashBoardData={cleanData()}/>
        </Route>
        <Route path='/product-list'>
          <ProductList productListData={data.productList}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
