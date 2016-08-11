//Import react library
import React from 'react';
import ReactDOM from 'react-dom';
//Create a Component

const App = () => {
	return (
		<div> React App #2
		</div>
		);
};



//Render this Component to the screen
Meteor.startup(()=>{
	ReactDOM.render(<App/>, document.querySelector('.container'));
});
