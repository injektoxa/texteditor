import React from 'react';
import './FileZone.css';
import classNames from 'classnames';

const FileZone = ({ content, handleClick }) => {
	const items = content.map((i) => (
		<span
			key={i.key}
			onClick={() => handleClick(i)}
			className={classNames('item', {
				bold: i.b,
				italic: i.i,
				underline: i.u,
			})}
		>
			{i.text}
		</span>
	));

	return (
		<div className='file-zone'>
			<div
				className='file'
				contentEditable
				suppressContentEditableWarning
				children={items}
			></div>
		</div>
	);
};

export default FileZone;
