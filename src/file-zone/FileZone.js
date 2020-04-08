import React, { Component } from 'react';
import './FileZone.css';
import ContentEditable from 'react-contenteditable'

class FileZone extends Component {

    constructor() {
        super()
        this.contentEditable = React.createRef();
    };

    handleChange = evt => {
        this.props.onChange(evt.target.value);
    };

    onClick = (e) => { this.props.onClick(e) }

    render() {
        return (
            <div id="file-zone">
                <div id="file" >
                    <ContentEditable
                        innerRef={this.contentEditable}
                        html={this.props.content}
                        onChange={this.handleChange}
                        onClick={this.onClick}
                    />
                </div>
            </div>
        );
    }
}

export default FileZone;
