
var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');

//React.createClass()

// state
// lifecycle event
// UI

class App extends React.Component {
    render(){
        return (
            <div>
                Hello React Training!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
