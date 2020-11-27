import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './AppShell';
import Home from './components/Home';
import Texts from './components/Texts';
import Words from './components/Words';

class App extends React.Component {
render() {
return (
<Router>
<AppShell>
<div>
<Route exact path="/" component={Home}/>
<Route exact path="/texts" component={Texts}/>
<Route exact path="/words" component={Words}/>
</div>
</AppShell>
</Router>

);
}
}

export default App;