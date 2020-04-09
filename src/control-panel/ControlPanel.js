import React from 'react';
import classNames from 'classnames';
import './ControlPanel.css';

export default ({ panelButtons, formatButtonClicked }) => {

    return (
        <div className="control-panel">
            <div className="format-actions">
                <button
                    onClick={() => formatButtonClicked('b')}
                    className={classNames('format-action', { 'selected': panelButtons.b })}
                    type="button">
                    <b>B</b>
                </button>
                <button
                    onClick={() => formatButtonClicked('i')}
                    className={classNames('format-action', { 'selected': panelButtons.i })}
                    type="button">
                    <i>I</i>
                </button>
                <button
                    onClick={() => formatButtonClicked('u')}
                    className={classNames('format-action', { 'selected': panelButtons.u })}
                    type="button">
                    <u>U</u>
                </button>
            </div>
        </div>
    );
}