import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchField: '',
      isToggleOn: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickme = this.handleClickme.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json().then(users => this.setState({ products: users }))
    );
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  handleClickme() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    const { products, searchField } = this.state;
    const filterProduct = products.filter(product =>
      product.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        {/* <input
          type='search'760017526798
          placeholder='please enter'
          onChange={e => {
            this.setState({ searchField: e.target.value });
          }}
        /> */}
        <h1>Product List</h1>
        <SearchBox
          placeholder='look for product '
          handleChange={this.handleChange}
        />
        <CardList products={filterProduct} />
        {/* using state for the chaging the state 
          <button onClick={() => this.setState({ name: 'i love u sunil' })}>
            Click me
          </button>
        */}
        <button onClick={this.handleClickme}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
export default App;
