import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { IconFont } from "./statics/images/iconfont/iconfont";
import { Provider } from 'react-redux';
import store from "./reducer/index";
import Header from "./common/Header/index";
import Home from "./pages/home/index"
import Detail from "./pages/detail/index";
import Login from "./pages/login/index";
import Form from "./pages/music/index";
import Charts from "./pages/charts/charts"

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
                <GlobalStyle/>
                <IconFont/>
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/detail/:id" exact component={Detail}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/form" component={Form}/>
                <Route path="/charts" component={Charts}/>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
