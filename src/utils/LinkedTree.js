import {generateUUID} from './utils'

//链表树实现
(function(w){
    //基于dom tree 的结构
    //链表的next,prev只限定在兄弟节点，不可指向子节点或父节点

    //链表树构造函数
    function LinkedTree(data=null,parent=null,fn){
        this._id=generateUUID();
        this.data=data;
        this._childs=[];
        if(parent){
            parent.addNode(this);
        }
        if(fn){fn(this._id,this.data);}
    }

    LinkedTree.prototype._id=null;
    LinkedTree.prototype.data=null;
    LinkedTree.prototype._parent=null;
    LinkedTree.prototype._prev=null;
    LinkedTree.prototype._next=null;
    LinkedTree.prototype._childs=null;
    LinkedTree.prototype._firstChild=null;
    LinkedTree.prototype._lastChild=null;
    

    //添加一个树节点到头部
    LinkedTree.prototype.addNodeFirst=function(tree){
        insert(tree,this);
        setFirst(tree);
    }
    //添加一个子节点
    LinkedTree.prototype.addNode=function(tree){
        insert(tree,this);
        if(this._firstChild){
            setLast(tree);
        }else{
            setFirst(tree);
        }
    }

    //将树节点剪切到指定树节点的子节点里的头部
    LinkedTree.prototype.moveToFirst=function(target){
        if(this._parent){
            remove(this);
            target.addNodeFirst(this);
        }
    }
    //将树节点剪切到指定树节点的子节点里的尾部
    LinkedTree.prototype.moveToLast=function(target){
        if(this._parent){
            remove(this);
            target.addNode(this);
        }
    }
    //将树节点剪切到指定树节点的后面
    LinkedTree.prototype.moveToAfter=function(target){
        //if(!target._parent) throw "LinkedTree.addNodeAfter Err: target "+errs.argUndefined;
        if(target._parent){
            remove(this);
            insert(this,target._parent);
            setAfter(this,target);
        }
    }

    //将树节点复制到指定树节点的子节点里的头部
    LinkedTree.prototype.copyToFirst=function(target){
        let newTree=copy(this);
        target.addNodeFirst(newTree);
    }
    //将树节点复制到指定树节点的子节点里的尾部
    LinkedTree.prototype.copyToLast=function(target){
        let newTree=copy(this);
        target.addNode(newTree);
    }
    //将树节点复制到指定树节点的后面
    LinkedTree.prototype.copyToAfter=function(target){
        let newTree=copy(this);
        newTree.moveToAfter(target);
    }

    //将当前节点从父节点中删除
    LinkedTree.prototype.drop=function(){
        remove(this);
    }


    //======= 辅助方法 =======
    //判断是否为叶子
    LinkedTree.prototype.isLeaf=function() {
        return isLeaf(this);
    }
    //判断是是否包含该节点
    LinkedTree.prototype.isInclude=function(tree) {
        return isInclude(tree,this);
    }
    LinkedTree.prototype.getChilds=function(filter){
        return this._childs;
    }
    //遍历最近一层子节点查找指定节点
    LinkedTree.prototype.find=function(filter){
        return this._childs.find(filter);
    }
    //遍历所有子节点查找指定节点
    LinkedTree.prototype.findAll=function(filter){
        let target=null;
        let i=0;
        TreeRecursion(this,function(childTree){
            if(filter(childTree)){
                target=childTree;
                return false;
            }
            return true;
        });
        return target;
    }
    //遍历一层子节点按指定格式排序
    LinkedTree.prototype.sort=function(){

    }
    LinkedTree.prototype.sortFilter=function(){

    }
    LinkedTree.prototype.select=function(){

    }
    LinkedTree.prototype.selectFilter=function(){

    }
    LinkedTree.prototype.getParent=function(){
        return this._parent;
    }
    LinkedTree.prototype.getFirstChild=function(){
        return this._firstChild;
    }
    LinkedTree.prototype.getLastChild=function(){
        return this._lastChild;
    }
    LinkedTree.prototype.getHeight=function(){
        return getHeight(this);
    }
    LinkedTree.prototype.getDepth=function(){
        return getDepth(this);
    }
    LinkedTree.prototype.ID=function(){
        return this._id;
    }
    LinkedTree.prototype.resetID=function(){
        this._id=generateUUID();
        return this;
    }
    //后根遍历链表树
    LinkedTree.prototype.eachChilds=function(handle,siblings,breakChild){
        return isLeaf(this)?null:RecursionAfter(this._firstChild,handle,siblings,breakChild);
    }
    //先根遍历链表树
    LinkedTree.prototype.eachChildBefore=function(handle){
        return isLeaf(this)?null:eachTreeBefore(this._firstChild,handle);
    }
    LinkedTree.prototype.toJSON=function(){}

    //判断是否是叶子节点
    function isLeaf(tree){
        return tree._childs.length==0;
    }

    //判断节点是否包含指定节点
    function isInclude(tree,parent){
        let state=false;
        BubbleHandle(tree,function(target){
            state=parent._id==target._id;
            return !state;
        });
        return state;
    }

    //获取树的高度
    function getHeight(tree){
        let height=-1,subTree=tree._firstChild;
        while(subTree!=null){
            height=Math.max(height,subTree.getHeight());
            subTree = subTree._next;
        }
        return height+1 ;
    }

    //获取树的深度
    function getDepth(tree){
        let depth=0,parent=tree._parent;
        while(parent!=null){
            depth++;
            parent=parent._parent;
        }
        return depth;
    }

    //设置节点在头部
    function setFirst(tree){
        let parent=tree._parent;
        if(parent._childs.length>1){
            tree._next=parent._firstChild;
            parent._firstChild._prev=tree;
            parent._firstChild=tree;
        }else{
            parent._firstChild=tree; 
            parent._lastChild=tree;
        }
    }
    //设置接在尾部
    function setLast(tree){
        let parent=tree._parent;
        parent._lastChild._next=tree;
        tree._prev=parent._lastChild;
        parent._lastChild=tree;
    }
    //设置节点在指定节点之后
    function setAfter(tree,target){
        if(tree==undefined) throw "tree is undefined";
        if(target==undefined) throw "target is undefined";

        let next= target._next;
        tree._prev=target;
        //如果目标节点是最后一个，next 则为空
        if(next!=null){
            tree._next=next;
            next._prev=tree;
            target._next=tree;
        }else{
            target._next=tree;
            tree._parent._lastChild=tree;
        }
    }

    //从链表里移除指定节点
    function cutLinked(tree){
        //处理第一个节点
        if(!tree._prev){
            tree._parent._firstChild=tree._next;
            if(tree._next){tree._next._prev=null}
        }else{
            tree._prev._next=tree._next;
        }

        //处理最后一个节点
        if(!tree._next){
            tree._parent._lastChild=tree._prev;
            if(tree._prev){tree._prev._next=null}
        }else{
            tree._next._prev=tree._prev;
        }
        
        tree._prev=null;
        tree._next=null;
        tree._parent=null;
    }

    //获取节点的索引位置
    function index(target){
        return target._parent._childs.findIndex((v)=>v._id==target._id)
    }

    //添加子节点
    function insert(childTree,target){
        if(childTree==undefined) throw "can't add undefined to childs";
        childTree._parent=target;
        target._childs.push(childTree);
    }

    //指定节点从父节点中移除
    function remove(tree){
        if(tree._parent){
            tree._parent._childs.splice(index(tree),1);
            cutLinked(tree);
        }
    }

    //复制指定树节点并返回新的树节点
    function copy(tree){
        return isLeaf(tree)? new LinkedTree(tree.data):
        eachTree(tree,function(current,prev,childs){
            let copyTree=new LinkedTree(current.data);
            if(!isLeaf(current)){
                copyTree._childs=childs;
                copyTree._firstChild=childs[0];
                copyTree._lastChild=childs[childs.length-1];
                childs.map(function(v,i){
                    v._parent=copyTree;
                    let next=childs[i+1];
                    if(next){
                        v._next=next;
                        next._prev=v;
                    }
                });
            }
            return copyTree;
        });
    }

    //将节点替换指定节点
    function replace(tree,target){

    }

    //遍历和操作子树递归（舍弃，不好用）
    function TreeRecursion(tree,handle){
        //handle 为本次查找的操作目标，当操作成功时，再往下遍历就没有意义，所以有个流程控制跳出当前递归
        let state=handle(tree);//操作目标在本节点：返回true，继续遍历，返回false，跳出递归
        if(!isLeaf(tree)&&state){
            for(let i=0;i<tree._childs.length;i++){
                let childTree=tree._childs[i];
                state=TreeRecursion(childTree,handle);//操作目标在子节点：返回true，继续遍历，返回false，跳出递归
                if(!state) return state;
            }
        }
        return state;
    }

    //有序遍历链表树（后根遍历）（有待改造，不好用）
    function RecursionAfter(tree,handle,breakChild,siblings=[]){
        let childs=[];
        let breakCurrent=false;
        if(typeof breakChild==="function"){
            breakCurrent=breakChild(tree);
        }
        if(!isLeaf(tree)&&!breakCurrent){
            childs=RecursionAfter(tree._firstChild,handle,breakChild);
        }
        siblings.push(handle(tree,childs));
        if(tree._next){
            RecursionAfter(tree._next,handle,breakChild,siblings);
        }
        return siblings;
    }

    //遍历树操作（先操作子节点）
    function eachTree(tree,handle,prev=null){
        let subTree=tree._firstChild,childs=[];//递归在统一层级的节点，所有的操作都是平行的
        while(subTree!=null){
            prev=eachTree(subTree,handle,prev);
            subTree = subTree._next;
            childs.push(prev);
        }   
        return handle(tree,prev,childs);
    }

    //遍历树操作（先操作父节点）
    function eachTreeBefore(tree,handle,parent=null){
        let subTree=tree;
        while(subTree!=null){
            parent=handle(subTree,parent);
            if(subTree._firstChild!=null){
                eachTreeBefore(subTree._firstChild,handle,parent);
            }
            subTree=subTree._next;
        }
    }

    //冒泡操作
    function BubbleHandle(tree,handle){
        let current=tree,state=true;
        while(current!=null&&state){
            state=handle(current);
            current=current._parent;
        }
    }

    w.LinkedTree=LinkedTree;

    //======================== 模板方法：提供逻辑参考，后面要去除 ===============================
    //相当正规的树遍历实现
    function example_eachChild(tree,handle){
        let subTree=tree._firstChild;
        //通过while直接深入到最左边的第一个节点
        while(subTree!=null){//这行可以判断是否是叶子节点，相当于isLeaf(subTree)
            example_eachChild(subTree,handle);
            subTree = subTree._next;
        }
        //开始操作当前节点
        return handle(tree);
    }
})(window)

//链表树构造函数
export default window.LinkedTree;