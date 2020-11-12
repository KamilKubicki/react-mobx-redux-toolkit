import { Card } from 'antd';

function StateManagementCard({title, ...props}) {
    return (
        <Card title={title}
              bordered={false}
        >
            { props.children }
        </Card>
    );
}

export default StateManagementCard;