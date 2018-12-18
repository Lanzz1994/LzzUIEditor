function offset(target, rootOffsetParent) {
    var top = 0, left = 0;
    while (target && target.id != rootOffsetParent) {
        top += target.offsetTop;
        left += target.offsetLeft;
        target = target.offsetParent;
    }
    return { top: top, left: left };
}
const UpdateFrameworkLayout = (tree, target) => {
    tree.ForEach((current) => {
        if (current.HasParent) {
            let dom = target.getElementById(current.ID);
            if (dom) {
                let pos = offset(dom, 'root');
                let size = { width: dom.offsetWidth, height: dom.offsetHeight };
                current.Data.Position = pos;
                current.Data.Size = size;
            }
        }
    });
};
export { UpdateFrameworkLayout };
