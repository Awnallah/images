//Import react library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list'
//Create a Component

const App = () => {
	return (
		<div>
			<ImageList />
		</div>
		);
};



//Render this Component to the screen
Meteor.startup(()=>{
	ReactDOM.render(<App/>, document.querySelector('.container'));
});
