import iajax from '../core/iajax'
import jsbridge from '../core/jsbridge'
import url from '../core/url'
import device from '../core/device'
import log from '../core/log'
import app from '../core/app'
import json from '../core/json'
import authui from '../core/authui'
import photopicker from '../core/photopicker'
import toast from '../core/toast'
import dialog from '../core/dialog'

if(window.icity == undefined) {
    window.icity = {};
}
window.icity.iajax = iajax;
window.icity.jsbridge = jsbridge;
window.icity.url = url;
window.icity.device = device;
window.icity.log = log;
window.icity.app = app;
window.icity.json = json;
window.icity.authui = authui;
window.icity.photopicker = photopicker;
window.icity.toast = toast;
window.icity.dialog = dialog;