//Crate image list component
//import react
import React from 'react';
import ImageDetail from './image_detail'

// const IMAGES = [
// {title: 'Pen', link:'http://dummyimage.com/600x400'},
// {title: 'Pine Tree', link:'http://dummyimage.com/600x400'},
// {title: 'Mug', link:'http://dummyimage.com/600x400'}
// ];

//create component
const ImageList = (props) => {
	const validImage = props.images.filter(image => !image.is_album);

	const RenderedImages = validImage.map(image =>
		 <ImageDetail key={image.title} image={image} />
	);
	return (
		<ul className='image-list list-group'>
			{RenderedImages }
		</ul>
	);

};


//export component
export default ImageList;