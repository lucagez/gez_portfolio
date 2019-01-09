// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../js/modules/birds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var bird = '<div class="bird"><svg class="body" viewBox="0 0 186 156" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M141.252 60H36.0012L39 89C39 89 83.6144 126.4 116.192 107.826C148.769 89.2529 141.252 60 141.252 60Z" fill="#444"></path><path d="M125.017 71.9999L178.001 77.0863L123.001 92.9948L125.017 71.9999Z" fill="#FF8600"></path><rect x="2.0011" y="65.9999" width="68" height="11" fill="#777"></rect><rect x="2.94153" y="82.2459" width="66.5697" height="11" transform="rotate(-13.2396 2.94153 82.2459)" fill="#777"></rect><path class="wing" d="M34.6539 0.691315L116.039 65.1827L82.179 107.913L34.6539 0.691315Z" fill="#999"></path></svg></div>';
  var birds_container = document.querySelector('.birds');
  var string = '';

  for (var i = 0; i < 5; ++i) {
    string += bird;
  }

  birds_container.innerHTML = string;
  var birds = document.querySelectorAll('.bird');
  birds.forEach(function (bird, index) {
    bird.style.animationDelay = "".concat(Math.random() * 10 * Math.sqrt(index), "s");
    bird.querySelector('.body').style.animationDelay = "".concat(Math.random() * 3, "s");
  });
};

exports.default = _default;
},{}],"../media/me.jpg":[function(require,module,exports) {
module.exports = "/me.b633877c.jpg";
},{}],"../js/modules/landing_label.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _me = _interopRequireDefault(require("../../media/me.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var label = document.querySelector('.label');
  var title = document.querySelector('.title');
  label.innerHTML = "\n    <img src=\"".concat(_me.default, "\"/>\n  ");
  title.addEventListener('mousemove', function (e) {
    label.style = "\n      display: unset;\n      transform: translate(".concat(e.clientX + 80, "px, ").concat(e.clientY - 300, "px);\n    ");
    title.addEventListener('mouseout', function () {
      return label.style.display = 'none';
    });
  });
};

