
import React from 'react';


const ImageScore = (props)=> {
	//props.ups and props.downs


	const { ups, downs} = props;

	const upsPercent = `${100* (ups/(ups+downs))}%`;
	const downssPercent = `${100* (downs/(ups+downs))}%`;

	return(
		<div>
			Ups/Downs
			<div className='progress'>
				<div style={{width: upsPercent}} className='progress-bar progress-bar-success progress-bar-striped'></div>
				<div style={{width: downssPercent}} className='progress-bar progress-bar-danger progress-bar-striped'></div>
			</div>
		</div>
		);
};


export default ImageScore;