import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';

import Aside from './layouts/Aside'
import reactRouterBasic from './pages/reactRouterBasic'
import page3 from './pages/page3'

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Route path='/'>
        <Layout>
          <Sider
            width="256"
            height="100%"
            theme="dark"
            collapsible
          >
            <Aside />
          </Sider>
          <Layout>
            <Content>
              <Switch>
                <Route path='/basic' component={reactRouterBasic}></Route>
                <Route path='/page3' component={page3}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Route>
    </Router>
  );
}

export default App;
