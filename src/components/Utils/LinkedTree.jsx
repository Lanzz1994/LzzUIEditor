import { GenerateUUID } from './Tool';
//=================== Common Method =====================
function setFirst(tree, target) {
    if (target._firstChild && target.Length > 1) {
        tree._next = target._firstChild;
        target._firstChild._prev = tree;
        target._firstChild = tree;
    }
    else {
        target._firstChild = tree;
        target._lastChild = tree;
    }
    if (tree._prev)
        tree._prev = null;
}
function setLast(tree, target) {
    if (target._lastChild && target.Length > 1) {
        target._lastChild._next = tree;
        tree._prev = target._lastChild;
        target._lastChild = tree;
    }
    else {
        target._firstChild = tree;
        target._lastChild = tree;
    }
    if (tree._next)
        tree._next = null;
}
function setAfter(tree, target) {
    if (target._parent) {
        let next = target._next;
        tree._prev = target;
        if (next) {
            tree._next = next;
            next._prev = tree;
            target._next = tree;
        }
        else {
            target._next = tree;
            target._parent._lastChild = tree;
        }
    }
}
function setBefore(tree, target) {
    if (target._parent) {
        let prev = target._prev;
        tree._next = target;
        if (prev) {
            tree._prev = prev;
            prev._next = tree;
            target._prev = tree;
        }
        else {
            target._prev = tree;
            target._parent._firstChild = tree;
        }
    }
}
//从链表里移除指定节点
function cutLinked(tree) {
    if (tree._parent) {
        //处理第一个节点
        if (tree._prev) {
            tree._prev._next = tree._next;
        }
        else {
            tree._parent._firstChild = tree._next;
            if (tree._next) {
                tree._next._prev = null;
            }
        }
        //处理最后一个节点
        if (tree._next) {
            tree._next._prev = tree._prev;
        }
        else {
            tree._parent._lastChild = tree._prev;
            if (tree._prev) {
                tree._prev._next = null;
            }
        }
        tree._prev = null;
        tree._next = null;
        tree._parent = null;
    }
}
function insert(tree, target) {
    tree._parent = target;
    target._children.push(tree);
}
function remove(tree) {
    if (tree._parent) {
        var index = tree._parent._children.findIndex((v) => v._id == tree._id);
        if (index > -1) {
            tree._parent._children.splice(index, 1);
            cutLinked(tree);
        }
    }
}
function copy(tree) {
    return tree.IsLeaf ? new LinkedTree(Object.assign({}, tree.Data)) :
        eachTreeChildren(tree, (current, children) => {
            let copyTree = new LinkedTree(Object.assign({}, current.Data));
            if (!current.IsLeaf) {
                copyTree._children = children;
                copyTree._firstChild = children[0];
                copyTree._lastChild = children[children.length - 1];
                children.map(function (v, i) {
                    v._parent = copyTree;
                    let next = children[i + 1];
                    if (next) {
                        v._next = next;
                        next._prev = v;
                    }
                });
            }
            return copyTree;
        });
}
function eachTreeChildren(tree, handle, prev) {
    let subTree = tree._firstChild, children = [];
    while (subTree) {
        prev = eachTreeChildren(subTree, handle, prev);
        subTree = subTree._next;
        if (prev)
            children.push(prev);
    }
    return handle(tree, children, prev);
}
function eachTreeParent(tree, handle, parent) {
    let subTree = tree._firstChild;
    parent = handle(tree, parent);
    while (subTree) {
        eachTreeParent(subTree, handle, parent);
        subTree = subTree._next;
    }
}
//冒泡操作
function BubbleHandle(tree, handle) {
    let current = tree, state = true;
    while (current != null && state) {
        state = handle(current);
        current = current._parent;
    }
}
export default class LinkedTree {
    //=================== Constructor =====================
    constructor(data, parent) {
        this._parent = null;
        this._prev = null;
        this._next = null;
        this._children = [];
        this._firstChild = null;
        this._lastChild = null;
        this._id = GenerateUUID();
        this.Data = data;
        if (parent)
            parent.AddLast(this);
    }
    //=================== Properties =====================
    get ID() { return this._id; }
    get HasParent() { return this._parent ? true : false; }
    get IsLeaf() { return this._children.length === 0; }
    get Length() { return this._children.length; }
    //=================== Add =====================
    /**
     * Adds the specified new tree at the start of children of this
     */
    AddFirst(tree) {
        insert(tree, this);
        setFirst(tree, this);
    }
    /**
     * Adds the specified new tree at the end of children of this
     */
    AddLast(tree) {
        insert(tree, this);
        setLast(tree, this);
    }
    /**
     * Adds the new tree before the specified existing trees
     * that filtering from 'fn' parameter in children of this
     */
    AddBefore(tree, fn) { }
    AddAfter(tree, fn) { }
    //=================== Move =====================
    _moveToChildren(tree, fn) {
        if (tree._parent) {
            remove(tree);
            fn(tree);
        }
    }
    _moveToSibling(tree, target, fn) {
        if (target._parent) {
            remove(tree);
            insert(tree, target._parent);
            fn(tree, target);
        }
    }
    /**
     *
     */
    MoveToFirst(target) {
        this._moveToChildren(this, target.AddFirst);
    }
    MoveToLast(target) {
        this._moveToChildren(this, target.AddLast);
    }
    MoveToBefore(target) {
        this._moveToSibling(this, target, setBefore);
    }
    MoveToAfter(target) {
        this._moveToSibling(this, target, setAfter);
    }
    MoveToReplace(target) {
        this._moveToSibling(this, target, setAfter);
        remove(target);
    }
    //=================== Copy =====================
    /**
     * Copies 'this' to the specified tree,
     * which means getted a new tree of containing 'this' structure
     * to append to the start of childen of the specified tree
     */
    CopyToFirst(target) {
        target.AddFirst(copy(this));
    }
    /**
     * Copies 'this' to the specified tree,
     * which means getted a new tree of containing 'this' structure
     * to append to the end of childen of the specified tree
     */
    CopyToLast(target) {
        target.AddLast(copy(this));
    }
    CopyToBefore(target) {
        copy(this).MoveToBefore(target);
    }
    CopyToAfter(target) {
        copy(this).MoveToAfter(target);
    }
    CopyToReplace(target) {
        copy(this).MoveToAfter(target);
        remove(target);
    }
    //=================== Remove =====================
    RemoveSelf() {
        remove(this);
    }
    RemoveFirst() {
        if (this._firstChild) {
            this._firstChild.RemoveSelf();
        }
    }
    RemoveLast() {
        if (this._lastChild) {
            this._lastChild.RemoveSelf();
        }
    }
    Clear() {
        if (!this.IsLeaf) {
            this._children = [];
            this._firstChild = null;
            this._lastChild = null;
        }
    }
    //=================== DataFormat =====================
    /**
     * format: {data:{},children:[ {data:{},children:[]},{data:{},children:[]} ]}
     */
    ToLinkedTreeData() {
        return eachTreeChildren(this, (current, childen) => {
            return { data: current.Data, childen: childen };
        });
    }
    ToLinkedTreeJSON() {
        return JSON.stringify(this.ToLinkedTreeData());
    }
    //=================== Other =====================
    ForEach(fn) {
        return eachTreeParent(this, fn);
    }
    ForEachStartLeaf(fn) {
        return eachTreeChildren(this, fn);
    }
    Find(fn) {
        let result = [];
        eachTreeParent(this, (current) => {
            if (fn(current))
                result.push(current);
        });
        return result;
    }
}
