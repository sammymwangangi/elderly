(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "xq7Z":
    /*!*************************************************************************!*\
      !*** ./node_modules/@alan-ai/alan-button/dist/esm/alan-button.entry.js ***!
      \*************************************************************************/

    /*! exports provided: alan_button */

    /***/
    function xq7Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "alan_button", function () {
        return AlanButton;
      });
      /* harmony import */


      var _index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-18e88af1.js */
      "Ie2U");

      function isCordova() {
        return window && window.cordova;
      }

      var Device = /*#__PURE__*/function () {
        function Device() {
          var _this = this;

          _classCallCheck(this, Device);

          this.readyStatusPromise = new Promise(function (resolve) {
            if (isCordova()) {
              _this.interval = setInterval(function () {
                if (window.cordova && typeof window.cordova.exec === 'function') {
                  clearInterval(_this.interval);
                  resolve();
                }
              }, 300);
            } else {
              resolve();
            }
          });
        }

        _createClass(Device, [{
          key: "ready",
          value: function ready() {
            return this.readyStatusPromise;
          }
        }]);

        return Device;
      }();

      var device = new Device();

      var AlanButton = /*#__PURE__*/function () {
        function AlanButton(hostRef) {
          _classCallCheck(this, AlanButton);

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


        _createClass(AlanButton, [{
          key: "setVisualState",
          value: function () {
            var _setVisualState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(visualState) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (isCordova()) {
                        cordova.exec(function () {}, function () {}, "alanVoice", "setVisualState", [visualState]);
                      } else {
                        this.alanBtnInst.setVisualState(visualState);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function setVisualState(_x) {
              return _setVisualState.apply(this, arguments);
            }

            return setVisualState;
          }()
          /** Method for calling a project API that was defined in Alan Studio project’s script.
           * @param {string} funcName - API method name.
           * @param {object} data - Data that should be passed to the project API method.
           * @param {Function} callback - Callback that could be returned from the project API method.
           *
           * */

        }, {
          key: "callProjectApi",
          value: function () {
            var _callProjectApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(funcName, data, callback) {
              var _arguments = arguments,
                  _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (isCordova()) {
                        cordova.exec(function () {
                          callback.apply.apply(callback, [_this2].concat(_toConsumableArray(_arguments)));
                        }, function () {}, "alanVoice", "callProjectApi", [funcName, data]);
                      } else {
                        this.alanBtnInst.callProjectApi(funcName, data, callback);
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function callProjectApi(_x2, _x3, _x4) {
              return _callProjectApi.apply(this, arguments);
            }

            return callProjectApi;
          }()
          /** Method for playing text using text-to-speech.
           * @param {string} text - Text that should be played.
           * */

        }, {
          key: "playText",
          value: function () {
            var _playText = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(text) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (isCordova()) {
                        cordova.exec(function () {}, function () {}, "alanVoice", "playText", [text]);
                      } else {
                        this.alanBtnInst.playText(text);
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function playText(_x5) {
              return _playText.apply(this, arguments);
            }

            return playText;
          }()
          /** Method for sending command(synchronised with voice).
           * @param {object} command - Command data.
           * */

        }, {
          key: "playCommand",
          value: function () {
            var _playCommand = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(command) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (isCordova()) {
                        cordova.exec(function () {}, function () {}, "alanVoice", "playCommand", // [{data: command}]);
                        [command]);
                      } else {
                        this.alanBtnInst.playCommand(command);
                      }

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function playCommand(_x6) {
              return _playCommand.apply(this, arguments);
            }

            return playCommand;
          }()
          /** Method for activating the Alan button.
           * */

        }, {
          key: "activate",
          value: function () {
            var _activate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!isCordova()) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return", new Promise(function (resolve, reject) {
                        cordova.exec(function () {
                          resolve();
                        }, function () {
                          reject();
                        }, "alanVoice", "activate", []);
                      }));

                    case 4:
                      return _context5.abrupt("return", this.alanBtnInst.activate());

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function activate() {
              return _activate.apply(this, arguments);
            }

            return activate;
          }()
          /** Method for deactivating the Alan button.
           * */

        }, {
          key: "deactivate",
          value: function () {
            var _deactivate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (isCordova()) {
                        cordova.exec(function () {}, function () {}, "alanVoice", "deactivate", []);
                      } else {
                        this.alanBtnInst.deactivate();
                      }

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function deactivate() {
              return _deactivate.apply(this, arguments);
            }

            return deactivate;
          }()
          /** Method for getting active status of the Alan button.
           * */

        }, {
          key: "isActive",
          value: function () {
            var _isActive = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!isCordova()) {
                        _context7.next = 4;
                        break;
                      }

                      return _context7.abrupt("return", new Promise(function (resolve, reject) {
                        cordova.exec(function (res) {
                          resolve(res);
                        }, function () {
                          reject();
                        }, "alanVoice", "isActive", []);
                      }));

                    case 4:
                      return _context7.abrupt("return", this.alanBtnInst.isActive());

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function isActive() {
              return _isActive.apply(this, arguments);
            }

            return isActive;
          }()
          /** Method for removing the Alan button.
           * */

        }, {
          key: "removeButton",
          value: function () {
            var _removeButton = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (isCordova()) {
                        cordova.exec(function () {}, function () {}, "alanVoice", "removeButton", []);
                      } else {
                        this.alanBtnInst.remove();
                        this.alanBtnInst = null;
                      }

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function removeButton() {
              return _removeButton.apply(this, arguments);
            }

            return removeButton;
          }()
        }, {
          key: "getHost",
          value: function getHost() {
            return this.alanHost || 'studio.alan.app';
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            var _this3 = this;

            if (isCordova()) {
              device.ready().then(function () {
                cordova.exec(function (successCbData) {
                  // command and onCommand are reversed to be consistent with html style adding events
                  if (successCbData.type === 'command') {
                    _this3.onCommand.emit(successCbData.data);
                  }

                  if (successCbData.type === 'onCommand') {
                    _this3.command.emit(successCbData.data);
                  }

                  if (successCbData.type === 'onButtonState') {
                    _this3.buttonState.emit(successCbData.data);
                  }

                  if (successCbData.type === 'onEvent') {
                    _this3.event.emit(successCbData.data);
                  }

                  if (successCbData.type === 'connectionState') {
                    _this3.connectionStatus.emit(successCbData.data);
                  }
                }, function () {}, "alanVoice", "addButton", [_this3.alanKey, _this3.left, _this3.right, _this3.bottom, _this3.zIndex]);
              });
            } else {
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
                onCommand: function onCommand(data) {
                  _this3.command.emit(data);
                },
                onEvent: function onEvent(data) {
                  _this3.event.emit(data);
                },
                onButtonState: function onButtonState(data) {
                  _this3.buttonState.emit(data);
                },
                onConnectionStatus: function onConnectionStatus(data) {
                  var status = data === 'authorized' ? 'connected' : 'disconnected';

                  _this3.connectionStatus.emit(status);
                }
              });
            }
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              id: this.alanHolderId
            }));
          }
        }, {
          key: "element",
          get: function get() {
            return Object(_index_18e88af1_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
          }
        }]);

        return AlanButton;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=0-es5.js.map