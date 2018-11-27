function getDomByTarget(target){
    return typeof target==='string'?
    document.querySelectorAll(target):target;
}

//设置滚动条
export function scrollToCenter(target,x_revise,y_revise){
    var allWidth=target.scrollWidth,visibleWidth=target.clientWidth,
    allHeight=target.scrollHeight,visibleHeight=target.clientHeight;
    target.scrollTo(allWidth/2-visibleWidth/2-(x_revise||0),allHeight/2-visibleHeight/2-(y_revise||0));
}