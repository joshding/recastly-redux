import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

// mapStateToProps a function that returns an object where the keys are the name of the props the component needs and values are values of the global state
// mapDispatchToProps an object with values which are reducer functions

var mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = { handleSearchInputChange: handleSearchChange };

//onClick = { props.handleSearchChange }

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
