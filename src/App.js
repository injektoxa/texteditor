import React, { Component } from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';
import Synonym from "./synonym/Synonym";
import getSynonyms from "./common/http";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { content: '', synonyms: [], selectedWord: {} };
    }

    async componentDidMount() {
        const content = await getMockText();

        const result = content.split(' ').map((i, index) => {
            return { b: false, i: false, u: false, text: i, key: index.toString() }
        });

        this.setState({ content: result });
    }

    handleClick = async (selectedWord) => {
        if (selectedWord) {
            const synonyms = await getSynonyms(selectedWord.text);
            this.setState({ synonyms, selectedWord })
        }
    }

    formatButtonClicked = (action) => {
        const content = [...this.state.content];
        const key = this.state.selectedWord.key;
        const selectedWord = content.find(w => w.key === key);

        if (selectedWord) {
            selectedWord[action] = !selectedWord[action];
            this.setState({ content })
        }
    }

    replaceSynonym = word => {
        const content = [...this.state.content];
        const key = this.state.selectedWord.key;
        const selectedWord = content.find(w => w.key === key);

        if (selectedWord) {
            selectedWord.text = word;
        }

        this.setState({ content, synonyms: [] });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <Synonym synonyms={this.state.synonyms} replaceSynonym={this.replaceSynonym} />
                    <ControlPanel formatButtonClicked={this.formatButtonClicked} panelButtons={this.state.selectedWord} />
                    <FileZone content={this.state.content || []} handleClick={this.handleClick} />
                </main>
            </div>
        );
    }
}

export default App;
