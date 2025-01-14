(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAdvancedCalculator"] = factory();
	else
		root["VueAdvancedCalculator"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_translations_translator__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = ({
	props: {
		locale: { type: String, required: true },
		id: { type: String, required: true }
	},
	data: () => ({
		current: '0',
		finished: false,
		operation: null
	}),
	methods: {
		/**
   * Effectue des traductions dans la langue choisie
   * 
   * @param {String} key 
   * @return {String}
   */
		__vac_translate(key) {
			return Object(__WEBPACK_IMPORTED_MODULE_0__utils_translations_translator__["a" /* default */])(key, this.locale);
		},
		/**
   * Verifie qu'un element est un nombre
   * 
   * @param {any} x
   * @return {Boolean}
   */
		isNumber(x) {
			return !isNaN(parseFloat(x)) && isFinite(x);
		},
		/**
   * Formate un nombre pour etre plus facile à lire
   * 
   * @param {Number} x 
   * @param {Integer} precision 
   * @example 12345.67 ==> 12 345.67
   */
		formatNumber(x, precision = 5) {
			const parts = x.toString().split('.');
			const result = [];
			result.push(parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "));
			if (parts[1]) {
				result.push(parts[1].substring(0, precision));
			}
			return result.join('.');
		},

		addElement(element) {
			if (this.current == '0' && element != '.') {
				this.current = '';
			}
			if (['-Infinity', 'NaN', 'Infinity'].includes(this.current.toString())) {
				this.operation = null;
				this.current = '';
			}
			if (this.operation != null && this.operation != '' && this.isNumber(this.current)) {
				this.current = '';
				this.operation = null;
			}
			this.finished = false;
			this.current += '' + element;
		},

		clear(all = false) {
			if (all) {
				this.operation = null;
			}
			this.current = '0';
			this.finished = false;
		},
		backspace() {
			if (this.isNumber(this.current) || typeof this.current != 'string') {
				// this.clear()
				// return
			}
			this.current = this.current.substring(0, this.current.length - 1);
			if (this.current == '') {
				this.current = '0';
			}
			this.finished = false;
		}

	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Screen_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f99a6e8c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Screen_vue__ = __webpack_require__(33);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Screen_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f99a6e8c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Screen_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calculators_DateCalculation_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calculators_Scientific_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calculators_Standard_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_converters_Area_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_converters_Data_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_converters_Hour_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_converters_Length_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_converters_Temperature_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_converters_Energy_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_converters_Volume_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_converters_WeightAndMass_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_converters_Angle_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_converters_Pressure_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_converters_Power_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mixins_vac__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

















/* harmony default export */ __webpack_exports__["a"] = ({
	name: "VueAdvancedCalculator",
	components: {
		Standard: __WEBPACK_IMPORTED_MODULE_2__components_calculators_Standard_vue__["a" /* default */],
		Scientific: __WEBPACK_IMPORTED_MODULE_1__components_calculators_Scientific_vue__["a" /* default */],
		DateCalculation: __WEBPACK_IMPORTED_MODULE_0__components_calculators_DateCalculation_vue__["a" /* default */],
		DataConverter: __WEBPACK_IMPORTED_MODULE_4__components_converters_Data_vue__["a" /* default */],
		Hour: __WEBPACK_IMPORTED_MODULE_5__components_converters_Hour_vue__["a" /* default */],
		WeightAndMass: __WEBPACK_IMPORTED_MODULE_10__components_converters_WeightAndMass_vue__["a" /* default */],
		AreaConverter: __WEBPACK_IMPORTED_MODULE_3__components_converters_Area_vue__["a" /* default */],
		Length: __WEBPACK_IMPORTED_MODULE_6__components_converters_Length_vue__["a" /* default */],
		Volume: __WEBPACK_IMPORTED_MODULE_9__components_converters_Volume_vue__["a" /* default */],
		Temperature: __WEBPACK_IMPORTED_MODULE_7__components_converters_Temperature_vue__["a" /* default */],
		Energy: __WEBPACK_IMPORTED_MODULE_8__components_converters_Energy_vue__["a" /* default */],
		Angle: __WEBPACK_IMPORTED_MODULE_11__components_converters_Angle_vue__["a" /* default */],
		Pressure: __WEBPACK_IMPORTED_MODULE_12__components_converters_Pressure_vue__["a" /* default */],
		Power: __WEBPACK_IMPORTED_MODULE_13__components_converters_Power_vue__["a" /* default */]
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_14__mixins_vac__["a" /* default */]],
	props: {
		id: { type: String, default: 'vac-' + new Date().getTime() },
		title: { type: String, default: 'Vue Advanced Calculator' },
		description: { type: String, default: 'An advanced scientific calculator for Vue.js' },
		defaultMode: { type: String, default: 'standard' },
		locale: { type: String, default: 'fr' }
	},
	data: () => ({
		open_sidebar: false,
		mode: ''
	}),

	mounted() {
		this.mode = this.defaultMode;
	},

	methods: {
		/**
   * Change le type de calculatrice
   * 
   * @param {String} mode
   */
		changeMode(mode) {
			this.mode = mode;
			this.open_sidebar = false;
		}
	}
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_vac__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'DateCalculation',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_vac__["a" /* default */]],
	data: () => ({
		type: 'difference',
		from: currentDate(),
		to: currentDate(),
		operation: {
			type: 'add',
			years: 0,
			months: 0,
			days: 0
		}
	}),
	computed: {
		/**
   * Difference en heure
   */
		difference_dates() {
			const date1 = new Date(this.from).getTime();
			const date2 = new Date(this.to).getTime();

			if (date1 > date2) {
				return date1 - date2;
			}
			return date2 - date1;
		},
		/**
   * Difference en jours
   */
		difference_days() {
			return this.difference_dates / (1000 * 3600 * 24);
		},
		/**
   * Difference global
   */
		difference() {
			let diff = this.difference_days;

			let result = [];

			let diffYear = parseInt(diff / 365);
			diff = diff % 365;
			if (diffYear > 0) {
				let res = `${diffYear} `;
				res += diffYear > 1 ? this.__vac_translate('years') : this.__vac_translate('year');
				result.push(res);
			}

			let diffMonth = parseInt(diff / 30);
			diff = diff % 30;
			if (diffMonth > 0) {
				let res = `${diffMonth} `;
				res += diffMonth > 1 ? this.__vac_translate('months') : this.__vac_translate('month');
				result.push(res);
			}

			let diffWeek = parseInt(diff / 7);
			diff = diff % 7;
			if (diffWeek > 0) {
				let res = `${diffWeek} `;
				res += diffWeek > 1 ? this.__vac_translate('weeks') : this.__vac_translate('week');
				result.push(res);
			}

			if (diff > 0) {
				let res = `${diff} `;
				res += diff > 1 ? this.__vac_translate('days') : this.__vac_translate('day');
				result.push(res);
			}

			return result.join('; ').toLowerCase();
		},
		displayed_difference() {
			if (this.difference_days == 0) {
				return this.__vac_translate('identics_dates');
			}
			if (this.difference_days == 1) {
				return `1 ${this.__vac_translate('day').toLowerCase()}`;
			}
			return `${this.difference_days} ${this.__vac_translate('days').toLowerCase()}`;
		},

		/**
   * Resultat de la date après une option d'ajout ou de soustraction
   */
		date_operation() {
			let current = new Date(this.from);

			const days = parseInt(this.operation.days);
			const months = parseInt(this.operation.months);
			const years = parseInt(this.operation.years);

			if (this.operation.type == 'add') {
				current.setDate(current.getDate() + days);
				current.setMonth(current.getMonth() + months);
				current.setFullYear(current.getFullYear() + years);
			}
			if (this.operation.type == 'substract') {
				current.setDate(current.getDate() - days);
				current.setFullYear(current.getFullYear() - years);
				current.setMonth(current.getMonth() - months);
			}

			return current;
		},
		date_result() {
			return this.date_operation.toLocaleDateString();
		},
		displayed_date_result() {
			return this.date_operation.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
		}
	}
});

const currentDate = () => {
	const today = new Date();

	let month = today.getMonth() + 1;
	if (month < 10) {
		month = `0${month}`;
	}

	let day = today.getDate();
	if (day < 10) {
		day = `0${day}`;
	}

	return `${today.getFullYear()}-${month}-${day}`;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_calculator__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'ScientificCalculator',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_calculator__["a" /* default */]]
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vac__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__vac__["a" /* default */]],
	props: {
		locale: { type: String, required: true },
		precision: { type: Number, default: 15 }
	},
	data: () => ({
		operators: ['/', '*', '-', '+'],
		is_deg: false,
		is_snd: false
	}),
	computed: {
		current_last() {
			return this.current[this.current.length - 1];
		},
		result() {
			if (!this.finished || !this.isNumber(this.current)) {
				return this.current;
			}
			return this.formatNumber(this.current, this.precision);
		}
	},
	mounted() {
		this.keyboardPatch();
	},
	methods: {
		/**
   * Stimulation de l'utilisation du clavier
   */
		keyboardPatch() {
			document.querySelectorAll('.vac-container[tabindex="-1"]').forEach(el => {
				el.addEventListener('keydown', e => {
					const key = e.key;
					if (this.isNumber(key) || ['(', ')', '.', '^'].includes(key)) {
						this.addElement(key);
					}
					if (this.operators.includes(key)) {
						this.addOperator(key);
					}
					if (key == 'Backspace') {
						this.backspace();
					}
					if (key == 'Enter') {
						this.equals();
					}
					if (key == '²') {
						this.sqr();
					}
					if (key == '%') {
						this.percent();
					}
					if (key.toLowerCase() == 'c') {
						this.clear(true);
					}
				});
			});
		},

		addOperator(operator) {
			if (['-Infinity', 'NaN', 'Infinity'].includes(this.current.toString())) {
				this.operation = null;
				this.current = '';
			}
			if (this.operators.includes(operator)) {
				if (this.operators.includes(this.current_last)) {
					this.backspace();
				}
				this.current += operator;
			}
			this.finished = false;
		},

		plusMinus() {
			this.current = '' + this.current;
			if (this.current != '0' && this.current.charAt(0) === "-") {
				this.current = this.current.slice(1);
			} else {
				this.current = "-" + this.current;
			}
			this.finished = false;
		},

		equals() {
			this.operation = `${this.current} =`;
			if (this.current.toString().indexOf("^") > -1) {
				var base = this.current.slice(0, this.current.indexOf("^"));
				var exponent = this.current.slice(this.current.indexOf("^") + 1);
				this.current = eval("Math.pow(" + base + "," + exponent + ")");
			} else if (this.current.toString().indexOf('MOD') > -1) {
				const parts = this.current.split('MOD');
				if (parts.length != 2) {
					this.current = NaN;
				} else {
					this.current = parts[0] % parts[1];
				}
			} else {
				this.current = eval(this.current);
			}
			this.finished = true;
		},

		sqr() {
			if (this.isNumber(this.current)) {
				this.operation = `sqr(${this.current})`;
				this.current *= this.current;
				this.finished = true;
			}
		},
		sqrt() {
			if (this.isNumber(this.current)) {
				this.operation = `√(${this.current})`;
				this.current = Math.sqrt(this.current);
				this.finished = true;
			}
		},
		percent() {
			if (this.isNumber(this.current)) {
				this.operation = `${this.current}%`;
				this.current = this.current / 100;
				this.finished = true;
			}
		},
		inverse() {
			if (this.isNumber(this.current)) {
				this.operation = `1/(${this.current})`;
				this.current = 1 / this.current;
				this.finished = true;
			}
		},

		factorial() {
			if (this.isNumber(this.current)) {
				this.operation = `fact(${this.current})`;
				if (this.current == 0) {
					this.current = "1";
				} else if (this.current < 0) {
					this.current = NaN;
				} else {
					let number = 1;
					for (var i = this.current; i > 0; i--) {
						number *= i;
					}
					this.current = number;
				}
				this.finished = true;
			}
		},
		abs() {
			if (this.isNumber(this.current)) {
				this.operation = `abs(${this.current})`;
				this.current = Math.abs(this.current);
				this.finished = true;
			}
		},
		pi() {
			this.operation = 'pi';
			this.current = Math.PI;
			this.finished = true;
		},

		sin() {
			if (this.isNumber(this.current)) {
				this.operation = `sin${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current;
				this.current = this.is_snd ? Math.sinh(current) : Math.sin(current);
				this.finished = true;
			}
		},
		cos() {
			if (this.isNumber(this.current)) {
				this.operation = `cos${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current;
				this.current = this.is_snd ? Math.cosh(current) : Math.cos(current);
				this.finished = true;
			}
		},
		tan() {
			if (this.isNumber(this.current)) {
				this.operation = `tan${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current;
				this.current = this.is_snd ? Math.tanh(current) : Math.tan(current);
				this.finished = true;
			}
		},
		toRadians(x) {
			return x * (Math.PI / 180);
		},
		toDegrees(x) {
			return x / (Math.PI / 180);
		},

		log() {
			if (this.isNumber(this.current)) {
				this.operation = `log(${this.current})`;
				this.current = Math.log10(this.current);
				this.finished = true;
			}
		},
		ln() {
			if (this.isNumber(this.current)) {
				this.operation = `ln(${this.current})`;
				this.current = Math.log(this.current);
				this.finished = true;
			}
		},
		exp() {
			if (this.isNumber(this.current)) {
				this.current = Math.exp(this.current);
				this.finished = true;
			}
		},
		power10() {
			if (this.isNumber(this.current)) {
				const operation = `10^(${this.current})`;
				this.current = `10^${this.current}`;
				this.equals();
				this.operation = operation;
			}
		}
	}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_calculator__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'StandardCalculator',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_calculator__["a" /* default */]]
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Area',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'mlc', text: this.__vac_translate('square_millimeters') }, { value: 'cc', text: this.__vac_translate('square_centimeters') }, { value: 'mc', text: this.__vac_translate('square_meters') }, { value: 'h', text: this.__vac_translate('hectares') }, { value: 'kmc', text: this.__vac_translate('square_kilometers') }, { value: 'poc', text: this.__vac_translate('square_inch') }, { value: 'pic', text: this.__vac_translate('square_foot') }, { value: 'yc', text: this.__vac_translate('square_yards') }, { value: 'a', text: 'Acres' }, { value: 'mic', text: this.__vac_translate('square_miles') }],
			equivalence: {
				mlc: 1000000,
				cc: 10000,
				mc: 1,
				h: 0.0001,
				kmc: 0.000001,
				poc: 1550.003,
				pic: 10.76391,
				yc: 1.19599,
				a: 0.000247,
				mic: 0.000000386102159
			}
		};
	}
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_converter__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'ScreenConverver',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_converter__["a" /* default */]],
	props: {
		units: { type: Array, required: true },
		equivalence: { type: Object, required: true }
	},
	methods: {
		toggleUnits() {
			const tmp = this.final_unit;
			this.final_unit = this.initial_unit;
			this.initial_unit = tmp;
		}
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Data',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data: () => ({
		units: [{ value: 'b', text: 'Bits' }, { value: 'o', text: 'Octet(s)' }, { value: 'kb', text: 'Kilobit(s)' }, { value: 'kbb', text: 'Kibibit(s)' }, { value: 'ko', text: 'Kilooctet(s)' }, { value: 'kbo', text: 'Kibioctet(s)' }, { value: 'mb', text: 'Mégabit(s)' }, { value: 'mbb', text: 'Mébibit(s)' }, { value: 'mo', text: 'Mégaoctet(s)' }, { value: 'mbo', text: 'Mébioctet(s)' }, { value: 'gb', text: 'Gigabit(s)' }, { value: 'gbb', text: 'Gibibit(s)' }, { value: 'go', text: 'Gigaoctet(s)' }, { value: 'gbo', text: 'Gibioctet(s)' }, { value: 'tb', text: 'Térabit(s)' }, { value: 'tbb', text: 'Tébibit(s)' }, { value: 'to', text: 'Téraoctet(s)' }, { value: 'tbo', text: 'Tébioctet(s)' }, { value: 'pb', text: 'Pétabit(s)' }, { value: 'pbb', text: 'Pébibit(s)' }, { value: 'po', text: 'Pétaoctet(s)' }, { value: 'pbo', text: 'Pébioctet(s)' }, { value: 'eb', text: 'Exabit(s)' }, { value: 'ebb', text: 'Exbibit(s)' }, { value: 'eo', text: 'Exaoctet(s)' }, { value: 'ebo', text: 'Exbioctet(s)' }, { value: 'zb', text: 'Zettabit(s)' }, { value: 'zbb', text: 'Zébibit(s)' }, { value: 'zo', text: 'Zettaoctet(s)' }, { value: 'zbo', text: 'Zébioctet(s)' }, { value: 'yb', text: 'Yocbit(s)' }, { value: 'ybb', text: 'Yobibit(s)' }, { value: 'ybo', text: 'Yottabytes' }, { value: 'yo', text: 'Yobioctet(s)' }],
		equivalence: {
			b: 8,
			o: 1,
			kb: 0.008,
			kbb: 0.007812,
			ko: 0.001,
			kbo: 0.000977,
			mb: 0.000008,
			mbb: 0.000008,
			mo: 0.000001,
			mbo: 0.000000953674316,
			gb: 0.000000008,
			gbb: 0.000000007450581,
			go: 0.000000001,
			gbo: 0.000000000931323,
			tb: 0.000000000008,
			tbb: 0.000000000007276,
			to: 0.000000000001,
			tbo: 0.000000000000909,
			pb: 8.000000e-15,
			pbb: 7.105427e-15,
			po: 1.000000e-15,
			pbo: 8.881784e-16,
			eb: 8.000000e-18,
			ebb: 6.938894e-18,
			eo: 1.000000e-18,
			ebo: 8.673617e-19,
			zb: 8.000000e-21,
			zbb: 6.776264e-21,
			zo: 1.000000e-21,
			zbo: 8.470329e-22,
			yb: 8.000000e-24,
			ybb: 6.617445e-24,
			ybo: 1.000000e-24,
			yo: 8.271806e-25
		}
	})
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Hour',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'ms', text: this.__vac_translate('microseconds') }, { value: 'mls', text: this.__vac_translate('milliseconds') }, { value: 's', text: this.__vac_translate('seconds') }, { value: 'm', text: this.__vac_translate('minutes') }, { value: 'h', text: this.__vac_translate('hours') }, { value: 'j', text: this.__vac_translate('days') }, { value: 'sm', text: this.__vac_translate('weeks') }, { value: 'a', text: this.__vac_translate('years') }],
			equivalence: {
				ms: 60000000,
				mls: 60000,
				s: 60,
				m: 1,
				h: 0.016667,
				j: 0.000694,
				sm: 0.000099,
				a: 0.000002
			}
		};
	}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Length',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'n', text: this.__vac_translate('nanometers') }, { value: 'mi', text: this.__vac_translate('microns') }, { value: 'mm', text: this.__vac_translate('millimeters') }, { value: 'cm', text: this.__vac_translate('centimeters') }, { value: 'm', text: this.__vac_translate('meters') }, { value: 'km', text: this.__vac_translate('kilometers') }, { value: 'po', text: this.__vac_translate('inches') }, { value: 'pi', text: this.__vac_translate('feet') }, { value: 'y', text: this.__vac_translate('yards') }, { value: 'mil', text: this.__vac_translate('miles') }, { value: 'milm', text: this.__vac_translate('nautical_miles') }],
			equivalence: {
				n: 1000000000,
				mi: 1000000,
				mm: 1000,
				cm: 100,
				m: 1,
				km: 0.001,
				po: 39.37008,
				pi: 3.28084,
				y: 1.093613,
				mil: 0.000621,
				milm: 0.00054
			}
		};
	}
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Temperature',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'c', text: 'Celsius' }, { value: 'f', text: 'Fahrenheit' }, { value: 'k', text: 'Kelvin' }],
			equivalence: {
				c: 0,
				f: 32,
				k: 273.1
			}
		};
	},
	methods: {
		convert(number, from, to) {
			if (from == 'c') {
				if (to == 'f') {
					return number * 1.8 + 32;
				}
				return number + 273.15;
			}
			if (to == 'c') {
				if (from == 'f') {
					return (number - 32) / 1.8;
				}
				return number - 273.15;
			}
			const tmp = this.convert(number, from, 'c');

			return this.convert(tmp, 'c', to);
		}
	}
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Energy',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'ev', text: this.__vac_translate('electron_volts') }, { value: 'j', text: this.__vac_translate('joules') }, { value: 'kj', text: this.__vac_translate('kilojoules') }, { value: 'ct', text: this.__vac_translate('thermal_calories') }, { value: 'ca', text: this.__vac_translate('food_calories') }, { value: 'pl', text: this.__vac_translate('foot_pounds') }, { value: 'utb', text: this.__vac_translate('british_thermal_units') }],
			equivalence: {
				ev: 6.241509e+18,
				j: 1,
				kj: 0.001,
				ct: 0.239006,
				ca: 0.000239,
				pl: 0.737562,
				utb: 0.000948
			}
		};
	}
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Volume',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'ml', text: this.__vac_translate('milliliters') }, { value: 'cl', text: this.__vac_translate('cubic_centimeters') }, { value: 'l', text: this.__vac_translate('liters') }, { value: 'mc', text: this.__vac_translate('cubic_meters') }, { value: 'cc_eu', text: this.__vac_translate('coffee_spoons') + ' (E.-U)' }, { value: 'cs_eu', text: this.__vac_translate('soup_spoons') + ' (E.-U)' }, { value: 'ol_eu', text: this.__vac_translate('fluid_ounces') + ' (E.-U)' }, { value: 't_eu', text: this.__vac_translate('cups') + ' (E.-U)' }, { value: 'p_eu', text: this.__vac_translate('pints') + ' (E.-U)' }, { value: 'l_eu', text: this.__vac_translate('liters') + ' (E.-U)' }, { value: 'g_eu', text: this.__vac_translate('gallons') + ' (E.-U)' }, { value: 'poc', text: this.__vac_translate('cubic_inches') }, { value: 'pic', text: this.__vac_translate('cubic_feet') }, { value: 'yc', text: this.__vac_translate('cubic_yards') }, { value: 'cc_ru', text: this.__vac_translate('coffee_spoons') + ' (R.-U)' }, { value: 'cs_ru', text: this.__vac_translate('soup_spoons') + ' (R.-U)' }, { value: 'ol_ru', text: this.__vac_translate('fluid_ounces') + ' (R.-U)' }, { value: 'p_ru', text: this.__vac_translate('pints') + ' (R.-U)' }, { value: 'l_ru', text: this.__vac_translate('liters') + ' (R.-U)' }, { value: 'g_ru', text: this.__vac_translate('gallons') + ' (R.-U)' }],
			equivalence: {
				ml: 1000,
				cl: 1000,
				l: 1,
				mc: 0.001,
				cc_eu: 202.8841,
				cs_eu: 67.62805,
				ol_eu: 33.81402,
				t_eu: 4.226753,
				p_eu: 2.113376,
				l_eu: 1.056688,
				g_eu: 0.264172,
				poc: 61.02374,
				pic: 0.035315,
				yc: 0.001308,
				cc_ru: 168.9364,
				cs_ru: 56.31213,
				ol_ru: 35.19508,
				p_ru: 1.759754,
				l_ru: 0.879877,
				g_ru: 0.219969
			}
		};
	}
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'WeightAndMass',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'c', text: this.__vac_translate('carats') }, { value: 'mg', text: this.__vac_translate('milligrams') }, { value: 'cg', text: this.__vac_translate('centigrams') }, { value: 'dg', text: this.__vac_translate('decigrams') }, { value: 'g', text: this.__vac_translate('grams') }, { value: 'dcg', text: this.__vac_translate('decagrams') }, { value: 'hg', text: this.__vac_translate('hectograms') }, { value: 'kg', text: this.__vac_translate('kilograms') }, { value: 'tm', text: this.__vac_translate('metric_tons') }, { value: 'o', text: this.__vac_translate('ounces') }, { value: 'l', text: this.__vac_translate('pounds') }, { value: 's', text: 'Stone' }, { value: 'tc', text: this.__vac_translate('short_tons') }, { value: 'ta', text: this.__vac_translate('english_tons') }],
			equivalence: {
				c: 5,
				mg: 1000,
				cg: 100,
				dg: 10,
				g: 1,
				dcg: 0.1,
				hg: 0.01,
				kg: 0.001,
				tm: 0.000001,
				o: 0.035274,
				l: 0.002205,
				s: 0.000157,
				tc: 0.000001,
				ta: 0.000000984206528
			}
		};
	}
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Angle',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'deg', text: this.__vac_translate('degrees') }, { value: 'rad', text: this.__vac_translate('radians') }, { value: 'grad', text: this.__vac_translate('grades') }],
			equivalence: {
				deg: 1,
				rad: 0.017453,
				grad: 1.111111
			}
		};
	}
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Pressure',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'a', text: this.__vac_translate('atmospheres') }, { value: 'b', text: this.__vac_translate('bars') }, { value: 'kp', text: this.__vac_translate('kilopascals') }, { value: 'mm', text: this.__vac_translate('millimeters_of_mercury') }, { value: 'p', text: 'Pascals' }, { value: 'l', text: this.__vac_translate('pounds_per_square_inch') }],
			equivalence: {
				a: 0.986923,
				b: 1,
				kp: 100,
				mm: 750.1875,
				p: 100000,
				l: 14.50377
			}
		};
	}
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Screen_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_vac__ = __webpack_require__(1);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Power',
	components: { Screen: __WEBPACK_IMPORTED_MODULE_0__Screen_vue__["a" /* default */] },
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_vac__["a" /* default */]],
	data() {
		return {
			units: [{ value: 'w', text: this.__vac_translate('watts') }, { value: 'kw', text: this.__vac_translate('kilowatts') }, { value: 'cv', text: this.__vac_translate('horsepower_usa') }, { value: 'pl', text: this.__vac_translate('foot_pounds_per_minute') }, { value: 'btu', text: this.__vac_translate('btu_per_minute') }],
			equivalence: {
				w: 1000,
				kw: 1,
				cv: 1.341022,
				pl: 44253.73,
				btu: 56.86902
			}
		};
	}
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VueAdvancedCalculator", function() { return __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__["a"]; });

const Calculator = {
  install(Vue) {
    Vue.component('vue-advanced-calculator', __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__["a" /* default */]);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Calculator);
}

/* harmony default export */ __webpack_exports__["default"] = (Calculator);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39576e0a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__ = __webpack_require__(55);
function injectStyle (ssrContext) {
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39576e0a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39576e0a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateCalculation_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a9b5296_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateCalculation_vue__ = __webpack_require__(26);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateCalculation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a9b5296_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateCalculation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fr__ = __webpack_require__(25);


const data = {
	fr: __WEBPACK_IMPORTED_MODULE_0__fr__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (function (key, locale = 'fr') {
	if (!(locale in data)) {
		locale = 'fr';
	}
	return data[locale][key] || key;
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	about: 'A propos',
	add: 'Ajouter',
	add_or_substract_dayjs: 'Ajouter ou soustraire des jours',
	angle: 'Angle',
	area: 'Surface',
	atmospheres: 'Atmosphères',
	bars: 'Bars',
	british_thermal_units: 'Unités thermiques britannique',
	btu_per_minute: 'BTU/minute',
	calculator: "Calculatrice",
	carats: 'Carats',
	centigrams: 'Centigrammes',
	centimeters: 'Centimètres',
	horsepower_usa: 'Cheval/chevaux-vapeur (Etats-unis)',
	coffee_spoons: 'Cuillères à café',
	converter: "Convertisseur",
	cubic_centimeters: 'Centimètres cubes',
	cubic_feet: 'Pieds cubes',
	cubic_inches: 'Pouces cubes',
	cubic_meters: 'Mètres cubes',
	cubic_yards: 'Yards cubes',
	cups: 'Tasses',
	currency: "Devise",
	data: 'Données',
	date: 'Date',
	date_calculation: 'Calcul de la date',
	day: 'Jour',
	days: 'Jours',
	decagrams: 'Décagrammes',
	decigrams: 'Decigrammes',
	degrees: 'Degrés',
	difference: 'Différence',
	difference_between_date: 'Différence entre les dates',
	electron_volts: 'Electron-volts',
	energy: 'Energie',
	english_tons: 'Tonnes anglaise',
	feet: 'Pieds',
	final_unit: 'Unité finale',
	fluid_ounces: 'Onces liquides',
	food_calories: 'Calories alimentaire',
	foot_pounds: 'Pieds-livres',
	foot_pounds_per_minute: 'Pieds-livres/minute',
	from: 'De',
	gallons: 'Gallons',
	grades: 'Grades',
	grams: 'Grammes',
	hectares: 'Hectares',
	hectograms: 'Hectogrammes',
	hour: 'Heure',
	hours: 'Heures',
	identics_dates: 'Dates identiques',
	inches: 'Pouces',
	initial_unit: 'Unité initiale',
	joules: 'Joules',
	kilograms: 'Kilogrammes',
	kilojoules: 'Kilojoules',
	kilometers: 'Kilomètres',
	kilopascals: 'Kilopascals',
	kilowatts: 'Kilowatts',
	length: 'Longueur',
	liters: 'Litres',
	meters: 'Mètres',
	metric_tons: 'Tonnes métriques',
	microns: 'Microns',
	microseconds: 'Microsecondes',
	miles: 'Miles',
	milligrams: 'Milligrammes',
	milliliters: 'Millilitres',
	millimeters: 'Millimètres',
	millimeters_of_mercury: 'Millimètres de mercure',
	milliseconds: 'Millisecondes',
	minutes: 'Minutes',
	month: 'Mois',
	months: 'Mois',
	nautical_miles: 'Milles marins',
	nanometers: 'Nanomètres',
	ounces: 'Onces',
	pints: 'Pintes',
	pounds: 'Livres',
	pounds_per_square_inch: 'Livres par pouce carré',
	power: 'Puissance',
	pressure: 'Pression',
	radians: 'Radians',
	seconds: 'Secondes',
	select_the_final_unit: 'Sélectionnez l\'unité finale',
	select_the_initial_unit: 'Sélectionnez l\'unité initiale',
	scientific: 'Scientifique',
	short_tons: 'Tonnes courtes',
	soup_spoons: 'Cuillères à soupe',
	square_centimeters: 'Centimètres carré',
	square_foot: 'Pied carré',
	square_inch: 'Pouces carré',
	square_kilometers: 'Kilomètres carré',
	square_meters: 'Mètres carré',
	square_miles: 'Miles carré',
	square_millimeters: 'Millimètres carré',
	square_yards: 'Yards carré',
	standard: "Standard",
	substract: 'Soustraire',
	temperature: 'Température',
	thermal_calories: 'Calories thermiques',
	to: 'A',
	volume: 'Volume',
	watts: 'Watts',
	week: 'Semaine',
	weeks: 'Semaines',
	weight_and_mass: 'Poids et masse',
	yards: 'Yards',
	year: 'Année',
	years: 'Années'

});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-1"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],staticClass:"custom-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"difference"}},[_vm._v(_vm._s(_vm.__vac_translate('difference_between_date')))]),_vm._v(" "),_c('option',{attrs:{"value":"operations"}},[_vm._v(_vm._s(_vm.__vac_translate('add_or_substract_dayjs')))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"form-group mt-3"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('from')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.from),expression:"from"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.from)},on:{"input":function($event){if($event.target.composing){ return; }_vm.from=$event.target.value}}})]),_vm._v(" "),(_vm.type == 'difference')?_c('div',[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('to')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.to),expression:"to"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.to)},on:{"input":function($event){if($event.target.composing){ return; }_vm.to=$event.target.value}}})]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h6',[_vm._v(_vm._s(_vm.__vac_translate('difference')))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.difference))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(_vm.displayed_difference))])]):_vm._e(),_vm._v(" "),(_vm.type == 'operations')?_c('div',[_c('div',{staticClass:"row justify-content-around mb-2"},[_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.type),expression:"operation.type"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":(_vm.id + "_date_calculation_operation_1"),"value":"add"},domProps:{"checked":_vm._q(_vm.operation.type,"add")},on:{"change":function($event){return _vm.$set(_vm.operation, "type", "add")}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":(_vm.id + "_date_calculation_operation_1")}},[_vm._v(_vm._s(_vm.__vac_translate('add')))])])]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.type),expression:"operation.type"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":(_vm.id + "_date_calculation_operation_2"),"value":"substract"},domProps:{"checked":_vm._q(_vm.operation.type,"substract")},on:{"change":function($event){return _vm.$set(_vm.operation, "type", "substract")}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":(_vm.id + "_date_calculation_operation_2")}},[_vm._v(_vm._s(_vm.__vac_translate('substract')))])])])]),_vm._v(" "),_c('div',{staticClass:"row mt-2"},[_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('years')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.years),expression:"operation.years"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.years)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "years", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('months')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.months),expression:"operation.months"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.months)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "months", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('days')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.days),expression:"operation.days"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.days)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "days", $event.target.value)}}})])])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h6',[_vm._v(_vm._s(_vm.__vac_translate('date')))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.date_result))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(_vm.displayed_date_result))])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scientific_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62ce4eaa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scientific_vue__ = __webpack_require__(28);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scientific_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62ce4eaa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scientific_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.operation))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.result))])]),_vm._v(" "),_c('div',{staticClass:"p-0"},[_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.percent()}}},[_vm._v("%")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear(true)}}},[_vm._v("C")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){_vm.is_deg = !_vm.is_deg}}},[_vm._v(_vm._s(_vm.is_deg ? 'DEG' : 'RAD'))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",class:{active: _vm.is_snd},on:{"click":function($event){_vm.is_snd = !_vm.is_snd}}},[_vm._v("2"),_c('sup',[_vm._v("nd")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sin()}}},[_vm._v("sin"+_vm._s(_vm.is_snd ? 'h' : ''))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.cos()}}},[_vm._v("cos"+_vm._s(_vm.is_snd ? 'h' : ''))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.tan()}}},[_vm._v("tan"+_vm._s(_vm.is_snd ? 'h' : ''))])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.log()}}},[_vm._v("log")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.ln()}}},[_vm._v("ln")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)}},[_vm._v("e")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.exp()}}},[_vm._v("exp")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.pi()}}},[_vm._v("π")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.factorial()}}},[_vm._v("n!")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.abs()}}},[_vm._v("|x|")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.addElement('MOD')}}},[_vm._v("mod")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('^')}}},[_vm._v("x"),_c('sup',[_vm._v("y")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.power10()}}},[_vm._v("10"),_c('sup',[_vm._v("x")])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.inverse()}}},[_vm._v("1/x")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqr()}}},[_vm._v("x²")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqrt()}}},[_vm._v("√")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('(')}}},[_vm._v("(")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){_vm.addElement(')')}}},[_vm._v(")")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('/')}}},[_vm._v("/")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M+")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('*')}}},[_vm._v("*")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M-")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('-')}}},[_vm._v("-")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("MS")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.plusMinus()}}},[_vm._v("±")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('+')}}},[_vm._v("+")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light equals",on:{"click":function($event){return _vm.equals()}}},[_vm._v("=")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Standard_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8576ada6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__ = __webpack_require__(30);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Standard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8576ada6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.operation))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.result))])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.percent()}}},[_vm._v("%")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear(true)}}},[_vm._v("C")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.inverse()}}},[_vm._v("1/x")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqr()}}},[_vm._v("x²")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqrt()}}},[_vm._v("√")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('(')}}},[_vm._v("(")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){_vm.addElement(')')}}},[_vm._v(")")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('/')}}},[_vm._v("/")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M+")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('*')}}},[_vm._v("*")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M-")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('-')}}},[_vm._v("-")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("MS")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.plusMinus()}}},[_vm._v("±")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('+')}}},[_vm._v("+")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light equals",on:{"click":function($event){return _vm.equals()}}},[_vm._v("=")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Area_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cbf2202_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Area_vue__ = __webpack_require__(34);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Area_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cbf2202_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Area_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vac__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__vac__["a" /* default */]],
	props: {
		converter: { type: Function }
	},
	data: () => ({
		initial_unit: null,
		final_unit: null
	}),
	computed: {
		displayed_initial_unit() {
			if (this.initial_unit == null) {
				return '';
			}
			return this.units.find(elt => elt.value == this.initial_unit).text;
		},
		displayed_final_unit() {
			if (this.final_unit == null) {
				return '';
			}
			return this.units.find(elt => elt.value == this.final_unit).text;
		},
		result() {
			const result = this.convert(this.current, this.initial_unit, this.final_unit);
			if (!this.isNumber(result)) {
				return 0;
			}
			return this.formatNumber(result, this.precision);
		}
	},
	mounted() {
		this.keyboardPatch();
	},
	methods: {
		/**
   * Stimulation de l'utilisation du clavier
   */
		keyboardPatch() {
			document.querySelectorAll('.vac-container[tabindex="-1"]').forEach(el => {
				el.addEventListener('keydown', e => {
					const key = e.key;
					if (this.isNumber(key) || ['.'].includes(key)) {
						this.addElement(key);
					}
					if (key == 'Backspace') {
						this.backspace();
					}
					if (key.toLowerCase() == 'c') {
						this.clear(true);
					}
				});
			});
		},

		convert(number, from, to) {
			number = parseFloat(number);
			if (from == null || from === undefined || to == null || to === undefined) {
				return 0;
			}
			if (from == to) {
				return number;
			}
			if (!this.converter) {
				return number * this.equivalence[to] / this.equivalence[from];
			}
			return this.converter(number, from, to);
		}
	}
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-1"},[_c('div',{staticClass:"row mt-3"},[_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('initial_unit')))]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.initial_unit),expression:"initial_unit"}],staticClass:"custom-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.initial_unit=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"disabled":"","selected":""}},[_vm._v(_vm._s(_vm.__vac_translate('select_the_initial_unit')))]),_vm._v(" "),_vm._l((_vm.units),function(unit,i){return _c('option',{key:i,domProps:{"value":unit.value}},[_vm._v(_vm._s(unit.text))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('div',{staticClass:"form-group"},[_c('label',{staticStyle:{"visibility":"hidden !important","opacity":"0 !important"}},[_vm._v("Hide")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light btn-icon btn-sm",on:{"click":function($event){$event.preventDefault();return _vm.toggleUnits.apply(null, arguments)}}},[_c('i',{staticClass:"fa fa-exchange-alt"})])])]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('final_unit')))]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.final_unit),expression:"final_unit"}],staticClass:"custom-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.final_unit=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"disabled":"","selected":""}},[_vm._v(_vm._s(_vm.__vac_translate('select_the_final_unit')))]),_vm._v(" "),_vm._l((_vm.units),function(unit,i){return _c('option',{key:i,domProps:{"value":unit.value}},[_vm._v(_vm._s(unit.text))])})],2)])])]),_vm._v(" "),_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.displayed_initial_unit))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.current))])]),_vm._v(" "),_c('div',{staticClass:"vac-screen outset"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.displayed_final_unit))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.result))])]),_vm._v(" "),_c('div',{staticClass:"col-10 offset-1 px-0"},[_c('div',{staticClass:"d-flex justify-content-end vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end vac-buttons"},[_c('div',{staticClass:"btn",staticStyle:{"flex":"1"}}),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Data_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bed7936_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Data_vue__ = __webpack_require__(36);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Data_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bed7936_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Data_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hour_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f62cd364_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hour_vue__ = __webpack_require__(38);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hour_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f62cd364_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hour_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Length_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15bb2b79_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Length_vue__ = __webpack_require__(40);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Length_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15bb2b79_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Length_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Temperature_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c4d7526_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Temperature_vue__ = __webpack_require__(42);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Temperature_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c4d7526_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Temperature_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id,"converter":_vm.convert}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Energy_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71619af8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Energy_vue__ = __webpack_require__(44);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Energy_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71619af8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Energy_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Volume_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_451cb5c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Volume_vue__ = __webpack_require__(46);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Volume_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_451cb5c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Volume_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_WeightAndMass_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f6e5c75_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_WeightAndMass_vue__ = __webpack_require__(48);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_WeightAndMass_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f6e5c75_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_WeightAndMass_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Angle_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_265f6d84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Angle_vue__ = __webpack_require__(50);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Angle_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_265f6d84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Angle_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pressure_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0242a6cb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pressure_vue__ = __webpack_require__(52);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pressure_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0242a6cb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pressure_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Power_vue__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9eaadc6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Power_vue__ = __webpack_require__(54);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Power_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9eaadc6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Power_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('screen',{attrs:{"equivalence":_vm.equivalence,"units":_vm.units,"locale":_vm.locale,"id":_vm.id,"converter":_vm.convert}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vac-container position-relative w-100 border rounded",attrs:{"id":_vm.id,"tabindex":"-1"}},[_c('div',{staticClass:"vac-overlay",class:{'active': _vm.open_sidebar},on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}}),_vm._v(" "),_c('nav',{staticClass:"vac-sidebar d-flex flex-column justify-content-between",class:{'active': _vm.open_sidebar}},[_c('div',{staticClass:"vac-dismiss-btn text-center rounded-circle position-absolute",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fas fa-times"})]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-header px-1 pt-1 text-center"},[_c('h4',{staticClass:"h5 font-weight-bold vac-sidebar-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h5',{staticClass:"h6 text-muted"},[_vm._v(_vm._s(_vm.description))])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-menu container"},[_c('ul',{staticClass:"list-unstyled w-100"},[_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('calculator')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'standard'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('standard')}}},[_c('i',{staticClass:"fa fa-calculator"}),_vm._v(" "+_vm._s(_vm.__vac_translate('standard')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'scientific'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('scientific')}}},[_c('i',{staticClass:"fa fa-flask"}),_vm._v(" "+_vm._s(_vm.__vac_translate('scientific')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'date_calculation'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('date_calculation')}}},[_c('i',{staticClass:"fa fa-calendar-alt"}),_vm._v(" "+_vm._s(_vm.__vac_translate('date_calculation')))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('converter')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'currency'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('currency')}}},[_c('i',{staticClass:"fa fa-dollar-sign"}),_vm._v(" "+_vm._s(_vm.__vac_translate('currency')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'volume'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('volume')}}},[_c('i',{staticClass:"fa fa-cube"}),_vm._v(" "+_vm._s(_vm.__vac_translate('volume')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'length'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('length')}}},[_c('i',{staticClass:"fa fa-ruler-combined"}),_vm._v(" "+_vm._s(_vm.__vac_translate('length')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'weight_and_mass'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('weight_and_mass')}}},[_c('i',{staticClass:"fa fa-weight-hanging"}),_vm._v(" "+_vm._s(_vm.__vac_translate('weight_and_mass')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'temperature'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('temperature')}}},[_c('i',{staticClass:"fa fa-thermometer-half"}),_vm._v(" "+_vm._s(_vm.__vac_translate('temperature')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'energy'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('energy')}}},[_c('i',{staticClass:"fa fa-fire"}),_vm._v(" "+_vm._s(_vm.__vac_translate('energy')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'area'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('area')}}},[_c('i',{staticClass:"fa fa-th"}),_vm._v(" "+_vm._s(_vm.__vac_translate('area')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'hour'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('hour')}}},[_c('i',{staticClass:"fa fa-clock"}),_vm._v(" "+_vm._s(_vm.__vac_translate('hour')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'power'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('power')}}},[_c('i',{staticClass:"fa fa-bolt"}),_vm._v(" "+_vm._s(_vm.__vac_translate('power')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'data'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('data')}}},[_c('i',{staticClass:"fa fa-hdd"}),_vm._v(" "+_vm._s(_vm.__vac_translate('data')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'pressure'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('pressure')}}},[_c('i',{staticClass:"fa fa-tachometer-alt"}),_vm._v(" "+_vm._s(_vm.__vac_translate('pressure')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'angle'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('angle')}}},[_c('i',{staticClass:"fa fa-less-than"}),_vm._v(" "+_vm._s(_vm.__vac_translate('angle')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-footer p-1 w-100"},[_c('div',{staticClass:"btn-group w-100 btn-group-block"},[_c('button',{staticClass:"btn btn-sm btn-light btn-block",attrs:{"type":"button"}},[_vm._v(_vm._s(_vm.__vac_translate('about')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-content w-100 p-1"},[_c('div',{staticClass:"d-flex justify-content-between mb-1"},[_c('button',{staticClass:"btn btn-sm btn-secondary",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fa fa-bars"})]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('h4',{staticClass:"font-weight-bold h5"},[_vm._v(_vm._s(_vm.__vac_translate(_vm.mode)))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted small m-0"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),(_vm.mode == 'date_calculation')?_c('date-calculation',{attrs:{"locale":_vm.locale,"id":_vm.id}}):(_vm.mode == 'weight_and_mass')?_c('weight-and-mass',{attrs:{"locale":_vm.locale,"id":_vm.id}}):(_vm.mode == 'data')?_c('data-converter',{attrs:{"locale":_vm.locale,"id":_vm.id}}):(_vm.mode == 'area')?_c('area-converter',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_c(_vm.mode,{tag:"component",attrs:{"locale":_vm.locale,"id":_vm.id}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-sm btn-light"},[_c('i',{staticClass:"fa fa-undo"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});