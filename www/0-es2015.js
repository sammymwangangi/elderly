(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "xq7Z":
/*!*************************************************************************!*\
  !*** ./node_modules/@alan-ai/alan-button/dist/esm/alan-button.entry.js ***!
  \*************************************************************************/
/*! exports provided: alan_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alan_button", function() { return AlanButton; });
/* harmony import */ var _index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-18e88af1.js */ "Ie2U");


function isCordova() {
    return window && window.cordova;
}

class Device {
    constructor() {
        this.readyStatusPromise = new Promise((resolve) => {
            if (isCordova()) {
                this.interval = setInterval(() => {
                    if (window.cordova && typeof window.cordova.exec === 'function') {
                        clearInterval(this.interval);
                        resolve();
                    }
                }, 300);
            }
            else {
                resolve();
            }
        });
    }
    ready() {
        return this.readyStatusPromise;
    }
}
const device = new Device();

class AlanButton {
    constructor(hostRef) {
        Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.alanHolderId = 'alan-holder';
        this.command = Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "command", 7);
        this.onCommand = Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "onCommand", 7);
        this.event = Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "event", 7);
        this.buttonState = Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "buttonState", 7);
        this.connectionStatus = Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "connectionStatus", 7);
    }
    /** Method for setting the visual state.
     * @param {object} visualState - Visual state data object.
     * */
    async setVisualState(visualState) {
        if (isCordova()) {
            cordova.exec(() => {
            }, () => {
            }, "alanVoice", "setVisualState", [visualState]);
        }
        else {
            this.alanBtnInst.setVisualState(visualState);
        }
    }
    /** Method for calling a project API that was defined in Alan Studio project’s script.
     * @param {string} funcName - API method name.
     * @param {object} data - Data that should be passed to the project API method.
     * @param {Function} callback - Callback that could be returned from the project API method.
     *
     * */
    async callProjectApi(funcName, data, callback) {
        if (isCordova()) {
            cordova.exec(() => {
                callback.apply(this, ...arguments);
            }, () => {
            }, "alanVoice", "callProjectApi", [funcName, data]);
        }
        else {
            this.alanBtnInst.callProjectApi(funcName, data, callback);
        }
    }
    /** Method for playing text using text-to-speech.
     * @param {string} text - Text that should be played.
     * */
    async playText(text) {
        if (isCordova()) {
            cordova.exec(() => {
            }, () => {
            }, "alanVoice", "playText", [text]);
        }
        else {
            this.alanBtnInst.playText(text);
        }
    }
    /** Method for sending command(synchronised with voice).
     * @param {object} command - Command data.
     * */
    async playCommand(command) {
        if (isCordova()) {
            cordova.exec(() => {
            }, () => {
            }, "alanVoice", "playCommand", 
            // [{data: command}]);
            [command]);
        }
        else {
            this.alanBtnInst.playCommand(command);
        }
    }
    /** Method for activating the Alan button.
     * */
    async activate() {
        if (isCordova()) {
            return new Promise(function (resolve, reject) {
                cordova.exec(() => {
                    resolve();
                }, () => {
                    reject();
                }, "alanVoice", "activate", []);
            });
        }
        else {
            return this.alanBtnInst.activate();
        }
    }
    /** Method for deactivating the Alan button.
     * */
    async deactivate() {
        if (isCordova()) {
            cordova.exec(() => {
            }, () => {
            }, "alanVoice", "deactivate", []);
        }
        else {
            this.alanBtnInst.deactivate();
        }
    }
    /** Method for getting active status of the Alan button.
     * */
    async isActive() {
        if (isCordova()) {
            return new Promise(function (resolve, reject) {
                cordova.exec((res) => {
                    resolve(res);
                }, () => {
                    reject();
                }, "alanVoice", "isActive", []);
            });
        }
        else {
            return this.alanBtnInst.isActive();
        }
    }
    /** Method for removing the Alan button.
     * */
    async removeButton() {
        if (isCordova()) {
            cordova.exec(() => {
            }, () => {
            }, "alanVoice", "removeButton", []);
        }
        else {
            this.alanBtnInst.remove();
            this.alanBtnInst = null;
        }
    }
    getHost() {
        return this.alanHost || 'studio.alan.app';
    }
    componentDidLoad() {
        if (isCordova()) {
            device.ready().then(() => {
                cordova.exec((successCbData) => {
                    // command and onCommand are reversed to be consistent with html style adding events
                    if (successCbData.type === 'command') {
                        this.onCommand.emit(successCbData.data);
                    }
                    if (successCbData.type === 'onCommand') {
                        this.command.emit(successCbData.data);
                    }
                    if (successCbData.type === 'onButtonState') {
                        this.buttonState.emit(successCbData.data);
                    }
                    if (successCbData.type === 'onEvent') {
                        this.event.emit(successCbData.data);
                    }
                    if (successCbData.type === 'connectionState') {
                        this.connectionStatus.emit(successCbData.data);
                    }
                }, () => {
                }, "alanVoice", "addButton", [this.alanKey, this.left, this.right, this.bottom, this.zIndex]);
            });
        }
        else {
            this.alanBtnInst = alanBtn({
                key: this.alanKey,
                host: this.getHost(),
                size: this.size,
                left: this.left,
                right: this.right,
                bottom: this.bottom,
                zIndex: this.zIndex,
                rootEl: this.element.shadowRoot.getElementById(this.alanHolderId),
                shadowDOM: this.element.shadowRoot,
                onCommand: (data) => {
                    this.command.emit(data);
                },
                onEvent: (data) => {
                    this.event.emit(data);
                },
                onButtonState: (data) => {
                    this.buttonState.emit(data);
                },
                onConnectionStatus: (data) => {
                    let status = data === 'authorized' ? 'connected' : 'disconnected';
                    this.connectionStatus.emit(status);
                },
            });
        }
    }
    render() {
        return Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: this.alanHolderId }));
    }
    get element() { return Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
}




/***/ })

}]);
//# sourceMappingURL=0-es2015.js.map