import {LayoutComponent} from '../components/Layout/index';
import { connect } from 'dva';

const iframeContent = (props)=>{
    const {PartTreeCore}=props.DataCore;
    return <LayoutComponent layoutData={PartTreeCore}/>
}
export default connect((state) => ({ DataCore: state.DataCore }))(iframeContent);