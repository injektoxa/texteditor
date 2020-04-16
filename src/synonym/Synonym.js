import React from 'react';

const Synonym = ({ synonyms, replaceSynonym }) => {
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

export default Synonym;
