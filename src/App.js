import React, { Component } from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';
import Synonym from "./synonym/Synonym";
import getSynonyms from "./common/http";

class App extends Component {

    inputRef;
    constructor(props) {
        super(props)
        this.state = { content: '', synonyms: [], panelButtons: { b: false, i: false, u: false } };
    }

    async componentDidMount() {
        var content = await getMockText();
        this.setState({ content });
    }

    onChange = content => {
        this.setState({ content })
    }

    handleDoubleClick = async () => {
        const word = window.getSelection().toString();

        if (word.length) {
            let synonyms = await getSynonyms(word);
            this.setState({ synonyms })
        }
    }

    formatButtonClicked = (elementForWrap) => {

        const selection = getSelection();
        const range = selection.getRangeAt(0);

        if (this.state.panelButtons[elementForWrap]) {
            const element = document.createTextNode(selection.toString());

            range.deleteContents();
            range.insertNode(element);
        }
        else {
            const selectedText = range.extractContents();
            const element = document.createElement(elementForWrap);

            element.appendChild(selectedText);
            range.insertNode(element);
        }

        this.setState({ content: this.inputRef.innerHTML })
    }

    changeButtonState = buttonState => {
        var panelButtons = { ...this.state.panelButtons };
        panelButtons[buttonState] = !this.state.panelButtons[buttonState];

        this.setState({ panelButtons });
    }

    replaceSynonym = word => {
        const selection = getSelection().getRangeAt(0);
        const element = document.createTextNode(word);

        selection.deleteContents()
        selection.insertNode(element);

        this.setState({ content: this.inputRef.innerHTML, synonyms: [] });
    }

    handleClick = (e) => {
        this.setState({ panelButtons: { u: false, i: false, b: false } });
    }

    setRef = (ref) => {
        this.inputRef = ref;
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <Synonym synonyms={this.state.synonyms} replaceSynonym={this.replaceSynonym} />
                    <ControlPanel
                        formatButtonClicked={this.formatButtonClicked}
                        panelButtons={this.state.panelButtons}
                        changeButtonState={this.changeButtonState}
                    />
                    <FileZone
                        content={this.state.content}
                        onChange={this.onChange}
                        setRef={this.setRef}
                        handleClick={this.handleClick}
                        handleDoubleClick={this.handleDoubleClick} />
                </main>
            </div>
        );
    }
}

export default App;
