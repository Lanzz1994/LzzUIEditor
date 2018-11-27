import buckets from 'buckets-js';
import { generateUUID } from './utils';
export default class LinkedTree {
    get ID() { return this._id; }
    get Parent() { return this._parent; }
    get Prev() { return this._prev; }
    get Next() { return this._next; }
    get Childs() { return this._childs; }
    get FirstChild() { return this._firstChild; }
    get LastChild() { return this._lastChild; }
    get IsLeaf() { return this._childs.length === 0; }
    constructor(data, parent) {
        this._id = generateUUID();
        this.Data = data || {};
        this._childs = [];
        let a = new buckets.Set();
        //parent
        //fn
    }
    //设置节点在头部
    setFirst(tree) {
        //let parent=this._parent;
        // if(parent._childs.length>1){
        //     this._next=this._firstChild;
        //     parent._firstChild._prev=tree;
        //     parent._firstChild=tree;
        // }else{
        //     parent._firstChild=tree; 
        //     parent._lastChild=tree;
        // }
        //const parent=this._parent;
        if (this._childs.length > 1) {
        }
    }
}
