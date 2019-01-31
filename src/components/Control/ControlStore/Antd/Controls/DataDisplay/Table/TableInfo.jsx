const Table = {
    Key: 'Antd.Table',
    Introduction: {
        Name: '表格',
        ShortName: '表格',
        Icon: 'icon-button-component',
        Detail: '栅格的一行'
    },
    Props: [
        { PropName: 'gutter', Name: '栅格间隔', EditorInfo: { Key: 'NumberInputEditor', Config: { placeholder: 'gutter' } } },
        { PropName: 'type', Name: 'Flex 布局', EditorInfo: { Key: 'SwitchEditor',
                Config: { placeholder: 'type' },
                InitProp: (value) => { return value === 'flex'; },
                SetProp: (updateInfo) => {
                    updateInfo.updateState['alignDisabled'] = !updateInfo.updateValue['type'];
                    updateInfo.updateState['justifyDisabled'] = !updateInfo.updateValue['type'];
                    updateInfo.updateState['type'] = updateInfo.updateValue['type'];
                    updateInfo.updateValue['type'] = updateInfo.updateValue['type'] ? 'flex' : undefined;
                    return updateInfo;
                } } },
        //editor state name rule: PropName + editor target prop name, align + disabled = alignDisabled
        { PropName: 'align', Name: '垂直对齐', EditorInfo: { Key: 'SelectEditor' } },
        { PropName: 'justify', Name: '水平对齐', EditorInfo: { Key: 'SelectEditor' } },
    ],
    DefaultProps: {
        style: {
            minHeight: 50
        }
    }
};
export default Table;
