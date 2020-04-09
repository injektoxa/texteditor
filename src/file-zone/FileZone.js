import React from 'react';
import './FileZone.css';
import classNames from 'classnames';

export default ({ content, handleClick }) => {
    const items = content.map((i) =>
        <span data-key={i.key} key={i.key} className={classNames('item', { 'bold': i.b, 'italic': i.i, 'underline': i.u })}>{i.text}</span>
    );

    return (
        <div className="file-zone">
            <div className="file"
                contentEditable
                suppressContentEditableWarning
                children={items}
                onClick={handleClick}
            >
            </div>
        </div>
    );
}
