import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

function StateManagementCard({title, ...props}) {
    return (
        <Card title={title}
              bordered={false}
              actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
              ]}
        >
            { props.children }
        </Card>
    );
}

export default StateManagementCard;