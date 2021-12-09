import { Menu } from 'antd';
import { InfoCircleOutlined, LinkOutlined } from '@ant-design/icons';
import React from "react";

const { SubMenu } = Menu;

class Navi extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
        this.props.setPage(e.key);
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="About" icon={<InfoCircleOutlined />}>
                    关于自己
                </Menu.Item>
                <Menu.Item key="Links"  icon={<LinkOutlined />}>
                    友情链接
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navi;