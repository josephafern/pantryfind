import React from 'react';
import logo from './logo.svg';
import fruits from './fruits-main.png'
import styles from './AppM.module.css';
import {InventoryCalc} from './InventoryCalc.js';
import {Recipes} from './Recipes.js';
import {SelectedRecipe} from './SelectedRecipe.js';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
  			inventoryDisplay: {
				'chicken': false,
				'beef': false,
				'steak': false,
				'tilapia': false,
				'salmon': false,
				'carrots': false,
				'broccoli': false,
				'asparagus': false,
				'mushrooms': false,
				'bokchoy': false,
				'spinach': false,
				'pasta': false,
				'potatoes':false,
				'bread': false,
				'rice': false
			  },
  			foodInventory: [],
  			possibleRecipes: [],
  			currentPageM: 'InventoryCalc',
  			selectedRecipe: {}
		}
		this.changeState = this.changeState.bind(this);
	}
	
	changeState(newState){
		this.setState(newState);
	}
	
	render(){
		switch (this.state.currentPageM){
			case 'InventoryCalc':
				return <InventoryCalc 	changeState={this.changeState}
    									inventoryDisplay={this.state.inventoryDisplay}
    									foodInventory={this.state.foodInventory}/>;
			case 'Recipes':
				return <Recipes	changeState={this.changeState}
    							possibleRecipes={this.state.possibleRecipes}
    							foodInventory={this.state.foodInventory}
    							inventoryDisplay={this.state.inventoryDisplay}/>;
			case 'SelectedRecipe':
				return <SelectedRecipe	changeState={this.changeState}
    									selectedRecipe={this.state.selectedRecipe}/>;
		}
	}
}

export default App;