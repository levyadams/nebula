(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev_examples"],{

/***/ "./src/routes/dev/examples/index.svelte":
/*!**********************************************!*\
  !*** ./src/routes/dev/examples/index.svelte ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* src/routes/dev/examples/index.svelte generated by Svelte v3.8.0 */



const file = "src/routes/dev/examples/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1koja00-style';
	style.textContent = "ul.svelte-1koja00{margin:0 0 1em 0;line-height:1.5}.hidden.svelte-1koja00{position:absolute}main{color:white;background:linear-gradient(-45deg, #240672, #860536, #085977, #0a755c);background-size:400% 400%;animation:gradient 8s ease-in-out infinite}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5sZXQgb3V0cm8gPSBmYWxzZTtcbjwvc2NyaXB0PlxuPHN0eWxlPlxuXHR1bCB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuXHQuaGlkZGVue1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0fVxuXHQ6Z2xvYmFsKG1haW4pe1xuXHRcdGNvbG9yOndoaXRlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMjQwNjcyLCAjODYwNTM2LCAjMDg1OTc3LCAjMGE3NTVjKTtcblx0YmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG5cdGFuaW1hdGlvbjogZ3JhZGllbnQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG48L3N0eWxlPlxuXG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPldlYnNpdGUgRXhhbXBsZXMgLSBOZWJieTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBjbGFzcz1cImJvZHlcIiBzdHlsZT1cImhlaWdodDoxMDB2aDtcIiB0cmFuc2l0aW9uOmZseT17e3k6NjAwLGR1cmF0aW9uOjE2MDB9fSBjbGFzczpoaWRkZW49e291dHJvfSBvbjpvdXRyb3N0YXJ0PVwieygpID0+b3V0cm89dHJ1ZX1cIj5cbjxoMT5XZWJzaXRlIGV4YW1wbGVzPC9oMT5cblxuPG5hdj5cblx0PHVsPlxuXHRcdDxsaT48YSAgaHJlZj0nLi9leGFtcGxlcy9wcm9maWxlJz5wcm9mZXNzaW9uYWwgcHJvZmlsZTwvYT48L2xpPlxuXHQ8L3VsPlxuPC9uYXY+XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0MsRUFBRSxlQUFDLENBQUMsQUFDSCxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqQixXQUFXLENBQUUsR0FBRyxBQUNqQixDQUFDLEFBQ0Qsc0JBQU8sQ0FBQyxBQUNQLFFBQVEsQ0FBRSxRQUFRLEFBQ25CLENBQUMsQUFDTyxJQUFJLEFBQUMsQ0FBQyxBQUNiLE1BQU0sS0FBSyxDQUNaLFVBQVUsQ0FBRSxnQkFBZ0IsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQ3ZFLGVBQWUsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUMxQixTQUFTLENBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxBQUM1QyxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var t0, div, h1, t1, t2, nav, ul, li, a, t3, div_transition, current, dispose;

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Website examples");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("nav");
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("professional profile");
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true, style: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "H1", {}, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Website examples");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n\n");

			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "NAV", {}, false);
			var nav_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(nav);

			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nav_nodes, "UL", { class: true }, false);
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {}, false);
			var li_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "A", { href: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, "professional profile");
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			nav_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Website Examples - Nebby";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 25, 0, 571);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", "./examples/profile");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 29, 6, 616);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 29, 2, 612);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "svelte-1koja00");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 28, 1, 605);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(nav, file, 27, 0, 598);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "body svelte-1koja00");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "height", "100vh");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "hidden", ctx.outro);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 24, 0, 436);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "outrostart", ctx.outrostart_handler);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, nav);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(nav, ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t3);
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.outro) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "hidden", ctx.outro);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (!div_transition) div_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div, svelte_transition__WEBPACK_IMPORTED_MODULE_1__["fly"], {y:600,duration:1600}, true);
				div_transition.run(1);
			});

			current = true;
		},

		o: function outro_1(local) {
			if (!div_transition) div_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div, svelte_transition__WEBPACK_IMPORTED_MODULE_1__["fly"], {y:600,duration:1600}, false);
			div_transition.run(0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				if (div_transition) div_transition.end();
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let outro = false;

	function outrostart_handler() {
		const $$result = outro=true;
		$$invalidate('outro', outro);
		return $$result;
	}

	return { outro, outrostart_handler };
}

class Examples extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1koja00-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Examples);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZGV2L2V4YW1wbGVzL2luZGV4LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyRkF3QjZGLEtBQUs7OytGQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFBdkIsS0FBSzs7Ozs7Ozs4TEFBMUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7OzZMQUFyQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXRCN0UsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImI2M2M5YjU4ZjdkZWU5M2E2MzM2L2Rldl9leGFtcGxlcy5kZXZfZXhhbXBsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBmbHkgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbmxldCBvdXRybyA9IGZhbHNlO1xuPC9zY3JpcHQ+XG48c3R5bGU+XG5cdHVsIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG5cdC5oaWRkZW57XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHR9XG5cdDpnbG9iYWwobWFpbil7XG5cdFx0Y29sb3I6d2hpdGU7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMyNDA2NzIsICM4NjA1MzYsICMwODU5NzcsICMwYTc1NWMpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcblx0YW5pbWF0aW9uOiBncmFkaWVudCA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbjwvc3R5bGU+XG5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+V2Vic2l0ZSBFeGFtcGxlcyAtIE5lYmJ5PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IGNsYXNzPVwiYm9keVwiIHN0eWxlPVwiaGVpZ2h0OjEwMHZoO1wiIHRyYW5zaXRpb246Zmx5PXt7eTo2MDAsZHVyYXRpb246MTYwMH19IGNsYXNzOmhpZGRlbj17b3V0cm99IG9uOm91dHJvc3RhcnQ9XCJ7KCkgPT5vdXRybz10cnVlfVwiPlxuPGgxPldlYnNpdGUgZXhhbXBsZXM8L2gxPlxuXG48bmF2PlxuXHQ8dWw+XG5cdFx0PGxpPjxhICBocmVmPScuL2V4YW1wbGVzL3Byb2ZpbGUnPnByb2Zlc3Npb25hbCBwcm9maWxlPC9hPjwvbGk+XG5cdDwvdWw+XG48L25hdj5cbjwvZGl2PiJdLCJzb3VyY2VSb290IjoiIn0=