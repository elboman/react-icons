
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdVoicemail extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.9 25c3.2 0 5.7-2.7 5.7-5.9s-2.5-5.7-5.7-5.7-5.9 2.5-5.9 5.7 2.7 5.9 5.9 5.9z m-21.8 0c3.2 0 5.9-2.7 5.9-5.9s-2.7-5.7-5.9-5.7-5.7 2.5-5.7 5.7 2.5 5.9 5.7 5.9z m21.8-15c5 0 9.1 4.1 9.1 9.1s-4.1 9.3-9.1 9.3h-21.8c-5 0-9.1-4.2-9.1-9.3s4.1-9.1 9.1-9.1 9.3 4.1 9.3 9.1c0 2.2-0.8 4.3-2.1 5.9h7.5c-1.4-1.6-2.2-3.7-2.2-5.9 0-5 4.2-9.1 9.3-9.1z"/></g>
            </IconBase>
        );
    }
}
