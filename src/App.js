import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }

// connect() accepts a function OR an object as its second argument.
// If we pass an object, connect() incorporates dispatch implicitly.
export default connect(mapStateToProps, { addItem })(App);
