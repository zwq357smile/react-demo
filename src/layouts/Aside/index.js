import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class Aside extends Component {

  rootSubmenuKeys = [
    {
      key: 'React Router',
      children: [
        {
          key: '基本用法',
          path: '/basic'
        }
      ]
    }
  ];

  state = {
    openKeys: ['reactRouter'],
  }

  onOpenChange = openKeys => {
    console.log('openKeys:', openKeys)
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.map(item => item.key).indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  componentDidMount() {
    console.log('this.props:', this.props)
  }

  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: '100%', height: 'calc(100vh - 48px)' }}
      >
        {this.rootSubmenuKeys.map(item => (
          <SubMenu
            key={item.key}
            title={
              <span>
                <MailOutlined />
                <span>{item.key}</span>
              </span>
            }
          >
            {item.children.map(child => (
              <Menu.Item key={child.key}>
                <Link to={child.path}>{child.key}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    );
  }
}

export default Aside
