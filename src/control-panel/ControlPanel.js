import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {

    handleClick(buttonType) {
        this.props.formatButtonClicked(buttonType);
        this.props.changeButtonState(buttonType);
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button onClick={() => this.handleClick('b')} className={"format-action " + (this.props.panelButtons.b ? 'selected' : '')} type="button"><b>B</b></button>
                    <button onClick={() => this.handleClick('i')} className={"format-action " + (this.props.panelButtons.i ? 'selected' : '')} type="button"><i>I</i></button>
                    <button onClick={() => this.handleClick('u')} className={"format-action " + (this.props.panelButtons.u ? 'selected' : '')} type="button"><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
