import app from '../core/app'
import device from '../core/device'

if(window.icity == undefined) {
    window.icity = {};
}
window.icity.app = app;
window.icity.app.isChrome = device.isChromBrowser;