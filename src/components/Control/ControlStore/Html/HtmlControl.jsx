import * as React from 'react';
const Text = (props) => <span {...props}>{props.text}</span>;
const Div = (props, children) => <div {...props}>{children}</div>;
const HtmlControls = {
    Text, Div
};
export { HtmlControls };
