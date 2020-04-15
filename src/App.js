import React, { useState, useEffect } from 'react';
import './App.css';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';
import getMockText from './text.service';
import Synonym from './synonym/Synonym';
import getSynonyms from './common/http';

const App = () => {
	const [content, setContent] = useState('');
	const [synonyms, setSynonyms] = useState([]);
	const [selectedWord, setSelectedWord] = useState({});

	useEffect(async () => {
		const content = await getMockText();
		const result = content.split(' ').map((i, index) => {
			return {
				b: false,
				i: false,
				u: false,
				text: i,
				key: index.toString(),
			};
		});

		setContent(result);
	}, []);

	const handleClick = async (selectedWord) => {
		if (selectedWord) {
			const synonyms = await getSynonyms(selectedWord.text);
			setSynonyms(synonyms);
			setSelectedWord(selectedWord);
		}
	};

	const formatButtonClicked = (action) => {
		const newContent = [...content];
		const word = newContent.find((w) => w.key === selectedWord.key);

		if (word) {
			word[action] = !word[action];

			setContent(newContent);
		}
	};

	const replaceSynonym = (text) => {
		const newContent = [...content];
		const word = newContent.find((w) => w.key === selectedWord.key);

		if (word) {
			word.text = text;
		}

		setContent(newContent);
		setSynonyms([]);
	};

	return (
		<div className='App'>
			<header>
				<span>Simple Text Editor</span>
			</header>
			<main>
				<Synonym synonyms={synonyms} replaceSynonym={replaceSynonym} />
				<ControlPanel
					formatButtonClicked={formatButtonClicked}
					panelButtons={selectedWord}
				/>
				<FileZone content={content || []} handleClick={handleClick} />
			</main>
		</div>
	);
};

export default App;
