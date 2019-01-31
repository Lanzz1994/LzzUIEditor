import * as React from 'react';
const Span = (props) => <span {...props}>{props.text}</span>;
const Div = (props, children) => <div {...props}>{children}</div>;
const HtmlControls = {
    Span, Div
};
export { HtmlControls };
