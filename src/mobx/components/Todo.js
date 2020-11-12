import React from 'react'
import PropTypes from 'prop-types'
import { List  } from 'antd'
import { TagTwoTone, CheckCircleTwoTone } from '@ant-design/icons'

const Todo = ({ onClick, completed, text }) => (
     <List.Item onClick={onClick} style={{cursor: 'pointer'}}>
         <span style={{marginRight: 15}}>
            { completed ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <TagTwoTone   twoToneColor="#eb2f96" />}
         </span>
         {text}
     </List.Item>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo