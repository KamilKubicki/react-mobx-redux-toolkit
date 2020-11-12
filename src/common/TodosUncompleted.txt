import { Typography  } from 'antd'
const { Title } = Typography;

function TodosUncompleted({count, ...props}) {
    return (
        <Title level={5}>{count ? ('Total uncompleted todos: ' + count)  : 'Well done - nothing to do!'}</Title>
    );
}

export default TodosUncompleted



