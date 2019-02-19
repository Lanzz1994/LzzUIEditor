## 1. 背景
&emsp;&emsp;目前公司的核心业务主要以做项目为主，当下前端技术发展飞速，但是公司前端技术整体主要还是以沉淀的 **Jquery** 以及相关配套技术为主。个人在做项目的过程中积极引入 **MVVM** 的相关技术，先后尝试 **Avalon、React、Vue** 等时下流行的技术框架积极尝试能快速开发的工作链路。<br/>
&emsp;&emsp;个人是后端出身，对 .Net平台下的 winform, wpf, silverlight 有所涉及，所以想到能否有一个 GUI 的编辑器来支持整个页面的拖拽式的开发。在网上找到了很多参考案例，但是这些都是<span style="color:#009">针对特定的应用并且以模板的形式呈现</span>，而定制化的项目中粒度是以**组件**和**Html元素**，所以就就设想了这样一个页面编辑器。<br/>
&emsp;&emsp;编辑器相对于常见的业务开发显得比较复杂，原始的代码组织方式从项目组织和开发体验上都有巨大缺憾，需要扩展新的技术寻求突破。借助 React + Typescript 能很好的将后端的开发精髓引入到前端，将复杂的功能模块化及组织，带来开发和迭代的极大便利。<br/>


## 2. 准备工作
### 2.1 技术选型
- 平台：Node / [Electron](https://electronjs.org/)
- 界面：Typescript / React / [Umi](https://github.com/umijs/umi) / [Antd](https://ant.design/index-cn)
- 交互：[AntM](https://motion.ant.design/) / [React-dnd](https://github.com/react-dnd/react-dnd) / [Monaco-editor](https://microsoft.github.io/monaco-editor/)
- 数据库：IndexDB / [Dexie](https://dexie.org/)

&emsp;&emsp;选择 React + Typescript 主要是因为这套前端技术组合可以让我无缝的接入后端沉淀的面向对象编程思维（和后端的语言如 C#, Java 的特性十分贴近），其他技术已提供相应官网链接，若不了解请查看官网详细说明。

### 2.2 原型设计、准备静态资源
- 图标库 Iconfont（自己挑选符合功能点的 Icon）
- 工具：Axure、墨刀

&emsp;&emsp;主要用来勾勒各个模块的布局和功能点的分布：
![布局原型](./build/prototype.png)<br/><br/>

### 2.3 功能清单
- 项目入口
    - 新建项目
    - 编辑项目信息
- 编辑器
    - 多页编辑
    - 拖拽模块
        - Html元素
        - Antd组件
        - 图标库
        - 其他
    - 布局模块
        - 布局标尺
        - 拖拽布局
        - 布局编辑
        - 树形数据
    - 编辑模块
        - 属性编辑
        - 样式编辑
        - 事件编辑
        - 动效编辑
    - 模板模块
        - 组合组件
        - 组合模板
    - 变量模块
    - 动效模块
        - 页面动效
    - 代码模块
        - 项目模板
        - 代码生成
    - 素材模块
        - 素材管理
        - 素材打包


## 3.开发
### 3.1 设计目录结构
目录结构主要分为两大块：
1. main 主要提供 本地IO 、Electron 的操作接口、应用生命周期的钩子
2. renderer 主要用来渲染编辑器、数据库操作


源码目录结构大致如下：

```
|—— main
    |—— config
    |—— services
    |—— utils
    |—— renderer
|—— src
    |——database
    |——utils
    |—— ...
```


- config：存放配置文件
- services：存放供 renderer 调用的接口
- utils：通用的工具类库
- renderer：子目录主要是由 Umi 脚手架生成
- database：主要存放**实体类**以及**数据库操作类**
- utils：主语存放**通用数据结构**和工具类库
- [完整目录](https://github.com/Lanzz1994/LzzUIEditorForElectron)，基于 [umi-example-electron](https://github.com/umijs/umi-example-electron) 改造，架构出处请查看参考链接

### 参考
- https://github.com/sorrycc/blog/issues/13

### 3.2 代码设计
> 应用主要涉及三个板块，界面、后台、数据库。

&emsp;&emsp;设计之初功能想的太多，精力有限目前只实现了 **拖拽模块、布局模块、编辑模块**，目前只能展示阶段性成果，这个项目会持续更新，希望能把这个项目做成一个好的学习素材，这三个模块也是编辑器里比较有代表性的模块。

#### 3.2.1 以下列出实现的关键点，我将结合代码说明这些关键点的体现：

- 数据结构
    - 链表 - LinkedList
    - 树 - Tree
    - 树链表 - LinkedTree
    - Map
    - 队列
- 算法
    - 递归
- 设计模式
    - 命令模式
    - 工厂模式
    - 观察者模式
    - 单例模式

#### 3.2.2  功能图解
- 早期版本

![editor-first](./build/editor-first.png)

- 现在版本

![editor](./build/editor.png)

- 拖拽组件
    - 提供组件库拖拽
- 布局面板
    - 提供组件布局、编辑、组件组合、建立模板等功能
- 树形展示
    - 提供组件嵌套展示，拖拽排序，选中，经过组件等
- 属性编辑
    - 提供组件属性编辑
- 通用工具栏
    - 提供通用工具，撤销、恢复

#### 参考
- https://www.jianshu.com/p/840e0b0b2c6a
- https://www.codercto.com/a/18841.html
    - 注意阅读**应用上层设计**一节

### 3.2.3 设计思路

- 从**界面交互**转向**数据交互**
    > 从代码层面，复杂的交互本质就是数据间的交互，中间的逻辑实现可以看作搬运角色。从数据交互的角度观察和设计，能更容易也更准确地实现所需的功能。这个应用的核心就是**对数据进行读取、渲染、编辑、持久化以及根据数据生成指定内容**。
- 用**泛型**解决结构化问题
    > 开发过程会到许多相似的、有规律可循的内容，需要对齐抽象封装，将固定和变化解耦隔离。依赖数据结构 **LinkedTree<T>** 实现组件布局、重排等功能。





