import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {

    handleClick(buttonType) {
        this.props.formatButtonClicked(buttonType);
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button onClick={() => this.handleClick('bold')} className="format-action" type="button"><b>B</b></button>
                    <button onClick={() => this.handleClick('italic')} className="format-action" type="button"><i>I</i></button>
                    <button onClick={() => this.handleClick('underline')} className="format-action" type="button"><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
