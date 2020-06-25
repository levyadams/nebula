
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.23.1' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/modules/Header.svelte generated by Svelte v3.23.1 */

    const file = "src/modules/Header.svelte";

    function create_fragment(ctx) {
    	let div1;
    	let div0;
    	let h1;
    	let t1;
    	let svg;
    	let g1;
    	let g0;
    	let rect0;
    	let rect1;
    	let rect2;
    	let ellipse0;
    	let ellipse1;
    	let ellipse2;
    	let ellipse3;
    	let rect3;
    	let rect4;
    	let rect5;
    	let g2;
    	let path0;
    	let g3;
    	let ellipse4;
    	let path1;
    	let ellipse5;
    	let ellipse6;
    	let path2;
    	let ellipse7;
    	let ellipse8;
    	let path3;
    	let ellipse9;
    	let g4;
    	let ellipse10;
    	let rect6;
    	let ellipse11;
    	let path4;
    	let t2;
    	let h2;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Joystick Nebula";
    			t1 = space();
    			svg = svg_element("svg");
    			g1 = svg_element("g");
    			g0 = svg_element("g");
    			rect0 = svg_element("rect");
    			rect1 = svg_element("rect");
    			rect2 = svg_element("rect");
    			ellipse0 = svg_element("ellipse");
    			ellipse1 = svg_element("ellipse");
    			ellipse2 = svg_element("ellipse");
    			ellipse3 = svg_element("ellipse");
    			rect3 = svg_element("rect");
    			rect4 = svg_element("rect");
    			rect5 = svg_element("rect");
    			g2 = svg_element("g");
    			path0 = svg_element("path");
    			g3 = svg_element("g");
    			ellipse4 = svg_element("ellipse");
    			path1 = svg_element("path");
    			ellipse5 = svg_element("ellipse");
    			ellipse6 = svg_element("ellipse");
    			path2 = svg_element("path");
    			ellipse7 = svg_element("ellipse");
    			ellipse8 = svg_element("ellipse");
    			path3 = svg_element("path");
    			ellipse9 = svg_element("ellipse");
    			g4 = svg_element("g");
    			ellipse10 = svg_element("ellipse");
    			rect6 = svg_element("rect");
    			ellipse11 = svg_element("ellipse");
    			path4 = svg_element("path");
    			t2 = space();
    			h2 = element("h2");
    			h2.textContent = "Mobile-First Gaming";
    			attr_dev(h1, "class", "headline-primary svelte-1i0b932");
    			add_location(h1, file, 38, 0, 804);
    			attr_dev(rect0, "x", "-35.547");
    			attr_dev(rect0, "y", "124.42");
    			attr_dev(rect0, "width", "188.24");
    			attr_dev(rect0, "height", "112.3");
    			add_location(rect0, file, 42, 3, 1081);
    			attr_dev(rect1, "x", "-88.869");
    			attr_dev(rect1, "y", "25.045");
    			attr_dev(rect1, "width", "83.213");
    			attr_dev(rect1, "height", "59.784");
    			add_location(rect1, file, 43, 3, 1145);
    			attr_dev(rect2, "x", "50.675");
    			attr_dev(rect2, "y", "-19.305");
    			attr_dev(rect2, "width", "178.57");
    			attr_dev(rect2, "height", "82.85");
    			add_location(rect2, file, 44, 3, 1210);
    			attr_dev(ellipse0, "cx", "-43.228");
    			attr_dev(ellipse0, "cy", "92.557");
    			attr_dev(ellipse0, "rx", "45.641");
    			attr_dev(ellipse0, "ry", "67.512");
    			add_location(ellipse0, file, 45, 3, 1274);
    			attr_dev(ellipse1, "cx", "170.93");
    			attr_dev(ellipse1, "cy", "69.578");
    			attr_dev(ellipse1, "rx", "39.012");
    			attr_dev(ellipse1, "ry", "43.034");
    			add_location(ellipse1, file, 46, 3, 1337);
    			attr_dev(ellipse2, "cx", "97.329");
    			attr_dev(ellipse2, "cy", "5.6306");
    			attr_dev(ellipse2, "rx", "109.39");
    			attr_dev(ellipse2, "ry", "47.458");
    			add_location(ellipse2, file, 47, 3, 1399);
    			attr_dev(ellipse3, "cx", "-103.76");
    			attr_dev(ellipse3, "cy", "97.731");
    			attr_dev(ellipse3, "rx", "55.501");
    			attr_dev(ellipse3, "ry", "55.904");
    			add_location(ellipse3, file, 48, 3, 1461);
    			attr_dev(rect3, "x", "-88.869");
    			attr_dev(rect3, "y", "25.045");
    			attr_dev(rect3, "width", "150");
    			attr_dev(rect3, "height", "110.89");
    			add_location(rect3, file, 49, 3, 1524);
    			attr_dev(g0, "fill", "none");
    			attr_dev(g0, "stroke-width", "42.069");
    			add_location(g0, file, 41, 2, 1040);
    			attr_dev(rect4, "transform", "matrix(.9278 -.37307 .39459 .91886 0 0)");
    			attr_dev(rect4, "x", "136.79");
    			attr_dev(rect4, "y", "265.68");
    			attr_dev(rect4, "width", "206.48");
    			attr_dev(rect4, "height", "68.292");
    			attr_dev(rect4, "ry", "6.5276");
    			attr_dev(rect4, "stroke", "#000");
    			attr_dev(rect4, "stroke-width", "2.8194");
    			add_location(rect4, file, 51, 2, 1592);
    			attr_dev(rect5, "transform", "matrix(.9278 -.37307 .39459 .91886 0 0)");
    			attr_dev(rect5, "x", "136.79");
    			attr_dev(rect5, "y", "265.68");
    			attr_dev(rect5, "width", "206.48");
    			attr_dev(rect5, "height", "68.292");
    			attr_dev(rect5, "ry", "6.5276");
    			attr_dev(rect5, "fill", "none");
    			add_location(rect5, file, 52, 2, 1755);
    			attr_dev(g1, "transform", "translate(-232.38 -88.993)");
    			set_style(g1, "mix-blend-mode", "normal");
    			add_location(g1, file, 40, 1, 965);
    			attr_dev(path0, "d", "m419.27 116.68c-0.87207-5e-3 -1.7608 0.15683-2.6192 0.50204l-179.18 72.048c-3.4339 1.3808-5.0494 5.1671-3.6225 8.49l21.796 50.755c1.427 3.3229 5.3403 4.8861 8.7742 3.5053l179.18-72.048c3.4339-1.3808 5.0494-5.1671 3.6224-8.49l-6.0896-14.181c-0.29566 0.45962-0.73861 0.83649-1.3007 1.0528-1.3972 0.53775-2.9689-0.11756-3.5246-1.4695l-9.2955-22.614c-0.55571-1.352 0.12149-2.8733 1.5186-3.4111 0.38516-0.14823 0.78308-0.2027 1.1699-0.18l-4.274-9.9525c-1.0702-2.4921-3.5388-3.9944-6.155-4.0073z");
    			attr_dev(path0, "fill", "#4d4d4d");
    			add_location(path0, file, 55, 2, 1974);
    			attr_dev(g2, "transform", "translate(-232.38 -88.993)");
    			set_style(g2, "mix-blend-mode", "normal");
    			add_location(g2, file, 54, 1, 1899);
    			attr_dev(ellipse4, "transform", "rotate(-6.2097)");
    			attr_dev(ellipse4, "cx", "265.85");
    			attr_dev(ellipse4, "cy", "228.88");
    			attr_dev(ellipse4, "rx", "18.745");
    			attr_dev(ellipse4, "ry", "11.368");
    			attr_dev(ellipse4, "fill", "#808080");
    			add_location(ellipse4, file, 58, 2, 2543);
    			attr_dev(path1, "d", "m304.75 191.35a9.5075 15.478 83.79 0 1-14.392 10.603 9.5075 15.478 83.79 0 1-16.206-6.7377 10.943 15.566 83.79 0 0 0.0356 1.2156 10.943 15.566 83.79 0 0 16.658 9.1946 10.943 15.566 83.79 0 0 14.292-12.562 10.943 15.566 83.79 0 0-0.38707-1.7133z");
    			attr_dev(path1, "fill", "#a00");
    			add_location(path1, file, 59, 2, 2647);
    			attr_dev(ellipse5, "transform", "rotate(-6.2097)");
    			attr_dev(ellipse5, "cx", "266.9");
    			attr_dev(ellipse5, "cy", "223.19");
    			attr_dev(ellipse5, "rx", "15.478");
    			attr_dev(ellipse5, "ry", "9.5075");
    			attr_dev(ellipse5, "fill", "#ff2a2a");
    			add_location(ellipse5, file, 60, 2, 2918);
    			attr_dev(ellipse6, "transform", "rotate(-16.195)");
    			attr_dev(ellipse6, "cx", "283.71");
    			attr_dev(ellipse6, "cy", "285.42");
    			attr_dev(ellipse6, "rx", "18.745");
    			attr_dev(ellipse6, "ry", "11.368");
    			attr_dev(ellipse6, "fill", "#808080");
    			add_location(ellipse6, file, 61, 2, 3021);
    			attr_dev(path2, "d", "m364.2 183.56a9.5075 15.478 73.805 0 1-12.336 12.938 9.5075 15.478 73.805 0 1-17.129-3.8256 10.943 15.566 73.805 0 0 0.24585 1.191 10.943 15.566 73.805 0 0 18 6.1667 10.943 15.566 73.805 0 0 11.897-14.85 10.943 15.566 73.805 0 0-0.67829-1.6202z");
    			attr_dev(path2, "fill", "#2a2aff");
    			add_location(path2, file, 62, 2, 3125);
    			attr_dev(ellipse7, "transform", "rotate(-16.195)");
    			attr_dev(ellipse7, "cx", "283.18");
    			attr_dev(ellipse7, "cy", "277.86");
    			attr_dev(ellipse7, "rx", "15.478");
    			attr_dev(ellipse7, "ry", "9.5075");
    			attr_dev(ellipse7, "fill", "#55f");
    			add_location(ellipse7, file, 63, 2, 3399);
    			attr_dev(ellipse8, "transform", "rotate(-12.723)");
    			attr_dev(ellipse8, "cx", "348.64");
    			attr_dev(ellipse8, "cy", "238.49");
    			attr_dev(ellipse8, "rx", "18.745");
    			attr_dev(ellipse8, "ry", "11.368");
    			attr_dev(ellipse8, "fill", "#808080");
    			add_location(ellipse8, file, 64, 2, 3500);
    			attr_dev(path3, "d", "m404.95 147.36a9.5075 15.478 77.277 0 1-13.097 12.167 9.5075 15.478 77.277 0 1-16.866-4.856 10.943 15.566 77.277 0 0 0.17325 1.2037 10.943 15.566 77.277 0 0 17.594 7.2457 10.943 15.566 77.277 0 0 12.774-14.102 10.943 15.566 77.277 0 0-0.5789-1.6583z");
    			attr_dev(path3, "fill", "#054");
    			add_location(path3, file, 65, 2, 3604);
    			attr_dev(ellipse9, "transform", "rotate(-12.723)");
    			attr_dev(ellipse9, "cx", "347.19");
    			attr_dev(ellipse9, "cy", "232.93");
    			attr_dev(ellipse9, "rx", "15.478");
    			attr_dev(ellipse9, "ry", "9.5075");
    			attr_dev(ellipse9, "fill", "#008066");
    			add_location(ellipse9, file, 66, 2, 3880);
    			attr_dev(g3, "transform", "translate(-232.38 -88.993)");
    			add_location(g3, file, 57, 1, 2498);
    			attr_dev(ellipse10, "transform", "rotate(-16.195)");
    			attr_dev(ellipse10, "cx", "276.8");
    			attr_dev(ellipse10, "cy", "251.12");
    			attr_dev(ellipse10, "rx", "18.745");
    			attr_dev(ellipse10, "ry", "11.368");
    			attr_dev(ellipse10, "fill", "#808080");
    			add_location(ellipse10, file, 69, 2, 4034);
    			attr_dev(rect6, "transform", "rotate(-19.402)");
    			attr_dev(rect6, "x", "257.27");
    			attr_dev(rect6, "y", "208.71");
    			attr_dev(rect6, "width", "9.0612");
    			attr_dev(rect6, "height", "59.721");
    			attr_dev(rect6, "ry", "4.5306");
    			attr_dev(rect6, "fill", "#6c5353");
    			add_location(rect6, file, 70, 2, 4137);
    			attr_dev(ellipse11, "cx", "314.13");
    			attr_dev(ellipse11, "cy", "106.29");
    			attr_dev(ellipse11, "rx", "17.505");
    			attr_dev(ellipse11, "ry", "17.299");
    			attr_dev(ellipse11, "fill", "#fc0");
    			add_location(ellipse11, file, 71, 2, 4255);
    			attr_dev(path4, "d", "m327.69 95.508a17.505 17.299 0 0 1 2.3554 8.6667 17.505 17.299 0 0 1-0.0186 0.7922 17.505 17.299 0 0 1 0.0186 0.7953 17.505 17.299 0 0 1-17.504 17.299 17.505 17.299 0 0 1-7.8228-1.8237 17.505 17.299 0 0 0 9.8076 2.9709 17.505 17.299 0 0 0 17.504-17.299 17.505 17.299 0 0 0-4.3403-11.401z");
    			attr_dev(path4, "fill", "#f39500");
    			add_location(path4, file, 72, 2, 4328);
    			attr_dev(g4, "transform", "translate(-232.38 -88.993)");
    			add_location(g4, file, 68, 1, 3989);
    			attr_dev(svg, "width", "100%");
    			attr_dev(svg, "height", "100%");
    			attr_dev(svg, "version", "1.1");
    			attr_dev(svg, "viewBox", "0 0 217.26 166.28");
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "class", "svelte-1i0b932");
    			add_location(svg, file, 39, 0, 854);
    			attr_dev(h2, "class", "headline-secondary svelte-1i0b932");
    			add_location(h2, file, 75, 0, 4656);
    			attr_dev(div0, "class", "svg-container svelte-1i0b932");
    			add_location(div0, file, 37, 0, 776);
    			attr_dev(div1, "class", "intro-container svelte-1i0b932");
    			toggle_class(div1, "fadeout", /*introRan*/ ctx[0]);
    			add_location(div1, file, 36, 0, 721);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, h1);
    			append_dev(div0, t1);
    			append_dev(div0, svg);
    			append_dev(svg, g1);
    			append_dev(g1, g0);
    			append_dev(g0, rect0);
    			append_dev(g0, rect1);
    			append_dev(g0, rect2);
    			append_dev(g0, ellipse0);
    			append_dev(g0, ellipse1);
    			append_dev(g0, ellipse2);
    			append_dev(g0, ellipse3);
    			append_dev(g0, rect3);
    			append_dev(g1, rect4);
    			append_dev(g1, rect5);
    			append_dev(svg, g2);
    			append_dev(g2, path0);
    			append_dev(svg, g3);
    			append_dev(g3, ellipse4);
    			append_dev(g3, path1);
    			append_dev(g3, ellipse5);
    			append_dev(g3, ellipse6);
    			append_dev(g3, path2);
    			append_dev(g3, ellipse7);
    			append_dev(g3, ellipse8);
    			append_dev(g3, path3);
    			append_dev(g3, ellipse9);
    			append_dev(svg, g4);
    			append_dev(g4, ellipse10);
    			append_dev(g4, rect6);
    			append_dev(g4, ellipse11);
    			append_dev(g4, path4);
    			append_dev(div0, t2);
    			append_dev(div0, h2);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*introRan*/ 1) {
    				toggle_class(div1, "fadeout", /*introRan*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let introRan = false;

    	let fadeScreen = () => {
    		setTimeout(
    			function () {
    				$$invalidate(0, introRan = true);
    			},
    			3000
    		);
    	};

    	fadeScreen();
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Header> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Header", $$slots, []);
    	$$self.$capture_state = () => ({ introRan, fadeScreen });

    	$$self.$inject_state = $$props => {
    		if ("introRan" in $$props) $$invalidate(0, introRan = $$props.introRan);
    		if ("fadeScreen" in $$props) fadeScreen = $$props.fadeScreen;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [introRan];
    }

    class Header extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Header",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    /* src/modules/List.svelte generated by Svelte v3.23.1 */

    const file$1 = "src/modules/List.svelte";

    function create_fragment$1(ctx) {
    	let div2;
    	let div0;
    	let t1;
    	let div1;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Coming soon...Stay tuned!";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = ":D";
    			attr_dev(div0, "class", "announcement svelte-1ki9w00");
    			add_location(div0, file$1, 15, 0, 284);
    			attr_dev(div1, "class", "buddy");
    			add_location(div1, file$1, 16, 0, 342);
    			attr_dev(div2, "class", "list-container svelte-1ki9w00");
    			add_location(div2, file$1, 14, 0, 255);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<List> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("List", $$slots, []);
    	return [];
    }

    class List extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "List",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.23.1 */
    const file$2 = "src/App.svelte";

    function create_fragment$2(ctx) {
    	let main;
    	let t0;
    	let t1;
    	let link;
    	let t2;
    	let meta;
    	let current;
    	const header = new Header({ $$inline: true });
    	const list = new List({ $$inline: true });

    	const block = {
    		c: function create() {
    			main = element("main");
    			create_component(header.$$.fragment);
    			t0 = space();
    			create_component(list.$$.fragment);
    			t1 = space();
    			link = element("link");
    			t2 = space();
    			meta = element("meta");
    			attr_dev(main, "class", "svelte-13lfj8d");
    			add_location(main, file$2, 4, 0, 109);
    			attr_dev(link, "href", "https://fonts.googleapis.com/css2?family=VT323&display=swap");
    			attr_dev(link, "rel", "stylesheet");
    			add_location(link, file$2, 9, 0, 143);
    			attr_dev(meta, "name", "viewport");
    			attr_dev(meta, "content", "width=device-width, initial-scale=1");
    			add_location(meta, file$2, 12, 0, 240);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			mount_component(header, main, null);
    			append_dev(main, t0);
    			mount_component(list, main, null);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, link, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, meta, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(header.$$.fragment, local);
    			transition_in(list.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(header.$$.fragment, local);
    			transition_out(list.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			destroy_component(header);
    			destroy_component(list);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(link);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(meta);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("App", $$slots, []);
    	$$self.$capture_state = () => ({ Header, List });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world'
    	}
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