exports.default = _default;
},{"../../media/me.jpg":"../media/me.jpg"}],"../js/modules/hist.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hist =
/*#__PURE__*/
function () {
  function Hist(props) {
    _classCallCheck(this, Hist);

    this.data = props.data || [];
    this.style = props.style || null;
    this.id = props.id || 1;
    this.parent = document.querySelector(props.parent || 'body');
    this.has_at_least_one_negative = this.data.map(function (v) {
      return v.value;
    }).some(function (v) {
      return v < 0;
    });
    this.bar = this.bar.bind(this);
    this.make_tool = this.make_tool.bind(this);
  }

  _createClass(Hist, [{
    key: "make",
    value: function make() {
      var _this = this;

      this.make_container();
      this.make_tool();
      this.has_at_least_one_negative ? this.has_negative() : null;
      this.data.map(function (val, index) {
        return _this.bar(val, index, false);
      }); // 'undicibarre'.split('').forEach((e, i) => this.horizontal_bar(i));

      this.fluid_params();
      this.update();
    }
  }, {
    key: "bar",
    value: function bar(val, index) {
      var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var b = document.createElement('div');
      var label = document.createElement('div');
      var style = val.style ? val.style : null;

      if (val.value < 0) {
        b.classList.add('negative-bar');
        label.classList.add('negative-label');
      }

      b.classList.add("bar");
      b.classList.add("bar-".concat(index));
      b.style = style;
      label.classList.add("label");
      label.classList.add("label-".concat(index));
      label.innerText = val.label;
      b.appendChild(label);
      this.write_values(b, val.value, val.label);
      this.chart.appendChild(b);
      setTimeout(function () {
        return b.style.height = log ? "".concat(Math.log(Math.abs(val.value)), "%") : "".concat(Math.abs(val.value), "%");
      }, .1);
    }
  }, {
    key: "horizontal_bar",
    value: function horizontal_bar(index) {
      var h = document.createElement('hr');
      h.classList.add('horizontal-bar');
      h.classList.add("horizontal-bar-".concat(index));
      h.style.top = "".concat(index * 9.02, "%");
      this.chart_container.appendChild(h);
    }
  }, {
    key: "has_negative",
    value: function has_negative() {
      this.chart_container.style.gridTemplateAreas = '"chart""."';
    }
  }, {
    key: "write_values",
    value: function write_values(el, value, label) {
      el.setAttribute('value', value);
      el.setAttribute('label', label);
    }
  }, {
    key: "make_container",
    value: function make_container() {
      this.chart_container = document.createElement('div');
      this.chart = document.createElement('div');
      this.chart_container.classList.add('chart-container');
      this.chart.classList.add('chart', "grapho-".concat(this.id));
      this.chart_container.appendChild(this.chart);
      this.parent.appendChild(this.chart_container);
    }
  }, {
    key: "make_tool",
    value: function make_tool() {
      var _this2 = this;

      this.tool = document.createElement('div');
      this.tool.classList.add('tool');
      this.chart_container.appendChild(this.tool);
      this.chart_container.addEventListener('mousemove', function (e) {
        var pos = _this2.tool.getBoundingClientRect();

        var x = e.clientX;
        var y = e.clientY + 20;
        x > window.innerWidth / 2 ? x -= 70 : null;
        y > window.innerHeight / 2 ? y -= 200 : null;
        _this2.tool.style = "\n        top: ".concat(y + 20, "px;\n        left: ").concat(x, "px;\n        visibility: visible;\n      ");
        e.target.attributes['value'] ? _this2.tool.innerHTML = "\n        <h1>".concat(e.target.attributes['value'].value, "</h1>\n        <p>").concat(e.target.attributes['label'].value, "</p>\n      ") : _this2.tool.style = "visibility: hidden;";
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      window.addEventListener('resize', function () {
        return _this3.fluid_params();
      });
    }
  }, {
    key: "fluid_params",
    value: function fluid_params() {
      var _this4 = this;

      var bars = this.chart.querySelectorAll('.bar');
      var labels = this.chart.querySelectorAll('.label');
      var dimensions = this.chart.getBoundingClientRect();
      var density = bars.length / dimensions.width * 1000;
      var size = density > 35 ? {
        font: 11,
        margin: 2
      } : {
        font: 16,
        margin: 10
      };
      bars.forEach(function (e) {
        return e.style.fontSize = "".concat(size.font, "px");
      });
      labels.forEach(function (e) {
        var has_negative_class = e.classList.value.split(' ').indexOf('negative-label');
        console.log(has_negative_class);
        var style = has_negative_class != -1 ? {
          translate: _this4.has_at_least_one_negative ? -dimensions.height + size.font - 25 : -25,
          rotate: 180
        } : {
          translate: _this4.has_at_least_one_negative ? dimensions.height + 25 : 25,
          rotate: 0
        };
        e.style.transform = "translateY(".concat(style.translate, "px) rotate(").concat(style.rotate - 25, "deg)");
      });
      this.chart.style.gridColumnGap = "".concat(size.margin, "px");
    }
  }]);

  return Hist;
}();

exports.default = Hist;
},{}],"../js/modules/word_listener.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hist = _interopRequireDefault(require("./hist.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var front_end_listener = document.querySelector('.front-end');
  var chart_data = [];
  var data_listener = document.querySelector('.data-vis');

  for (var i = 0; i < 20; ++i) {
    chart_data.push({
      value: Math.floor(Math.random() * 100),
      label: ''
    });
  }

  var config = {
    data: chart_data,
    parent: '.work'
  };
  data_listener.addEventListener('mouseover', function () {
    var chart = new _hist.default(config).make();
    var chart_area = document.querySelector('.work');
    chart_area.querySelectorAll('.bar').forEach(function (bar) {
      return bar.style.height = '0';
    });
    data_listener.addEventListener('mouseout', function () {
      chart_area.innerHTML = '';
    });
  });
  front_end_listener.addEventListener('mouseover', function () {
    var hypno = document.querySelector('#hypno');
    hypno.style.display = 'unset';
    front_end_listener.addEventListener('mouseout', function () {
      return hypno.style.display = 'none';
    });
  });
};

exports.default = _default;
},{"./hist.js":"../js/modules/hist.js"}],"../js/main.js":[function(require,module,exports) {
"use strict";

var _birds = _interopRequireDefault(require("./modules/birds.js"));

var _landing_label = _interopRequireDefault(require("./modules/landing_label.js"));

var _word_listener = _interopRequireDefault(require("./modules/word_listener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'normalize.css';
(0, _birds.default)();
(0, _landing_label.default)(); // listener();
},{"./modules/birds.js":"../js/modules/birds.js","./modules/landing_label.js":"../js/modules/landing_label.js","./modules/word_listener":"../js/modules/word_listener.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37179" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/main.js"], null)
//# sourceMappingURL=/main.8f75cf09.map