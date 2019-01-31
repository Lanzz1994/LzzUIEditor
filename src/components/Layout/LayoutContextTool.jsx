import * as React from 'react';
import { Tooltip, Dropdown, Icon, Menu } from 'antd';
import { IconFont } from '../Tool/index';
import classNames from 'classnames';
export default class LayoutHandleTool extends React.PureComponent {
    constructor(props) {
        super(props);
        this._toolRef = React.createRef();
    }
    render() {
        const { staticState, staticLayout, hoverState, hoverLayout, dragState, dragLayout, interfaceConfig, hiddenToolbar } = this.props;
        const moveMenus = (<Menu className="lz-context-tool">
                <Menu.Item key="0">
                    <Tooltip placement="right" title="前移">
                        <Icon type="arrow-left"/>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="1">
                    <Tooltip placement="right" title="后移">
                        <Icon type="arrow-right"/>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="2">
                    <Tooltip placement="right" title="移至头部">
                        <Icon type="vertical-right"/>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="3">
                    <Tooltip placement="right" title="移至尾部">
                        <Icon type="vertical-left"/>
                    </Tooltip>
                </Menu.Item>
            </Menu>);
        const pasteMenus = (<Menu className="lz-context-tool">
                <Menu.Item key="0">
                    <Tooltip placement="right" title="粘贴到前面">
                        <Icon type="to-top" style={{ transform: 'rotate(-90deg)' }}/>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="1">
                    <Tooltip placement="right" title="粘贴到后面">
                        <Icon type="to-top" style={{ transform: 'rotate(90deg)' }}/>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="2">
                    <Tooltip placement="right" title="粘贴到父级">
                        <Icon type="to-top"/>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="3">
                    <Tooltip placement="right" title="替换">
                        <Icon type="switcher"/>
                    </Tooltip>
                </Menu.Item>
            </Menu>);
        const repeatMenus = (<Menu className="lz-context-tool">
                <Menu.Item key="0">
                    <Tooltip placement="right" title="重复根元素">
                        <IconFont type="icon-dodeparent"/>
                    </Tooltip>
                </Menu.Item>
            </Menu>);
        return (<div className="lz-layout-context-tools" style={{ left: interfaceConfig.left, top: interfaceConfig.top }} ref={this._toolRef} onMouseOver={(e) => { e.stopPropagation(); }}>
                <div className={classNames("lz-context-tool bar hover-bar", hiddenToolbar ? 'normal' : hoverState)} style={{ left: hoverLayout.left, top: hoverLayout.top }}>
                    <Dropdown overlay={moveMenus} placement="bottomCenter">
                        <Tooltip placement="top" title="定位">
                            <IconFont type="icon-dingwei1"/>
                        </Tooltip>
                    </Dropdown>
                    <Tooltip placement="top" title="复制">
                        <Icon type="copy"/>
                    </Tooltip>
                    <Tooltip placement="top" title="剪切">
                        <Icon type="scissor"/>
                    </Tooltip>
                    <Dropdown overlay={pasteMenus} placement="bottomCenter">
                        <Tooltip placement="top" title="粘贴">
                            <Icon type="snippets"/>
                        </Tooltip>
                    </Dropdown>
                    <Dropdown overlay={repeatMenus} placement="bottomCenter">
                        <Tooltip placement="top" title="重复">
                            <Icon type="plus-square"/>
                        </Tooltip>
                    </Dropdown>
                    <Tooltip placement="top" title="建立模板">
                        <IconFont type="icon-moban"/>
                    </Tooltip>
                    <Tooltip placement="top" title="移除">
                        <Icon type="delete"/>
                    </Tooltip>
                </div>

                <div className={classNames("lz-context-tool bar draging-bar", dragState)} style={{ left: dragLayout.left, top: dragLayout.top }}></div>

                <div className={classNames("lz-context-tool framework", hoverState)} style={hoverLayout}></div>
                <div className={classNames("lz-context-tool framework", dragState)} style={dragLayout}></div>
                <div className={classNames("lz-context-tool framework", staticState)} style={staticLayout}></div>
            </div>);
    }
}
