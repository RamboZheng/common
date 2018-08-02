import './css/show.css'

import url from '../core/url'
import log from '../core/log'
import device from '../core/device'
import iajax from '../core/iajax'
import imock from '../core/imock'
import gps from '../core/gps'
import json from '../core/json'
import ibus from '../core/ibus'
import time from '../core/time'
import app from '../core/app'
import timercb from '../core/assist/timercb'

import loading from '../core/loading'
import toast from '../core/toast'
import iempty from '../core/iempty'
import photopicker from '../core/photopicker'
import authui from '../core/authui'
import loginui from '../core/loginui'

import portingApp from '../porting/app'
import encrypt from '../core/encrypt'
import debug from '../core/debug'

$(function() {
    let result = encrypt.encode("15069195578");
    console.log(result);
    console.log(encrypt.decode(result));

    log.on(true);
    var type = url.queryString('type');
    switch(parseInt(type)) {
        case 0:
        // loading.show();
        toast.show("网络加载异常");
        break;
        case 2:
        iempty.show("数据为空");
        break;
        case 3:
        photopicker.show(function(type) {
            log.d("type="+type);
        });
        break;
        case 4:
        authui.show(function() {
            log.d("authui click");
        });
        break;
        case 5:
        loginui.show(function() {
            log.d("loginui click");
        });
        break;
        case 6:
        app.openICityApp();
        break;
        case 7:
        debug.send("Test Hello World");
        break;
    }
})