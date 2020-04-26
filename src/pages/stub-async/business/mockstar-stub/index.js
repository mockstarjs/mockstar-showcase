import { AsyncClient } from 'mockstar-client';

import AsyncRequestMatmanInfo from './async-request-mockstar-info';
import AsyncReceivePush from './async-receive-push';

export default function init() {
    // if (window.location.search.indexOf('mockstar_async') < 0) {
    //     console.log('No need to start mockstar async mock!');
    //     return;
    // }

    // 如果是用代理的方式在手机端调试，则必须使用 ip 的方式访问，不能够使用 localhost 和 127.0.0.1
    // const STUB_IP = '127.0.0.1:9527';
    // const STUB_IP = 'local.mockstarjs.org'; 默认值
    const asyncClient = new AsyncClient('http://127.0.0.1:9527');
    // const asyncClient = new AsyncClient();

    // 一次请求一次回调
    new AsyncRequestMatmanInfo(asyncClient).init();

    // 被动接收回调(push)
    new AsyncReceivePush(asyncClient).init();
}