import { framework_id_prefix } from './types';
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
            let framework = document.getElementById(framework_id_prefix + current.ID);
            if (dom && framework) {
                let domPos = offset(dom, 'root');
                let frameworkPos = offset(framework.offsetParent, framework_id_prefix + tree.ID);
                let size = { width: dom.offsetWidth, height: dom.offsetHeight };
                current.Data.Position = { left: domPos.left - frameworkPos.left, top: domPos.top - frameworkPos.top };
                current.Data.RootPosition = domPos;
                current.Data.Size = size;
            }
        }
    });
};
export { UpdateFrameworkLayout };
