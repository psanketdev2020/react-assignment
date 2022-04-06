import React, { Fragment } from 'react';
import { computeHeadingLevel } from '@testing-library/react';
import Data from './Data';
import Welcome from './Welcome';
import ProductList from './ProductList'
import AddProduct from './AddProduct'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurrentNav: 'welcome',
      products: []

    }
  }


  componentDidMount() {
    let RefVariable = Data;
    this.setState({
      products: RefVariable
    })
    // console.log(this.state.prd);
  }

  // to make active particular link wrote below fn
  handleClick = (a) => {
    this.setState({
      showCurrentNav: a
    })
    console.log('you clik on ' + a);
  }

  //to add product and added to current state
  addProduct = (product) => {
    debugger;
    this.setState(state => ({
      products: state.products.concat([product])
    }))
  }


  render() {
    return (
      <Fragment>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => this.handleClick('welcome')}>Welcome <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => this.handleClick('addProduct')}>AddProduct</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => this.handleClick('productList')}>ProductList</a>
                </li>
              </ul>
            </div>
          </nav>

          {
            this.state.showCurrentNav === "welcome" && (
              <Welcome />
            )
          }
          {
            this.state.showCurrentNav === "addProduct" && (
              <AddProduct onAddProduct={(addedProduct) => {
                this.addProduct(addedProduct)
              }}

              />
            )
          }


          {
            this.state.showCurrentNav === "productList" && (
              <ProductList
                realProduct={this.state.products}
                handleClick={this.handleClick}
              />
            )
          }
        </div>
      </Fragment >
    )
  }
}

export default Main;