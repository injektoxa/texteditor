import React from 'react';

export default ({ synonyms, replaceSynonym }) => {
	const handleClick = (e) => {
		e.preventDefault();
		replaceSynonym(e.target.innerText);
	};

	return (
		<div>
			{synonyms.map((synonym, i) => (
				<div key={i}>
					<a onClick={handleClick} href='# '>
						{' '}
						{synonym.word}{' '}
					</a>
				</div>
			))}
		</div>
	);
};
