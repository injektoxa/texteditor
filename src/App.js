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
        this.state = { content: '', synonyms: [] };
    }

    async componentDidMount() {
        var content = await getMockText();
        this.setState({ content });
    }

    onChange = content => {
        this.setState({ content })
    }

    onClick = async () => {
        const word = window.getSelection().toString();

        if (word.length) {
            let synonyms = await getSynonyms(word);
            this.setState({ synonyms })
        }
    }

    formatButtonClicked = (buttonType) => {
        document.execCommand(buttonType);
    }

    replaceSynonym = word => {
        document.execCommand('insertText', true, word)
        this.setState({ synonyms: [] });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <Synonym synonyms={this.state.synonyms} replaceSynonym={this.replaceSynonym} />
                    <ControlPanel formatButtonClicked={this.formatButtonClicked} />
                    <FileZone content={this.state.content} onChange={this.onChange} onClick={this.onClick} />
                </main>
            </div>
        );
    }
}

export default App;
