import React, { Component } from 'react';

import mockstarStub from './business/mockstar-stub';

import JsbridgeRequest from './components/highorder-jsbridge-request';
import HighorderRecievePush from './components/highorder-recieve-push';

import './index.less';

export default class StubAsync extends Component {
    constructor(props, context) {
        super(props, context);

        mockstarStub();
    }

    render() {
        return (
            <div className="page-stub-async">
                <h1>stub async</h1>
                <JsbridgeRequest />
                <HighorderRecievePush />
            </div>
        );
    }
}