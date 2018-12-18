//Button
const ButtonThemeConfig = {
    default: 'default',
    options: [{ value: 'default', text: '默认' }, { value: 'primary', text: '主要' }, { value: 'dashed', text: '虚线' }, { value: 'danger', text: '危险' }]
};
const ButtonSizeConfig = {
    default: 'default',
    options: [{ value: 'default', text: '默认' }, { value: 'small', text: '小' }, { value: 'large', text: '大' }]
};
const Button = {
    Key: 'Antd.Button',
    Introduction: {
        Name: '按钮',
        ShortName: '按钮',
        Icon: 'button',
        Detail: '按钮用于开始一个即时操作'
    },
    Props: [
        { PropName: 'text', Name: '文本', EditorInfo: { Key: 'TextEditor' } },
        { PropName: 'type', Name: '类型', EditorInfo: { Key: 'SelectEditor', Config: ButtonThemeConfig } },
        { PropName: 'size', Name: '尺寸', EditorInfo: { Key: 'SelectEditor', Config: ButtonSizeConfig } },
        { PropName: 'icon', Name: 'Icon', EditorInfo: { Key: 'TextEditor' } },
        { PropName: 'shape', Name: '禁用', EditorInfo: { Key: 'SwitchEditor' } },
        { PropName: 'shape', Name: '加载中', EditorInfo: { Key: 'SwitchEditor' } },
        { PropName: 'shape', Name: '圆形', EditorInfo: { Key: 'SwitchEditor' } },
        { PropName: 'ghost', Name: '幽灵效果', EditorInfo: { Key: 'SwitchEditor' } },
        { PropName: 'href', Name: '链接', EditorInfo: { Key: 'SwitchEditor' } },
    ],
    DefaultProps: { text: '按钮' },
    IsLeaf: true
};
//ButtonGroup
const ButtonGroup = {
    Key: 'Antd.ButtonGroup',
    Introduction: {
        Name: '按钮组',
        ShortName: '按钮组',
        Icon: 'button',
    },
    Props: [{ PropName: 'size', Name: '尺寸', EditorInfo: { Key: 'SelectEditor', Config: ButtonSizeConfig } }],
};
const General = [Button, ButtonGroup];
const AntdControlInfoCategory = { General };
export { AntdControlInfoCategory };
