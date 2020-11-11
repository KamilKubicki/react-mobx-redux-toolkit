import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';

import { Row, Col } from 'antd';

import AppRedux from "./AppRedux";
import AppReduxToolkit from "./AppReduxToolkit";

ReactDOM.render(
    <div>
        <Row gutter={16}>
            <Col span={8}>
                {/*<AppRedux />*/}
            </Col>
            <Col span={8}>
                <AppRedux />
            </Col>
            <Col span={8}>
                <AppReduxToolkit />
            </Col>
        </Row>
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();