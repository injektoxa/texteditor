import React, { Component } from 'react';
import './FileZone.css';
import ContentEditable from 'react-contenteditable'

class FileZone extends Component {

    handleChange = e => { this.props.onChange(e.target.value); };
    handleClick = e => { this.props.handleClick(e) }
    handleDoubleClick = (e) => { this.props.handleDoubleClick(e); }

    render() {
        return (
            <div id="file-zone">
                <div id="file" >
                    <ContentEditable
                        innerRef={this.props.setRef}
                        html={this.props.content}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onDoubleClick={this.handleDoubleClick}
                        id="content"
                    />
                </div>
            </div>
        );
    }
}

export default FileZone;
