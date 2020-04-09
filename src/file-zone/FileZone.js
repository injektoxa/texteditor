import React, { Component } from 'react';
import './FileZone.css';

const WithElement = (condition, children, element) => (condition ?
    `<${element}>${children}</${element}>` : children
);

class FileZone extends Component {
    handleClick = e => { this.props.handleClick(e); }
    handleDoubleClick = e => { this.props.handleDoubleClick(e); }

    render() {
        const text = i => '<span key=' + i.key + '>' + i.text + '</span>';
        const content = this.props.content.map(i => WithElement(i.u, WithElement(i.i, WithElement(i.b, text(i), 'b'), 'i'), 'u'));

        return (
            <div id="file-zone">
                <div id="file"
                    contentEditable="true"
                    onDoubleClick={this.handleDoubleClick}
                    onClick={this.handleClick}
                    dangerouslySetInnerHTML={{
                        __html: content.join(" ")
                    }} >
                </div>
            </div>
        );
    }
}

export default FileZone;
