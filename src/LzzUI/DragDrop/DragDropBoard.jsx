import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import classNames from 'classnames';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// 提供 可拖拽组件 的容器，拖拽组件只能在容器里拖拽
let DragDropBoard = class DragDropBoard extends React.PureComponent {
    render() {
        const _a = this.props, { className } = _a, otherProps = __rest(_a, ["className"]);
        return (<div className={classNames("lz-dragdrop-borad", className)} {...otherProps}>{this.props.children}</div>);
    }
};
DragDropBoard = __decorate([
    DragDropContext(HTML5Backend)
], DragDropBoard);
export default DragDropBoard;
