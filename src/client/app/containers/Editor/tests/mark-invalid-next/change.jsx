/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <paragraph>
                <invalid-mark>Some text</invalid-mark>
            </paragraph>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <p>
        <span>
            <span>
                <span>Some text</span>
            </span>
        </span>
    </p>
</div>
`.trim();
