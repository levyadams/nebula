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
	style.textContent = "ul.svelte-1koja00{margin:0 0 1em 0;line-height:1.5}.hidden.svelte-1koja00{position:absolute}main{color:white;background:linear-gradient(-45deg, #240672, #860536, #085977, #0a755c);background-size:400% 400%;animation:gradient 8s ease-in-out infinite}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5sZXQgb3V0cm8gPSBmYWxzZTtcbjwvc2NyaXB0PlxuPHN0eWxlPlxuXHR1bCB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuXHQuaGlkZGVue1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0fVxuXHQ6Z2xvYmFsKG1haW4pe1xuXHRcdGNvbG9yOndoaXRlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMjQwNjcyLCAjODYwNTM2LCAjMDg1OTc3LCAjMGE3NTVjKTtcblx0YmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG5cdGFuaW1hdGlvbjogZ3JhZGllbnQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG48L3N0eWxlPlxuXG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPldlYnNpdGUgRXhhbXBsZXM8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxkaXYgY2xhc3M9XCJib2R5XCIgc3R5bGU9XCJoZWlnaHQ6MTAwdmg7XCIgdHJhbnNpdGlvbjpmbHk9e3t5OjYwMCxkdXJhdGlvbjoxNjAwfX0gY2xhc3M6aGlkZGVuPXtvdXRyb30gb246b3V0cm9zdGFydD1cInsoKSA9Pm91dHJvPXRydWV9XCI+XG48aDE+V2Vic2l0ZSBleGFtcGxlczwvaDE+XG5cbjxuYXY+XG5cdDx1bD5cblx0XHQ8bGk+PGEgIGhyZWY9Jy4vc2l0ZXMvcHJvZmVzc2lvbmFsLXByb2ZpbGUtd2ViJz5wcm9mZXNzaW9uYWwgcHJvZmlsZTwvYT48L2xpPlxuXHQ8L3VsPlxuPC9uYXY+XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0MsRUFBRSxlQUFDLENBQUMsQUFDSCxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqQixXQUFXLENBQUUsR0FBRyxBQUNqQixDQUFDLEFBQ0Qsc0JBQU8sQ0FBQyxBQUNQLFFBQVEsQ0FBRSxRQUFRLEFBQ25CLENBQUMsQUFDTyxJQUFJLEFBQUMsQ0FBQyxBQUNiLE1BQU0sS0FBSyxDQUNaLFVBQVUsQ0FBRSxnQkFBZ0IsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQ3ZFLGVBQWUsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUMxQixTQUFTLENBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxBQUM1QyxDQUFDIn0= */";
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
			document.title = "Website Examples";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 25, 0, 563);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", "./sites/professional-profile-web");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 29, 6, 608);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 29, 2, 604);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "svelte-1koja00");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 28, 1, 597);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(nav, file, 27, 0, 590);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "body svelte-1koja00");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "height", "100vh");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "hidden", ctx.outro);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 24, 0, 428);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9kZXYvZXhhbXBsZXMvaW5kZXguc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJGQXdCNkYsS0FBSzs7K0ZBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUF2QixLQUFLOzs7Ozs7OzhMQUExQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7NkxBQXJCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdEI3RSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiMmNhZjljYmMyZTgyZDY0NzgyMGEvZGV2X2V4YW1wbGVzLmRldl9leGFtcGxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZseSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xubGV0IG91dHJvID0gZmFsc2U7XG48L3NjcmlwdD5cbjxzdHlsZT5cblx0dWwge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdH1cblx0LmhpZGRlbntcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdH1cblx0Omdsb2JhbChtYWluKXtcblx0XHRjb2xvcjp3aGl0ZTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzI0MDY3MiwgIzg2MDUzNiwgIzA4NTk3NywgIzBhNzU1Yyk7XG5cdGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuXHRhbmltYXRpb246IGdyYWRpZW50IDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuPC9zdHlsZT5cblxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5XZWJzaXRlIEV4YW1wbGVzPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IGNsYXNzPVwiYm9keVwiIHN0eWxlPVwiaGVpZ2h0OjEwMHZoO1wiIHRyYW5zaXRpb246Zmx5PXt7eTo2MDAsZHVyYXRpb246MTYwMH19IGNsYXNzOmhpZGRlbj17b3V0cm99IG9uOm91dHJvc3RhcnQ9XCJ7KCkgPT5vdXRybz10cnVlfVwiPlxuPGgxPldlYnNpdGUgZXhhbXBsZXM8L2gxPlxuXG48bmF2PlxuXHQ8dWw+XG5cdFx0PGxpPjxhICBocmVmPScuL3NpdGVzL3Byb2Zlc3Npb25hbC1wcm9maWxlLXdlYic+cHJvZmVzc2lvbmFsIHByb2ZpbGU8L2E+PC9saT5cblx0PC91bD5cbjwvbmF2PlxuPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==