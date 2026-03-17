function vD(v, E) {
  for (var S = 0; S < E.length; S++) {
    const b = E[S];
    if (typeof b != "string" && !Array.isArray(b)) {
      for (const w in b)
        if (w !== "default" && !(w in v)) {
          const N = Object.getOwnPropertyDescriptor(b, w);
          N && Object.defineProperty(v, w, N.get ? N : {
            enumerable: !0,
            get: () => b[w]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }));
}
function hD(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var JE = { exports: {} }, yv = {}, ZE = { exports: {} }, kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function mD() {
  if (KR) return kt;
  KR = 1;
  var v = Symbol.for("react.element"), E = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), O = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), P = Symbol.iterator;
  function B(U) {
    return U === null || typeof U != "object" ? null : (U = P && U[P] || U["@@iterator"], typeof U == "function" ? U : null);
  }
  var he = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, J = Object.assign, ue = {};
  function le(U, ne, Ie) {
    this.props = U, this.context = ne, this.refs = ue, this.updater = Ie || he;
  }
  le.prototype.isReactComponent = {}, le.prototype.setState = function(U, ne) {
    if (typeof U != "object" && typeof U != "function" && U != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, U, ne, "setState");
  }, le.prototype.forceUpdate = function(U) {
    this.updater.enqueueForceUpdate(this, U, "forceUpdate");
  };
  function Pe() {
  }
  Pe.prototype = le.prototype;
  function fe(U, ne, Ie) {
    this.props = U, this.context = ne, this.refs = ue, this.updater = Ie || he;
  }
  var me = fe.prototype = new Pe();
  me.constructor = fe, J(me, le.prototype), me.isPureReactComponent = !0;
  var ve = Array.isArray, Re = Object.prototype.hasOwnProperty, ge = { current: null }, Be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(U, ne, Ie) {
    var Ze, nt = {}, ht = null, Nt = null;
    if (ne != null) for (Ze in ne.ref !== void 0 && (Nt = ne.ref), ne.key !== void 0 && (ht = "" + ne.key), ne) Re.call(ne, Ze) && !Be.hasOwnProperty(Ze) && (nt[Ze] = ne[Ze]);
    var it = arguments.length - 2;
    if (it === 1) nt.children = Ie;
    else if (1 < it) {
      for (var wt = Array(it), Wt = 0; Wt < it; Wt++) wt[Wt] = arguments[Wt + 2];
      nt.children = wt;
    }
    if (U && U.defaultProps) for (Ze in it = U.defaultProps, it) nt[Ze] === void 0 && (nt[Ze] = it[Ze]);
    return { $$typeof: v, type: U, key: ht, ref: Nt, props: nt, _owner: ge.current };
  }
  function Cn(U, ne) {
    return { $$typeof: v, type: U.type, key: ne, ref: U.ref, props: U.props, _owner: U._owner };
  }
  function Dt(U) {
    return typeof U == "object" && U !== null && U.$$typeof === v;
  }
  function un(U) {
    var ne = { "=": "=0", ":": "=2" };
    return "$" + U.replace(/[=:]/g, function(Ie) {
      return ne[Ie];
    });
  }
  var Kt = /\/+/g;
  function Tt(U, ne) {
    return typeof U == "object" && U !== null && U.key != null ? un("" + U.key) : ne.toString(36);
  }
  function qe(U, ne, Ie, Ze, nt) {
    var ht = typeof U;
    (ht === "undefined" || ht === "boolean") && (U = null);
    var Nt = !1;
    if (U === null) Nt = !0;
    else switch (ht) {
      case "string":
      case "number":
        Nt = !0;
        break;
      case "object":
        switch (U.$$typeof) {
          case v:
          case E:
            Nt = !0;
        }
    }
    if (Nt) return Nt = U, nt = nt(Nt), U = Ze === "" ? "." + Tt(Nt, 0) : Ze, ve(nt) ? (Ie = "", U != null && (Ie = U.replace(Kt, "$&/") + "/"), qe(nt, ne, Ie, "", function(Wt) {
      return Wt;
    })) : nt != null && (Dt(nt) && (nt = Cn(nt, Ie + (!nt.key || Nt && Nt.key === nt.key ? "" : ("" + nt.key).replace(Kt, "$&/") + "/") + U)), ne.push(nt)), 1;
    if (Nt = 0, Ze = Ze === "" ? "." : Ze + ":", ve(U)) for (var it = 0; it < U.length; it++) {
      ht = U[it];
      var wt = Ze + Tt(ht, it);
      Nt += qe(ht, ne, Ie, wt, nt);
    }
    else if (wt = B(U), typeof wt == "function") for (U = wt.call(U), it = 0; !(ht = U.next()).done; ) ht = ht.value, wt = Ze + Tt(ht, it++), Nt += qe(ht, ne, Ie, wt, nt);
    else if (ht === "object") throw ne = String(U), Error("Objects are not valid as a React child (found: " + (ne === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : ne) + "). If you meant to render a collection of children, use an array instead.");
    return Nt;
  }
  function Bt(U, ne, Ie) {
    if (U == null) return U;
    var Ze = [], nt = 0;
    return qe(U, Ze, "", "", function(ht) {
      return ne.call(Ie, ht, nt++);
    }), Ze;
  }
  function Rt(U) {
    if (U._status === -1) {
      var ne = U._result;
      ne = ne(), ne.then(function(Ie) {
        (U._status === 0 || U._status === -1) && (U._status = 1, U._result = Ie);
      }, function(Ie) {
        (U._status === 0 || U._status === -1) && (U._status = 2, U._result = Ie);
      }), U._status === -1 && (U._status = 0, U._result = ne);
    }
    if (U._status === 1) return U._result.default;
    throw U._result;
  }
  var vt = { current: null }, re = { transition: null }, Me = { ReactCurrentDispatcher: vt, ReactCurrentBatchConfig: re, ReactCurrentOwner: ge };
  function Ce() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return kt.Children = { map: Bt, forEach: function(U, ne, Ie) {
    Bt(U, function() {
      ne.apply(this, arguments);
    }, Ie);
  }, count: function(U) {
    var ne = 0;
    return Bt(U, function() {
      ne++;
    }), ne;
  }, toArray: function(U) {
    return Bt(U, function(ne) {
      return ne;
    }) || [];
  }, only: function(U) {
    if (!Dt(U)) throw Error("React.Children.only expected to receive a single React element child.");
    return U;
  } }, kt.Component = le, kt.Fragment = S, kt.Profiler = w, kt.PureComponent = fe, kt.StrictMode = b, kt.Suspense = F, kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me, kt.act = Ce, kt.cloneElement = function(U, ne, Ie) {
    if (U == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + U + ".");
    var Ze = J({}, U.props), nt = U.key, ht = U.ref, Nt = U._owner;
    if (ne != null) {
      if (ne.ref !== void 0 && (ht = ne.ref, Nt = ge.current), ne.key !== void 0 && (nt = "" + ne.key), U.type && U.type.defaultProps) var it = U.type.defaultProps;
      for (wt in ne) Re.call(ne, wt) && !Be.hasOwnProperty(wt) && (Ze[wt] = ne[wt] === void 0 && it !== void 0 ? it[wt] : ne[wt]);
    }
    var wt = arguments.length - 2;
    if (wt === 1) Ze.children = Ie;
    else if (1 < wt) {
      it = Array(wt);
      for (var Wt = 0; Wt < wt; Wt++) it[Wt] = arguments[Wt + 2];
      Ze.children = it;
    }
    return { $$typeof: v, type: U.type, key: nt, ref: ht, props: Ze, _owner: Nt };
  }, kt.createContext = function(U) {
    return U = { $$typeof: O, _currentValue: U, _currentValue2: U, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, U.Provider = { $$typeof: N, _context: U }, U.Consumer = U;
  }, kt.createElement = We, kt.createFactory = function(U) {
    var ne = We.bind(null, U);
    return ne.type = U, ne;
  }, kt.createRef = function() {
    return { current: null };
  }, kt.forwardRef = function(U) {
    return { $$typeof: y, render: U };
  }, kt.isValidElement = Dt, kt.lazy = function(U) {
    return { $$typeof: $, _payload: { _status: -1, _result: U }, _init: Rt };
  }, kt.memo = function(U, ne) {
    return { $$typeof: z, type: U, compare: ne === void 0 ? null : ne };
  }, kt.startTransition = function(U) {
    var ne = re.transition;
    re.transition = {};
    try {
      U();
    } finally {
      re.transition = ne;
    }
  }, kt.unstable_act = Ce, kt.useCallback = function(U, ne) {
    return vt.current.useCallback(U, ne);
  }, kt.useContext = function(U) {
    return vt.current.useContext(U);
  }, kt.useDebugValue = function() {
  }, kt.useDeferredValue = function(U) {
    return vt.current.useDeferredValue(U);
  }, kt.useEffect = function(U, ne) {
    return vt.current.useEffect(U, ne);
  }, kt.useId = function() {
    return vt.current.useId();
  }, kt.useImperativeHandle = function(U, ne, Ie) {
    return vt.current.useImperativeHandle(U, ne, Ie);
  }, kt.useInsertionEffect = function(U, ne) {
    return vt.current.useInsertionEffect(U, ne);
  }, kt.useLayoutEffect = function(U, ne) {
    return vt.current.useLayoutEffect(U, ne);
  }, kt.useMemo = function(U, ne) {
    return vt.current.useMemo(U, ne);
  }, kt.useReducer = function(U, ne, Ie) {
    return vt.current.useReducer(U, ne, Ie);
  }, kt.useRef = function(U) {
    return vt.current.useRef(U);
  }, kt.useState = function(U) {
    return vt.current.useState(U);
  }, kt.useSyncExternalStore = function(U, ne, Ie) {
    return vt.current.useSyncExternalStore(U, ne, Ie);
  }, kt.useTransition = function() {
    return vt.current.useTransition();
  }, kt.version = "18.3.1", kt;
}
var Ev = { exports: {} };
Ev.exports;
var XR;
function yD() {
  return XR || (XR = 1, function(v, E) {
    var S = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    S.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var b = "18.3.1", w = Symbol.for("react.element"), N = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), $ = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Pe = Symbol.iterator, fe = "@@iterator";
      function me(m) {
        if (m === null || typeof m != "object")
          return null;
        var _ = Pe && m[Pe] || m[fe];
        return typeof _ == "function" ? _ : null;
      }
      var ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Re = {
        transition: null
      }, ge = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, We = {}, Cn = null;
      function Dt(m) {
        Cn = m;
      }
      We.setExtraStackFrame = function(m) {
        Cn = m;
      }, We.getCurrentStack = null, We.getStackAddendum = function() {
        var m = "";
        Cn && (m += Cn);
        var _ = We.getCurrentStack;
        return _ && (m += _() || ""), m;
      };
      var un = !1, Kt = !1, Tt = !1, qe = !1, Bt = !1, Rt = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: Re,
        ReactCurrentOwner: Be
      };
      Rt.ReactDebugCurrentFrame = We, Rt.ReactCurrentActQueue = ge;
      function vt(m) {
        {
          for (var _ = arguments.length, Y = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            Y[q - 1] = arguments[q];
          Me("warn", m, Y);
        }
      }
      function re(m) {
        {
          for (var _ = arguments.length, Y = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            Y[q - 1] = arguments[q];
          Me("error", m, Y);
        }
      }
      function Me(m, _, Y) {
        {
          var q = Rt.ReactDebugCurrentFrame, pe = q.getStackAddendum();
          pe !== "" && (_ += "%s", Y = Y.concat([pe]));
          var Le = Y.map(function(ke) {
            return String(ke);
          });
          Le.unshift("Warning: " + _), Function.prototype.apply.call(console[m], console, Le);
        }
      }
      var Ce = {};
      function U(m, _) {
        {
          var Y = m.constructor, q = Y && (Y.displayName || Y.name) || "ReactClass", pe = q + "." + _;
          if (Ce[pe])
            return;
          re("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, q), Ce[pe] = !0;
        }
      }
      var ne = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, _, Y) {
          U(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, _, Y, q) {
          U(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, _, Y, q) {
          U(m, "setState");
        }
      }, Ie = Object.assign, Ze = {};
      Object.freeze(Ze);
      function nt(m, _, Y) {
        this.props = m, this.context = _, this.refs = Ze, this.updater = Y || ne;
      }
      nt.prototype.isReactComponent = {}, nt.prototype.setState = function(m, _) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, _, "setState");
      }, nt.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Nt = function(m, _) {
          Object.defineProperty(nt.prototype, m, {
            get: function() {
              vt("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
            }
          });
        };
        for (var it in ht)
          ht.hasOwnProperty(it) && Nt(it, ht[it]);
      }
      function wt() {
      }
      wt.prototype = nt.prototype;
      function Wt(m, _, Y) {
        this.props = m, this.context = _, this.refs = Ze, this.updater = Y || ne;
      }
      var Un = Wt.prototype = new wt();
      Un.constructor = Wt, Ie(Un, nt.prototype), Un.isPureReactComponent = !0;
      function Jn() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var ur = Array.isArray;
      function zn(m) {
        return ur(m);
      }
      function br(m) {
        {
          var _ = typeof Symbol == "function" && Symbol.toStringTag, Y = _ && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return Y;
        }
      }
      function Yn(m) {
        try {
          return An(m), !1;
        } catch {
          return !0;
        }
      }
      function An(m) {
        return "" + m;
      }
      function ha(m) {
        if (Yn(m))
          return re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(m)), An(m);
      }
      function Ja(m, _, Y) {
        var q = m.displayName;
        if (q)
          return q;
        var pe = _.displayName || _.name || "";
        return pe !== "" ? Y + "(" + pe + ")" : Y;
      }
      function Lr(m) {
        return m.displayName || "Context";
      }
      function Wn(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case O:
            return "Fragment";
          case N:
            return "Portal";
          case F:
            return "Profiler";
          case y:
            return "StrictMode";
          case B:
            return "Suspense";
          case he:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case $:
              var _ = m;
              return Lr(_) + ".Consumer";
            case z:
              var Y = m;
              return Lr(Y._context) + ".Provider";
            case P:
              return Ja(m, m.render, "ForwardRef");
            case J:
              var q = m.displayName || null;
              return q !== null ? q : Wn(m.type) || "Memo";
            case ue: {
              var pe = m, Le = pe._payload, ke = pe._init;
              try {
                return Wn(ke(Le));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Zn = Object.prototype.hasOwnProperty, er = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Tr, Za, Fn;
      Fn = {};
      function sr(m) {
        if (Zn.call(m, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function qr(m) {
        if (Zn.call(m, "key")) {
          var _ = Object.getOwnPropertyDescriptor(m, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function Fi(m, _) {
        var Y = function() {
          Tr || (Tr = !0, re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        Y.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: Y,
          configurable: !0
        });
      }
      function ma(m, _) {
        var Y = function() {
          Za || (Za = !0, re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        Y.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function ye(m) {
        if (typeof m.ref == "string" && Be.current && m.__self && Be.current.stateNode !== m.__self) {
          var _ = Wn(Be.current.type);
          Fn[_] || (re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, m.ref), Fn[_] = !0);
        }
      }
      var Ye = function(m, _, Y, q, pe, Le, ke) {
        var Xe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: w,
          // Built-in properties that belong on the element
          type: m,
          key: _,
          ref: Y,
          props: ke,
          // Record the component responsible for creating this element.
          _owner: Le
        };
        return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Xe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(Xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: pe
        }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
      };
      function ft(m, _, Y) {
        var q, pe = {}, Le = null, ke = null, Xe = null, pt = null;
        if (_ != null) {
          sr(_) && (ke = _.ref, ye(_)), qr(_) && (ha(_.key), Le = "" + _.key), Xe = _.__self === void 0 ? null : _.__self, pt = _.__source === void 0 ? null : _.__source;
          for (q in _)
            Zn.call(_, q) && !er.hasOwnProperty(q) && (pe[q] = _[q]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          pe.children = Y;
        else if (It > 1) {
          for (var Zt = Array(It), en = 0; en < It; en++)
            Zt[en] = arguments[en + 2];
          Object.freeze && Object.freeze(Zt), pe.children = Zt;
        }
        if (m && m.defaultProps) {
          var st = m.defaultProps;
          for (q in st)
            pe[q] === void 0 && (pe[q] = st[q]);
        }
        if (Le || ke) {
          var an = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Le && Fi(pe, an), ke && ma(pe, an);
        }
        return Ye(m, Le, ke, Xe, pt, Be.current, pe);
      }
      function Ft(m, _) {
        var Y = Ye(m.type, _, m.ref, m._self, m._source, m._owner, m.props);
        return Y;
      }
      function fn(m, _, Y) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var q, pe = Ie({}, m.props), Le = m.key, ke = m.ref, Xe = m._self, pt = m._source, It = m._owner;
        if (_ != null) {
          sr(_) && (ke = _.ref, It = Be.current), qr(_) && (ha(_.key), Le = "" + _.key);
          var Zt;
          m.type && m.type.defaultProps && (Zt = m.type.defaultProps);
          for (q in _)
            Zn.call(_, q) && !er.hasOwnProperty(q) && (_[q] === void 0 && Zt !== void 0 ? pe[q] = Zt[q] : pe[q] = _[q]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          pe.children = Y;
        else if (en > 1) {
          for (var st = Array(en), an = 0; an < en; an++)
            st[an] = arguments[an + 2];
          pe.children = st;
        }
        return Ye(m.type, Le, ke, Xe, pt, It, pe);
      }
      function dn(m) {
        return typeof m == "object" && m !== null && m.$$typeof === w;
      }
      var pn = ".", tr = ":";
      function sn(m) {
        var _ = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, q = m.replace(_, function(pe) {
          return Y[pe];
        });
        return "$" + q;
      }
      var Xt = !1, Pt = /\/+/g;
      function ya(m) {
        return m.replace(Pt, "$&/");
      }
      function ja(m, _) {
        return typeof m == "object" && m !== null && m.key != null ? (ha(m.key), sn("" + m.key)) : _.toString(36);
      }
      function La(m, _, Y, q, pe) {
        var Le = typeof m;
        (Le === "undefined" || Le === "boolean") && (m = null);
        var ke = !1;
        if (m === null)
          ke = !0;
        else
          switch (Le) {
            case "string":
            case "number":
              ke = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case w:
                case N:
                  ke = !0;
              }
          }
        if (ke) {
          var Xe = m, pt = pe(Xe), It = q === "" ? pn + ja(Xe, 0) : q;
          if (zn(pt)) {
            var Zt = "";
            It != null && (Zt = ya(It) + "/"), La(pt, _, Zt, "", function(gd) {
              return gd;
            });
          } else pt != null && (dn(pt) && (pt.key && (!Xe || Xe.key !== pt.key) && ha(pt.key), pt = Ft(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Xe || Xe.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ya("" + pt.key) + "/"
            ) : "") + It
          )), _.push(pt));
          return 1;
        }
        var en, st, an = 0, kn = q === "" ? pn : q + tr;
        if (zn(m))
          for (var so = 0; so < m.length; so++)
            en = m[so], st = kn + ja(en, so), an += La(en, _, Y, st, pe);
        else {
          var ss = me(m);
          if (typeof ss == "function") {
            var Gi = m;
            ss === Gi.entries && (Xt || vt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xt = !0);
            for (var co = ss.call(Gi), cs, yd = 0; !(cs = co.next()).done; )
              en = cs.value, st = kn + ja(en, yd++), an += La(en, _, Y, st, pe);
          } else if (Le === "object") {
            var wc = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (wc === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : wc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return an;
      }
      function Pi(m, _, Y) {
        if (m == null)
          return m;
        var q = [], pe = 0;
        return La(m, q, "", "", function(Le) {
          return _.call(Y, Le, pe++);
        }), q;
      }
      function to(m) {
        var _ = 0;
        return Pi(m, function() {
          _++;
        }), _;
      }
      function no(m, _, Y) {
        Pi(m, function() {
          _.apply(this, arguments);
        }, Y);
      }
      function Vi(m) {
        return Pi(m, function(_) {
          return _;
        }) || [];
      }
      function ro(m) {
        if (!dn(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function pi(m) {
        var _ = {
          $$typeof: $,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        _.Provider = {
          $$typeof: z,
          _context: _
        };
        var Y = !1, q = !1, pe = !1;
        {
          var Le = {
            $$typeof: $,
            _context: _
          };
          Object.defineProperties(Le, {
            Provider: {
              get: function() {
                return q || (q = !0, re("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(ke) {
                _.Provider = ke;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(ke) {
                _._currentValue = ke;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(ke) {
                _._currentValue2 = ke;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(ke) {
                _._threadCount = ke;
              }
            },
            Consumer: {
              get: function() {
                return Y || (Y = !0, re("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(ke) {
                pe || (vt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ke), pe = !0);
              }
            }
          }), _.Consumer = Le;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var ga = -1, cr = 0, Sa = 1, Kr = 2;
      function vi(m) {
        if (m._status === ga) {
          var _ = m._result, Y = _();
          if (Y.then(function(Le) {
            if (m._status === cr || m._status === ga) {
              var ke = m;
              ke._status = Sa, ke._result = Le;
            }
          }, function(Le) {
            if (m._status === cr || m._status === ga) {
              var ke = m;
              ke._status = Kr, ke._result = Le;
            }
          }), m._status === ga) {
            var q = m;
            q._status = cr, q._result = Y;
          }
        }
        if (m._status === Sa) {
          var pe = m._result;
          return pe === void 0 && re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, pe), "default" in pe || re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, pe), pe.default;
        } else
          throw m._result;
      }
      function hi(m) {
        var _ = {
          // We use these fields to store the result.
          _status: ga,
          _result: m
        }, Y = {
          $$typeof: ue,
          _payload: _,
          _init: vi
        };
        {
          var q, pe;
          Object.defineProperties(Y, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Le) {
                re("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Le, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return pe;
              },
              set: function(Le) {
                re("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), pe = Le, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Hi(m) {
        m != null && m.$$typeof === J ? re("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? re("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && re("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && re("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: P,
          render: m
        };
        {
          var Y;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(q) {
              Y = q, !m.name && !m.displayName && (m.displayName = q);
            }
          });
        }
        return _;
      }
      var k;
      k = Symbol.for("react.module.reference");
      function ae(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === O || m === F || Bt || m === y || m === B || m === he || qe || m === le || un || Kt || Tt || typeof m == "object" && m !== null && (m.$$typeof === ue || m.$$typeof === J || m.$$typeof === z || m.$$typeof === $ || m.$$typeof === P || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === k || m.getModuleId !== void 0));
      }
      function xe(m, _) {
        ae(m) || re("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var Y = {
          $$typeof: J,
          type: m,
          compare: _ === void 0 ? null : _
        };
        {
          var q;
          Object.defineProperty(Y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(pe) {
              q = pe, !m.name && !m.displayName && (m.displayName = pe);
            }
          });
        }
        return Y;
      }
      function Te() {
        var m = ve.current;
        return m === null && re(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function gt(m) {
        var _ = Te();
        if (m._context !== void 0) {
          var Y = m._context;
          Y.Consumer === m ? re("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === m && re("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(m);
      }
      function rt(m) {
        var _ = Te();
        return _.useState(m);
      }
      function Et(m, _, Y) {
        var q = Te();
        return q.useReducer(m, _, Y);
      }
      function dt(m) {
        var _ = Te();
        return _.useRef(m);
      }
      function _n(m, _) {
        var Y = Te();
        return Y.useEffect(m, _);
      }
      function cn(m, _) {
        var Y = Te();
        return Y.useInsertionEffect(m, _);
      }
      function vn(m, _) {
        var Y = Te();
        return Y.useLayoutEffect(m, _);
      }
      function wr(m, _) {
        var Y = Te();
        return Y.useCallback(m, _);
      }
      function ei(m, _) {
        var Y = Te();
        return Y.useMemo(m, _);
      }
      function Vt(m, _, Y) {
        var q = Te();
        return q.useImperativeHandle(m, _, Y);
      }
      function yn(m, _) {
        {
          var Y = Te();
          return Y.useDebugValue(m, _);
        }
      }
      function ot() {
        var m = Te();
        return m.useTransition();
      }
      function mi(m) {
        var _ = Te();
        return _.useDeferredValue(m);
      }
      function Bi() {
        var m = Te();
        return m.useId();
      }
      function xc(m, _, Y) {
        var q = Te();
        return q.useSyncExternalStore(m, _, Y);
      }
      var Ii = 0, ml, Xr, rs, Mr, as, Rc, bc;
      function $i() {
      }
      $i.__reactDisabledLog = !0;
      function yl() {
        {
          if (Ii === 0) {
            ml = console.log, Xr = console.info, rs = console.warn, Mr = console.error, as = console.group, Rc = console.groupCollapsed, bc = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: $i,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          Ii++;
        }
      }
      function Jr() {
        {
          if (Ii--, Ii === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ie({}, m, {
                value: ml
              }),
              info: Ie({}, m, {
                value: Xr
              }),
              warn: Ie({}, m, {
                value: rs
              }),
              error: Ie({}, m, {
                value: Mr
              }),
              group: Ie({}, m, {
                value: as
              }),
              groupCollapsed: Ie({}, m, {
                value: Rc
              }),
              groupEnd: Ie({}, m, {
                value: bc
              })
            });
          }
          Ii < 0 && re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var yi = Rt.ReactCurrentDispatcher, gl;
      function Jo(m, _, Y) {
        {
          if (gl === void 0)
            try {
              throw Error();
            } catch (pe) {
              var q = pe.stack.trim().match(/\n( *(at )?)/);
              gl = q && q[1] || "";
            }
          return `
` + gl + m;
        }
      }
      var Yi = !1, ao;
      {
        var io = typeof WeakMap == "function" ? WeakMap : Map;
        ao = new io();
      }
      function Sl(m, _) {
        if (!m || Yi)
          return "";
        {
          var Y = ao.get(m);
          if (Y !== void 0)
            return Y;
        }
        var q;
        Yi = !0;
        var pe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Le;
        Le = yi.current, yi.current = null, yl();
        try {
          if (_) {
            var ke = function() {
              throw Error();
            };
            if (Object.defineProperty(ke.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ke, []);
              } catch (kn) {
                q = kn;
              }
              Reflect.construct(m, [], ke);
            } else {
              try {
                ke.call();
              } catch (kn) {
                q = kn;
              }
              m.call(ke.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kn) {
              q = kn;
            }
            m();
          }
        } catch (kn) {
          if (kn && q && typeof kn.stack == "string") {
            for (var Xe = kn.stack.split(`
`), pt = q.stack.split(`
`), It = Xe.length - 1, Zt = pt.length - 1; It >= 1 && Zt >= 0 && Xe[It] !== pt[Zt]; )
              Zt--;
            for (; It >= 1 && Zt >= 0; It--, Zt--)
              if (Xe[It] !== pt[Zt]) {
                if (It !== 1 || Zt !== 1)
                  do
                    if (It--, Zt--, Zt < 0 || Xe[It] !== pt[Zt]) {
                      var en = `
` + Xe[It].replace(" at new ", " at ");
                      return m.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", m.displayName)), typeof m == "function" && ao.set(m, en), en;
                    }
                  while (It >= 1 && Zt >= 0);
                break;
              }
          }
        } finally {
          Yi = !1, yi.current = Le, Jr(), Error.prepareStackTrace = pe;
        }
        var st = m ? m.displayName || m.name : "", an = st ? Jo(st) : "";
        return typeof m == "function" && ao.set(m, an), an;
      }
      function is(m, _, Y) {
        return Sl(m, !1);
      }
      function ls(m) {
        var _ = m.prototype;
        return !!(_ && _.isReactComponent);
      }
      function Ot(m, _, Y) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return Sl(m, ls(m));
        if (typeof m == "string")
          return Jo(m);
        switch (m) {
          case B:
            return Jo("Suspense");
          case he:
            return Jo("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case P:
              return is(m.render);
            case J:
              return Ot(m.type, _, Y);
            case ue: {
              var q = m, pe = q._payload, Le = q._init;
              try {
                return Ot(Le(pe), _, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var os = {}, Zo = Rt.ReactDebugCurrentFrame;
      function jt(m) {
        if (m) {
          var _ = m._owner, Y = Ot(m.type, m._source, _ ? _.type : null);
          Zo.setExtraStackFrame(Y);
        } else
          Zo.setExtraStackFrame(null);
      }
      function Tc(m, _, Y, q, pe) {
        {
          var Le = Function.call.bind(Zn);
          for (var ke in m)
            if (Le(m, ke)) {
              var Xe = void 0;
              try {
                if (typeof m[ke] != "function") {
                  var pt = Error((q || "React class") + ": " + Y + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Xe = m[ke](_, ke, q, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (It) {
                Xe = It;
              }
              Xe && !(Xe instanceof Error) && (jt(pe), re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", Y, ke, typeof Xe), jt(null)), Xe instanceof Error && !(Xe.message in os) && (os[Xe.message] = !0, jt(pe), re("Failed %s type: %s", Y, Xe.message), jt(null));
            }
        }
      }
      function gi(m) {
        if (m) {
          var _ = m._owner, Y = Ot(m.type, m._source, _ ? _.type : null);
          Dt(Y);
        } else
          Dt(null);
      }
      var et;
      et = !1;
      function lo() {
        if (Be.current) {
          var m = Wn(Be.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function nr(m) {
        if (m !== void 0) {
          var _ = m.fileName.replace(/^.*[\\\/]/, ""), Y = m.lineNumber;
          return `

Check your code at ` + _ + ":" + Y + ".";
        }
        return "";
      }
      function Zr(m) {
        return m != null ? nr(m.__source) : "";
      }
      var Ur = {};
      function Si(m) {
        var _ = lo();
        if (!_) {
          var Y = typeof m == "string" ? m : m.displayName || m.name;
          Y && (_ = `

Check the top-level render call using <` + Y + ">.");
        }
        return _;
      }
      function Rn(m, _) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var Y = Si(_);
          if (!Ur[Y]) {
            Ur[Y] = !0;
            var q = "";
            m && m._owner && m._owner !== Be.current && (q = " It was passed a child from " + Wn(m._owner.type) + "."), gi(m), re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, q), gi(null);
          }
        }
      }
      function Jt(m, _) {
        if (typeof m == "object") {
          if (zn(m))
            for (var Y = 0; Y < m.length; Y++) {
              var q = m[Y];
              dn(q) && Rn(q, _);
            }
          else if (dn(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var pe = me(m);
            if (typeof pe == "function" && pe !== m.entries)
              for (var Le = pe.call(m), ke; !(ke = Le.next()).done; )
                dn(ke.value) && Rn(ke.value, _);
          }
        }
      }
      function ti(m) {
        {
          var _ = m.type;
          if (_ == null || typeof _ == "string")
            return;
          var Y;
          if (typeof _ == "function")
            Y = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === P || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === J))
            Y = _.propTypes;
          else
            return;
          if (Y) {
            var q = Wn(_);
            Tc(Y, m.props, "prop", q, m);
          } else if (_.PropTypes !== void 0 && !et) {
            et = !0;
            var pe = Wn(_);
            re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ma(m) {
        {
          for (var _ = Object.keys(m.props), Y = 0; Y < _.length; Y++) {
            var q = _[Y];
            if (q !== "children" && q !== "key") {
              gi(m), re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), gi(null);
              break;
            }
          }
          m.ref !== null && (gi(m), re("Invalid attribute `ref` supplied to `React.Fragment`."), gi(null));
        }
      }
      function _r(m, _, Y) {
        var q = ae(m);
        if (!q) {
          var pe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = Zr(_);
          Le ? pe += Le : pe += lo();
          var ke;
          m === null ? ke = "null" : zn(m) ? ke = "array" : m !== void 0 && m.$$typeof === w ? (ke = "<" + (Wn(m.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof m, re("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, pe);
        }
        var Xe = ft.apply(this, arguments);
        if (Xe == null)
          return Xe;
        if (q)
          for (var pt = 2; pt < arguments.length; pt++)
            Jt(arguments[pt], m);
        return m === O ? Ma(Xe) : ti(Xe), Xe;
      }
      var zr = !1;
      function md(m) {
        var _ = _r.bind(null, m);
        return _.type = m, zr || (zr = !0, vt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return vt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), _;
      }
      function eu(m, _, Y) {
        for (var q = fn.apply(this, arguments), pe = 2; pe < arguments.length; pe++)
          Jt(arguments[pe], q.type);
        return ti(q), q;
      }
      function oo(m, _) {
        var Y = Re.transition;
        Re.transition = {};
        var q = Re.transition;
        Re.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (Re.transition = Y, Y === null && q._updatedFibers) {
            var pe = q._updatedFibers.size;
            pe > 10 && vt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var tu = !1, nu = null;
      function uo(m) {
        if (nu === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), Y = v && v[_];
            nu = Y.call(v, "timers").setImmediate;
          } catch {
            nu = function(pe) {
              tu === !1 && (tu = !0, typeof MessageChannel == "undefined" && re("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Le = new MessageChannel();
              Le.port1.onmessage = pe, Le.port2.postMessage(void 0);
            };
          }
        return nu(m);
      }
      var Ua = 0, za = !1;
      function El(m) {
        {
          var _ = Ua;
          Ua++, ge.current === null && (ge.current = []);
          var Y = ge.isBatchingLegacy, q;
          try {
            if (ge.isBatchingLegacy = !0, q = m(), !Y && ge.didScheduleLegacyUpdate) {
              var pe = ge.current;
              pe !== null && (ge.didScheduleLegacyUpdate = !1, Qi(pe));
            }
          } catch (st) {
            throw Wi(_), st;
          } finally {
            ge.isBatchingLegacy = Y;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Le = q, ke = !1, Xe = {
              then: function(st, an) {
                ke = !0, Le.then(function(kn) {
                  Wi(_), Ua === 0 ? ru(kn, st, an) : st(kn);
                }, function(kn) {
                  Wi(_), an(kn);
                });
              }
            };
            return !za && typeof Promise != "undefined" && Promise.resolve().then(function() {
            }).then(function() {
              ke || (za = !0, re("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Xe;
          } else {
            var pt = q;
            if (Wi(_), Ua === 0) {
              var It = ge.current;
              It !== null && (Qi(It), ge.current = null);
              var Zt = {
                then: function(st, an) {
                  ge.current === null ? (ge.current = [], ru(pt, st, an)) : st(pt);
                }
              };
              return Zt;
            } else {
              var en = {
                then: function(st, an) {
                  st(pt);
                }
              };
              return en;
            }
          }
        }
      }
      function Wi(m) {
        m !== Ua - 1 && re("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = m;
      }
      function ru(m, _, Y) {
        {
          var q = ge.current;
          if (q !== null)
            try {
              Qi(q), uo(function() {
                q.length === 0 ? (ge.current = null, _(m)) : ru(m, _, Y);
              });
            } catch (pe) {
              Y(pe);
            }
          else
            _(m);
        }
      }
      var Cl = !1;
      function Qi(m) {
        if (!Cl) {
          Cl = !0;
          var _ = 0;
          try {
            for (; _ < m.length; _++) {
              var Y = m[_];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            m.length = 0;
          } catch (q) {
            throw m = m.slice(_ + 1), q;
          } finally {
            Cl = !1;
          }
        }
      }
      var au = _r, us = eu, Aa = md, iu = {
        map: Pi,
        forEach: no,
        count: to,
        toArray: Vi,
        only: ro
      };
      E.Children = iu, E.Component = nt, E.Fragment = O, E.Profiler = F, E.PureComponent = Wt, E.StrictMode = y, E.Suspense = B, E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rt, E.act = El, E.cloneElement = us, E.createContext = pi, E.createElement = au, E.createFactory = Aa, E.createRef = Jn, E.forwardRef = Hi, E.isValidElement = dn, E.lazy = hi, E.memo = xe, E.startTransition = oo, E.unstable_act = El, E.useCallback = wr, E.useContext = gt, E.useDebugValue = yn, E.useDeferredValue = mi, E.useEffect = _n, E.useId = Bi, E.useImperativeHandle = Vt, E.useInsertionEffect = cn, E.useLayoutEffect = vn, E.useMemo = ei, E.useReducer = Et, E.useRef = dt, E.useState = rt, E.useSyncExternalStore = xc, E.useTransition = ot, E.version = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ev, Ev.exports)), Ev.exports;
}
var gD = {};
gD.NODE_ENV === "production" ? ZE.exports = mD() : ZE.exports = yD();
var ee = ZE.exports;
const i0 = /* @__PURE__ */ hD(ee), SD = /* @__PURE__ */ vD({
  __proto__: null,
  default: i0
}, [ee]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function ED() {
  if (JR) return yv;
  JR = 1;
  var v = ee, E = Symbol.for("react.element"), S = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, w = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(y, F, z) {
    var $, P = {}, B = null, he = null;
    z !== void 0 && (B = "" + z), F.key !== void 0 && (B = "" + F.key), F.ref !== void 0 && (he = F.ref);
    for ($ in F) b.call(F, $) && !N.hasOwnProperty($) && (P[$] = F[$]);
    if (y && y.defaultProps) for ($ in F = y.defaultProps, F) P[$] === void 0 && (P[$] = F[$]);
    return { $$typeof: E, type: y, key: B, ref: he, props: P, _owner: w.current };
  }
  return yv.Fragment = S, yv.jsx = O, yv.jsxs = O, yv;
}
var gv = {}, ZR;
function CD() {
  if (ZR) return gv;
  ZR = 1;
  var v = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return v.NODE_ENV !== "production" && function() {
    var E = ee, S = Symbol.for("react.element"), b = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), F = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), ue = Symbol.iterator, le = "@@iterator";
    function Pe(k) {
      if (k === null || typeof k != "object")
        return null;
      var ae = ue && k[ue] || k[le];
      return typeof ae == "function" ? ae : null;
    }
    var fe = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function me(k) {
      {
        for (var ae = arguments.length, xe = new Array(ae > 1 ? ae - 1 : 0), Te = 1; Te < ae; Te++)
          xe[Te - 1] = arguments[Te];
        ve("error", k, xe);
      }
    }
    function ve(k, ae, xe) {
      {
        var Te = fe.ReactDebugCurrentFrame, gt = Te.getStackAddendum();
        gt !== "" && (ae += "%s", xe = xe.concat([gt]));
        var rt = xe.map(function(Et) {
          return String(Et);
        });
        rt.unshift("Warning: " + ae), Function.prototype.apply.call(console[k], console, rt);
      }
    }
    var Re = !1, ge = !1, Be = !1, We = !1, Cn = !1, Dt;
    Dt = Symbol.for("react.module.reference");
    function un(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === w || k === O || Cn || k === N || k === $ || k === P || We || k === J || Re || ge || Be || typeof k == "object" && k !== null && (k.$$typeof === he || k.$$typeof === B || k.$$typeof === y || k.$$typeof === F || k.$$typeof === z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === Dt || k.getModuleId !== void 0));
    }
    function Kt(k, ae, xe) {
      var Te = k.displayName;
      if (Te)
        return Te;
      var gt = ae.displayName || ae.name || "";
      return gt !== "" ? xe + "(" + gt + ")" : xe;
    }
    function Tt(k) {
      return k.displayName || "Context";
    }
    function qe(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case w:
          return "Fragment";
        case b:
          return "Portal";
        case O:
          return "Profiler";
        case N:
          return "StrictMode";
        case $:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case F:
            var ae = k;
            return Tt(ae) + ".Consumer";
          case y:
            var xe = k;
            return Tt(xe._context) + ".Provider";
          case z:
            return Kt(k, k.render, "ForwardRef");
          case B:
            var Te = k.displayName || null;
            return Te !== null ? Te : qe(k.type) || "Memo";
          case he: {
            var gt = k, rt = gt._payload, Et = gt._init;
            try {
              return qe(Et(rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Bt = Object.assign, Rt = 0, vt, re, Me, Ce, U, ne, Ie;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function nt() {
      {
        if (Rt === 0) {
          vt = console.log, re = console.info, Me = console.warn, Ce = console.error, U = console.group, ne = console.groupCollapsed, Ie = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        Rt++;
      }
    }
    function ht() {
      {
        if (Rt--, Rt === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Bt({}, k, {
              value: vt
            }),
            info: Bt({}, k, {
              value: re
            }),
            warn: Bt({}, k, {
              value: Me
            }),
            error: Bt({}, k, {
              value: Ce
            }),
            group: Bt({}, k, {
              value: U
            }),
            groupCollapsed: Bt({}, k, {
              value: ne
            }),
            groupEnd: Bt({}, k, {
              value: Ie
            })
          });
        }
        Rt < 0 && me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Nt = fe.ReactCurrentDispatcher, it;
    function wt(k, ae, xe) {
      {
        if (it === void 0)
          try {
            throw Error();
          } catch (gt) {
            var Te = gt.stack.trim().match(/\n( *(at )?)/);
            it = Te && Te[1] || "";
          }
        return `
` + it + k;
      }
    }
    var Wt = !1, Un;
    {
      var Jn = typeof WeakMap == "function" ? WeakMap : Map;
      Un = new Jn();
    }
    function ur(k, ae) {
      if (!k || Wt)
        return "";
      {
        var xe = Un.get(k);
        if (xe !== void 0)
          return xe;
      }
      var Te;
      Wt = !0;
      var gt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var rt;
      rt = Nt.current, Nt.current = null, nt();
      try {
        if (ae) {
          var Et = function() {
            throw Error();
          };
          if (Object.defineProperty(Et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Et, []);
            } catch (yn) {
              Te = yn;
            }
            Reflect.construct(k, [], Et);
          } else {
            try {
              Et.call();
            } catch (yn) {
              Te = yn;
            }
            k.call(Et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yn) {
            Te = yn;
          }
          k();
        }
      } catch (yn) {
        if (yn && Te && typeof yn.stack == "string") {
          for (var dt = yn.stack.split(`
`), _n = Te.stack.split(`
`), cn = dt.length - 1, vn = _n.length - 1; cn >= 1 && vn >= 0 && dt[cn] !== _n[vn]; )
            vn--;
          for (; cn >= 1 && vn >= 0; cn--, vn--)
            if (dt[cn] !== _n[vn]) {
              if (cn !== 1 || vn !== 1)
                do
                  if (cn--, vn--, vn < 0 || dt[cn] !== _n[vn]) {
                    var wr = `
` + dt[cn].replace(" at new ", " at ");
                    return k.displayName && wr.includes("<anonymous>") && (wr = wr.replace("<anonymous>", k.displayName)), typeof k == "function" && Un.set(k, wr), wr;
                  }
                while (cn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        Wt = !1, Nt.current = rt, ht(), Error.prepareStackTrace = gt;
      }
      var ei = k ? k.displayName || k.name : "", Vt = ei ? wt(ei) : "";
      return typeof k == "function" && Un.set(k, Vt), Vt;
    }
    function zn(k, ae, xe) {
      return ur(k, !1);
    }
    function br(k) {
      var ae = k.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function Yn(k, ae, xe) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return ur(k, br(k));
      if (typeof k == "string")
        return wt(k);
      switch (k) {
        case $:
          return wt("Suspense");
        case P:
          return wt("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case z:
            return zn(k.render);
          case B:
            return Yn(k.type, ae, xe);
          case he: {
            var Te = k, gt = Te._payload, rt = Te._init;
            try {
              return Yn(rt(gt), ae, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var An = Object.prototype.hasOwnProperty, ha = {}, Ja = fe.ReactDebugCurrentFrame;
    function Lr(k) {
      if (k) {
        var ae = k._owner, xe = Yn(k.type, k._source, ae ? ae.type : null);
        Ja.setExtraStackFrame(xe);
      } else
        Ja.setExtraStackFrame(null);
    }
    function Wn(k, ae, xe, Te, gt) {
      {
        var rt = Function.call.bind(An);
        for (var Et in k)
          if (rt(k, Et)) {
            var dt = void 0;
            try {
              if (typeof k[Et] != "function") {
                var _n = Error((Te || "React class") + ": " + xe + " type `" + Et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[Et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _n.name = "Invariant Violation", _n;
              }
              dt = k[Et](ae, Et, Te, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              dt = cn;
            }
            dt && !(dt instanceof Error) && (Lr(gt), me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", xe, Et, typeof dt), Lr(null)), dt instanceof Error && !(dt.message in ha) && (ha[dt.message] = !0, Lr(gt), me("Failed %s type: %s", xe, dt.message), Lr(null));
          }
      }
    }
    var Zn = Array.isArray;
    function er(k) {
      return Zn(k);
    }
    function Tr(k) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, xe = ae && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return xe;
      }
    }
    function Za(k) {
      try {
        return Fn(k), !1;
      } catch {
        return !0;
      }
    }
    function Fn(k) {
      return "" + k;
    }
    function sr(k) {
      if (Za(k))
        return me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(k)), Fn(k);
    }
    var qr = fe.ReactCurrentOwner, Fi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ma, ye;
    function Ye(k) {
      if (An.call(k, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function ft(k) {
      if (An.call(k, "key")) {
        var ae = Object.getOwnPropertyDescriptor(k, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function Ft(k, ae) {
      typeof k.ref == "string" && qr.current;
    }
    function fn(k, ae) {
      {
        var xe = function() {
          ma || (ma = !0, me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        xe.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function dn(k, ae) {
      {
        var xe = function() {
          ye || (ye = !0, me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        xe.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var pn = function(k, ae, xe, Te, gt, rt, Et) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: S,
        // Built-in properties that belong on the element
        type: k,
        key: ae,
        ref: xe,
        props: Et,
        // Record the component responsible for creating this element.
        _owner: rt
      };
      return dt._store = {}, Object.defineProperty(dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: gt
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function tr(k, ae, xe, Te, gt) {
      {
        var rt, Et = {}, dt = null, _n = null;
        xe !== void 0 && (sr(xe), dt = "" + xe), ft(ae) && (sr(ae.key), dt = "" + ae.key), Ye(ae) && (_n = ae.ref, Ft(ae, gt));
        for (rt in ae)
          An.call(ae, rt) && !Fi.hasOwnProperty(rt) && (Et[rt] = ae[rt]);
        if (k && k.defaultProps) {
          var cn = k.defaultProps;
          for (rt in cn)
            Et[rt] === void 0 && (Et[rt] = cn[rt]);
        }
        if (dt || _n) {
          var vn = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          dt && fn(Et, vn), _n && dn(Et, vn);
        }
        return pn(k, dt, _n, gt, Te, qr.current, Et);
      }
    }
    var sn = fe.ReactCurrentOwner, Xt = fe.ReactDebugCurrentFrame;
    function Pt(k) {
      if (k) {
        var ae = k._owner, xe = Yn(k.type, k._source, ae ? ae.type : null);
        Xt.setExtraStackFrame(xe);
      } else
        Xt.setExtraStackFrame(null);
    }
    var ya;
    ya = !1;
    function ja(k) {
      return typeof k == "object" && k !== null && k.$$typeof === S;
    }
    function La() {
      {
        if (sn.current) {
          var k = qe(sn.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Pi(k) {
      return "";
    }
    var to = {};
    function no(k) {
      {
        var ae = La();
        if (!ae) {
          var xe = typeof k == "string" ? k : k.displayName || k.name;
          xe && (ae = `

Check the top-level render call using <` + xe + ">.");
        }
        return ae;
      }
    }
    function Vi(k, ae) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var xe = no(ae);
        if (to[xe])
          return;
        to[xe] = !0;
        var Te = "";
        k && k._owner && k._owner !== sn.current && (Te = " It was passed a child from " + qe(k._owner.type) + "."), Pt(k), me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Te), Pt(null);
      }
    }
    function ro(k, ae) {
      {
        if (typeof k != "object")
          return;
        if (er(k))
          for (var xe = 0; xe < k.length; xe++) {
            var Te = k[xe];
            ja(Te) && Vi(Te, ae);
          }
        else if (ja(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var gt = Pe(k);
          if (typeof gt == "function" && gt !== k.entries)
            for (var rt = gt.call(k), Et; !(Et = rt.next()).done; )
              ja(Et.value) && Vi(Et.value, ae);
        }
      }
    }
    function pi(k) {
      {
        var ae = k.type;
        if (ae == null || typeof ae == "string")
          return;
        var xe;
        if (typeof ae == "function")
          xe = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === B))
          xe = ae.propTypes;
        else
          return;
        if (xe) {
          var Te = qe(ae);
          Wn(xe, k.props, "prop", Te, k);
        } else if (ae.PropTypes !== void 0 && !ya) {
          ya = !0;
          var gt = qe(ae);
          me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", gt || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ga(k) {
      {
        for (var ae = Object.keys(k.props), xe = 0; xe < ae.length; xe++) {
          var Te = ae[xe];
          if (Te !== "children" && Te !== "key") {
            Pt(k), me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), Pt(null);
            break;
          }
        }
        k.ref !== null && (Pt(k), me("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var cr = {};
    function Sa(k, ae, xe, Te, gt, rt) {
      {
        var Et = un(k);
        if (!Et) {
          var dt = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _n = Pi();
          _n ? dt += _n : dt += La();
          var cn;
          k === null ? cn = "null" : er(k) ? cn = "array" : k !== void 0 && k.$$typeof === S ? (cn = "<" + (qe(k.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof k, me("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, dt);
        }
        var vn = tr(k, ae, xe, gt, rt);
        if (vn == null)
          return vn;
        if (Et) {
          var wr = ae.children;
          if (wr !== void 0)
            if (Te)
              if (er(wr)) {
                for (var ei = 0; ei < wr.length; ei++)
                  ro(wr[ei], k);
                Object.freeze && Object.freeze(wr);
              } else
                me("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ro(wr, k);
        }
        if (An.call(ae, "key")) {
          var Vt = qe(k), yn = Object.keys(ae).filter(function(Bi) {
            return Bi !== "key";
          }), ot = yn.length > 0 ? "{key: someKey, " + yn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cr[Vt + ot]) {
            var mi = yn.length > 0 ? "{" + yn.join(": ..., ") + ": ...}" : "{}";
            me(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ot, Vt, mi, Vt), cr[Vt + ot] = !0;
          }
        }
        return k === w ? ga(vn) : pi(vn), vn;
      }
    }
    function Kr(k, ae, xe) {
      return Sa(k, ae, xe, !0);
    }
    function vi(k, ae, xe) {
      return Sa(k, ae, xe, !1);
    }
    var hi = vi, Hi = Kr;
    gv.Fragment = w, gv.jsx = hi, gv.jsxs = Hi;
  }(), gv;
}
var xD = {};
xD.NODE_ENV === "production" ? JE.exports = ED() : JE.exports = CD();
var C = JE.exports, Cv = {}, e0 = { exports: {} }, Ka = {}, Cy = { exports: {} }, GE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eb;
function RD() {
  return eb || (eb = 1, function(v) {
    function E(re, Me) {
      var Ce = re.length;
      re.push(Me);
      e: for (; 0 < Ce; ) {
        var U = Ce - 1 >>> 1, ne = re[U];
        if (0 < w(ne, Me)) re[U] = Me, re[Ce] = ne, Ce = U;
        else break e;
      }
    }
    function S(re) {
      return re.length === 0 ? null : re[0];
    }
    function b(re) {
      if (re.length === 0) return null;
      var Me = re[0], Ce = re.pop();
      if (Ce !== Me) {
        re[0] = Ce;
        e: for (var U = 0, ne = re.length, Ie = ne >>> 1; U < Ie; ) {
          var Ze = 2 * (U + 1) - 1, nt = re[Ze], ht = Ze + 1, Nt = re[ht];
          if (0 > w(nt, Ce)) ht < ne && 0 > w(Nt, nt) ? (re[U] = Nt, re[ht] = Ce, U = ht) : (re[U] = nt, re[Ze] = Ce, U = Ze);
          else if (ht < ne && 0 > w(Nt, Ce)) re[U] = Nt, re[ht] = Ce, U = ht;
          else break e;
        }
      }
      return Me;
    }
    function w(re, Me) {
      var Ce = re.sortIndex - Me.sortIndex;
      return Ce !== 0 ? Ce : re.id - Me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      v.unstable_now = function() {
        return N.now();
      };
    } else {
      var O = Date, y = O.now();
      v.unstable_now = function() {
        return O.now() - y;
      };
    }
    var F = [], z = [], $ = 1, P = null, B = 3, he = !1, J = !1, ue = !1, le = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function me(re) {
      for (var Me = S(z); Me !== null; ) {
        if (Me.callback === null) b(z);
        else if (Me.startTime <= re) b(z), Me.sortIndex = Me.expirationTime, E(F, Me);
        else break;
        Me = S(z);
      }
    }
    function ve(re) {
      if (ue = !1, me(re), !J) if (S(F) !== null) J = !0, Rt(Re);
      else {
        var Me = S(z);
        Me !== null && vt(ve, Me.startTime - re);
      }
    }
    function Re(re, Me) {
      J = !1, ue && (ue = !1, Pe(We), We = -1), he = !0;
      var Ce = B;
      try {
        for (me(Me), P = S(F); P !== null && (!(P.expirationTime > Me) || re && !un()); ) {
          var U = P.callback;
          if (typeof U == "function") {
            P.callback = null, B = P.priorityLevel;
            var ne = U(P.expirationTime <= Me);
            Me = v.unstable_now(), typeof ne == "function" ? P.callback = ne : P === S(F) && b(F), me(Me);
          } else b(F);
          P = S(F);
        }
        if (P !== null) var Ie = !0;
        else {
          var Ze = S(z);
          Ze !== null && vt(ve, Ze.startTime - Me), Ie = !1;
        }
        return Ie;
      } finally {
        P = null, B = Ce, he = !1;
      }
    }
    var ge = !1, Be = null, We = -1, Cn = 5, Dt = -1;
    function un() {
      return !(v.unstable_now() - Dt < Cn);
    }
    function Kt() {
      if (Be !== null) {
        var re = v.unstable_now();
        Dt = re;
        var Me = !0;
        try {
          Me = Be(!0, re);
        } finally {
          Me ? Tt() : (ge = !1, Be = null);
        }
      } else ge = !1;
    }
    var Tt;
    if (typeof fe == "function") Tt = function() {
      fe(Kt);
    };
    else if (typeof MessageChannel != "undefined") {
      var qe = new MessageChannel(), Bt = qe.port2;
      qe.port1.onmessage = Kt, Tt = function() {
        Bt.postMessage(null);
      };
    } else Tt = function() {
      le(Kt, 0);
    };
    function Rt(re) {
      Be = re, ge || (ge = !0, Tt());
    }
    function vt(re, Me) {
      We = le(function() {
        re(v.unstable_now());
      }, Me);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, v.unstable_continueExecution = function() {
      J || he || (J = !0, Rt(Re));
    }, v.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Cn = 0 < re ? Math.floor(1e3 / re) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, v.unstable_getFirstCallbackNode = function() {
      return S(F);
    }, v.unstable_next = function(re) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var Me = 3;
          break;
        default:
          Me = B;
      }
      var Ce = B;
      B = Me;
      try {
        return re();
      } finally {
        B = Ce;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(re, Me) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var Ce = B;
      B = re;
      try {
        return Me();
      } finally {
        B = Ce;
      }
    }, v.unstable_scheduleCallback = function(re, Me, Ce) {
      var U = v.unstable_now();
      switch (typeof Ce == "object" && Ce !== null ? (Ce = Ce.delay, Ce = typeof Ce == "number" && 0 < Ce ? U + Ce : U) : Ce = U, re) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = Ce + ne, re = { id: $++, callback: Me, priorityLevel: re, startTime: Ce, expirationTime: ne, sortIndex: -1 }, Ce > U ? (re.sortIndex = Ce, E(z, re), S(F) === null && re === S(z) && (ue ? (Pe(We), We = -1) : ue = !0, vt(ve, Ce - U))) : (re.sortIndex = ne, E(F, re), J || he || (J = !0, Rt(Re))), re;
    }, v.unstable_shouldYield = un, v.unstable_wrapCallback = function(re) {
      var Me = B;
      return function() {
        var Ce = B;
        B = Me;
        try {
          return re.apply(this, arguments);
        } finally {
          B = Ce;
        }
      };
    };
  }(GE)), GE;
}
var qE = {}, tb;
function bD() {
  return tb || (tb = 1, function(v) {
    var E = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    E.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = !1, b = 5;
      function w(ye, Ye) {
        var ft = ye.length;
        ye.push(Ye), y(ye, Ye, ft);
      }
      function N(ye) {
        return ye.length === 0 ? null : ye[0];
      }
      function O(ye) {
        if (ye.length === 0)
          return null;
        var Ye = ye[0], ft = ye.pop();
        return ft !== Ye && (ye[0] = ft, F(ye, ft, 0)), Ye;
      }
      function y(ye, Ye, ft) {
        for (var Ft = ft; Ft > 0; ) {
          var fn = Ft - 1 >>> 1, dn = ye[fn];
          if (z(dn, Ye) > 0)
            ye[fn] = Ye, ye[Ft] = dn, Ft = fn;
          else
            return;
        }
      }
      function F(ye, Ye, ft) {
        for (var Ft = ft, fn = ye.length, dn = fn >>> 1; Ft < dn; ) {
          var pn = (Ft + 1) * 2 - 1, tr = ye[pn], sn = pn + 1, Xt = ye[sn];
          if (z(tr, Ye) < 0)
            sn < fn && z(Xt, tr) < 0 ? (ye[Ft] = Xt, ye[sn] = Ye, Ft = sn) : (ye[Ft] = tr, ye[pn] = Ye, Ft = pn);
          else if (sn < fn && z(Xt, Ye) < 0)
            ye[Ft] = Xt, ye[sn] = Ye, Ft = sn;
          else
            return;
        }
      }
      function z(ye, Ye) {
        var ft = ye.sortIndex - Ye.sortIndex;
        return ft !== 0 ? ft : ye.id - Ye.id;
      }
      var $ = 1, P = 2, B = 3, he = 4, J = 5;
      function ue(ye, Ye) {
      }
      var le = typeof performance == "object" && typeof performance.now == "function";
      if (le) {
        var Pe = performance;
        v.unstable_now = function() {
          return Pe.now();
        };
      } else {
        var fe = Date, me = fe.now();
        v.unstable_now = function() {
          return fe.now() - me;
        };
      }
      var ve = 1073741823, Re = -1, ge = 250, Be = 5e3, We = 1e4, Cn = ve, Dt = [], un = [], Kt = 1, Tt = null, qe = B, Bt = !1, Rt = !1, vt = !1, re = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, Ce = typeof setImmediate != "undefined" ? setImmediate : null;
      typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function U(ye) {
        for (var Ye = N(un); Ye !== null; ) {
          if (Ye.callback === null)
            O(un);
          else if (Ye.startTime <= ye)
            O(un), Ye.sortIndex = Ye.expirationTime, w(Dt, Ye);
          else
            return;
          Ye = N(un);
        }
      }
      function ne(ye) {
        if (vt = !1, U(ye), !Rt)
          if (N(Dt) !== null)
            Rt = !0, Fn(Ie);
          else {
            var Ye = N(un);
            Ye !== null && sr(ne, Ye.startTime - ye);
          }
      }
      function Ie(ye, Ye) {
        Rt = !1, vt && (vt = !1, qr()), Bt = !0;
        var ft = qe;
        try {
          var Ft;
          if (!S) return Ze(ye, Ye);
        } finally {
          Tt = null, qe = ft, Bt = !1;
        }
      }
      function Ze(ye, Ye) {
        var ft = Ye;
        for (U(ft), Tt = N(Dt); Tt !== null && !(Tt.expirationTime > ft && (!ye || Ja())); ) {
          var Ft = Tt.callback;
          if (typeof Ft == "function") {
            Tt.callback = null, qe = Tt.priorityLevel;
            var fn = Tt.expirationTime <= ft, dn = Ft(fn);
            ft = v.unstable_now(), typeof dn == "function" ? Tt.callback = dn : Tt === N(Dt) && O(Dt), U(ft);
          } else
            O(Dt);
          Tt = N(Dt);
        }
        if (Tt !== null)
          return !0;
        var pn = N(un);
        return pn !== null && sr(ne, pn.startTime - ft), !1;
      }
      function nt(ye, Ye) {
        switch (ye) {
          case $:
          case P:
          case B:
          case he:
          case J:
            break;
          default:
            ye = B;
        }
        var ft = qe;
        qe = ye;
        try {
          return Ye();
        } finally {
          qe = ft;
        }
      }
      function ht(ye) {
        var Ye;
        switch (qe) {
          case $:
          case P:
          case B:
            Ye = B;
            break;
          default:
            Ye = qe;
            break;
        }
        var ft = qe;
        qe = Ye;
        try {
          return ye();
        } finally {
          qe = ft;
        }
      }
      function Nt(ye) {
        var Ye = qe;
        return function() {
          var ft = qe;
          qe = Ye;
          try {
            return ye.apply(this, arguments);
          } finally {
            qe = ft;
          }
        };
      }
      function it(ye, Ye, ft) {
        var Ft = v.unstable_now(), fn;
        if (typeof ft == "object" && ft !== null) {
          var dn = ft.delay;
          typeof dn == "number" && dn > 0 ? fn = Ft + dn : fn = Ft;
        } else
          fn = Ft;
        var pn;
        switch (ye) {
          case $:
            pn = Re;
            break;
          case P:
            pn = ge;
            break;
          case J:
            pn = Cn;
            break;
          case he:
            pn = We;
            break;
          case B:
          default:
            pn = Be;
            break;
        }
        var tr = fn + pn, sn = {
          id: Kt++,
          callback: Ye,
          priorityLevel: ye,
          startTime: fn,
          expirationTime: tr,
          sortIndex: -1
        };
        return fn > Ft ? (sn.sortIndex = fn, w(un, sn), N(Dt) === null && sn === N(un) && (vt ? qr() : vt = !0, sr(ne, fn - Ft))) : (sn.sortIndex = tr, w(Dt, sn), !Rt && !Bt && (Rt = !0, Fn(Ie))), sn;
      }
      function wt() {
      }
      function Wt() {
        !Rt && !Bt && (Rt = !0, Fn(Ie));
      }
      function Un() {
        return N(Dt);
      }
      function Jn(ye) {
        ye.callback = null;
      }
      function ur() {
        return qe;
      }
      var zn = !1, br = null, Yn = -1, An = b, ha = -1;
      function Ja() {
        var ye = v.unstable_now() - ha;
        return !(ye < An);
      }
      function Lr() {
      }
      function Wn(ye) {
        if (ye < 0 || ye > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ye > 0 ? An = Math.floor(1e3 / ye) : An = b;
      }
      var Zn = function() {
        if (br !== null) {
          var ye = v.unstable_now();
          ha = ye;
          var Ye = !0, ft = !0;
          try {
            ft = br(Ye, ye);
          } finally {
            ft ? er() : (zn = !1, br = null);
          }
        } else
          zn = !1;
      }, er;
      if (typeof Ce == "function")
        er = function() {
          Ce(Zn);
        };
      else if (typeof MessageChannel != "undefined") {
        var Tr = new MessageChannel(), Za = Tr.port2;
        Tr.port1.onmessage = Zn, er = function() {
          Za.postMessage(null);
        };
      } else
        er = function() {
          re(Zn, 0);
        };
      function Fn(ye) {
        br = ye, zn || (zn = !0, er());
      }
      function sr(ye, Ye) {
        Yn = re(function() {
          ye(v.unstable_now());
        }, Ye);
      }
      function qr() {
        Me(Yn), Yn = -1;
      }
      var Fi = Lr, ma = null;
      v.unstable_IdlePriority = J, v.unstable_ImmediatePriority = $, v.unstable_LowPriority = he, v.unstable_NormalPriority = B, v.unstable_Profiling = ma, v.unstable_UserBlockingPriority = P, v.unstable_cancelCallback = Jn, v.unstable_continueExecution = Wt, v.unstable_forceFrameRate = Wn, v.unstable_getCurrentPriorityLevel = ur, v.unstable_getFirstCallbackNode = Un, v.unstable_next = ht, v.unstable_pauseExecution = wt, v.unstable_requestPaint = Fi, v.unstable_runWithPriority = nt, v.unstable_scheduleCallback = it, v.unstable_shouldYield = Ja, v.unstable_wrapCallback = Nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(qE)), qE;
}
var nb;
function mb() {
  if (nb) return Cy.exports;
  nb = 1;
  var v = {};
  return v.NODE_ENV === "production" ? Cy.exports = RD() : Cy.exports = bD(), Cy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rb;
function TD() {
  if (rb) return Ka;
  rb = 1;
  var v = ee, E = mb();
  function S(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var b = /* @__PURE__ */ new Set(), w = {};
  function N(n, r) {
    O(n, r), O(n + "Capture", r);
  }
  function O(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++) b.add(r[n]);
  }
  var y = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), F = Object.prototype.hasOwnProperty, z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, P = {};
  function B(n) {
    return F.call(P, n) ? !0 : F.call($, n) ? !1 : z.test(n) ? P[n] = !0 : ($[n] = !0, !1);
  }
  function he(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function J(n, r, l, u) {
    if (r === null || typeof r == "undefined" || he(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ue(n, r, l, u, c, d, g) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = g;
  }
  var le = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    le[n] = new ue(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    le[r] = new ue(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    le[n] = new ue(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    le[n] = new ue(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    le[n] = new ue(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    le[n] = new ue(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    le[n] = new ue(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    le[n] = new ue(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    le[n] = new ue(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Pe = /[\-:]([a-z])/g;
  function fe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Pe,
      fe
    );
    le[r] = new ue(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Pe, fe);
    le[r] = new ue(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Pe, fe);
    le[r] = new ue(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    le[n] = new ue(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), le.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    le[n] = new ue(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function me(n, r, l, u) {
    var c = le.hasOwnProperty(r) ? le[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (J(r, l, c, u) && (l = null), u || c === null ? B(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var ve = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), ge = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), Cn = Symbol.for("react.profiler"), Dt = Symbol.for("react.provider"), un = Symbol.for("react.context"), Kt = Symbol.for("react.forward_ref"), Tt = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), Bt = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), vt = Symbol.for("react.offscreen"), re = Symbol.iterator;
  function Me(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ce = Object.assign, U;
  function ne(n) {
    if (U === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      U = r && r[1] || "";
    }
    return `
` + U + n;
  }
  var Ie = !1;
  function Ze(n, r) {
    if (!n || Ie) return "";
    Ie = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (Q) {
          var u = Q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Q) {
          u = Q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Q) {
          u = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && u && typeof Q.stack == "string") {
        for (var c = Q.stack.split(`
`), d = u.stack.split(`
`), g = c.length - 1, T = d.length - 1; 1 <= g && 0 <= T && c[g] !== d[T]; ) T--;
        for (; 1 <= g && 0 <= T; g--, T--) if (c[g] !== d[T]) {
          if (g !== 1 || T !== 1)
            do
              if (g--, T--, 0 > T || c[g] !== d[T]) {
                var D = `
` + c[g].replace(" at new ", " at ");
                return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
              }
            while (1 <= g && 0 <= T);
          break;
        }
      }
    } finally {
      Ie = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ne(n) : "";
  }
  function nt(n) {
    switch (n.tag) {
      case 5:
        return ne(n.type);
      case 16:
        return ne("Lazy");
      case 13:
        return ne("Suspense");
      case 19:
        return ne("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ze(n.type, !1), n;
      case 11:
        return n = Ze(n.type.render, !1), n;
      case 1:
        return n = Ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Be:
        return "Fragment";
      case ge:
        return "Portal";
      case Cn:
        return "Profiler";
      case We:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case Dt:
        return (n._context.displayName || "Context") + ".Provider";
      case Kt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Bt:
        return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
      case Rt:
        r = n._payload, n = n._init;
        try {
          return ht(n(r));
        } catch {
        }
    }
    return null;
  }
  function Nt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ht(r);
      case 8:
        return r === We ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function it(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function wt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wt(n) {
    var r = wt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l != "undefined" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        u = "" + g, d.call(this, g);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(g) {
        u = "" + g;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Un(n) {
    n._valueTracker || (n._valueTracker = Wt(n));
  }
  function Jn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = wt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ur(n) {
    if (n = n || (typeof document != "undefined" ? document : void 0), typeof n == "undefined") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function zn(n, r) {
    var l = r.checked;
    return Ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function br(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = it(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && me(n, "checked", r, !1);
  }
  function An(n, r) {
    Yn(n, r);
    var l = it(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ja(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ja(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ha(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ja(n, r, l) {
    (r !== "number" || ur(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Lr = Array.isArray;
  function Wn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + it(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Zn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(S(91));
    return Ce({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function er(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(S(92));
        if (Lr(l)) {
          if (1 < l.length) throw Error(S(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: it(l) };
  }
  function Tr(n, r) {
    var l = it(r.value), u = it(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function Za(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Fn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Fn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var qr, Fi = function(n) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = qr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ma(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ye = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ye = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ye).forEach(function(n) {
    Ye.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ye[r] = ye[n];
    });
  });
  function ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ye.hasOwnProperty(n) && ye[n] ? ("" + r).trim() : r + "px";
  }
  function Ft(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = ft(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var fn = Ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function dn(n, r) {
    if (r) {
      if (fn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(S(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(S(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(S(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(S(62));
    }
  }
  function pn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var tr = null;
  function sn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xt = null, Pt = null, ya = null;
  function ja(n) {
    if (n = bs(n)) {
      if (typeof Xt != "function") throw Error(S(280));
      var r = n.stateNode;
      r && (r = Ji(r), Xt(n.stateNode, n.type, r));
    }
  }
  function La(n) {
    Pt ? ya ? ya.push(n) : ya = [n] : Pt = n;
  }
  function Pi() {
    if (Pt) {
      var n = Pt, r = ya;
      if (ya = Pt = null, ja(n), r) for (n = 0; n < r.length; n++) ja(r[n]);
    }
  }
  function to(n, r) {
    return n(r);
  }
  function no() {
  }
  var Vi = !1;
  function ro(n, r, l) {
    if (Vi) return n(r, l);
    Vi = !0;
    try {
      return to(n, r, l);
    } finally {
      Vi = !1, (Pt !== null || ya !== null) && (no(), Pi());
    }
  }
  function pi(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = Ji(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(S(231, r, typeof l));
    return l;
  }
  var ga = !1;
  if (y) try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      ga = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    ga = !1;
  }
  function Sa(n, r, l, u, c, d, g, T, D) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Q);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var Kr = !1, vi = null, hi = !1, Hi = null, k = { onError: function(n) {
    Kr = !0, vi = n;
  } };
  function ae(n, r, l, u, c, d, g, T, D) {
    Kr = !1, vi = null, Sa.apply(k, arguments);
  }
  function xe(n, r, l, u, c, d, g, T, D) {
    if (ae.apply(this, arguments), Kr) {
      if (Kr) {
        var Q = vi;
        Kr = !1, vi = null;
      } else throw Error(S(198));
      hi || (hi = !0, Hi = Q);
    }
  }
  function Te(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function gt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function rt(n) {
    if (Te(n) !== n) throw Error(S(188));
  }
  function Et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Te(n), r === null) throw Error(S(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return rt(c), n;
          if (d === u) return rt(c), r;
          d = d.sibling;
        }
        throw Error(S(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var g = !1, T = c.child; T; ) {
          if (T === l) {
            g = !0, l = c, u = d;
            break;
          }
          if (T === u) {
            g = !0, u = c, l = d;
            break;
          }
          T = T.sibling;
        }
        if (!g) {
          for (T = d.child; T; ) {
            if (T === l) {
              g = !0, l = d, u = c;
              break;
            }
            if (T === u) {
              g = !0, u = d, l = c;
              break;
            }
            T = T.sibling;
          }
          if (!g) throw Error(S(189));
        }
      }
      if (l.alternate !== u) throw Error(S(190));
    }
    if (l.tag !== 3) throw Error(S(188));
    return l.stateNode.current === l ? n : r;
  }
  function dt(n) {
    return n = Et(n), n !== null ? _n(n) : null;
  }
  function _n(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = _n(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var cn = E.unstable_scheduleCallback, vn = E.unstable_cancelCallback, wr = E.unstable_shouldYield, ei = E.unstable_requestPaint, Vt = E.unstable_now, yn = E.unstable_getCurrentPriorityLevel, ot = E.unstable_ImmediatePriority, mi = E.unstable_UserBlockingPriority, Bi = E.unstable_NormalPriority, xc = E.unstable_LowPriority, Ii = E.unstable_IdlePriority, ml = null, Xr = null;
  function rs(n) {
    if (Xr && typeof Xr.onCommitFiberRoot == "function") try {
      Xr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mr = Math.clz32 ? Math.clz32 : bc, as = Math.log, Rc = Math.LN2;
  function bc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (as(n) / Rc | 0) | 0;
  }
  var $i = 64, yl = 4194304;
  function Jr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function yi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, g = l & 268435455;
    if (g !== 0) {
      var T = g & ~c;
      T !== 0 ? u = Jr(T) : (d &= g, d !== 0 && (u = Jr(d)));
    } else g = l & ~c, g !== 0 ? u = Jr(g) : d !== 0 && (u = Jr(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Mr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function gl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Jo(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var g = 31 - Mr(d), T = 1 << g, D = c[g];
      D === -1 ? (!(T & l) || T & u) && (c[g] = gl(T, r)) : D <= r && (n.expiredLanes |= T), d &= ~T;
    }
  }
  function Yi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ao() {
    var n = $i;
    return $i <<= 1, !($i & 4194240) && ($i = 64), n;
  }
  function io(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Sl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Mr(r), n[r] = l;
  }
  function is(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Mr(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function ls(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Mr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Ot = 0;
  function os(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Zo, jt, Tc, gi, et, lo = !1, nr = [], Zr = null, Ur = null, Si = null, Rn = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map(), ti = [], Ma = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _r(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Zr = null;
        break;
      case "dragenter":
      case "dragleave":
        Ur = null;
        break;
      case "mouseover":
      case "mouseout":
        Si = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jt.delete(r.pointerId);
    }
  }
  function zr(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = bs(r), r !== null && jt(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function md(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return Zr = zr(Zr, n, r, l, u, c), !0;
      case "dragenter":
        return Ur = zr(Ur, n, r, l, u, c), !0;
      case "mouseover":
        return Si = zr(Si, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Rn.set(d, zr(Rn.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Jt.set(d, zr(Jt.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function eu(n) {
    var r = mo(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = gt(l), r !== null) {
            n.blockedOn = r, et(n.priority, function() {
              Tc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function oo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = au(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        tr = u, l.target.dispatchEvent(u), tr = null;
      } else return r = bs(l), r !== null && jt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function tu(n, r, l) {
    oo(n) && l.delete(r);
  }
  function nu() {
    lo = !1, Zr !== null && oo(Zr) && (Zr = null), Ur !== null && oo(Ur) && (Ur = null), Si !== null && oo(Si) && (Si = null), Rn.forEach(tu), Jt.forEach(tu);
  }
  function uo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lo || (lo = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, nu)));
  }
  function Ua(n) {
    function r(c) {
      return uo(c, n);
    }
    if (0 < nr.length) {
      uo(nr[0], n);
      for (var l = 1; l < nr.length; l++) {
        var u = nr[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Zr !== null && uo(Zr, n), Ur !== null && uo(Ur, n), Si !== null && uo(Si, n), Rn.forEach(r), Jt.forEach(r), l = 0; l < ti.length; l++) u = ti[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < ti.length && (l = ti[0], l.blockedOn === null); ) eu(l), l.blockedOn === null && ti.shift();
  }
  var za = ve.ReactCurrentBatchConfig, El = !0;
  function Wi(n, r, l, u) {
    var c = Ot, d = za.transition;
    za.transition = null;
    try {
      Ot = 1, Cl(n, r, l, u);
    } finally {
      Ot = c, za.transition = d;
    }
  }
  function ru(n, r, l, u) {
    var c = Ot, d = za.transition;
    za.transition = null;
    try {
      Ot = 4, Cl(n, r, l, u);
    } finally {
      Ot = c, za.transition = d;
    }
  }
  function Cl(n, r, l, u) {
    if (El) {
      var c = au(n, r, l, u);
      if (c === null) Dd(n, r, u, Qi, l), _r(n, u);
      else if (md(c, n, r, l, u)) u.stopPropagation();
      else if (_r(n, u), r & 4 && -1 < Ma.indexOf(n)) {
        for (; c !== null; ) {
          var d = bs(c);
          if (d !== null && Zo(d), d = au(n, r, l, u), d === null && Dd(n, r, u, Qi, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Dd(n, r, u, null, l);
    }
  }
  var Qi = null;
  function au(n, r, l, u) {
    if (Qi = null, n = sn(u), n = mo(n), n !== null) if (r = Te(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = gt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Qi = n, null;
  }
  function us(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (yn()) {
          case ot:
            return 1;
          case mi:
            return 4;
          case Bi:
          case xc:
            return 16;
          case Ii:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Aa = null, iu = null, m = null;
  function _() {
    if (m) return m;
    var n, r = iu, l = r.length, u, c = "value" in Aa ? Aa.value : Aa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var g = l - n;
    for (u = 1; u <= g && r[l - u] === c[d - u]; u++) ;
    return m = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Y(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function pe() {
    return !1;
  }
  function Le(n) {
    function r(l, u, c, d, g) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = g, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? q : pe, this.isPropagationStopped = pe, this;
    }
    return Ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var ke = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Xe = Le(ke), pt = Ce({}, ke, { view: 0, detail: 0 }), It = Le(pt), Zt, en, st, an = Ce({}, pt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ni, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== st && (st && n.type === "mousemove" ? (Zt = n.screenX - st.screenX, en = n.screenY - st.screenY) : en = Zt = 0, st = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : en;
  } }), kn = Le(an), so = Ce({}, an, { dataTransfer: 0 }), ss = Le(so), Gi = Ce({}, pt, { relatedTarget: 0 }), co = Le(Gi), cs = Ce({}, ke, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yd = Le(cs), wc = Ce({}, ke, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), gd = Le(wc), Nv = Ce({}, ke, { data: 0 }), _c = Le(Nv), Ov = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, jv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Lv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Oy(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Lv[n]) ? !!r[n] : !1;
  }
  function ni() {
    return Oy;
  }
  var jy = Ce({}, pt, { key: function(n) {
    if (n.key) {
      var r = Ov[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Y(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? jv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ni, charCode: function(n) {
    return n.type === "keypress" ? Y(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Y(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Sd = Le(jy), Ed = Ce({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), kc = Le(Ed), Ly = Ce({}, pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ni }), Dc = Le(Ly), Mv = Ce({}, ke, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ea = Le(Mv), qi = Ce({}, an, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pn = Le(qi), Ki = [9, 13, 27, 32], fs = y && "CompositionEvent" in window, xl = null;
  y && "documentMode" in document && (xl = document.documentMode);
  var My = y && "TextEvent" in window && !xl, lu = y && (!fs || xl && 8 < xl && 11 >= xl), Uv = " ", zv = !1;
  function Nc(n, r) {
    switch (n) {
      case "keyup":
        return Ki.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Av(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ou = !1;
  function Uy(n, r) {
    switch (n) {
      case "compositionend":
        return Av(r);
      case "keypress":
        return r.which !== 32 ? null : (zv = !0, Uv);
      case "textInput":
        return n = r.data, n === Uv && zv ? null : n;
      default:
        return null;
    }
  }
  function Fv(n, r) {
    if (ou) return n === "compositionend" || !fs && Nc(n, r) ? (n = _(), m = iu = Aa = null, ou = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var zy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!zy[n.type] : r === "textarea";
  }
  function Vv(n, r, l, u) {
    La(u), r = Cs(r, "onChange"), 0 < r.length && (l = new Xe("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var uu = null, Ei = null;
  function Cd(n) {
    Mc(n, 0);
  }
  function ds(n) {
    var r = Ve(n);
    if (Jn(r)) return n;
  }
  function Hv(n, r) {
    if (n === "change") return r;
  }
  var Bv = !1;
  if (y) {
    var xd;
    if (y) {
      var Rd = "oninput" in document;
      if (!Rd) {
        var Iv = document.createElement("div");
        Iv.setAttribute("oninput", "return;"), Rd = typeof Iv.oninput == "function";
      }
      xd = Rd;
    } else xd = !1;
    Bv = xd && (!document.documentMode || 9 < document.documentMode);
  }
  function $v() {
    uu && (uu.detachEvent("onpropertychange", Yv), Ei = uu = null);
  }
  function Yv(n) {
    if (n.propertyName === "value" && ds(Ei)) {
      var r = [];
      Vv(r, Ei, n, sn(n)), ro(Cd, r);
    }
  }
  function Ay(n, r, l) {
    n === "focusin" ? ($v(), uu = r, Ei = l, uu.attachEvent("onpropertychange", Yv)) : n === "focusout" && $v();
  }
  function Fy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ds(Ei);
  }
  function Wv(n, r) {
    if (n === "click") return ds(r);
  }
  function Py(n, r) {
    if (n === "input" || n === "change") return ds(r);
  }
  function Qv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ri = typeof Object.is == "function" ? Object.is : Qv;
  function ps(n, r) {
    if (ri(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!F.call(r, c) || !ri(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function qv(n, r) {
    var l = Gv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Gv(l);
    }
  }
  function Oc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Oc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Rl() {
    for (var n = window, r = ur(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ur(n.document);
    }
    return r;
  }
  function su(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Kv(n) {
    var r = Rl(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Oc(l.ownerDocument.documentElement, l)) {
      if (u !== null && su(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = qv(l, d);
          var g = qv(
            l,
            u
          );
          c && g && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== g.node || n.focusOffset !== g.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(g.node, g.offset)) : (r.setEnd(g.node, g.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var cu = y && "documentMode" in document && 11 >= document.documentMode, fu = null, bd = null, vs = null, Td = !1;
  function Xv(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Td || fu == null || fu !== ur(u) || (u = fu, "selectionStart" in u && su(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), vs && ps(vs, u) || (vs = u, u = Cs(bd, "onSelect"), 0 < u.length && (r = new Xe("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = fu)));
  }
  function hs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: hs("Animation", "AnimationEnd"), animationiteration: hs("Animation", "AnimationIteration"), animationstart: hs("Animation", "AnimationStart"), transitionend: hs("Transition", "TransitionEnd") }, jc = {}, kr = {};
  y && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function ms(n) {
    if (jc[n]) return jc[n];
    if (!du[n]) return n;
    var r = du[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in kr) return jc[n] = r[l];
    return n;
  }
  var Jv = ms("animationend"), Zv = ms("animationiteration"), eh = ms("animationstart"), th = ms("transitionend"), nh = /* @__PURE__ */ new Map(), wd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ci(n, r) {
    nh.set(n, r), N(r, [n]);
  }
  for (var fo = 0; fo < wd.length; fo++) {
    var _d = wd[fo], ys = _d.toLowerCase(), Vy = _d[0].toUpperCase() + _d.slice(1);
    Ci(ys, "on" + Vy);
  }
  Ci(Jv, "onAnimationEnd"), Ci(Zv, "onAnimationIteration"), Ci(eh, "onAnimationStart"), Ci("dblclick", "onDoubleClick"), Ci("focusin", "onFocus"), Ci("focusout", "onBlur"), Ci(th, "onTransitionEnd"), O("onMouseEnter", ["mouseout", "mouseover"]), O("onMouseLeave", ["mouseout", "mouseover"]), O("onPointerEnter", ["pointerout", "pointerover"]), O("onPointerLeave", ["pointerout", "pointerover"]), N("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), N("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), N("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), N("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
  function Lc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, xe(u, r, void 0, n), n.currentTarget = null;
  }
  function Mc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var g = u.length - 1; 0 <= g; g--) {
          var T = u[g], D = T.instance, Q = T.currentTarget;
          if (T = T.listener, D !== d && c.isPropagationStopped()) break e;
          Lc(c, T, Q), d = D;
        }
        else for (g = 0; g < u.length; g++) {
          if (T = u[g], D = T.instance, Q = T.currentTarget, T = T.listener, D !== d && c.isPropagationStopped()) break e;
          Lc(c, T, Q), d = D;
        }
      }
    }
    if (hi) throw n = Hi, hi = !1, Hi = null, n;
  }
  function $t(n, r) {
    var l = r[Nd];
    l === void 0 && (l = r[Nd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (kd(r, n, 2, !1), l.add(u));
  }
  function bl(n, r, l) {
    var u = 0;
    r && (u |= 4), kd(l, n, u, r);
  }
  var Ss = "_reactListening" + Math.random().toString(36).slice(2);
  function Es(n) {
    if (!n[Ss]) {
      n[Ss] = !0, b.forEach(function(l) {
        l !== "selectionchange" && (Hy.has(l) || bl(l, !1, n), bl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ss] || (r[Ss] = !0, bl("selectionchange", !1, r));
    }
  }
  function kd(n, r, l, u) {
    switch (us(r)) {
      case 1:
        var c = Wi;
        break;
      case 4:
        c = ru;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ga || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Dd(n, r, l, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var g = u.tag;
      if (g === 3 || g === 4) {
        var T = u.stateNode.containerInfo;
        if (T === c || T.nodeType === 8 && T.parentNode === c) break;
        if (g === 4) for (g = u.return; g !== null; ) {
          var D = g.tag;
          if ((D === 3 || D === 4) && (D = g.stateNode.containerInfo, D === c || D.nodeType === 8 && D.parentNode === c)) return;
          g = g.return;
        }
        for (; T !== null; ) {
          if (g = mo(T), g === null) return;
          if (D = g.tag, D === 5 || D === 6) {
            u = d = g;
            continue e;
          }
          T = T.parentNode;
        }
      }
      u = u.return;
    }
    ro(function() {
      var Q = d, oe = sn(l), se = [];
      e: {
        var ie = nh.get(n);
        if (ie !== void 0) {
          var De = Xe, Ue = n;
          switch (n) {
            case "keypress":
              if (Y(l) === 0) break e;
            case "keydown":
            case "keyup":
              De = Sd;
              break;
            case "focusin":
              Ue = "focus", De = co;
              break;
            case "focusout":
              Ue = "blur", De = co;
              break;
            case "beforeblur":
            case "afterblur":
              De = co;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              De = kn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              De = ss;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              De = Dc;
              break;
            case Jv:
            case Zv:
            case eh:
              De = yd;
              break;
            case th:
              De = ea;
              break;
            case "scroll":
              De = It;
              break;
            case "wheel":
              De = Pn;
              break;
            case "copy":
            case "cut":
            case "paste":
              De = gd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              De = kc;
          }
          var Ae = (r & 4) !== 0, jn = !Ae && n === "scroll", A = Ae ? ie !== null ? ie + "Capture" : null : ie;
          Ae = [];
          for (var L = Q, I; L !== null; ) {
            I = L;
            var de = I.stateNode;
            if (I.tag === 5 && de !== null && (I = de, A !== null && (de = pi(L, A), de != null && Ae.push(pu(L, de, I)))), jn) break;
            L = L.return;
          }
          0 < Ae.length && (ie = new De(ie, Ue, null, l, oe), se.push({ event: ie, listeners: Ae }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", De = n === "mouseout" || n === "pointerout", ie && l !== tr && (Ue = l.relatedTarget || l.fromElement) && (mo(Ue) || Ue[Xi])) break e;
          if ((De || ie) && (ie = oe.window === oe ? oe : (ie = oe.ownerDocument) ? ie.defaultView || ie.parentWindow : window, De ? (Ue = l.relatedTarget || l.toElement, De = Q, Ue = Ue ? mo(Ue) : null, Ue !== null && (jn = Te(Ue), Ue !== jn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (De = null, Ue = Q), De !== Ue)) {
            if (Ae = kn, de = "onMouseLeave", A = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Ae = kc, de = "onPointerLeave", A = "onPointerEnter", L = "pointer"), jn = De == null ? ie : Ve(De), I = Ue == null ? ie : Ve(Ue), ie = new Ae(de, L + "leave", De, l, oe), ie.target = jn, ie.relatedTarget = I, de = null, mo(oe) === Q && (Ae = new Ae(A, L + "enter", Ue, l, oe), Ae.target = I, Ae.relatedTarget = jn, de = Ae), jn = de, De && Ue) t: {
              for (Ae = De, A = Ue, L = 0, I = Ae; I; I = po(I)) L++;
              for (I = 0, de = A; de; de = po(de)) I++;
              for (; 0 < L - I; ) Ae = po(Ae), L--;
              for (; 0 < I - L; ) A = po(A), I--;
              for (; L--; ) {
                if (Ae === A || A !== null && Ae === A.alternate) break t;
                Ae = po(Ae), A = po(A);
              }
              Ae = null;
            }
            else Ae = null;
            De !== null && Uc(se, ie, De, Ae, !1), Ue !== null && jn !== null && Uc(se, jn, Ue, Ae, !0);
          }
        }
        e: {
          if (ie = Q ? Ve(Q) : window, De = ie.nodeName && ie.nodeName.toLowerCase(), De === "select" || De === "input" && ie.type === "file") var we = Hv;
          else if (Pv(ie)) if (Bv) we = Py;
          else {
            we = Fy;
            var $e = Ay;
          }
          else (De = ie.nodeName) && De.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (we = Wv);
          if (we && (we = we(n, Q))) {
            Vv(se, we, l, oe);
            break e;
          }
          $e && $e(n, ie, Q), n === "focusout" && ($e = ie._wrapperState) && $e.controlled && ie.type === "number" && Ja(ie, "number", ie.value);
        }
        switch ($e = Q ? Ve(Q) : window, n) {
          case "focusin":
            (Pv($e) || $e.contentEditable === "true") && (fu = $e, bd = Q, vs = null);
            break;
          case "focusout":
            vs = bd = fu = null;
            break;
          case "mousedown":
            Td = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Td = !1, Xv(se, l, oe);
            break;
          case "selectionchange":
            if (cu) break;
          case "keydown":
          case "keyup":
            Xv(se, l, oe);
        }
        var Ge;
        if (fs) e: {
          switch (n) {
            case "compositionstart":
              var tt = "onCompositionStart";
              break e;
            case "compositionend":
              tt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              tt = "onCompositionUpdate";
              break e;
          }
          tt = void 0;
        }
        else ou ? Nc(n, l) && (tt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (tt = "onCompositionStart");
        tt && (lu && l.locale !== "ko" && (ou || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && ou && (Ge = _()) : (Aa = oe, iu = "value" in Aa ? Aa.value : Aa.textContent, ou = !0)), $e = Cs(Q, tt), 0 < $e.length && (tt = new _c(tt, n, null, l, oe), se.push({ event: tt, listeners: $e }), Ge ? tt.data = Ge : (Ge = Av(l), Ge !== null && (tt.data = Ge)))), (Ge = My ? Uy(n, l) : Fv(n, l)) && (Q = Cs(Q, "onBeforeInput"), 0 < Q.length && (oe = new _c("onBeforeInput", "beforeinput", null, l, oe), se.push({ event: oe, listeners: Q }), oe.data = Ge));
      }
      Mc(se, r);
    });
  }
  function pu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Cs(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = pi(n, l), d != null && u.unshift(pu(n, d, c)), d = pi(n, r), d != null && u.push(pu(n, d, c))), n = n.return;
    }
    return u;
  }
  function po(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Uc(n, r, l, u, c) {
    for (var d = r._reactName, g = []; l !== null && l !== u; ) {
      var T = l, D = T.alternate, Q = T.stateNode;
      if (D !== null && D === u) break;
      T.tag === 5 && Q !== null && (T = Q, c ? (D = pi(l, d), D != null && g.unshift(pu(l, D, T))) : c || (D = pi(l, d), D != null && g.push(pu(l, D, T)))), l = l.return;
    }
    g.length !== 0 && n.push({ event: r, listeners: g });
  }
  var By = /\r\n?/g, rh = /\u0000|\uFFFD/g;
  function ah(n) {
    return (typeof n == "string" ? n : "" + n).replace(By, `
`).replace(rh, "");
  }
  function zc(n, r, l) {
    if (r = ah(r), ah(n) !== r && l) throw Error(S(425));
  }
  function Ac() {
  }
  var vo = null, xs = null;
  function ho(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, Pc = typeof Promise == "function" ? Promise : void 0, Iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pc != "undefined" ? function(n) {
    return Pc.resolve(null).then(n).catch(vu);
  } : Fc;
  function vu(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function hu(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (u === 0) {
          n.removeChild(c), Ua(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    Ua(r);
  }
  function ai(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Vc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var mu = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + mu, Rs = "__reactProps$" + mu, Xi = "__reactContainer$" + mu, Nd = "__reactEvents$" + mu, Od = "__reactListeners$" + mu, yu = "__reactHandles$" + mu;
  function mo(n) {
    var r = n[Fa];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Xi] || l[Fa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Vc(n); n !== null; ) {
          if (l = n[Fa]) return l;
          n = Vc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function bs(n) {
    return n = n[Fa] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ve(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(S(33));
  }
  function Ji(n) {
    return n[Rs] || null;
  }
  var bn = [], Ct = -1;
  function ta(n) {
    return { current: n };
  }
  function Qt(n) {
    0 > Ct || (n.current = bn[Ct], bn[Ct] = null, Ct--);
  }
  function ln(n, r) {
    Ct++, bn[Ct] = n.current, n.current = r;
  }
  var mt = {}, gn = ta(mt), Vn = ta(!1), Pa = mt;
  function Ea(n, r) {
    var l = n.type.contextTypes;
    if (!l) return mt;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Tn(n) {
    return n = n.childContextTypes, n != null;
  }
  function xi() {
    Qt(Vn), Qt(gn);
  }
  function Hc(n, r, l) {
    if (gn.current !== mt) throw Error(S(168));
    ln(gn, r), ln(Vn, l);
  }
  function lh(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(S(108, Nt(n) || "Unknown", c));
    return Ce({}, l, u);
  }
  function yo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mt, Pa = gn.current, ln(gn, n), ln(Vn, Vn.current), !0;
  }
  function Dr(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(S(169));
    l ? (n = lh(n, r, Pa), u.__reactInternalMemoizedMergedChildContext = n, Qt(Vn), Qt(gn), ln(gn, n)) : Qt(Vn), ln(Vn, l);
  }
  var ii = null, Ts = !1, ws = !1;
  function Tl(n) {
    ii === null ? ii = [n] : ii.push(n);
  }
  function jd(n) {
    Ts = !0, Tl(n);
  }
  function Ar() {
    if (!ws && ii !== null) {
      ws = !0;
      var n = 0, r = Ot;
      try {
        var l = ii;
        for (Ot = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ii = null, Ts = !1;
      } catch (c) {
        throw ii !== null && (ii = ii.slice(n + 1)), cn(ot, Ar), c;
      } finally {
        Ot = r, ws = !1;
      }
    }
    return null;
  }
  var wl = [], _l = 0, gu = null, kl = 0, fr = [], Hn = 0, go = null, Fr = 1, Ri = "";
  function Dl(n, r) {
    wl[_l++] = kl, wl[_l++] = gu, gu = n, kl = r;
  }
  function oh(n, r, l) {
    fr[Hn++] = Fr, fr[Hn++] = Ri, fr[Hn++] = go, go = n;
    var u = Fr;
    n = Ri;
    var c = 32 - Mr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Mr(r) + c;
    if (30 < d) {
      var g = c - c % 5;
      d = (u & (1 << g) - 1).toString(32), u >>= g, c -= g, Fr = 1 << 32 - Mr(r) + c | l << c | u, Ri = d + n;
    } else Fr = 1 << d | l << c | u, Ri = n;
  }
  function Ld(n) {
    n.return !== null && (Dl(n, 1), oh(n, 1, 0));
  }
  function Bc(n) {
    for (; n === gu; ) gu = wl[--_l], wl[_l] = null, kl = wl[--_l], wl[_l] = null;
    for (; n === go; ) go = fr[--Hn], fr[Hn] = null, Ri = fr[--Hn], fr[Hn] = null, Fr = fr[--Hn], fr[Hn] = null;
  }
  var na = null, ra = null, hn = !1, li = null;
  function Md(n, r) {
    var l = $a(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Ud(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, na = n, ra = ai(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, na = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = go !== null ? { id: Fr, overflow: Ri } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = $a(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, na = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ad(n) {
    if (hn) {
      var r = ra;
      if (r) {
        var l = r;
        if (!Ud(n, r)) {
          if (zd(n)) throw Error(S(418));
          r = ai(l.nextSibling);
          var u = na;
          r && Ud(n, r) ? Md(u, l) : (n.flags = n.flags & -4097 | 2, hn = !1, na = n);
        }
      } else {
        if (zd(n)) throw Error(S(418));
        n.flags = n.flags & -4097 | 2, hn = !1, na = n;
      }
    }
  }
  function uh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    na = n;
  }
  function Dn(n) {
    if (n !== na) return !1;
    if (!hn) return uh(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ho(n.type, n.memoizedProps)), r && (r = ra)) {
      if (zd(n)) throw sh(), Error(S(418));
      for (; r; ) Md(n, r), r = ai(r.nextSibling);
    }
    if (uh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ra = ai(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else ra = na ? ai(n.stateNode.nextSibling) : null;
    return !0;
  }
  function sh() {
    for (var n = ra; n; ) n = ai(n.nextSibling);
  }
  function Zi() {
    ra = na = null, hn = !1;
  }
  function _s(n) {
    li === null ? li = [n] : li.push(n);
  }
  var So = ve.ReactCurrentBatchConfig;
  function ks(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(S(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(S(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(g) {
          var T = c.refs;
          g === null ? delete T[d] : T[d] = g;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(S(284));
      if (!l._owner) throw Error(S(290, n));
    }
    return n;
  }
  function Su(n, r) {
    throw n = Object.prototype.toString.call(r), Error(S(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ch(n) {
    var r = n._init;
    return r(n._payload);
  }
  function fh(n) {
    function r(A, L) {
      if (n) {
        var I = A.deletions;
        I === null ? (A.deletions = [L], A.flags |= 16) : I.push(L);
      }
    }
    function l(A, L) {
      if (!n) return null;
      for (; L !== null; ) r(A, L), L = L.sibling;
      return null;
    }
    function u(A, L) {
      for (A = /* @__PURE__ */ new Map(); L !== null; ) L.key !== null ? A.set(L.key, L) : A.set(L.index, L), L = L.sibling;
      return A;
    }
    function c(A, L) {
      return A = Vl(A, L), A.index = 0, A.sibling = null, A;
    }
    function d(A, L, I) {
      return A.index = I, n ? (I = A.alternate, I !== null ? (I = I.index, I < L ? (A.flags |= 2, L) : I) : (A.flags |= 2, L)) : (A.flags |= 1048576, L);
    }
    function g(A) {
      return n && A.alternate === null && (A.flags |= 2), A;
    }
    function T(A, L, I, de) {
      return L === null || L.tag !== 6 ? (L = zo(I, A.mode, de), L.return = A, L) : (L = c(L, I), L.return = A, L);
    }
    function D(A, L, I, de) {
      var we = I.type;
      return we === Be ? oe(A, L, I.props.children, de, I.key) : L !== null && (L.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Rt && ch(we) === L.type) ? (de = c(L, I.props), de.ref = ks(A, L, I), de.return = A, de) : (de = kf(I.type, I.key, I.props, null, A.mode, de), de.ref = ks(A, L, I), de.return = A, de);
    }
    function Q(A, L, I, de) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== I.containerInfo || L.stateNode.implementation !== I.implementation ? (L = vp(I, A.mode, de), L.return = A, L) : (L = c(L, I.children || []), L.return = A, L);
    }
    function oe(A, L, I, de, we) {
      return L === null || L.tag !== 7 ? (L = Hl(I, A.mode, de, we), L.return = A, L) : (L = c(L, I), L.return = A, L);
    }
    function se(A, L, I) {
      if (typeof L == "string" && L !== "" || typeof L == "number") return L = zo("" + L, A.mode, I), L.return = A, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Re:
            return I = kf(L.type, L.key, L.props, null, A.mode, I), I.ref = ks(A, null, L), I.return = A, I;
          case ge:
            return L = vp(L, A.mode, I), L.return = A, L;
          case Rt:
            var de = L._init;
            return se(A, de(L._payload), I);
        }
        if (Lr(L) || Me(L)) return L = Hl(L, A.mode, I, null), L.return = A, L;
        Su(A, L);
      }
      return null;
    }
    function ie(A, L, I, de) {
      var we = L !== null ? L.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return we !== null ? null : T(A, L, "" + I, de);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Re:
            return I.key === we ? D(A, L, I, de) : null;
          case ge:
            return I.key === we ? Q(A, L, I, de) : null;
          case Rt:
            return we = I._init, ie(
              A,
              L,
              we(I._payload),
              de
            );
        }
        if (Lr(I) || Me(I)) return we !== null ? null : oe(A, L, I, de, null);
        Su(A, I);
      }
      return null;
    }
    function De(A, L, I, de, we) {
      if (typeof de == "string" && de !== "" || typeof de == "number") return A = A.get(I) || null, T(L, A, "" + de, we);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case Re:
            return A = A.get(de.key === null ? I : de.key) || null, D(L, A, de, we);
          case ge:
            return A = A.get(de.key === null ? I : de.key) || null, Q(L, A, de, we);
          case Rt:
            var $e = de._init;
            return De(A, L, I, $e(de._payload), we);
        }
        if (Lr(de) || Me(de)) return A = A.get(I) || null, oe(L, A, de, we, null);
        Su(L, de);
      }
      return null;
    }
    function Ue(A, L, I, de) {
      for (var we = null, $e = null, Ge = L, tt = L = 0, Kn = null; Ge !== null && tt < I.length; tt++) {
        Ge.index > tt ? (Kn = Ge, Ge = null) : Kn = Ge.sibling;
        var Ut = ie(A, Ge, I[tt], de);
        if (Ut === null) {
          Ge === null && (Ge = Kn);
          break;
        }
        n && Ge && Ut.alternate === null && r(A, Ge), L = d(Ut, L, tt), $e === null ? we = Ut : $e.sibling = Ut, $e = Ut, Ge = Kn;
      }
      if (tt === I.length) return l(A, Ge), hn && Dl(A, tt), we;
      if (Ge === null) {
        for (; tt < I.length; tt++) Ge = se(A, I[tt], de), Ge !== null && (L = d(Ge, L, tt), $e === null ? we = Ge : $e.sibling = Ge, $e = Ge);
        return hn && Dl(A, tt), we;
      }
      for (Ge = u(A, Ge); tt < I.length; tt++) Kn = De(Ge, A, tt, I[tt], de), Kn !== null && (n && Kn.alternate !== null && Ge.delete(Kn.key === null ? tt : Kn.key), L = d(Kn, L, tt), $e === null ? we = Kn : $e.sibling = Kn, $e = Kn);
      return n && Ge.forEach(function(Il) {
        return r(A, Il);
      }), hn && Dl(A, tt), we;
    }
    function Ae(A, L, I, de) {
      var we = Me(I);
      if (typeof we != "function") throw Error(S(150));
      if (I = we.call(I), I == null) throw Error(S(151));
      for (var $e = we = null, Ge = L, tt = L = 0, Kn = null, Ut = I.next(); Ge !== null && !Ut.done; tt++, Ut = I.next()) {
        Ge.index > tt ? (Kn = Ge, Ge = null) : Kn = Ge.sibling;
        var Il = ie(A, Ge, Ut.value, de);
        if (Il === null) {
          Ge === null && (Ge = Kn);
          break;
        }
        n && Ge && Il.alternate === null && r(A, Ge), L = d(Il, L, tt), $e === null ? we = Il : $e.sibling = Il, $e = Il, Ge = Kn;
      }
      if (Ut.done) return l(
        A,
        Ge
      ), hn && Dl(A, tt), we;
      if (Ge === null) {
        for (; !Ut.done; tt++, Ut = I.next()) Ut = se(A, Ut.value, de), Ut !== null && (L = d(Ut, L, tt), $e === null ? we = Ut : $e.sibling = Ut, $e = Ut);
        return hn && Dl(A, tt), we;
      }
      for (Ge = u(A, Ge); !Ut.done; tt++, Ut = I.next()) Ut = De(Ge, A, tt, Ut.value, de), Ut !== null && (n && Ut.alternate !== null && Ge.delete(Ut.key === null ? tt : Ut.key), L = d(Ut, L, tt), $e === null ? we = Ut : $e.sibling = Ut, $e = Ut);
      return n && Ge.forEach(function(rg) {
        return r(A, rg);
      }), hn && Dl(A, tt), we;
    }
    function jn(A, L, I, de) {
      if (typeof I == "object" && I !== null && I.type === Be && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Re:
            e: {
              for (var we = I.key, $e = L; $e !== null; ) {
                if ($e.key === we) {
                  if (we = I.type, we === Be) {
                    if ($e.tag === 7) {
                      l(A, $e.sibling), L = c($e, I.props.children), L.return = A, A = L;
                      break e;
                    }
                  } else if ($e.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Rt && ch(we) === $e.type) {
                    l(A, $e.sibling), L = c($e, I.props), L.ref = ks(A, $e, I), L.return = A, A = L;
                    break e;
                  }
                  l(A, $e);
                  break;
                } else r(A, $e);
                $e = $e.sibling;
              }
              I.type === Be ? (L = Hl(I.props.children, A.mode, de, I.key), L.return = A, A = L) : (de = kf(I.type, I.key, I.props, null, A.mode, de), de.ref = ks(A, L, I), de.return = A, A = de);
            }
            return g(A);
          case ge:
            e: {
              for ($e = I.key; L !== null; ) {
                if (L.key === $e) if (L.tag === 4 && L.stateNode.containerInfo === I.containerInfo && L.stateNode.implementation === I.implementation) {
                  l(A, L.sibling), L = c(L, I.children || []), L.return = A, A = L;
                  break e;
                } else {
                  l(A, L);
                  break;
                }
                else r(A, L);
                L = L.sibling;
              }
              L = vp(I, A.mode, de), L.return = A, A = L;
            }
            return g(A);
          case Rt:
            return $e = I._init, jn(A, L, $e(I._payload), de);
        }
        if (Lr(I)) return Ue(A, L, I, de);
        if (Me(I)) return Ae(A, L, I, de);
        Su(A, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, L !== null && L.tag === 6 ? (l(A, L.sibling), L = c(L, I), L.return = A, A = L) : (l(A, L), L = zo(I, A.mode, de), L.return = A, A = L), g(A)) : l(A, L);
    }
    return jn;
  }
  var oi = fh(!0), dr = fh(!1), Ee = ta(null), Ca = null, Nr = null, Fd = null;
  function Pd() {
    Fd = Nr = Ca = null;
  }
  function Vd(n) {
    var r = Ee.current;
    Qt(Ee), n._currentValue = r;
  }
  function Hd(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Eu(n, r) {
    Ca = n, Fd = Nr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ir = !0), n.firstContext = null);
  }
  function Gt(n) {
    var r = n._currentValue;
    if (Fd !== n) if (n = { context: n, memoizedValue: r, next: null }, Nr === null) {
      if (Ca === null) throw Error(S(308));
      Nr = n, Ca.dependencies = { lanes: 0, firstContext: n };
    } else Nr = Nr.next = n;
    return r;
  }
  var Eo = null;
  function Bd(n) {
    Eo === null ? Eo = [n] : Eo.push(n);
  }
  function dh(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Bd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, bi(n, u);
  }
  function bi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Va = !1;
  function Nl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ph(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function el(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ol(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, xt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, bi(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Bd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, bi(n, l);
  }
  function Ic(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ls(n, l);
    }
  }
  function vh(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var g = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = g : d = d.next = g, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function $c(n, r, l, u) {
    var c = n.updateQueue;
    Va = !1;
    var d = c.firstBaseUpdate, g = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var D = T, Q = D.next;
      D.next = null, g === null ? d = Q : g.next = Q, g = D;
      var oe = n.alternate;
      oe !== null && (oe = oe.updateQueue, T = oe.lastBaseUpdate, T !== g && (T === null ? oe.firstBaseUpdate = Q : T.next = Q, oe.lastBaseUpdate = D));
    }
    if (d !== null) {
      var se = c.baseState;
      g = 0, oe = Q = D = null, T = d;
      do {
        var ie = T.lane, De = T.eventTime;
        if ((u & ie) === ie) {
          oe !== null && (oe = oe.next = {
            eventTime: De,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Ue = n, Ae = T;
            switch (ie = r, De = l, Ae.tag) {
              case 1:
                if (Ue = Ae.payload, typeof Ue == "function") {
                  se = Ue.call(De, se, ie);
                  break e;
                }
                se = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = Ae.payload, ie = typeof Ue == "function" ? Ue.call(De, se, ie) : Ue, ie == null) break e;
                se = Ce({}, se, ie);
                break e;
              case 2:
                Va = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, ie = c.effects, ie === null ? c.effects = [T] : ie.push(T));
        } else De = { eventTime: De, lane: ie, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, oe === null ? (Q = oe = De, D = se) : oe = oe.next = De, g |= ie;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null) break;
          ie = T, T = ie.next, ie.next = null, c.lastBaseUpdate = ie, c.shared.pending = null;
        }
      } while (!0);
      if (oe === null && (D = se), c.baseState = D, c.firstBaseUpdate = Q, c.lastBaseUpdate = oe, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          g |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      No |= g, n.lanes = g, n.memoizedState = se;
    }
  }
  function Id(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = l, typeof c != "function") throw Error(S(191, c));
        c.call(u);
      }
    }
  }
  var Cu = {}, Ti = ta(Cu), Ds = ta(Cu), Ns = ta(Cu);
  function Co(n) {
    if (n === Cu) throw Error(S(174));
    return n;
  }
  function $d(n, r) {
    switch (ln(Ns, r), ln(Ds, n), ln(Ti, Cu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sr(r, n);
    }
    Qt(Ti), ln(Ti, r);
  }
  function xu() {
    Qt(Ti), Qt(Ds), Qt(Ns);
  }
  function Yd(n) {
    Co(Ns.current);
    var r = Co(Ti.current), l = sr(r, n.type);
    r !== l && (ln(Ds, n), ln(Ti, l));
  }
  function Wd(n) {
    Ds.current === n && (Qt(Ti), Qt(Ds));
  }
  var Sn = ta(0);
  function Yc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Qd = [];
  function Os() {
    for (var n = 0; n < Qd.length; n++) Qd[n]._workInProgressVersionPrimary = null;
    Qd.length = 0;
  }
  var He = ve.ReactCurrentDispatcher, St = ve.ReactCurrentBatchConfig, _t = 0, ut = null, tn = null, Qn = null, Wc = !1, js = !1, Ls = 0, Gd = 0;
  function Z() {
    throw Error(S(321));
  }
  function Bn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ri(n[l], r[l])) return !1;
    return !0;
  }
  function Ke(n, r, l, u, c, d) {
    if (_t = d, ut = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, He.current = n === null || n.memoizedState === null ? uf : sf, n = l(u, c), js) {
      d = 0;
      do {
        if (js = !1, Ls = 0, 25 <= d) throw Error(S(301));
        d += 1, Qn = tn = null, r.updateQueue = null, He.current = Fs, n = l(u, c);
      } while (js);
    }
    if (He.current = qt, r = tn !== null && tn.next !== null, _t = 0, Qn = tn = ut = null, Wc = !1, r) throw Error(S(300));
    return n;
  }
  function jl() {
    var n = Ls !== 0;
    return Ls = 0, n;
  }
  function rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Qn === null ? ut.memoizedState = Qn = n : Qn = Qn.next = n, Qn;
  }
  function ar() {
    if (tn === null) {
      var n = ut.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = tn.next;
    var r = Qn === null ? ut.memoizedState : Qn.next;
    if (r !== null) Qn = r, tn = n;
    else {
      if (n === null) throw Error(S(310));
      tn = n, n = { memoizedState: tn.memoizedState, baseState: tn.baseState, baseQueue: tn.baseQueue, queue: tn.queue, next: null }, Qn === null ? ut.memoizedState = Qn = n : Qn = Qn.next = n;
    }
    return Qn;
  }
  function aa(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function xo(n) {
    var r = ar(), l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var u = tn, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = d.next, d.next = g;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var T = g = null, D = null, Q = d;
      do {
        var oe = Q.lane;
        if ((_t & oe) === oe) D !== null && (D = D.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var se = {
            lane: oe,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          D === null ? (T = D = se, g = u) : D = D.next = se, ut.lanes |= oe, No |= oe;
        }
        Q = Q.next;
      } while (Q !== null && Q !== d);
      D === null ? g = u : D.next = T, ri(u, r.memoizedState) || (ir = !0), r.memoizedState = u, r.baseState = g, r.baseQueue = D, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ut.lanes |= d, No |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ll(n) {
    var r = ar(), l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var g = c = c.next;
      do
        d = n(d, g.action), g = g.next;
      while (g !== c);
      ri(d, r.memoizedState) || (ir = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function Ru() {
  }
  function Qc(n, r) {
    var l = ut, u = ar(), c = r(), d = !ri(u.memoizedState, c);
    if (d && (u.memoizedState = c, ir = !0), u = u.queue, Ms(Kc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || Qn !== null && Qn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ro(9, qc.bind(null, l, u, c, r), void 0, null), In === null) throw Error(S(349));
      _t & 30 || Gc(l, r, c);
    }
    return c;
  }
  function Gc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ut.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ut.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function qc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Xc(r) && Jc(n);
  }
  function Kc(n, r, l) {
    return l(function() {
      Xc(r) && Jc(n);
    });
  }
  function Xc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ri(n, l);
    } catch {
      return !0;
    }
  }
  function Jc(n) {
    var r = bi(n, 1);
    r !== null && Ta(r, n, 1, -1);
  }
  function Zc(n) {
    var r = rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: n }, r.queue = n, n = n.dispatch = As.bind(null, ut, n), [r.memoizedState, n];
  }
  function Ro(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = ut.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ut.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function ef() {
    return ar().memoizedState;
  }
  function bu(n, r, l, u) {
    var c = rr();
    ut.flags |= n, c.memoizedState = Ro(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Tu(n, r, l, u) {
    var c = ar();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (tn !== null) {
      var g = tn.memoizedState;
      if (d = g.destroy, u !== null && Bn(u, g.deps)) {
        c.memoizedState = Ro(r, l, d, u);
        return;
      }
    }
    ut.flags |= n, c.memoizedState = Ro(1 | r, l, d, u);
  }
  function tf(n, r) {
    return bu(8390656, 8, n, r);
  }
  function Ms(n, r) {
    return Tu(2048, 8, n, r);
  }
  function nf(n, r) {
    return Tu(4, 2, n, r);
  }
  function rf(n, r) {
    return Tu(4, 4, n, r);
  }
  function Us(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function bo(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Tu(4, 4, Us.bind(null, r, n), l);
  }
  function zs() {
  }
  function af(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Bn(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function lf(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Bn(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function of(n, r, l) {
    return _t & 21 ? (ri(l, r) || (l = ao(), ut.lanes |= l, No |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ir = !0), n.memoizedState = l);
  }
  function hh(n, r) {
    var l = Ot;
    Ot = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = St.transition;
    St.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = l, St.transition = u;
    }
  }
  function wu() {
    return ar().memoizedState;
  }
  function mh(n, r, l) {
    var u = ba(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Ml(n)) ia(r, l);
    else if (l = dh(n, r, l, u), l !== null) {
      var c = on();
      Ta(l, n, u, c), yh(l, r, u);
    }
  }
  function As(n, r, l) {
    var u = ba(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ml(n)) ia(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var g = r.lastRenderedState, T = d(g, l);
        if (c.hasEagerState = !0, c.eagerState = T, ri(T, g)) {
          var D = r.interleaved;
          D === null ? (c.next = c, Bd(r)) : (c.next = D.next, D.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = dh(n, r, c, u), l !== null && (c = on(), Ta(l, n, u, c), yh(l, r, u));
    }
  }
  function Ml(n) {
    var r = n.alternate;
    return n === ut || r !== null && r === ut;
  }
  function ia(n, r) {
    js = Wc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function yh(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ls(n, l);
    }
  }
  var qt = { readContext: Gt, useCallback: Z, useContext: Z, useEffect: Z, useImperativeHandle: Z, useInsertionEffect: Z, useLayoutEffect: Z, useMemo: Z, useReducer: Z, useRef: Z, useState: Z, useDebugValue: Z, useDeferredValue: Z, useTransition: Z, useMutableSource: Z, useSyncExternalStore: Z, useId: Z, unstable_isNewReconciler: !1 }, uf = { readContext: Gt, useCallback: function(n, r) {
    return rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Gt, useEffect: tf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bu(
      4194308,
      4,
      Us.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return bu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return bu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = rr();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = mh.bind(null, ut, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Zc, useDebugValue: zs, useDeferredValue: function(n) {
    return rr().memoizedState = n;
  }, useTransition: function() {
    var n = Zc(!1), r = n[0];
    return n = hh.bind(null, n[1]), rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = ut, c = rr();
    if (hn) {
      if (l === void 0) throw Error(S(407));
      l = l();
    } else {
      if (l = r(), In === null) throw Error(S(349));
      _t & 30 || Gc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, tf(Kc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, Ro(9, qc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = rr(), r = In.identifierPrefix;
    if (hn) {
      var l = Ri, u = Fr;
      l = (u & ~(1 << 32 - Mr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ls++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Gd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, sf = {
    readContext: Gt,
    useCallback: af,
    useContext: Gt,
    useEffect: Ms,
    useImperativeHandle: bo,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: lf,
    useReducer: xo,
    useRef: ef,
    useState: function() {
      return xo(aa);
    },
    useDebugValue: zs,
    useDeferredValue: function(n) {
      var r = ar();
      return of(r, tn.memoizedState, n);
    },
    useTransition: function() {
      var n = xo(aa)[0], r = ar().memoizedState;
      return [n, r];
    },
    useMutableSource: Ru,
    useSyncExternalStore: Qc,
    useId: wu,
    unstable_isNewReconciler: !1
  }, Fs = { readContext: Gt, useCallback: af, useContext: Gt, useEffect: Ms, useImperativeHandle: bo, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: lf, useReducer: Ll, useRef: ef, useState: function() {
    return Ll(aa);
  }, useDebugValue: zs, useDeferredValue: function(n) {
    var r = ar();
    return tn === null ? r.memoizedState = n : of(r, tn.memoizedState, n);
  }, useTransition: function() {
    var n = Ll(aa)[0], r = ar().memoizedState;
    return [n, r];
  }, useMutableSource: Ru, useSyncExternalStore: Qc, useId: wu, unstable_isNewReconciler: !1 };
  function la(n, r) {
    if (n && n.defaultProps) {
      r = Ce({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function qd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : Ce({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var cf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = on(), c = ba(n), d = el(u, c);
    d.payload = r, l != null && (d.callback = l), r = Ol(n, d, c), r !== null && (Ta(r, n, c, u), Ic(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = on(), c = ba(n), d = el(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ol(n, d, c), r !== null && (Ta(r, n, c, u), Ic(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = on(), u = ba(n), c = el(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Ol(n, c, u), r !== null && (Ta(r, n, u, l), Ic(r, n, u));
  } };
  function gh(n, r, l, u, c, d, g) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, g) : r.prototype && r.prototype.isPureReactComponent ? !ps(l, u) || !ps(c, d) : !0;
  }
  function Sh(n, r, l) {
    var u = !1, c = mt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Gt(d) : (c = Tn(r) ? Pa : gn.current, u = r.contextTypes, d = (u = u != null) ? Ea(n, c) : mt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function ff(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && cf.enqueueReplaceState(r, r.state, null);
  }
  function Kd(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Nl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Gt(d) : (d = Tn(r) ? Pa : gn.current, c.context = Ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (qd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && cf.enqueueReplaceState(c, c.state, null), $c(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ul(n, r) {
    try {
      var l = "", u = r;
      do
        l += nt(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function df(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function Xd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var $y = typeof WeakMap == "function" ? WeakMap : Map;
  function Ps(n, r, l) {
    l = el(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Al || (Al = !0, Qs = u), Xd(n, r);
    }, l;
  }
  function Eh(n, r, l) {
    l = el(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Xd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Xd(n, r), typeof u != "function" && (Ia === null ? Ia = /* @__PURE__ */ new Set([this]) : Ia.add(this));
      var g = r.stack;
      this.componentDidCatch(r.value, { componentStack: g !== null ? g : "" });
    }), l;
  }
  function Jd(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new $y();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = fp.bind(null, n, r, l), r.then(n, n));
  }
  function Zd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ch(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = el(-1, 1), r.tag = 2, Ol(l, r, 1))), l.lanes |= 1), n);
  }
  var To = ve.ReactCurrentOwner, ir = !1;
  function Nn(n, r, l, u) {
    r.child = n === null ? dr(r, null, l, u) : oi(r, n.child, l, u);
  }
  function pf(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return Eu(r, c), u = Ke(n, r, l, u, d, c), l = jl(), n !== null && !ir ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pr(n, r, c)) : (hn && l && Ld(r), r.flags |= 1, Nn(n, r, u, c), r.child);
  }
  function oa(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !pp(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, wo(n, r, d, u, c)) : (n = kf(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var g = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ps, l(g, u) && n.ref === r.ref) return pr(n, r, c);
    }
    return r.flags |= 1, n = Vl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function wo(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ps(d, u) && n.ref === r.ref) if (ir = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) n.flags & 131072 && (ir = !0);
      else return r.lanes = n.lanes, pr(n, r, c);
    }
    return vf(n, r, l, u, c);
  }
  function ct(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ln(Nu, Ra), Ra |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, ln(Nu, Ra), Ra |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, ln(Nu, Ra), Ra |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, ln(Nu, Ra), Ra |= u;
    return Nn(n, r, c, l), r.child;
  }
  function Vs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vf(n, r, l, u, c) {
    var d = Tn(l) ? Pa : gn.current;
    return d = Ea(r, d), Eu(r, c), l = Ke(n, r, l, u, d, c), u = jl(), n !== null && !ir ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pr(n, r, c)) : (hn && u && Ld(r), r.flags |= 1, Nn(n, r, l, c), r.child);
  }
  function Yy(n, r, l, u, c) {
    if (Tn(l)) {
      var d = !0;
      yo(r);
    } else d = !1;
    if (Eu(r, c), r.stateNode === null) Ha(n, r), Sh(r, l, u), Kd(r, l, u, c), u = !0;
    else if (n === null) {
      var g = r.stateNode, T = r.memoizedProps;
      g.props = T;
      var D = g.context, Q = l.contextType;
      typeof Q == "object" && Q !== null ? Q = Gt(Q) : (Q = Tn(l) ? Pa : gn.current, Q = Ea(r, Q));
      var oe = l.getDerivedStateFromProps, se = typeof oe == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      se || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (T !== u || D !== Q) && ff(r, g, u, Q), Va = !1;
      var ie = r.memoizedState;
      g.state = ie, $c(r, u, g, c), D = r.memoizedState, T !== u || ie !== D || Vn.current || Va ? (typeof oe == "function" && (qd(r, l, oe, u), D = r.memoizedState), (T = Va || gh(r, l, T, u, ie, D, Q)) ? (se || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = D), g.props = u, g.state = D, g.context = Q, u = T) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      g = r.stateNode, ph(n, r), T = r.memoizedProps, Q = r.type === r.elementType ? T : la(r.type, T), g.props = Q, se = r.pendingProps, ie = g.context, D = l.contextType, typeof D == "object" && D !== null ? D = Gt(D) : (D = Tn(l) ? Pa : gn.current, D = Ea(r, D));
      var De = l.getDerivedStateFromProps;
      (oe = typeof De == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (T !== se || ie !== D) && ff(r, g, u, D), Va = !1, ie = r.memoizedState, g.state = ie, $c(r, u, g, c);
      var Ue = r.memoizedState;
      T !== se || ie !== Ue || Vn.current || Va ? (typeof De == "function" && (qd(r, l, De, u), Ue = r.memoizedState), (Q = Va || gh(r, l, Q, u, ie, Ue, D) || !1) ? (oe || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(u, Ue, D), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(u, Ue, D)), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ue), g.props = u, g.state = Ue, g.context = D, u = Q) : (typeof g.componentDidUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return ep(n, r, l, u, d, c);
  }
  function ep(n, r, l, u, c, d) {
    Vs(n, r);
    var g = (r.flags & 128) !== 0;
    if (!u && !g) return c && Dr(r, l, !1), pr(n, r, d);
    u = r.stateNode, To.current = r;
    var T = g && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && g ? (r.child = oi(r, n.child, null, d), r.child = oi(r, null, T, d)) : Nn(n, r, T, d), r.memoizedState = u.state, c && Dr(r, l, !0), r.child;
  }
  function hf(n) {
    var r = n.stateNode;
    r.pendingContext ? Hc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hc(n, r.context, !1), $d(n, r.containerInfo);
  }
  function _u(n, r, l, u, c) {
    return Zi(), _s(c), r.flags |= 256, Nn(n, r, l, u), r.child;
  }
  var tp = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function xh(n, r, l) {
    var u = r.pendingProps, c = Sn.current, d = !1, g = (r.flags & 128) !== 0, T;
    if ((T = g) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ln(Sn, c & 1), n === null)
      return Ad(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (g = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, g = { mode: "hidden", children: g }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = g) : d = zu(g, u, 0, null), n = Hl(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = mf(l), r.memoizedState = tp, n) : Hs(r, g));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null)) return Rh(n, r, g, u, T, c, l);
    if (d) {
      d = u.fallback, g = r.mode, c = n.child, T = c.sibling;
      var D = { mode: "hidden", children: u.children };
      return !(g & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = D, r.deletions = null) : (u = Vl(c, D), u.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = Vl(T, d) : (d = Hl(d, g, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, g = n.child.memoizedState, g = g === null ? mf(l) : { baseLanes: g.baseLanes | l, cachePool: null, transitions: g.transitions }, d.memoizedState = g, d.childLanes = n.childLanes & ~l, r.memoizedState = tp, u;
    }
    return d = n.child, n = d.sibling, u = Vl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Hs(n, r) {
    return r = zu({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function yf(n, r, l, u) {
    return u !== null && _s(u), oi(r, n.child, null, l), n = Hs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Rh(n, r, l, u, c, d, g) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = df(Error(S(422))), yf(n, r, g, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = zu({ mode: "visible", children: u.children }, c, 0, null), d = Hl(d, c, g, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && oi(r, n.child, null, g), r.child.memoizedState = mf(g), r.memoizedState = tp, d);
    if (!(r.mode & 1)) return yf(n, r, g, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var T = u.dgst;
      return u = T, d = Error(S(419)), u = df(d, u, void 0), yf(n, r, g, u);
    }
    if (T = (g & n.childLanes) !== 0, ir || T) {
      if (u = In, u !== null) {
        switch (g & -g) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | g) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, bi(n, c), Ta(u, n, c, -1));
      }
      return sp(), u = df(Error(S(421))), yf(n, r, g, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Xy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ra = ai(c.nextSibling), na = r, hn = !0, li = null, n !== null && (fr[Hn++] = Fr, fr[Hn++] = Ri, fr[Hn++] = go, Fr = n.id, Ri = n.overflow, go = r), r = Hs(r, u.children), r.flags |= 4096, r);
  }
  function np(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Hd(n.return, r, l);
  }
  function gf(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function ua(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (Nn(n, r, u.children, l), u = Sn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && np(n, l, r);
        else if (n.tag === 19) np(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (ln(Sn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Yc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), gf(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Yc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        gf(r, !0, l, null, d);
        break;
      case "together":
        gf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ha(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function pr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), No |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(S(153));
    if (r.child !== null) {
      for (n = r.child, l = Vl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Vl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Sf(n, r, l) {
    switch (r.tag) {
      case 3:
        hf(r), Zi();
        break;
      case 5:
        Yd(r);
        break;
      case 1:
        Tn(r.type) && yo(r);
        break;
      case 4:
        $d(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        ln(Ee, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (ln(Sn, Sn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? xh(n, r, l) : (ln(Sn, Sn.current & 1), n = pr(n, r, l), n !== null ? n.sibling : null);
        ln(Sn, Sn.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return ua(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ln(Sn, Sn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ct(n, r, l);
    }
    return pr(n, r, l);
  }
  var ku, xa, Gn, bh;
  ku = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, xa = function() {
  }, Gn = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Co(Ti.current);
      var d = null;
      switch (l) {
        case "input":
          c = zn(n, c), u = zn(n, u), d = [];
          break;
        case "select":
          c = Ce({}, c, { value: void 0 }), u = Ce({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Zn(n, c), u = Zn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ac);
      }
      dn(l, u);
      var g;
      l = null;
      for (Q in c) if (!u.hasOwnProperty(Q) && c.hasOwnProperty(Q) && c[Q] != null) if (Q === "style") {
        var T = c[Q];
        for (g in T) T.hasOwnProperty(g) && (l || (l = {}), l[g] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (w.hasOwnProperty(Q) ? d || (d = []) : (d = d || []).push(Q, null));
      for (Q in u) {
        var D = u[Q];
        if (T = c != null ? c[Q] : void 0, u.hasOwnProperty(Q) && D !== T && (D != null || T != null)) if (Q === "style") if (T) {
          for (g in T) !T.hasOwnProperty(g) || D && D.hasOwnProperty(g) || (l || (l = {}), l[g] = "");
          for (g in D) D.hasOwnProperty(g) && T[g] !== D[g] && (l || (l = {}), l[g] = D[g]);
        } else l || (d || (d = []), d.push(
          Q,
          l
        )), l = D;
        else Q === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, T = T ? T.__html : void 0, D != null && T !== D && (d = d || []).push(Q, D)) : Q === "children" ? typeof D != "string" && typeof D != "number" || (d = d || []).push(Q, "" + D) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (w.hasOwnProperty(Q) ? (D != null && Q === "onScroll" && $t("scroll", n), d || T === D || (d = [])) : (d = d || []).push(Q, D));
      }
      l && (d = d || []).push("style", l);
      var Q = d;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, bh = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function Bs(n, r) {
    if (!hn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function Or(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function rp(n, r, l) {
    var u = r.pendingProps;
    switch (Bc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Or(r), null;
      case 1:
        return Tn(r.type) && xi(), Or(r), null;
      case 3:
        return u = r.stateNode, xu(), Qt(Vn), Qt(gn), Os(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Dn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, li !== null && (Xs(li), li = null))), xa(n, r), Or(r), null;
      case 5:
        Wd(r);
        var c = Co(Ns.current);
        if (l = r.type, n !== null && r.stateNode != null) Gn(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(S(166));
            return Or(r), null;
          }
          if (n = Co(Ti.current), Dn(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Fa] = r, u[Rs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                $t("cancel", u), $t("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < gs.length; c++) $t(gs[c], u);
                break;
              case "source":
                $t("error", u);
                break;
              case "img":
              case "image":
              case "link":
                $t(
                  "error",
                  u
                ), $t("load", u);
                break;
              case "details":
                $t("toggle", u);
                break;
              case "input":
                br(u, d), $t("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, $t("invalid", u);
                break;
              case "textarea":
                er(u, d), $t("invalid", u);
            }
            dn(l, d), c = null;
            for (var g in d) if (d.hasOwnProperty(g)) {
              var T = d[g];
              g === "children" ? typeof T == "string" ? u.textContent !== T && (d.suppressHydrationWarning !== !0 && zc(u.textContent, T, n), c = ["children", T]) : typeof T == "number" && u.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && zc(
                u.textContent,
                T,
                n
              ), c = ["children", "" + T]) : w.hasOwnProperty(g) && T != null && g === "onScroll" && $t("scroll", u);
            }
            switch (l) {
              case "input":
                Un(u), ha(u, d, !0);
                break;
              case "textarea":
                Un(u), Za(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Ac);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Fn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = g.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = g.createElement(l, { is: u.is }) : (n = g.createElement(l), l === "select" && (g = n, u.multiple ? g.multiple = !0 : u.size && (g.size = u.size))) : n = g.createElementNS(n, l), n[Fa] = r, n[Rs] = u, ku(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (g = pn(l, u), l) {
                case "dialog":
                  $t("cancel", n), $t("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $t("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < gs.length; c++) $t(gs[c], n);
                  c = u;
                  break;
                case "source":
                  $t("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  $t(
                    "error",
                    n
                  ), $t("load", n), c = u;
                  break;
                case "details":
                  $t("toggle", n), c = u;
                  break;
                case "input":
                  br(n, u), c = zn(n, u), $t("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = Ce({}, u, { value: void 0 }), $t("invalid", n);
                  break;
                case "textarea":
                  er(n, u), c = Zn(n, u), $t("invalid", n);
                  break;
                default:
                  c = u;
              }
              dn(l, c), T = c;
              for (d in T) if (T.hasOwnProperty(d)) {
                var D = T[d];
                d === "style" ? Ft(n, D) : d === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && Fi(n, D)) : d === "children" ? typeof D == "string" ? (l !== "textarea" || D !== "") && ma(n, D) : typeof D == "number" && ma(n, "" + D) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (w.hasOwnProperty(d) ? D != null && d === "onScroll" && $t("scroll", n) : D != null && me(n, d, D, g));
              }
              switch (l) {
                case "input":
                  Un(n), ha(n, u, !1);
                  break;
                case "textarea":
                  Un(n), Za(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + it(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Wn(n, !!u.multiple, d, !1) : u.defaultValue != null && Wn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ac);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Or(r), null;
      case 6:
        if (n && r.stateNode != null) bh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(S(166));
          if (l = Co(Ns.current), Co(Ti.current), Dn(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Fa] = r, (d = u.nodeValue !== l) && (n = na, n !== null)) switch (n.tag) {
              case 3:
                zc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && zc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Fa] = r, r.stateNode = u;
        }
        return Or(r), null;
      case 13:
        if (Qt(Sn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ra !== null && r.mode & 1 && !(r.flags & 128)) sh(), Zi(), r.flags |= 98560, d = !1;
          else if (d = Dn(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(S(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(S(317));
              d[Fa] = r;
            } else Zi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Or(r), d = !1;
          } else li !== null && (Xs(li), li = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? qn === 0 && (qn = 3) : sp())), r.updateQueue !== null && (r.flags |= 4), Or(r), null);
      case 4:
        return xu(), xa(n, r), n === null && Es(r.stateNode.containerInfo), Or(r), null;
      case 10:
        return Vd(r.type._context), Or(r), null;
      case 17:
        return Tn(r.type) && xi(), Or(r), null;
      case 19:
        if (Qt(Sn), d = r.memoizedState, d === null) return Or(r), null;
        if (u = (r.flags & 128) !== 0, g = d.rendering, g === null) if (u) Bs(d, !1);
        else {
          if (qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (g = Yc(n), g !== null) {
              for (r.flags |= 128, Bs(d, !1), u = g.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, g = d.alternate, g === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = g.childLanes, d.lanes = g.lanes, d.child = g.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = g.memoizedProps, d.memoizedState = g.memoizedState, d.updateQueue = g.updateQueue, d.type = g.type, n = g.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return ln(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Vt() > ju && (r.flags |= 128, u = !0, Bs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Yc(g), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Bs(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !hn) return Or(r), null;
          } else 2 * Vt() - d.renderingStartTime > ju && l !== 1073741824 && (r.flags |= 128, u = !0, Bs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (g.sibling = r.child, r.child = g) : (l = d.last, l !== null ? l.sibling = g : r.child = g, d.last = g);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Vt(), r.sibling = null, l = Sn.current, ln(Sn, u ? l & 1 | 2 : l & 1), r) : (Or(r), null);
      case 22:
      case 23:
        return up(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Ra & 1073741824 && (Or(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Or(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, r.tag));
  }
  function Th(n, r) {
    switch (Bc(r), r.tag) {
      case 1:
        return Tn(r.type) && xi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xu(), Qt(Vn), Qt(gn), Os(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Wd(r), null;
      case 13:
        if (Qt(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(S(340));
          Zi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qt(Sn), null;
      case 4:
        return xu(), null;
      case 10:
        return Vd(r.type._context), null;
      case 22:
      case 23:
        return up(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _o = !1, vr = !1, Wy = typeof WeakSet == "function" ? WeakSet : Set, je = null;
  function zl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      wn(n, r, u);
    }
    else l.current = null;
  }
  function ap(n, r, l) {
    try {
      l();
    } catch (u) {
      wn(n, r, u);
    }
  }
  var ip = !1;
  function Qy(n, r) {
    if (vo = El, n = Rl(), su(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var g = 0, T = -1, D = -1, Q = 0, oe = 0, se = n, ie = null;
          t: for (; ; ) {
            for (var De; se !== l || c !== 0 && se.nodeType !== 3 || (T = g + c), se !== d || u !== 0 && se.nodeType !== 3 || (D = g + u), se.nodeType === 3 && (g += se.nodeValue.length), (De = se.firstChild) !== null; )
              ie = se, se = De;
            for (; ; ) {
              if (se === n) break t;
              if (ie === l && ++Q === c && (T = g), ie === d && ++oe === u && (D = g), (De = se.nextSibling) !== null) break;
              se = ie, ie = se.parentNode;
            }
            se = De;
          }
          l = T === -1 || D === -1 ? null : { start: T, end: D };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (xs = { focusedElem: n, selectionRange: l }, El = !1, je = r; je !== null; ) if (r = je, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, je = n;
    else for (; je !== null; ) {
      r = je;
      try {
        var Ue = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ue !== null) {
              var Ae = Ue.memoizedProps, jn = Ue.memoizedState, A = r.stateNode, L = A.getSnapshotBeforeUpdate(r.elementType === r.type ? Ae : la(r.type, Ae), jn);
              A.__reactInternalSnapshotBeforeUpdate = L;
            }
            break;
          case 3:
            var I = r.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(S(163));
        }
      } catch (de) {
        wn(r, r.return, de);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, je = n;
        break;
      }
      je = r.return;
    }
    return Ue = ip, ip = !1, Ue;
  }
  function Du(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && ap(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Ef(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Cf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function wh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, wh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[Rs], delete r[Nd], delete r[Od], delete r[yu])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function xf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Is(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || xf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function wi(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ac));
    else if (u !== 4 && (n = n.child, n !== null)) for (wi(n, r, l), n = n.sibling; n !== null; ) wi(n, r, l), n = n.sibling;
  }
  function _i(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  var En = null, Pr = !1;
  function Ba(n, r, l) {
    for (l = l.child; l !== null; ) tl(n, r, l), l = l.sibling;
  }
  function tl(n, r, l) {
    if (Xr && typeof Xr.onCommitFiberUnmount == "function") try {
      Xr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        vr || zl(l, r);
      case 6:
        var u = En, c = Pr;
        En = null, Ba(n, r, l), En = u, Pr = c, En !== null && (Pr ? (n = En, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : En.removeChild(l.stateNode));
        break;
      case 18:
        En !== null && (Pr ? (n = En, l = l.stateNode, n.nodeType === 8 ? hu(n.parentNode, l) : n.nodeType === 1 && hu(n, l), Ua(n)) : hu(En, l.stateNode));
        break;
      case 4:
        u = En, c = Pr, En = l.stateNode.containerInfo, Pr = !0, Ba(n, r, l), En = u, Pr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, g = d.destroy;
            d = d.tag, g !== void 0 && (d & 2 || d & 4) && ap(l, r, g), c = c.next;
          } while (c !== u);
        }
        Ba(n, r, l);
        break;
      case 1:
        if (!vr && (zl(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (T) {
          wn(l, r, T);
        }
        Ba(n, r, l);
        break;
      case 21:
        Ba(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (vr = (u = vr) || l.memoizedState !== null, Ba(n, r, l), vr = u) : Ba(n, r, l);
        break;
      default:
        Ba(n, r, l);
    }
  }
  function _h(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Wy()), r.forEach(function(u) {
        var c = Jy.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function ui(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var c = l[u];
      try {
        var d = n, g = r, T = g;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 5:
              En = T.stateNode, Pr = !1;
              break e;
            case 3:
              En = T.stateNode.containerInfo, Pr = !0;
              break e;
            case 4:
              En = T.stateNode.containerInfo, Pr = !0;
              break e;
          }
          T = T.return;
        }
        if (En === null) throw Error(S(160));
        tl(d, g, c), En = null, Pr = !1;
        var D = c.alternate;
        D !== null && (D.return = null), c.return = null;
      } catch (Q) {
        wn(c, r, Q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) kh(r, n), r = r.sibling;
  }
  function kh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ui(r, n), si(n), u & 4) {
          try {
            Du(3, n, n.return), Ef(3, n);
          } catch (Ae) {
            wn(n, n.return, Ae);
          }
          try {
            Du(5, n, n.return);
          } catch (Ae) {
            wn(n, n.return, Ae);
          }
        }
        break;
      case 1:
        ui(r, n), si(n), u & 512 && l !== null && zl(l, l.return);
        break;
      case 5:
        if (ui(r, n), si(n), u & 512 && l !== null && zl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ma(c, "");
          } catch (Ae) {
            wn(n, n.return, Ae);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, g = l !== null ? l.memoizedProps : d, T = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null) try {
            T === "input" && d.type === "radio" && d.name != null && Yn(c, d), pn(T, g);
            var Q = pn(T, d);
            for (g = 0; g < D.length; g += 2) {
              var oe = D[g], se = D[g + 1];
              oe === "style" ? Ft(c, se) : oe === "dangerouslySetInnerHTML" ? Fi(c, se) : oe === "children" ? ma(c, se) : me(c, oe, se, Q);
            }
            switch (T) {
              case "input":
                An(c, d);
                break;
              case "textarea":
                Tr(c, d);
                break;
              case "select":
                var ie = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var De = d.value;
                De != null ? Wn(c, !!d.multiple, De, !1) : ie !== !!d.multiple && (d.defaultValue != null ? Wn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Wn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Rs] = d;
          } catch (Ae) {
            wn(n, n.return, Ae);
          }
        }
        break;
      case 6:
        if (ui(r, n), si(n), u & 4) {
          if (n.stateNode === null) throw Error(S(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ae) {
            wn(n, n.return, Ae);
          }
        }
        break;
      case 3:
        if (ui(r, n), si(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ua(r.containerInfo);
        } catch (Ae) {
          wn(n, n.return, Ae);
        }
        break;
      case 4:
        ui(r, n), si(n);
        break;
      case 13:
        ui(r, n), si(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (op = Vt())), u & 4 && _h(n);
        break;
      case 22:
        if (oe = l !== null && l.memoizedState !== null, n.mode & 1 ? (vr = (Q = vr) || oe, ui(r, n), vr = Q) : ui(r, n), si(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !oe && n.mode & 1) for (je = n, oe = n.child; oe !== null; ) {
            for (se = je = oe; je !== null; ) {
              switch (ie = je, De = ie.child, ie.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Du(4, ie, ie.return);
                  break;
                case 1:
                  zl(ie, ie.return);
                  var Ue = ie.stateNode;
                  if (typeof Ue.componentWillUnmount == "function") {
                    u = ie, l = ie.return;
                    try {
                      r = u, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                    } catch (Ae) {
                      wn(u, l, Ae);
                    }
                  }
                  break;
                case 5:
                  zl(ie, ie.return);
                  break;
                case 22:
                  if (ie.memoizedState !== null) {
                    Nh(se);
                    continue;
                  }
              }
              De !== null ? (De.return = ie, je = De) : Nh(se);
            }
            oe = oe.sibling;
          }
          e: for (oe = null, se = n; ; ) {
            if (se.tag === 5) {
              if (oe === null) {
                oe = se;
                try {
                  c = se.stateNode, Q ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = se.stateNode, D = se.memoizedProps.style, g = D != null && D.hasOwnProperty("display") ? D.display : null, T.style.display = ft("display", g));
                } catch (Ae) {
                  wn(n, n.return, Ae);
                }
              }
            } else if (se.tag === 6) {
              if (oe === null) try {
                se.stateNode.nodeValue = Q ? "" : se.memoizedProps;
              } catch (Ae) {
                wn(n, n.return, Ae);
              }
            } else if ((se.tag !== 22 && se.tag !== 23 || se.memoizedState === null || se === n) && se.child !== null) {
              se.child.return = se, se = se.child;
              continue;
            }
            if (se === n) break e;
            for (; se.sibling === null; ) {
              if (se.return === null || se.return === n) break e;
              oe === se && (oe = null), se = se.return;
            }
            oe === se && (oe = null), se.sibling.return = se.return, se = se.sibling;
          }
        }
        break;
      case 19:
        ui(r, n), si(n), u & 4 && _h(n);
        break;
      case 21:
        break;
      default:
        ui(
          r,
          n
        ), si(n);
    }
  }
  function si(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (xf(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(S(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (ma(c, ""), u.flags &= -33);
            var d = Is(n);
            _i(n, d, c);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, T = Is(n);
            wi(n, T, g);
            break;
          default:
            throw Error(S(161));
        }
      } catch (D) {
        wn(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function $s(n, r, l) {
    je = n, Dh(n);
  }
  function Dh(n, r, l) {
    for (var u = (n.mode & 1) !== 0; je !== null; ) {
      var c = je, d = c.child;
      if (c.tag === 22 && u) {
        var g = c.memoizedState !== null || _o;
        if (!g) {
          var T = c.alternate, D = T !== null && T.memoizedState !== null || vr;
          T = _o;
          var Q = vr;
          if (_o = g, (vr = D) && !Q) for (je = c; je !== null; ) g = je, D = g.child, g.tag === 22 && g.memoizedState !== null ? Ys(c) : D !== null ? (D.return = g, je = D) : Ys(c);
          for (; d !== null; ) je = d, Dh(d), d = d.sibling;
          je = c, _o = T, vr = Q;
        }
        lp(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, je = d) : lp(n);
    }
  }
  function lp(n) {
    for (; je !== null; ) {
      var r = je;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              vr || Ef(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !vr) if (l === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : la(r.type, l.memoizedProps);
                u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Id(r, d, u);
              break;
            case 3:
              var g = r.updateQueue;
              if (g !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Id(r, g, l);
              }
              break;
            case 5:
              var T = r.stateNode;
              if (l === null && r.flags & 4) {
                l = T;
                var D = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    D.autoFocus && l.focus();
                    break;
                  case "img":
                    D.src && (l.src = D.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var Q = r.alternate;
                if (Q !== null) {
                  var oe = Q.memoizedState;
                  if (oe !== null) {
                    var se = oe.dehydrated;
                    se !== null && Ua(se);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
          vr || r.flags & 512 && Cf(r);
        } catch (ie) {
          wn(r, r.return, ie);
        }
      }
      if (r === n) {
        je = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, je = l;
        break;
      }
      je = r.return;
    }
  }
  function Nh(n) {
    for (; je !== null; ) {
      var r = je;
      if (r === n) {
        je = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, je = l;
        break;
      }
      je = r.return;
    }
  }
  function Ys(n) {
    for (; je !== null; ) {
      var r = je;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ef(4, r);
            } catch (D) {
              wn(r, l, D);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (D) {
                wn(r, c, D);
              }
            }
            var d = r.return;
            try {
              Cf(r);
            } catch (D) {
              wn(r, d, D);
            }
            break;
          case 5:
            var g = r.return;
            try {
              Cf(r);
            } catch (D) {
              wn(r, g, D);
            }
        }
      } catch (D) {
        wn(r, r.return, D);
      }
      if (r === n) {
        je = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, je = T;
        break;
      }
      je = r.return;
    }
  }
  var Oh = Math.ceil, Rf = ve.ReactCurrentDispatcher, ko = ve.ReactCurrentOwner, jr = ve.ReactCurrentBatchConfig, xt = 0, In = null, On = null, hr = 0, Ra = 0, Nu = ta(0), qn = 0, Do = null, No = 0, Oo = 0, Ws = 0, Ou = null, sa = null, op = 0, ju = 1 / 0, nl = null, Al = !1, Qs = null, Ia = null, bf = !1, Fl = null, Gs = 0, Lu = 0, Mu = null, jo = -1, qs = 0;
  function on() {
    return xt & 6 ? Vt() : jo !== -1 ? jo : jo = Vt();
  }
  function ba(n) {
    return n.mode & 1 ? xt & 2 && hr !== 0 ? hr & -hr : So.transition !== null ? (qs === 0 && (qs = ao()), qs) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : us(n.type)), n) : 1;
  }
  function Ta(n, r, l, u) {
    if (50 < Lu) throw Lu = 0, Mu = null, Error(S(185));
    Sl(n, l, u), (!(xt & 2) || n !== In) && (n === In && (!(xt & 2) && (Oo |= l), qn === 4 && Pl(n, hr)), lr(n, u), l === 1 && xt === 0 && !(r.mode & 1) && (ju = Vt() + 500, Ts && Ar()));
  }
  function lr(n, r) {
    var l = n.callbackNode;
    Jo(n, r);
    var u = yi(n, n === In ? hr : 0);
    if (u === 0) l !== null && vn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && vn(l), r === 1) n.tag === 0 ? jd(Zs.bind(null, n)) : Tl(Zs.bind(null, n)), Iy(function() {
        !(xt & 6) && Ar();
      }), l = null;
      else {
        switch (os(u)) {
          case 1:
            l = ot;
            break;
          case 4:
            l = mi;
            break;
          case 16:
            l = Bi;
            break;
          case 536870912:
            l = Ii;
            break;
          default:
            l = Bi;
        }
        l = Ah(l, jh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function jh(n, r) {
    if (jo = -1, qs = 0, xt & 6) throw Error(S(327));
    var l = n.callbackNode;
    if (Uu() && n.callbackNode !== l) return null;
    var u = yi(n, n === In ? hr : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = _f(n, u);
    else {
      r = u;
      var c = xt;
      xt |= 2;
      var d = Lh();
      (In !== n || hr !== r) && (nl = null, ju = Vt() + 500, Mo(n, r));
      do
        try {
          qy();
          break;
        } catch (T) {
          wf(n, T);
        }
      while (!0);
      Pd(), Rf.current = d, xt = c, On !== null ? r = 0 : (In = null, hr = 0, r = qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Yi(n), c !== 0 && (u = c, r = Ks(n, c))), r === 1) throw l = Do, Mo(n, 0), Pl(n, u), lr(n, Vt()), l;
      if (r === 6) Pl(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Js(c) && (r = _f(n, u), r === 2 && (d = Yi(n), d !== 0 && (u = d, r = Ks(n, d))), r === 1)) throw l = Do, Mo(n, 0), Pl(n, u), lr(n, Vt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            Uo(n, sa, nl);
            break;
          case 3:
            if (Pl(n, u), (u & 130023424) === u && (r = op + 500 - Vt(), 10 < r)) {
              if (yi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                on(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Fc(Uo.bind(null, n, sa, nl), r);
              break;
            }
            Uo(n, sa, nl);
            break;
          case 4:
            if (Pl(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var g = 31 - Mr(u);
              d = 1 << g, g = r[g], g > c && (c = g), u &= ~d;
            }
            if (u = c, u = Vt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Oh(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Fc(Uo.bind(null, n, sa, nl), u);
              break;
            }
            Uo(n, sa, nl);
            break;
          case 5:
            Uo(n, sa, nl);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return lr(n, Vt()), n.callbackNode === l ? jh.bind(null, n) : null;
  }
  function Ks(n, r) {
    var l = Ou;
    return n.current.memoizedState.isDehydrated && (Mo(n, r).flags |= 256), n = _f(n, r), n !== 2 && (r = sa, sa = l, r !== null && Xs(r)), n;
  }
  function Xs(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function Js(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var c = l[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ri(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Pl(n, r) {
    for (r &= ~Ws, r &= ~Oo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Mr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Zs(n) {
    if (xt & 6) throw Error(S(327));
    Uu();
    var r = yi(n, 0);
    if (!(r & 1)) return lr(n, Vt()), null;
    var l = _f(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Yi(n);
      u !== 0 && (r = u, l = Ks(n, u));
    }
    if (l === 1) throw l = Do, Mo(n, 0), Pl(n, r), lr(n, Vt()), l;
    if (l === 6) throw Error(S(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Uo(n, sa, nl), lr(n, Vt()), null;
  }
  function Tf(n, r) {
    var l = xt;
    xt |= 1;
    try {
      return n(r);
    } finally {
      xt = l, xt === 0 && (ju = Vt() + 500, Ts && Ar());
    }
  }
  function Lo(n) {
    Fl !== null && Fl.tag === 0 && !(xt & 6) && Uu();
    var r = xt;
    xt |= 1;
    var l = jr.transition, u = Ot;
    try {
      if (jr.transition = null, Ot = 1, n) return n();
    } finally {
      Ot = u, jr.transition = l, xt = r, !(xt & 6) && Ar();
    }
  }
  function up() {
    Ra = Nu.current, Qt(Nu);
  }
  function Mo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ih(l)), On !== null) for (l = On.return; l !== null; ) {
      var u = l;
      switch (Bc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && xi();
          break;
        case 3:
          xu(), Qt(Vn), Qt(gn), Os();
          break;
        case 5:
          Wd(u);
          break;
        case 4:
          xu();
          break;
        case 13:
          Qt(Sn);
          break;
        case 19:
          Qt(Sn);
          break;
        case 10:
          Vd(u.type._context);
          break;
        case 22:
        case 23:
          up();
      }
      l = l.return;
    }
    if (In = n, On = n = Vl(n.current, null), hr = Ra = r, qn = 0, Do = null, Ws = Oo = No = 0, sa = Ou = null, Eo !== null) {
      for (r = 0; r < Eo.length; r++) if (l = Eo[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var c = u.next, d = l.pending;
        if (d !== null) {
          var g = d.next;
          d.next = c, u.next = g;
        }
        l.pending = u;
      }
      Eo = null;
    }
    return n;
  }
  function wf(n, r) {
    do {
      var l = On;
      try {
        if (Pd(), He.current = qt, Wc) {
          for (var u = ut.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Wc = !1;
        }
        if (_t = 0, Qn = tn = ut = null, js = !1, Ls = 0, ko.current = null, l === null || l.return === null) {
          qn = 1, Do = r, On = null;
          break;
        }
        e: {
          var d = n, g = l.return, T = l, D = r;
          if (r = hr, T.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var Q = D, oe = T, se = oe.tag;
            if (!(oe.mode & 1) && (se === 0 || se === 11 || se === 15)) {
              var ie = oe.alternate;
              ie ? (oe.updateQueue = ie.updateQueue, oe.memoizedState = ie.memoizedState, oe.lanes = ie.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
            }
            var De = Zd(g);
            if (De !== null) {
              De.flags &= -257, Ch(De, g, T, d, r), De.mode & 1 && Jd(d, Q, r), r = De, D = Q;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var Ae = /* @__PURE__ */ new Set();
                Ae.add(D), r.updateQueue = Ae;
              } else Ue.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                Jd(d, Q, r), sp();
                break e;
              }
              D = Error(S(426));
            }
          } else if (hn && T.mode & 1) {
            var jn = Zd(g);
            if (jn !== null) {
              !(jn.flags & 65536) && (jn.flags |= 256), Ch(jn, g, T, d, r), _s(Ul(D, T));
              break e;
            }
          }
          d = D = Ul(D, T), qn !== 4 && (qn = 2), Ou === null ? Ou = [d] : Ou.push(d), d = g;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var A = Ps(d, D, r);
                vh(d, A);
                break e;
              case 1:
                T = D;
                var L = d.type, I = d.stateNode;
                if (!(d.flags & 128) && (typeof L.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Ia === null || !Ia.has(I)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var de = Eh(d, T, r);
                  vh(d, de);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Mh(l);
      } catch (we) {
        r = we, On === l && l !== null && (On = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Lh() {
    var n = Rf.current;
    return Rf.current = qt, n === null ? qt : n;
  }
  function sp() {
    (qn === 0 || qn === 3 || qn === 2) && (qn = 4), In === null || !(No & 268435455) && !(Oo & 268435455) || Pl(In, hr);
  }
  function _f(n, r) {
    var l = xt;
    xt |= 2;
    var u = Lh();
    (In !== n || hr !== r) && (nl = null, Mo(n, r));
    do
      try {
        Gy();
        break;
      } catch (c) {
        wf(n, c);
      }
    while (!0);
    if (Pd(), xt = l, Rf.current = u, On !== null) throw Error(S(261));
    return In = null, hr = 0, qn;
  }
  function Gy() {
    for (; On !== null; ) cp(On);
  }
  function qy() {
    for (; On !== null && !wr(); ) cp(On);
  }
  function cp(n) {
    var r = dp(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, r === null ? Mh(n) : On = r, ko.current = null;
  }
  function Mh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Th(l, r), l !== null) {
          l.flags &= 32767, On = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qn = 6, On = null;
          return;
        }
      } else if (l = rp(l, r, Ra), l !== null) {
        On = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        On = r;
        return;
      }
      On = r = n;
    } while (r !== null);
    qn === 0 && (qn = 5);
  }
  function Uo(n, r, l) {
    var u = Ot, c = jr.transition;
    try {
      jr.transition = null, Ot = 1, Ky(n, r, l, u);
    } finally {
      jr.transition = c, Ot = u;
    }
    return null;
  }
  function Ky(n, r, l, u) {
    do
      Uu();
    while (Fl !== null);
    if (xt & 6) throw Error(S(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(S(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (is(n, d), n === In && (On = In = null, hr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || bf || (bf = !0, Ah(Bi, function() {
      return Uu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = jr.transition, jr.transition = null;
      var g = Ot;
      Ot = 1;
      var T = xt;
      xt |= 4, ko.current = null, Qy(n, l), kh(l, n), Kv(xs), El = !!vo, xs = vo = null, n.current = l, $s(l), ei(), xt = T, Ot = g, jr.transition = d;
    } else n.current = l;
    if (bf && (bf = !1, Fl = n, Gs = c), d = n.pendingLanes, d === 0 && (Ia = null), rs(l.stateNode), lr(n, Vt()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Al) throw Al = !1, n = Qs, Qs = null, n;
    return Gs & 1 && n.tag !== 0 && Uu(), d = n.pendingLanes, d & 1 ? n === Mu ? Lu++ : (Lu = 0, Mu = n) : Lu = 0, Ar(), null;
  }
  function Uu() {
    if (Fl !== null) {
      var n = os(Gs), r = jr.transition, l = Ot;
      try {
        if (jr.transition = null, Ot = 16 > n ? 16 : n, Fl === null) var u = !1;
        else {
          if (n = Fl, Fl = null, Gs = 0, xt & 6) throw Error(S(331));
          var c = xt;
          for (xt |= 4, je = n.current; je !== null; ) {
            var d = je, g = d.child;
            if (je.flags & 16) {
              var T = d.deletions;
              if (T !== null) {
                for (var D = 0; D < T.length; D++) {
                  var Q = T[D];
                  for (je = Q; je !== null; ) {
                    var oe = je;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Du(8, oe, d);
                    }
                    var se = oe.child;
                    if (se !== null) se.return = oe, je = se;
                    else for (; je !== null; ) {
                      oe = je;
                      var ie = oe.sibling, De = oe.return;
                      if (wh(oe), oe === Q) {
                        je = null;
                        break;
                      }
                      if (ie !== null) {
                        ie.return = De, je = ie;
                        break;
                      }
                      je = De;
                    }
                  }
                }
                var Ue = d.alternate;
                if (Ue !== null) {
                  var Ae = Ue.child;
                  if (Ae !== null) {
                    Ue.child = null;
                    do {
                      var jn = Ae.sibling;
                      Ae.sibling = null, Ae = jn;
                    } while (Ae !== null);
                  }
                }
                je = d;
              }
            }
            if (d.subtreeFlags & 2064 && g !== null) g.return = d, je = g;
            else e: for (; je !== null; ) {
              if (d = je, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Du(9, d, d.return);
              }
              var A = d.sibling;
              if (A !== null) {
                A.return = d.return, je = A;
                break e;
              }
              je = d.return;
            }
          }
          var L = n.current;
          for (je = L; je !== null; ) {
            g = je;
            var I = g.child;
            if (g.subtreeFlags & 2064 && I !== null) I.return = g, je = I;
            else e: for (g = L; je !== null; ) {
              if (T = je, T.flags & 2048) try {
                switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ef(9, T);
                }
              } catch (we) {
                wn(T, T.return, we);
              }
              if (T === g) {
                je = null;
                break e;
              }
              var de = T.sibling;
              if (de !== null) {
                de.return = T.return, je = de;
                break e;
              }
              je = T.return;
            }
          }
          if (xt = c, Ar(), Xr && typeof Xr.onPostCommitFiberRoot == "function") try {
            Xr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Ot = l, jr.transition = r;
      }
    }
    return !1;
  }
  function Uh(n, r, l) {
    r = Ul(l, r), r = Ps(n, r, 1), n = Ol(n, r, 1), r = on(), n !== null && (Sl(n, 1, r), lr(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3) Uh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Uh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ia === null || !Ia.has(u))) {
          n = Ul(l, n), n = Eh(r, n, 1), r = Ol(r, n, 1), n = on(), r !== null && (Sl(r, 1, n), lr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function fp(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = on(), n.pingedLanes |= n.suspendedLanes & l, In === n && (hr & l) === l && (qn === 4 || qn === 3 && (hr & 130023424) === hr && 500 > Vt() - op ? Mo(n, 0) : Ws |= l), lr(n, r);
  }
  function zh(n, r) {
    r === 0 && (n.mode & 1 ? (r = yl, yl <<= 1, !(yl & 130023424) && (yl = 4194304)) : r = 1);
    var l = on();
    n = bi(n, r), n !== null && (Sl(n, r, l), lr(n, l));
  }
  function Xy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), zh(n, l);
  }
  function Jy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    u !== null && u.delete(r), zh(n, l);
  }
  var dp;
  dp = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Vn.current) ir = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return ir = !1, Sf(n, r, l);
      ir = !!(n.flags & 131072);
    }
    else ir = !1, hn && r.flags & 1048576 && oh(r, kl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ha(n, r), n = r.pendingProps;
        var c = Ea(r, gn.current);
        Eu(r, l), c = Ke(null, r, u, n, c, l);
        var d = jl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tn(u) ? (d = !0, yo(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Nl(r), c.updater = cf, r.stateNode = c, c._reactInternals = r, Kd(r, u, n, l), r = ep(null, r, u, !0, d, l)) : (r.tag = 0, hn && d && Ld(r), Nn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ha(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = eg(u), n = la(u, n), c) {
            case 0:
              r = vf(null, r, u, n, l);
              break e;
            case 1:
              r = Yy(null, r, u, n, l);
              break e;
            case 11:
              r = pf(null, r, u, n, l);
              break e;
            case 14:
              r = oa(null, r, u, la(u.type, n), l);
              break e;
          }
          throw Error(S(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), vf(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), Yy(n, r, u, c, l);
      case 3:
        e: {
          if (hf(r), n === null) throw Error(S(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, ph(n, r), $c(r, u, null, l);
          var g = r.memoizedState;
          if (u = g.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ul(Error(S(423)), r), r = _u(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = Ul(Error(S(424)), r), r = _u(n, r, u, l, c);
            break e;
          } else for (ra = ai(r.stateNode.containerInfo.firstChild), na = r, hn = !0, li = null, l = dr(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Zi(), u === c) {
              r = pr(n, r, l);
              break e;
            }
            Nn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Yd(r), n === null && Ad(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, g = c.children, ho(u, c) ? g = null : d !== null && ho(u, d) && (r.flags |= 32), Vs(n, r), Nn(n, r, g, l), r.child;
      case 6:
        return n === null && Ad(r), null;
      case 13:
        return xh(n, r, l);
      case 4:
        return $d(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = oi(r, null, u, l) : Nn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), pf(n, r, u, c, l);
      case 7:
        return Nn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, g = c.value, ln(Ee, u._currentValue), u._currentValue = g, d !== null) if (ri(d.value, g)) {
            if (d.children === c.children && !Vn.current) {
              r = pr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var T = d.dependencies;
            if (T !== null) {
              g = d.child;
              for (var D = T.firstContext; D !== null; ) {
                if (D.context === u) {
                  if (d.tag === 1) {
                    D = el(-1, l & -l), D.tag = 2;
                    var Q = d.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var oe = Q.pending;
                      oe === null ? D.next = D : (D.next = oe.next, oe.next = D), Q.pending = D;
                    }
                  }
                  d.lanes |= l, D = d.alternate, D !== null && (D.lanes |= l), Hd(
                    d.return,
                    l,
                    r
                  ), T.lanes |= l;
                  break;
                }
                D = D.next;
              }
            } else if (d.tag === 10) g = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (g = d.return, g === null) throw Error(S(341));
              g.lanes |= l, T = g.alternate, T !== null && (T.lanes |= l), Hd(g, l, r), g = d.sibling;
            } else g = d.child;
            if (g !== null) g.return = d;
            else for (g = d; g !== null; ) {
              if (g === r) {
                g = null;
                break;
              }
              if (d = g.sibling, d !== null) {
                d.return = g.return, g = d;
                break;
              }
              g = g.return;
            }
            d = g;
          }
          Nn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, Eu(r, l), c = Gt(c), u = u(c), r.flags |= 1, Nn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = la(u, r.pendingProps), c = la(u.type, c), oa(n, r, u, c, l);
      case 15:
        return wo(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), Ha(n, r), r.tag = 1, Tn(u) ? (n = !0, yo(r)) : n = !1, Eu(r, l), Sh(r, u, c), Kd(r, u, c, l), ep(null, r, u, !0, n, l);
      case 19:
        return ua(n, r, l);
      case 22:
        return ct(n, r, l);
    }
    throw Error(S(156, r.tag));
  };
  function Ah(n, r) {
    return cn(n, r);
  }
  function Zy(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, l, u) {
    return new Zy(n, r, l, u);
  }
  function pp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function eg(n) {
    if (typeof n == "function") return pp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Kt) return 11;
      if (n === Bt) return 14;
    }
    return 2;
  }
  function Vl(n, r) {
    var l = n.alternate;
    return l === null ? (l = $a(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function kf(n, r, l, u, c, d) {
    var g = 2;
    if (u = n, typeof n == "function") pp(n) && (g = 1);
    else if (typeof n == "string") g = 5;
    else e: switch (n) {
      case Be:
        return Hl(l.children, c, d, r);
      case We:
        g = 8, c |= 8;
        break;
      case Cn:
        return n = $a(12, l, r, c | 2), n.elementType = Cn, n.lanes = d, n;
      case Tt:
        return n = $a(13, l, r, c), n.elementType = Tt, n.lanes = d, n;
      case qe:
        return n = $a(19, l, r, c), n.elementType = qe, n.lanes = d, n;
      case vt:
        return zu(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Dt:
            g = 10;
            break e;
          case un:
            g = 9;
            break e;
          case Kt:
            g = 11;
            break e;
          case Bt:
            g = 14;
            break e;
          case Rt:
            g = 16, u = null;
            break e;
        }
        throw Error(S(130, n == null ? n : typeof n, ""));
    }
    return r = $a(g, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function Hl(n, r, l, u) {
    return n = $a(7, n, u, r), n.lanes = l, n;
  }
  function zu(n, r, l, u) {
    return n = $a(22, n, u, r), n.elementType = vt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function zo(n, r, l) {
    return n = $a(6, n, null, r), n.lanes = l, n;
  }
  function vp(n, r, l) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Fh(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = io(0), this.expirationTimes = io(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = io(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Df(n, r, l, u, c, d, g, T, D) {
    return n = new Fh(n, r, l, T, D), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = $a(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Nl(d), n;
  }
  function Ph(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ge, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function Vh(n) {
    if (!n) return mt;
    n = n._reactInternals;
    e: {
      if (Te(n) !== n || n.tag !== 1) throw Error(S(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Tn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(S(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Tn(l)) return lh(n, l, r);
    }
    return r;
  }
  function hp(n, r, l, u, c, d, g, T, D) {
    return n = Df(l, u, !0, n, c, d, g, T, D), n.context = Vh(null), l = n.current, u = on(), c = ba(l), d = el(u, c), d.callback = r != null ? r : null, Ol(l, d, c), n.current.lanes = c, Sl(n, c, u), lr(n, u), n;
  }
  function Nf(n, r, l, u) {
    var c = r.current, d = on(), g = ba(c);
    return l = Vh(l), r.context === null ? r.context = l : r.pendingContext = l, r = el(d, g), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ol(c, r, g), n !== null && (Ta(n, c, g, d), Ic(n, c, g)), g;
  }
  function Of(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Hh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function jf(n, r) {
    Hh(n, r), (n = n.alternate) && Hh(n, r);
  }
  function Bh() {
    return null;
  }
  var mp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Bl(n) {
    this._internalRoot = n;
  }
  Lf.prototype.render = Bl.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(S(409));
    Nf(n, r, null, null);
  }, Lf.prototype.unmount = Bl.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lo(function() {
        Nf(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function Lf(n) {
    this._internalRoot = n;
  }
  Lf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ti.length && r !== 0 && r < ti[l].priority; l++) ;
      ti.splice(l, 0, n), l === 0 && eu(n);
    }
  };
  function yp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ih() {
  }
  function tg(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var Q = Of(g);
          d.call(Q);
        };
      }
      var g = hp(r, u, n, 0, null, !1, !1, "", Ih);
      return n._reactRootContainer = g, n[Xi] = g.current, Es(n.nodeType === 8 ? n.parentNode : n), Lo(), g;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var T = u;
      u = function() {
        var Q = Of(D);
        T.call(Q);
      };
    }
    var D = Df(n, 0, !1, null, null, !1, !1, "", Ih);
    return n._reactRootContainer = D, n[Xi] = D.current, Es(n.nodeType === 8 ? n.parentNode : n), Lo(function() {
      Nf(r, D, l, u);
    }), D;
  }
  function Uf(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var g = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var D = Of(g);
          T.call(D);
        };
      }
      Nf(r, g, n, c);
    } else g = tg(l, r, n, c, u);
    return Of(g);
  }
  Zo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Jr(r.pendingLanes);
          l !== 0 && (ls(r, l | 1), lr(r, Vt()), !(xt & 6) && (ju = Vt() + 500, Ar()));
        }
        break;
      case 13:
        Lo(function() {
          var u = bi(n, 1);
          if (u !== null) {
            var c = on();
            Ta(u, n, 1, c);
          }
        }), jf(n, 1);
    }
  }, jt = function(n) {
    if (n.tag === 13) {
      var r = bi(n, 134217728);
      if (r !== null) {
        var l = on();
        Ta(r, n, 134217728, l);
      }
      jf(n, 134217728);
    }
  }, Tc = function(n) {
    if (n.tag === 13) {
      var r = ba(n), l = bi(n, r);
      if (l !== null) {
        var u = on();
        Ta(l, n, r, u);
      }
      jf(n, r);
    }
  }, gi = function() {
    return Ot;
  }, et = function(n, r) {
    var l = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = l;
    }
  }, Xt = function(n, r, l) {
    switch (r) {
      case "input":
        if (An(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Ji(u);
              if (!c) throw Error(S(90));
              Jn(u), An(u, c);
            }
          }
        }
        break;
      case "textarea":
        Tr(n, l);
        break;
      case "select":
        r = l.value, r != null && Wn(n, !!l.multiple, r, !1);
    }
  }, to = Tf, no = Lo;
  var $h = { usingClientEntryPoint: !1, Events: [bs, Ve, Ji, La, Pi, Tf] }, ec = { findFiberByHostInstance: mo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ng = { bundleType: ec.bundleType, version: ec.version, rendererPackageName: ec.rendererPackageName, rendererConfig: ec.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = dt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ec.findFiberByHostInstance || Bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tc.isDisabled && tc.supportsFiber) try {
      ml = tc.inject(ng), Xr = tc;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $h, Ka.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yp(r)) throw Error(S(200));
    return Ph(n, r, null, l);
  }, Ka.createRoot = function(n, r) {
    if (!yp(n)) throw Error(S(299));
    var l = !1, u = "", c = mp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Df(n, 1, !1, null, null, l, !1, u, c), n[Xi] = r.current, Es(n.nodeType === 8 ? n.parentNode : n), new Bl(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(S(188)) : (n = Object.keys(n).join(","), Error(S(268, n)));
    return n = dt(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return Lo(n);
  }, Ka.hydrate = function(n, r, l) {
    if (!Mf(r)) throw Error(S(200));
    return Uf(null, n, r, !0, l);
  }, Ka.hydrateRoot = function(n, r, l) {
    if (!yp(n)) throw Error(S(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", g = mp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (g = l.onRecoverableError)), r = hp(r, null, n, 1, l != null ? l : null, c, !1, d, g), n[Xi] = r.current, Es(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Lf(r);
  }, Ka.render = function(n, r, l) {
    if (!Mf(r)) throw Error(S(200));
    return Uf(null, n, r, !1, l);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!Mf(n)) throw Error(S(40));
    return n._reactRootContainer ? (Lo(function() {
      Uf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = Tf, Ka.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Mf(l)) throw Error(S(200));
    if (n == null || n._reactInternals === void 0) throw Error(S(38));
    return Uf(n, r, l, !1, u);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Xa = {}, ab;
function wD() {
  if (ab) return Xa;
  ab = 1;
  var v = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return v.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var E = ee, S = mb(), b = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = !1;
    function N(e) {
      w = e;
    }
    function O(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        F("warn", e, a);
      }
    }
    function y(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        F("error", e, a);
      }
    }
    function F(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var z = 0, $ = 1, P = 2, B = 3, he = 4, J = 5, ue = 6, le = 7, Pe = 8, fe = 9, me = 10, ve = 11, Re = 12, ge = 13, Be = 14, We = 15, Cn = 16, Dt = 17, un = 18, Kt = 19, Tt = 21, qe = 22, Bt = 23, Rt = 24, vt = 25, re = !0, Me = !1, Ce = !1, U = !1, ne = !1, Ie = !0, Ze = !0, nt = !0, ht = !0, Nt = /* @__PURE__ */ new Set(), it = {}, wt = {};
    function Wt(e, t) {
      Un(e, t), Un(e + "Capture", t);
    }
    function Un(e, t) {
      it[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        wt[a] = e, e === "onDoubleClick" && (wt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Nt.add(t[i]);
    }
    var Jn = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", ur = Object.prototype.hasOwnProperty;
    function zn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function br(e) {
      try {
        return Yn(e), !1;
      } catch {
        return !0;
      }
    }
    function Yn(e) {
      return "" + e;
    }
    function An(e, t) {
      if (br(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, zn(e)), Yn(e);
    }
    function ha(e) {
      if (br(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zn(e)), Yn(e);
    }
    function Ja(e, t) {
      if (br(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, zn(e)), Yn(e);
    }
    function Lr(e, t) {
      if (br(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, zn(e)), Yn(e);
    }
    function Wn(e) {
      if (br(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", zn(e)), Yn(e);
    }
    function Zn(e) {
      if (br(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", zn(e)), Yn(e);
    }
    var er = 0, Tr = 1, Za = 2, Fn = 3, sr = 4, qr = 5, Fi = 6, ma = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ye = ma + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ye = new RegExp("^[" + ma + "][" + ye + "]*$"), ft = {}, Ft = {};
    function fn(e) {
      return ur.call(Ft, e) ? !0 : ur.call(ft, e) ? !1 : Ye.test(e) ? (Ft[e] = !0, !0) : (ft[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === er : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pn(e, t, a, i) {
      if (a !== null && a.type === er)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tr(e, t, a, i) {
      if (t === null || typeof t == "undefined" || pn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Fn:
            return !t;
          case sr:
            return t === !1;
          case qr:
            return isNaN(t);
          case Fi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function sn(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function Xt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Za || t === Fn || t === sr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Pt = {}, ya = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ya.forEach(function(e) {
      Pt[e] = new Xt(
        e,
        er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Pt[t] = new Xt(
        t,
        Tr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Za,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Za,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Fn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Fn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Fi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ja = /[\-\:]([a-z])/g, La = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ja, La);
      Pt[t] = new Xt(
        t,
        Tr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ja, La);
      Pt[t] = new Xt(
        t,
        Tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ja, La);
      Pt[t] = new Xt(
        t,
        Tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Pi = "xlinkHref";
    Pt[Pi] = new Xt(
      "xlinkHref",
      Tr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var to = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, no = !1;
    function Vi(e) {
      !no && to.test(e) && (no = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ro(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        An(a, t), i.sanitizeURL && Vi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : tr(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (tr(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Fn)
            return a;
          f = e.getAttribute(s);
        }
        return tr(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function pi(e, t, a, i) {
      {
        if (!fn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return An(a, t), o === "" + a ? a : o;
      }
    }
    function ga(e, t, a, i) {
      var o = sn(t);
      if (!dn(t, o, i)) {
        if (tr(t, a, o, i) && (a = null), i || o === null) {
          if (fn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (An(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var h = o.type;
            e[p] = h === Fn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var x = o.attributeName, R = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var M = o.type, j;
          M === Fn || M === sr && a === !0 ? j = "" : (An(a, x), j = "" + a, o.sanitizeURL && Vi(j.toString())), R ? e.setAttributeNS(R, x, j) : e.setAttribute(x, j);
        }
      }
    }
    var cr = Symbol.for("react.element"), Sa = Symbol.for("react.portal"), Kr = Symbol.for("react.fragment"), vi = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), Hi = Symbol.for("react.provider"), k = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), xe = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), gt = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), dt = Symbol.for("react.debug_trace_mode"), _n = Symbol.for("react.offscreen"), cn = Symbol.for("react.legacy_hidden"), vn = Symbol.for("react.cache"), wr = Symbol.for("react.tracing_marker"), ei = Symbol.iterator, Vt = "@@iterator";
    function yn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ei && e[ei] || e[Vt];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, mi = 0, Bi, xc, Ii, ml, Xr, rs, Mr;
    function as() {
    }
    as.__reactDisabledLog = !0;
    function Rc() {
      {
        if (mi === 0) {
          Bi = console.log, xc = console.info, Ii = console.warn, ml = console.error, Xr = console.group, rs = console.groupCollapsed, Mr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: as,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        mi++;
      }
    }
    function bc() {
      {
        if (mi--, mi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: Bi
            }),
            info: ot({}, e, {
              value: xc
            }),
            warn: ot({}, e, {
              value: Ii
            }),
            error: ot({}, e, {
              value: ml
            }),
            group: ot({}, e, {
              value: Xr
            }),
            groupCollapsed: ot({}, e, {
              value: rs
            }),
            groupEnd: ot({}, e, {
              value: Mr
            })
          });
        }
        mi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $i = b.ReactCurrentDispatcher, yl;
    function Jr(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var yi = !1, gl;
    {
      var Jo = typeof WeakMap == "function" ? WeakMap : Map;
      gl = new Jo();
    }
    function Yi(e, t) {
      if (!e || yi)
        return "";
      {
        var a = gl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      yi = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = $i.current, $i.current = null, Rc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (G) {
              i = G;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (G) {
              i = G;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            i = G;
          }
          e();
        }
      } catch (G) {
        if (G && i && typeof G.stack == "string") {
          for (var p = G.stack.split(`
`), h = i.stack.split(`
`), x = p.length - 1, R = h.length - 1; x >= 1 && R >= 0 && p[x] !== h[R]; )
            R--;
          for (; x >= 1 && R >= 0; x--, R--)
            if (p[x] !== h[R]) {
              if (x !== 1 || R !== 1)
                do
                  if (x--, R--, R < 0 || p[x] !== h[R]) {
                    var M = `
` + p[x].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && gl.set(e, M), M;
                  }
                while (x >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        yi = !1, $i.current = s, bc(), Error.prepareStackTrace = o;
      }
      var j = e ? e.displayName || e.name : "", W = j ? Jr(j) : "";
      return typeof e == "function" && gl.set(e, W), W;
    }
    function ao(e, t, a) {
      return Yi(e, !0);
    }
    function io(e, t, a) {
      return Yi(e, !1);
    }
    function Sl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function is(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Yi(e, Sl(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case xe:
          return Jr("Suspense");
        case Te:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            return io(e.render);
          case gt:
            return is(e.type, t, a);
          case rt: {
            var i = e, o = i._payload, s = i._init;
            try {
              return is(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ls(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case J:
          return Jr(e.type);
        case Cn:
          return Jr("Lazy");
        case ge:
          return Jr("Suspense");
        case Kt:
          return Jr("SuspenseList");
        case z:
        case P:
        case We:
          return io(e.type);
        case ve:
          return io(e.type.render);
        case $:
          return ao(e.type);
        default:
          return "";
      }
    }
    function Ot(e) {
      try {
        var t = "", a = e;
        do
          t += ls(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function os(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function Zo(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Kr:
          return "Fragment";
        case Sa:
          return "Portal";
        case hi:
          return "Profiler";
        case vi:
          return "StrictMode";
        case xe:
          return "Suspense";
        case Te:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var t = e;
            return Zo(t) + ".Consumer";
          case Hi:
            var a = e;
            return Zo(a._context) + ".Provider";
          case ae:
            return os(e, e.render, "ForwardRef");
          case gt:
            var i = e.displayName || null;
            return i !== null ? i : jt(e.type) || "Memo";
          case rt: {
            var o = e, s = o._payload, f = o._init;
            try {
              return jt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Tc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function gi(e) {
      return e.displayName || "Context";
    }
    function et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Rt:
          return "Cache";
        case fe:
          var i = a;
          return gi(i) + ".Consumer";
        case me:
          var o = a;
          return gi(o._context) + ".Provider";
        case un:
          return "DehydratedFragment";
        case ve:
          return Tc(a, a.render, "ForwardRef");
        case le:
          return "Fragment";
        case J:
          return a;
        case he:
          return "Portal";
        case B:
          return "Root";
        case ue:
          return "Text";
        case Cn:
          return jt(a);
        case Pe:
          return a === vi ? "StrictMode" : "Mode";
        case qe:
          return "Offscreen";
        case Re:
          return "Profiler";
        case Tt:
          return "Scope";
        case ge:
          return "Suspense";
        case Kt:
          return "SuspenseList";
        case vt:
          return "TracingMarker";
        case $:
        case z:
        case Dt:
        case P:
        case Be:
        case We:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var lo = b.ReactDebugCurrentFrame, nr = null, Zr = !1;
    function Ur() {
      {
        if (nr === null)
          return null;
        var e = nr._debugOwner;
        if (e !== null && typeof e != "undefined")
          return et(e);
      }
      return null;
    }
    function Si() {
      return nr === null ? "" : Ot(nr);
    }
    function Rn() {
      lo.getCurrentStack = null, nr = null, Zr = !1;
    }
    function Jt(e) {
      lo.getCurrentStack = e === null ? null : Si, nr = e, Zr = !1;
    }
    function ti() {
      return nr;
    }
    function Ma(e) {
      Zr = e;
    }
    function _r(e) {
      return "" + e;
    }
    function zr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Zn(e), e;
        default:
          return "";
      }
    }
    var md = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function eu(e, t) {
      md[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function oo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tu(e) {
      return e._valueTracker;
    }
    function nu(e) {
      e._valueTracker = null;
    }
    function uo(e) {
      var t = "";
      return e && (oo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ua(e) {
      var t = oo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Zn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a == "undefined" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            Zn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Zn(p), i = "" + p;
          },
          stopTracking: function() {
            nu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function za(e) {
      tu(e) || (e._valueTracker = Ua(e));
    }
    function El(e) {
      if (!e)
        return !1;
      var t = tu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = uo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Wi(e) {
      if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ru = !1, Cl = !1, Qi = !1, au = !1;
    function us(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Aa(e, t) {
      var a = e, i = t.checked, o = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return o;
    }
    function iu(e, t) {
      eu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Cl && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), Cl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ru && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), ru = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: zr(t.value != null ? t.value : i),
        controlled: us(t)
      };
    }
    function m(e, t) {
      var a = e, i = t.checked;
      i != null && ga(a, "checked", i, !1);
    }
    function _(e, t) {
      var a = e;
      {
        var i = us(t);
        !a._wrapperState.controlled && i && !au && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), au = !0), a._wrapperState.controlled && !i && !Qi && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Qi = !0);
      }
      m(e, t);
      var o = zr(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = _r(o)) : a.value !== _r(o) && (a.value = _r(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, o) : t.hasOwnProperty("defaultValue") && Le(a, t.type, zr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Y(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = _r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function q(e, t) {
      var a = e;
      _(a, t), pe(a, t);
    }
    function pe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        An(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = om(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            El(f), _(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Wi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var ke = !1, Xe = !1, pt = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? E.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Xe || (Xe = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pt || (pt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ke && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ke = !0);
    }
    function Zt(e, t) {
      t.value != null && e.setAttribute("value", _r(zr(t.value)));
    }
    var en = Array.isArray;
    function st(e) {
      return en(e);
    }
    var an;
    an = !1;
    function kn() {
      var e = Ur();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var so = ["value", "defaultValue"];
    function ss(e) {
      {
        eu("select", e);
        for (var t = 0; t < so.length; t++) {
          var a = so[t];
          if (e[a] != null) {
            var i = st(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, kn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, kn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var h = 0; h < o.length; h++) {
          var x = f.hasOwnProperty("$" + o[h].value);
          o[h].selected !== x && (o[h].selected = x), x && i && (o[h].defaultSelected = !0);
        }
      } else {
        for (var R = _r(zr(a)), M = null, j = 0; j < o.length; j++) {
          if (o[j].value === R) {
            o[j].selected = !0, i && (o[j].defaultSelected = !0);
            return;
          }
          M === null && !o[j].disabled && (M = o[j]);
        }
        M !== null && (M.selected = !0);
      }
    }
    function co(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function cs(e, t) {
      var a = e;
      ss(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !an && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), an = !0);
    }
    function yd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function wc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Gi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function gd(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var Nv = !1;
    function _c(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: _r(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ov(e, t) {
      var a = e;
      eu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Nv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), Nv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (st(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: zr(i)
      };
    }
    function jv(e, t) {
      var a = e, i = zr(t.value), o = zr(t.defaultValue);
      if (i != null) {
        var s = _r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = _r(o));
    }
    function Lv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Oy(e, t) {
      jv(e, t);
    }
    var ni = "http://www.w3.org/1999/xhtml", jy = "http://www.w3.org/1998/Math/MathML", Sd = "http://www.w3.org/2000/svg";
    function Ed(e) {
      switch (e) {
        case "svg":
          return Sd;
        case "math":
          return jy;
        default:
          return ni;
      }
    }
    function kc(e, t) {
      return e == null || e === ni ? Ed(t) : e === Sd && t === "foreignObject" ? ni : e;
    }
    var Ly = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Dc, Mv = Ly(function(e, t) {
      if (e.namespaceURI === Sd && !("innerHTML" in e)) {
        Dc = Dc || document.createElement("div"), Dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, qi = 3, Pn = 8, Ki = 9, fs = 11, xl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, My = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, lu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var zv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(lu).forEach(function(e) {
      zv.forEach(function(t) {
        lu[Uv(t, e)] = lu[e];
      });
    });
    function Nc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(lu.hasOwnProperty(e) && lu[e]) ? t + "px" : (Lr(t, e), ("" + t).trim());
    }
    var Av = /([A-Z])/g, ou = /^ms-/;
    function Uy(e) {
      return e.replace(Av, "-$1").toLowerCase().replace(ou, "-ms-");
    }
    var Fv = function() {
    };
    {
      var zy = /^(?:webkit|moz|o)[A-Z]/, Pv = /^-ms-/, Vv = /-(.)/g, uu = /;\s*$/, Ei = {}, Cd = {}, ds = !1, Hv = !1, Bv = function(e) {
        return e.replace(Vv, function(t, a) {
          return a.toUpperCase();
        });
      }, xd = function(e) {
        Ei.hasOwnProperty(e) && Ei[e] || (Ei[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Bv(e.replace(Pv, "ms-"))
        ));
      }, Rd = function(e) {
        Ei.hasOwnProperty(e) && Ei[e] || (Ei[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Iv = function(e, t) {
        Cd.hasOwnProperty(t) && Cd[t] || (Cd[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(uu, "")));
      }, $v = function(e, t) {
        ds || (ds = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Yv = function(e, t) {
        Hv || (Hv = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Fv = function(e, t) {
        e.indexOf("-") > -1 ? xd(e) : zy.test(e) ? Rd(e) : uu.test(t) && Iv(e, t), typeof t == "number" && (isNaN(t) ? $v(e, t) : isFinite(t) || Yv(e, t));
      };
    }
    var Ay = Fv;
    function Fy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Uy(i)) + ":", t += Nc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Wv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Ay(i, t[i]);
          var s = Nc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Py(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Qv(e) {
      var t = {};
      for (var a in e)
        for (var i = My[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function ri(e, t) {
      {
        if (!t)
          return;
        var a = Qv(e), i = Qv(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var h = f + "," + p;
            if (o[h])
              continue;
            o[h] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Py(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ps = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Gv = ot({
      menuitem: !0
    }, ps), qv = "__html";
    function Oc(e, t) {
      if (t) {
        if (Gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(qv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Rl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var su = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Kv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, cu = {}, fu = new RegExp("^(aria)-[" + ye + "]*$"), bd = new RegExp("^(aria)[A-Z][" + ye + "]*$");
    function vs(e, t) {
      {
        if (ur.call(cu, t) && cu[t])
          return !0;
        if (bd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Kv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), cu[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), cu[t] = !0, !0;
        }
        if (fu.test(t)) {
          var o = t.toLowerCase(), s = Kv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return cu[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), cu[t] = !0, !0;
        }
      }
      return !0;
    }
    function Td(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = vs(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Xv(e, t) {
      Rl(e, t) || Td(e, t);
    }
    var hs = !1;
    function du(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !hs && (hs = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var jc = function() {
    };
    {
      var kr = {}, ms = /^on./, Jv = /^on[^A-Z]/, Zv = new RegExp("^(aria)-[" + ye + "]*$"), eh = new RegExp("^(aria)[A-Z][" + ye + "]*$");
      jc = function(e, t, a, i) {
        if (ur.call(kr, t) && kr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), kr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), kr[t] = !0, !0;
          if (ms.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), kr[t] = !0, !0;
        } else if (ms.test(t))
          return Jv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), kr[t] = !0, !0;
        if (Zv.test(t) || eh.test(t))
          return !0;
        if (o === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), kr[t] = !0, !0;
        if (o === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), kr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), kr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), kr[t] = !0, !0;
        var h = sn(t), x = h !== null && h.type === er;
        if (su.hasOwnProperty(o)) {
          var R = su[o];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), kr[t] = !0, !0;
        } else if (!x && t !== o)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), kr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, h, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), kr[t] = !0, !0) : x ? !0 : pn(t, a, h, !1) ? (kr[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === Fn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), kr[t] = !0), !0);
      };
    }
    var th = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = jc(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function nh(e, t, a) {
      Rl(e, t) || th(e, t, a);
    }
    var wd = 1, Ci = 2, fo = 4, _d = wd | Ci | fo, ys = null;
    function Vy(e) {
      ys !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ys = e;
    }
    function gs() {
      ys === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ys = null;
    }
    function Hy(e) {
      return e === ys;
    }
    function Lc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === qi ? t.parentNode : t;
    }
    var Mc = null, $t = null, bl = null;
    function Ss(e) {
      var t = Pu(e);
      if (t) {
        if (typeof Mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = om(a);
          Mc(t.stateNode, t.type, i);
        }
      }
    }
    function Es(e) {
      Mc = e;
    }
    function kd(e) {
      $t ? bl ? bl.push(e) : bl = [e] : $t = e;
    }
    function Dd() {
      return $t !== null || bl !== null;
    }
    function pu() {
      if ($t) {
        var e = $t, t = bl;
        if ($t = null, bl = null, Ss(e), t)
          for (var a = 0; a < t.length; a++)
            Ss(t[a]);
      }
    }
    var Cs = function(e, t) {
      return e(t);
    }, po = function() {
    }, Uc = !1;
    function By() {
      var e = Dd();
      e && (po(), pu());
    }
    function rh(e, t, a) {
      if (Uc)
        return e(t, a);
      Uc = !0;
      try {
        return Cs(e, t, a);
      } finally {
        Uc = !1, By();
      }
    }
    function ah(e, t, a) {
      Cs = e, po = a;
    }
    function zc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ac(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && zc(t));
        default:
          return !1;
      }
    }
    function vo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = om(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Ac(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var xs = !1;
    if (Jn)
      try {
        var ho = {};
        Object.defineProperty(ho, "passive", {
          get: function() {
            xs = !0;
          }
        }), window.addEventListener("test", ho, ho), window.removeEventListener("test", ho, ho);
      } catch {
        xs = !1;
      }
    function Fc(e, t, a, i, o, s, f, p, h) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (R) {
        this.onError(R);
      }
    }
    var ih = Fc;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var Pc = document.createElement("react");
      ih = function(t, a, i, o, s, f, p, h, x) {
        if (typeof document == "undefined" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), M = !1, j = !0, W = window.event, G = Object.getOwnPropertyDescriptor(window, "event");
        function K() {
          Pc.removeEventListener(X, Qe, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = W);
        }
        var be = Array.prototype.slice.call(arguments, 3);
        function Qe() {
          M = !0, K(), a.apply(i, be), j = !1;
        }
        var Fe, Mt = !1, bt = !1;
        function V(H) {
          if (Fe = H.error, Mt = !0, Fe === null && H.colno === 0 && H.lineno === 0 && (bt = !0), H.defaultPrevented && Fe != null && typeof Fe == "object")
            try {
              Fe._suppressLogging = !0;
            } catch {
            }
        }
        var X = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", V), Pc.addEventListener(X, Qe, !1), R.initEvent(X, !1, !1), Pc.dispatchEvent(R), G && Object.defineProperty(window, "event", G), M && j && (Mt ? bt && (Fe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Fe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Fe)), window.removeEventListener("error", V), !M)
          return K(), Fc.apply(this, arguments);
      };
    }
    var Iy = ih, vu = !1, hu = null, ai = !1, Vc = null, mu = {
      onError: function(e) {
        vu = !0, hu = e;
      }
    };
    function Fa(e, t, a, i, o, s, f, p, h) {
      vu = !1, hu = null, Iy.apply(mu, arguments);
    }
    function Rs(e, t, a, i, o, s, f, p, h) {
      if (Fa.apply(this, arguments), vu) {
        var x = Od();
        ai || (ai = !0, Vc = x);
      }
    }
    function Xi() {
      if (ai) {
        var e = Vc;
        throw ai = !1, Vc = null, e;
      }
    }
    function Nd() {
      return vu;
    }
    function Od() {
      if (vu) {
        var e = hu;
        return vu = !1, hu = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function yu(e) {
      return e._reactInternals;
    }
    function mo(e) {
      return e._reactInternals !== void 0;
    }
    function bs(e, t) {
      e._reactInternals = t;
    }
    var Ve = (
      /*                      */
      0
    ), Ji = (
      /*                */
      1
    ), bn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), ta = (
      /*                */
      16
    ), Qt = (
      /*                 */
      32
    ), ln = (
      /*                     */
      64
    ), mt = (
      /*                   */
      128
    ), gn = (
      /*            */
      256
    ), Vn = (
      /*                          */
      512
    ), Pa = (
      /*                     */
      1024
    ), Ea = (
      /*                      */
      2048
    ), Tn = (
      /*                    */
      4096
    ), xi = (
      /*                   */
      8192
    ), Hc = (
      /*             */
      16384
    ), lh = (
      /*               */
      32767
    ), yo = (
      /*                   */
      32768
    ), Dr = (
      /*                */
      65536
    ), ii = (
      /* */
      131072
    ), Ts = (
      /*                       */
      1048576
    ), ws = (
      /*                    */
      2097152
    ), Tl = (
      /*                 */
      4194304
    ), jd = (
      /*                */
      8388608
    ), Ar = (
      /*               */
      16777216
    ), wl = (
      /*              */
      33554432
    ), _l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | Pa | 0
    ), gu = bn | Ct | ta | Qt | Vn | Tn | xi, kl = Ct | ln | Vn | xi, fr = Ea | ta, Hn = Tl | jd | ws, go = b.ReactCurrentOwner;
    function Fr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (bn | Tn)) !== Ve && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === B ? a : null;
    }
    function Ri(e) {
      if (e.tag === ge) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Dl(e) {
      return e.tag === B ? e.stateNode.containerInfo : null;
    }
    function oh(e) {
      return Fr(e) === e;
    }
    function Ld(e) {
      {
        var t = go.current;
        if (t !== null && t.tag === $) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", et(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = yu(e);
      return o ? Fr(o) === o : !1;
    }
    function Bc(e) {
      if (Fr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function na(e) {
      var t = e.alternate;
      if (!t) {
        var a = Fr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return Bc(s), e;
            if (h === o)
              return Bc(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var x = !1, R = s.child; R; ) {
            if (R === i) {
              x = !0, i = s, o = f;
              break;
            }
            if (R === o) {
              x = !0, o = s, i = f;
              break;
            }
            R = R.sibling;
          }
          if (!x) {
            for (R = f.child; R; ) {
              if (R === i) {
                x = !0, i = f, o = s;
                break;
              }
              if (R === o) {
                x = !0, o = f, i = s;
                break;
              }
              R = R.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== B)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = na(e);
      return t !== null ? hn(t) : null;
    }
    function hn(e) {
      if (e.tag === J || e.tag === ue)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = hn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function li(e) {
      var t = na(e);
      return t !== null ? Md(t) : null;
    }
    function Md(e) {
      if (e.tag === J || e.tag === ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = Md(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ud = S.unstable_scheduleCallback, zd = S.unstable_cancelCallback, Ad = S.unstable_shouldYield, uh = S.unstable_requestPaint, Dn = S.unstable_now, sh = S.unstable_getCurrentPriorityLevel, Zi = S.unstable_ImmediatePriority, _s = S.unstable_UserBlockingPriority, So = S.unstable_NormalPriority, ks = S.unstable_LowPriority, Su = S.unstable_IdlePriority, ch = S.unstable_yieldValue, fh = S.unstable_setDisableYieldValue, oi = null, dr = null, Ee = null, Ca = !1, Nr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function Fd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = ot({}, e, {
          getLaneLabelMap: Bd,
          injectProfilingHooks: Eo
        })), oi = t.inject(e), dr = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Pd(e, t) {
      if (dr && typeof dr.onScheduleFiberRoot == "function")
        try {
          dr.onScheduleFiberRoot(oi, e, t);
        } catch (a) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Vd(e, t) {
      if (dr && typeof dr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & mt) === mt;
          if (nt) {
            var i;
            switch (t) {
              case ua:
                i = Zi;
                break;
              case Ha:
                i = _s;
                break;
              case pr:
                i = So;
                break;
              case Sf:
                i = Su;
                break;
              default:
                i = So;
                break;
            }
            dr.onCommitFiberRoot(oi, e, i, a);
          }
        } catch (o) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", o));
        }
    }
    function Hd(e) {
      if (dr && typeof dr.onPostCommitFiberRoot == "function")
        try {
          dr.onPostCommitFiberRoot(oi, e);
        } catch (t) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Eu(e) {
      if (dr && typeof dr.onCommitFiberUnmount == "function")
        try {
          dr.onCommitFiberUnmount(oi, e);
        } catch (t) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Gt(e) {
      if (typeof ch == "function" && (fh(e), N(e)), dr && typeof dr.setStrictMode == "function")
        try {
          dr.setStrictMode(oi, e);
        } catch (t) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Eo(e) {
      Ee = e;
    }
    function Bd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Gd; a++) {
          var i = yh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function dh(e) {
      Ee !== null && typeof Ee.markCommitStarted == "function" && Ee.markCommitStarted(e);
    }
    function bi() {
      Ee !== null && typeof Ee.markCommitStopped == "function" && Ee.markCommitStopped();
    }
    function Va(e) {
      Ee !== null && typeof Ee.markComponentRenderStarted == "function" && Ee.markComponentRenderStarted(e);
    }
    function Nl() {
      Ee !== null && typeof Ee.markComponentRenderStopped == "function" && Ee.markComponentRenderStopped();
    }
    function ph(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStarted == "function" && Ee.markComponentPassiveEffectMountStarted(e);
    }
    function el() {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStopped == "function" && Ee.markComponentPassiveEffectMountStopped();
    }
    function Ol(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStarted == "function" && Ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ic() {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStopped == "function" && Ee.markComponentPassiveEffectUnmountStopped();
    }
    function vh(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStarted == "function" && Ee.markComponentLayoutEffectMountStarted(e);
    }
    function $c() {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStopped == "function" && Ee.markComponentLayoutEffectMountStopped();
    }
    function Id(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStarted == "function" && Ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function Cu() {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStopped == "function" && Ee.markComponentLayoutEffectUnmountStopped();
    }
    function Ti(e, t, a) {
      Ee !== null && typeof Ee.markComponentErrored == "function" && Ee.markComponentErrored(e, t, a);
    }
    function Ds(e, t, a) {
      Ee !== null && typeof Ee.markComponentSuspended == "function" && Ee.markComponentSuspended(e, t, a);
    }
    function Ns(e) {
      Ee !== null && typeof Ee.markLayoutEffectsStarted == "function" && Ee.markLayoutEffectsStarted(e);
    }
    function Co() {
      Ee !== null && typeof Ee.markLayoutEffectsStopped == "function" && Ee.markLayoutEffectsStopped();
    }
    function $d(e) {
      Ee !== null && typeof Ee.markPassiveEffectsStarted == "function" && Ee.markPassiveEffectsStarted(e);
    }
    function xu() {
      Ee !== null && typeof Ee.markPassiveEffectsStopped == "function" && Ee.markPassiveEffectsStopped();
    }
    function Yd(e) {
      Ee !== null && typeof Ee.markRenderStarted == "function" && Ee.markRenderStarted(e);
    }
    function Wd() {
      Ee !== null && typeof Ee.markRenderYielded == "function" && Ee.markRenderYielded();
    }
    function Sn() {
      Ee !== null && typeof Ee.markRenderStopped == "function" && Ee.markRenderStopped();
    }
    function Yc(e) {
      Ee !== null && typeof Ee.markRenderScheduled == "function" && Ee.markRenderScheduled(e);
    }
    function Qd(e, t) {
      Ee !== null && typeof Ee.markForceUpdateScheduled == "function" && Ee.markForceUpdateScheduled(e, t);
    }
    function Os(e, t) {
      Ee !== null && typeof Ee.markStateUpdateScheduled == "function" && Ee.markStateUpdateScheduled(e, t);
    }
    var He = (
      /*                         */
      0
    ), St = (
      /*                 */
      1
    ), _t = (
      /*                    */
      2
    ), ut = (
      /*               */
      8
    ), tn = (
      /*              */
      16
    ), Qn = Math.clz32 ? Math.clz32 : Ls, Wc = Math.log, js = Math.LN2;
    function Ls(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Wc(t) / js | 0) | 0;
    }
    var Gd = 31, Z = (
      /*                        */
      0
    ), Bn = (
      /*                          */
      0
    ), Ke = (
      /*                        */
      1
    ), jl = (
      /*    */
      2
    ), rr = (
      /*             */
      4
    ), ar = (
      /*            */
      8
    ), aa = (
      /*                     */
      16
    ), xo = (
      /*                */
      32
    ), Ll = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), Qc = (
      /*                        */
      128
    ), Gc = (
      /*                        */
      256
    ), qc = (
      /*                        */
      512
    ), Kc = (
      /*                        */
      1024
    ), Xc = (
      /*                        */
      2048
    ), Jc = (
      /*                        */
      4096
    ), Zc = (
      /*                        */
      8192
    ), Ro = (
      /*                        */
      16384
    ), ef = (
      /*                       */
      32768
    ), bu = (
      /*                       */
      65536
    ), Tu = (
      /*                       */
      131072
    ), tf = (
      /*                       */
      262144
    ), Ms = (
      /*                       */
      524288
    ), nf = (
      /*                       */
      1048576
    ), rf = (
      /*                       */
      2097152
    ), Us = (
      /*                            */
      130023424
    ), bo = (
      /*                             */
      4194304
    ), zs = (
      /*                             */
      8388608
    ), af = (
      /*                             */
      16777216
    ), lf = (
      /*                             */
      33554432
    ), of = (
      /*                             */
      67108864
    ), hh = bo, wu = (
      /*          */
      134217728
    ), mh = (
      /*                          */
      268435455
    ), As = (
      /*               */
      268435456
    ), Ml = (
      /*                        */
      536870912
    ), ia = (
      /*                   */
      1073741824
    );
    function yh(e) {
      {
        if (e & Ke)
          return "Sync";
        if (e & jl)
          return "InputContinuousHydration";
        if (e & rr)
          return "InputContinuous";
        if (e & ar)
          return "DefaultHydration";
        if (e & aa)
          return "Default";
        if (e & xo)
          return "TransitionHydration";
        if (e & Ll)
          return "Transition";
        if (e & Us)
          return "Retry";
        if (e & wu)
          return "SelectiveHydration";
        if (e & As)
          return "IdleHydration";
        if (e & Ml)
          return "Idle";
        if (e & ia)
          return "Offscreen";
      }
    }
    var qt = -1, uf = Ru, sf = bo;
    function Fs(e) {
      switch (To(e)) {
        case Ke:
          return Ke;
        case jl:
          return jl;
        case rr:
          return rr;
        case ar:
          return ar;
        case aa:
          return aa;
        case xo:
          return xo;
        case Ru:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case Ro:
        case ef:
        case bu:
        case Tu:
        case tf:
        case Ms:
        case nf:
        case rf:
          return e & Ll;
        case bo:
        case zs:
        case af:
        case lf:
        case of:
          return e & Us;
        case wu:
          return wu;
        case As:
          return As;
        case Ml:
          return Ml;
        case ia:
          return ia;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function la(e, t) {
      var a = e.pendingLanes;
      if (a === Z)
        return Z;
      var i = Z, o = e.suspendedLanes, s = e.pingedLanes, f = a & mh;
      if (f !== Z) {
        var p = f & ~o;
        if (p !== Z)
          i = Fs(p);
        else {
          var h = f & s;
          h !== Z && (i = Fs(h));
        }
      } else {
        var x = a & ~o;
        x !== Z ? i = Fs(x) : s !== Z && (i = Fs(s));
      }
      if (i === Z)
        return Z;
      if (t !== Z && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === Z) {
        var R = To(i), M = To(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= M || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === aa && (M & Ll) !== Z
        )
          return t;
      }
      (i & rr) !== Z && (i |= a & aa);
      var j = e.entangledLanes;
      if (j !== Z)
        for (var W = e.entanglements, G = i & j; G > 0; ) {
          var K = Nn(G), be = 1 << K;
          i |= W[K], G &= ~be;
        }
      return i;
    }
    function qd(e, t) {
      for (var a = e.eventTimes, i = qt; t > 0; ) {
        var o = Nn(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function cf(e, t) {
      switch (e) {
        case Ke:
        case jl:
        case rr:
          return t + 250;
        case ar:
        case aa:
        case xo:
        case Ru:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case Ro:
        case ef:
        case bu:
        case Tu:
        case tf:
        case Ms:
        case nf:
        case rf:
          return t + 5e3;
        case bo:
        case zs:
        case af:
        case lf:
        case of:
          return qt;
        case wu:
        case As:
        case Ml:
        case ia:
          return qt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function gh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Nn(f), h = 1 << p, x = s[p];
        x === qt ? ((h & i) === Z || (h & o) !== Z) && (s[p] = cf(h, t)) : x <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function Sh(e) {
      return Fs(e.pendingLanes);
    }
    function ff(e) {
      var t = e.pendingLanes & ~ia;
      return t !== Z ? t : t & ia ? ia : Z;
    }
    function Kd(e) {
      return (e & Ke) !== Z;
    }
    function Ul(e) {
      return (e & mh) !== Z;
    }
    function df(e) {
      return (e & Us) === e;
    }
    function Xd(e) {
      var t = Ke | rr | aa;
      return (e & t) === Z;
    }
    function $y(e) {
      return (e & Ll) === e;
    }
    function Ps(e, t) {
      var a = jl | rr | ar | aa;
      return (t & a) !== Z;
    }
    function Eh(e, t) {
      return (t & e.expiredLanes) !== Z;
    }
    function Jd(e) {
      return (e & Ll) !== Z;
    }
    function Zd() {
      var e = uf;
      return uf <<= 1, (uf & Ll) === Z && (uf = Ru), e;
    }
    function Ch() {
      var e = sf;
      return sf <<= 1, (sf & Us) === Z && (sf = bo), e;
    }
    function To(e) {
      return e & -e;
    }
    function ir(e) {
      return To(e);
    }
    function Nn(e) {
      return 31 - Qn(e);
    }
    function pf(e) {
      return Nn(e);
    }
    function oa(e, t) {
      return (e & t) !== Z;
    }
    function wo(e, t) {
      return (e & t) === t;
    }
    function ct(e, t) {
      return e | t;
    }
    function Vs(e, t) {
      return e & ~t;
    }
    function vf(e, t) {
      return e & t;
    }
    function Yy(e) {
      return e;
    }
    function ep(e, t) {
      return e !== Bn && e < t ? e : t;
    }
    function hf(e) {
      for (var t = [], a = 0; a < Gd; a++)
        t.push(e);
      return t;
    }
    function _u(e, t, a) {
      e.pendingLanes |= t, t !== Ml && (e.suspendedLanes = Z, e.pingedLanes = Z);
      var i = e.eventTimes, o = pf(t);
      i[o] = a;
    }
    function tp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Nn(i), s = 1 << o;
        a[o] = qt, i &= ~s;
      }
    }
    function mf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function xh(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Z, e.pingedLanes = Z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Nn(f), h = 1 << p;
        i[p] = Z, o[p] = qt, s[p] = qt, f &= ~h;
      }
    }
    function Hs(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Nn(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function yf(e, t) {
      var a = To(t), i;
      switch (a) {
        case rr:
          i = jl;
          break;
        case aa:
          i = ar;
          break;
        case Ru:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case Ro:
        case ef:
        case bu:
        case Tu:
        case tf:
        case Ms:
        case nf:
        case rf:
        case bo:
        case zs:
        case af:
        case lf:
        case of:
          i = xo;
          break;
        case Ml:
          i = As;
          break;
        default:
          i = Bn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Bn ? Bn : i;
    }
    function Rh(e, t, a) {
      if (Nr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = pf(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function np(e, t) {
      if (Nr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = pf(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var h = p.alternate;
            (h === null || !i.has(h)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function gf(e, t) {
      return null;
    }
    var ua = Ke, Ha = rr, pr = aa, Sf = Ml, ku = Bn;
    function xa() {
      return ku;
    }
    function Gn(e) {
      ku = e;
    }
    function bh(e, t) {
      var a = ku;
      try {
        return ku = e, t();
      } finally {
        ku = a;
      }
    }
    function Bs(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Or(e, t) {
      return e > t ? e : t;
    }
    function rp(e, t) {
      return e !== 0 && e < t;
    }
    function Th(e) {
      var t = To(e);
      return rp(ua, t) ? rp(Ha, t) ? Ul(t) ? pr : Sf : Ha : ua;
    }
    function _o(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var vr;
    function Wy(e) {
      vr = e;
    }
    function je(e) {
      vr(e);
    }
    var zl;
    function ap(e) {
      zl = e;
    }
    var ip;
    function Qy(e) {
      ip = e;
    }
    var Du;
    function Ef(e) {
      Du = e;
    }
    var Cf;
    function wh(e) {
      Cf = e;
    }
    var xf = !1, Is = [], wi = null, _i = null, En = null, Pr = /* @__PURE__ */ new Map(), Ba = /* @__PURE__ */ new Map(), tl = [], _h = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ui(e) {
      return _h.indexOf(e) > -1;
    }
    function kh(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function si(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          wi = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          En = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Pr.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ba.delete(i);
          break;
        }
      }
    }
    function $s(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = kh(t, a, i, o, s);
        if (t !== null) {
          var p = Pu(t);
          p !== null && zl(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return o !== null && h.indexOf(o) === -1 && h.push(o), e;
    }
    function Dh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return wi = $s(wi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return _i = $s(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return En = $s(En, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var h = o, x = h.pointerId;
          return Pr.set(x, $s(Pr.get(x) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var R = o, M = R.pointerId;
          return Ba.set(M, $s(Ba.get(M) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function lp(e) {
      var t = ac(e.target);
      if (t !== null) {
        var a = Fr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ge) {
            var o = Ri(a);
            if (o !== null) {
              e.blockedOn = o, Cf(e.priority, function() {
                ip(a);
              });
              return;
            }
          } else if (i === B) {
            var s = a.stateNode;
            if (_o(s)) {
              e.blockedOn = Dl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Nh(e) {
      for (var t = Du(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < tl.length && rp(t, tl[i].priority); i++)
        ;
      tl.splice(i, 0, a), i === 0 && lp(a);
    }
    function Ys(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ws(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          Vy(s), o.target.dispatchEvent(s), gs();
        } else {
          var f = Pu(i);
          return f !== null && zl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Oh(e, t, a) {
      Ys(e) && a.delete(t);
    }
    function Rf() {
      xf = !1, wi !== null && Ys(wi) && (wi = null), _i !== null && Ys(_i) && (_i = null), En !== null && Ys(En) && (En = null), Pr.forEach(Oh), Ba.forEach(Oh);
    }
    function ko(e, t) {
      e.blockedOn === t && (e.blockedOn = null, xf || (xf = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, Rf)));
    }
    function jr(e) {
      if (Is.length > 0) {
        ko(Is[0], e);
        for (var t = 1; t < Is.length; t++) {
          var a = Is[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      wi !== null && ko(wi, e), _i !== null && ko(_i, e), En !== null && ko(En, e);
      var i = function(p) {
        return ko(p, e);
      };
      Pr.forEach(i), Ba.forEach(i);
      for (var o = 0; o < tl.length; o++) {
        var s = tl[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; tl.length > 0; ) {
        var f = tl[0];
        if (f.blockedOn !== null)
          break;
        lp(f), f.blockedOn === null && tl.shift();
      }
    }
    var xt = b.ReactCurrentBatchConfig, In = !0;
    function On(e) {
      In = !!e;
    }
    function hr() {
      return In;
    }
    function Ra(e, t, a) {
      var i = Ou(t), o;
      switch (i) {
        case ua:
          o = Nu;
          break;
        case Ha:
          o = qn;
          break;
        case pr:
        default:
          o = Do;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Nu(e, t, a, i) {
      var o = xa(), s = xt.transition;
      xt.transition = null;
      try {
        Gn(ua), Do(e, t, a, i);
      } finally {
        Gn(o), xt.transition = s;
      }
    }
    function qn(e, t, a, i) {
      var o = xa(), s = xt.transition;
      xt.transition = null;
      try {
        Gn(Ha), Do(e, t, a, i);
      } finally {
        Gn(o), xt.transition = s;
      }
    }
    function Do(e, t, a, i) {
      In && No(e, t, a, i);
    }
    function No(e, t, a, i) {
      var o = Ws(e, t, a, i);
      if (o === null) {
        cg(e, t, i, Oo, a), si(e, i);
        return;
      }
      if (Dh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (si(e, i), t & fo && ui(e)) {
        for (; o !== null; ) {
          var s = Pu(o);
          s !== null && je(s);
          var f = Ws(e, t, a, i);
          if (f === null && cg(e, t, i, Oo, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      cg(e, t, i, null, a);
    }
    var Oo = null;
    function Ws(e, t, a, i) {
      Oo = null;
      var o = Lc(i), s = ac(o);
      if (s !== null) {
        var f = Fr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ge) {
            var h = Ri(f);
            if (h !== null)
              return h;
            s = null;
          } else if (p === B) {
            var x = f.stateNode;
            if (_o(x))
              return Dl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oo = s, null;
    }
    function Ou(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ua;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ha;
        case "message": {
          var t = sh();
          switch (t) {
            case Zi:
              return ua;
            case _s:
              return Ha;
            case So:
            case ks:
              return pr;
            case Su:
              return Sf;
            default:
              return pr;
          }
        }
        default:
          return pr;
      }
    }
    function sa(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function op(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ju(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function nl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Al = null, Qs = null, Ia = null;
    function bf(e) {
      return Al = e, Qs = Lu(), !0;
    }
    function Fl() {
      Al = null, Qs = null, Ia = null;
    }
    function Gs() {
      if (Ia)
        return Ia;
      var e, t = Qs, a = t.length, i, o = Lu(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ia = o.slice(e, p), Ia;
    }
    function Lu() {
      return "value" in Al ? Al.value : Al.textContent;
    }
    function Mu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function jo() {
      return !0;
    }
    function qs() {
      return !1;
    }
    function on(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var h = e[p];
            h ? this[p] = h(s) : this[p] = s[p];
          }
        var x = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return x ? this.isDefaultPrevented = jo : this.isDefaultPrevented = qs, this.isPropagationStopped = qs, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: jo
      }), t;
    }
    var ba = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ta = on(ba), lr = ot({}, ba, {
      view: 0,
      detail: 0
    }), jh = on(lr), Ks, Xs, Js;
    function Pl(e) {
      e !== Js && (Js && e.type === "mousemove" ? (Ks = e.screenX - Js.screenX, Xs = e.screenY - Js.screenY) : (Ks = 0, Xs = 0), Js = e);
    }
    var Zs = ot({}, lr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Pl(e), Ks);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Xs;
      }
    }), Tf = on(Zs), Lo = ot({}, Zs, {
      dataTransfer: 0
    }), up = on(Lo), Mo = ot({}, lr, {
      relatedTarget: 0
    }), wf = on(Mo), Lh = ot({}, ba, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), sp = on(Lh), _f = ot({}, ba, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Gy = on(_f), qy = ot({}, ba, {
      data: 0
    }), cp = on(qy), Mh = cp, Uo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ky = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Uu(e) {
      if (e.key) {
        var t = Uo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Mu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ky[e.keyCode] || "Unidentified" : "";
    }
    var Uh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function wn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Uh[e];
      return i ? !!a[i] : !1;
    }
    function fp(e) {
      return wn;
    }
    var zh = ot({}, lr, {
      key: Uu,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Mu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Xy = on(zh), Jy = ot({}, Zs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), dp = on(Jy), Ah = ot({}, lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fp
    }), Zy = on(Ah), $a = ot({}, ba, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), pp = on($a), eg = ot({}, Zs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Vl = on(eg), kf = [9, 13, 27, 32], Hl = 229, zu = Jn && "CompositionEvent" in window, zo = null;
    Jn && "documentMode" in document && (zo = document.documentMode);
    var vp = Jn && "TextEvent" in window && !zo, Fh = Jn && (!zu || zo && zo > 8 && zo <= 11), Df = 32, Ph = String.fromCharCode(Df);
    function Vh() {
      Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Wt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var hp = !1;
    function Nf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Of(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Hh(e, t) {
      return e === "keydown" && t.keyCode === Hl;
    }
    function jf(e, t) {
      switch (e) {
        case "keyup":
          return kf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hl;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Bh(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mp(e) {
      return e.locale === "ko";
    }
    var Bl = !1;
    function Lf(e, t, a, i, o) {
      var s, f;
      if (zu ? s = Of(t) : Bl ? jf(t, i) && (s = "onCompositionEnd") : Hh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Fh && !mp(i) && (!Bl && s === "onCompositionStart" ? Bl = bf(o) : s === "onCompositionEnd" && Bl && (f = Gs()));
      var p = Gh(a, s);
      if (p.length > 0) {
        var h = new cp(s, t, null, i, o);
        if (e.push({
          event: h,
          listeners: p
        }), f)
          h.data = f;
        else {
          var x = Bh(i);
          x !== null && (h.data = x);
        }
      }
    }
    function yp(e, t) {
      switch (e) {
        case "compositionend":
          return Bh(t);
        case "keypress":
          var a = t.which;
          return a !== Df ? null : (hp = !0, Ph);
        case "textInput":
          var i = t.data;
          return i === Ph && hp ? null : i;
        default:
          return null;
      }
    }
    function Mf(e, t) {
      if (Bl) {
        if (e === "compositionend" || !zu && jf(e, t)) {
          var a = Gs();
          return Fl(), Bl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Nf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Fh && !mp(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ih(e, t, a, i, o) {
      var s;
      if (vp ? s = yp(t, i) : s = Mf(t, i), !s)
        return null;
      var f = Gh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Mh("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function tg(e, t, a, i, o, s, f) {
      Lf(e, t, a, i, o), Ih(e, t, a, i, o);
    }
    var Uf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function $h(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Uf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function ec(e) {
      if (!Jn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function ng() {
      Wt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function tc(e, t, a, i) {
      kd(i);
      var o = Gh(t, "onChange");
      if (o.length > 0) {
        var s = new Ta("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      tc(t, r, e, Lc(e)), rh(c, t);
    }
    function c(e) {
      _0(e, 0);
    }
    function d(e) {
      var t = Hf(e);
      if (El(t))
        return e;
    }
    function g(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    Jn && (T = ec("input") && (!document.documentMode || document.documentMode > 9));
    function D(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", oe);
    }
    function Q() {
      n && (n.detachEvent("onpropertychange", oe), n = null, r = null);
    }
    function oe(e) {
      e.propertyName === "value" && d(r) && u(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (Q(), D(t, a)) : e === "focusout" && Q();
    }
    function ie(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function De(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ue(e, t) {
      if (e === "click")
        return d(t);
    }
    function Ae(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function jn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function A(e, t, a, i, o, s, f) {
      var p = a ? Hf(a) : window, h, x;
      if (l(p) ? h = g : $h(p) ? T ? h = Ae : (h = ie, x = se) : De(p) && (h = Ue), h) {
        var R = h(t, a);
        if (R) {
          tc(e, R, i, o);
          return;
        }
      }
      x && x(t, p, a), t === "focusout" && jn(p);
    }
    function L() {
      Un("onMouseEnter", ["mouseout", "mouseover"]), Un("onMouseLeave", ["mouseout", "mouseover"]), Un("onPointerEnter", ["pointerout", "pointerover"]), Un("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function I(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (p && !Hy(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (ac(x) || Op(x)))
          return;
      }
      if (!(!h && !p)) {
        var R;
        if (o.window === o)
          R = o;
        else {
          var M = o.ownerDocument;
          M ? R = M.defaultView || M.parentWindow : R = window;
        }
        var j, W;
        if (h) {
          var G = i.relatedTarget || i.toElement;
          if (j = a, W = G ? ac(G) : null, W !== null) {
            var K = Fr(W);
            (W !== K || W.tag !== J && W.tag !== ue) && (W = null);
          }
        } else
          j = null, W = a;
        if (j !== W) {
          var be = Tf, Qe = "onMouseLeave", Fe = "onMouseEnter", Mt = "mouse";
          (t === "pointerout" || t === "pointerover") && (be = dp, Qe = "onPointerLeave", Fe = "onPointerEnter", Mt = "pointer");
          var bt = j == null ? R : Hf(j), V = W == null ? R : Hf(W), X = new be(Qe, Mt + "leave", j, i, o);
          X.target = bt, X.relatedTarget = V;
          var H = null, ce = ac(o);
          if (ce === a) {
            var Oe = new be(Fe, Mt + "enter", W, i, o);
            Oe.target = V, Oe.relatedTarget = bt, H = Oe;
          }
          Wb(e, X, H, j, W);
        }
      }
    }
    function de(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var we = typeof Object.is == "function" ? Object.is : de;
    function $e(e, t) {
      if (we(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!ur.call(t, s) || !we(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ge(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Kn(e, t) {
      for (var a = Ge(e), i = 0, o = 0; a; ) {
        if (a.nodeType === qi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Ge(tt(a));
      }
    }
    function Ut(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Il(e, o, s, f, p);
    }
    function Il(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, h = 0, x = 0, R = e, M = null;
      e: for (; ; ) {
        for (var j = null; R === t && (a === 0 || R.nodeType === qi) && (f = s + a), R === i && (o === 0 || R.nodeType === qi) && (p = s + o), R.nodeType === qi && (s += R.nodeValue.length), (j = R.firstChild) !== null; )
          M = R, R = j;
        for (; ; ) {
          if (R === e)
            break e;
          if (M === t && ++h === a && (f = s), M === i && ++x === o && (p = s), (j = R.nextSibling) !== null)
            break;
          R = M, M = R.parentNode;
        }
        R = j;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function rg(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var h = p;
          p = f, f = h;
        }
        var x = Kn(e, f), R = Kn(e, p);
        if (x && R) {
          if (o.rangeCount === 1 && o.anchorNode === x.node && o.anchorOffset === x.offset && o.focusNode === R.node && o.focusOffset === R.offset)
            return;
          var M = a.createRange();
          M.setStart(x.node, x.offset), o.removeAllRanges(), f > p ? (o.addRange(M), o.extend(R.node, R.offset)) : (M.setEnd(R.node, R.offset), o.addRange(M));
        }
      }
    }
    function h0(e) {
      return e && e.nodeType === qi;
    }
    function m0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : h0(e) ? !1 : h0(t) ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function kb(e) {
      return e && e.ownerDocument && m0(e.ownerDocument.documentElement, e);
    }
    function Db(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function y0() {
      for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement; ) {
        if (Db(t))
          e = t.contentWindow;
        else
          return t;
        t = Wi(e.document);
      }
      return t;
    }
    function ag(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Nb() {
      var e = y0();
      return {
        focusedElem: e,
        selectionRange: ag(e) ? jb(e) : null
      };
    }
    function Ob(e) {
      var t = y0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && kb(a)) {
        i !== null && ag(a) && Lb(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === ea && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function jb(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ut(e), t || {
        start: 0,
        end: 0
      };
    }
    function Lb(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : rg(e, t);
    }
    var Mb = Jn && "documentMode" in document && document.documentMode <= 11;
    function Ub() {
      Wt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zf = null, ig = null, gp = null, lg = !1;
    function zb(e) {
      if ("selectionStart" in e && ag(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Ab(e) {
      return e.window === e ? e.document : e.nodeType === Ki ? e : e.ownerDocument;
    }
    function g0(e, t, a) {
      var i = Ab(a);
      if (!(lg || zf == null || zf !== Wi(i))) {
        var o = zb(zf);
        if (!gp || !$e(gp, o)) {
          gp = o;
          var s = Gh(ig, "onSelect");
          if (s.length > 0) {
            var f = new Ta("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = zf;
          }
        }
      }
    }
    function Fb(e, t, a, i, o, s, f) {
      var p = a ? Hf(a) : window;
      switch (t) {
        case "focusin":
          ($h(p) || p.contentEditable === "true") && (zf = p, ig = a, gp = null);
          break;
        case "focusout":
          zf = null, ig = null, gp = null;
          break;
        case "mousedown":
          lg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          lg = !1, g0(e, i, o);
          break;
        case "selectionchange":
          if (Mb)
            break;
        case "keydown":
        case "keyup":
          g0(e, i, o);
      }
    }
    function Yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Af = {
      animationend: Yh("Animation", "AnimationEnd"),
      animationiteration: Yh("Animation", "AnimationIteration"),
      animationstart: Yh("Animation", "AnimationStart"),
      transitionend: Yh("Transition", "TransitionEnd")
    }, og = {}, S0 = {};
    Jn && (S0 = document.createElement("div").style, "AnimationEvent" in window || (delete Af.animationend.animation, delete Af.animationiteration.animation, delete Af.animationstart.animation), "TransitionEvent" in window || delete Af.transitionend.transition);
    function Wh(e) {
      if (og[e])
        return og[e];
      if (!Af[e])
        return e;
      var t = Af[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S0)
          return og[e] = t[a];
      return e;
    }
    var E0 = Wh("animationend"), C0 = Wh("animationiteration"), x0 = Wh("animationstart"), R0 = Wh("transitionend"), b0 = /* @__PURE__ */ new Map(), T0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Au(e, t) {
      b0.set(e, t), Wt(t, [e]);
    }
    function Pb() {
      for (var e = 0; e < T0.length; e++) {
        var t = T0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Au(a, "on" + i);
      }
      Au(E0, "onAnimationEnd"), Au(C0, "onAnimationIteration"), Au(x0, "onAnimationStart"), Au("dblclick", "onDoubleClick"), Au("focusin", "onFocus"), Au("focusout", "onBlur"), Au(R0, "onTransitionEnd");
    }
    function Vb(e, t, a, i, o, s, f) {
      var p = b0.get(t);
      if (p !== void 0) {
        var h = Ta, x = t;
        switch (t) {
          case "keypress":
            if (Mu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = Xy;
            break;
          case "focusin":
            x = "focus", h = wf;
            break;
          case "focusout":
            x = "blur", h = wf;
            break;
          case "beforeblur":
          case "afterblur":
            h = wf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Tf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = up;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Zy;
            break;
          case E0:
          case C0:
          case x0:
            h = sp;
            break;
          case R0:
            h = pp;
            break;
          case "scroll":
            h = jh;
            break;
          case "wheel":
            h = Vl;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Gy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = dp;
            break;
        }
        var R = (s & fo) !== 0;
        {
          var M = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", j = $b(a, p, i.type, R, M);
          if (j.length > 0) {
            var W = new h(p, x, null, i, o);
            e.push({
              event: W,
              listeners: j
            });
          }
        }
      }
    }
    Pb(), L(), ng(), Ub(), Vh();
    function Hb(e, t, a, i, o, s, f) {
      Vb(e, t, a, i, o, s);
      var p = (s & _d) === 0;
      p && (I(e, t, a, i, o), A(e, t, a, i, o), Fb(e, t, a, i, o), tg(e, t, a, i, o));
    }
    var Sp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ug = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sp));
    function w0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Rs(i, t, void 0, e), e.currentTarget = null;
    }
    function Bb(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          w0(e, h, p), i = f;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var R = t[x], M = R.instance, j = R.currentTarget, W = R.listener;
          if (M !== i && e.isPropagationStopped())
            return;
          w0(e, W, j), i = M;
        }
    }
    function _0(e, t) {
      for (var a = (t & fo) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        Bb(s, f, a);
      }
      Xi();
    }
    function Ib(e, t, a, i, o) {
      var s = Lc(a), f = [];
      Hb(f, e, i, a, s, t), _0(f, t);
    }
    function xn(e, t) {
      ug.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Sw(t), o = Qb(e);
      i.has(o) || (k0(t, e, Ci, a), i.add(o));
    }
    function sg(e, t, a) {
      ug.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= fo), k0(a, e, i, t);
    }
    var Qh = "_reactListening" + Math.random().toString(36).slice(2);
    function Ep(e) {
      if (!e[Qh]) {
        e[Qh] = !0, Nt.forEach(function(a) {
          a !== "selectionchange" && (ug.has(a) || sg(a, !1, e), sg(a, !0, e));
        });
        var t = e.nodeType === Ki ? e : e.ownerDocument;
        t !== null && (t[Qh] || (t[Qh] = !0, sg("selectionchange", !1, t)));
      }
    }
    function k0(e, t, a, i, o) {
      var s = Ra(e, t, a), f = void 0;
      xs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ju(e, t, s, f) : op(e, t, s) : f !== void 0 ? nl(e, t, s, f) : sa(e, t, s);
    }
    function D0(e, t) {
      return e === t || e.nodeType === Pn && e.parentNode === t;
    }
    function cg(e, t, a, i, o) {
      var s = i;
      if (!(t & wd) && !(t & Ci)) {
        var f = o;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var h = p.tag;
            if (h === B || h === he) {
              var x = p.stateNode.containerInfo;
              if (D0(x, f))
                break;
              if (h === he)
                for (var R = p.return; R !== null; ) {
                  var M = R.tag;
                  if (M === B || M === he) {
                    var j = R.stateNode.containerInfo;
                    if (D0(j, f))
                      return;
                  }
                  R = R.return;
                }
              for (; x !== null; ) {
                var W = ac(x);
                if (W === null)
                  return;
                var G = W.tag;
                if (G === J || G === ue) {
                  p = s = W;
                  continue e;
                }
                x = x.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      rh(function() {
        return Ib(e, t, a, s);
      });
    }
    function Cp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function $b(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, h = [], x = e, R = null; x !== null; ) {
        var M = x, j = M.stateNode, W = M.tag;
        if (W === J && j !== null && (R = j, p !== null)) {
          var G = vo(x, p);
          G != null && h.push(Cp(x, G, R));
        }
        if (o)
          break;
        x = x.return;
      }
      return h;
    }
    function Gh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === J && f !== null) {
          var h = f, x = vo(o, a);
          x != null && i.unshift(Cp(o, x, h));
          var R = vo(o, t);
          R != null && i.push(Cp(o, R, h));
        }
        o = o.return;
      }
      return i;
    }
    function Ff(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== J);
      return e || null;
    }
    function Yb(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Ff(s))
        o++;
      for (var f = 0, p = i; p; p = Ff(p))
        f++;
      for (; o - f > 0; )
        a = Ff(a), o--;
      for (; f - o > 0; )
        i = Ff(i), f--;
      for (var h = o; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ff(a), i = Ff(i);
      }
      return null;
    }
    function N0(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var h = p, x = h.alternate, R = h.stateNode, M = h.tag;
        if (x !== null && x === i)
          break;
        if (M === J && R !== null) {
          var j = R;
          if (o) {
            var W = vo(p, s);
            W != null && f.unshift(Cp(p, W, j));
          } else if (!o) {
            var G = vo(p, s);
            G != null && f.push(Cp(p, G, j));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Wb(e, t, a, i, o) {
      var s = i && o ? Yb(i, o) : null;
      i !== null && N0(e, t, i, s, !1), o !== null && a !== null && N0(e, a, o, s, !0);
    }
    function Qb(e, t) {
      return e + "__bubble";
    }
    var Ya = !1, xp = "dangerouslySetInnerHTML", qh = "suppressContentEditableWarning", Fu = "suppressHydrationWarning", O0 = "autoFocus", nc = "children", rc = "style", Kh = "__html", fg, Xh, Rp, j0, Jh, L0, M0;
    fg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Xh = function(e, t) {
      Xv(e, t), du(e, t), nh(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: wt
      });
    }, L0 = Jn && !document.documentMode, Rp = function(e, t, a) {
      if (!Ya) {
        var i = Zh(a), o = Zh(t);
        o !== i && (Ya = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, j0 = function(e) {
      if (!Ya) {
        Ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Jh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, M0 = function(e, t) {
      var a = e.namespaceURI === ni ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Gb = /\r\n?/g, qb = /\u0000|\uFFFD/g;
    function Zh(e) {
      Wn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Gb, `
`).replace(qb, "");
    }
    function em(e, t, a, i) {
      var o = Zh(t), s = Zh(e);
      if (s !== o && (i && (Ya || (Ya = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && re))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U0(e) {
      return e.nodeType === Ki ? e : e.ownerDocument;
    }
    function Kb() {
    }
    function tm(e) {
      e.onclick = Kb;
    }
    function Xb(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === rc)
            f && Object.freeze(f), Wv(t, f);
          else if (s === xp) {
            var p = f ? f[Kh] : void 0;
            p != null && Mv(t, p);
          } else if (s === nc)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && xl(t, f);
            } else typeof f == "number" && xl(t, "" + f);
          else s === qh || s === Fu || s === O0 || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && Jh(s, f), s === "onScroll" && xn("scroll", t)) : f != null && ga(t, s, f, o));
        }
    }
    function Jb(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === rc ? Wv(e, f) : s === xp ? Mv(e, f) : s === nc ? xl(e, f) : ga(e, s, f, i);
      }
    }
    function Zb(e, t, a, i) {
      var o, s = U0(a), f, p = i;
      if (p === ni && (p = Ed(e)), p === ni) {
        if (o = Rl(e, t), !o && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var x = h.firstChild;
          f = h.removeChild(x);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var R = f;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === ni && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ur.call(fg, e) && (fg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function eT(e, t) {
      return U0(t).createTextNode(e);
    }
    function tT(e, t, a, i) {
      var o = Rl(t, a);
      Xh(t, a);
      var s;
      switch (t) {
        case "dialog":
          xn("cancel", e), xn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Sp.length; f++)
            xn(Sp[f], e);
          s = a;
          break;
        case "source":
          xn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e), s = a;
          break;
        case "details":
          xn("toggle", e), s = a;
          break;
        case "input":
          iu(e, a), s = Aa(e, a), xn("invalid", e);
          break;
        case "option":
          It(e, a), s = a;
          break;
        case "select":
          cs(e, a), s = co(e, a), xn("invalid", e);
          break;
        case "textarea":
          Ov(e, a), s = _c(e, a), xn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Oc(t, s), Xb(t, e, i, s, o), t) {
        case "input":
          za(e), Y(e, a, !1);
          break;
        case "textarea":
          za(e), Lv(e);
          break;
        case "option":
          Zt(e, a);
          break;
        case "select":
          yd(e, a);
          break;
        default:
          typeof s.onClick == "function" && tm(e);
          break;
      }
    }
    function nT(e, t, a, i, o) {
      Xh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Aa(e, a), p = Aa(e, i), s = [];
          break;
        case "select":
          f = co(e, a), p = co(e, i), s = [];
          break;
        case "textarea":
          f = _c(e, a), p = _c(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && tm(e);
          break;
      }
      Oc(t, p);
      var h, x, R = null;
      for (h in f)
        if (!(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === rc) {
            var M = f[h];
            for (x in M)
              M.hasOwnProperty(x) && (R || (R = {}), R[x] = "");
          } else h === xp || h === nc || h === qh || h === Fu || h === O0 || (it.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in p) {
        var j = p[h], W = f != null ? f[h] : void 0;
        if (!(!p.hasOwnProperty(h) || j === W || j == null && W == null))
          if (h === rc)
            if (j && Object.freeze(j), W) {
              for (x in W)
                W.hasOwnProperty(x) && (!j || !j.hasOwnProperty(x)) && (R || (R = {}), R[x] = "");
              for (x in j)
                j.hasOwnProperty(x) && W[x] !== j[x] && (R || (R = {}), R[x] = j[x]);
            } else
              R || (s || (s = []), s.push(h, R)), R = j;
          else if (h === xp) {
            var G = j ? j[Kh] : void 0, K = W ? W[Kh] : void 0;
            G != null && K !== G && (s = s || []).push(h, G);
          } else h === nc ? (typeof j == "string" || typeof j == "number") && (s = s || []).push(h, "" + j) : h === qh || h === Fu || (it.hasOwnProperty(h) ? (j != null && (typeof j != "function" && Jh(h, j), h === "onScroll" && xn("scroll", e)), !s && W !== j && (s = [])) : (s = s || []).push(h, j));
      }
      return R && (ri(R, p[rc]), (s = s || []).push(rc, R)), s;
    }
    function rT(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && m(e, o);
      var s = Rl(a, i), f = Rl(a, o);
      switch (Jb(e, t, s, f), a) {
        case "input":
          _(e, o);
          break;
        case "textarea":
          jv(e, o);
          break;
        case "select":
          wc(e, o);
          break;
      }
    }
    function aT(e) {
      {
        var t = e.toLowerCase();
        return su.hasOwnProperty(t) && su[t] || null;
      }
    }
    function iT(e, t, a, i, o, s, f) {
      var p, h;
      switch (p = Rl(t, a), Xh(t, a), t) {
        case "dialog":
          xn("cancel", e), xn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < Sp.length; x++)
            xn(Sp[x], e);
          break;
        case "source":
          xn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e);
          break;
        case "details":
          xn("toggle", e);
          break;
        case "input":
          iu(e, a), xn("invalid", e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          cs(e, a), xn("invalid", e);
          break;
        case "textarea":
          Ov(e, a), xn("invalid", e);
          break;
      }
      Oc(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var R = e.attributes, M = 0; M < R.length; M++) {
          var j = R[M].name.toLowerCase();
          switch (j) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(R[M].name);
          }
        }
      }
      var W = null;
      for (var G in a)
        if (a.hasOwnProperty(G)) {
          var K = a[G];
          if (G === nc)
            typeof K == "string" ? e.textContent !== K && (a[Fu] !== !0 && em(e.textContent, K, s, f), W = [nc, K]) : typeof K == "number" && e.textContent !== "" + K && (a[Fu] !== !0 && em(e.textContent, K, s, f), W = [nc, "" + K]);
          else if (it.hasOwnProperty(G))
            K != null && (typeof K != "function" && Jh(G, K), G === "onScroll" && xn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var be = void 0, Qe = sn(G);
            if (a[Fu] !== !0) {
              if (!(G === qh || G === Fu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              G === "value" || G === "checked" || G === "selected")) {
                if (G === xp) {
                  var Fe = e.innerHTML, Mt = K ? K[Kh] : void 0;
                  if (Mt != null) {
                    var bt = M0(e, Mt);
                    bt !== Fe && Rp(G, Fe, bt);
                  }
                } else if (G === rc) {
                  if (h.delete(G), L0) {
                    var V = Fy(K);
                    be = e.getAttribute("style"), V !== be && Rp(G, be, V);
                  }
                } else if (p && !ne)
                  h.delete(G.toLowerCase()), be = pi(e, G, K), K !== be && Rp(G, be, K);
                else if (!dn(G, Qe, p) && !tr(G, K, Qe, p)) {
                  var X = !1;
                  if (Qe !== null)
                    h.delete(Qe.attributeName), be = ro(e, G, K, Qe);
                  else {
                    var H = i;
                    if (H === ni && (H = Ed(t)), H === ni)
                      h.delete(G.toLowerCase());
                    else {
                      var ce = aT(G);
                      ce !== null && ce !== G && (X = !0, h.delete(ce)), h.delete(G);
                    }
                    be = pi(e, G, K);
                  }
                  var Oe = ne;
                  !Oe && K !== be && !X && Rp(G, be, K);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[Fu] !== !0 && j0(h), t) {
        case "input":
          za(e), Y(e, a, !0);
          break;
        case "textarea":
          za(e), Lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && tm(e);
          break;
      }
      return W;
    }
    function lT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function dg(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function pg(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function vg(e, t, a) {
      {
        if (Ya)
          return;
        Ya = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function hg(e, t) {
      {
        if (t === "" || Ya)
          return;
        Ya = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function oT(e, t, a) {
      switch (t) {
        case "input":
          q(e, a);
          return;
        case "textarea":
          Oy(e, a);
          return;
        case "select":
          gd(e, a);
          return;
      }
    }
    var bp = function() {
    }, Tp = function() {
    };
    {
      var uT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], z0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], sT = z0.concat(["button"]), cT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], A0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Tp = function(e, t) {
        var a = ot({}, e || A0), i = {
          tag: t
        };
        return z0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), sT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), uT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var fT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return cT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, dT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, F0 = {};
      bp = function(e, t, a) {
        a = a || A0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = fT(e, o) ? null : i, f = s ? null : dT(e, a), p = s || f;
        if (p) {
          var h = p.tag, x = !!s + "|" + e + "|" + h;
          if (!F0[x]) {
            F0[x] = !0;
            var R = e, M = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", M = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", s) {
              var j = "";
              h === "table" && e === "tr" && (j += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, h, M, j);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, h);
          }
        }
      };
    }
    var nm = "suppressHydrationWarning", rm = "$", am = "/$", wp = "$?", _p = "$!", pT = "style", mg = null, yg = null;
    function vT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ki:
        case fs: {
          t = i === Ki ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : kc(null, "");
          break;
        }
        default: {
          var s = i === Pn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = kc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), h = Tp(null, p);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function hT(e, t, a) {
      {
        var i = e, o = kc(i.namespace, t), s = Tp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function cO(e) {
      return e;
    }
    function mT(e) {
      mg = hr(), yg = Nb();
      var t = null;
      return On(!1), t;
    }
    function yT(e) {
      Ob(yg), On(mg), mg = null, yg = null;
    }
    function gT(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (bp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, h = Tp(f.ancestorInfo, e);
          bp(null, p, h);
        }
        s = f.namespace;
      }
      var x = Zb(e, t, a, s);
      return Np(o, x), Tg(x, t), x;
    }
    function ST(e, t) {
      e.appendChild(t);
    }
    function ET(e, t, a, i, o) {
      switch (tT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function CT(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, h = Tp(f.ancestorInfo, t);
          bp(null, p, h);
        }
      }
      return nT(e, t, a, i);
    }
    function gg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function xT(e, t, a, i) {
      {
        var o = a;
        bp(null, e, o.ancestorInfo);
      }
      var s = eT(e, t);
      return Np(i, s), s;
    }
    function RT() {
      var e = window.event;
      return e === void 0 ? pr : Ou(e.type);
    }
    var Sg = typeof setTimeout == "function" ? setTimeout : void 0, bT = typeof clearTimeout == "function" ? clearTimeout : void 0, Eg = -1, P0 = typeof Promise == "function" ? Promise : void 0, TT = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 != "undefined" ? function(e) {
      return P0.resolve(null).then(e).catch(wT);
    } : Sg;
    function wT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function _T(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function kT(e, t, a, i, o, s) {
      rT(e, t, a, i, o), Tg(e, o);
    }
    function V0(e) {
      xl(e, "");
    }
    function DT(e, t, a) {
      e.nodeValue = a;
    }
    function NT(e, t) {
      e.appendChild(t);
    }
    function OT(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && tm(a);
    }
    function jT(e, t, a) {
      e.insertBefore(t, a);
    }
    function LT(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function MT(e, t) {
      e.removeChild(t);
    }
    function UT(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Cg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Pn) {
          var s = o.data;
          if (s === am)
            if (i === 0) {
              e.removeChild(o), jr(t);
              return;
            } else
              i--;
          else (s === rm || s === wp || s === _p) && i++;
        }
        a = o;
      } while (a);
      jr(t);
    }
    function zT(e, t) {
      e.nodeType === Pn ? Cg(e.parentNode, t) : e.nodeType === ea && Cg(e, t), jr(e);
    }
    function AT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function FT(e) {
      e.nodeValue = "";
    }
    function PT(e, t) {
      e = e;
      var a = t[pT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Nc("display", i);
    }
    function VT(e, t) {
      e.nodeValue = t;
    }
    function HT(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === Ki && e.documentElement && e.removeChild(e.documentElement);
    }
    function BT(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function IT(e, t) {
      return t === "" || e.nodeType !== qi ? null : e;
    }
    function $T(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function H0(e) {
      return e.data === wp;
    }
    function xg(e) {
      return e.data === _p;
    }
    function YT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function WT(e, t) {
      e._reactRetry = t;
    }
    function im(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === qi)
          break;
        if (t === Pn) {
          var a = e.data;
          if (a === rm || a === _p || a === wp)
            break;
          if (a === am)
            return null;
        }
      }
      return e;
    }
    function kp(e) {
      return im(e.nextSibling);
    }
    function QT(e) {
      return im(e.firstChild);
    }
    function GT(e) {
      return im(e.firstChild);
    }
    function qT(e) {
      return im(e.nextSibling);
    }
    function KT(e, t, a, i, o, s, f) {
      Np(s, e), Tg(e, a);
      var p;
      {
        var h = o;
        p = h.namespace;
      }
      var x = (s.mode & St) !== He;
      return iT(e, t, a, p, i, x, f);
    }
    function XT(e, t, a, i) {
      return Np(a, e), a.mode & St, lT(e, t);
    }
    function JT(e, t) {
      Np(t, e);
    }
    function ZT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === am) {
            if (a === 0)
              return kp(t);
            a--;
          } else (i === rm || i === _p || i === wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function B0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === rm || i === _p || i === wp) {
            if (a === 0)
              return t;
            a--;
          } else i === am && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ew(e) {
      jr(e);
    }
    function tw(e) {
      jr(e);
    }
    function nw(e) {
      return e !== "head" && e !== "body";
    }
    function rw(e, t, a, i) {
      var o = !0;
      em(t.nodeValue, a, i, o);
    }
    function aw(e, t, a, i, o, s) {
      if (t[nm] !== !0) {
        var f = !0;
        em(i.nodeValue, o, s, f);
      }
    }
    function iw(e, t) {
      t.nodeType === ea ? dg(e, t) : t.nodeType === Pn || pg(e, t);
    }
    function lw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? dg(a, t) : t.nodeType === Pn || pg(a, t));
      }
    }
    function ow(e, t, a, i, o) {
      (o || t[nm] !== !0) && (i.nodeType === ea ? dg(a, i) : i.nodeType === Pn || pg(a, i));
    }
    function uw(e, t, a) {
      vg(e, t);
    }
    function sw(e, t) {
      hg(e, t);
    }
    function cw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && vg(i, t);
      }
    }
    function fw(e, t) {
      {
        var a = e.parentNode;
        a !== null && hg(a, t);
      }
    }
    function dw(e, t, a, i, o, s) {
      (s || t[nm] !== !0) && vg(a, i);
    }
    function pw(e, t, a, i, o) {
      (o || t[nm] !== !0) && hg(a, i);
    }
    function vw(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function hw(e) {
      Ep(e);
    }
    var Pf = Math.random().toString(36).slice(2), Vf = "__reactFiber$" + Pf, Rg = "__reactProps$" + Pf, Dp = "__reactContainer$" + Pf, bg = "__reactEvents$" + Pf, mw = "__reactListeners$" + Pf, yw = "__reactHandles$" + Pf;
    function gw(e) {
      delete e[Vf], delete e[Rg], delete e[bg], delete e[mw], delete e[yw];
    }
    function Np(e, t) {
      t[Vf] = e;
    }
    function lm(e, t) {
      t[Dp] = e;
    }
    function I0(e) {
      e[Dp] = null;
    }
    function Op(e) {
      return !!e[Dp];
    }
    function ac(e) {
      var t = e[Vf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Dp] || a[Vf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = B0(e); o !== null; ) {
              var s = o[Vf];
              if (s)
                return s;
              o = B0(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Pu(e) {
      var t = e[Vf] || e[Dp];
      return t && (t.tag === J || t.tag === ue || t.tag === ge || t.tag === B) ? t : null;
    }
    function Hf(e) {
      if (e.tag === J || e.tag === ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function om(e) {
      return e[Rg] || null;
    }
    function Tg(e, t) {
      e[Rg] = t;
    }
    function Sw(e) {
      var t = e[bg];
      return t === void 0 && (t = e[bg] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Y0 = b.ReactDebugCurrentFrame;
    function um(e) {
      if (e) {
        var t = e._owner, a = is(e.type, e._source, t ? t.type : null);
        Y0.setExtraStackFrame(a);
      } else
        Y0.setExtraStackFrame(null);
    }
    function rl(e, t, a, i, o) {
      {
        var s = Function.call.bind(ur);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              p = x;
            }
            p && !(p instanceof Error) && (um(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), um(null)), p instanceof Error && !(p.message in $0) && ($0[p.message] = !0, um(o), y("Failed %s type: %s", a, p.message), um(null));
          }
      }
    }
    var wg = [], sm;
    sm = [];
    var Ao = -1;
    function Vu(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (Ao < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== sm[Ao] && y("Unexpected Fiber popped."), e.current = wg[Ao], wg[Ao] = null, sm[Ao] = null, Ao--;
    }
    function fa(e, t, a) {
      Ao++, wg[Ao] = e.current, sm[Ao] = a, e.current = t;
    }
    var _g;
    _g = {};
    var ci = {};
    Object.freeze(ci);
    var Fo = Vu(ci), $l = Vu(!1), kg = ci;
    function Bf(e, t, a) {
      return a && Yl(t) ? kg : Fo.current;
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function If(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ci;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = et(e) || "Unknown";
          rl(i, s, "context", p);
        }
        return o && W0(e, t, s), s;
      }
    }
    function cm() {
      return $l.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function fm(e) {
      ca($l, e), ca(Fo, e);
    }
    function Dg(e) {
      ca($l, e), ca(Fo, e);
    }
    function Q0(e, t, a) {
      {
        if (Fo.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(Fo, t, e), fa($l, a, e);
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = et(e) || "Unknown";
            _g[s] || (_g[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((et(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var h = et(e) || "Unknown";
          rl(o, f, "child context", h);
        }
        return ot({}, a, f);
      }
    }
    function dm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return kg = Fo.current, fa(Fo, a, e), fa($l, $l.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = G0(e, t, kg);
          i.__reactInternalMemoizedMergedChildContext = o, ca($l, e), ca(Fo, e), fa(Fo, o, e), fa($l, a, e);
        } else
          ca($l, e), fa($l, a, e);
      }
    }
    function Ew(e) {
      {
        if (!oh(e) || e.tag !== $)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case B:
              return t.stateNode.context;
            case $: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Hu = 0, pm = 1, Po = null, Ng = !1, Og = !1;
    function K0(e) {
      Po === null ? Po = [e] : Po.push(e);
    }
    function Cw(e) {
      Ng = !0, K0(e);
    }
    function X0() {
      Ng && Bu();
    }
    function Bu() {
      if (!Og && Po !== null) {
        Og = !0;
        var e = 0, t = xa();
        try {
          var a = !0, i = Po;
          for (Gn(ua); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Po = null, Ng = !1;
        } catch (s) {
          throw Po !== null && (Po = Po.slice(e + 1)), Ud(Zi, Bu), s;
        } finally {
          Gn(t), Og = !1;
        }
      }
      return null;
    }
    var $f = [], Yf = 0, vm = null, hm = 0, ki = [], Di = 0, ic = null, Vo = 1, Ho = "";
    function xw(e) {
      return oc(), (e.flags & Ts) !== Ve;
    }
    function Rw(e) {
      return oc(), hm;
    }
    function bw() {
      var e = Ho, t = Vo, a = t & ~Tw(t);
      return a.toString(32) + e;
    }
    function lc(e, t) {
      oc(), $f[Yf++] = hm, $f[Yf++] = vm, vm = e, hm = t;
    }
    function J0(e, t, a) {
      oc(), ki[Di++] = Vo, ki[Di++] = Ho, ki[Di++] = ic, ic = e;
      var i = Vo, o = Ho, s = mm(i) - 1, f = i & ~(1 << s), p = a + 1, h = mm(t) + s;
      if (h > 30) {
        var x = s - s % 5, R = (1 << x) - 1, M = (f & R).toString(32), j = f >> x, W = s - x, G = mm(t) + W, K = p << W, be = K | j, Qe = M + o;
        Vo = 1 << G | be, Ho = Qe;
      } else {
        var Fe = p << s, Mt = Fe | f, bt = o;
        Vo = 1 << h | Mt, Ho = bt;
      }
    }
    function jg(e) {
      oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        lc(e, a), J0(e, a, i);
      }
    }
    function mm(e) {
      return 32 - Qn(e);
    }
    function Tw(e) {
      return 1 << mm(e) - 1;
    }
    function Lg(e) {
      for (; e === vm; )
        vm = $f[--Yf], $f[Yf] = null, hm = $f[--Yf], $f[Yf] = null;
      for (; e === ic; )
        ic = ki[--Di], ki[Di] = null, Ho = ki[--Di], ki[Di] = null, Vo = ki[--Di], ki[Di] = null;
    }
    function ww() {
      return oc(), ic !== null ? {
        id: Vo,
        overflow: Ho
      } : null;
    }
    function _w(e, t) {
      oc(), ki[Di++] = Vo, ki[Di++] = Ho, ki[Di++] = ic, Vo = t.id, Ho = t.overflow, ic = e;
    }
    function oc() {
      Hr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Vr = null, Ni = null, al = !1, uc = !1, Iu = null;
    function kw() {
      al && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Z0() {
      uc = !0;
    }
    function Dw() {
      return uc;
    }
    function Nw(e) {
      var t = e.stateNode.containerInfo;
      return Ni = GT(t), Vr = e, al = !0, Iu = null, uc = !1, !0;
    }
    function Ow(e, t, a) {
      return Ni = qT(t), Vr = e, al = !0, Iu = null, uc = !1, a !== null && _w(e, a), !0;
    }
    function eC(e, t) {
      switch (e.tag) {
        case B: {
          iw(e.stateNode.containerInfo, t);
          break;
        }
        case J: {
          var a = (e.mode & St) !== He;
          ow(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ge: {
          var i = e.memoizedState;
          i.dehydrated !== null && lw(i.dehydrated, t);
          break;
        }
      }
    }
    function tC(e, t) {
      eC(e, t);
      var a = Uk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ta) : i.push(a);
    }
    function Mg(e, t) {
      {
        if (uc)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case J:
                var i = t.type;
                t.pendingProps, uw(a, i);
                break;
              case ue:
                var o = t.pendingProps;
                sw(a, o);
                break;
            }
            break;
          }
          case J: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case J: {
                var h = t.type, x = t.pendingProps, R = (e.mode & St) !== He;
                dw(
                  s,
                  f,
                  p,
                  h,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case ue: {
                var M = t.pendingProps, j = (e.mode & St) !== He;
                pw(
                  s,
                  f,
                  p,
                  M,
                  // TODO: Delete this argument when we remove the legacy root API.
                  j
                );
                break;
              }
            }
            break;
          }
          case ge: {
            var W = e.memoizedState, G = W.dehydrated;
            if (G !== null) switch (t.tag) {
              case J:
                var K = t.type;
                t.pendingProps, cw(G, K);
                break;
              case ue:
                var be = t.pendingProps;
                fw(G, be);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function nC(e, t) {
      t.flags = t.flags & ~Tn | bn, Mg(e, t);
    }
    function rC(e, t) {
      switch (e.tag) {
        case J: {
          var a = e.type;
          e.pendingProps;
          var i = BT(t, a);
          return i !== null ? (e.stateNode = i, Vr = e, Ni = QT(i), !0) : !1;
        }
        case ue: {
          var o = e.pendingProps, s = IT(t, o);
          return s !== null ? (e.stateNode = s, Vr = e, Ni = null, !0) : !1;
        }
        case ge: {
          var f = $T(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ww(),
              retryLane: ia
            };
            e.memoizedState = p;
            var h = zk(f);
            return h.return = e, e.child = h, Vr = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ug(e) {
      return (e.mode & St) !== He && (e.flags & mt) === Ve;
    }
    function zg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ag(e) {
      if (al) {
        var t = Ni;
        if (!t) {
          Ug(e) && (Mg(Vr, e), zg()), nC(Vr, e), al = !1, Vr = e;
          return;
        }
        var a = t;
        if (!rC(e, t)) {
          Ug(e) && (Mg(Vr, e), zg()), t = kp(a);
          var i = Vr;
          if (!t || !rC(e, t)) {
            nC(Vr, e), al = !1, Vr = e;
            return;
          }
          tC(i, a);
        }
      }
    }
    function jw(e, t, a) {
      var i = e.stateNode, o = !uc, s = KT(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Lw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = XT(t, a, e);
      if (i) {
        var o = Vr;
        if (o !== null)
          switch (o.tag) {
            case B: {
              var s = o.stateNode.containerInfo, f = (o.mode & St) !== He;
              rw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case J: {
              var p = o.type, h = o.memoizedProps, x = o.stateNode, R = (o.mode & St) !== He;
              aw(
                p,
                h,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function Mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      JT(a, e);
    }
    function Uw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ZT(a);
    }
    function aC(e) {
      for (var t = e.return; t !== null && t.tag !== J && t.tag !== B && t.tag !== ge; )
        t = t.return;
      Vr = t;
    }
    function ym(e) {
      if (e !== Vr)
        return !1;
      if (!al)
        return aC(e), al = !0, !1;
      if (e.tag !== B && (e.tag !== J || nw(e.type) && !gg(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Ug(e))
            iC(e), zg();
          else
            for (; t; )
              tC(e, t), t = kp(t);
      }
      return aC(e), e.tag === ge ? Ni = Uw(e) : Ni = Vr ? kp(e.stateNode) : null, !0;
    }
    function zw() {
      return al && Ni !== null;
    }
    function iC(e) {
      for (var t = Ni; t; )
        eC(e, t), t = kp(t);
    }
    function Wf() {
      Vr = null, Ni = null, al = !1, uc = !1;
    }
    function lC() {
      Iu !== null && (Zx(Iu), Iu = null);
    }
    function Hr() {
      return al;
    }
    function Fg(e) {
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    var Aw = b.ReactCurrentBatchConfig, Fw = null;
    function Pw() {
      return Aw.transition;
    }
    var il = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Vw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ut && (t = a), a = a.return;
        return t;
      }, sc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, jp = [], Lp = [], Mp = [], Up = [], zp = [], Ap = [], cc = /* @__PURE__ */ new Set();
      il.recordUnsafeLifecycleWarnings = function(e, t) {
        cc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && jp.push(e), e.mode & ut && typeof t.UNSAFE_componentWillMount == "function" && Lp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & ut && typeof t.UNSAFE_componentWillReceiveProps == "function" && Up.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & ut && typeof t.UNSAFE_componentWillUpdate == "function" && Ap.push(e));
      }, il.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(j) {
          e.add(et(j) || "Component"), cc.add(j.type);
        }), jp = []);
        var t = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(j) {
          t.add(et(j) || "Component"), cc.add(j.type);
        }), Lp = []);
        var a = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(j) {
          a.add(et(j) || "Component"), cc.add(j.type);
        }), Mp = []);
        var i = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(j) {
          i.add(et(j) || "Component"), cc.add(j.type);
        }), Up = []);
        var o = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(j) {
          o.add(et(j) || "Component"), cc.add(j.type);
        }), zp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ap.length > 0 && (Ap.forEach(function(j) {
          s.add(et(j) || "Component"), cc.add(j.type);
        }), Ap = []), t.size > 0) {
          var f = sc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = sc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var h = sc(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var x = sc(e);
          O(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var R = sc(a);
          O(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (o.size > 0) {
          var M = sc(o);
          O(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
      };
      var gm = /* @__PURE__ */ new Map(), oC = /* @__PURE__ */ new Set();
      il.recordLegacyContextWarning = function(e, t) {
        var a = Vw(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oC.has(e.type)) {
          var i = gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], gm.set(a, i)), i.push(e));
        }
      }, il.flushLegacyContextWarning = function() {
        gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(et(s) || "Component"), oC.add(s.type);
            });
            var o = sc(i);
            try {
              Jt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Rn();
            }
          }
        });
      }, il.discardPendingWarnings = function() {
        jp = [], Lp = [], Mp = [], Up = [], zp = [], Ap = [], gm = /* @__PURE__ */ new Map();
      };
    }
    var Pg, Vg, Hg, Bg, Ig, uC = function(e, t) {
    };
    Pg = !1, Vg = !1, Hg = {}, Bg = {}, Ig = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = et(t) || "Component";
        Bg[a] || (Bg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Hw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Fp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ut || Ie) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== $) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Hw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = et(e) || "Component";
          Hg[o] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), Hg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== $)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          Ja(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var R = function(M) {
            var j = h.refs;
            M === null ? delete j[x] : j[x] = M;
          };
          return R._stringRef = x, R;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Sm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Em(e) {
      {
        var t = et(e) || "Component";
        if (Ig[t])
          return;
        Ig[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function cC(e) {
      function t(V, X) {
        if (e) {
          var H = V.deletions;
          H === null ? (V.deletions = [X], V.flags |= ta) : H.push(X);
        }
      }
      function a(V, X) {
        if (!e)
          return null;
        for (var H = X; H !== null; )
          t(V, H), H = H.sibling;
        return null;
      }
      function i(V, X) {
        for (var H = /* @__PURE__ */ new Map(), ce = X; ce !== null; )
          ce.key !== null ? H.set(ce.key, ce) : H.set(ce.index, ce), ce = ce.sibling;
        return H;
      }
      function o(V, X) {
        var H = Sc(V, X);
        return H.index = 0, H.sibling = null, H;
      }
      function s(V, X, H) {
        if (V.index = H, !e)
          return V.flags |= Ts, X;
        var ce = V.alternate;
        if (ce !== null) {
          var Oe = ce.index;
          return Oe < X ? (V.flags |= bn, X) : Oe;
        } else
          return V.flags |= bn, X;
      }
      function f(V) {
        return e && V.alternate === null && (V.flags |= bn), V;
      }
      function p(V, X, H, ce) {
        if (X === null || X.tag !== ue) {
          var Oe = FE(H, V.mode, ce);
          return Oe.return = V, Oe;
        } else {
          var _e = o(X, H);
          return _e.return = V, _e;
        }
      }
      function h(V, X, H, ce) {
        var Oe = H.type;
        if (Oe === Kr)
          return R(V, X, H.props.children, ce, H.key);
        if (X !== null && (X.elementType === Oe || // Keep this check inline so it only runs on the false path:
        hR(X, H) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === rt && sC(Oe) === X.type)) {
          var _e = o(X, H.props);
          return _e.ref = Fp(V, X, H), _e.return = V, _e._debugSource = H._source, _e._debugOwner = H._owner, _e;
        }
        var Je = AE(H, V.mode, ce);
        return Je.ref = Fp(V, X, H), Je.return = V, Je;
      }
      function x(V, X, H, ce) {
        if (X === null || X.tag !== he || X.stateNode.containerInfo !== H.containerInfo || X.stateNode.implementation !== H.implementation) {
          var Oe = PE(H, V.mode, ce);
          return Oe.return = V, Oe;
        } else {
          var _e = o(X, H.children || []);
          return _e.return = V, _e;
        }
      }
      function R(V, X, H, ce, Oe) {
        if (X === null || X.tag !== le) {
          var _e = es(H, V.mode, ce, Oe);
          return _e.return = V, _e;
        } else {
          var Je = o(X, H);
          return Je.return = V, Je;
        }
      }
      function M(V, X, H) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var ce = FE("" + X, V.mode, H);
          return ce.return = V, ce;
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case cr: {
              var Oe = AE(X, V.mode, H);
              return Oe.ref = Fp(V, null, X), Oe.return = V, Oe;
            }
            case Sa: {
              var _e = PE(X, V.mode, H);
              return _e.return = V, _e;
            }
            case rt: {
              var Je = X._payload, lt = X._init;
              return M(V, lt(Je), H);
            }
          }
          if (st(X) || yn(X)) {
            var rn = es(X, V.mode, H, null);
            return rn.return = V, rn;
          }
          Sm(V, X);
        }
        return typeof X == "function" && Em(V), null;
      }
      function j(V, X, H, ce) {
        var Oe = X !== null ? X.key : null;
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return Oe !== null ? null : p(V, X, "" + H, ce);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case cr:
              return H.key === Oe ? h(V, X, H, ce) : null;
            case Sa:
              return H.key === Oe ? x(V, X, H, ce) : null;
            case rt: {
              var _e = H._payload, Je = H._init;
              return j(V, X, Je(_e), ce);
            }
          }
          if (st(H) || yn(H))
            return Oe !== null ? null : R(V, X, H, ce, null);
          Sm(V, H);
        }
        return typeof H == "function" && Em(V), null;
      }
      function W(V, X, H, ce, Oe) {
        if (typeof ce == "string" && ce !== "" || typeof ce == "number") {
          var _e = V.get(H) || null;
          return p(X, _e, "" + ce, Oe);
        }
        if (typeof ce == "object" && ce !== null) {
          switch (ce.$$typeof) {
            case cr: {
              var Je = V.get(ce.key === null ? H : ce.key) || null;
              return h(X, Je, ce, Oe);
            }
            case Sa: {
              var lt = V.get(ce.key === null ? H : ce.key) || null;
              return x(X, lt, ce, Oe);
            }
            case rt:
              var rn = ce._payload, zt = ce._init;
              return W(V, X, H, zt(rn), Oe);
          }
          if (st(ce) || yn(ce)) {
            var Xn = V.get(H) || null;
            return R(X, Xn, ce, Oe, null);
          }
          Sm(X, ce);
        }
        return typeof ce == "function" && Em(X), null;
      }
      function G(V, X, H) {
        {
          if (typeof V != "object" || V === null)
            return X;
          switch (V.$$typeof) {
            case cr:
            case Sa:
              uC(V, H);
              var ce = V.key;
              if (typeof ce != "string")
                break;
              if (X === null) {
                X = /* @__PURE__ */ new Set(), X.add(ce);
                break;
              }
              if (!X.has(ce)) {
                X.add(ce);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ce);
              break;
            case rt:
              var Oe = V._payload, _e = V._init;
              G(_e(Oe), X, H);
              break;
          }
        }
        return X;
      }
      function K(V, X, H, ce) {
        for (var Oe = null, _e = 0; _e < H.length; _e++) {
          var Je = H[_e];
          Oe = G(Je, Oe, V);
        }
        for (var lt = null, rn = null, zt = X, Xn = 0, At = 0, $n = null; zt !== null && At < H.length; At++) {
          zt.index > At ? ($n = zt, zt = null) : $n = zt.sibling;
          var pa = j(V, zt, H[At], ce);
          if (pa === null) {
            zt === null && (zt = $n);
            break;
          }
          e && zt && pa.alternate === null && t(V, zt), Xn = s(pa, Xn, At), rn === null ? lt = pa : rn.sibling = pa, rn = pa, zt = $n;
        }
        if (At === H.length) {
          if (a(V, zt), Hr()) {
            var Gr = At;
            lc(V, Gr);
          }
          return lt;
        }
        if (zt === null) {
          for (; At < H.length; At++) {
            var di = M(V, H[At], ce);
            di !== null && (Xn = s(di, Xn, At), rn === null ? lt = di : rn.sibling = di, rn = di);
          }
          if (Hr()) {
            var Da = At;
            lc(V, Da);
          }
          return lt;
        }
        for (var Na = i(V, zt); At < H.length; At++) {
          var va = W(Na, V, At, H[At], ce);
          va !== null && (e && va.alternate !== null && Na.delete(va.key === null ? At : va.key), Xn = s(va, Xn, At), rn === null ? lt = va : rn.sibling = va, rn = va);
        }
        if (e && Na.forEach(function(fd) {
          return t(V, fd);
        }), Hr()) {
          var Go = At;
          lc(V, Go);
        }
        return lt;
      }
      function be(V, X, H, ce) {
        var Oe = yn(H);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (Vg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Vg = !0), H.entries === Oe && (Pg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Pg = !0);
          var _e = Oe.call(H);
          if (_e)
            for (var Je = null, lt = _e.next(); !lt.done; lt = _e.next()) {
              var rn = lt.value;
              Je = G(rn, Je, V);
            }
        }
        var zt = Oe.call(H);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Xn = null, At = null, $n = X, pa = 0, Gr = 0, di = null, Da = zt.next(); $n !== null && !Da.done; Gr++, Da = zt.next()) {
          $n.index > Gr ? (di = $n, $n = null) : di = $n.sibling;
          var Na = j(V, $n, Da.value, ce);
          if (Na === null) {
            $n === null && ($n = di);
            break;
          }
          e && $n && Na.alternate === null && t(V, $n), pa = s(Na, pa, Gr), At === null ? Xn = Na : At.sibling = Na, At = Na, $n = di;
        }
        if (Da.done) {
          if (a(V, $n), Hr()) {
            var va = Gr;
            lc(V, va);
          }
          return Xn;
        }
        if ($n === null) {
          for (; !Da.done; Gr++, Da = zt.next()) {
            var Go = M(V, Da.value, ce);
            Go !== null && (pa = s(Go, pa, Gr), At === null ? Xn = Go : At.sibling = Go, At = Go);
          }
          if (Hr()) {
            var fd = Gr;
            lc(V, fd);
          }
          return Xn;
        }
        for (var mv = i(V, $n); !Da.done; Gr++, Da = zt.next()) {
          var Zl = W(mv, V, Gr, Da.value, ce);
          Zl !== null && (e && Zl.alternate !== null && mv.delete(Zl.key === null ? Gr : Zl.key), pa = s(Zl, pa, Gr), At === null ? Xn = Zl : At.sibling = Zl, At = Zl);
        }
        if (e && mv.forEach(function(pD) {
          return t(V, pD);
        }), Hr()) {
          var dD = Gr;
          lc(V, dD);
        }
        return Xn;
      }
      function Qe(V, X, H, ce) {
        if (X !== null && X.tag === ue) {
          a(V, X.sibling);
          var Oe = o(X, H);
          return Oe.return = V, Oe;
        }
        a(V, X);
        var _e = FE(H, V.mode, ce);
        return _e.return = V, _e;
      }
      function Fe(V, X, H, ce) {
        for (var Oe = H.key, _e = X; _e !== null; ) {
          if (_e.key === Oe) {
            var Je = H.type;
            if (Je === Kr) {
              if (_e.tag === le) {
                a(V, _e.sibling);
                var lt = o(_e, H.props.children);
                return lt.return = V, lt._debugSource = H._source, lt._debugOwner = H._owner, lt;
              }
            } else if (_e.elementType === Je || // Keep this check inline so it only runs on the false path:
            hR(_e, H) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Je == "object" && Je !== null && Je.$$typeof === rt && sC(Je) === _e.type) {
              a(V, _e.sibling);
              var rn = o(_e, H.props);
              return rn.ref = Fp(V, _e, H), rn.return = V, rn._debugSource = H._source, rn._debugOwner = H._owner, rn;
            }
            a(V, _e);
            break;
          } else
            t(V, _e);
          _e = _e.sibling;
        }
        if (H.type === Kr) {
          var zt = es(H.props.children, V.mode, ce, H.key);
          return zt.return = V, zt;
        } else {
          var Xn = AE(H, V.mode, ce);
          return Xn.ref = Fp(V, X, H), Xn.return = V, Xn;
        }
      }
      function Mt(V, X, H, ce) {
        for (var Oe = H.key, _e = X; _e !== null; ) {
          if (_e.key === Oe)
            if (_e.tag === he && _e.stateNode.containerInfo === H.containerInfo && _e.stateNode.implementation === H.implementation) {
              a(V, _e.sibling);
              var Je = o(_e, H.children || []);
              return Je.return = V, Je;
            } else {
              a(V, _e);
              break;
            }
          else
            t(V, _e);
          _e = _e.sibling;
        }
        var lt = PE(H, V.mode, ce);
        return lt.return = V, lt;
      }
      function bt(V, X, H, ce) {
        var Oe = typeof H == "object" && H !== null && H.type === Kr && H.key === null;
        if (Oe && (H = H.props.children), typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case cr:
              return f(Fe(V, X, H, ce));
            case Sa:
              return f(Mt(V, X, H, ce));
            case rt:
              var _e = H._payload, Je = H._init;
              return bt(V, X, Je(_e), ce);
          }
          if (st(H))
            return K(V, X, H, ce);
          if (yn(H))
            return be(V, X, H, ce);
          Sm(V, H);
        }
        return typeof H == "string" && H !== "" || typeof H == "number" ? f(Qe(V, X, "" + H, ce)) : (typeof H == "function" && Em(V), a(V, X));
      }
      return bt;
    }
    var Qf = cC(!0), fC = cC(!1);
    function Bw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Iw(e, t) {
      for (var a = e.child; a !== null; )
        Nk(a, t), a = a.sibling;
    }
    var $g = Vu(null), Yg;
    Yg = {};
    var Cm = null, Gf = null, Wg = null, xm = !1;
    function Rm() {
      Cm = null, Gf = null, Wg = null, xm = !1;
    }
    function dC() {
      xm = !0;
    }
    function pC() {
      xm = !1;
    }
    function vC(e, t, a) {
      fa($g, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Yg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Yg;
    }
    function Qg(e, t) {
      var a = $g.current;
      ca($g, t), e._currentValue = a;
    }
    function Gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (wo(i.childLanes, t) ? o !== null && !wo(o.childLanes, t) && (o.childLanes = ct(o.childLanes, t)) : (i.childLanes = ct(i.childLanes, t), o !== null && (o.childLanes = ct(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $w(e, t, a) {
      Yw(e, t, a);
    }
    function Yw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === $) {
                var p = ir(a), h = Bo(qt, p);
                h.tag = Tm;
                var x = i.updateQueue;
                if (x !== null) {
                  var R = x.shared, M = R.pending;
                  M === null ? h.next = h : (h.next = M.next, M.next = h), R.pending = h;
                }
              }
              i.lanes = ct(i.lanes, a);
              var j = i.alternate;
              j !== null && (j.lanes = ct(j.lanes, a)), Gg(i.return, a, e), s.lanes = ct(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === me)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === un) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = ct(W.lanes, a);
          var G = W.alternate;
          G !== null && (G.lanes = ct(G.lanes, a)), Gg(W, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var K = o.sibling;
            if (K !== null) {
              K.return = o.return, o = K;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function qf(e, t) {
      Cm = e, Gf = null, Wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Zp(), a.firstContext = null);
      }
    }
    function or(e) {
      xm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Gf === null) {
          if (Cm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Gf = a, Cm.dependencies = {
            lanes: Z,
            firstContext: a
          };
        } else
          Gf = Gf.next = a;
      }
      return t;
    }
    var fc = null;
    function qg(e) {
      fc === null ? fc = [e] : fc.push(e);
    }
    function Ww() {
      if (fc !== null) {
        for (var e = 0; e < fc.length; e++) {
          var t = fc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        fc = null;
      }
    }
    function hC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, qg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, bm(e, i);
    }
    function Qw(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, qg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Gw(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, qg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, bm(e, i);
    }
    function Wa(e, t) {
      return bm(e, t);
    }
    var qw = bm;
    function bm(e, t) {
      e.lanes = ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ct(a.lanes, t)), a === null && (e.flags & (bn | Tn)) !== Ve && fR(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = ct(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = ct(a.childLanes, t) : (o.flags & (bn | Tn)) !== Ve && fR(e), i = o, o = o.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mC = 0, yC = 1, Tm = 2, Kg = 3, wm = !1, Xg, _m;
    Xg = !1, _m = null;
    function Jg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Z
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Bo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function $u(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (_m === o && !Xg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Xg = !0), Q1()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, qw(e, a);
      } else
        return Gw(e, o, t, a);
    }
    function km(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Jd(a)) {
          var s = o.lanes;
          s = vf(s, e.pendingLanes);
          var f = ct(s, a);
          o.lanes = f, Hs(e, f);
        }
      }
    }
    function Zg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var h = p;
            do {
              var x = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = x : (f.next = x, f = x), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function Kw(e, t, a, i, o, s) {
      switch (a.tag) {
        case yC: {
          var f = a.payload;
          if (typeof f == "function") {
            dC();
            var p = f.call(s, i, o);
            {
              if (e.mode & ut) {
                Gt(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Gt(!1);
                }
              }
              pC();
            }
            return p;
          }
          return f;
        }
        case Kg:
          e.flags = e.flags & ~Dr | mt;
        case mC: {
          var h = a.payload, x;
          if (typeof h == "function") {
            dC(), x = h.call(s, i, o);
            {
              if (e.mode & ut) {
                Gt(!0);
                try {
                  h.call(s, i, o);
                } finally {
                  Gt(!1);
                }
              }
              pC();
            }
          } else
            x = h;
          return x == null ? i : ot({}, i, x);
        }
        case Tm:
          return wm = !0, i;
      }
      return i;
    }
    function Dm(e, t, a, i) {
      var o = e.updateQueue;
      wm = !1, _m = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var h = p, x = h.next;
        h.next = null, f === null ? s = x : f.next = x, f = h;
        var R = e.alternate;
        if (R !== null) {
          var M = R.updateQueue, j = M.lastBaseUpdate;
          j !== f && (j === null ? M.firstBaseUpdate = x : j.next = x, M.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var W = o.baseState, G = Z, K = null, be = null, Qe = null, Fe = s;
        do {
          var Mt = Fe.lane, bt = Fe.eventTime;
          if (wo(i, Mt)) {
            if (Qe !== null) {
              var X = {
                eventTime: bt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bn,
                tag: Fe.tag,
                payload: Fe.payload,
                callback: Fe.callback,
                next: null
              };
              Qe = Qe.next = X;
            }
            W = Kw(e, o, Fe, W, t, a);
            var H = Fe.callback;
            if (H !== null && // If the update was already committed, we should not queue its
            // callback again.
            Fe.lane !== Bn) {
              e.flags |= ln;
              var ce = o.effects;
              ce === null ? o.effects = [Fe] : ce.push(Fe);
            }
          } else {
            var V = {
              eventTime: bt,
              lane: Mt,
              tag: Fe.tag,
              payload: Fe.payload,
              callback: Fe.callback,
              next: null
            };
            Qe === null ? (be = Qe = V, K = W) : Qe = Qe.next = V, G = ct(G, Mt);
          }
          if (Fe = Fe.next, Fe === null) {
            if (p = o.shared.pending, p === null)
              break;
            var Oe = p, _e = Oe.next;
            Oe.next = null, Fe = _e, o.lastBaseUpdate = Oe, o.shared.pending = null;
          }
        } while (!0);
        Qe === null && (K = W), o.baseState = K, o.firstBaseUpdate = be, o.lastBaseUpdate = Qe;
        var Je = o.shared.interleaved;
        if (Je !== null) {
          var lt = Je;
          do
            G = ct(G, lt.lane), lt = lt.next;
          while (lt !== Je);
        } else s === null && (o.shared.lanes = Z);
        fv(G), e.lanes = G, e.memoizedState = W;
      }
      _m = null;
    }
    function Xw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SC() {
      wm = !1;
    }
    function Nm() {
      return wm;
    }
    function EC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, Xw(f, a));
        }
    }
    var Pp = {}, Yu = Vu(Pp), Vp = Vu(Pp), Om = Vu(Pp);
    function jm(e) {
      if (e === Pp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CC() {
      var e = jm(Om.current);
      return e;
    }
    function eS(e, t) {
      fa(Om, t, e), fa(Vp, e, e), fa(Yu, Pp, e);
      var a = vT(t);
      ca(Yu, e), fa(Yu, a, e);
    }
    function Kf(e) {
      ca(Yu, e), ca(Vp, e), ca(Om, e);
    }
    function tS() {
      var e = jm(Yu.current);
      return e;
    }
    function xC(e) {
      jm(Om.current);
      var t = jm(Yu.current), a = hT(t, e.type);
      t !== a && (fa(Vp, e, e), fa(Yu, a, e));
    }
    function nS(e) {
      Vp.current === e && (ca(Yu, e), ca(Vp, e));
    }
    var Jw = 0, RC = 1, bC = 1, Hp = 2, ll = Vu(Jw);
    function rS(e, t) {
      return (e & t) !== 0;
    }
    function Xf(e) {
      return e & RC;
    }
    function aS(e, t) {
      return e & RC | t;
    }
    function Zw(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      fa(ll, t, e);
    }
    function Jf(e) {
      ca(ll, e);
    }
    function e_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Lm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ge) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || H0(i) || xg(i))
              return t;
          }
        } else if (t.tag === Kt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & mt) !== Ve;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qa = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), Br = (
      /*   */
      8
    ), iS = [];
    function lS() {
      for (var e = 0; e < iS.length; e++) {
        var t = iS[e];
        t._workInProgressVersionPrimary = null;
      }
      iS.length = 0;
    }
    function t_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ne = b.ReactCurrentDispatcher, Bp = b.ReactCurrentBatchConfig, oS, Zf;
    oS = /* @__PURE__ */ new Set();
    var dc = Z, nn = null, gr = null, Sr = null, Mm = !1, Ip = !1, $p = 0, n_ = 0, r_ = 25, te = null, Oi = null, Qu = -1, uS = !1;
    function Yt() {
      {
        var e = te;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function Se() {
      {
        var e = te;
        Oi !== null && (Qu++, Oi[Qu] !== e && a_(e));
      }
    }
    function ed(e) {
      e != null && !st(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function a_(e) {
      {
        var t = et(nn);
        if (!oS.has(t) && (oS.add(t), Oi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Qu; o++) {
            for (var s = Oi[o], f = o === Qu ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function sS(e, t) {
      if (uS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!we(e[a], t[a]))
          return !1;
      return !0;
    }
    function td(e, t, a, i, o, s) {
      dc = s, nn = t, Oi = e !== null ? e._debugHookTypes : null, Qu = -1, uS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Z, e !== null && e.memoizedState !== null ? Ne.current = WC : Oi !== null ? Ne.current = YC : Ne.current = $C;
      var f = a(i, o);
      if (Ip) {
        var p = 0;
        do {
          if (Ip = !1, $p = 0, p >= r_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, uS = !1, gr = null, Sr = null, t.updateQueue = null, Qu = -1, Ne.current = QC, f = a(i, o);
        } while (Ip);
      }
      Ne.current = Qm, t._debugHookTypes = Oi;
      var h = gr !== null && gr.next !== null;
      if (dc = Z, nn = null, gr = null, Sr = null, te = null, Oi = null, Qu = -1, e !== null && (e.flags & Hn) !== (t.flags & Hn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & St) !== He && y("Internal React error: Expected static flag was missing. Please notify the React team."), Mm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function nd() {
      var e = $p !== 0;
      return $p = 0, e;
    }
    function TC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & tn) !== He ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Vs(e.lanes, a);
    }
    function wC() {
      if (Ne.current = Qm, Mm) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Mm = !1;
      }
      dc = Z, nn = null, gr = null, Sr = null, Oi = null, Qu = -1, te = null, PC = !1, Ip = !1, $p = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? nn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function ji() {
      var e;
      if (gr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = nn.memoizedState : a = Sr.next, a !== null)
        Sr = a, a = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var i = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? nn.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function _C() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function cS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function fS(e, t, a) {
      var i = Ql(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Z,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = u_.bind(null, nn, s);
      return [i.memoizedState, f];
    }
    function dS(e, t, a) {
      var i = ji(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = gr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var h = f.next, x = p.next;
          f.next = x, p.next = h;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var R = f.next, M = s.baseState, j = null, W = null, G = null, K = R;
        do {
          var be = K.lane;
          if (wo(dc, be)) {
            if (G !== null) {
              var Fe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bn,
                action: K.action,
                hasEagerState: K.hasEagerState,
                eagerState: K.eagerState,
                next: null
              };
              G = G.next = Fe;
            }
            if (K.hasEagerState)
              M = K.eagerState;
            else {
              var Mt = K.action;
              M = e(M, Mt);
            }
          } else {
            var Qe = {
              lane: be,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            };
            G === null ? (W = G = Qe, j = M) : G = G.next = Qe, nn.lanes = ct(nn.lanes, be), fv(be);
          }
          K = K.next;
        } while (K !== null && K !== R);
        G === null ? j = M : G.next = W, we(M, i.memoizedState) || Zp(), i.memoizedState = M, i.baseState = j, i.baseQueue = G, o.lastRenderedState = M;
      }
      var bt = o.interleaved;
      if (bt !== null) {
        var V = bt;
        do {
          var X = V.lane;
          nn.lanes = ct(nn.lanes, X), fv(X), V = V.next;
        } while (V !== bt);
      } else f === null && (o.lanes = Z);
      var H = o.dispatch;
      return [i.memoizedState, H];
    }
    function pS(e, t, a) {
      var i = ji(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var h = f.next, x = h;
        do {
          var R = x.action;
          p = e(p, R), x = x.next;
        } while (x !== h);
        we(p, i.memoizedState) || Zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function fO(e, t, a) {
    }
    function dO(e, t, a) {
    }
    function vS(e, t, a) {
      var i = nn, o = Ql(), s, f = Hr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Zf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      } else {
        if (s = t(), !Zf) {
          var p = t();
          we(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
        }
        var h = dy();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ps(h, dc) || kC(i, t, s);
      }
      o.memoizedState = s;
      var x = {
        value: s,
        getSnapshot: t
      };
      return o.queue = x, Pm(NC.bind(null, i, x, e), [e]), i.flags |= Ea, Yp(mr | Br, DC.bind(null, i, x, s, t), void 0, null), s;
    }
    function Um(e, t, a) {
      var i = nn, o = ji(), s = t();
      if (!Zf) {
        var f = t();
        we(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      }
      var p = o.memoizedState, h = !we(p, s);
      h && (o.memoizedState = s, Zp());
      var x = o.queue;
      if (Qp(NC.bind(null, i, x, e), [e]), x.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= Ea, Yp(mr | Br, DC.bind(null, i, x, s, t), void 0, null);
        var R = dy();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ps(R, dc) || kC(i, t, s);
      }
      return s;
    }
    function kC(e, t, a) {
      e.flags |= Hc;
      var i = {
        getSnapshot: t,
        value: a
      }, o = nn.updateQueue;
      if (o === null)
        o = _C(), nn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function DC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OC(t) && jC(e);
    }
    function NC(e, t, a) {
      var i = function() {
        OC(t) && jC(e);
      };
      return a(i);
    }
    function OC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !we(a, i);
      } catch {
        return !0;
      }
    }
    function jC(e) {
      var t = Wa(e, Ke);
      t !== null && Rr(t, e, Ke, qt);
    }
    function zm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Z,
        dispatch: null,
        lastRenderedReducer: cS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = s_.bind(null, nn, a);
      return [t.memoizedState, i];
    }
    function hS(e) {
      return dS(cS);
    }
    function mS(e) {
      return pS(cS);
    }
    function Yp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = nn.updateQueue;
      if (s === null)
        s = _C(), nn.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function yS(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Am(e) {
      var t = ji();
      return t.memoizedState;
    }
    function Wp(e, t, a, i) {
      var o = Ql(), s = i === void 0 ? null : i;
      nn.flags |= e, o.memoizedState = Yp(mr | t, a, void 0, s);
    }
    function Fm(e, t, a, i) {
      var o = ji(), s = i === void 0 ? null : i, f = void 0;
      if (gr !== null) {
        var p = gr.memoizedState;
        if (f = p.destroy, s !== null) {
          var h = p.deps;
          if (sS(s, h)) {
            o.memoizedState = Yp(t, a, f, s);
            return;
          }
        }
      }
      nn.flags |= e, o.memoizedState = Yp(mr | t, a, f, s);
    }
    function Pm(e, t) {
      return (nn.mode & tn) !== He ? Wp(wl | Ea | jd, Br, e, t) : Wp(Ea | jd, Br, e, t);
    }
    function Qp(e, t) {
      return Fm(Ea, Br, e, t);
    }
    function gS(e, t) {
      return Wp(Ct, Wl, e, t);
    }
    function Vm(e, t) {
      return Fm(Ct, Wl, e, t);
    }
    function SS(e, t) {
      var a = Ct;
      return a |= Tl, (nn.mode & tn) !== He && (a |= Ar), Wp(a, yr, e, t);
    }
    function Hm(e, t) {
      return Fm(Ct, yr, e, t);
    }
    function LC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function ES(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Ct;
      return o |= Tl, (nn.mode & tn) !== He && (o |= Ar), Wp(o, yr, LC.bind(null, t, e), i);
    }
    function Bm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Fm(Ct, yr, LC.bind(null, t, e), i);
    }
    function i_(e, t) {
    }
    var Im = i_;
    function CS(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function $m(e, t) {
      var a = ji(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (sS(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function xS(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Ym(e, t) {
      var a = ji(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (sS(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function RS(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function MC(e) {
      var t = ji(), a = gr, i = a.memoizedState;
      return zC(t, i, e);
    }
    function UC(e) {
      var t = ji();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return zC(t, a, e);
    }
    function zC(e, t, a) {
      var i = !Xd(dc);
      if (i) {
        if (!we(a, t)) {
          var o = Zd();
          nn.lanes = ct(nn.lanes, o), fv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Zp()), e.memoizedState = a, a;
    }
    function l_(e, t, a) {
      var i = xa();
      Gn(Bs(i, Ha)), e(!0);
      var o = Bp.transition;
      Bp.transition = {};
      var s = Bp.transition;
      Bp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Gn(i), Bp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && O("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function bS() {
      var e = zm(!1), t = e[0], a = e[1], i = l_.bind(null, a), o = Ql();
      return o.memoizedState = i, [t, i];
    }
    function AC() {
      var e = hS(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = mS(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    var PC = !1;
    function o_() {
      return PC;
    }
    function TS() {
      var e = Ql(), t = dy(), a = t.identifierPrefix, i;
      if (Hr()) {
        var o = bw();
        i = ":" + a + "R" + o;
        var s = $p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = n_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Wm() {
      var e = ji(), t = e.memoizedState;
      return t;
    }
    function u_(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        HC(t, o);
      else {
        var s = hC(e, t, o, i);
        if (s !== null) {
          var f = ka();
          Rr(s, e, i, f), BC(s, t, i);
        }
      }
      IC(e, i);
    }
    function s_(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        HC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === Z && (s === null || s.lanes === Z)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ne.current, Ne.current = ol;
            try {
              var h = t.lastRenderedState, x = f(h, a);
              if (o.hasEagerState = !0, o.eagerState = x, we(x, h)) {
                Qw(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Ne.current = p;
            }
          }
        }
        var R = hC(e, t, o, i);
        if (R !== null) {
          var M = ka();
          Rr(R, e, i, M), BC(R, t, i);
        }
      }
      IC(e, i);
    }
    function VC(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function HC(e, t) {
      Ip = Mm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BC(e, t, a) {
      if (Jd(a)) {
        var i = t.lanes;
        i = vf(i, e.pendingLanes);
        var o = ct(i, a);
        t.lanes = o, Hs(e, o);
      }
    }
    function IC(e, t, a) {
      Os(e, t);
    }
    var Qm = {
      readContext: or,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: Me
    }, $C = null, YC = null, WC = null, QC = null, Gl = null, ol = null, Gm = null;
    {
      var wS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, at = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Yt(), ed(t), CS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Yt(), or(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Yt(), ed(t), Pm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Yt(), ed(a), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Yt(), ed(t), gS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Yt(), ed(t), SS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Yt(), ed(t);
          var a = Ne.current;
          Ne.current = Gl;
          try {
            return xS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Yt();
          var i = Ne.current;
          Ne.current = Gl;
          try {
            return fS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Yt(), yS(e);
        },
        useState: function(e) {
          te = "useState", Yt();
          var t = Ne.current;
          Ne.current = Gl;
          try {
            return zm(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Yt(), RS(e);
        },
        useTransition: function() {
          return te = "useTransition", Yt(), bS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Yt(), vS(e, t, a);
        },
        useId: function() {
          return te = "useId", Yt(), TS();
        },
        unstable_isNewReconciler: Me
      }, YC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Se(), CS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Se(), or(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Se(), Pm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Se(), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Se(), gS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Se(), SS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Se();
          var a = Ne.current;
          Ne.current = Gl;
          try {
            return xS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Se();
          var i = Ne.current;
          Ne.current = Gl;
          try {
            return fS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Se(), yS(e);
        },
        useState: function(e) {
          te = "useState", Se();
          var t = Ne.current;
          Ne.current = Gl;
          try {
            return zm(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Se(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Se(), RS(e);
        },
        useTransition: function() {
          return te = "useTransition", Se(), bS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Se(), vS(e, t, a);
        },
        useId: function() {
          return te = "useId", Se(), TS();
        },
        unstable_isNewReconciler: Me
      }, WC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Se(), $m(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Se(), or(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Se(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Se(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Se(), Vm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Se(), Hm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Se();
          var a = Ne.current;
          Ne.current = ol;
          try {
            return Ym(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Se();
          var i = Ne.current;
          Ne.current = ol;
          try {
            return dS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Se(), Am();
        },
        useState: function(e) {
          te = "useState", Se();
          var t = Ne.current;
          Ne.current = ol;
          try {
            return hS(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Se(), Im();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Se(), MC(e);
        },
        useTransition: function() {
          return te = "useTransition", Se(), AC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Se(), Um(e, t);
        },
        useId: function() {
          return te = "useId", Se(), Wm();
        },
        unstable_isNewReconciler: Me
      }, QC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Se(), $m(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Se(), or(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Se(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Se(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Se(), Vm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Se(), Hm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Se();
          var a = Ne.current;
          Ne.current = Gm;
          try {
            return Ym(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Se();
          var i = Ne.current;
          Ne.current = Gm;
          try {
            return pS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Se(), Am();
        },
        useState: function(e) {
          te = "useState", Se();
          var t = Ne.current;
          Ne.current = Gm;
          try {
            return mS(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Se(), Im();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Se(), UC(e);
        },
        useTransition: function() {
          return te = "useTransition", Se(), FC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Se(), Um(e, t);
        },
        useId: function() {
          return te = "useId", Se(), Wm();
        },
        unstable_isNewReconciler: Me
      }, Gl = {
        readContext: function(e) {
          return wS(), or(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", at(), Yt(), CS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", at(), Yt(), or(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", at(), Yt(), Pm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", at(), Yt(), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", at(), Yt(), gS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", at(), Yt(), SS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", at(), Yt();
          var a = Ne.current;
          Ne.current = Gl;
          try {
            return xS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", at(), Yt();
          var i = Ne.current;
          Ne.current = Gl;
          try {
            return fS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", at(), Yt(), yS(e);
        },
        useState: function(e) {
          te = "useState", at(), Yt();
          var t = Ne.current;
          Ne.current = Gl;
          try {
            return zm(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", at(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", at(), Yt(), RS(e);
        },
        useTransition: function() {
          return te = "useTransition", at(), Yt(), bS();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", at(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", at(), Yt(), vS(e, t, a);
        },
        useId: function() {
          return te = "useId", at(), Yt(), TS();
        },
        unstable_isNewReconciler: Me
      }, ol = {
        readContext: function(e) {
          return wS(), or(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", at(), Se(), $m(e, t);
        },
        useContext: function(e) {
          return te = "useContext", at(), Se(), or(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", at(), Se(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", at(), Se(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", at(), Se(), Vm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", at(), Se(), Hm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", at(), Se();
          var a = Ne.current;
          Ne.current = ol;
          try {
            return Ym(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", at(), Se();
          var i = Ne.current;
          Ne.current = ol;
          try {
            return dS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", at(), Se(), Am();
        },
        useState: function(e) {
          te = "useState", at(), Se();
          var t = Ne.current;
          Ne.current = ol;
          try {
            return hS(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", at(), Se(), Im();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", at(), Se(), MC(e);
        },
        useTransition: function() {
          return te = "useTransition", at(), Se(), AC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", at(), Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", at(), Se(), Um(e, t);
        },
        useId: function() {
          return te = "useId", at(), Se(), Wm();
        },
        unstable_isNewReconciler: Me
      }, Gm = {
        readContext: function(e) {
          return wS(), or(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", at(), Se(), $m(e, t);
        },
        useContext: function(e) {
          return te = "useContext", at(), Se(), or(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", at(), Se(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", at(), Se(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", at(), Se(), Vm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", at(), Se(), Hm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", at(), Se();
          var a = Ne.current;
          Ne.current = ol;
          try {
            return Ym(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", at(), Se();
          var i = Ne.current;
          Ne.current = ol;
          try {
            return pS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", at(), Se(), Am();
        },
        useState: function(e) {
          te = "useState", at(), Se();
          var t = Ne.current;
          Ne.current = ol;
          try {
            return mS(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", at(), Se(), Im();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", at(), Se(), UC(e);
        },
        useTransition: function() {
          return te = "useTransition", at(), Se(), FC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", at(), Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", at(), Se(), Um(e, t);
        },
        useId: function() {
          return te = "useId", at(), Se(), Wm();
        },
        unstable_isNewReconciler: Me
      };
    }
    var Gu = S.unstable_now, GC = 0, qm = -1, Gp = -1, Km = -1, _S = !1, Xm = !1;
    function qC() {
      return _S;
    }
    function c_() {
      Xm = !0;
    }
    function f_() {
      _S = !1, Xm = !1;
    }
    function d_() {
      _S = Xm, Xm = !1;
    }
    function KC() {
      return GC;
    }
    function XC() {
      GC = Gu();
    }
    function kS(e) {
      Gp = Gu(), e.actualStartTime < 0 && (e.actualStartTime = Gu());
    }
    function JC(e) {
      Gp = -1;
    }
    function Jm(e, t) {
      if (Gp >= 0) {
        var a = Gu() - Gp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Gp = -1;
      }
    }
    function ql(e) {
      if (qm >= 0) {
        var t = Gu() - qm;
        qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Re:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function DS(e) {
      if (Km >= 0) {
        var t = Gu() - Km;
        Km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Re:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      qm = Gu();
    }
    function NS() {
      Km = Gu();
    }
    function OS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var jS = {}, LS, MS, US, zS, AS, ZC, Zm, FS, PS, VS, qp;
    {
      LS = /* @__PURE__ */ new Set(), MS = /* @__PURE__ */ new Set(), US = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set(), FS = /* @__PURE__ */ new Set(), AS = /* @__PURE__ */ new Set(), PS = /* @__PURE__ */ new Set(), VS = /* @__PURE__ */ new Set(), qp = /* @__PURE__ */ new Set();
      var ex = /* @__PURE__ */ new Set();
      Zm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          ex.has(a) || (ex.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ZC = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          AS.has(a) || (AS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(jS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(jS);
    }
    function HS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & ut) {
          Gt(!0);
          try {
            s = a(i, o);
          } finally {
            Gt(!1);
          }
        }
        ZC(t, s);
      }
      var f = s == null ? o : ot({}, o, s);
      if (e.memoizedState = f, e.lanes === Z) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var BS = {
      isMounted: Ld,
      enqueueSetState: function(e, t, a) {
        var i = yu(e), o = ka(), s = Ju(i), f = Bo(o, s);
        f.payload = t, a != null && (Zm(a, "setState"), f.callback = a);
        var p = $u(i, f, s);
        p !== null && (Rr(p, i, s, o), km(p, i, s)), Os(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = yu(e), o = ka(), s = Ju(i), f = Bo(o, s);
        f.tag = yC, f.payload = t, a != null && (Zm(a, "replaceState"), f.callback = a);
        var p = $u(i, f, s);
        p !== null && (Rr(p, i, s, o), km(p, i, s)), Os(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = yu(e), i = ka(), o = Ju(a), s = Bo(i, o);
        s.tag = Tm, t != null && (Zm(t, "forceUpdate"), s.callback = t);
        var f = $u(a, s, o);
        f !== null && (Rr(f, a, o, i), km(f, a, o)), Qd(a, o);
      }
    };
    function tx(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var h = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ut) {
            Gt(!0);
            try {
              h = p.shouldComponentUpdate(i, s, f);
            } finally {
              Gt(!1);
            }
          }
          h === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !$e(a, i) || !$e(o, s) : !0;
    }
    function p_(e, t, a) {
      var i = e.stateNode;
      {
        var o = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ut) === He && (qp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ut) === He && (qp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !PS.has(t) && (PS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate != "undefined" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !US.has(t) && (US.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || st(p)) && y("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function nx(e, t) {
      t.updater = BS, e.stateNode = t, bs(t, e), t._reactInternalInstance = jS;
    }
    function rx(e, t, a) {
      var i = !1, o = ci, s = ci, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === k && f._context === void 0
        );
        if (!p && !VS.has(t)) {
          VS.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === Hi ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = or(f);
      else {
        o = Bf(e, t, !0);
        var x = t.contextTypes;
        i = x != null, s = i ? If(e, o) : ci;
      }
      var R = new t(a, s);
      if (e.mode & ut) {
        Gt(!0);
        try {
          R = new t(a, s);
        } finally {
          Gt(!1);
        }
      }
      var M = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      nx(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && M === null) {
          var j = jt(t) || "Component";
          MS.has(j) || (MS.add(j), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", j, R.state === null ? "null" : "undefined", j));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var W = null, G = null, K = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), W !== null || G !== null || K !== null) {
            var be = jt(t) || "Component", Qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            zS.has(be) || (zS.add(be), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, be, Qe, W !== null ? `
  ` + W : "", G !== null ? `
  ` + G : "", K !== null ? `
  ` + K : ""));
          }
        }
      }
      return i && W0(e, o, s), R;
    }
    function v_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(e) || "Component"), BS.enqueueReplaceState(t, t.state, null));
    }
    function ax(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = et(e) || "Component";
          LS.has(s) || (LS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        BS.enqueueReplaceState(t, t.state, null);
      }
    }
    function IS(e, t, a, i) {
      p_(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, Jg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = or(s);
      else {
        var f = Bf(e, t, !0);
        o.context = If(e, f);
      }
      {
        if (o.state === a) {
          var p = jt(t) || "Component";
          FS.has(p) || (FS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ut && il.recordLegacyContextWarning(e, o), il.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (HS(e, t, h, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (v_(e, o), Dm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var x = Ct;
        x |= Tl, (e.mode & tn) !== He && (x |= Ar), e.flags |= x;
      }
    }
    function h_(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, h = ci;
      if (typeof p == "object" && p !== null)
        h = or(p);
      else {
        var x = Bf(e, t, !0);
        h = If(e, x);
      }
      var R = t.getDerivedStateFromProps, M = typeof R == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !M && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== h) && ax(e, o, a, h), SC();
      var j = e.memoizedState, W = o.state = j;
      if (Dm(e, a, o, i), W = e.memoizedState, s === a && j === W && !cm() && !Nm()) {
        if (typeof o.componentDidMount == "function") {
          var G = Ct;
          G |= Tl, (e.mode & tn) !== He && (G |= Ar), e.flags |= G;
        }
        return !1;
      }
      typeof R == "function" && (HS(e, t, R, a), W = e.memoizedState);
      var K = Nm() || tx(e, t, s, a, j, W, h);
      if (K) {
        if (!M && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var be = Ct;
          be |= Tl, (e.mode & tn) !== He && (be |= Ar), e.flags |= be;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Qe = Ct;
          Qe |= Tl, (e.mode & tn) !== He && (Qe |= Ar), e.flags |= Qe;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return o.props = a, o.state = W, o.context = h, K;
    }
    function m_(e, t, a, i, o) {
      var s = t.stateNode;
      gC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var h = t.pendingProps, x = s.context, R = a.contextType, M = ci;
      if (typeof R == "object" && R !== null)
        M = or(R);
      else {
        var j = Bf(t, a, !0);
        M = If(t, j);
      }
      var W = a.getDerivedStateFromProps, G = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !G && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || x !== M) && ax(t, s, i, M), SC();
      var K = t.memoizedState, be = s.state = K;
      if (Dm(t, i, s, o), be = t.memoizedState, f === h && K === be && !cm() && !Nm() && !Ce)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Pa), !1;
      typeof W == "function" && (HS(t, a, W, i), be = t.memoizedState);
      var Qe = Nm() || tx(t, a, p, i, K, be, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ce;
      return Qe ? (!G && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, be, M), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, be, M)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Pa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Pa), t.memoizedProps = i, t.memoizedState = be), s.props = i, s.state = be, s.context = M, Qe;
    }
    function pc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ot(t),
        digest: null
      };
    }
    function $S(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function y_(e, t) {
      return !0;
    }
    function YS(e, t) {
      try {
        var a = y_(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === $)
            return;
          console.error(i);
        }
        var p = o ? et(o) : null, h = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === B)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = et(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var M = h + `
` + f + `

` + ("" + x);
        console.error(M);
      } catch (j) {
        setTimeout(function() {
          throw j;
        });
      }
    }
    var g_ = typeof WeakMap == "function" ? WeakMap : Map;
    function ix(e, t, a) {
      var i = Bo(qt, a);
      i.tag = Kg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        ck(o), YS(e, t);
      }, i;
    }
    function WS(e, t, a) {
      var i = Bo(qt, a);
      i.tag = Kg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          mR(e), YS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mR(e), YS(e, t), typeof o != "function" && uk(this);
        var h = t.value, x = t.stack;
        this.componentDidCatch(h, {
          componentStack: x !== null ? x : ""
        }), typeof o != "function" && (oa(e.lanes, Ke) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", et(e) || "Unknown"));
      }), i;
    }
    function lx(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new g_(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = fk.bind(null, e, t, a);
        Nr && dv(e, a), t.then(s, s);
      }
    }
    function S_(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function E_(e, t) {
      var a = e.tag;
      if ((e.mode & St) === He && (a === z || a === ve || a === We)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function ox(e) {
      var t = e;
      do {
        if (t.tag === ge && e_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function ux(e, t, a, i, o) {
      if ((e.mode & St) === He) {
        if (e === t)
          e.flags |= Dr;
        else {
          if (e.flags |= mt, a.flags |= ii, a.flags &= -52805, a.tag === $) {
            var s = a.alternate;
            if (s === null)
              a.tag = Dt;
            else {
              var f = Bo(qt, Ke);
              f.tag = Tm, $u(a, f, Ke);
            }
          }
          a.lanes = ct(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= Dr, e.lanes = o, e;
    }
    function C_(e, t, a, i, o) {
      if (a.flags |= yo, Nr && dv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        E_(a), Hr() && a.mode & St && Z0();
        var f = ox(t);
        if (f !== null) {
          f.flags &= ~gn, ux(f, t, a, e, o), f.mode & St && lx(e, s, o), S_(f, e, s);
          return;
        } else {
          if (!Kd(o)) {
            lx(e, s, o), TE();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Hr() && a.mode & St) {
        Z0();
        var h = ox(t);
        if (h !== null) {
          (h.flags & Dr) === Ve && (h.flags |= gn), ux(h, t, a, e, o), Fg(pc(i, a));
          return;
        }
      }
      i = pc(i, a), ek(i);
      var x = t;
      do {
        switch (x.tag) {
          case B: {
            var R = i;
            x.flags |= Dr;
            var M = ir(o);
            x.lanes = ct(x.lanes, M);
            var j = ix(x, R, M);
            Zg(x, j);
            return;
          }
          case $:
            var W = i, G = x.type, K = x.stateNode;
            if ((x.flags & mt) === Ve && (typeof G.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !oR(K))) {
              x.flags |= Dr;
              var be = ir(o);
              x.lanes = ct(x.lanes, be);
              var Qe = WS(x, W, be);
              Zg(x, Qe);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function x_() {
      return null;
    }
    var Kp = b.ReactCurrentOwner, sl = !1, QS, Xp, GS, qS, KS, vc, XS, ey, Jp;
    QS = {}, Xp = {}, GS = {}, qS = {}, KS = {}, vc = !1, XS = {}, ey = {}, Jp = {};
    function wa(e, t, a, i) {
      e === null ? t.child = fC(t, null, a, i) : t.child = Qf(t, e.child, a, i);
    }
    function R_(e, t, a, i) {
      t.child = Qf(t, e.child, null, i), t.child = Qf(t, null, a, i);
    }
    function sx(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && rl(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f = a.render, p = t.ref, h, x;
      qf(t, o), Va(t);
      {
        if (Kp.current = t, Ma(!0), h = td(e, t, f, i, p, o), x = nd(), t.mode & ut) {
          Gt(!0);
          try {
            h = td(e, t, f, i, p, o), x = nd();
          } finally {
            Gt(!1);
          }
        }
        Ma(!1);
      }
      return Nl(), e !== null && !sl ? (TC(e, t, o), Io(e, t, o)) : (Hr() && x && jg(t), t.flags |= Ji, wa(e, t, h, o), t.child);
    }
    function cx(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (kk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = cd(s), t.tag = We, t.type = f, eE(t, s), fx(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && rl(
            p,
            i,
            // Resolved props
            "prop",
            jt(s)
          ), a.defaultProps !== void 0) {
            var h = jt(s) || "Unknown";
            Jp[h] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", h), Jp[h] = !0);
          }
        }
        var x = zE(a.type, null, i, t, t.mode, o);
        return x.ref = t.ref, x.return = t, t.child = x, x;
      }
      {
        var R = a.type, M = R.propTypes;
        M && rl(
          M,
          i,
          // Resolved props
          "prop",
          jt(R)
        );
      }
      var j = e.child, W = lE(e, o);
      if (!W) {
        var G = j.memoizedProps, K = a.compare;
        if (K = K !== null ? K : $e, K(G, i) && e.ref === t.ref)
          return Io(e, t, o);
      }
      t.flags |= Ji;
      var be = Sc(j, i);
      return be.ref = t.ref, be.return = t, t.child = be, be;
    }
    function fx(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === rt) {
          var f = s, p = f._payload, h = f._init;
          try {
            s = h(p);
          } catch {
            s = null;
          }
          var x = s && s.propTypes;
          x && rl(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            jt(s)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if ($e(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (sl = !1, t.pendingProps = i = R, lE(e, o))
            (e.flags & ii) !== Ve && (sl = !0);
          else return t.lanes = e.lanes, Io(e, t, o);
      }
      return JS(e, t, a, i, o);
    }
    function dx(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || U)
        if ((t.mode & St) === He) {
          var f = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, py(t, a);
        } else if (oa(a, ia)) {
          var M = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = M;
          var j = s !== null ? s.baseLanes : a;
          py(t, j);
        } else {
          var p = null, h;
          if (s !== null) {
            var x = s.baseLanes;
            h = ct(x, a);
          } else
            h = a;
          t.lanes = t.childLanes = ia;
          var R = {
            baseLanes: h,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, py(t, h), null;
        }
      else {
        var W;
        s !== null ? (W = ct(s.baseLanes, a), t.memoizedState = null) : W = a, py(t, W);
      }
      return wa(e, t, o, a), t.child;
    }
    function b_(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function T_(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function w_(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return wa(e, t, s, a), t.child;
    }
    function px(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Vn, t.flags |= ws);
    }
    function JS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && rl(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f;
      {
        var p = Bf(t, a, !0);
        f = If(t, p);
      }
      var h, x;
      qf(t, o), Va(t);
      {
        if (Kp.current = t, Ma(!0), h = td(e, t, a, i, f, o), x = nd(), t.mode & ut) {
          Gt(!0);
          try {
            h = td(e, t, a, i, f, o), x = nd();
          } finally {
            Gt(!1);
          }
        }
        Ma(!1);
      }
      return Nl(), e !== null && !sl ? (TC(e, t, o), Io(e, t, o)) : (Hr() && x && jg(t), t.flags |= Ji, wa(e, t, h, o), t.child);
    }
    function vx(e, t, a, i, o) {
      {
        switch (Ik(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), h = p.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= mt, t.flags |= Dr;
            var x = new Error("Simulated error coming from DevTools"), R = ir(o);
            t.lanes = ct(t.lanes, R);
            var M = WS(t, pc(x, t), R);
            Zg(t, M);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var j = a.propTypes;
          j && rl(
            j,
            i,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var W;
      Yl(a) ? (W = !0, dm(t)) : W = !1, qf(t, o);
      var G = t.stateNode, K;
      G === null ? (ny(e, t), rx(t, a, i), IS(t, a, i, o), K = !0) : e === null ? K = h_(t, a, i, o) : K = m_(e, t, a, i, o);
      var be = ZS(e, t, a, K, W, o);
      {
        var Qe = t.stateNode;
        K && Qe.props !== i && (vc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(t) || "a component"), vc = !0);
      }
      return be;
    }
    function ZS(e, t, a, i, o, s) {
      px(e, t);
      var f = (t.flags & mt) !== Ve;
      if (!i && !f)
        return o && q0(t, a, !1), Io(e, t, s);
      var p = t.stateNode;
      Kp.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, JC();
      else {
        Va(t);
        {
          if (Ma(!0), h = p.render(), t.mode & ut) {
            Gt(!0);
            try {
              p.render();
            } finally {
              Gt(!1);
            }
          }
          Ma(!1);
        }
        Nl();
      }
      return t.flags |= Ji, e !== null && f ? R_(e, t, h, s) : wa(e, t, h, s), t.memoizedState = p.state, o && q0(t, a, !0), t.child;
    }
    function hx(e) {
      var t = e.stateNode;
      t.pendingContext ? Q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Q0(e, t.context, !1), eS(e, t.containerInfo);
    }
    function __(e, t, a) {
      if (hx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      gC(e, t), Dm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var h = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, x = t.updateQueue;
        if (x.baseState = h, t.memoizedState = h, t.flags & gn) {
          var R = pc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return mx(e, t, p, a, R);
        } else if (p !== s) {
          var M = pc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return mx(e, t, p, a, M);
        } else {
          Nw(t);
          var j = fC(t, null, p, a);
          t.child = j;
          for (var W = j; W; )
            W.flags = W.flags & ~bn | Tn, W = W.sibling;
        }
      } else {
        if (Wf(), p === s)
          return Io(e, t, a);
        wa(e, t, p, a);
      }
      return t.child;
    }
    function mx(e, t, a, i, o) {
      return Wf(), Fg(o), t.flags |= gn, wa(e, t, a, i), t.child;
    }
    function k_(e, t, a) {
      xC(t), e === null && Ag(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = gg(i, o);
      return p ? f = null : s !== null && gg(i, s) && (t.flags |= Qt), px(e, t), wa(e, t, f, a), t.child;
    }
    function D_(e, t) {
      return e === null && Ag(t), null;
    }
    function N_(e, t, a, i) {
      ny(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, h = p(f);
      t.type = h;
      var x = t.tag = Dk(h), R = ul(h, o), M;
      switch (x) {
        case z:
          return eE(t, h), t.type = h = cd(h), M = JS(null, t, h, R, i), M;
        case $:
          return t.type = h = NE(h), M = vx(null, t, h, R, i), M;
        case ve:
          return t.type = h = OE(h), M = sx(null, t, h, R, i), M;
        case Be: {
          if (t.type !== t.elementType) {
            var j = h.propTypes;
            j && rl(
              j,
              R,
              // Resolved for outer only
              "prop",
              jt(h)
            );
          }
          return M = cx(
            null,
            t,
            h,
            ul(h.type, R),
            // The inner type can have defaults too
            i
          ), M;
        }
      }
      var W = "";
      throw h !== null && typeof h == "object" && h.$$typeof === rt && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function O_(e, t, a, i, o) {
      ny(e, t), t.tag = $;
      var s;
      return Yl(a) ? (s = !0, dm(t)) : s = !1, qf(t, o), rx(t, a, i), IS(t, a, i, o), ZS(null, t, a, !0, s, o);
    }
    function j_(e, t, a, i) {
      ny(e, t);
      var o = t.pendingProps, s;
      {
        var f = Bf(t, a, !1);
        s = If(t, f);
      }
      qf(t, i);
      var p, h;
      Va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = jt(a) || "Unknown";
          QS[x] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), QS[x] = !0);
        }
        t.mode & ut && il.recordLegacyContextWarning(t, null), Ma(!0), Kp.current = t, p = td(null, t, a, o, s, i), h = nd(), Ma(!1);
      }
      if (Nl(), t.flags |= Ji, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var R = jt(a) || "Unknown";
        Xp[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Xp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var M = jt(a) || "Unknown";
          Xp[M] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), Xp[M] = !0);
        }
        t.tag = $, t.memoizedState = null, t.updateQueue = null;
        var j = !1;
        return Yl(a) ? (j = !0, dm(t)) : j = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Jg(t), nx(t, p), IS(t, a, o, i), ZS(null, t, a, !0, j, i);
      } else {
        if (t.tag = z, t.mode & ut) {
          Gt(!0);
          try {
            p = td(null, t, a, o, s, i), h = nd();
          } finally {
            Gt(!1);
          }
        }
        return Hr() && h && jg(t), wa(null, t, p, i), eE(t, a), t.child;
      }
    }
    function eE(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ur();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), KS[o] || (KS[o] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = jt(t) || "Unknown";
          Jp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Jp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = jt(t) || "Unknown";
          qS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), qS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = jt(t) || "Unknown";
          GS[h] || (y("%s: Function components do not support contextType.", h), GS[h] = !0);
        }
      }
    }
    var tE = {
      dehydrated: null,
      treeContext: null,
      retryLane: Bn
    };
    function nE(e) {
      return {
        baseLanes: e,
        cachePool: x_(),
        transitions: null
      };
    }
    function L_(e, t) {
      var a = null;
      return {
        baseLanes: ct(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function M_(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return rS(e, Hp);
    }
    function U_(e, t) {
      return Vs(e.childLanes, t);
    }
    function yx(e, t, a) {
      var i = t.pendingProps;
      $k(t) && (t.flags |= mt);
      var o = ll.current, s = !1, f = (t.flags & mt) !== Ve;
      if (f || M_(o, e) ? (s = !0, t.flags &= ~mt) : (e === null || e.memoizedState !== null) && (o = Zw(o, bC)), o = Xf(o), Wu(t, o), e === null) {
        Ag(t);
        var p = t.memoizedState;
        if (p !== null) {
          var h = p.dehydrated;
          if (h !== null)
            return V_(t, h);
        }
        var x = i.children, R = i.fallback;
        if (s) {
          var M = z_(t, x, R, a), j = t.child;
          return j.memoizedState = nE(a), t.memoizedState = tE, M;
        } else
          return rE(t, x);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var G = W.dehydrated;
          if (G !== null)
            return H_(e, t, f, i, G, W, a);
        }
        if (s) {
          var K = i.fallback, be = i.children, Qe = F_(e, t, be, K, a), Fe = t.child, Mt = e.child.memoizedState;
          return Fe.memoizedState = Mt === null ? nE(a) : L_(Mt, a), Fe.childLanes = U_(e, a), t.memoizedState = tE, Qe;
        } else {
          var bt = i.children, V = A_(e, t, bt, a);
          return t.memoizedState = null, V;
        }
      }
    }
    function rE(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = aE(o, i);
      return s.return = e, e.child = s, s;
    }
    function z_(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, h;
      return (o & St) === He && s !== null ? (p = s, p.childLanes = Z, p.pendingProps = f, e.mode & _t && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), h = es(a, o, i, null)) : (p = aE(f, o), h = es(a, o, i, null)), p.return = e, h.return = e, p.sibling = h, e.child = p, h;
    }
    function aE(e, t, a) {
      return gR(e, t, Z, null);
    }
    function gx(e, t) {
      return Sc(e, t);
    }
    function A_(e, t, a, i) {
      var o = e.child, s = o.sibling, f = gx(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & St) === He && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ta) : p.push(s);
      }
      return t.child = f, f;
    }
    function F_(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, h = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & St) === He && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var R = t.child;
        x = R, x.childLanes = Z, x.pendingProps = h, t.mode & _t && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = f.selfBaseDuration, x.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        x = gx(f, h), x.subtreeFlags = f.subtreeFlags & Hn;
      var M;
      return p !== null ? M = Sc(p, i) : (M = es(i, s, o, null), M.flags |= bn), M.return = t, x.return = t, x.sibling = M, t.child = x, M;
    }
    function ty(e, t, a, i) {
      i !== null && Fg(i), Qf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = rE(t, s);
      return f.flags |= bn, t.memoizedState = null, f;
    }
    function P_(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = aE(f, s), h = es(i, s, o, null);
      return h.flags |= bn, p.return = t, h.return = t, p.sibling = h, t.child = p, (t.mode & St) !== He && Qf(t, e.child, null, o), h;
    }
    function V_(e, t, a) {
      return (e.mode & St) === He ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : xg(t) ? e.lanes = ar : e.lanes = ia, null;
    }
    function H_(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & gn) {
          t.flags &= ~gn;
          var V = $S(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ty(e, t, f, V);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= mt, null;
          var X = i.children, H = i.fallback, ce = P_(e, t, X, H, f), Oe = t.child;
          return Oe.memoizedState = nE(f), t.memoizedState = tE, ce;
        }
      else {
        if (kw(), (t.mode & St) === He)
          return ty(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (xg(o)) {
          var p, h, x;
          {
            var R = YT(o);
            p = R.digest, h = R.message, x = R.stack;
          }
          var M;
          h ? M = new Error(h) : M = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var j = $S(M, p, x);
          return ty(e, t, f, j);
        }
        var W = oa(f, e.childLanes);
        if (sl || W) {
          var G = dy();
          if (G !== null) {
            var K = yf(G, f);
            if (K !== Bn && K !== s.retryLane) {
              s.retryLane = K;
              var be = qt;
              Wa(e, K), Rr(G, e, K, be);
            }
          }
          TE();
          var Qe = $S(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ty(e, t, f, Qe);
        } else if (H0(o)) {
          t.flags |= mt, t.child = e.child;
          var Fe = dk.bind(null, e);
          return WT(o, Fe), null;
        } else {
          Ow(t, o, s.treeContext);
          var Mt = i.children, bt = rE(t, Mt);
          return bt.flags |= Tn, bt;
        }
      }
    }
    function Sx(e, t, a) {
      e.lanes = ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ct(i.lanes, t)), Gg(e.return, t, a);
    }
    function B_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ge) {
          var o = i.memoizedState;
          o !== null && Sx(i, a, e);
        } else if (i.tag === Kt)
          Sx(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function I_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Lm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function $_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !XS[e])
        if (XS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Y_(e, t) {
      e !== void 0 && !ey[e] && (e !== "collapsed" && e !== "hidden" ? (ey[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ey[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Ex(e, t) {
      {
        var a = st(e), i = !a && typeof yn(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function W_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (st(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Ex(e[a], a))
              return;
        } else {
          var i = yn(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!Ex(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function iE(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function Cx(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      $_(o), Y_(s, o), W_(f, o), wa(e, t, f, a);
      var p = ll.current, h = rS(p, Hp);
      if (h)
        p = aS(p, Hp), t.flags |= mt;
      else {
        var x = e !== null && (e.flags & mt) !== Ve;
        x && B_(t, t.child, a), p = Xf(p);
      }
      if (Wu(t, p), (t.mode & St) === He)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var R = I_(t.child), M;
            R === null ? (M = t.child, t.child = null) : (M = R.sibling, R.sibling = null), iE(
              t,
              !1,
              // isBackwards
              M,
              R,
              s
            );
            break;
          }
          case "backwards": {
            var j = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var G = W.alternate;
              if (G !== null && Lm(G) === null) {
                t.child = W;
                break;
              }
              var K = W.sibling;
              W.sibling = j, j = W, W = K;
            }
            iE(
              t,
              !0,
              // isBackwards
              j,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            iE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Q_(e, t, a) {
      eS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Qf(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var xx = !1;
    function G_(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || xx || (xx = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && rl(h, s, "prop", "Context.Provider");
      }
      if (vC(t, o, p), f !== null) {
        var x = f.value;
        if (we(x, p)) {
          if (f.children === s.children && !cm())
            return Io(e, t, a);
        } else
          $w(t, o, a);
      }
      var R = s.children;
      return wa(e, t, R, a), t.child;
    }
    var Rx = !1;
    function q_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Rx || (Rx = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), qf(t, a);
      var f = or(i);
      Va(t);
      var p;
      return Kp.current = t, Ma(!0), p = s(f), Ma(!1), Nl(), t.flags |= Ji, wa(e, t, p, a), t.child;
    }
    function Zp() {
      sl = !0;
    }
    function ny(e, t) {
      (t.mode & St) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bn);
    }
    function Io(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JC(), fv(t.lanes), oa(a, t.childLanes) ? (Bw(e, t), t.child) : null;
    }
    function K_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ta) : s.push(e), a.flags |= bn, a;
      }
    }
    function lE(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function X_(e, t, a) {
      switch (t.tag) {
        case B:
          hx(t), t.stateNode, Wf();
          break;
        case J:
          xC(t);
          break;
        case $: {
          var i = t.type;
          Yl(i) && dm(t);
          break;
        }
        case he:
          eS(t, t.stateNode.containerInfo);
          break;
        case me: {
          var o = t.memoizedProps.value, s = t.type._context;
          vC(t, s, o);
          break;
        }
        case Re:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ge: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return Wu(t, Xf(ll.current)), t.flags |= mt, null;
            var x = t.child, R = x.childLanes;
            if (oa(a, R))
              return yx(e, t, a);
            Wu(t, Xf(ll.current));
            var M = Io(e, t, a);
            return M !== null ? M.sibling : null;
          } else
            Wu(t, Xf(ll.current));
          break;
        }
        case Kt: {
          var j = (e.flags & mt) !== Ve, W = oa(a, t.childLanes);
          if (j) {
            if (W)
              return Cx(e, t, a);
            t.flags |= mt;
          }
          var G = t.memoizedState;
          if (G !== null && (G.rendering = null, G.tail = null, G.lastEffect = null), Wu(t, ll.current), W)
            break;
          return null;
        }
        case qe:
        case Bt:
          return t.lanes = Z, dx(e, t, a);
      }
      return Io(e, t, a);
    }
    function bx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return K_(e, t, zE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || cm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          sl = !0;
        else {
          var s = lE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & mt) === Ve)
            return sl = !1, X_(e, t, a);
          (e.flags & ii) !== Ve ? sl = !0 : sl = !1;
        }
      } else if (sl = !1, Hr() && xw(t)) {
        var f = t.index, p = Rw();
        J0(t, p, f);
      }
      switch (t.lanes = Z, t.tag) {
        case P:
          return j_(e, t, t.type, a);
        case Cn: {
          var h = t.elementType;
          return N_(e, t, h, a);
        }
        case z: {
          var x = t.type, R = t.pendingProps, M = t.elementType === x ? R : ul(x, R);
          return JS(e, t, x, M, a);
        }
        case $: {
          var j = t.type, W = t.pendingProps, G = t.elementType === j ? W : ul(j, W);
          return vx(e, t, j, G, a);
        }
        case B:
          return __(e, t, a);
        case J:
          return k_(e, t, a);
        case ue:
          return D_(e, t);
        case ge:
          return yx(e, t, a);
        case he:
          return Q_(e, t, a);
        case ve: {
          var K = t.type, be = t.pendingProps, Qe = t.elementType === K ? be : ul(K, be);
          return sx(e, t, K, Qe, a);
        }
        case le:
          return b_(e, t, a);
        case Pe:
          return T_(e, t, a);
        case Re:
          return w_(e, t, a);
        case me:
          return G_(e, t, a);
        case fe:
          return q_(e, t, a);
        case Be: {
          var Fe = t.type, Mt = t.pendingProps, bt = ul(Fe, Mt);
          if (t.type !== t.elementType) {
            var V = Fe.propTypes;
            V && rl(
              V,
              bt,
              // Resolved for outer only
              "prop",
              jt(Fe)
            );
          }
          return bt = ul(Fe.type, bt), cx(e, t, Fe, bt, a);
        }
        case We:
          return fx(e, t, t.type, t.pendingProps, a);
        case Dt: {
          var X = t.type, H = t.pendingProps, ce = t.elementType === X ? H : ul(X, H);
          return O_(e, t, X, ce, a);
        }
        case Kt:
          return Cx(e, t, a);
        case Tt:
          break;
        case qe:
          return dx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function rd(e) {
      e.flags |= Ct;
    }
    function Tx(e) {
      e.flags |= Vn, e.flags |= ws;
    }
    var wx, oE, _x, kx;
    wx = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === J || o.tag === ue)
          ST(e, o.stateNode);
        else if (o.tag !== he) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, oE = function(e, t) {
    }, _x = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = tS(), h = CT(f, a, s, i, o, p);
        t.updateQueue = h, h && rd(t);
      }
    }, kx = function(e, t, a, i) {
      a !== i && rd(t);
    };
    function ev(e, t) {
      if (!Hr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ir(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Z, i = Ve;
      if (t) {
        if ((e.mode & _t) !== He) {
          for (var h = e.selfBaseDuration, x = e.child; x !== null; )
            a = ct(a, ct(x.lanes, x.childLanes)), i |= x.subtreeFlags & Hn, i |= x.flags & Hn, h += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = h;
        } else
          for (var R = e.child; R !== null; )
            a = ct(a, ct(R.lanes, R.childLanes)), i |= R.subtreeFlags & Hn, i |= R.flags & Hn, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & _t) !== He) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ct(a, ct(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ct(a, ct(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function J_(e, t, a) {
      if (zw() && (t.mode & St) !== He && (t.flags & mt) === Ve)
        return iC(t), Wf(), t.flags |= gn | yo | Dr, !1;
      var i = ym(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Mw(t), Ir(t), (t.mode & _t) !== He) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Wf(), (t.flags & mt) === Ve && (t.memoizedState = null), t.flags |= Ct, Ir(t), (t.mode & _t) !== He) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lC(), !0;
    }
    function Dx(e, t, a) {
      var i = t.pendingProps;
      switch (Lg(t), t.tag) {
        case P:
        case Cn:
        case We:
        case z:
        case ve:
        case le:
        case Pe:
        case Re:
        case fe:
        case Be:
          return Ir(t), null;
        case $: {
          var o = t.type;
          return Yl(o) && fm(t), Ir(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (Kf(t), Dg(t), lS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = ym(t);
            if (f)
              rd(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & gn) !== Ve) && (t.flags |= Pa, lC());
            }
          }
          return oE(e, t), Ir(t), null;
        }
        case J: {
          nS(t);
          var h = CC(), x = t.type;
          if (e !== null && t.stateNode != null)
            _x(e, t, x, i, h), e.ref !== t.ref && Tx(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ir(t), null;
            }
            var R = tS(), M = ym(t);
            if (M)
              jw(t, h, R) && rd(t);
            else {
              var j = gT(x, i, h, R, t);
              wx(j, t, !1, !1), t.stateNode = j, ET(j, x, i, h) && rd(t);
            }
            t.ref !== null && Tx(t);
          }
          return Ir(t), null;
        }
        case ue: {
          var W = i;
          if (e && t.stateNode != null) {
            var G = e.memoizedProps;
            kx(e, t, G, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var K = CC(), be = tS(), Qe = ym(t);
            Qe ? Lw(t) && rd(t) : t.stateNode = xT(W, K, be, t);
          }
          return Ir(t), null;
        }
        case ge: {
          Jf(t);
          var Fe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Mt = J_(e, t, Fe);
            if (!Mt)
              return t.flags & Dr ? t : null;
          }
          if ((t.flags & mt) !== Ve)
            return t.lanes = a, (t.mode & _t) !== He && OS(t), t;
          var bt = Fe !== null, V = e !== null && e.memoizedState !== null;
          if (bt !== V && bt) {
            var X = t.child;
            if (X.flags |= xi, (t.mode & St) !== He) {
              var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              H || rS(ll.current, bC) ? Z1() : TE();
            }
          }
          var ce = t.updateQueue;
          if (ce !== null && (t.flags |= Ct), Ir(t), (t.mode & _t) !== He && bt) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case he:
          return Kf(t), oE(e, t), e === null && hw(t.stateNode.containerInfo), Ir(t), null;
        case me:
          var _e = t.type._context;
          return Qg(_e, t), Ir(t), null;
        case Dt: {
          var Je = t.type;
          return Yl(Je) && fm(t), Ir(t), null;
        }
        case Kt: {
          Jf(t);
          var lt = t.memoizedState;
          if (lt === null)
            return Ir(t), null;
          var rn = (t.flags & mt) !== Ve, zt = lt.rendering;
          if (zt === null)
            if (rn)
              ev(lt, !1);
            else {
              var Xn = tk() && (e === null || (e.flags & mt) === Ve);
              if (!Xn)
                for (var At = t.child; At !== null; ) {
                  var $n = Lm(At);
                  if ($n !== null) {
                    rn = !0, t.flags |= mt, ev(lt, !1);
                    var pa = $n.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= Ct), t.subtreeFlags = Ve, Iw(t, a), Wu(t, aS(ll.current, Hp)), t.child;
                  }
                  At = At.sibling;
                }
              lt.tail !== null && Dn() > Kx() && (t.flags |= mt, rn = !0, ev(lt, !1), t.lanes = hh);
            }
          else {
            if (!rn) {
              var Gr = Lm(zt);
              if (Gr !== null) {
                t.flags |= mt, rn = !0;
                var di = Gr.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= Ct), ev(lt, !0), lt.tail === null && lt.tailMode === "hidden" && !zt.alternate && !Hr())
                  return Ir(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Dn() * 2 - lt.renderingStartTime > Kx() && a !== ia && (t.flags |= mt, rn = !0, ev(lt, !1), t.lanes = hh);
            }
            if (lt.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Da = lt.last;
              Da !== null ? Da.sibling = zt : t.child = zt, lt.last = zt;
            }
          }
          if (lt.tail !== null) {
            var Na = lt.tail;
            lt.rendering = Na, lt.tail = Na.sibling, lt.renderingStartTime = Dn(), Na.sibling = null;
            var va = ll.current;
            return rn ? va = aS(va, Hp) : va = Xf(va), Wu(t, va), Na;
          }
          return Ir(t), null;
        }
        case Tt:
          break;
        case qe:
        case Bt: {
          bE(t);
          var Go = t.memoizedState, fd = Go !== null;
          if (e !== null) {
            var mv = e.memoizedState, Zl = mv !== null;
            Zl !== fd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !U && (t.flags |= xi);
          }
          return !fd || (t.mode & St) === He ? Ir(t) : oa(Jl, ia) && (Ir(t), t.subtreeFlags & (bn | Ct) && (t.flags |= xi)), null;
        }
        case Rt:
          return null;
        case vt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Z_(e, t, a) {
      switch (Lg(t), t.tag) {
        case $: {
          var i = t.type;
          Yl(i) && fm(t);
          var o = t.flags;
          return o & Dr ? (t.flags = o & ~Dr | mt, (t.mode & _t) !== He && OS(t), t) : null;
        }
        case B: {
          t.stateNode, Kf(t), Dg(t), lS();
          var s = t.flags;
          return (s & Dr) !== Ve && (s & mt) === Ve ? (t.flags = s & ~Dr | mt, t) : null;
        }
        case J:
          return nS(t), null;
        case ge: {
          Jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Wf();
          }
          var p = t.flags;
          return p & Dr ? (t.flags = p & ~Dr | mt, (t.mode & _t) !== He && OS(t), t) : null;
        }
        case Kt:
          return Jf(t), null;
        case he:
          return Kf(t), null;
        case me:
          var h = t.type._context;
          return Qg(h, t), null;
        case qe:
        case Bt:
          return bE(t), null;
        case Rt:
          return null;
        default:
          return null;
      }
    }
    function Nx(e, t, a) {
      switch (Lg(t), t.tag) {
        case $: {
          var i = t.type.childContextTypes;
          i != null && fm(t);
          break;
        }
        case B: {
          t.stateNode, Kf(t), Dg(t), lS();
          break;
        }
        case J: {
          nS(t);
          break;
        }
        case he:
          Kf(t);
          break;
        case ge:
          Jf(t);
          break;
        case Kt:
          Jf(t);
          break;
        case me:
          var o = t.type._context;
          Qg(o, t);
          break;
        case qe:
        case Bt:
          bE(t);
          break;
      }
    }
    var Ox = null;
    Ox = /* @__PURE__ */ new Set();
    var ry = !1, $r = !1, e1 = typeof WeakSet == "function" ? WeakSet : Set, ze = null, ad = null, id = null;
    function t1(e) {
      Fa(null, function() {
        throw e;
      }), Od();
    }
    var n1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & _t)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function jx(e, t) {
      try {
        qu(yr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function uE(e, t, a) {
      try {
        n1(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function r1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        mn(e, t, i);
      }
    }
    function Lx(e, t) {
      try {
        Ux(e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function ld(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (nt && ht && e.mode & _t)
              try {
                Kl(), i = a(null);
              } finally {
                ql(e);
              }
            else
              i = a(null);
          } catch (o) {
            mn(e, t, o);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          a.current = null;
    }
    function ay(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var Mx = !1;
    function a1(e, t) {
      mT(e.containerInfo), ze = t, i1();
      var a = Mx;
      return Mx = !1, a;
    }
    function i1() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        (e.subtreeFlags & _l) !== Ve && t !== null ? (t.return = e, ze = t) : l1();
      }
    }
    function l1() {
      for (; ze !== null; ) {
        var e = ze;
        Jt(e);
        try {
          o1(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        Rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function o1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Pa) !== Ve) {
        switch (Jt(e), e.tag) {
          case z:
          case ve:
          case We:
            break;
          case $: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !vc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), o);
              {
                var p = Ox;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", et(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case B: {
            {
              var h = e.stateNode;
              HT(h.containerInfo);
            }
            break;
          }
          case J:
          case ue:
          case he:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Rn();
      }
    }
    function cl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Br) !== Qa ? Ol(t) : (e & yr) !== Qa && Id(t), (e & Wl) !== Qa && pv(!0), ay(t, a, p), (e & Wl) !== Qa && pv(!1), (e & Br) !== Qa ? Ic() : (e & yr) !== Qa && Cu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== Qa ? ph(t) : (e & yr) !== Qa && vh(t);
            var f = s.create;
            (e & Wl) !== Qa && pv(!0), s.destroy = f(), (e & Wl) !== Qa && pv(!1), (e & Br) !== Qa ? el() : (e & yr) !== Qa && $c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var h = void 0;
                (s.tag & yr) !== Ve ? h = "useLayoutEffect" : (s.tag & Wl) !== Ve ? h = "useInsertionEffect" : h = "useEffect";
                var x = void 0;
                p === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? x = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", h, x);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function u1(e, t) {
      if ((t.flags & Ct) !== Ve)
        switch (t.tag) {
          case Re: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = KC(), p = t.alternate === null ? "mount" : "update";
            qC() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var h = t.return;
            e: for (; h !== null; ) {
              switch (h.tag) {
                case B:
                  var x = h.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
                case Re:
                  var R = h.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
              }
              h = h.return;
            }
            break;
          }
        }
    }
    function s1(e, t, a, i) {
      if ((a.flags & kl) !== Ve)
        switch (a.tag) {
          case z:
          case ve:
          case We: {
            if (!$r)
              if (a.mode & _t)
                try {
                  Kl(), qu(yr | mr, a);
                } finally {
                  ql(a);
                }
              else
                qu(yr | mr, a);
            break;
          }
          case $: {
            var o = a.stateNode;
            if (a.flags & Ct && !$r)
              if (t === null)
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & _t)
                  try {
                    Kl(), o.componentDidMount();
                  } finally {
                    ql(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & _t)
                  try {
                    Kl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ql(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), EC(a, p, o));
            break;
          }
          case B: {
            var h = a.updateQueue;
            if (h !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case J:
                    x = a.child.stateNode;
                    break;
                  case $:
                    x = a.child.stateNode;
                    break;
                }
              EC(a, h, x);
            }
            break;
          }
          case J: {
            var R = a.stateNode;
            if (t === null && a.flags & Ct) {
              var M = a.type, j = a.memoizedProps;
              _T(R, M, j);
            }
            break;
          }
          case ue:
            break;
          case he:
            break;
          case Re: {
            {
              var W = a.memoizedProps, G = W.onCommit, K = W.onRender, be = a.stateNode.effectDuration, Qe = KC(), Fe = t === null ? "mount" : "update";
              qC() && (Fe = "nested-update"), typeof K == "function" && K(a.memoizedProps.id, Fe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Qe);
              {
                typeof G == "function" && G(a.memoizedProps.id, Fe, be, Qe), lk(a);
                var Mt = a.return;
                e: for (; Mt !== null; ) {
                  switch (Mt.tag) {
                    case B:
                      var bt = Mt.stateNode;
                      bt.effectDuration += be;
                      break e;
                    case Re:
                      var V = Mt.stateNode;
                      V.effectDuration += be;
                      break e;
                  }
                  Mt = Mt.return;
                }
              }
            }
            break;
          }
          case ge: {
            y1(e, a);
            break;
          }
          case Kt:
          case Dt:
          case Tt:
          case qe:
          case Bt:
          case vt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      $r || a.flags & Vn && Ux(a);
    }
    function c1(e) {
      switch (e.tag) {
        case z:
        case ve:
        case We: {
          if (e.mode & _t)
            try {
              Kl(), jx(e, e.return);
            } finally {
              ql(e);
            }
          else
            jx(e, e.return);
          break;
        }
        case $: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && r1(e, e.return, t), Lx(e, e.return);
          break;
        }
        case J: {
          Lx(e, e.return);
          break;
        }
      }
    }
    function f1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === J) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? AT(o) : PT(i.stateNode, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
          }
        } else if (i.tag === ue) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? FT(s) : VT(s, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
        } else if (!((i.tag === qe || i.tag === Bt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Ux(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case J:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & _t)
            try {
              Kl(), o = t(i);
            } finally {
              ql(e);
            }
          else
            o = t(i);
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", et(e)), t.current = i;
      }
    }
    function d1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === J) {
          var a = e.stateNode;
          a !== null && gw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function p1(e) {
      for (var t = e.return; t !== null; ) {
        if (Ax(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ax(e) {
      return e.tag === J || e.tag === B || e.tag === he;
    }
    function Fx(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Ax(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== J && t.tag !== ue && t.tag !== un; ) {
          if (t.flags & bn || t.child === null || t.tag === he)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & bn))
          return t.stateNode;
      }
    }
    function v1(e) {
      var t = p1(e);
      switch (t.tag) {
        case J: {
          var a = t.stateNode;
          t.flags & Qt && (V0(a), t.flags &= ~Qt);
          var i = Fx(e);
          cE(e, i, a);
          break;
        }
        case B:
        case he: {
          var o = t.stateNode.containerInfo, s = Fx(e);
          sE(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function sE(e, t, a) {
      var i = e.tag, o = i === J || i === ue;
      if (o) {
        var s = e.stateNode;
        t ? LT(a, s, t) : OT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          sE(f, t, a);
          for (var p = f.sibling; p !== null; )
            sE(p, t, a), p = p.sibling;
        }
      }
    }
    function cE(e, t, a) {
      var i = e.tag, o = i === J || i === ue;
      if (o) {
        var s = e.stateNode;
        t ? jT(a, s, t) : NT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          cE(f, t, a);
          for (var p = f.sibling; p !== null; )
            cE(p, t, a), p = p.sibling;
        }
      }
    }
    var Yr = null, fl = !1;
    function h1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case J: {
              Yr = i.stateNode, fl = !1;
              break e;
            }
            case B: {
              Yr = i.stateNode.containerInfo, fl = !0;
              break e;
            }
            case he: {
              Yr = i.stateNode.containerInfo, fl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Px(e, t, a), Yr = null, fl = !1;
      }
      d1(a);
    }
    function Ku(e, t, a) {
      for (var i = a.child; i !== null; )
        Px(e, t, i), i = i.sibling;
    }
    function Px(e, t, a) {
      switch (Eu(a), a.tag) {
        case J:
          $r || ld(a, t);
        case ue: {
          {
            var i = Yr, o = fl;
            Yr = null, Ku(e, t, a), Yr = i, fl = o, Yr !== null && (fl ? UT(Yr, a.stateNode) : MT(Yr, a.stateNode));
          }
          return;
        }
        case un: {
          Yr !== null && (fl ? zT(Yr, a.stateNode) : Cg(Yr, a.stateNode));
          return;
        }
        case he: {
          {
            var s = Yr, f = fl;
            Yr = a.stateNode.containerInfo, fl = !0, Ku(e, t, a), Yr = s, fl = f;
          }
          return;
        }
        case z:
        case ve:
        case Be:
        case We: {
          if (!$r) {
            var p = a.updateQueue;
            if (p !== null) {
              var h = p.lastEffect;
              if (h !== null) {
                var x = h.next, R = x;
                do {
                  var M = R, j = M.destroy, W = M.tag;
                  j !== void 0 && ((W & Wl) !== Qa ? ay(a, t, j) : (W & yr) !== Qa && (Id(a), a.mode & _t ? (Kl(), ay(a, t, j), ql(a)) : ay(a, t, j), Cu())), R = R.next;
                } while (R !== x);
              }
            }
          }
          Ku(e, t, a);
          return;
        }
        case $: {
          if (!$r) {
            ld(a, t);
            var G = a.stateNode;
            typeof G.componentWillUnmount == "function" && uE(a, t, G);
          }
          Ku(e, t, a);
          return;
        }
        case Tt: {
          Ku(e, t, a);
          return;
        }
        case qe: {
          if (
            // TODO: Remove this dead flag
            a.mode & St
          ) {
            var K = $r;
            $r = K || a.memoizedState !== null, Ku(e, t, a), $r = K;
          } else
            Ku(e, t, a);
          break;
        }
        default: {
          Ku(e, t, a);
          return;
        }
      }
    }
    function m1(e) {
      e.memoizedState;
    }
    function y1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && tw(s);
          }
        }
      }
    }
    function Vx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new e1()), t.forEach(function(i) {
          var o = pk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Nr)
              if (ad !== null && id !== null)
                dv(id, ad);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function g1(e, t, a) {
      ad = a, id = e, Jt(t), Hx(t, e), Jt(t), ad = null, id = null;
    }
    function dl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            h1(e, t, s);
          } catch (h) {
            mn(s, t, h);
          }
        }
      var f = ti();
      if (t.subtreeFlags & gu)
        for (var p = t.child; p !== null; )
          Jt(p), Hx(p, e), p = p.sibling;
      Jt(f);
    }
    function Hx(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case z:
        case ve:
        case Be:
        case We: {
          if (dl(t, e), Xl(e), o & Ct) {
            try {
              cl(Wl | mr, e, e.return), qu(Wl | mr, e);
            } catch (Je) {
              mn(e, e.return, Je);
            }
            if (e.mode & _t) {
              try {
                Kl(), cl(yr | mr, e, e.return);
              } catch (Je) {
                mn(e, e.return, Je);
              }
              ql(e);
            } else
              try {
                cl(yr | mr, e, e.return);
              } catch (Je) {
                mn(e, e.return, Je);
              }
          }
          return;
        }
        case $: {
          dl(t, e), Xl(e), o & Vn && i !== null && ld(i, i.return);
          return;
        }
        case J: {
          dl(t, e), Xl(e), o & Vn && i !== null && ld(i, i.return);
          {
            if (e.flags & Qt) {
              var s = e.stateNode;
              try {
                V0(s);
              } catch (Je) {
                mn(e, e.return, Je);
              }
            }
            if (o & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, h = i !== null ? i.memoizedProps : p, x = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    kT(f, R, x, h, p, e);
                  } catch (Je) {
                    mn(e, e.return, Je);
                  }
              }
            }
          }
          return;
        }
        case ue: {
          if (dl(t, e), Xl(e), o & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var M = e.stateNode, j = e.memoizedProps, W = i !== null ? i.memoizedProps : j;
            try {
              DT(M, W, j);
            } catch (Je) {
              mn(e, e.return, Je);
            }
          }
          return;
        }
        case B: {
          if (dl(t, e), Xl(e), o & Ct && i !== null) {
            var G = i.memoizedState;
            if (G.isDehydrated)
              try {
                ew(t.containerInfo);
              } catch (Je) {
                mn(e, e.return, Je);
              }
          }
          return;
        }
        case he: {
          dl(t, e), Xl(e);
          return;
        }
        case ge: {
          dl(t, e), Xl(e);
          var K = e.child;
          if (K.flags & xi) {
            var be = K.stateNode, Qe = K.memoizedState, Fe = Qe !== null;
            if (be.isHidden = Fe, Fe) {
              var Mt = K.alternate !== null && K.alternate.memoizedState !== null;
              Mt || J1();
            }
          }
          if (o & Ct) {
            try {
              m1(e);
            } catch (Je) {
              mn(e, e.return, Je);
            }
            Vx(e);
          }
          return;
        }
        case qe: {
          var bt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & St
          ) {
            var V = $r;
            $r = V || bt, dl(t, e), $r = V;
          } else
            dl(t, e);
          if (Xl(e), o & xi) {
            var X = e.stateNode, H = e.memoizedState, ce = H !== null, Oe = e;
            if (X.isHidden = ce, ce && !bt && (Oe.mode & St) !== He) {
              ze = Oe;
              for (var _e = Oe.child; _e !== null; )
                ze = _e, E1(_e), _e = _e.sibling;
            }
            f1(Oe, ce);
          }
          return;
        }
        case Kt: {
          dl(t, e), Xl(e), o & Ct && Vx(e);
          return;
        }
        case Tt:
          return;
        default: {
          dl(t, e), Xl(e);
          return;
        }
      }
    }
    function Xl(e) {
      var t = e.flags;
      if (t & bn) {
        try {
          v1(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~bn;
      }
      t & Tn && (e.flags &= ~Tn);
    }
    function S1(e, t, a) {
      ad = a, id = t, ze = e, Bx(e, t, a), ad = null, id = null;
    }
    function Bx(e, t, a) {
      for (var i = (e.mode & St) !== He; ze !== null; ) {
        var o = ze, s = o.child;
        if (o.tag === qe && i) {
          var f = o.memoizedState !== null, p = f || ry;
          if (p) {
            fE(e, t, a);
            continue;
          } else {
            var h = o.alternate, x = h !== null && h.memoizedState !== null, R = x || $r, M = ry, j = $r;
            ry = p, $r = R, $r && !j && (ze = o, C1(o));
            for (var W = s; W !== null; )
              ze = W, Bx(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            ze = o, ry = M, $r = j, fE(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & kl) !== Ve && s !== null ? (s.return = o, ze = s) : fE(e, t, a);
      }
    }
    function fE(e, t, a) {
      for (; ze !== null; ) {
        var i = ze;
        if ((i.flags & kl) !== Ve) {
          var o = i.alternate;
          Jt(i);
          try {
            s1(t, o, i, a);
          } catch (f) {
            mn(i, i.return, f);
          }
          Rn();
        }
        if (i === e) {
          ze = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ze = s;
          return;
        }
        ze = i.return;
      }
    }
    function E1(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        switch (t.tag) {
          case z:
          case ve:
          case Be:
          case We: {
            if (t.mode & _t)
              try {
                Kl(), cl(yr, t, t.return);
              } finally {
                ql(t);
              }
            else
              cl(yr, t, t.return);
            break;
          }
          case $: {
            ld(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && uE(t, t.return, i);
            break;
          }
          case J: {
            ld(t, t.return);
            break;
          }
          case qe: {
            var o = t.memoizedState !== null;
            if (o) {
              Ix(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ze = a) : Ix(e);
      }
    }
    function Ix(e) {
      for (; ze !== null; ) {
        var t = ze;
        if (t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function C1(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        if (t.tag === qe) {
          var i = t.memoizedState !== null;
          if (i) {
            $x(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ze = a) : $x(e);
      }
    }
    function $x(e) {
      for (; ze !== null; ) {
        var t = ze;
        Jt(t);
        try {
          c1(t);
        } catch (i) {
          mn(t, t.return, i);
        }
        if (Rn(), t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function x1(e, t, a, i) {
      ze = t, R1(t, e, a, i);
    }
    function R1(e, t, a, i) {
      for (; ze !== null; ) {
        var o = ze, s = o.child;
        (o.subtreeFlags & fr) !== Ve && s !== null ? (s.return = o, ze = s) : b1(e, t, a, i);
      }
    }
    function b1(e, t, a, i) {
      for (; ze !== null; ) {
        var o = ze;
        if ((o.flags & Ea) !== Ve) {
          Jt(o);
          try {
            T1(t, o, a, i);
          } catch (f) {
            mn(o, o.return, f);
          }
          Rn();
        }
        if (o === e) {
          ze = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, ze = s;
          return;
        }
        ze = o.return;
      }
    }
    function T1(e, t, a, i) {
      switch (t.tag) {
        case z:
        case ve:
        case We: {
          if (t.mode & _t) {
            NS();
            try {
              qu(Br | mr, t);
            } finally {
              DS(t);
            }
          } else
            qu(Br | mr, t);
          break;
        }
      }
    }
    function w1(e) {
      ze = e, _1();
    }
    function _1() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        if ((ze.flags & ta) !== Ve) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              ze = o, N1(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ze = e;
          }
        }
        (e.subtreeFlags & fr) !== Ve && t !== null ? (t.return = e, ze = t) : k1();
      }
    }
    function k1() {
      for (; ze !== null; ) {
        var e = ze;
        (e.flags & Ea) !== Ve && (Jt(e), D1(e), Rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function D1(e) {
      switch (e.tag) {
        case z:
        case ve:
        case We: {
          e.mode & _t ? (NS(), cl(Br | mr, e, e.return), DS(e)) : cl(Br | mr, e, e.return);
          break;
        }
      }
    }
    function N1(e, t) {
      for (; ze !== null; ) {
        var a = ze;
        Jt(a), j1(a, t), Rn();
        var i = a.child;
        i !== null ? (i.return = a, ze = i) : O1(e);
      }
    }
    function O1(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.sibling, i = t.return;
        if (zx(t), t === e) {
          ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, ze = a;
          return;
        }
        ze = i;
      }
    }
    function j1(e, t) {
      switch (e.tag) {
        case z:
        case ve:
        case We: {
          e.mode & _t ? (NS(), cl(Br, e, t), DS(e)) : cl(Br, e, t);
          break;
        }
      }
    }
    function L1(e) {
      switch (e.tag) {
        case z:
        case ve:
        case We: {
          try {
            qu(yr | mr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case $: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
      }
    }
    function M1(e) {
      switch (e.tag) {
        case z:
        case ve:
        case We: {
          try {
            qu(Br | mr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function U1(e) {
      switch (e.tag) {
        case z:
        case ve:
        case We: {
          try {
            cl(yr | mr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case $: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && uE(e, e.return, t);
          break;
        }
      }
    }
    function z1(e) {
      switch (e.tag) {
        case z:
        case ve:
        case We:
          try {
            cl(Br | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var tv = Symbol.for;
      tv("selector.component"), tv("selector.has_pseudo_class"), tv("selector.role"), tv("selector.test_id"), tv("selector.text");
    }
    var A1 = [];
    function F1() {
      A1.forEach(function(e) {
        return e();
      });
    }
    var P1 = b.ReactCurrentActQueue;
    function V1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest != "undefined";
        return a && t !== !1;
      }
    }
    function Yx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && P1.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var H1 = Math.ceil, dE = b.ReactCurrentDispatcher, pE = b.ReactCurrentOwner, Wr = b.ReactCurrentBatchConfig, pl = b.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), Wx = (
      /*               */
      1
    ), Qr = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), $o = 0, nv = 1, hc = 2, iy = 3, rv = 4, Qx = 5, vE = 6, Lt = Er, _a = null, Ln = null, Cr = Z, Jl = Z, hE = Vu(Z), xr = $o, av = null, ly = Z, iv = Z, oy = Z, lv = null, Ga = null, mE = 0, Gx = 500, qx = 1 / 0, B1 = 500, Yo = null;
    function ov() {
      qx = Dn() + B1;
    }
    function Kx() {
      return qx;
    }
    var uy = !1, yE = null, od = null, mc = !1, Xu = null, uv = Z, gE = [], SE = null, I1 = 50, sv = 0, EE = null, CE = !1, sy = !1, $1 = 50, ud = 0, cy = null, cv = qt, fy = Z, Xx = !1;
    function dy() {
      return _a;
    }
    function ka() {
      return (Lt & (Qr | Li)) !== Er ? Dn() : (cv !== qt || (cv = Dn()), cv);
    }
    function Ju(e) {
      var t = e.mode;
      if ((t & St) === He)
        return Ke;
      if ((Lt & Qr) !== Er && Cr !== Z)
        return ir(Cr);
      var a = Pw() !== Fw;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return fy === Bn && (fy = Zd()), fy;
      }
      var o = xa();
      if (o !== Bn)
        return o;
      var s = RT();
      return s;
    }
    function Y1(e) {
      var t = e.mode;
      return (t & St) === He ? Ke : Ch();
    }
    function Rr(e, t, a, i) {
      hk(), Xx && y("useInsertionEffect must not schedule updates."), CE && (sy = !0), _u(e, a, i), (Lt & Qr) !== Z && e === _a ? gk(t) : (Nr && Rh(e, t, a), Sk(t), e === _a && ((Lt & Qr) === Er && (iv = ct(iv, a)), xr === rv && Zu(e, Cr)), qa(e, i), a === Ke && Lt === Er && (t.mode & St) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !pl.isBatchingLegacy && (ov(), X0()));
    }
    function W1(e, t, a) {
      var i = e.current;
      i.lanes = t, _u(e, t, a), qa(e, a);
    }
    function Q1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Lt & Qr) !== Er
      );
    }
    function qa(e, t) {
      var a = e.callbackNode;
      gh(e, t);
      var i = la(e, e === _a ? Cr : Z);
      if (i === Z) {
        a !== null && pR(a), e.callbackNode = null, e.callbackPriority = Bn;
        return;
      }
      var o = To(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(pl.current !== null && a !== kE)) {
        a == null && s !== Ke && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pR(a);
      var f;
      if (o === Ke)
        e.tag === Hu ? (pl.isBatchingLegacy !== null && (pl.didScheduleLegacyUpdate = !0), Cw(eR.bind(null, e))) : K0(eR.bind(null, e)), pl.current !== null ? pl.current.push(Bu) : TT(function() {
          (Lt & (Qr | Li)) === Er && Bu();
        }), f = null;
      else {
        var p;
        switch (Th(i)) {
          case ua:
            p = Zi;
            break;
          case Ha:
            p = _s;
            break;
          case pr:
            p = So;
            break;
          case Sf:
            p = Su;
            break;
          default:
            p = So;
            break;
        }
        f = DE(p, Jx.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function Jx(e, t) {
      if (f_(), cv = qt, fy = Z, (Lt & (Qr | Li)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Qo();
      if (i && e.callbackNode !== a)
        return null;
      var o = la(e, e === _a ? Cr : Z);
      if (o === Z)
        return null;
      var s = !Ps(e, o) && !Eh(e, o) && !t, f = s ? rk(e, o) : vy(e, o);
      if (f !== $o) {
        if (f === hc) {
          var p = ff(e);
          p !== Z && (o = p, f = xE(e, p));
        }
        if (f === nv) {
          var h = av;
          throw yc(e, Z), Zu(e, o), qa(e, Dn()), h;
        }
        if (f === vE)
          Zu(e, o);
        else {
          var x = !Ps(e, o), R = e.current.alternate;
          if (x && !q1(R)) {
            if (f = vy(e, o), f === hc) {
              var M = ff(e);
              M !== Z && (o = M, f = xE(e, M));
            }
            if (f === nv) {
              var j = av;
              throw yc(e, Z), Zu(e, o), qa(e, Dn()), j;
            }
          }
          e.finishedWork = R, e.finishedLanes = o, G1(e, f, o);
        }
      }
      return qa(e, Dn()), e.callbackNode === a ? Jx.bind(null, e) : null;
    }
    function xE(e, t) {
      var a = lv;
      if (_o(e)) {
        var i = yc(e, t);
        i.flags |= gn, vw(e.containerInfo);
      }
      var o = vy(e, t);
      if (o !== hc) {
        var s = Ga;
        Ga = a, s !== null && Zx(s);
      }
      return o;
    }
    function Zx(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function G1(e, t, a) {
      switch (t) {
        case $o:
        case nv:
          throw new Error("Root did not complete. This is a bug in React.");
        case hc: {
          gc(e, Ga, Yo);
          break;
        }
        case iy: {
          if (Zu(e, a), df(a) && // do not delay if we're inside an act() scope
          !vR()) {
            var i = mE + Gx - Dn();
            if (i > 10) {
              var o = la(e, Z);
              if (o !== Z)
                break;
              var s = e.suspendedLanes;
              if (!wo(s, a)) {
                ka(), mf(e, s);
                break;
              }
              e.timeoutHandle = Sg(gc.bind(null, e, Ga, Yo), i);
              break;
            }
          }
          gc(e, Ga, Yo);
          break;
        }
        case rv: {
          if (Zu(e, a), $y(a))
            break;
          if (!vR()) {
            var f = qd(e, a), p = f, h = Dn() - p, x = vk(h) - h;
            if (x > 10) {
              e.timeoutHandle = Sg(gc.bind(null, e, Ga, Yo), x);
              break;
            }
          }
          gc(e, Ga, Yo);
          break;
        }
        case Qx: {
          gc(e, Ga, Yo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function q1(e) {
      for (var t = e; ; ) {
        if (t.flags & Hc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!we(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & Hc && h !== null) {
          h.return = t, t = h;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Zu(e, t) {
      t = Vs(t, oy), t = Vs(t, iv), tp(e, t);
    }
    function eR(e) {
      if (d_(), (Lt & (Qr | Li)) !== Er)
        throw new Error("Should not already be working.");
      Qo();
      var t = la(e, Z);
      if (!oa(t, Ke))
        return qa(e, Dn()), null;
      var a = vy(e, t);
      if (e.tag !== Hu && a === hc) {
        var i = ff(e);
        i !== Z && (t = i, a = xE(e, i));
      }
      if (a === nv) {
        var o = av;
        throw yc(e, Z), Zu(e, t), qa(e, Dn()), o;
      }
      if (a === vE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, gc(e, Ga, Yo), qa(e, Dn()), null;
    }
    function K1(e, t) {
      t !== Z && (Hs(e, ct(t, Ke)), qa(e, Dn()), (Lt & (Qr | Li)) === Er && (ov(), Bu()));
    }
    function RE(e, t) {
      var a = Lt;
      Lt |= Wx;
      try {
        return e(t);
      } finally {
        Lt = a, Lt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !pl.isBatchingLegacy && (ov(), X0());
      }
    }
    function X1(e, t, a, i, o) {
      var s = xa(), f = Wr.transition;
      try {
        return Wr.transition = null, Gn(ua), e(t, a, i, o);
      } finally {
        Gn(s), Wr.transition = f, Lt === Er && ov();
      }
    }
    function Wo(e) {
      Xu !== null && Xu.tag === Hu && (Lt & (Qr | Li)) === Er && Qo();
      var t = Lt;
      Lt |= Wx;
      var a = Wr.transition, i = xa();
      try {
        return Wr.transition = null, Gn(ua), e ? e() : void 0;
      } finally {
        Gn(i), Wr.transition = a, Lt = t, (Lt & (Qr | Li)) === Er && Bu();
      }
    }
    function tR() {
      return (Lt & (Qr | Li)) !== Er;
    }
    function py(e, t) {
      fa(hE, Jl, e), Jl = ct(Jl, t);
    }
    function bE(e) {
      Jl = hE.current, ca(hE, e);
    }
    function yc(e, t) {
      e.finishedWork = null, e.finishedLanes = Z;
      var a = e.timeoutHandle;
      if (a !== Eg && (e.timeoutHandle = Eg, bT(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var o = i.alternate;
          Nx(o, i), i = i.return;
        }
      _a = e;
      var s = Sc(e.current, null);
      return Ln = s, Cr = Jl = t, xr = $o, av = null, ly = Z, iv = Z, oy = Z, lv = null, Ga = null, Ww(), il.discardPendingWarnings(), s;
    }
    function nR(e, t) {
      do {
        var a = Ln;
        try {
          if (Rm(), wC(), Rn(), pE.current = null, a === null || a.return === null) {
            xr = nv, av = t, Ln = null;
            return;
          }
          if (nt && a.mode & _t && Jm(a, !0), Ze)
            if (Nl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ds(a, i, Cr);
            } else
              Ti(a, t, Cr);
          C_(e, a.return, a, t, Cr), lR(a);
        } catch (o) {
          t = o, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function rR() {
      var e = dE.current;
      return dE.current = Qm, e === null ? Qm : e;
    }
    function aR(e) {
      dE.current = e;
    }
    function J1() {
      mE = Dn();
    }
    function fv(e) {
      ly = ct(e, ly);
    }
    function Z1() {
      xr === $o && (xr = iy);
    }
    function TE() {
      (xr === $o || xr === iy || xr === hc) && (xr = rv), _a !== null && (Ul(ly) || Ul(iv)) && Zu(_a, Cr);
    }
    function ek(e) {
      xr !== rv && (xr = hc), lv === null ? lv = [e] : lv.push(e);
    }
    function tk() {
      return xr === $o;
    }
    function vy(e, t) {
      var a = Lt;
      Lt |= Qr;
      var i = rR();
      if (_a !== e || Cr !== t) {
        if (Nr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (dv(e, Cr), o.clear()), np(e, t);
        }
        Yo = gf(), yc(e, t);
      }
      Yd(t);
      do
        try {
          nk();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      if (Rm(), Lt = a, aR(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Sn(), _a = null, Cr = Z, xr;
    }
    function nk() {
      for (; Ln !== null; )
        iR(Ln);
    }
    function rk(e, t) {
      var a = Lt;
      Lt |= Qr;
      var i = rR();
      if (_a !== e || Cr !== t) {
        if (Nr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (dv(e, Cr), o.clear()), np(e, t);
        }
        Yo = gf(), ov(), yc(e, t);
      }
      Yd(t);
      do
        try {
          ak();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      return Rm(), aR(i), Lt = a, Ln !== null ? (Wd(), $o) : (Sn(), _a = null, Cr = Z, xr);
    }
    function ak() {
      for (; Ln !== null && !Ad(); )
        iR(Ln);
    }
    function iR(e) {
      var t = e.alternate;
      Jt(e);
      var a;
      (e.mode & _t) !== He ? (kS(e), a = wE(t, e, Jl), Jm(e, !0)) : a = wE(t, e, Jl), Rn(), e.memoizedProps = e.pendingProps, a === null ? lR(e) : Ln = a, pE.current = null;
    }
    function lR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & yo) === Ve) {
          Jt(t);
          var o = void 0;
          if ((t.mode & _t) === He ? o = Dx(a, t, Jl) : (kS(t), o = Dx(a, t, Jl), Jm(t, !1)), Rn(), o !== null) {
            Ln = o;
            return;
          }
        } else {
          var s = Z_(a, t);
          if (s !== null) {
            s.flags &= lh, Ln = s;
            return;
          }
          if ((t.mode & _t) !== He) {
            Jm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= yo, i.subtreeFlags = Ve, i.deletions = null;
          else {
            xr = vE, Ln = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          Ln = h;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      xr === $o && (xr = Qx);
    }
    function gc(e, t, a) {
      var i = xa(), o = Wr.transition;
      try {
        Wr.transition = null, Gn(ua), ik(e, t, a, i);
      } finally {
        Wr.transition = o, Gn(i);
      }
      return null;
    }
    function ik(e, t, a, i) {
      do
        Qo();
      while (Xu !== null);
      if (mk(), (Lt & (Qr | Li)) !== Er)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (dh(s), o === null)
        return bi(), null;
      if (s === Z && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Z, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Bn;
      var f = ct(o.lanes, o.childLanes);
      xh(e, f), e === _a && (_a = null, Ln = null, Cr = Z), ((o.subtreeFlags & fr) !== Ve || (o.flags & fr) !== Ve) && (mc || (mc = !0, SE = a, DE(So, function() {
        return Qo(), null;
      })));
      var p = (o.subtreeFlags & (_l | gu | kl | fr)) !== Ve, h = (o.flags & (_l | gu | kl | fr)) !== Ve;
      if (p || h) {
        var x = Wr.transition;
        Wr.transition = null;
        var R = xa();
        Gn(ua);
        var M = Lt;
        Lt |= Li, pE.current = null, a1(e, o), XC(), g1(e, o, s), yT(e.containerInfo), e.current = o, Ns(s), S1(o, e, s), Co(), uh(), Lt = M, Gn(R), Wr.transition = x;
      } else
        e.current = o, XC();
      var j = mc;
      if (mc ? (mc = !1, Xu = e, uv = s) : (ud = 0, cy = null), f = e.pendingLanes, f === Z && (od = null), j || cR(e.current, !1), Vd(o.stateNode, i), Nr && e.memoizedUpdaters.clear(), F1(), qa(e, Dn()), t !== null)
        for (var W = e.onRecoverableError, G = 0; G < t.length; G++) {
          var K = t[G], be = K.stack, Qe = K.digest;
          W(K.value, {
            componentStack: be,
            digest: Qe
          });
        }
      if (uy) {
        uy = !1;
        var Fe = yE;
        throw yE = null, Fe;
      }
      return oa(uv, Ke) && e.tag !== Hu && Qo(), f = e.pendingLanes, oa(f, Ke) ? (c_(), e === EE ? sv++ : (sv = 0, EE = e)) : sv = 0, Bu(), bi(), null;
    }
    function Qo() {
      if (Xu !== null) {
        var e = Th(uv), t = Or(pr, e), a = Wr.transition, i = xa();
        try {
          return Wr.transition = null, Gn(t), ok();
        } finally {
          Gn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function lk(e) {
      gE.push(e), mc || (mc = !0, DE(So, function() {
        return Qo(), null;
      }));
    }
    function ok() {
      if (Xu === null)
        return !1;
      var e = SE;
      SE = null;
      var t = Xu, a = uv;
      if (Xu = null, uv = Z, (Lt & (Qr | Li)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      CE = !0, sy = !1, $d(a);
      var i = Lt;
      Lt |= Li, w1(t.current), x1(t, t.current, a, e);
      {
        var o = gE;
        gE = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          u1(t, f);
        }
      }
      xu(), cR(t.current, !0), Lt = i, Bu(), sy ? t === cy ? ud++ : (ud = 0, cy = t) : ud = 0, CE = !1, sy = !1, Hd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return od !== null && od.has(e);
    }
    function uk(e) {
      od === null ? od = /* @__PURE__ */ new Set([e]) : od.add(e);
    }
    function sk(e) {
      uy || (uy = !0, yE = e);
    }
    var ck = sk;
    function uR(e, t, a) {
      var i = pc(a, t), o = ix(e, i, Ke), s = $u(e, o, Ke), f = ka();
      s !== null && (_u(s, Ke, f), qa(s, f));
    }
    function mn(e, t, a) {
      if (t1(a), pv(!1), e.tag === B) {
        uR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          uR(i, e, a);
          return;
        } else if (i.tag === $) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = pc(a, e), p = WS(i, f, Ke), h = $u(i, p, Ke), x = ka();
            h !== null && (_u(h, Ke, x), qa(h, x));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function fk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = ka();
      mf(e, a), Ek(e), _a === e && wo(Cr, a) && (xr === rv || xr === iy && df(Cr) && Dn() - mE < Gx ? yc(e, Z) : oy = ct(oy, a)), qa(e, o);
    }
    function sR(e, t) {
      t === Bn && (t = Y1(e));
      var a = ka(), i = Wa(e, t);
      i !== null && (_u(i, t, a), qa(i, a));
    }
    function dk(e) {
      var t = e.memoizedState, a = Bn;
      t !== null && (a = t.retryLane), sR(e, a);
    }
    function pk(e, t) {
      var a = Bn, i;
      switch (e.tag) {
        case ge:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Kt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sR(e, a);
    }
    function vk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : H1(e / 1960) * 1960;
    }
    function hk() {
      if (sv > I1)
        throw sv = 0, EE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ud > $1 && (ud = 0, cy = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function mk() {
      il.flushLegacyContextWarning(), il.flushPendingUnsafeLifecycleWarnings();
    }
    function cR(e, t) {
      Jt(e), hy(e, Ar, U1), t && hy(e, wl, z1), hy(e, Ar, L1), t && hy(e, wl, M1), Rn();
    }
    function hy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ve ? i = i.child : ((i.flags & t) !== Ve && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var my = null;
    function fR(e) {
      {
        if ((Lt & Qr) !== Er || !(e.mode & St))
          return;
        var t = e.tag;
        if (t !== P && t !== B && t !== $ && t !== z && t !== ve && t !== Be && t !== We)
          return;
        var a = et(e) || "ReactComponent";
        if (my !== null) {
          if (my.has(a))
            return;
          my.add(a);
        } else
          my = /* @__PURE__ */ new Set([a]);
        var i = nr;
        try {
          Jt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Jt(e) : Rn();
        }
      }
    }
    var wE;
    {
      var yk = null;
      wE = function(e, t, a) {
        var i = SR(yk, t);
        try {
          return bx(e, t, a);
        } catch (s) {
          if (Dw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Rm(), wC(), Nx(e, t), SR(t, i), t.mode & _t && kS(t), Fa(null, bx, null, e, t, a), Nd()) {
            var o = Od();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dR = !1, _E;
    _E = /* @__PURE__ */ new Set();
    function gk(e) {
      if (Zr && !o_())
        switch (e.tag) {
          case z:
          case ve:
          case We: {
            var t = Ln && et(Ln) || "Unknown", a = t;
            if (!_E.has(a)) {
              _E.add(a);
              var i = et(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case $: {
            dR || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dR = !0);
            break;
          }
        }
    }
    function dv(e, t) {
      if (Nr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Rh(e, i, t);
        });
      }
    }
    var kE = {};
    function DE(e, t) {
      {
        var a = pl.current;
        return a !== null ? (a.push(t), kE) : Ud(e, t);
      }
    }
    function pR(e) {
      if (e !== kE)
        return zd(e);
    }
    function vR() {
      return pl.current !== null;
    }
    function Sk(e) {
      {
        if (e.mode & St) {
          if (!Yx())
            return;
        } else if (!V1() || Lt !== Er || e.tag !== z && e.tag !== ve && e.tag !== We)
          return;
        if (pl.current === null) {
          var t = nr;
          try {
            Jt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, et(e));
          } finally {
            t ? Jt(e) : Rn();
          }
        }
      }
    }
    function Ek(e) {
      e.tag !== Hu && Yx() && pl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function pv(e) {
      Xx = e;
    }
    var Mi = null, sd = null, Ck = function(e) {
      Mi = e;
    };
    function cd(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function NE(e) {
      return cd(e);
    }
    function OE(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = cd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ae,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function hR(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case $: {
            typeof i == "function" && (o = !0);
            break;
          }
          case z: {
            (typeof i == "function" || s === rt) && (o = !0);
            break;
          }
          case ve: {
            (s === ae || s === rt) && (o = !0);
            break;
          }
          case Be:
          case We: {
            (s === gt || s === rt) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Mi(a);
          if (f !== void 0 && f === Mi(i))
            return !0;
        }
        return !1;
      }
    }
    function mR(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        sd === null && (sd = /* @__PURE__ */ new WeakSet()), sd.add(e);
      }
    }
    var xk = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Qo(), Wo(function() {
          jE(e.current, i, a);
        });
      }
    }, Rk = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Qo(), Wo(function() {
          vv(t, e, null, null);
        });
      }
    };
    function jE(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, h = null;
        switch (f) {
          case z:
          case We:
          case $:
            h = p;
            break;
          case ve:
            h = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, R = !1;
        if (h !== null) {
          var M = Mi(h);
          M !== void 0 && (a.has(M) ? R = !0 : t.has(M) && (f === $ ? R = !0 : x = !0));
        }
        if (sd !== null && (sd.has(e) || i !== null && sd.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || x) {
          var j = Wa(e, Ke);
          j !== null && Rr(j, e, Ke, qt);
        }
        o !== null && !R && jE(o, t, a), s !== null && jE(s, t, a);
      }
    }
    var bk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return LE(e.current, i, a), a;
      }
    };
    function LE(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case z:
          case We:
          case $:
            p = f;
            break;
          case ve:
            p = f.render;
            break;
        }
        var h = !1;
        p !== null && t.has(p) && (h = !0), h ? Tk(e, a) : i !== null && LE(i, t, a), o !== null && LE(o, t, a);
      }
    }
    function Tk(e, t) {
      {
        var a = wk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case J:
              t.add(i.stateNode);
              return;
            case he:
              t.add(i.stateNode.containerInfo);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function wk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === J)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ME;
    {
      ME = !1;
      try {
        var yR = Object.preventExtensions({});
      } catch {
        ME = !0;
      }
    }
    function _k(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ve, this.subtreeFlags = Ve, this.deletions = null, this.lanes = Z, this.childLanes = Z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ME && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new _k(e, t, a, i);
    };
    function UE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function kk(e) {
      return typeof e == "function" && !UE(e) && e.defaultProps === void 0;
    }
    function Dk(e) {
      if (typeof e == "function")
        return UE(e) ? $ : z;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ae)
          return ve;
        if (t === gt)
          return Be;
      }
      return P;
    }
    function Sc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ve, a.subtreeFlags = Ve, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Hn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case P:
        case z:
        case We:
          a.type = cd(e.type);
          break;
        case $:
          a.type = NE(e.type);
          break;
        case ve:
          a.type = OE(e.type);
          break;
      }
      return a;
    }
    function Nk(e, t) {
      e.flags &= Hn | bn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Z, e.lanes = t, e.child = null, e.subtreeFlags = Ve, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ve, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Ok(e, t, a) {
      var i;
      return e === pm ? (i = St, t === !0 && (i |= ut, i |= tn)) : i = He, Nr && (i |= _t), fi(B, null, null, i);
    }
    function zE(e, t, a, i, o, s) {
      var f = P, p = e;
      if (typeof e == "function")
        UE(e) ? (f = $, p = NE(p)) : p = cd(p);
      else if (typeof e == "string")
        f = J;
      else
        e: switch (e) {
          case Kr:
            return es(a.children, o, s, t);
          case vi:
            f = Pe, o |= ut, (o & St) !== He && (o |= tn);
            break;
          case hi:
            return jk(a, o, s, t);
          case xe:
            return Lk(a, o, s, t);
          case Te:
            return Mk(a, o, s, t);
          case _n:
            return gR(a, o, s, t);
          case cn:
          case Et:
          case vn:
          case wr:
          case dt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Hi:
                  f = me;
                  break e;
                case k:
                  f = fe;
                  break e;
                case ae:
                  f = ve, p = OE(p);
                  break e;
                case gt:
                  f = Be;
                  break e;
                case rt:
                  f = Cn, p = null;
                  break e;
              }
            var h = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var x = i ? et(i) : null;
              x && (h += `

Check the render method of \`` + x + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
          }
        }
      var R = fi(f, a, t, o);
      return R.elementType = e, R.type = p, R.lanes = s, R._debugOwner = i, R;
    }
    function AE(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = zE(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function es(e, t, a, i) {
      var o = fi(le, e, i, t);
      return o.lanes = a, o;
    }
    function jk(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = fi(Re, e, i, t | _t);
      return o.elementType = hi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function Lk(e, t, a, i) {
      var o = fi(ge, e, i, t);
      return o.elementType = xe, o.lanes = a, o;
    }
    function Mk(e, t, a, i) {
      var o = fi(Kt, e, i, t);
      return o.elementType = Te, o.lanes = a, o;
    }
    function gR(e, t, a, i) {
      var o = fi(qe, e, i, t);
      o.elementType = _n, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function FE(e, t, a) {
      var i = fi(ue, e, null, t);
      return i.lanes = a, i;
    }
    function Uk() {
      var e = fi(J, null, null, He);
      return e.elementType = "DELETED", e;
    }
    function zk(e) {
      var t = fi(un, null, null, He);
      return t.stateNode = e, t;
    }
    function PE(e, t, a) {
      var i = e.children !== null ? e.children : [], o = fi(he, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function SR(e, t) {
      return e === null && (e = fi(P, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Ak(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Eg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Bn, this.eventTimes = hf(Z), this.expirationTimes = hf(qt), this.pendingLanes = Z, this.suspendedLanes = Z, this.pingedLanes = Z, this.expiredLanes = Z, this.mutableReadLanes = Z, this.finishedLanes = Z, this.entangledLanes = Z, this.entanglements = hf(Z), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Gd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case pm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Hu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ER(e, t, a, i, o, s, f, p, h, x) {
      var R = new Ak(e, t, a, p, h), M = Ok(t, s);
      R.current = M, M.stateNode = R;
      {
        var j = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        M.memoizedState = j;
      }
      return Jg(M), R;
    }
    var VE = "18.3.1";
    function Fk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ha(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Sa,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var HE, BE;
    HE = !1, BE = {};
    function CR(e) {
      if (!e)
        return ci;
      var t = yu(e), a = Ew(t);
      if (t.tag === $) {
        var i = t.type;
        if (Yl(i))
          return G0(t, i, a);
      }
      return a;
    }
    function Pk(e, t) {
      {
        var a = yu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = ra(a);
        if (o === null)
          return null;
        if (o.mode & ut) {
          var s = et(a) || "Component";
          if (!BE[s]) {
            BE[s] = !0;
            var f = nr;
            try {
              Jt(o), a.mode & ut ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Jt(f) : Rn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function xR(e, t, a, i, o, s, f, p) {
      var h = !1, x = null;
      return ER(e, t, h, x, a, i, o, s, f);
    }
    function RR(e, t, a, i, o, s, f, p, h, x) {
      var R = !0, M = ER(a, i, R, e, o, s, f, p, h);
      M.context = CR(null);
      var j = M.current, W = ka(), G = Ju(j), K = Bo(W, G);
      return K.callback = t != null ? t : null, $u(j, K, G), W1(M, G, W), M;
    }
    function vv(e, t, a, i) {
      Pd(t, e);
      var o = t.current, s = ka(), f = Ju(o);
      Yc(f);
      var p = CR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Zr && nr !== null && !HE && (HE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, et(nr) || "Unknown"));
      var h = Bo(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var x = $u(o, h, f);
      return x !== null && (Rr(x, o, f, s), km(x, o, f)), f;
    }
    function yy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case J:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Vk(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (_o(t)) {
            var a = Sh(t);
            K1(t, a);
          }
          break;
        }
        case ge: {
          Wo(function() {
            var o = Wa(e, Ke);
            if (o !== null) {
              var s = ka();
              Rr(o, e, Ke, s);
            }
          });
          var i = Ke;
          IE(e, i);
          break;
        }
      }
    }
    function bR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ep(a.retryLane, t));
    }
    function IE(e, t) {
      bR(e, t);
      var a = e.alternate;
      a && bR(a, t);
    }
    function Hk(e) {
      if (e.tag === ge) {
        var t = wu, a = Wa(e, t);
        if (a !== null) {
          var i = ka();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function Bk(e) {
      if (e.tag === ge) {
        var t = Ju(e), a = Wa(e, t);
        if (a !== null) {
          var i = ka();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function TR(e) {
      var t = li(e);
      return t === null ? null : t.stateNode;
    }
    var wR = function(e) {
      return null;
    };
    function Ik(e) {
      return wR(e);
    }
    var _R = function(e) {
      return !1;
    };
    function $k(e) {
      return _R(e);
    }
    var kR = null, DR = null, NR = null, OR = null, jR = null, LR = null, MR = null, UR = null, zR = null;
    {
      var AR = function(e, t, a) {
        var i = t[a], o = st(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (st(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = AR(e[i], t, a + 1), o);
      }, FR = function(e, t) {
        return AR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var o = t[i], s = st(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], st(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = PR(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          O("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              O("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, HR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = st(e) ? e.slice() : ot({}, e);
        return s[o] = HR(e[o], t, a + 1, i), s;
      }, BR = function(e, t, a) {
        return HR(e, t, 0, a);
      }, $E = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kR = function(e, t, a, i) {
        var o = $E(e, t);
        if (o !== null) {
          var s = BR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Wa(e, Ke);
          f !== null && Rr(f, e, Ke, qt);
        }
      }, DR = function(e, t, a) {
        var i = $E(e, t);
        if (i !== null) {
          var o = FR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ot({}, e.memoizedProps);
          var s = Wa(e, Ke);
          s !== null && Rr(s, e, Ke, qt);
        }
      }, NR = function(e, t, a, i) {
        var o = $E(e, t);
        if (o !== null) {
          var s = VR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Wa(e, Ke);
          f !== null && Rr(f, e, Ke, qt);
        }
      }, OR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, Ke);
        i !== null && Rr(i, e, Ke, qt);
      }, jR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Wa(e, Ke);
        a !== null && Rr(a, e, Ke, qt);
      }, LR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, Ke);
        i !== null && Rr(i, e, Ke, qt);
      }, MR = function(e) {
        var t = Wa(e, Ke);
        t !== null && Rr(t, e, Ke, qt);
      }, UR = function(e) {
        wR = e;
      }, zR = function(e) {
        _R = e;
      };
    }
    function Yk(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function Wk(e) {
      return null;
    }
    function Qk() {
      return nr;
    }
    function Gk(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return Fd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: DR,
        overrideHookStateRenamePath: NR,
        overrideProps: OR,
        overridePropsDeletePath: jR,
        overridePropsRenamePath: LR,
        setErrorHandler: UR,
        setSuspenseHandler: zR,
        scheduleUpdate: MR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Yk,
        findFiberByHostInstance: t || Wk,
        // React Refresh
        findHostInstancesForRefresh: bk,
        scheduleRefresh: xk,
        scheduleRoot: Rk,
        setRefreshHandler: Ck,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Qk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: VE
      });
    }
    var IR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function YE(e) {
      this._internalRoot = e;
    }
    gy.prototype.render = YE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Sy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] != "undefined" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Pn) {
          var i = TR(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      vv(e, t, null, null);
    }, gy.prototype.unmount = YE.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tR() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wo(function() {
          vv(null, e, null, null);
        }), I0(t);
      }
    };
    function qk(e, t) {
      if (!Sy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, o = "", s = IR;
      t != null && (t.hydrate ? O("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === cr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = xR(e, pm, null, a, i, o, s);
      lm(f.current, e);
      var p = e.nodeType === Pn ? e.parentNode : e;
      return Ep(p), new YE(f);
    }
    function gy(e) {
      this._internalRoot = e;
    }
    function Kk(e) {
      e && Nh(e);
    }
    gy.prototype.unstable_scheduleHydration = Kk;
    function Xk(e, t, a) {
      if (!Sy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", h = IR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var x = RR(t, null, e, pm, i, s, f, p, h);
      if (lm(x.current, e), Ep(e), o)
        for (var R = 0; R < o.length; R++) {
          var M = o[R];
          t_(x, M);
        }
      return new gy(x);
    }
    function Sy(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Ki || e.nodeType === fs));
    }
    function hv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Ki || e.nodeType === fs || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Op(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Jk = b.ReactCurrentOwner, YR;
    YR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Pn) {
        var t = TR(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = WE(e), o = !!(i && Pu(i));
      o && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function WE(e) {
      return e ? e.nodeType === Ki ? e.documentElement : e.firstChild : null;
    }
    function WR() {
    }
    function Zk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var j = yy(f);
            s.call(j);
          };
        }
        var f = RR(
          t,
          i,
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = f, lm(f.current, e);
        var p = e.nodeType === Pn ? e.parentNode : e;
        return Ep(p), Wo(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var j = yy(R);
            x.call(j);
          };
        }
        var R = xR(
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = R, lm(R.current, e);
        var M = e.nodeType === Pn ? e.parentNode : e;
        return Ep(M), Wo(function() {
          vv(t, R, a, i);
        }), R;
      }
    }
    function eD(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ey(e, t, a, i, o) {
      YR(a), eD(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Zk(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var h = yy(f);
            p.call(h);
          };
        }
        vv(t, f, e, o);
      }
      return yy(f);
    }
    var QR = !1;
    function tD(e) {
      {
        QR || (QR = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Jk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : Pk(e, "findDOMNode");
    }
    function nD(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ey(null, e, t, !0, a);
    }
    function rD(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ey(null, e, t, !1, a);
    }
    function aD(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !mo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ey(e, t, a, !1, i);
    }
    var GR = !1;
    function iD(e) {
      if (GR || (GR = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !hv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Op(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = WE(e), i = a && !Pu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Wo(function() {
          Ey(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var o = WE(e), s = !!(o && Pu(o)), f = e.nodeType === ea && hv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Wy(Vk), ap(Hk), Qy(Bk), Ef(xa), wh(bh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Es(oT), ah(RE, X1, Wo);
    function lD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Sy(t))
        throw new Error("Target container is not a DOM element.");
      return Fk(e, t, null, a);
    }
    function oD(e, t, a, i) {
      return aD(e, t, a, i);
    }
    var QE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Pu, Hf, om, kd, pu, RE]
    };
    function uD(e, t) {
      return QE.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), qk(e, t);
    }
    function sD(e, t, a) {
      return QE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Xk(e, t, a);
    }
    function cD(e) {
      return tR() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wo(e);
    }
    var fD = Gk({
      findFiberByHostInstance: ac,
      bundleType: 1,
      version: VE,
      rendererPackageName: "react-dom"
    });
    if (!fD && Jn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QE, Xa.createPortal = lD, Xa.createRoot = uD, Xa.findDOMNode = tD, Xa.flushSync = cD, Xa.hydrate = nD, Xa.hydrateRoot = sD, Xa.render = rD, Xa.unmountComponentAtNode = iD, Xa.unstable_batchedUpdates = RE, Xa.unstable_renderSubtreeIntoContainer = oD, Xa.version = VE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Xa;
}
var yb = {};
function gb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (yb.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gb);
    } catch (v) {
      console.error(v);
    }
  }
}
yb.NODE_ENV === "production" ? (gb(), e0.exports = TD()) : e0.exports = wD();
var _D = e0.exports, kD = {}, Sv = _D;
if (kD.NODE_ENV === "production")
  Cv.createRoot = Sv.createRoot, Cv.hydrateRoot = Sv.hydrateRoot;
else {
  var xy = Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Cv.createRoot = function(v, E) {
    xy.usingClientEntryPoint = !0;
    try {
      return Sv.createRoot(v, E);
    } finally {
      xy.usingClientEntryPoint = !1;
    }
  }, Cv.hydrateRoot = function(v, E, S) {
    xy.usingClientEntryPoint = !0;
    try {
      return Sv.hydrateRoot(v, E, S);
    } finally {
      xy.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xv() {
  return xv = Object.assign ? Object.assign.bind() : function(v) {
    for (var E = 1; E < arguments.length; E++) {
      var S = arguments[E];
      for (var b in S)
        Object.prototype.hasOwnProperty.call(S, b) && (v[b] = S[b]);
    }
    return v;
  }, xv.apply(this, arguments);
}
var ts;
(function(v) {
  v.Pop = "POP", v.Push = "PUSH", v.Replace = "REPLACE";
})(ts || (ts = {}));
const ib = "popstate";
function DD(v) {
  v === void 0 && (v = {});
  function E(b, w) {
    let {
      pathname: N,
      search: O,
      hash: y
    } = b.location;
    return t0(
      "",
      {
        pathname: N,
        search: O,
        hash: y
      },
      // state defaults to `null` because `window.history.state` does
      w.state && w.state.usr || null,
      w.state && w.state.key || "default"
    );
  }
  function S(b, w) {
    return typeof w == "string" ? w : Rv(w);
  }
  return OD(E, S, null, v);
}
function yt(v, E) {
  if (v === !1 || v === null || typeof v == "undefined")
    throw new Error(E);
}
function zi(v, E) {
  if (!v) {
    typeof console != "undefined" && console.warn(E);
    try {
      throw new Error(E);
    } catch {
    }
  }
}
function ND() {
  return Math.random().toString(36).substr(2, 8);
}
function lb(v, E) {
  return {
    usr: v.state,
    key: v.key,
    idx: E
  };
}
function t0(v, E, S, b) {
  return S === void 0 && (S = null), xv({
    pathname: typeof v == "string" ? v : v.pathname,
    search: "",
    hash: ""
  }, typeof E == "string" ? pd(E) : E, {
    state: S,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: E && E.key || b || ND()
  });
}
function Rv(v) {
  let {
    pathname: E = "/",
    search: S = "",
    hash: b = ""
  } = v;
  return S && S !== "?" && (E += S.charAt(0) === "?" ? S : "?" + S), b && b !== "#" && (E += b.charAt(0) === "#" ? b : "#" + b), E;
}
function pd(v) {
  let E = {};
  if (v) {
    let S = v.indexOf("#");
    S >= 0 && (E.hash = v.substr(S), v = v.substr(0, S));
    let b = v.indexOf("?");
    b >= 0 && (E.search = v.substr(b), v = v.substr(0, b)), v && (E.pathname = v);
  }
  return E;
}
function OD(v, E, S, b) {
  b === void 0 && (b = {});
  let {
    window: w = document.defaultView,
    v5Compat: N = !1
  } = b, O = w.history, y = ts.Pop, F = null, z = $();
  z == null && (z = 0, O.replaceState(xv({}, O.state, {
    idx: z
  }), ""));
  function $() {
    return (O.state || {
      idx: null
    }).idx;
  }
  function P() {
    y = ts.Pop;
    let le = $(), Pe = le == null ? null : le - z;
    z = le, F && F({
      action: y,
      location: ue.location,
      delta: Pe
    });
  }
  function B(le, Pe) {
    y = ts.Push;
    let fe = t0(ue.location, le, Pe);
    z = $() + 1;
    let me = lb(fe, z), ve = ue.createHref(fe);
    try {
      O.pushState(me, "", ve);
    } catch (Re) {
      if (Re instanceof DOMException && Re.name === "DataCloneError")
        throw Re;
      w.location.assign(ve);
    }
    N && F && F({
      action: y,
      location: ue.location,
      delta: 1
    });
  }
  function he(le, Pe) {
    y = ts.Replace;
    let fe = t0(ue.location, le, Pe);
    z = $();
    let me = lb(fe, z), ve = ue.createHref(fe);
    O.replaceState(me, "", ve), N && F && F({
      action: y,
      location: ue.location,
      delta: 0
    });
  }
  function J(le) {
    let Pe = w.location.origin !== "null" ? w.location.origin : w.location.href, fe = typeof le == "string" ? le : Rv(le);
    return fe = fe.replace(/ $/, "%20"), yt(Pe, "No window.location.(origin|href) available to create URL for href: " + fe), new URL(fe, Pe);
  }
  let ue = {
    get action() {
      return y;
    },
    get location() {
      return v(w, O);
    },
    listen(le) {
      if (F)
        throw new Error("A history only accepts one active listener");
      return w.addEventListener(ib, P), F = le, () => {
        w.removeEventListener(ib, P), F = null;
      };
    },
    createHref(le) {
      return E(w, le);
    },
    createURL: J,
    encodeLocation(le) {
      let Pe = J(le);
      return {
        pathname: Pe.pathname,
        search: Pe.search,
        hash: Pe.hash
      };
    },
    push: B,
    replace: he,
    go(le) {
      return O.go(le);
    }
  };
  return ue;
}
var ob;
(function(v) {
  v.data = "data", v.deferred = "deferred", v.redirect = "redirect", v.error = "error";
})(ob || (ob = {}));
function jD(v, E, S) {
  return S === void 0 && (S = "/"), LD(v, E, S);
}
function LD(v, E, S, b) {
  let w = typeof E == "string" ? pd(E) : E, N = ns(w.pathname || "/", S);
  if (N == null)
    return null;
  let O = Sb(v);
  MD(O);
  let y = null;
  for (let F = 0; y == null && F < O.length; ++F) {
    let z = YD(N);
    y = ID(O[F], z);
  }
  return y;
}
function Sb(v, E, S, b) {
  E === void 0 && (E = []), S === void 0 && (S = []), b === void 0 && (b = "");
  let w = (N, O, y) => {
    let F = {
      relativePath: y === void 0 ? N.path || "" : y,
      caseSensitive: N.caseSensitive === !0,
      childrenIndex: O,
      route: N
    };
    F.relativePath.startsWith("/") && (yt(F.relativePath.startsWith(b), 'Absolute route path "' + F.relativePath + '" nested under path ' + ('"' + b + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), F.relativePath = F.relativePath.slice(b.length));
    let z = qo([b, F.relativePath]), $ = S.concat(F);
    N.children && N.children.length > 0 && (yt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      N.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + z + '".')
    ), Sb(N.children, E, $, z)), !(N.path == null && !N.index) && E.push({
      path: z,
      score: HD(z, N.index),
      routesMeta: $
    });
  };
  return v.forEach((N, O) => {
    var y;
    if (N.path === "" || !((y = N.path) != null && y.includes("?")))
      w(N, O);
    else
      for (let F of Eb(N.path))
        w(N, O, F);
  }), E;
}
function Eb(v) {
  let E = v.split("/");
  if (E.length === 0) return [];
  let [S, ...b] = E, w = S.endsWith("?"), N = S.replace(/\?$/, "");
  if (b.length === 0)
    return w ? [N, ""] : [N];
  let O = Eb(b.join("/")), y = [];
  return y.push(...O.map((F) => F === "" ? N : [N, F].join("/"))), w && y.push(...O), y.map((F) => v.startsWith("/") && F === "" ? "/" : F);
}
function MD(v) {
  v.sort((E, S) => E.score !== S.score ? S.score - E.score : BD(E.routesMeta.map((b) => b.childrenIndex), S.routesMeta.map((b) => b.childrenIndex)));
}
const UD = /^:[\w-]+$/, zD = 3, AD = 2, FD = 1, PD = 10, VD = -2, ub = (v) => v === "*";
function HD(v, E) {
  let S = v.split("/"), b = S.length;
  return S.some(ub) && (b += VD), E && (b += AD), S.filter((w) => !ub(w)).reduce((w, N) => w + (UD.test(N) ? zD : N === "" ? FD : PD), b);
}
function BD(v, E) {
  return v.length === E.length && v.slice(0, -1).every((b, w) => b === E[w]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    v[v.length - 1] - E[E.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ID(v, E, S) {
  let {
    routesMeta: b
  } = v, w = {}, N = "/", O = [];
  for (let y = 0; y < b.length; ++y) {
    let F = b[y], z = y === b.length - 1, $ = N === "/" ? E : E.slice(N.length) || "/", P = n0({
      path: F.relativePath,
      caseSensitive: F.caseSensitive,
      end: z
    }, $), B = F.route;
    if (!P)
      return null;
    Object.assign(w, P.params), O.push({
      // TODO: Can this as be avoided?
      params: w,
      pathname: qo([N, P.pathname]),
      pathnameBase: qD(qo([N, P.pathnameBase])),
      route: B
    }), P.pathnameBase !== "/" && (N = qo([N, P.pathnameBase]));
  }
  return O;
}
function n0(v, E) {
  typeof v == "string" && (v = {
    path: v,
    caseSensitive: !1,
    end: !0
  });
  let [S, b] = $D(v.path, v.caseSensitive, v.end), w = E.match(S);
  if (!w) return null;
  let N = w[0], O = N.replace(/(.)\/+$/, "$1"), y = w.slice(1);
  return {
    params: b.reduce((z, $, P) => {
      let {
        paramName: B,
        isOptional: he
      } = $;
      if (B === "*") {
        let ue = y[P] || "";
        O = N.slice(0, N.length - ue.length).replace(/(.)\/+$/, "$1");
      }
      const J = y[P];
      return he && !J ? z[B] = void 0 : z[B] = (J || "").replace(/%2F/g, "/"), z;
    }, {}),
    pathname: N,
    pathnameBase: O,
    pattern: v
  };
}
function $D(v, E, S) {
  E === void 0 && (E = !1), S === void 0 && (S = !0), zi(v === "*" || !v.endsWith("*") || v.endsWith("/*"), 'Route path "' + v + '" will be treated as if it were ' + ('"' + v.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + v.replace(/\*$/, "/*") + '".'));
  let b = [], w = "^" + v.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (O, y, F) => (b.push({
    paramName: y,
    isOptional: F != null
  }), F ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return v.endsWith("*") ? (b.push({
    paramName: "*"
  }), w += v === "*" || v === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : S ? w += "\\/*$" : v !== "" && v !== "/" && (w += "(?:(?=\\/|$))"), [new RegExp(w, E ? void 0 : "i"), b];
}
function YD(v) {
  try {
    return v.split("/").map((E) => decodeURIComponent(E).replace(/\//g, "%2F")).join("/");
  } catch (E) {
    return zi(!1, 'The URL path "' + v + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + E + ").")), v;
  }
}
function ns(v, E) {
  if (E === "/") return v;
  if (!v.toLowerCase().startsWith(E.toLowerCase()))
    return null;
  let S = E.endsWith("/") ? E.length - 1 : E.length, b = v.charAt(S);
  return b && b !== "/" ? null : v.slice(S) || "/";
}
function WD(v, E) {
  E === void 0 && (E = "/");
  let {
    pathname: S,
    search: b = "",
    hash: w = ""
  } = typeof v == "string" ? pd(v) : v;
  return {
    pathname: S ? S.startsWith("/") ? S : QD(S, E) : E,
    search: KD(b),
    hash: XD(w)
  };
}
function QD(v, E) {
  let S = E.replace(/\/+$/, "").split("/");
  return v.split("/").forEach((w) => {
    w === ".." ? S.length > 1 && S.pop() : w !== "." && S.push(w);
  }), S.length > 1 ? S.join("/") : "/";
}
function KE(v, E, S, b) {
  return "Cannot include a '" + v + "' character in a manually specified " + ("`to." + E + "` field [" + JSON.stringify(b) + "].  Please separate it out to the ") + ("`to." + S + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function GD(v) {
  return v.filter((E, S) => S === 0 || E.route.path && E.route.path.length > 0);
}
function l0(v, E) {
  let S = GD(v);
  return E ? S.map((b, w) => w === S.length - 1 ? b.pathname : b.pathnameBase) : S.map((b) => b.pathnameBase);
}
function o0(v, E, S, b) {
  b === void 0 && (b = !1);
  let w;
  typeof v == "string" ? w = pd(v) : (w = xv({}, v), yt(!w.pathname || !w.pathname.includes("?"), KE("?", "pathname", "search", w)), yt(!w.pathname || !w.pathname.includes("#"), KE("#", "pathname", "hash", w)), yt(!w.search || !w.search.includes("#"), KE("#", "search", "hash", w)));
  let N = v === "" || w.pathname === "", O = N ? "/" : w.pathname, y;
  if (O == null)
    y = S;
  else {
    let P = E.length - 1;
    if (!b && O.startsWith("..")) {
      let B = O.split("/");
      for (; B[0] === ".."; )
        B.shift(), P -= 1;
      w.pathname = B.join("/");
    }
    y = P >= 0 ? E[P] : "/";
  }
  let F = WD(w, y), z = O && O !== "/" && O.endsWith("/"), $ = (N || O === ".") && S.endsWith("/");
  return !F.pathname.endsWith("/") && (z || $) && (F.pathname += "/"), F;
}
const qo = (v) => v.join("/").replace(/\/\/+/g, "/"), qD = (v) => v.replace(/\/+$/, "").replace(/^\/*/, "/"), KD = (v) => !v || v === "?" ? "" : v.startsWith("?") ? v : "?" + v, XD = (v) => !v || v === "#" ? "" : v.startsWith("#") ? v : "#" + v;
function JD(v) {
  return v != null && typeof v.status == "number" && typeof v.statusText == "string" && typeof v.internal == "boolean" && "data" in v;
}
const Cb = ["post", "put", "patch", "delete"];
new Set(Cb);
const ZD = ["get", ...Cb];
new Set(ZD);
var Ht = {};
function bv() {
  return bv = Object.assign ? Object.assign.bind() : function(v) {
    for (var E = 1; E < arguments.length; E++) {
      var S = arguments[E];
      for (var b in S)
        Object.prototype.hasOwnProperty.call(S, b) && (v[b] = S[b]);
    }
    return v;
  }, bv.apply(this, arguments);
}
const wv = /* @__PURE__ */ ee.createContext(null);
Ht.NODE_ENV !== "production" && (wv.displayName = "DataRouter");
const u0 = /* @__PURE__ */ ee.createContext(null);
Ht.NODE_ENV !== "production" && (u0.displayName = "DataRouterState");
const eN = /* @__PURE__ */ ee.createContext(null);
Ht.NODE_ENV !== "production" && (eN.displayName = "Await");
const Ai = /* @__PURE__ */ ee.createContext(null);
Ht.NODE_ENV !== "production" && (Ai.displayName = "Navigation");
const _v = /* @__PURE__ */ ee.createContext(null);
Ht.NODE_ENV !== "production" && (_v.displayName = "Location");
const vl = /* @__PURE__ */ ee.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ht.NODE_ENV !== "production" && (vl.displayName = "Route");
const s0 = /* @__PURE__ */ ee.createContext(null);
Ht.NODE_ENV !== "production" && (s0.displayName = "RouteError");
function tN(v, E) {
  let {
    relative: S
  } = E === void 0 ? {} : E;
  vd() || (Ht.NODE_ENV !== "production" ? yt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : yt(!1));
  let {
    basename: b,
    navigator: w
  } = ee.useContext(Ai), {
    hash: N,
    pathname: O,
    search: y
  } = kv(v, {
    relative: S
  }), F = O;
  return b !== "/" && (F = O === "/" ? b : qo([b, O])), w.createHref({
    pathname: F,
    search: y,
    hash: N
  });
}
function vd() {
  return ee.useContext(_v) != null;
}
function Ko() {
  return vd() || (Ht.NODE_ENV !== "production" ? yt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : yt(!1)), ee.useContext(_v).location;
}
const xb = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Rb(v) {
  ee.useContext(Ai).static || ee.useLayoutEffect(v);
}
function Xo() {
  let {
    isDataRoute: v
  } = ee.useContext(vl);
  return v ? hN() : nN();
}
function nN() {
  vd() || (Ht.NODE_ENV !== "production" ? yt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : yt(!1));
  let v = ee.useContext(wv), {
    basename: E,
    future: S,
    navigator: b
  } = ee.useContext(Ai), {
    matches: w
  } = ee.useContext(vl), {
    pathname: N
  } = Ko(), O = JSON.stringify(l0(w, S.v7_relativeSplatPath)), y = ee.useRef(!1);
  return Rb(() => {
    y.current = !0;
  }), ee.useCallback(function(z, $) {
    if ($ === void 0 && ($ = {}), Ht.NODE_ENV !== "production" && zi(y.current, xb), !y.current) return;
    if (typeof z == "number") {
      b.go(z);
      return;
    }
    let P = o0(z, JSON.parse(O), N, $.relative === "path");
    v == null && E !== "/" && (P.pathname = P.pathname === "/" ? E : qo([E, P.pathname])), ($.replace ? b.replace : b.push)(P, $.state, $);
  }, [E, b, O, N, v]);
}
function c0() {
  let {
    matches: v
  } = ee.useContext(vl), E = v[v.length - 1];
  return E ? E.params : {};
}
function kv(v, E) {
  let {
    relative: S
  } = E === void 0 ? {} : E, {
    future: b
  } = ee.useContext(Ai), {
    matches: w
  } = ee.useContext(vl), {
    pathname: N
  } = Ko(), O = JSON.stringify(l0(w, b.v7_relativeSplatPath));
  return ee.useMemo(() => o0(v, JSON.parse(O), N, S === "path"), [v, O, N, S]);
}
function rN(v, E) {
  return aN(v, E);
}
function aN(v, E, S, b) {
  vd() || (Ht.NODE_ENV !== "production" ? yt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : yt(!1));
  let {
    navigator: w
  } = ee.useContext(Ai), {
    matches: N
  } = ee.useContext(vl), O = N[N.length - 1], y = O ? O.params : {}, F = O ? O.pathname : "/", z = O ? O.pathnameBase : "/", $ = O && O.route;
  if (Ht.NODE_ENV !== "production") {
    let fe = $ && $.path || "";
    Tb(F, !$ || fe.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + F + '" (under <Route path="' + fe + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + fe + '"> to <Route ') + ('path="' + (fe === "/" ? "*" : fe + "/*") + '">.'));
  }
  let P = Ko(), B;
  if (E) {
    var he;
    let fe = typeof E == "string" ? pd(E) : E;
    z === "/" || (he = fe.pathname) != null && he.startsWith(z) || (Ht.NODE_ENV !== "production" ? yt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + z + '" ') + ('but pathname "' + fe.pathname + '" was given in the `location` prop.')) : yt(!1)), B = fe;
  } else
    B = P;
  let J = B.pathname || "/", ue = J;
  if (z !== "/") {
    let fe = z.replace(/^\//, "").split("/");
    ue = "/" + J.replace(/^\//, "").split("/").slice(fe.length).join("/");
  }
  let le = jD(v, {
    pathname: ue
  });
  Ht.NODE_ENV !== "production" && (Ht.NODE_ENV !== "production" && zi($ || le != null, 'No routes matched location "' + B.pathname + B.search + B.hash + '" '), Ht.NODE_ENV !== "production" && zi(le == null || le[le.length - 1].route.element !== void 0 || le[le.length - 1].route.Component !== void 0 || le[le.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + B.pathname + B.search + B.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let Pe = sN(le && le.map((fe) => Object.assign({}, fe, {
    params: Object.assign({}, y, fe.params),
    pathname: qo([
      z,
      // Re-encode pathnames that were decoded inside matchRoutes
      w.encodeLocation ? w.encodeLocation(fe.pathname).pathname : fe.pathname
    ]),
    pathnameBase: fe.pathnameBase === "/" ? z : qo([
      z,
      // Re-encode pathnames that were decoded inside matchRoutes
      w.encodeLocation ? w.encodeLocation(fe.pathnameBase).pathname : fe.pathnameBase
    ])
  })), N, S, b);
  return E && Pe ? /* @__PURE__ */ ee.createElement(_v.Provider, {
    value: {
      location: bv({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, B),
      navigationType: ts.Pop
    }
  }, Pe) : Pe;
}
function iN() {
  let v = vN(), E = JD(v) ? v.status + " " + v.statusText : v instanceof Error ? v.message : JSON.stringify(v), S = v instanceof Error ? v.stack : null, b = "rgba(200,200,200, 0.5)", w = {
    padding: "0.5rem",
    backgroundColor: b
  }, N = {
    padding: "2px 4px",
    backgroundColor: b
  }, O = null;
  return Ht.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", v), O = /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ ee.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ ee.createElement("code", {
    style: N
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ ee.createElement("code", {
    style: N
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ ee.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, E), S ? /* @__PURE__ */ ee.createElement("pre", {
    style: w
  }, S) : null, O);
}
const lN = /* @__PURE__ */ ee.createElement(iN, null);
class oN extends ee.Component {
  constructor(E) {
    super(E), this.state = {
      location: E.location,
      revalidation: E.revalidation,
      error: E.error
    };
  }
  static getDerivedStateFromError(E) {
    return {
      error: E
    };
  }
  static getDerivedStateFromProps(E, S) {
    return S.location !== E.location || S.revalidation !== "idle" && E.revalidation === "idle" ? {
      error: E.error,
      location: E.location,
      revalidation: E.revalidation
    } : {
      error: E.error !== void 0 ? E.error : S.error,
      location: S.location,
      revalidation: E.revalidation || S.revalidation
    };
  }
  componentDidCatch(E, S) {
    console.error("React Router caught the following error during render", E, S);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ ee.createElement(vl.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ ee.createElement(s0.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function uN(v) {
  let {
    routeContext: E,
    match: S,
    children: b
  } = v, w = ee.useContext(wv);
  return w && w.static && w.staticContext && (S.route.errorElement || S.route.ErrorBoundary) && (w.staticContext._deepestRenderedBoundaryId = S.route.id), /* @__PURE__ */ ee.createElement(vl.Provider, {
    value: E
  }, b);
}
function sN(v, E, S, b) {
  var w;
  if (E === void 0 && (E = []), S === void 0 && (S = null), b === void 0 && (b = null), v == null) {
    var N;
    if (!S)
      return null;
    if (S.errors)
      v = S.matches;
    else if ((N = b) != null && N.v7_partialHydration && E.length === 0 && !S.initialized && S.matches.length > 0)
      v = S.matches;
    else
      return null;
  }
  let O = v, y = (w = S) == null ? void 0 : w.errors;
  if (y != null) {
    let $ = O.findIndex((P) => P.route.id && (y == null ? void 0 : y[P.route.id]) !== void 0);
    $ >= 0 || (Ht.NODE_ENV !== "production" ? yt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(y).join(",")) : yt(!1)), O = O.slice(0, Math.min(O.length, $ + 1));
  }
  let F = !1, z = -1;
  if (S && b && b.v7_partialHydration)
    for (let $ = 0; $ < O.length; $++) {
      let P = O[$];
      if ((P.route.HydrateFallback || P.route.hydrateFallbackElement) && (z = $), P.route.id) {
        let {
          loaderData: B,
          errors: he
        } = S, J = P.route.loader && B[P.route.id] === void 0 && (!he || he[P.route.id] === void 0);
        if (P.route.lazy || J) {
          F = !0, z >= 0 ? O = O.slice(0, z + 1) : O = [O[0]];
          break;
        }
      }
    }
  return O.reduceRight(($, P, B) => {
    let he, J = !1, ue = null, le = null;
    S && (he = y && P.route.id ? y[P.route.id] : void 0, ue = P.route.errorElement || lN, F && (z < 0 && B === 0 ? (Tb("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), J = !0, le = null) : z === B && (J = !0, le = P.route.hydrateFallbackElement || null)));
    let Pe = E.concat(O.slice(0, B + 1)), fe = () => {
      let me;
      return he ? me = ue : J ? me = le : P.route.Component ? me = /* @__PURE__ */ ee.createElement(P.route.Component, null) : P.route.element ? me = P.route.element : me = $, /* @__PURE__ */ ee.createElement(uN, {
        match: P,
        routeContext: {
          outlet: $,
          matches: Pe,
          isDataRoute: S != null
        },
        children: me
      });
    };
    return S && (P.route.ErrorBoundary || P.route.errorElement || B === 0) ? /* @__PURE__ */ ee.createElement(oN, {
      location: S.location,
      revalidation: S.revalidation,
      component: ue,
      error: he,
      children: fe(),
      routeContext: {
        outlet: null,
        matches: Pe,
        isDataRoute: !0
      }
    }) : fe();
  }, null);
}
var bb = /* @__PURE__ */ function(v) {
  return v.UseBlocker = "useBlocker", v.UseRevalidator = "useRevalidator", v.UseNavigateStable = "useNavigate", v;
}(bb || {}), Tv = /* @__PURE__ */ function(v) {
  return v.UseBlocker = "useBlocker", v.UseLoaderData = "useLoaderData", v.UseActionData = "useActionData", v.UseRouteError = "useRouteError", v.UseNavigation = "useNavigation", v.UseRouteLoaderData = "useRouteLoaderData", v.UseMatches = "useMatches", v.UseRevalidator = "useRevalidator", v.UseNavigateStable = "useNavigate", v.UseRouteId = "useRouteId", v;
}(Tv || {});
function f0(v) {
  return v + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function cN(v) {
  let E = ee.useContext(wv);
  return E || (Ht.NODE_ENV !== "production" ? yt(!1, f0(v)) : yt(!1)), E;
}
function fN(v) {
  let E = ee.useContext(u0);
  return E || (Ht.NODE_ENV !== "production" ? yt(!1, f0(v)) : yt(!1)), E;
}
function dN(v) {
  let E = ee.useContext(vl);
  return E || (Ht.NODE_ENV !== "production" ? yt(!1, f0(v)) : yt(!1)), E;
}
function d0(v) {
  let E = dN(v), S = E.matches[E.matches.length - 1];
  return S.route.id || (Ht.NODE_ENV !== "production" ? yt(!1, v + ' can only be used on routes that contain a unique "id"') : yt(!1)), S.route.id;
}
function pN() {
  return d0(Tv.UseRouteId);
}
function vN() {
  var v;
  let E = ee.useContext(s0), S = fN(Tv.UseRouteError), b = d0(Tv.UseRouteError);
  return E !== void 0 ? E : (v = S.errors) == null ? void 0 : v[b];
}
function hN() {
  let {
    router: v
  } = cN(bb.UseNavigateStable), E = d0(Tv.UseNavigateStable), S = ee.useRef(!1);
  return Rb(() => {
    S.current = !0;
  }), ee.useCallback(function(w, N) {
    N === void 0 && (N = {}), Ht.NODE_ENV !== "production" && zi(S.current, xb), S.current && (typeof w == "number" ? v.navigate(w) : v.navigate(w, bv({
      fromRouteId: E
    }, N)));
  }, [v, E]);
}
const sb = {};
function Tb(v, E, S) {
  !E && !sb[v] && (sb[v] = !0, Ht.NODE_ENV !== "production" && zi(!1, S));
}
const cb = {};
function mN(v, E) {
  Ht.NODE_ENV !== "production" && !cb[E] && (cb[E] = !0, console.warn(E));
}
const fb = (v, E, S) => mN(v, "⚠️ React Router Future Flag Warning: " + E + ". " + ("You can use the `" + v + "` future flag to opt-in early. ") + ("For more information, see " + S + "."));
function yN(v, E) {
  (v == null ? void 0 : v.v7_startTransition) === void 0 && fb("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (v == null ? void 0 : v.v7_relativeSplatPath) === void 0 && fb("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
}
function p0(v) {
  let {
    to: E,
    replace: S,
    state: b,
    relative: w
  } = v;
  vd() || (Ht.NODE_ENV !== "production" ? yt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : yt(!1));
  let {
    future: N,
    static: O
  } = ee.useContext(Ai);
  Ht.NODE_ENV !== "production" && zi(!O, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: y
  } = ee.useContext(vl), {
    pathname: F
  } = Ko(), z = Xo(), $ = o0(E, l0(y, N.v7_relativeSplatPath), F, w === "path"), P = JSON.stringify($);
  return ee.useEffect(() => z(JSON.parse(P), {
    replace: S,
    state: b,
    relative: w
  }), [z, P, w, S, b]), null;
}
function Ui(v) {
  Ht.NODE_ENV !== "production" ? yt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : yt(!1);
}
function gN(v) {
  let {
    basename: E = "/",
    children: S = null,
    location: b,
    navigationType: w = ts.Pop,
    navigator: N,
    static: O = !1,
    future: y
  } = v;
  vd() && (Ht.NODE_ENV !== "production" ? yt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : yt(!1));
  let F = E.replace(/^\/*/, "/"), z = ee.useMemo(() => ({
    basename: F,
    navigator: N,
    static: O,
    future: bv({
      v7_relativeSplatPath: !1
    }, y)
  }), [F, y, N, O]);
  typeof b == "string" && (b = pd(b));
  let {
    pathname: $ = "/",
    search: P = "",
    hash: B = "",
    state: he = null,
    key: J = "default"
  } = b, ue = ee.useMemo(() => {
    let le = ns($, F);
    return le == null ? null : {
      location: {
        pathname: le,
        search: P,
        hash: B,
        state: he,
        key: J
      },
      navigationType: w
    };
  }, [F, $, P, B, he, J, w]);
  return Ht.NODE_ENV !== "production" && zi(ue != null, '<Router basename="' + F + '"> is not able to match the URL ' + ('"' + $ + P + B + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), ue == null ? null : /* @__PURE__ */ ee.createElement(Ai.Provider, {
    value: z
  }, /* @__PURE__ */ ee.createElement(_v.Provider, {
    children: S,
    value: ue
  }));
}
function SN(v) {
  let {
    children: E,
    location: S
  } = v;
  return rN(r0(E), S);
}
new Promise(() => {
});
function r0(v, E) {
  E === void 0 && (E = []);
  let S = [];
  return ee.Children.forEach(v, (b, w) => {
    if (!/* @__PURE__ */ ee.isValidElement(b))
      return;
    let N = [...E, w];
    if (b.type === ee.Fragment) {
      S.push.apply(S, r0(b.props.children, N));
      return;
    }
    b.type !== Ui && (Ht.NODE_ENV !== "production" ? yt(!1, "[" + (typeof b.type == "string" ? b.type : b.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : yt(!1)), !b.props.index || !b.props.children || (Ht.NODE_ENV !== "production" ? yt(!1, "An index route cannot have child routes.") : yt(!1));
    let O = {
      id: b.props.id || N.join("-"),
      caseSensitive: b.props.caseSensitive,
      element: b.props.element,
      Component: b.props.Component,
      index: b.props.index,
      path: b.props.path,
      loader: b.props.loader,
      action: b.props.action,
      errorElement: b.props.errorElement,
      ErrorBoundary: b.props.ErrorBoundary,
      hasErrorBoundary: b.props.ErrorBoundary != null || b.props.errorElement != null,
      shouldRevalidate: b.props.shouldRevalidate,
      handle: b.props.handle,
      lazy: b.props.lazy
    };
    b.props.children && (O.children = r0(b.props.children, N)), S.push(O);
  }), S;
}
var hl = {};
function dd() {
  return dd = Object.assign ? Object.assign.bind() : function(v) {
    for (var E = 1; E < arguments.length; E++) {
      var S = arguments[E];
      for (var b in S)
        Object.prototype.hasOwnProperty.call(S, b) && (v[b] = S[b]);
    }
    return v;
  }, dd.apply(this, arguments);
}
function v0(v, E) {
  if (v == null) return {};
  var S = {}, b = Object.keys(v), w, N;
  for (N = 0; N < b.length; N++)
    w = b[N], !(E.indexOf(w) >= 0) && (S[w] = v[w]);
  return S;
}
const Ty = "get", wy = "application/x-www-form-urlencoded";
function Dy(v) {
  return v != null && typeof v.tagName == "string";
}
function EN(v) {
  return Dy(v) && v.tagName.toLowerCase() === "button";
}
function CN(v) {
  return Dy(v) && v.tagName.toLowerCase() === "form";
}
function xN(v) {
  return Dy(v) && v.tagName.toLowerCase() === "input";
}
function RN(v) {
  return !!(v.metaKey || v.altKey || v.ctrlKey || v.shiftKey);
}
function bN(v, E) {
  return v.button === 0 && // Ignore everything but left clicks
  (!E || E === "_self") && // Let browser handle "target=_blank" etc.
  !RN(v);
}
function a0(v) {
  return v === void 0 && (v = ""), new URLSearchParams(typeof v == "string" || Array.isArray(v) || v instanceof URLSearchParams ? v : Object.keys(v).reduce((E, S) => {
    let b = v[S];
    return E.concat(Array.isArray(b) ? b.map((w) => [S, w]) : [[S, b]]);
  }, []));
}
function TN(v, E) {
  let S = a0(v);
  return E && E.forEach((b, w) => {
    S.has(w) || E.getAll(w).forEach((N) => {
      S.append(w, N);
    });
  }), S;
}
let Ry = null;
function wN() {
  if (Ry === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ry = !1;
    } catch {
      Ry = !0;
    }
  return Ry;
}
const _N = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function XE(v) {
  return v != null && !_N.has(v) ? (hl.NODE_ENV !== "production" && zi(!1, '"' + v + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + wy + '"')), null) : v;
}
function kN(v, E) {
  let S, b, w, N, O;
  if (CN(v)) {
    let y = v.getAttribute("action");
    b = y ? ns(y, E) : null, S = v.getAttribute("method") || Ty, w = XE(v.getAttribute("enctype")) || wy, N = new FormData(v);
  } else if (EN(v) || xN(v) && (v.type === "submit" || v.type === "image")) {
    let y = v.form;
    if (y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let F = v.getAttribute("formaction") || y.getAttribute("action");
    if (b = F ? ns(F, E) : null, S = v.getAttribute("formmethod") || y.getAttribute("method") || Ty, w = XE(v.getAttribute("formenctype")) || XE(y.getAttribute("enctype")) || wy, N = new FormData(y, v), !wN()) {
      let {
        name: z,
        type: $,
        value: P
      } = v;
      if ($ === "image") {
        let B = z ? z + "." : "";
        N.append(B + "x", "0"), N.append(B + "y", "0");
      } else z && N.append(z, P);
    }
  } else {
    if (Dy(v))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    S = Ty, b = null, w = wy, O = v;
  }
  return N && w === "text/plain" && (O = N, N = void 0), {
    action: b,
    method: S.toLowerCase(),
    encType: w,
    formData: N,
    body: O
  };
}
const DN = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], NN = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], ON = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], jN = "6";
try {
  window.__reactRouterVersion = jN;
} catch {
}
const wb = /* @__PURE__ */ ee.createContext({
  isTransitioning: !1
});
hl.NODE_ENV !== "production" && (wb.displayName = "ViewTransition");
const LN = /* @__PURE__ */ ee.createContext(/* @__PURE__ */ new Map());
hl.NODE_ENV !== "production" && (LN.displayName = "Fetchers");
const MN = "startTransition", db = SD[MN];
function UN(v) {
  let {
    basename: E,
    children: S,
    future: b,
    window: w
  } = v, N = ee.useRef();
  N.current == null && (N.current = DD({
    window: w,
    v5Compat: !0
  }));
  let O = N.current, [y, F] = ee.useState({
    action: O.action,
    location: O.location
  }), {
    v7_startTransition: z
  } = b || {}, $ = ee.useCallback((P) => {
    z && db ? db(() => F(P)) : F(P);
  }, [F, z]);
  return ee.useLayoutEffect(() => O.listen($), [O, $]), ee.useEffect(() => yN(b), [b]), /* @__PURE__ */ ee.createElement(gN, {
    basename: E,
    children: S,
    location: y.location,
    navigationType: y.action,
    navigator: O,
    future: b
  });
}
const zN = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", AN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Mn = /* @__PURE__ */ ee.forwardRef(function(E, S) {
  let {
    onClick: b,
    relative: w,
    reloadDocument: N,
    replace: O,
    state: y,
    target: F,
    to: z,
    preventScrollReset: $,
    viewTransition: P
  } = E, B = v0(E, DN), {
    basename: he
  } = ee.useContext(Ai), J, ue = !1;
  if (typeof z == "string" && AN.test(z) && (J = z, zN))
    try {
      let me = new URL(window.location.href), ve = z.startsWith("//") ? new URL(me.protocol + z) : new URL(z), Re = ns(ve.pathname, he);
      ve.origin === me.origin && Re != null ? z = Re + ve.search + ve.hash : ue = !0;
    } catch {
      hl.NODE_ENV !== "production" && zi(!1, '<Link to="' + z + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let le = tN(z, {
    relative: w
  }), Pe = HN(z, {
    replace: O,
    state: y,
    target: F,
    preventScrollReset: $,
    relative: w,
    viewTransition: P
  });
  function fe(me) {
    b && b(me), me.defaultPrevented || Pe(me);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ ee.createElement("a", dd({}, B, {
      href: J || le,
      onClick: ue || N ? b : fe,
      ref: S,
      target: F
    }))
  );
});
hl.NODE_ENV !== "production" && (Mn.displayName = "Link");
const FN = /* @__PURE__ */ ee.forwardRef(function(E, S) {
  let {
    "aria-current": b = "page",
    caseSensitive: w = !1,
    className: N = "",
    end: O = !1,
    style: y,
    to: F,
    viewTransition: z,
    children: $
  } = E, P = v0(E, NN), B = kv(F, {
    relative: P.relative
  }), he = Ko(), J = ee.useContext(u0), {
    navigator: ue,
    basename: le
  } = ee.useContext(Ai), Pe = J != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  GN(B) && z === !0, fe = ue.encodeLocation ? ue.encodeLocation(B).pathname : B.pathname, me = he.pathname, ve = J && J.navigation && J.navigation.location ? J.navigation.location.pathname : null;
  w || (me = me.toLowerCase(), ve = ve ? ve.toLowerCase() : null, fe = fe.toLowerCase()), ve && le && (ve = ns(ve, le) || ve);
  const Re = fe !== "/" && fe.endsWith("/") ? fe.length - 1 : fe.length;
  let ge = me === fe || !O && me.startsWith(fe) && me.charAt(Re) === "/", Be = ve != null && (ve === fe || !O && ve.startsWith(fe) && ve.charAt(fe.length) === "/"), We = {
    isActive: ge,
    isPending: Be,
    isTransitioning: Pe
  }, Cn = ge ? b : void 0, Dt;
  typeof N == "function" ? Dt = N(We) : Dt = [N, ge ? "active" : null, Be ? "pending" : null, Pe ? "transitioning" : null].filter(Boolean).join(" ");
  let un = typeof y == "function" ? y(We) : y;
  return /* @__PURE__ */ ee.createElement(Mn, dd({}, P, {
    "aria-current": Cn,
    className: Dt,
    ref: S,
    style: un,
    to: F,
    viewTransition: z
  }), typeof $ == "function" ? $(We) : $);
});
hl.NODE_ENV !== "production" && (FN.displayName = "NavLink");
const PN = /* @__PURE__ */ ee.forwardRef((v, E) => {
  let {
    fetcherKey: S,
    navigate: b,
    reloadDocument: w,
    replace: N,
    state: O,
    method: y = Ty,
    action: F,
    onSubmit: z,
    relative: $,
    preventScrollReset: P,
    viewTransition: B
  } = v, he = v0(v, ON), J = WN(), ue = QN(F, {
    relative: $
  }), le = y.toLowerCase() === "get" ? "get" : "post", Pe = (fe) => {
    if (z && z(fe), fe.defaultPrevented) return;
    fe.preventDefault();
    let me = fe.nativeEvent.submitter, ve = (me == null ? void 0 : me.getAttribute("formmethod")) || y;
    J(me || fe.currentTarget, {
      fetcherKey: S,
      method: ve,
      navigate: b,
      replace: N,
      state: O,
      relative: $,
      preventScrollReset: P,
      viewTransition: B
    });
  };
  return /* @__PURE__ */ ee.createElement("form", dd({
    ref: E,
    method: le,
    action: ue,
    onSubmit: w ? z : Pe
  }, he));
});
hl.NODE_ENV !== "production" && (PN.displayName = "Form");
var _y;
(function(v) {
  v.UseScrollRestoration = "useScrollRestoration", v.UseSubmit = "useSubmit", v.UseSubmitFetcher = "useSubmitFetcher", v.UseFetcher = "useFetcher", v.useViewTransitionState = "useViewTransitionState";
})(_y || (_y = {}));
var pb;
(function(v) {
  v.UseFetcher = "useFetcher", v.UseFetchers = "useFetchers", v.UseScrollRestoration = "useScrollRestoration";
})(pb || (pb = {}));
function VN(v) {
  return v + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function _b(v) {
  let E = ee.useContext(wv);
  return E || (hl.NODE_ENV !== "production" ? yt(!1, VN(v)) : yt(!1)), E;
}
function HN(v, E) {
  let {
    target: S,
    replace: b,
    state: w,
    preventScrollReset: N,
    relative: O,
    viewTransition: y
  } = E === void 0 ? {} : E, F = Xo(), z = Ko(), $ = kv(v, {
    relative: O
  });
  return ee.useCallback((P) => {
    if (bN(P, S)) {
      P.preventDefault();
      let B = b !== void 0 ? b : Rv(z) === Rv($);
      F(v, {
        replace: B,
        state: w,
        preventScrollReset: N,
        relative: O,
        viewTransition: y
      });
    }
  }, [z, F, $, b, w, S, v, N, O, y]);
}
function BN(v) {
  hl.NODE_ENV !== "production" && zi(typeof URLSearchParams != "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
  let E = ee.useRef(a0(v)), S = ee.useRef(!1), b = Ko(), w = ee.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    TN(b.search, S.current ? null : E.current)
  ), [b.search]), N = Xo(), O = ee.useCallback((y, F) => {
    const z = a0(typeof y == "function" ? y(w) : y);
    S.current = !0, N("?" + z, F);
  }, [N, w]);
  return [w, O];
}
function IN() {
  if (typeof document == "undefined")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let $N = 0, YN = () => "__" + String(++$N) + "__";
function WN() {
  let {
    router: v
  } = _b(_y.UseSubmit), {
    basename: E
  } = ee.useContext(Ai), S = pN();
  return ee.useCallback(function(b, w) {
    w === void 0 && (w = {}), IN();
    let {
      action: N,
      method: O,
      encType: y,
      formData: F,
      body: z
    } = kN(b, E);
    if (w.navigate === !1) {
      let $ = w.fetcherKey || YN();
      v.fetch($, S, w.action || N, {
        preventScrollReset: w.preventScrollReset,
        formData: F,
        body: z,
        formMethod: w.method || O,
        formEncType: w.encType || y,
        flushSync: w.flushSync
      });
    } else
      v.navigate(w.action || N, {
        preventScrollReset: w.preventScrollReset,
        formData: F,
        body: z,
        formMethod: w.method || O,
        formEncType: w.encType || y,
        replace: w.replace,
        state: w.state,
        fromRouteId: S,
        flushSync: w.flushSync,
        viewTransition: w.viewTransition
      });
  }, [v, E, S]);
}
function QN(v, E) {
  let {
    relative: S
  } = E === void 0 ? {} : E, {
    basename: b
  } = ee.useContext(Ai), w = ee.useContext(vl);
  w || (hl.NODE_ENV !== "production" ? yt(!1, "useFormAction must be used inside a RouteContext") : yt(!1));
  let [N] = w.matches.slice(-1), O = dd({}, kv(v || ".", {
    relative: S
  })), y = Ko();
  if (v == null) {
    O.search = y.search;
    let F = new URLSearchParams(O.search), z = F.getAll("index");
    if (z.some((P) => P === "")) {
      F.delete("index"), z.filter((B) => B).forEach((B) => F.append("index", B));
      let P = F.toString();
      O.search = P ? "?" + P : "";
    }
  }
  return (!v || v === ".") && N.route.index && (O.search = O.search ? O.search.replace(/^\?/, "?index&") : "?index"), b !== "/" && (O.pathname = O.pathname === "/" ? b : qo([b, O.pathname])), Rv(O);
}
function GN(v, E) {
  E === void 0 && (E = {});
  let S = ee.useContext(wb);
  S == null && (hl.NODE_ENV !== "production" ? yt(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : yt(!1));
  let {
    basename: b
  } = _b(_y.useViewTransitionState), w = kv(v, {
    relative: E.relative
  });
  if (!S.isTransitioning)
    return !1;
  let N = ns(S.currentLocation.pathname, b) || S.currentLocation.pathname, O = ns(S.nextLocation.pathname, b) || S.nextLocation.pathname;
  return n0(w.pathname, O) != null || n0(w.pathname, N) != null;
}
const qN = "/api";
function KN(v) {
  const E = document.cookie.split("; ").find((S) => S.startsWith(`${v}=`));
  return E ? decodeURIComponent(E.split("=").slice(1).join("=")) : "";
}
async function Oa(v, E = {}) {
  const S = E.method || "GET", b = new Headers(E.headers || {}), w = {
    method: S,
    credentials: "same-origin",
    headers: b
  };
  S !== "GET" && b.set("X-CSRFToken", KN("csrftoken")), E.body instanceof FormData ? w.body = E.body : E.body && (b.set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), w.body = new URLSearchParams(E.body));
  const N = await fetch(`${qN}${v}`, w), O = await N.json().catch(() => ({
    ok: !1,
    message: "Unexpected server response."
  }));
  if (!N.ok || O.ok === !1) {
    const y = new Error(O.message || "Request failed.");
    throw y.status = N.status, y.data = O, y;
  }
  return O;
}
function Dv(v, E) {
  const [S, b] = ee.useState({
    loading: !0,
    data: null,
    error: ""
  });
  return ee.useEffect(() => {
    let w = !0;
    return b({ loading: !0, data: null, error: "" }), v().then((N) => {
      w && b({ loading: !1, data: N, error: "" });
    }).catch((N) => {
      var O;
      w && b({
        loading: !1,
        data: null,
        error: ((O = N.data) == null ? void 0 : O.message) || N.message
      });
    }), () => {
      w = !1;
    };
  }, E), S;
}
function ky(v) {
  const E = new Date(v), S = Math.round((E.getTime() - Date.now()) / 1e3), b = [
    ["year", 31536e3],
    ["month", 2592e3],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60]
  ];
  if (typeof Intl == "undefined" || typeof Intl.RelativeTimeFormat != "function") {
    for (const [N, O] of b)
      if (Math.abs(S) >= O || N === "minute") {
        const y = Math.round(Math.abs(S) / O), F = y === 1 ? N : `${N}s`;
        return S < 0 ? `${y} ${F} ago` : `in ${y} ${F}`;
      }
    return "just now";
  }
  const w = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  for (const [N, O] of b)
    if (Math.abs(S) >= O || N === "minute")
      return w.format(Math.round(S / O), N);
  return "just now";
}
function Ny(v) {
  return v ? Object.entries(v).flatMap(
    ([E, S]) => S.map((b) => `${E}: ${b}`)
  ) : [];
}
function Ec({ user: v, size: E = "md" }) {
  return /* @__PURE__ */ C.jsx(
    "img",
    {
      className: `avatar avatar--${E}`,
      src: v == null ? void 0 : v.avatarUrl,
      alt: (v == null ? void 0 : v.name) || (v == null ? void 0 : v.username) || "User avatar"
    }
  );
}
function XN() {
  return ee.useEffect(() => {
    const v = document.documentElement;
    let E = 0;
    const S = (b) => {
      const w = b.clientX / window.innerWidth * 100, N = b.clientY / window.innerHeight * 100;
      cancelAnimationFrame(E), E = requestAnimationFrame(() => {
        v.style.setProperty("--pointer-x", `${w}%`), v.style.setProperty("--pointer-y", `${N}%`);
      });
    };
    return window.addEventListener("mousemove", S), () => {
      cancelAnimationFrame(E), window.removeEventListener("mousemove", S);
    };
  }, []), /* @__PURE__ */ C.jsxs("div", { className: "backdrop", "aria-hidden": "true", children: [
    /* @__PURE__ */ C.jsx("div", { className: "backdrop__mesh" }),
    /* @__PURE__ */ C.jsx("div", { className: "backdrop__orb backdrop__orb--primary" }),
    /* @__PURE__ */ C.jsx("div", { className: "backdrop__orb backdrop__orb--secondary" }),
    /* @__PURE__ */ C.jsx("div", { className: "backdrop__orb backdrop__orb--tertiary" }),
    /* @__PURE__ */ C.jsx("div", { className: "backdrop__grid" })
  ] });
}
function by({ label: v, value: E, note: S }) {
  return /* @__PURE__ */ C.jsxs("div", { className: "stat-card", children: [
    /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: v }),
    /* @__PURE__ */ C.jsx("strong", { children: E }),
    /* @__PURE__ */ C.jsx("p", { children: S })
  ] });
}
function hd({ label: v = "Loading the experience..." }) {
  return /* @__PURE__ */ C.jsx("div", { className: "surface surface--muted", children: v });
}
function eo({ title: v = "Something went sideways.", message: E }) {
  return /* @__PURE__ */ C.jsxs("div", { className: "surface surface--danger", children: [
    /* @__PURE__ */ C.jsx("strong", { children: v }),
    /* @__PURE__ */ C.jsx("p", { children: E })
  ] });
}
function Cc({ title: v, body: E, action: S }) {
  return /* @__PURE__ */ C.jsxs("div", { className: "empty-state", children: [
    /* @__PURE__ */ C.jsx("strong", { children: v }),
    /* @__PURE__ */ C.jsx("p", { children: E }),
    S
  ] });
}
class JN extends i0.Component {
  constructor(E) {
    super(E), this.state = { hasError: !1, message: "" };
  }
  static getDerivedStateFromError(E) {
    return {
      hasError: !0,
      message: (E == null ? void 0 : E.message) || "The interface failed to load."
    };
  }
  componentDidCatch(E) {
    console.error("StudBud frontend error:", E);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ C.jsx("div", { className: "page-shell", children: /* @__PURE__ */ C.jsxs("div", { className: "surface surface--danger", children: [
      /* @__PURE__ */ C.jsx("strong", { children: "The frontend hit a rendering error." }),
      /* @__PURE__ */ C.jsx("p", { children: this.state.message }),
      /* @__PURE__ */ C.jsx("p", { children: "Refresh the page once. If it still happens, the latest patch should make the fallback visible instead of a blank screen." })
    ] }) }) : this.props.children;
  }
}
function ZN({ currentUser: v, onLogout: E, sessionLoading: S }) {
  const b = Xo(), w = Ko(), [N, O] = ee.useState("");
  ee.useEffect(() => {
    const F = new URLSearchParams(w.search);
    O(F.get("q") || "");
  }, [w.search]);
  const y = (F) => {
    F.preventDefault();
    const z = N ? `?q=${encodeURIComponent(N)}` : "";
    b(`/${z}`);
  };
  return /* @__PURE__ */ C.jsx("header", { className: "topbar", children: /* @__PURE__ */ C.jsxs("div", { className: "topbar__inner", children: [
    /* @__PURE__ */ C.jsxs(Mn, { to: "/", className: "brand", children: [
      /* @__PURE__ */ C.jsx("span", { className: "brand__mark", children: "SB" }),
      /* @__PURE__ */ C.jsxs("span", { children: [
        /* @__PURE__ */ C.jsx("strong", { children: "StudBud" }),
        /* @__PURE__ */ C.jsx("small", { children: "conversation spaces with real atmosphere" })
      ] })
    ] }),
    /* @__PURE__ */ C.jsx("form", { className: "topbar__search", onSubmit: y, children: /* @__PURE__ */ C.jsx(
      "input",
      {
        type: "search",
        value: N,
        onChange: (F) => O(F.target.value),
        placeholder: "Search rooms, topics, or threads"
      }
    ) }),
    /* @__PURE__ */ C.jsxs("nav", { className: "topbar__actions", children: [
      /* @__PURE__ */ C.jsx(Mn, { to: "/", className: "ghost-link", children: "Explore" }),
      v ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        /* @__PURE__ */ C.jsx(Mn, { to: "/create-room/", className: "ghost-link", children: "Create room" }),
        /* @__PURE__ */ C.jsxs(Mn, { to: `/profile/${v.id}/`, className: "profile-pill", children: [
          /* @__PURE__ */ C.jsx(Ec, { user: v, size: "sm" }),
          /* @__PURE__ */ C.jsx("span", { children: v.name })
        ] }),
        /* @__PURE__ */ C.jsx("button", { className: "button button--ghost", onClick: E, type: "button", children: "Log out" })
      ] }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        /* @__PURE__ */ C.jsx(Mn, { to: "/login/", className: "ghost-link", children: "Sign in" }),
        /* @__PURE__ */ C.jsx(Mn, { to: "/register/", className: "button button--accent", children: S ? "..." : "Join now" })
      ] })
    ] })
  ] }) });
}
function eO({ currentUser: v, sessionLoading: E, onLogout: S, children: b }) {
  return /* @__PURE__ */ C.jsxs("div", { className: "app-shell", children: [
    /* @__PURE__ */ C.jsx(XN, {}),
    /* @__PURE__ */ C.jsx(ZN, { currentUser: v, onLogout: S, sessionLoading: E }),
    /* @__PURE__ */ C.jsx("main", { className: "page-shell", children: b })
  ] });
}
function tO({ currentUser: v }) {
  const [E, S] = BN(), b = E.get("q") || "", { loading: w, data: N, error: O } = Dv(
    () => Oa(`/home/${b ? `?q=${encodeURIComponent(b)}` : ""}`),
    [b]
  );
  if (w)
    return /* @__PURE__ */ C.jsx(hd, { label: "Curating rooms and activity..." });
  if (O)
    return /* @__PURE__ */ C.jsx(eo, { message: O });
  const { rooms: y, topics: F, activities: z, stats: $ } = N;
  return /* @__PURE__ */ C.jsxs("div", { className: "stack stack--xl", children: [
    /* @__PURE__ */ C.jsxs("section", { className: "hero", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "hero__copy", children: [
        /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Campus energy, rebuilt" }),
        /* @__PURE__ */ C.jsx("h1", { children: "Study rooms that feel alive instead of static." }),
        /* @__PURE__ */ C.jsx("p", { children: "Browse focused communities, jump into active rooms, and build a profile that actually feels personal." }),
        /* @__PURE__ */ C.jsxs("div", { className: "hero__cta", children: [
          /* @__PURE__ */ C.jsx(Mn, { to: v ? "/create-room/" : "/register/", className: "button button--accent", children: v ? "Start a new room" : "Create your account" }),
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "button",
              className: "button button--ghost",
              onClick: () => S({ q: "python" }),
              children: "Try a sample search"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "hero__stats", children: [
        /* @__PURE__ */ C.jsx(by, { label: "Live rooms", value: $.rooms, note: "Fresh spaces for focused discussion." }),
        /* @__PURE__ */ C.jsx(by, { label: "Topics", value: $.topics, note: "Everything from algorithms to design critique." }),
        /* @__PURE__ */ C.jsx(by, { label: "Messages", value: $.messages, note: "Conversation that keeps moving." }),
        /* @__PURE__ */ C.jsx(by, { label: "Members", value: $.members, note: "People building momentum together." })
      ] })
    ] }),
    /* @__PURE__ */ C.jsxs("section", { className: "dashboard", children: [
      /* @__PURE__ */ C.jsxs("aside", { className: "surface surface--panel", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "section-heading", children: [
          /* @__PURE__ */ C.jsxs("div", { children: [
            /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Browse" }),
            /* @__PURE__ */ C.jsx("h2", { children: "Topics" })
          ] }),
          v && /* @__PURE__ */ C.jsx(Mn, { to: "/create-topic/", className: "ghost-link", children: "New topic" })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "topic-list", children: [
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "button",
              className: `topic-chip ${b ? "" : "topic-chip--active"}`,
              onClick: () => S({}),
              children: "All streams"
            }
          ),
          F.map((P) => /* @__PURE__ */ C.jsxs(
            "button",
            {
              type: "button",
              className: `topic-chip ${b === P.name ? "topic-chip--active" : ""}`,
              onClick: () => S({ q: P.name }),
              children: [
                /* @__PURE__ */ C.jsx("span", { children: P.name }),
                /* @__PURE__ */ C.jsx("small", { children: P.roomCount })
              ]
            },
            P.id
          ))
        ] })
      ] }),
      /* @__PURE__ */ C.jsxs("section", { className: "stack", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "section-heading", children: [
          /* @__PURE__ */ C.jsxs("div", { children: [
            /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Rooms" }),
            /* @__PURE__ */ C.jsx("h2", { children: b ? `Results for "${b}"` : "Latest discussion spaces" })
          ] }),
          /* @__PURE__ */ C.jsxs("p", { children: [
            y.length,
            " spaces ready to join"
          ] })
        ] }),
        y.length ? /* @__PURE__ */ C.jsx("div", { className: "room-grid", children: y.map((P) => {
          var B;
          return /* @__PURE__ */ C.jsxs(Mn, { to: `/room/${P.id}/`, className: "room-card", children: [
            /* @__PURE__ */ C.jsxs("div", { className: "room-card__meta", children: [
              /* @__PURE__ */ C.jsx("span", { className: "topic-pill", children: ((B = P.topic) == null ? void 0 : B.name) || "General" }),
              /* @__PURE__ */ C.jsx("span", { children: ky(P.updatedAt) })
            ] }),
            /* @__PURE__ */ C.jsx("h3", { children: P.name }),
            /* @__PURE__ */ C.jsx("p", { children: P.description || "A fresh room waiting for the first great thread." }),
            /* @__PURE__ */ C.jsxs("div", { className: "room-card__footer", children: [
              P.host ? /* @__PURE__ */ C.jsxs("div", { className: "inline-user", children: [
                /* @__PURE__ */ C.jsx(Ec, { user: P.host, size: "sm" }),
                /* @__PURE__ */ C.jsxs("span", { children: [
                  "@",
                  P.host.username
                ] })
              ] }) : /* @__PURE__ */ C.jsx("span", { children: "Community hosted" }),
              /* @__PURE__ */ C.jsxs("strong", { children: [
                P.messageCount,
                " posts"
              ] })
            ] })
          ] }, P.id);
        }) }) : /* @__PURE__ */ C.jsx(
          Cc,
          {
            title: "No rooms matched that search.",
            body: "Try a different topic or create a new room to start the conversation.",
            action: v ? /* @__PURE__ */ C.jsx(Mn, { to: "/create-room/", className: "button button--accent", children: "Create room" }) : null
          }
        )
      ] }),
      /* @__PURE__ */ C.jsxs("aside", { className: "surface surface--panel", children: [
        /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Activity" }),
          /* @__PURE__ */ C.jsx("h2", { children: "Recent sparks" })
        ] }) }),
        /* @__PURE__ */ C.jsx("div", { className: "activity-list", children: z.length ? z.map((P) => /* @__PURE__ */ C.jsxs(Mn, { to: `/room/${P.room.id}/`, className: "activity-card", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "inline-user", children: [
            /* @__PURE__ */ C.jsx(Ec, { user: P.user, size: "sm" }),
            /* @__PURE__ */ C.jsxs("div", { children: [
              /* @__PURE__ */ C.jsx("strong", { children: P.user.name }),
              /* @__PURE__ */ C.jsx("small", { children: ky(P.updatedAt) })
            ] })
          ] }),
          /* @__PURE__ */ C.jsx("p", { children: P.body }),
          /* @__PURE__ */ C.jsxs("span", { className: "room-link", children: [
            "in ",
            P.room.name
          ] })
        ] }, P.id)) : /* @__PURE__ */ C.jsx(Cc, { title: "No activity yet.", body: "When messages start landing, they will show up here." }) })
      ] })
    ] })
  ] });
}
function nO({ currentUser: v }) {
  var ve;
  const { pk: E } = c0(), S = Xo(), { loading: b, data: w, error: N } = Dv(() => Oa(`/rooms/${E}/`), [E]), [O, y] = ee.useState(""), [F, z] = ee.useState(!1), [$, P] = ee.useState("");
  if (b)
    return /* @__PURE__ */ C.jsx(hd, { label: "Opening the room..." });
  if (N)
    return /* @__PURE__ */ C.jsx(eo, { message: N });
  const { room: B, messages: he, participants: J } = w, ue = async () => {
    window.location.reload();
  }, le = async (Re) => {
    var ge;
    Re.preventDefault(), P(""), z(!0);
    try {
      await Oa(`/rooms/${E}/messages/`, {
        method: "POST",
        body: { body: O }
      }), y(""), await ue();
    } catch (Be) {
      P(((ge = Be.data) == null ? void 0 : ge.message) || Be.message);
    } finally {
      z(!1);
    }
  }, Pe = async () => {
    var Re;
    if (window.confirm(`Delete "${B.name}"? This cannot be undone.`))
      try {
        await Oa(`/rooms/${E}/delete/`, { method: "POST" }), S("/");
      } catch (ge) {
        P(((Re = ge.data) == null ? void 0 : Re.message) || ge.message);
      }
  }, fe = async (Re) => {
    var Be;
    const ge = window.prompt("Edit your message", Re.body);
    if (!(!ge || ge === Re.body))
      try {
        await Oa(`/messages/${Re.id}/update/`, {
          method: "POST",
          body: { body: ge }
        }), await ue();
      } catch (We) {
        P(((Be = We.data) == null ? void 0 : Be.message) || We.message);
      }
  }, me = async (Re) => {
    var ge;
    if (window.confirm("Delete this message?"))
      try {
        await Oa(`/messages/${Re.id}/delete/`, { method: "POST" }), await ue();
      } catch (Be) {
        P(((ge = Be.data) == null ? void 0 : ge.message) || Be.message);
      }
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "room-layout", children: [
    /* @__PURE__ */ C.jsxs("section", { className: "surface surface--feature stack", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: ((ve = B.topic) == null ? void 0 : ve.name) || "General room" }),
          /* @__PURE__ */ C.jsx("h1", { children: B.name })
        ] }),
        B.canEdit ? /* @__PURE__ */ C.jsxs("div", { className: "inline-actions", children: [
          /* @__PURE__ */ C.jsx(Mn, { to: `/update-room/${B.id}/`, className: "button button--ghost", children: "Edit room" }),
          /* @__PURE__ */ C.jsx("button", { type: "button", className: "button button--danger", onClick: Pe, children: "Delete" })
        ] }) : null
      ] }),
      /* @__PURE__ */ C.jsx("p", { className: "lede", children: B.description || "This room is ready for a smart, focused discussion." }),
      $ ? /* @__PURE__ */ C.jsx(eo, { title: "Action blocked", message: $ }) : null,
      /* @__PURE__ */ C.jsx("div", { className: "chat-feed", children: he.length ? he.map((Re) => /* @__PURE__ */ C.jsxs("article", { className: "message-card", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "message-card__head", children: [
          /* @__PURE__ */ C.jsxs(Mn, { to: `/profile/${Re.user.id}/`, className: "inline-user inline-user--strong", children: [
            /* @__PURE__ */ C.jsx(Ec, { user: Re.user, size: "sm" }),
            /* @__PURE__ */ C.jsxs("div", { children: [
              /* @__PURE__ */ C.jsx("strong", { children: Re.user.name }),
              /* @__PURE__ */ C.jsxs("small", { children: [
                "@",
                Re.user.username
              ] })
            ] })
          ] }),
          /* @__PURE__ */ C.jsxs("div", { className: "message-card__meta", children: [
            /* @__PURE__ */ C.jsx("span", { children: ky(Re.updatedAt) }),
            Re.canEdit ? /* @__PURE__ */ C.jsxs("div", { className: "inline-actions", children: [
              /* @__PURE__ */ C.jsx("button", { type: "button", className: "text-link", onClick: () => fe(Re), children: "Edit" }),
              /* @__PURE__ */ C.jsx("button", { type: "button", className: "text-link text-link--danger", onClick: () => me(Re), children: "Remove" })
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ C.jsx("p", { children: Re.body })
      ] }, Re.id)) : /* @__PURE__ */ C.jsx(Cc, { title: "This room is quiet.", body: "Be the first one to drop a useful thought." }) }),
      v ? /* @__PURE__ */ C.jsxs("form", { className: "stack", onSubmit: le, children: [
        /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "message-body", children: "Add to the thread" }),
        /* @__PURE__ */ C.jsx(
          "textarea",
          {
            id: "message-body",
            value: O,
            onChange: (Re) => y(Re.target.value),
            placeholder: "Share an explanation, a resource, or a question.",
            rows: "4"
          }
        ),
        /* @__PURE__ */ C.jsx("div", { className: "inline-actions", children: /* @__PURE__ */ C.jsx("button", { className: "button button--accent", disabled: F, type: "submit", children: F ? "Sending..." : "Send message" }) })
      ] }) : /* @__PURE__ */ C.jsx(
        Cc,
        {
          title: "Want to reply?",
          body: "Sign in to join the thread and keep the room moving.",
          action: /* @__PURE__ */ C.jsx(Mn, { to: "/login/", className: "button button--accent", children: "Sign in" })
        }
      )
    ] }),
    /* @__PURE__ */ C.jsx("aside", { className: "stack", children: /* @__PURE__ */ C.jsxs("section", { className: "surface surface--panel", children: [
      /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
        /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "People here" }),
        /* @__PURE__ */ C.jsxs("h2", { children: [
          J.length,
          " participants"
        ] })
      ] }) }),
      /* @__PURE__ */ C.jsx("div", { className: "participant-list", children: J.length ? J.map((Re) => /* @__PURE__ */ C.jsxs(Mn, { to: `/profile/${Re.id}/`, className: "inline-user participant-row", children: [
        /* @__PURE__ */ C.jsx(Ec, { user: Re, size: "sm" }),
        /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx("strong", { children: Re.name }),
          /* @__PURE__ */ C.jsxs("small", { children: [
            "@",
            Re.username
          ] })
        ] })
      ] }, Re.id)) : /* @__PURE__ */ C.jsx("p", { className: "muted-copy", children: "No one has joined the participant list yet." }) })
    ] }) })
  ] });
}
function rO({ currentUser: v }) {
  const { pk: E } = c0(), { loading: S, data: b, error: w } = Dv(() => Oa(`/profile/${E}/`), [E]);
  if (S)
    return /* @__PURE__ */ C.jsx(hd, { label: "Loading profile details..." });
  if (w)
    return /* @__PURE__ */ C.jsx(eo, { message: w });
  const { profile: N, rooms: O, activities: y } = b;
  return /* @__PURE__ */ C.jsxs("div", { className: "stack stack--xl", children: [
    /* @__PURE__ */ C.jsxs("section", { className: "profile-hero", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "profile-hero__main", children: [
        /* @__PURE__ */ C.jsx(Ec, { user: N, size: "xl" }),
        /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Member profile" }),
          /* @__PURE__ */ C.jsx("h1", { children: N.name }),
          /* @__PURE__ */ C.jsxs("p", { className: "muted-copy", children: [
            "@",
            N.username
          ] }),
          /* @__PURE__ */ C.jsx("p", { className: "lede", children: N.bio || "Still writing their intro. The best profiles always evolve." })
        ] })
      ] }),
      N.isCurrentUser || (v == null ? void 0 : v.id) === N.id ? /* @__PURE__ */ C.jsx(Mn, { to: "/settings/profile/", className: "button button--accent", children: "Edit profile" }) : null
    ] }),
    /* @__PURE__ */ C.jsxs("section", { className: "dashboard dashboard--profile", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "surface surface--panel stack", children: [
        /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Hosted rooms" }),
          /* @__PURE__ */ C.jsxs("h2", { children: [
            O.length,
            " spaces"
          ] })
        ] }) }),
        O.length ? /* @__PURE__ */ C.jsx("div", { className: "stack", children: O.map((F) => {
          var z;
          return /* @__PURE__ */ C.jsxs(Mn, { to: `/room/${F.id}/`, className: "mini-room", children: [
            /* @__PURE__ */ C.jsx("span", { className: "topic-pill", children: ((z = F.topic) == null ? void 0 : z.name) || "General" }),
            /* @__PURE__ */ C.jsx("strong", { children: F.name }),
            /* @__PURE__ */ C.jsx("p", { children: F.description || "No description added yet." })
          ] }, F.id);
        }) }) : /* @__PURE__ */ C.jsx(Cc, { title: "No hosted rooms yet.", body: "When this user creates a room, it will show up here." })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "surface surface--panel stack", children: [
        /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Recent activity" }),
          /* @__PURE__ */ C.jsx("h2", { children: "Latest posts" })
        ] }) }),
        y.length ? /* @__PURE__ */ C.jsx("div", { className: "activity-list", children: y.map((F) => /* @__PURE__ */ C.jsxs(Mn, { to: `/room/${F.room.id}/`, className: "activity-card", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "inline-user", children: [
            /* @__PURE__ */ C.jsx(Ec, { user: F.user, size: "sm" }),
            /* @__PURE__ */ C.jsxs("div", { children: [
              /* @__PURE__ */ C.jsx("strong", { children: F.room.name }),
              /* @__PURE__ */ C.jsx("small", { children: ky(F.updatedAt) })
            ] })
          ] }),
          /* @__PURE__ */ C.jsx("p", { children: F.body })
        ] }, F.id)) }) : /* @__PURE__ */ C.jsx(Cc, { title: "No activity yet.", body: "Fresh contributions will appear here." })
      ] })
    ] })
  ] });
}
function vb({ mode: v, setCurrentUser: E }) {
  const S = Xo(), [b, w] = ee.useState(""), [N, O] = ee.useState([]), [y, F] = ee.useState(""), [z, $] = ee.useState(!1), P = async (B) => {
    var J, ue;
    B.preventDefault(), $(!0), w(""), O([]);
    const he = new FormData(B.currentTarget);
    try {
      const Pe = await Oa(v === "login" ? "/login/" : "/register/", {
        method: "POST",
        body: he
      });
      E(Pe.currentUser), S("/");
    } catch (le) {
      w(((J = le.data) == null ? void 0 : J.message) || le.message), O(Ny((ue = le.data) == null ? void 0 : ue.errors));
    } finally {
      $(!1);
    }
  };
  return /* @__PURE__ */ C.jsxs("section", { className: "auth-grid", children: [
    /* @__PURE__ */ C.jsxs("div", { className: "surface surface--feature stack", children: [
      /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "StudBud access" }),
      /* @__PURE__ */ C.jsx("h1", { children: v === "login" ? "Return to the rooms." : "Build a profile with presence." }),
      /* @__PURE__ */ C.jsx("p", { className: "lede", children: v === "login" ? "Pick up your conversations, keep your rooms moving, and stay visible." : "Add a real profile picture, shape your intro, and make your account feel like it belongs here." })
    ] }),
    /* @__PURE__ */ C.jsxs("div", { className: "surface surface--panel stack", children: [
      /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
        /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: v === "login" ? "Sign in" : "Register" }),
        /* @__PURE__ */ C.jsx("h2", { children: v === "login" ? "Welcome back" : "Create your account" })
      ] }) }),
      b ? /* @__PURE__ */ C.jsx(eo, { title: "We couldn't submit that form.", message: b }) : null,
      N.length ? /* @__PURE__ */ C.jsxs("div", { className: "surface surface--muted", children: [
        /* @__PURE__ */ C.jsx("strong", { children: "Fix these fields:" }),
        /* @__PURE__ */ C.jsx("ul", { className: "plain-list", children: N.map((B) => /* @__PURE__ */ C.jsx("li", { children: B }, B)) })
      ] }) : null,
      /* @__PURE__ */ C.jsxs("form", { className: "stack", onSubmit: P, children: [
        v === "register" ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ C.jsx("input", { id: "name", name: "name", type: "text", placeholder: "How should people know you?" }),
          /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "avatar", children: "Profile picture" }),
          /* @__PURE__ */ C.jsxs("div", { className: "upload-row", children: [
            y ? /* @__PURE__ */ C.jsx("img", { className: "avatar avatar--lg", src: y, alt: "Avatar preview" }) : /* @__PURE__ */ C.jsx("div", { className: "avatar avatar--lg avatar--placeholder", children: "+" }),
            /* @__PURE__ */ C.jsx(
              "input",
              {
                id: "avatar",
                name: "avatar",
                type: "file",
                accept: "image/*",
                onChange: (B) => {
                  var J;
                  const he = (J = B.target.files) == null ? void 0 : J[0];
                  F(he ? URL.createObjectURL(he) : "");
                }
              }
            )
          ] }),
          /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ C.jsx("input", { id: "email", name: "email", type: "email", required: !0, placeholder: "name@example.com" }),
          /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "bio", children: "Bio" }),
          /* @__PURE__ */ C.jsx("textarea", { id: "bio", name: "bio", rows: "3", placeholder: "What are you studying or building right now?" })
        ] }) : null,
        /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "username", children: "Username" }),
        /* @__PURE__ */ C.jsx("input", { id: "username", name: "username", type: "text", required: !0, placeholder: "studybuddy" }),
        /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ C.jsx("input", { id: "password", name: v === "login" ? "password" : "password1", type: "password", required: !0, placeholder: "Enter your password" }),
        v === "register" ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "password2", children: "Confirm password" }),
          /* @__PURE__ */ C.jsx("input", { id: "password2", name: "password2", type: "password", required: !0, placeholder: "Confirm your password" })
        ] }) : null,
        /* @__PURE__ */ C.jsx("button", { className: "button button--accent", disabled: z, type: "submit", children: z ? "Submitting..." : v === "login" ? "Sign in" : "Create account" })
      ] }),
      /* @__PURE__ */ C.jsx("p", { className: "muted-copy", children: v === "login" ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        "Need an account? ",
        /* @__PURE__ */ C.jsx(Mn, { to: "/register/", className: "text-link", children: "Register here." })
      ] }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        "Already signed up? ",
        /* @__PURE__ */ C.jsx(Mn, { to: "/login/", className: "text-link", children: "Sign in instead." })
      ] }) })
    ] })
  ] });
}
function aO({ currentUser: v, setCurrentUser: E }) {
  const S = Xo(), { loading: b, data: w, error: N } = Dv(() => Oa("/profile/edit/"), []), [O, y] = ee.useState(""), [F, z] = ee.useState([]), [$, P] = ee.useState(!1), [B, he] = ee.useState("");
  if (!v)
    return /* @__PURE__ */ C.jsx(p0, { to: "/login/", replace: !0 });
  if (b)
    return /* @__PURE__ */ C.jsx(hd, { label: "Preparing your profile editor..." });
  if (N)
    return /* @__PURE__ */ C.jsx(eo, { message: N });
  const J = w.profile, ue = async (le) => {
    var fe, me;
    le.preventDefault(), P(!0), y(""), z([]);
    const Pe = new FormData(le.currentTarget);
    try {
      const ve = await Oa(`/profile/${J.id}/update/`, {
        method: "POST",
        body: Pe
      });
      E(ve.profile), S(`/profile/${J.id}/`);
    } catch (ve) {
      y(((fe = ve.data) == null ? void 0 : fe.message) || ve.message), z(Ny((me = ve.data) == null ? void 0 : me.errors));
    } finally {
      P(!1);
    }
  };
  return /* @__PURE__ */ C.jsxs("section", { className: "surface surface--panel stack stack--xl", children: [
    /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
      /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Profile settings" }),
      /* @__PURE__ */ C.jsx("h1", { children: "Refresh your presence" })
    ] }) }),
    O ? /* @__PURE__ */ C.jsx(eo, { title: "Profile update failed", message: O }) : null,
    F.length ? /* @__PURE__ */ C.jsxs("div", { className: "surface surface--muted", children: [
      /* @__PURE__ */ C.jsx("strong", { children: "Please review:" }),
      /* @__PURE__ */ C.jsx("ul", { className: "plain-list", children: F.map((le) => /* @__PURE__ */ C.jsx("li", { children: le }, le)) })
    ] }) : null,
    /* @__PURE__ */ C.jsxs("form", { className: "settings-grid", onSubmit: ue, children: [
      /* @__PURE__ */ C.jsxs("div", { className: "surface surface--muted stack", children: [
        /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "Avatar" }),
        /* @__PURE__ */ C.jsx(
          "img",
          {
            className: "avatar avatar--xl",
            src: B || J.avatarUrl,
            alt: J.name
          }
        ),
        /* @__PURE__ */ C.jsx(
          "input",
          {
            name: "avatar",
            type: "file",
            accept: "image/*",
            onChange: (le) => {
              var fe;
              const Pe = (fe = le.target.files) == null ? void 0 : fe[0];
              he(Pe ? URL.createObjectURL(Pe) : "");
            }
          }
        )
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "stack", children: [
        /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "settings-name", children: "Name" }),
        /* @__PURE__ */ C.jsx("input", { id: "settings-name", name: "name", type: "text", defaultValue: J.name }),
        /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "settings-username", children: "Username" }),
        /* @__PURE__ */ C.jsx("input", { id: "settings-username", name: "username", type: "text", defaultValue: J.username, required: !0 }),
        /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "settings-email", children: "Email" }),
        /* @__PURE__ */ C.jsx("input", { id: "settings-email", name: "email", type: "email", defaultValue: J.email, required: !0 }),
        /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "settings-bio", children: "Bio" }),
        /* @__PURE__ */ C.jsx("textarea", { id: "settings-bio", name: "bio", rows: "5", defaultValue: J.bio }),
        /* @__PURE__ */ C.jsxs("div", { className: "inline-actions", children: [
          /* @__PURE__ */ C.jsx("button", { className: "button button--accent", disabled: $, type: "submit", children: $ ? "Saving..." : "Save profile" }),
          /* @__PURE__ */ C.jsx("button", { className: "button button--ghost", type: "button", onClick: () => S(-1), children: "Cancel" })
        ] })
      ] })
    ] })
  ] });
}
function hb({ currentUser: v, mode: E }) {
  var ue, le, Pe, fe;
  const { pk: S } = c0(), b = Xo(), w = E === "create" ? "/rooms/form/" : `/rooms/${S}/form/`, { loading: N, data: O, error: y } = Dv(() => Oa(w), [w]), [F, z] = ee.useState(""), [$, P] = ee.useState([]), [B, he] = ee.useState(!1);
  if (!v)
    return /* @__PURE__ */ C.jsx(p0, { to: "/login/", replace: !0 });
  if (N)
    return /* @__PURE__ */ C.jsx(hd, { label: "Loading room tools..." });
  if (y)
    return /* @__PURE__ */ C.jsx(eo, { message: y });
  const J = async (me) => {
    var Re, ge;
    me.preventDefault(), he(!0), z(""), P([]);
    const ve = new FormData(me.currentTarget);
    try {
      const Be = await Oa(
        E === "create" ? "/rooms/" : `/rooms/${S}/update/`,
        {
          method: "POST",
          body: ve
        }
      );
      b(`/room/${Be.room.id}/`);
    } catch (Be) {
      z(((Re = Be.data) == null ? void 0 : Re.message) || Be.message), P(Ny((ge = Be.data) == null ? void 0 : ge.errors));
    } finally {
      he(!1);
    }
  };
  return /* @__PURE__ */ C.jsxs("section", { className: "surface surface--panel stack stack--xl", children: [
    /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
      /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: E === "create" ? "Create room" : "Update room" }),
      /* @__PURE__ */ C.jsx("h1", { children: E === "create" ? "Launch a new study space" : "Refine your room" })
    ] }) }),
    F ? /* @__PURE__ */ C.jsx(eo, { title: "Room save failed", message: F }) : null,
    $.length ? /* @__PURE__ */ C.jsx("div", { className: "surface surface--muted", children: /* @__PURE__ */ C.jsx("ul", { className: "plain-list", children: $.map((me) => /* @__PURE__ */ C.jsx("li", { children: me }, me)) }) }) : null,
    /* @__PURE__ */ C.jsxs("form", { className: "stack", onSubmit: J, children: [
      /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "room-topic", children: "Topic" }),
      /* @__PURE__ */ C.jsxs("select", { id: "room-topic", name: "topic", defaultValue: ((le = (ue = O.room) == null ? void 0 : ue.topic) == null ? void 0 : le.id) || "", required: !0, children: [
        /* @__PURE__ */ C.jsx("option", { value: "", disabled: !0, children: "Choose a topic" }),
        O.topics.map((me) => /* @__PURE__ */ C.jsx("option", { value: me.id, children: me.name }, me.id))
      ] }),
      /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "room-name", children: "Room name" }),
      /* @__PURE__ */ C.jsx("input", { id: "room-name", name: "name", type: "text", defaultValue: ((Pe = O.room) == null ? void 0 : Pe.name) || "", required: !0 }),
      /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "room-description", children: "Description" }),
      /* @__PURE__ */ C.jsx("textarea", { id: "room-description", name: "description", rows: "6", defaultValue: ((fe = O.room) == null ? void 0 : fe.description) || "" }),
      /* @__PURE__ */ C.jsxs("div", { className: "inline-actions", children: [
        /* @__PURE__ */ C.jsx("button", { className: "button button--accent", disabled: B, type: "submit", children: B ? "Saving..." : E === "create" ? "Create room" : "Update room" }),
        /* @__PURE__ */ C.jsx("button", { className: "button button--ghost", type: "button", onClick: () => b(-1), children: "Cancel" })
      ] })
    ] })
  ] });
}
function iO({ currentUser: v }) {
  const E = Xo(), [S, b] = ee.useState(""), [w, N] = ee.useState([]), [O, y] = ee.useState(!1);
  if (!v)
    return /* @__PURE__ */ C.jsx(p0, { to: "/login/", replace: !0 });
  const F = async (z) => {
    var $, P;
    z.preventDefault(), y(!0), b(""), N([]);
    try {
      const B = await Oa("/topics/", {
        method: "POST",
        body: Object.fromEntries(new FormData(z.currentTarget))
      });
      E(`/?q=${encodeURIComponent(B.topic.name)}`);
    } catch (B) {
      b((($ = B.data) == null ? void 0 : $.message) || B.message), N(Ny((P = B.data) == null ? void 0 : P.errors));
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ C.jsxs("section", { className: "surface surface--panel stack", children: [
    /* @__PURE__ */ C.jsx("div", { className: "section-heading", children: /* @__PURE__ */ C.jsxs("div", { children: [
      /* @__PURE__ */ C.jsx("span", { className: "eyebrow", children: "New topic" }),
      /* @__PURE__ */ C.jsx("h1", { children: "Create a fresh category" })
    ] }) }),
    S ? /* @__PURE__ */ C.jsx(eo, { title: "Topic creation failed", message: S }) : null,
    w.length ? /* @__PURE__ */ C.jsx("div", { className: "surface surface--muted", children: /* @__PURE__ */ C.jsx("ul", { className: "plain-list", children: w.map((z) => /* @__PURE__ */ C.jsx("li", { children: z }, z)) }) }) : null,
    /* @__PURE__ */ C.jsxs("form", { className: "stack", onSubmit: F, children: [
      /* @__PURE__ */ C.jsx("label", { className: "form-label", htmlFor: "topic-name", children: "Topic name" }),
      /* @__PURE__ */ C.jsx("input", { id: "topic-name", name: "name", type: "text", placeholder: "Machine Learning, Design Crit...", required: !0 }),
      /* @__PURE__ */ C.jsx("div", { className: "inline-actions", children: /* @__PURE__ */ C.jsx("button", { className: "button button--accent", disabled: O, type: "submit", children: O ? "Creating..." : "Create topic" }) })
    ] })
  ] });
}
function lO({ onLogout: v }) {
  return ee.useEffect(() => {
    v();
  }, [v]), /* @__PURE__ */ C.jsx(hd, { label: "Signing you out..." });
}
function oO() {
  return /* @__PURE__ */ C.jsx(
    Cc,
    {
      title: "This page drifted off the map.",
      body: "Try heading back home and picking up the thread from there.",
      action: /* @__PURE__ */ C.jsx(Mn, { to: "/", className: "button button--accent", children: "Back home" })
    }
  );
}
function uO({ currentUser: v, sessionLoading: E, setCurrentUser: S, onLogout: b }) {
  return /* @__PURE__ */ C.jsx(eO, { currentUser: v, sessionLoading: E, onLogout: b, children: /* @__PURE__ */ C.jsxs(SN, { children: [
    /* @__PURE__ */ C.jsx(Ui, { path: "/", element: /* @__PURE__ */ C.jsx(tO, { currentUser: v }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/login/", element: /* @__PURE__ */ C.jsx(vb, { mode: "login", setCurrentUser: S }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/register/", element: /* @__PURE__ */ C.jsx(vb, { mode: "register", setCurrentUser: S }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/logout/", element: /* @__PURE__ */ C.jsx(lO, { onLogout: b }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/room/:pk/", element: /* @__PURE__ */ C.jsx(nO, { currentUser: v }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/profile/:pk/", element: /* @__PURE__ */ C.jsx(rO, { currentUser: v }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/settings/profile/", element: /* @__PURE__ */ C.jsx(aO, { currentUser: v, setCurrentUser: S }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/create-room/", element: /* @__PURE__ */ C.jsx(hb, { currentUser: v, mode: "create" }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/update-room/:pk/", element: /* @__PURE__ */ C.jsx(hb, { currentUser: v, mode: "update" }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "/create-topic/", element: /* @__PURE__ */ C.jsx(iO, { currentUser: v }) }),
    /* @__PURE__ */ C.jsx(Ui, { path: "*", element: /* @__PURE__ */ C.jsx(oO, {}) })
  ] }) });
}
function sO() {
  const [v, E] = ee.useState(!0), [S, b] = ee.useState(null), w = async () => {
    E(!0);
    try {
      const O = await Oa("/bootstrap/");
      b(O.currentUser);
    } catch {
      b(null);
    } finally {
      E(!1);
    }
  };
  ee.useEffect(() => {
    w();
  }, []);
  const N = async () => {
    try {
      await Oa("/logout/", { method: "POST" });
    } finally {
      b(null), window.location.href = "/";
    }
  };
  return /* @__PURE__ */ C.jsx(JN, { children: /* @__PURE__ */ C.jsx(UN, { children: /* @__PURE__ */ C.jsx(
    uO,
    {
      currentUser: S,
      sessionLoading: v,
      setCurrentUser: b,
      onLogout: N
    }
  ) }) });
}
Cv.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ C.jsx(i0.StrictMode, { children: /* @__PURE__ */ C.jsx(sO, {}) })
);
