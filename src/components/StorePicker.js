import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }
	goToStore(event) {
		event.preventDefault();
		console.log('you changed the URL');
		//first grab the text from the box
		console.log(this.storeInput.value);
		//second we're going to transition from / to /store/:storeId
	}
	render() {
		// this is js comment
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
				{/* this is comment inside JSX :D*/}
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

export default StorePicker;