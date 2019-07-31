import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import About from "./containers/About/About";

import './App.css';
import 'react-notifications/lib/notifications.css';


class App extends Component {
  render() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/about" exact component={About}/>
                </Switch>
            </Layout>
        </div>
    );
  }
}

export default App;
