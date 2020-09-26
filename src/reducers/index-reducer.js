// import formVisibleReducer from './form-visible-reducer';
// import drinkListReducer from './drink-list-reducer';
// import selectedDrinkReducer from './selected-drink-reducer';
// import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
	// formVisibleOnPage: formVisibleReducer,
	// drinkList: drinkListReducer,
  // selectedDrink: selectedDrinkReducer,
  // editing: editingReducer
  firestore: firestoreReducer
});

export default rootReducer;