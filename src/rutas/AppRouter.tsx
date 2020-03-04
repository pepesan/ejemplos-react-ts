import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Home, Foo, Bar} from './Pages';
import Listado from './Listado'
import Detalle from "./Detalle";
class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/foo">Foo</Link>
                        <Link to="/bar">Bar</Link>
                        <Link to="/listado">Listado</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/foo" component={Foo} />
                        <Route exact path="/bar" component={Bar} />
                        <Route exact path="/listado" component={Listado} />
                        <Route exact path="/listado/:id" component={Detalle} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default AppRouter;
