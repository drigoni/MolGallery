const {
  SvelteComponent: br,
  assign: gr,
  create_slot: pr,
  detach: vr,
  element: wr,
  get_all_dirty_from_scope: yr,
  get_slot_changes: Er,
  get_spread_update: Sr,
  init: Tr,
  insert: Ar,
  safe_not_equal: Hr,
  set_dynamic_element_data: yn,
  set_style: z,
  toggle_class: me,
  transition_in: Ii,
  transition_out: Ni,
  update_slot_base: Br
} = window.__gradio__svelte__internal;
function Cr(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[17].default
  ), l = pr(
    r,
    e,
    /*$$scope*/
    e[16],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      e[7]
    ) },
    { id: (
      /*elem_id*/
      e[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      e[3].join(" ") + " svelte-1t38q2d"
    }
  ], a = {};
  for (let s = 0; s < o.length; s += 1)
    a = gr(a, o[s]);
  return {
    c() {
      t = wr(
        /*tag*/
        e[14]
      ), l && l.c(), yn(
        /*tag*/
        e[14]
      )(t, a), me(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), me(
        t,
        "padded",
        /*padding*/
        e[6]
      ), me(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), me(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), z(t, "height", typeof /*height*/
      e[0] == "number" ? (
        /*height*/
        e[0] + "px"
      ) : void 0), z(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : void 0), z(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), z(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), z(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), z(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), z(t, "border-width", "var(--block-border-width)");
    },
    m(s, u) {
      Ar(s, t, u), l && l.m(t, null), i = !0;
    },
    p(s, u) {
      l && l.p && (!i || u & /*$$scope*/
      65536) && Br(
        l,
        r,
        s,
        /*$$scope*/
        s[16],
        i ? Er(
          r,
          /*$$scope*/
          s[16],
          u,
          null
        ) : yr(
          /*$$scope*/
          s[16]
        ),
        null
      ), yn(
        /*tag*/
        s[14]
      )(t, a = Sr(o, [
        (!i || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          s[7]
        ) },
        (!i || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          s[2]
        ) },
        (!i || u & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        s[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), me(
        t,
        "hidden",
        /*visible*/
        s[10] === !1
      ), me(
        t,
        "padded",
        /*padding*/
        s[6]
      ), me(
        t,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), me(t, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), u & /*height*/
      1 && z(t, "height", typeof /*height*/
      s[0] == "number" ? (
        /*height*/
        s[0] + "px"
      ) : void 0), u & /*width*/
      2 && z(t, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : void 0), u & /*variant*/
      16 && z(
        t,
        "border-style",
        /*variant*/
        s[4]
      ), u & /*allow_overflow*/
      2048 && z(
        t,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && z(
        t,
        "flex-grow",
        /*scale*/
        s[12]
      ), u & /*min_width*/
      8192 && z(t, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      i || (Ii(l, s), i = !0);
    },
    o(s) {
      Ni(l, s), i = !1;
    },
    d(s) {
      s && vr(t), l && l.d(s);
    }
  };
}
function Pr(e) {
  let t, n = (
    /*tag*/
    e[14] && Cr(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(i, r) {
      n && n.m(i, r), t = !0;
    },
    p(i, [r]) {
      /*tag*/
      i[14] && n.p(i, r);
    },
    i(i) {
      t || (Ii(n, i), t = !0);
    },
    o(i) {
      Ni(n, i), t = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Ir(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { height: l = void 0 } = t, { width: o = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: s = [] } = t, { variant: u = "solid" } = t, { border_mode: f = "base" } = t, { padding: c = !0 } = t, { type: h = "normal" } = t, { test_id: _ = void 0 } = t, { explicit_call: m = !1 } = t, { container: H = !0 } = t, { visible: E = !0 } = t, { allow_overflow: w = !0 } = t, { scale: g = null } = t, { min_width: b = 0 } = t, d = h === "fieldset" ? "fieldset" : "div";
  return e.$$set = (v) => {
    "height" in v && n(0, l = v.height), "width" in v && n(1, o = v.width), "elem_id" in v && n(2, a = v.elem_id), "elem_classes" in v && n(3, s = v.elem_classes), "variant" in v && n(4, u = v.variant), "border_mode" in v && n(5, f = v.border_mode), "padding" in v && n(6, c = v.padding), "type" in v && n(15, h = v.type), "test_id" in v && n(7, _ = v.test_id), "explicit_call" in v && n(8, m = v.explicit_call), "container" in v && n(9, H = v.container), "visible" in v && n(10, E = v.visible), "allow_overflow" in v && n(11, w = v.allow_overflow), "scale" in v && n(12, g = v.scale), "min_width" in v && n(13, b = v.min_width), "$$scope" in v && n(16, r = v.$$scope);
  }, [
    l,
    o,
    a,
    s,
    u,
    f,
    c,
    _,
    m,
    H,
    E,
    w,
    g,
    b,
    d,
    h,
    r,
    i
  ];
}
class Nr extends br {
  constructor(t) {
    super(), Tr(this, t, Ir, Pr, Hr, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Lr,
  append: Pt,
  attr: it,
  create_component: kr,
  destroy_component: Or,
  detach: Mr,
  element: En,
  init: Rr,
  insert: Dr,
  mount_component: Ur,
  safe_not_equal: xr,
  set_data: Gr,
  space: Fr,
  text: jr,
  toggle_class: de,
  transition_in: Vr,
  transition_out: qr
} = window.__gradio__svelte__internal;
function zr(e) {
  let t, n, i, r, l, o;
  return i = new /*Icon*/
  e[1]({}), {
    c() {
      t = En("label"), n = En("span"), kr(i.$$.fragment), r = Fr(), l = jr(
        /*label*/
        e[0]
      ), it(n, "class", "svelte-9gxdi0"), it(t, "for", ""), it(t, "data-testid", "block-label"), it(t, "class", "svelte-9gxdi0"), de(t, "hide", !/*show_label*/
      e[2]), de(t, "sr-only", !/*show_label*/
      e[2]), de(
        t,
        "float",
        /*float*/
        e[4]
      ), de(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(a, s) {
      Dr(a, t, s), Pt(t, n), Ur(i, n, null), Pt(t, r), Pt(t, l), o = !0;
    },
    p(a, [s]) {
      (!o || s & /*label*/
      1) && Gr(
        l,
        /*label*/
        a[0]
      ), (!o || s & /*show_label*/
      4) && de(t, "hide", !/*show_label*/
      a[2]), (!o || s & /*show_label*/
      4) && de(t, "sr-only", !/*show_label*/
      a[2]), (!o || s & /*float*/
      16) && de(
        t,
        "float",
        /*float*/
        a[4]
      ), (!o || s & /*disable*/
      8) && de(
        t,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      o || (Vr(i.$$.fragment, a), o = !0);
    },
    o(a) {
      qr(i.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Mr(t), Or(i);
    }
  };
}
function Xr(e, t, n) {
  let { label: i = null } = t, { Icon: r } = t, { show_label: l = !0 } = t, { disable: o = !1 } = t, { float: a = !0 } = t;
  return e.$$set = (s) => {
    "label" in s && n(0, i = s.label), "Icon" in s && n(1, r = s.Icon), "show_label" in s && n(2, l = s.show_label), "disable" in s && n(3, o = s.disable), "float" in s && n(4, a = s.float);
  }, [i, r, l, o, a];
}
class Zr extends Lr {
  constructor(t) {
    super(), Rr(this, t, Xr, zr, xr, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Wr,
  append: Zt,
  attr: fe,
  bubble: Qr,
  create_component: Jr,
  destroy_component: Yr,
  detach: Li,
  element: Wt,
  init: Kr,
  insert: ki,
  listen: $r,
  mount_component: el,
  safe_not_equal: tl,
  set_data: nl,
  set_style: rt,
  space: il,
  text: rl,
  toggle_class: Z,
  transition_in: ll,
  transition_out: ol
} = window.__gradio__svelte__internal;
function Sn(e) {
  let t, n;
  return {
    c() {
      t = Wt("span"), n = rl(
        /*label*/
        e[1]
      ), fe(t, "class", "svelte-lpi64a");
    },
    m(i, r) {
      ki(i, t, r), Zt(t, n);
    },
    p(i, r) {
      r & /*label*/
      2 && nl(
        n,
        /*label*/
        i[1]
      );
    },
    d(i) {
      i && Li(t);
    }
  };
}
function sl(e) {
  let t, n, i, r, l, o, a, s = (
    /*show_label*/
    e[2] && Sn(e)
  );
  return r = new /*Icon*/
  e[0]({}), {
    c() {
      t = Wt("button"), s && s.c(), n = il(), i = Wt("div"), Jr(r.$$.fragment), fe(i, "class", "svelte-lpi64a"), Z(
        i,
        "small",
        /*size*/
        e[4] === "small"
      ), Z(
        i,
        "large",
        /*size*/
        e[4] === "large"
      ), t.disabled = /*disabled*/
      e[7], fe(
        t,
        "aria-label",
        /*label*/
        e[1]
      ), fe(
        t,
        "aria-haspopup",
        /*hasPopup*/
        e[8]
      ), fe(
        t,
        "title",
        /*label*/
        e[1]
      ), fe(t, "class", "svelte-lpi64a"), Z(
        t,
        "pending",
        /*pending*/
        e[3]
      ), Z(
        t,
        "padded",
        /*padded*/
        e[5]
      ), Z(
        t,
        "highlight",
        /*highlight*/
        e[6]
      ), Z(
        t,
        "transparent",
        /*transparent*/
        e[9]
      ), rt(t, "color", !/*disabled*/
      e[7] && /*_color*/
      e[11] ? (
        /*_color*/
        e[11]
      ) : "var(--block-label-text-color)"), rt(t, "--bg-color", /*disabled*/
      e[7] ? "auto" : (
        /*background*/
        e[10]
      ));
    },
    m(u, f) {
      ki(u, t, f), s && s.m(t, null), Zt(t, n), Zt(t, i), el(r, i, null), l = !0, o || (a = $r(
        t,
        "click",
        /*click_handler*/
        e[13]
      ), o = !0);
    },
    p(u, [f]) {
      /*show_label*/
      u[2] ? s ? s.p(u, f) : (s = Sn(u), s.c(), s.m(t, n)) : s && (s.d(1), s = null), (!l || f & /*size*/
      16) && Z(
        i,
        "small",
        /*size*/
        u[4] === "small"
      ), (!l || f & /*size*/
      16) && Z(
        i,
        "large",
        /*size*/
        u[4] === "large"
      ), (!l || f & /*disabled*/
      128) && (t.disabled = /*disabled*/
      u[7]), (!l || f & /*label*/
      2) && fe(
        t,
        "aria-label",
        /*label*/
        u[1]
      ), (!l || f & /*hasPopup*/
      256) && fe(
        t,
        "aria-haspopup",
        /*hasPopup*/
        u[8]
      ), (!l || f & /*label*/
      2) && fe(
        t,
        "title",
        /*label*/
        u[1]
      ), (!l || f & /*pending*/
      8) && Z(
        t,
        "pending",
        /*pending*/
        u[3]
      ), (!l || f & /*padded*/
      32) && Z(
        t,
        "padded",
        /*padded*/
        u[5]
      ), (!l || f & /*highlight*/
      64) && Z(
        t,
        "highlight",
        /*highlight*/
        u[6]
      ), (!l || f & /*transparent*/
      512) && Z(
        t,
        "transparent",
        /*transparent*/
        u[9]
      ), f & /*disabled, _color*/
      2176 && rt(t, "color", !/*disabled*/
      u[7] && /*_color*/
      u[11] ? (
        /*_color*/
        u[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && rt(t, "--bg-color", /*disabled*/
      u[7] ? "auto" : (
        /*background*/
        u[10]
      ));
    },
    i(u) {
      l || (ll(r.$$.fragment, u), l = !0);
    },
    o(u) {
      ol(r.$$.fragment, u), l = !1;
    },
    d(u) {
      u && Li(t), s && s.d(), Yr(r), o = !1, a();
    }
  };
}
function al(e, t, n) {
  let i, { Icon: r } = t, { label: l = "" } = t, { show_label: o = !1 } = t, { pending: a = !1 } = t, { size: s = "small" } = t, { padded: u = !0 } = t, { highlight: f = !1 } = t, { disabled: c = !1 } = t, { hasPopup: h = !1 } = t, { color: _ = "var(--block-label-text-color)" } = t, { transparent: m = !1 } = t, { background: H = "var(--background-fill-primary)" } = t;
  function E(w) {
    Qr.call(this, e, w);
  }
  return e.$$set = (w) => {
    "Icon" in w && n(0, r = w.Icon), "label" in w && n(1, l = w.label), "show_label" in w && n(2, o = w.show_label), "pending" in w && n(3, a = w.pending), "size" in w && n(4, s = w.size), "padded" in w && n(5, u = w.padded), "highlight" in w && n(6, f = w.highlight), "disabled" in w && n(7, c = w.disabled), "hasPopup" in w && n(8, h = w.hasPopup), "color" in w && n(12, _ = w.color), "transparent" in w && n(9, m = w.transparent), "background" in w && n(10, H = w.background);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlight, color*/
    4160 && n(11, i = f ? "var(--color-accent)" : _);
  }, [
    r,
    l,
    o,
    a,
    s,
    u,
    f,
    c,
    h,
    m,
    H,
    i,
    _,
    E
  ];
}
class vt extends Wr {
  constructor(t) {
    super(), Kr(this, t, al, sl, tl, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: ul,
  append: fl,
  attr: It,
  binding_callbacks: cl,
  create_slot: hl,
  detach: _l,
  element: Tn,
  get_all_dirty_from_scope: ml,
  get_slot_changes: dl,
  init: bl,
  insert: gl,
  safe_not_equal: pl,
  toggle_class: be,
  transition_in: vl,
  transition_out: wl,
  update_slot_base: yl
} = window.__gradio__svelte__internal;
function El(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[5].default
  ), l = hl(
    r,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      t = Tn("div"), n = Tn("div"), l && l.c(), It(n, "class", "icon svelte-3w3rth"), It(t, "class", "empty svelte-3w3rth"), It(t, "aria-label", "Empty value"), be(
        t,
        "small",
        /*size*/
        e[0] === "small"
      ), be(
        t,
        "large",
        /*size*/
        e[0] === "large"
      ), be(
        t,
        "unpadded_box",
        /*unpadded_box*/
        e[1]
      ), be(
        t,
        "small_parent",
        /*parent_height*/
        e[3]
      );
    },
    m(o, a) {
      gl(o, t, a), fl(t, n), l && l.m(n, null), e[6](t), i = !0;
    },
    p(o, [a]) {
      l && l.p && (!i || a & /*$$scope*/
      16) && yl(
        l,
        r,
        o,
        /*$$scope*/
        o[4],
        i ? dl(
          r,
          /*$$scope*/
          o[4],
          a,
          null
        ) : ml(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!i || a & /*size*/
      1) && be(
        t,
        "small",
        /*size*/
        o[0] === "small"
      ), (!i || a & /*size*/
      1) && be(
        t,
        "large",
        /*size*/
        o[0] === "large"
      ), (!i || a & /*unpadded_box*/
      2) && be(
        t,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!i || a & /*parent_height*/
      8) && be(
        t,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      i || (vl(l, o), i = !0);
    },
    o(o) {
      wl(l, o), i = !1;
    },
    d(o) {
      o && _l(t), l && l.d(o), e[6](null);
    }
  };
}
function Sl(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], l = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = l(n)) : (r === "call" || r === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function Tl(e, t, n) {
  let i, { $$slots: r = {}, $$scope: l } = t, { size: o = "small" } = t, { unpadded_box: a = !1 } = t, s;
  function u(c) {
    if (!c)
      return !1;
    const { height: h } = c.getBoundingClientRect(), { height: _ } = Sl([
      c,
      "access",
      (m) => m.parentElement,
      "optionalAccess",
      (m) => m.getBoundingClientRect,
      "call",
      (m) => m()
    ]) || { height: h };
    return h > _ + 2;
  }
  function f(c) {
    cl[c ? "unshift" : "push"](() => {
      s = c, n(2, s);
    });
  }
  return e.$$set = (c) => {
    "size" in c && n(0, o = c.size), "unpadded_box" in c && n(1, a = c.unpadded_box), "$$scope" in c && n(4, l = c.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*el*/
    4 && n(3, i = u(s));
  }, [o, a, s, i, l, r, f];
}
class Al extends ul {
  constructor(t) {
    super(), bl(this, t, Tl, El, pl, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Hl,
  append: Nt,
  attr: K,
  detach: Bl,
  init: Cl,
  insert: Pl,
  noop: Lt,
  safe_not_equal: Il,
  set_style: ie,
  svg_element: lt
} = window.__gradio__svelte__internal;
function Nl(e) {
  let t, n, i, r;
  return {
    c() {
      t = lt("svg"), n = lt("g"), i = lt("path"), r = lt("path"), K(i, "d", "M18,6L6.087,17.913"), ie(i, "fill", "none"), ie(i, "fill-rule", "nonzero"), ie(i, "stroke-width", "2px"), K(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), K(r, "d", "M4.364,4.364L19.636,19.636"), ie(r, "fill", "none"), ie(r, "fill-rule", "nonzero"), ie(r, "stroke-width", "2px"), K(t, "width", "100%"), K(t, "height", "100%"), K(t, "viewBox", "0 0 24 24"), K(t, "version", "1.1"), K(t, "xmlns", "http://www.w3.org/2000/svg"), K(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), K(t, "xml:space", "preserve"), K(t, "stroke", "currentColor"), ie(t, "fill-rule", "evenodd"), ie(t, "clip-rule", "evenodd"), ie(t, "stroke-linecap", "round"), ie(t, "stroke-linejoin", "round");
    },
    m(l, o) {
      Pl(l, t, o), Nt(t, n), Nt(n, i), Nt(t, r);
    },
    p: Lt,
    i: Lt,
    o: Lt,
    d(l) {
      l && Bl(t);
    }
  };
}
class Ll extends Hl {
  constructor(t) {
    super(), Cl(this, t, null, Nl, Il, {});
  }
}
const {
  SvelteComponent: kl,
  append: Ol,
  attr: Ge,
  detach: Ml,
  init: Rl,
  insert: Dl,
  noop: kt,
  safe_not_equal: Ul,
  svg_element: An
} = window.__gradio__svelte__internal;
function xl(e) {
  let t, n;
  return {
    c() {
      t = An("svg"), n = An("path"), Ge(n, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Ge(n, "fill", "currentColor"), Ge(t, "id", "icon"), Ge(t, "xmlns", "http://www.w3.org/2000/svg"), Ge(t, "viewBox", "0 0 32 32");
    },
    m(i, r) {
      Dl(i, t, r), Ol(t, n);
    },
    p: kt,
    i: kt,
    o: kt,
    d(i) {
      i && Ml(t);
    }
  };
}
class Gl extends kl {
  constructor(t) {
    super(), Rl(this, t, null, xl, Ul, {});
  }
}
const {
  SvelteComponent: Fl,
  append: jl,
  attr: $,
  detach: Vl,
  init: ql,
  insert: zl,
  noop: Ot,
  safe_not_equal: Xl,
  svg_element: Hn
} = window.__gradio__svelte__internal;
function Zl(e) {
  let t, n;
  return {
    c() {
      t = Hn("svg"), n = Hn("path"), $(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), $(t, "xmlns", "http://www.w3.org/2000/svg"), $(t, "width", "100%"), $(t, "height", "100%"), $(t, "viewBox", "0 0 24 24"), $(t, "fill", "none"), $(t, "stroke", "currentColor"), $(t, "stroke-width", "1.5"), $(t, "stroke-linecap", "round"), $(t, "stroke-linejoin", "round"), $(t, "class", "feather feather-edit-2");
    },
    m(i, r) {
      zl(i, t, r), jl(t, n);
    },
    p: Ot,
    i: Ot,
    o: Ot,
    d(i) {
      i && Vl(t);
    }
  };
}
class Wl extends Fl {
  constructor(t) {
    super(), ql(this, t, null, Zl, Xl, {});
  }
}
const {
  SvelteComponent: Ql,
  append: Mt,
  attr: D,
  detach: Jl,
  init: Yl,
  insert: Kl,
  noop: Rt,
  safe_not_equal: $l,
  svg_element: ot
} = window.__gradio__svelte__internal;
function eo(e) {
  let t, n, i, r;
  return {
    c() {
      t = ot("svg"), n = ot("rect"), i = ot("circle"), r = ot("polyline"), D(n, "x", "3"), D(n, "y", "3"), D(n, "width", "18"), D(n, "height", "18"), D(n, "rx", "2"), D(n, "ry", "2"), D(i, "cx", "8.5"), D(i, "cy", "8.5"), D(i, "r", "1.5"), D(r, "points", "21 15 16 10 5 21"), D(t, "xmlns", "http://www.w3.org/2000/svg"), D(t, "width", "100%"), D(t, "height", "100%"), D(t, "viewBox", "0 0 24 24"), D(t, "fill", "none"), D(t, "stroke", "currentColor"), D(t, "stroke-width", "1.5"), D(t, "stroke-linecap", "round"), D(t, "stroke-linejoin", "round"), D(t, "class", "feather feather-image");
    },
    m(l, o) {
      Kl(l, t, o), Mt(t, n), Mt(t, i), Mt(t, r);
    },
    p: Rt,
    i: Rt,
    o: Rt,
    d(l) {
      l && Jl(t);
    }
  };
}
class Oi extends Ql {
  constructor(t) {
    super(), Yl(this, t, null, eo, $l, {});
  }
}
const {
  SvelteComponent: to,
  append: Bn,
  attr: W,
  detach: no,
  init: io,
  insert: ro,
  noop: Dt,
  safe_not_equal: lo,
  svg_element: Ut
} = window.__gradio__svelte__internal;
function oo(e) {
  let t, n, i;
  return {
    c() {
      t = Ut("svg"), n = Ut("polyline"), i = Ut("path"), W(n, "points", "1 4 1 10 7 10"), W(i, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), W(t, "xmlns", "http://www.w3.org/2000/svg"), W(t, "width", "100%"), W(t, "height", "100%"), W(t, "viewBox", "0 0 24 24"), W(t, "fill", "none"), W(t, "stroke", "currentColor"), W(t, "stroke-width", "2"), W(t, "stroke-linecap", "round"), W(t, "stroke-linejoin", "round"), W(t, "class", "feather feather-rotate-ccw");
    },
    m(r, l) {
      ro(r, t, l), Bn(t, n), Bn(t, i);
    },
    p: Dt,
    i: Dt,
    o: Dt,
    d(r) {
      r && no(t);
    }
  };
}
class so extends to {
  constructor(t) {
    super(), io(this, t, null, oo, lo, {});
  }
}
const ao = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Cn = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
ao.reduce(
  (e, { color: t, primary: n, secondary: i }) => ({
    ...e,
    [t]: {
      primary: Cn[t][n],
      secondary: Cn[t][i]
    }
  }),
  {}
);
function uo(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], l = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = l(n)) : (r === "call" || r === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
class ft extends Error {
  constructor(t) {
    super(t), this.name = "ShareError";
  }
}
async function fo(e, t) {
  if (window.__gradio_space__ == null)
    throw new ft("Must be on Spaces to share.");
  let n, i, r;
  if (t === "url") {
    const s = await fetch(e);
    n = await s.blob(), i = s.headers.get("content-type") || "", r = s.headers.get("content-disposition") || "";
  } else
    n = co(e), i = e.split(";")[0].split(":")[1], r = "file" + i.split("/")[1];
  const l = new File([n], r, { type: i }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: l,
    headers: {
      "Content-Type": l.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if (uo([o, "access", (s) => s.headers, "access", (s) => s.get, "call", (s) => s("content-type"), "optionalAccess", (s) => s.includes, "call", (s) => s("application/json")])) {
      const s = await o.json();
      throw new ft(`Upload failed: ${s.error}`);
    }
    throw new ft("Upload failed.");
  }
  return await o.text();
}
function co(e) {
  for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], i = atob(t[1]), r = i.length, l = new Uint8Array(r); r--; )
    l[r] = i.charCodeAt(r);
  return new Blob([l], { type: n });
}
const {
  SvelteComponent: ho,
  create_component: _o,
  destroy_component: mo,
  init: bo,
  mount_component: go,
  safe_not_equal: po,
  transition_in: vo,
  transition_out: wo
} = window.__gradio__svelte__internal, { createEventDispatcher: yo } = window.__gradio__svelte__internal;
function Eo(e) {
  let t, n;
  return t = new vt({
    props: {
      Icon: Gl,
      label: (
        /*i18n*/
        e[2]("common.share")
      ),
      pending: (
        /*pending*/
        e[3]
      )
    }
  }), t.$on(
    "click",
    /*click_handler*/
    e[5]
  ), {
    c() {
      _o(t.$$.fragment);
    },
    m(i, r) {
      go(t, i, r), n = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*i18n*/
      4 && (l.label = /*i18n*/
      i[2]("common.share")), r & /*pending*/
      8 && (l.pending = /*pending*/
      i[3]), t.$set(l);
    },
    i(i) {
      n || (vo(t.$$.fragment, i), n = !0);
    },
    o(i) {
      wo(t.$$.fragment, i), n = !1;
    },
    d(i) {
      mo(t, i);
    }
  };
}
function So(e, t, n) {
  const i = yo();
  let { formatter: r } = t, { value: l } = t, { i18n: o } = t, a = !1;
  const s = async () => {
    try {
      n(3, a = !0);
      const u = await r(l);
      i("share", { description: u });
    } catch (u) {
      console.error(u);
      let f = u instanceof ft ? u.message : "Share failed.";
      i("error", f);
    } finally {
      n(3, a = !1);
    }
  };
  return e.$$set = (u) => {
    "formatter" in u && n(0, r = u.formatter), "value" in u && n(1, l = u.value), "i18n" in u && n(2, o = u.i18n);
  }, [r, l, o, a, i, s];
}
class To extends ho {
  constructor(t) {
    super(), bo(this, t, So, Eo, po, { formatter: 0, value: 1, i18n: 2 });
  }
}
new Intl.Collator(0, { numeric: 1 }).compare;
function Mi(e, t, n) {
  if (e == null)
    return null;
  if (Array.isArray(e)) {
    const i = [];
    for (const r of e)
      r == null ? i.push(null) : i.push(Mi(r, t, n));
    return i;
  }
  return e.is_stream ? n == null ? new xt({
    ...e,
    url: t + "/stream/" + e.path
  }) : new xt({
    ...e,
    url: "/proxy=" + n + "stream/" + e.path
  }) : new xt({
    ...e,
    url: Ho(e.path, t, n)
  });
}
function Ao(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function Ho(e, t, n) {
  return e == null ? n ? `/proxy=${n}file=` : `${t}/file=` : Ao(e) ? e : n ? `/proxy=${n}file=${e}` : `${t}/file=${e}`;
}
class xt {
  constructor({
    path: t,
    url: n,
    orig_name: i,
    size: r,
    blob: l,
    is_stream: o,
    mime_type: a,
    alt_text: s
  }) {
    this.path = t, this.url = n, this.orig_name = i, this.size = r, this.blob = n ? void 0 : l, this.is_stream = o, this.mime_type = a, this.alt_text = s;
  }
}
function Ee() {
}
function Bo(e) {
  return e();
}
function Co(e) {
  e.forEach(Bo);
}
function Po(e) {
  return typeof e == "function";
}
function Io(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function No(e, ...t) {
  if (e == null) {
    for (const i of t)
      i(void 0);
    return Ee;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Ri = typeof window < "u";
let Pn = Ri ? () => window.performance.now() : () => Date.now(), Di = Ri ? (e) => requestAnimationFrame(e) : Ee;
const Be = /* @__PURE__ */ new Set();
function Ui(e) {
  Be.forEach((t) => {
    t.c(e) || (Be.delete(t), t.f());
  }), Be.size !== 0 && Di(Ui);
}
function Lo(e) {
  let t;
  return Be.size === 0 && Di(Ui), {
    promise: new Promise((n) => {
      Be.add(t = { c: e, f: n });
    }),
    abort() {
      Be.delete(t);
    }
  };
}
const Ae = [];
function ko(e, t) {
  return {
    subscribe: Ze(e, t).subscribe
  };
}
function Ze(e, t = Ee) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Io(e, a) && (e = a, n)) {
      const s = !Ae.length;
      for (const u of i)
        u[1](), Ae.push(u, e);
      if (s) {
        for (let u = 0; u < Ae.length; u += 2)
          Ae[u][0](Ae[u + 1]);
        Ae.length = 0;
      }
    }
  }
  function l(a) {
    r(a(e));
  }
  function o(a, s = Ee) {
    const u = [a, s];
    return i.add(u), i.size === 1 && (n = t(r, l) || Ee), a(e), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: o };
}
function Me(e, t, n) {
  const i = !Array.isArray(e), r = i ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const l = t.length < 2;
  return ko(n, (o, a) => {
    let s = !1;
    const u = [];
    let f = 0, c = Ee;
    const h = () => {
      if (f)
        return;
      c();
      const m = t(i ? u[0] : u, o, a);
      l ? o(m) : c = Po(m) ? m : Ee;
    }, _ = r.map(
      (m, H) => No(
        m,
        (E) => {
          u[H] = E, f &= ~(1 << H), s && h();
        },
        () => {
          f |= 1 << H;
        }
      )
    );
    return s = !0, h(), function() {
      Co(_), c(), s = !1;
    };
  });
}
function In(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Qt(e, t, n, i) {
  if (typeof n == "number" || In(n)) {
    const r = i - n, l = (n - t) / (e.dt || 1 / 60), o = e.opts.stiffness * r, a = e.opts.damping * l, s = (o - a) * e.inv_mass, u = (l + s) * e.dt;
    return Math.abs(u) < e.opts.precision && Math.abs(r) < e.opts.precision ? i : (e.settled = !1, In(n) ? new Date(n.getTime() + u) : n + u);
  } else {
    if (Array.isArray(n))
      return n.map(
        (r, l) => Qt(e, t[l], n[l], i[l])
      );
    if (typeof n == "object") {
      const r = {};
      for (const l in n)
        r[l] = Qt(e, t[l], n[l], i[l]);
      return r;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Nn(e, t = {}) {
  const n = Ze(e), { stiffness: i = 0.15, damping: r = 0.8, precision: l = 0.01 } = t;
  let o, a, s, u = e, f = e, c = 1, h = 0, _ = !1;
  function m(E, w = {}) {
    f = E;
    const g = s = {};
    return e == null || w.hard || H.stiffness >= 1 && H.damping >= 1 ? (_ = !0, o = Pn(), u = E, n.set(e = f), Promise.resolve()) : (w.soft && (h = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), c = 0), a || (o = Pn(), _ = !1, a = Lo((b) => {
      if (_)
        return _ = !1, a = null, !1;
      c = Math.min(c + h, 1);
      const d = {
        inv_mass: c,
        opts: H,
        settled: !0,
        dt: (b - o) * 60 / 1e3
      }, v = Qt(d, u, e, f);
      return o = b, u = e, n.set(e = v), d.settled && (a = null), !d.settled;
    })), new Promise((b) => {
      a.promise.then(() => {
        g === s && b();
      });
    }));
  }
  const H = {
    set: m,
    update: (E, w) => m(E(f, e), w),
    subscribe: n.subscribe,
    stiffness: i,
    damping: r,
    precision: l
  };
  return H;
}
function Oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mo = function(t) {
  return Ro(t) && !Do(t);
};
function Ro(e) {
  return !!e && typeof e == "object";
}
function Do(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Go(e);
}
var Uo = typeof Symbol == "function" && Symbol.for, xo = Uo ? Symbol.for("react.element") : 60103;
function Go(e) {
  return e.$$typeof === xo;
}
function Fo(e) {
  return Array.isArray(e) ? [] : {};
}
function qe(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Ce(Fo(e), e, t) : e;
}
function jo(e, t, n) {
  return e.concat(t).map(function(i) {
    return qe(i, n);
  });
}
function Vo(e, t) {
  if (!t.customMerge)
    return Ce;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Ce;
}
function qo(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Ln(e) {
  return Object.keys(e).concat(qo(e));
}
function xi(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function zo(e, t) {
  return xi(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Xo(e, t, n) {
  var i = {};
  return n.isMergeableObject(e) && Ln(e).forEach(function(r) {
    i[r] = qe(e[r], n);
  }), Ln(t).forEach(function(r) {
    zo(e, r) || (xi(e, r) && n.isMergeableObject(t[r]) ? i[r] = Vo(r, n)(e[r], t[r], n) : i[r] = qe(t[r], n));
  }), i;
}
function Ce(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || jo, n.isMergeableObject = n.isMergeableObject || Mo, n.cloneUnlessOtherwiseSpecified = qe;
  var i = Array.isArray(t), r = Array.isArray(e), l = i === r;
  return l ? i ? n.arrayMerge(e, t, n) : Xo(e, t, n) : qe(t, n);
}
Ce.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, r) {
    return Ce(i, r, n);
  }, {});
};
var Zo = Ce, Wo = Zo;
const Qo = /* @__PURE__ */ Oo(Wo);
var Jt = function(e, t) {
  return Jt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Jt(e, t);
};
function wt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Jt(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var N = function() {
  return N = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
    }
    return t;
  }, N.apply(this, arguments);
};
function Gt(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, l; i < r; i++)
      (l || !(i in t)) && (l || (l = Array.prototype.slice.call(t, 0, i)), l[i] = t[i]);
  return e.concat(l || Array.prototype.slice.call(t));
}
var C;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(C || (C = {}));
var L;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(L || (L = {}));
var Pe;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Pe || (Pe = {}));
function kn(e) {
  return e.type === L.literal;
}
function Jo(e) {
  return e.type === L.argument;
}
function Gi(e) {
  return e.type === L.number;
}
function Fi(e) {
  return e.type === L.date;
}
function ji(e) {
  return e.type === L.time;
}
function Vi(e) {
  return e.type === L.select;
}
function qi(e) {
  return e.type === L.plural;
}
function Yo(e) {
  return e.type === L.pound;
}
function zi(e) {
  return e.type === L.tag;
}
function Xi(e) {
  return !!(e && typeof e == "object" && e.type === Pe.number);
}
function Yt(e) {
  return !!(e && typeof e == "object" && e.type === Pe.dateTime);
}
var Zi = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ko = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function $o(e) {
  var t = {};
  return e.replace(Ko, function(n) {
    var i = n.length;
    switch (n[0]) {
      case "G":
        t.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var es = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ts(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(es).filter(function(h) {
    return h.length > 0;
  }), n = [], i = 0, r = t; i < r.length; i++) {
    var l = r[i], o = l.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = o[0], s = o.slice(1), u = 0, f = s; u < f.length; u++) {
      var c = f[u];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: s });
  }
  return n;
}
function ns(e) {
  return e.replace(/^(.*?)-/, "");
}
var On = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Wi = /^(@+)?(\+|#+)?[rs]?$/g, is = /(\*)(0+)|(#+)(0+)|(0+)/g, Qi = /^(0+)$/;
function Mn(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Wi, function(n, i, r) {
    return typeof r != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : r === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), t;
}
function Ji(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function rs(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Qi.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Rn(e) {
  var t = {}, n = Ji(e);
  return n || t;
}
function ls(e) {
  for (var t = {}, n = 0, i = e; n < i.length; n++) {
    var r = i[n];
    switch (r.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = ns(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = N(N(N({}, t), { notation: "scientific" }), r.options.reduce(function(s, u) {
          return N(N({}, s), Rn(u));
        }, {}));
        continue;
      case "engineering":
        t = N(N(N({}, t), { notation: "engineering" }), r.options.reduce(function(s, u) {
          return N(N({}, s), Rn(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(r.options[0]);
        continue;
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace(is, function(s, u, f, c, h, _) {
          if (u)
            t.minimumIntegerDigits = f.length;
          else {
            if (c && h)
              throw new Error("We currently do not support maximum integer digits");
            if (_)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Qi.test(r.stem)) {
      t.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (On.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(On, function(s, u, f, c, h, _) {
        return f === "*" ? t.minimumFractionDigits = u.length : c && c[0] === "#" ? t.maximumFractionDigits = c.length : h && _ ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + _.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var l = r.options[0];
      l === "w" ? t = N(N({}, t), { trailingZeroDisplay: "stripIfInteger" }) : l && (t = N(N({}, t), Mn(l)));
      continue;
    }
    if (Wi.test(r.stem)) {
      t = N(N({}, t), Mn(r.stem));
      continue;
    }
    var o = Ji(r.stem);
    o && (t = N(N({}, t), o));
    var a = rs(r.stem);
    a && (t = N(N({}, t), a));
  }
  return t;
}
var st = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function os(e, t) {
  for (var n = "", i = 0; i < e.length; i++) {
    var r = e.charAt(i);
    if (r === "j") {
      for (var l = 0; i + 1 < e.length && e.charAt(i + 1) === r; )
        l++, i++;
      var o = 1 + (l & 1), a = l < 2 ? 1 : 3 + (l >> 1), s = "a", u = ss(t);
      for ((u == "H" || u == "k") && (a = 0); a-- > 0; )
        n += s;
      for (; o-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function ss(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, i;
  n !== "root" && (i = e.maximize().region);
  var r = st[i || ""] || st[n || ""] || st["".concat(n, "-001")] || st["001"];
  return r[0];
}
var Ft, as = new RegExp("^".concat(Zi.source, "*")), us = new RegExp("".concat(Zi.source, "*$"));
function P(e, t) {
  return { start: e, end: t };
}
var fs = !!String.prototype.startsWith, cs = !!String.fromCodePoint, hs = !!Object.fromEntries, _s = !!String.prototype.codePointAt, ms = !!String.prototype.trimStart, ds = !!String.prototype.trimEnd, bs = !!Number.isSafeInteger, gs = bs ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Kt = !0;
try {
  var ps = Ki("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Kt = ((Ft = ps.exec("a")) === null || Ft === void 0 ? void 0 : Ft[0]) === "a";
} catch {
  Kt = !1;
}
var Dn = fs ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), $t = cs ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var i = "", r = t.length, l = 0, o; r > l; ) {
      if (o = t[l++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      i += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return i;
  }
), Un = (
  // native
  hs ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, r = t; i < r.length; i++) {
        var l = r[i], o = l[0], a = l[1];
        n[o] = a;
      }
      return n;
    }
  )
), Yi = _s ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var i = t.length;
    if (!(n < 0 || n >= i)) {
      var r = t.charCodeAt(n), l;
      return r < 55296 || r > 56319 || n + 1 === i || (l = t.charCodeAt(n + 1)) < 56320 || l > 57343 ? r : (r - 55296 << 10) + (l - 56320) + 65536;
    }
  }
), vs = ms ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(as, "");
  }
), ws = ds ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(us, "");
  }
);
function Ki(e, t) {
  return new RegExp(e, t);
}
var en;
if (Kt) {
  var xn = Ki("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  en = function(t, n) {
    var i;
    xn.lastIndex = n;
    var r = xn.exec(t);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  en = function(t, n) {
    for (var i = []; ; ) {
      var r = Yi(t, n);
      if (r === void 0 || $i(r) || Ts(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return $t.apply(void 0, i);
  };
var ys = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, i) {
      for (var r = []; !this.isEOF(); ) {
        var l = this.char();
        if (l === 123) {
          var o = this.parseArgument(t, i);
          if (o.err)
            return o;
          r.push(o.val);
        } else {
          if (l === 125 && t > 0)
            break;
          if (l === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), r.push({
              type: L.pound,
              location: P(a, this.clonePosition())
            });
          } else if (l === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(C.UNMATCHED_CLOSING_TAG, P(this.clonePosition(), this.clonePosition()));
          } else if (l === 60 && !this.ignoreTag && tn(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            r.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            r.push(o.val);
          }
        }
      }
      return { val: r, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var i = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: L.literal,
            value: "<".concat(r, "/>"),
            location: P(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var l = this.parseMessage(t + 1, n, !0);
        if (l.err)
          return l;
        var o = l.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !tn(this.char()))
            return this.error(C.INVALID_TAG, P(a, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(C.UNMATCHED_CLOSING_TAG, P(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: L.tag,
              value: r,
              children: o,
              location: P(i, this.clonePosition())
            },
            err: null
          } : this.error(C.INVALID_TAG, P(a, this.clonePosition())));
        } else
          return this.error(C.UNCLOSED_TAG, P(i, this.clonePosition()));
      } else
        return this.error(C.INVALID_TAG, P(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Ss(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var l = this.tryParseQuote(n);
        if (l) {
          r += l;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          r += o;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          r += a;
          continue;
        }
        break;
      }
      var s = P(i, this.clonePosition());
      return {
        val: { type: L.literal, value: r, location: s },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Es(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return $t.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), $t(i));
    }, e.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(C.EXPECT_ARGUMENT_CLOSING_BRACE, P(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(C.EMPTY_ARGUMENT, P(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(C.MALFORMED_ARGUMENT, P(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(C.EXPECT_ARGUMENT_CLOSING_BRACE, P(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: L.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: P(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(C.EXPECT_ARGUMENT_CLOSING_BRACE, P(i, this.clonePosition())) : this.parseArgumentOptions(t, n, r, i);
        default:
          return this.error(C.MALFORMED_ARGUMENT, P(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = en(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var l = this.clonePosition(), o = P(t, l);
      return { value: i, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, i, r) {
      var l, o = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (a) {
        case "":
          return this.error(C.EXPECT_ARGUMENT_TYPE, P(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var h = ws(c.val);
            if (h.length === 0)
              return this.error(C.EXPECT_ARGUMENT_STYLE, P(this.clonePosition(), this.clonePosition()));
            var _ = P(f, this.clonePosition());
            u = { style: h, styleLocation: _ };
          }
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var H = P(r, this.clonePosition());
          if (u && Dn(u == null ? void 0 : u.style, "::", 0)) {
            var E = vs(u.style.slice(2));
            if (a === "number") {
              var c = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return c.err ? c : {
                val: { type: L.number, value: i, location: H, style: c.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(C.EXPECT_DATE_TIME_SKELETON, H);
              var w = E;
              this.locale && (w = os(E, this.locale));
              var h = {
                type: Pe.dateTime,
                pattern: w,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? $o(w) : {}
              }, g = a === "date" ? L.date : L.time;
              return {
                val: { type: g, value: i, location: H, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? L.number : a === "date" ? L.date : L.time,
              value: i,
              location: H,
              style: (l = u == null ? void 0 : u.style) !== null && l !== void 0 ? l : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var b = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(C.EXPECT_SELECT_ARGUMENT_OPTIONS, P(b, N({}, b)));
          this.bumpSpace();
          var d = this.parseIdentifierIfPossible(), v = 0;
          if (a !== "select" && d.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(C.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(C.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, C.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), d = this.parseIdentifierIfPossible(), v = c.val;
          }
          var k = this.tryParsePluralOrSelectOptions(t, a, n, d);
          if (k.err)
            return k;
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var R = P(r, this.clonePosition());
          return a === "select" ? {
            val: {
              type: L.select,
              value: i,
              options: Un(k.val),
              location: R
            },
            err: null
          } : {
            val: {
              type: L.plural,
              value: i,
              options: Un(k.val),
              offset: v,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: R
            },
            err: null
          };
        }
        default:
          return this.error(C.INVALID_ARGUMENT_TYPE, P(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(C.EXPECT_ARGUMENT_CLOSING_BRACE, P(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(C.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, P(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var i = [];
      try {
        i = ts(t);
      } catch {
        return this.error(C.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Pe.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ls(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, i, r) {
      for (var l, o = !1, a = [], s = /* @__PURE__ */ new Set(), u = r.value, f = r.location; ; ) {
        if (u.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(C.EXPECT_PLURAL_ARGUMENT_SELECTOR, C.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            f = P(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? C.DUPLICATE_SELECT_ARGUMENT_SELECTOR : C.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (o = !0), this.bumpSpace();
        var _ = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? C.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : C.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, P(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(t + 1, n, i);
        if (m.err)
          return m;
        var H = this.tryParseArgumentClose(_);
        if (H.err)
          return H;
        a.push([
          u,
          {
            value: m.val,
            location: P(_, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), l = this.parseIdentifierIfPossible(), u = l.value, f = l.location;
      }
      return a.length === 0 ? this.error(n === "select" ? C.EXPECT_SELECT_ARGUMENT_SELECTOR : C.EXPECT_PLURAL_ARGUMENT_SELECTOR, P(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(C.MISSING_OTHER_CLAUSE, P(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var l = !1, o = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          l = !0, o = o * 10 + (a - 48), this.bump();
        else
          break;
      }
      var s = P(r, this.clonePosition());
      return l ? (o *= i, gs(o) ? { val: o, err: null } : this.error(n, s)) : this.error(t, s);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Yi(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Dn(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), i = this.message.indexOf(t, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && $i(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function tn(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Es(e) {
  return tn(e) || e === 47;
}
function Ss(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function $i(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ts(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function nn(e) {
  e.forEach(function(t) {
    if (delete t.location, Vi(t) || qi(t))
      for (var n in t.options)
        delete t.options[n].location, nn(t.options[n].value);
    else
      Gi(t) && Xi(t.style) || (Fi(t) || ji(t)) && Yt(t.style) ? delete t.style.location : zi(t) && nn(t.children);
  });
}
function As(e, t) {
  t === void 0 && (t = {}), t = N({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new ys(e, t).parse();
  if (n.err) {
    var i = SyntaxError(C[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t != null && t.captureLocation || nn(n.val), n.val;
}
function jt(e, t) {
  var n = t && t.cache ? t.cache : Ns, i = t && t.serializer ? t.serializer : Is, r = t && t.strategy ? t.strategy : Bs;
  return r(e, {
    cache: n,
    serializer: i
  });
}
function Hs(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function er(e, t, n, i) {
  var r = Hs(i) ? i : n(i), l = t.get(r);
  return typeof l > "u" && (l = e.call(this, i), t.set(r, l)), l;
}
function tr(e, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), l = t.get(r);
  return typeof l > "u" && (l = e.apply(this, i), t.set(r, l)), l;
}
function hn(e, t, n, i, r) {
  return n.bind(t, e, i, r);
}
function Bs(e, t) {
  var n = e.length === 1 ? er : tr;
  return hn(e, this, n, t.cache.create(), t.serializer);
}
function Cs(e, t) {
  return hn(e, this, tr, t.cache.create(), t.serializer);
}
function Ps(e, t) {
  return hn(e, this, er, t.cache.create(), t.serializer);
}
var Is = function() {
  return JSON.stringify(arguments);
};
function _n() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
_n.prototype.get = function(e) {
  return this.cache[e];
};
_n.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Ns = {
  create: function() {
    return new _n();
  }
}, Vt = {
  variadic: Cs,
  monadic: Ps
}, Ie;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Ie || (Ie = {}));
var yt = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i, r) {
      var l = e.call(this, n) || this;
      return l.code = i, l.originalMessage = r, l;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Gn = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i, r, l) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Ie.INVALID_VALUE, l) || this;
    }
    return t;
  }(yt)
), Ls = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i, r) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), Ie.INVALID_VALUE, r) || this;
    }
    return t;
  }(yt)
), ks = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), Ie.MISSING_VALUE, i) || this;
    }
    return t;
  }(yt)
), F;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(F || (F = {}));
function Os(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== F.literal || n.type !== F.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function Ms(e) {
  return typeof e == "function";
}
function ct(e, t, n, i, r, l, o) {
  if (e.length === 1 && kn(e[0]))
    return [
      {
        type: F.literal,
        value: e[0].value
      }
    ];
  for (var a = [], s = 0, u = e; s < u.length; s++) {
    var f = u[s];
    if (kn(f)) {
      a.push({
        type: F.literal,
        value: f.value
      });
      continue;
    }
    if (Yo(f)) {
      typeof l == "number" && a.push({
        type: F.literal,
        value: n.getNumberFormat(t).format(l)
      });
      continue;
    }
    var c = f.value;
    if (!(r && c in r))
      throw new ks(c, o);
    var h = r[c];
    if (Jo(f)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), a.push({
        type: typeof h == "string" ? F.literal : F.object,
        value: h
      });
      continue;
    }
    if (Fi(f)) {
      var _ = typeof f.style == "string" ? i.date[f.style] : Yt(f.style) ? f.style.parsedOptions : void 0;
      a.push({
        type: F.literal,
        value: n.getDateTimeFormat(t, _).format(h)
      });
      continue;
    }
    if (ji(f)) {
      var _ = typeof f.style == "string" ? i.time[f.style] : Yt(f.style) ? f.style.parsedOptions : i.time.medium;
      a.push({
        type: F.literal,
        value: n.getDateTimeFormat(t, _).format(h)
      });
      continue;
    }
    if (Gi(f)) {
      var _ = typeof f.style == "string" ? i.number[f.style] : Xi(f.style) ? f.style.parsedOptions : void 0;
      _ && _.scale && (h = h * (_.scale || 1)), a.push({
        type: F.literal,
        value: n.getNumberFormat(t, _).format(h)
      });
      continue;
    }
    if (zi(f)) {
      var m = f.children, H = f.value, E = r[H];
      if (!Ms(E))
        throw new Ls(H, "function", o);
      var w = ct(m, t, n, i, r, l), g = E(w.map(function(v) {
        return v.value;
      }));
      Array.isArray(g) || (g = [g]), a.push.apply(a, g.map(function(v) {
        return {
          type: typeof v == "string" ? F.literal : F.object,
          value: v
        };
      }));
    }
    if (Vi(f)) {
      var b = f.options[h] || f.options.other;
      if (!b)
        throw new Gn(f.value, h, Object.keys(f.options), o);
      a.push.apply(a, ct(b.value, t, n, i, r));
      continue;
    }
    if (qi(f)) {
      var b = f.options["=".concat(h)];
      if (!b) {
        if (!Intl.PluralRules)
          throw new yt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ie.MISSING_INTL_API, o);
        var d = n.getPluralRules(t, { type: f.pluralType }).select(h - (f.offset || 0));
        b = f.options[d] || f.options.other;
      }
      if (!b)
        throw new Gn(f.value, h, Object.keys(f.options), o);
      a.push.apply(a, ct(b.value, t, n, i, r, h - (f.offset || 0)));
      continue;
    }
  }
  return Os(a);
}
function Rs(e, t) {
  return t ? N(N(N({}, e || {}), t || {}), Object.keys(e).reduce(function(n, i) {
    return n[i] = N(N({}, e[i]), t[i] || {}), n;
  }, {})) : e;
}
function Ds(e, t) {
  return t ? Object.keys(e).reduce(function(n, i) {
    return n[i] = Rs(e[i], t[i]), n;
  }, N({}, e)) : e;
}
function qt(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function Us(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: jt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, Gt([void 0], n, !1)))();
    }, {
      cache: qt(e.number),
      strategy: Vt.variadic
    }),
    getDateTimeFormat: jt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Gt([void 0], n, !1)))();
    }, {
      cache: qt(e.dateTime),
      strategy: Vt.variadic
    }),
    getPluralRules: jt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, Gt([void 0], n, !1)))();
    }, {
      cache: qt(e.pluralRules),
      strategy: Vt.variadic
    })
  };
}
var xs = (
  /** @class */
  function() {
    function e(t, n, i, r) {
      var l = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var a = l.formatToParts(o);
        if (a.length === 1)
          return a[0].value;
        var s = a.reduce(function(u, f) {
          return !u.length || f.type !== F.literal || typeof u[u.length - 1] != "string" ? u.push(f.value) : u[u.length - 1] += f.value, u;
        }, []);
        return s.length <= 1 ? s[0] || "" : s;
      }, this.formatToParts = function(o) {
        return ct(l.ast, l.locales, l.formatters, l.formats, o, void 0, l.message);
      }, this.resolvedOptions = function() {
        return {
          locale: l.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return l.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: r == null ? void 0 : r.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Ds(e.formats, i), this.formatters = r && r.formatters || Us(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = As, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function Gs(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let i = e;
  for (let r = 0; r < n.length; r++)
    if (typeof i == "object") {
      if (r > 0) {
        const l = n.slice(r, n.length).join(".");
        if (l in i) {
          i = i[l];
          break;
        }
      }
      i = i[n[r]];
    } else
      i = void 0;
  return i;
}
const ge = {}, Fs = (e, t, n) => n && (t in ge || (ge[t] = {}), e in ge[t] || (ge[t][e] = n), n), nr = (e, t) => {
  if (t == null)
    return;
  if (t in ge && e in ge[t])
    return ge[t][e];
  const n = Et(t);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], l = Vs(r, e);
    if (l)
      return Fs(e, t, l);
  }
};
let mn;
const We = Ze({});
function js(e) {
  return mn[e] || null;
}
function ir(e) {
  return e in mn;
}
function Vs(e, t) {
  if (!ir(e))
    return null;
  const n = js(e);
  return Gs(n, t);
}
function qs(e) {
  if (e == null)
    return;
  const t = Et(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (ir(i))
      return i;
  }
}
function zs(e, ...t) {
  delete ge[e], We.update((n) => (n[e] = Qo.all([n[e] || {}, ...t]), n));
}
Me(
  [We],
  ([e]) => Object.keys(e)
);
We.subscribe((e) => mn = e);
const ht = {};
function Xs(e, t) {
  ht[e].delete(t), ht[e].size === 0 && delete ht[e];
}
function rr(e) {
  return ht[e];
}
function Zs(e) {
  return Et(e).map((t) => {
    const n = rr(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function rn(e) {
  return e == null ? !1 : Et(e).some(
    (t) => {
      var n;
      return (n = rr(t)) == null ? void 0 : n.size;
    }
  );
}
function Ws(e, t) {
  return Promise.all(
    t.map((i) => (Xs(e, i), i().then((r) => r.default || r)))
  ).then((i) => zs(e, ...i));
}
const Fe = {};
function lr(e) {
  if (!rn(e))
    return e in Fe ? Fe[e] : Promise.resolve();
  const t = Zs(e);
  return Fe[e] = Promise.all(
    t.map(
      ([n, i]) => Ws(n, i)
    )
  ).then(() => {
    if (rn(e))
      return lr(e);
    delete Fe[e];
  }), Fe[e];
}
const Qs = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, Js = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Qs,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Ys = Js;
function Ne() {
  return Ys;
}
const zt = Ze(!1);
var Ks = Object.defineProperty, $s = Object.defineProperties, ea = Object.getOwnPropertyDescriptors, Fn = Object.getOwnPropertySymbols, ta = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, jn = (e, t, n) => t in e ? Ks(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ia = (e, t) => {
  for (var n in t || (t = {}))
    ta.call(t, n) && jn(e, n, t[n]);
  if (Fn)
    for (var n of Fn(t))
      na.call(t, n) && jn(e, n, t[n]);
  return e;
}, ra = (e, t) => $s(e, ea(t));
let ln;
const _t = Ze(null);
function Vn(e) {
  return e.split("-").map((t, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function Et(e, t = Ne().fallbackLocale) {
  const n = Vn(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Vn(t)])] : n;
}
function Se() {
  return ln ?? void 0;
}
_t.subscribe((e) => {
  ln = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const la = (e) => {
  if (e && qs(e) && rn(e)) {
    const { loadingDelay: t } = Ne();
    let n;
    return typeof window < "u" && Se() != null && t ? n = window.setTimeout(
      () => zt.set(!0),
      t
    ) : zt.set(!0), lr(e).then(() => {
      _t.set(e);
    }).finally(() => {
      clearTimeout(n), zt.set(!1);
    });
  }
  return _t.set(e);
}, Qe = ra(ia({}, _t), {
  set: la
}), St = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in t ? t[r] : t[r] = e(i);
  };
};
var oa = Object.defineProperty, mt = Object.getOwnPropertySymbols, or = Object.prototype.hasOwnProperty, sr = Object.prototype.propertyIsEnumerable, qn = (e, t, n) => t in e ? oa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dn = (e, t) => {
  for (var n in t || (t = {}))
    or.call(t, n) && qn(e, n, t[n]);
  if (mt)
    for (var n of mt(t))
      sr.call(t, n) && qn(e, n, t[n]);
  return e;
}, Re = (e, t) => {
  var n = {};
  for (var i in e)
    or.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && mt)
    for (var i of mt(e))
      t.indexOf(i) < 0 && sr.call(e, i) && (n[i] = e[i]);
  return n;
};
const ze = (e, t) => {
  const { formats: n } = Ne();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, sa = St(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = Re(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = ze("number", i)), new Intl.NumberFormat(n, r);
  }
), aa = St(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = Re(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = ze("date", i) : Object.keys(r).length === 0 && (r = ze("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), ua = St(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = Re(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = ze("time", i) : Object.keys(r).length === 0 && (r = ze("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), fa = (e = {}) => {
  var t = e, {
    locale: n = Se()
  } = t, i = Re(t, [
    "locale"
  ]);
  return sa(dn({ locale: n }, i));
}, ca = (e = {}) => {
  var t = e, {
    locale: n = Se()
  } = t, i = Re(t, [
    "locale"
  ]);
  return aa(dn({ locale: n }, i));
}, ha = (e = {}) => {
  var t = e, {
    locale: n = Se()
  } = t, i = Re(t, [
    "locale"
  ]);
  return ua(dn({ locale: n }, i));
}, _a = St(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Se()) => new xs(e, t, Ne().formats, {
    ignoreTag: Ne().ignoreTag
  })
), ma = (e, t = {}) => {
  var n, i, r, l;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: a,
    locale: s = Se(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = nr(e, s);
  if (!f)
    f = (l = (r = (i = (n = Ne()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: s, id: e, defaultValue: u })) != null ? r : u) != null ? l : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!a)
    return f;
  let c = f;
  try {
    c = _a(f, s).format(a);
  } catch (h) {
    h instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      h.message
    );
  }
  return c;
}, da = (e, t) => ha(t).format(e), ba = (e, t) => ca(t).format(e), ga = (e, t) => fa(t).format(e), pa = (e, t = Se()) => nr(e, t);
Me([Qe, We], () => ma);
Me([Qe], () => da);
Me([Qe], () => ba);
Me([Qe], () => ga);
Me([Qe, We], () => pa);
const {
  SvelteComponent: va,
  append: zn,
  attr: wa,
  check_outros: Xn,
  create_component: bn,
  destroy_component: gn,
  detach: ya,
  element: Ea,
  group_outros: Zn,
  init: Sa,
  insert: Ta,
  mount_component: pn,
  safe_not_equal: Aa,
  set_style: Wn,
  space: Qn,
  toggle_class: Jn,
  transition_in: ce,
  transition_out: we
} = window.__gradio__svelte__internal, { createEventDispatcher: Ha } = window.__gradio__svelte__internal;
function Yn(e) {
  let t, n;
  return t = new vt({
    props: {
      Icon: Wl,
      label: (
        /*i18n*/
        e[3]("common.edit")
      )
    }
  }), t.$on(
    "click",
    /*click_handler*/
    e[5]
  ), {
    c() {
      bn(t.$$.fragment);
    },
    m(i, r) {
      pn(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*i18n*/
      8 && (l.label = /*i18n*/
      i[3]("common.edit")), t.$set(l);
    },
    i(i) {
      n || (ce(t.$$.fragment, i), n = !0);
    },
    o(i) {
      we(t.$$.fragment, i), n = !1;
    },
    d(i) {
      gn(t, i);
    }
  };
}
function Kn(e) {
  let t, n;
  return t = new vt({
    props: {
      Icon: so,
      label: (
        /*i18n*/
        e[3]("common.undo")
      )
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    e[6]
  ), {
    c() {
      bn(t.$$.fragment);
    },
    m(i, r) {
      pn(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*i18n*/
      8 && (l.label = /*i18n*/
      i[3]("common.undo")), t.$set(l);
    },
    i(i) {
      n || (ce(t.$$.fragment, i), n = !0);
    },
    o(i) {
      we(t.$$.fragment, i), n = !1;
    },
    d(i) {
      gn(t, i);
    }
  };
}
function Ba(e) {
  let t, n, i, r, l, o = (
    /*editable*/
    e[0] && Yn(e)
  ), a = (
    /*undoable*/
    e[1] && Kn(e)
  );
  return r = new vt({
    props: {
      Icon: Ll,
      label: (
        /*i18n*/
        e[3]("common.clear")
      )
    }
  }), r.$on(
    "click",
    /*click_handler_2*/
    e[7]
  ), {
    c() {
      t = Ea("div"), o && o.c(), n = Qn(), a && a.c(), i = Qn(), bn(r.$$.fragment), wa(t, "class", "svelte-1wj0ocy"), Jn(t, "not-absolute", !/*absolute*/
      e[2]), Wn(
        t,
        "position",
        /*absolute*/
        e[2] ? "absolute" : "static"
      );
    },
    m(s, u) {
      Ta(s, t, u), o && o.m(t, null), zn(t, n), a && a.m(t, null), zn(t, i), pn(r, t, null), l = !0;
    },
    p(s, [u]) {
      /*editable*/
      s[0] ? o ? (o.p(s, u), u & /*editable*/
      1 && ce(o, 1)) : (o = Yn(s), o.c(), ce(o, 1), o.m(t, n)) : o && (Zn(), we(o, 1, 1, () => {
        o = null;
      }), Xn()), /*undoable*/
      s[1] ? a ? (a.p(s, u), u & /*undoable*/
      2 && ce(a, 1)) : (a = Kn(s), a.c(), ce(a, 1), a.m(t, i)) : a && (Zn(), we(a, 1, 1, () => {
        a = null;
      }), Xn());
      const f = {};
      u & /*i18n*/
      8 && (f.label = /*i18n*/
      s[3]("common.clear")), r.$set(f), (!l || u & /*absolute*/
      4) && Jn(t, "not-absolute", !/*absolute*/
      s[2]), u & /*absolute*/
      4 && Wn(
        t,
        "position",
        /*absolute*/
        s[2] ? "absolute" : "static"
      );
    },
    i(s) {
      l || (ce(o), ce(a), ce(r.$$.fragment, s), l = !0);
    },
    o(s) {
      we(o), we(a), we(r.$$.fragment, s), l = !1;
    },
    d(s) {
      s && ya(t), o && o.d(), a && a.d(), gn(r);
    }
  };
}
function Ca(e, t, n) {
  let { editable: i = !1 } = t, { undoable: r = !1 } = t, { absolute: l = !0 } = t, { i18n: o } = t;
  const a = Ha(), s = () => a("edit"), u = () => a("undo"), f = (c) => {
    a("clear"), c.stopPropagation();
  };
  return e.$$set = (c) => {
    "editable" in c && n(0, i = c.editable), "undoable" in c && n(1, r = c.undoable), "absolute" in c && n(2, l = c.absolute), "i18n" in c && n(3, o = c.i18n);
  }, [
    i,
    r,
    l,
    o,
    a,
    s,
    u,
    f
  ];
}
class Pa extends va {
  constructor(t) {
    super(), Sa(this, t, Ca, Ba, Aa, {
      editable: 0,
      undoable: 1,
      absolute: 2,
      i18n: 3
    });
  }
}
var $n = Object.prototype.hasOwnProperty;
function ei(e, t, n) {
  for (n of e.keys())
    if (Ve(n, t))
      return n;
}
function Ve(e, t) {
  var n, i, r;
  if (e === t)
    return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date)
      return e.getTime() === t.getTime();
    if (n === RegExp)
      return e.toString() === t.toString();
    if (n === Array) {
      if ((i = e.length) === t.length)
        for (; i-- && Ve(e[i], t[i]); )
          ;
      return i === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (i of e)
        if (r = i, r && typeof r == "object" && (r = ei(t, r), !r) || !t.has(r))
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (i of e)
        if (r = i[0], r && typeof r == "object" && (r = ei(t, r), !r) || !Ve(i[1], t.get(r)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((i = e.byteLength) === t.byteLength)
        for (; i-- && e.getInt8(i) === t.getInt8(i); )
          ;
      return i === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((i = e.byteLength) === t.byteLength)
        for (; i-- && e[i] === t[i]; )
          ;
      return i === -1;
    }
    if (!n || typeof e == "object") {
      i = 0;
      for (n in e)
        if ($n.call(e, n) && ++i && !$n.call(t, n) || !(n in t) || !Ve(e[n], t[n]))
          return !1;
      return Object.keys(t).length === i;
    }
  }
  return e !== e && t !== t;
}
async function Ia(e) {
  return e ? `<div style="display: flex; flex-wrap: wrap; gap: 16px">${(await Promise.all(
    e.map(async ([n, i]) => n === null || !n.url ? "" : await fo(n.url, "url"))
  )).map((n) => `<img src="${n}" style="height: 400px" />`).join("")}</div>` : "";
}
const {
  SvelteComponent: Na,
  add_iframe_resize_listener: La,
  add_render_callback: ar,
  append: x,
  attr: B,
  binding_callbacks: ti,
  bubble: ni,
  check_outros: dt,
  create_component: Je,
  destroy_component: Ye,
  destroy_each: ur,
  detach: ae,
  element: V,
  empty: ka,
  ensure_array_like: bt,
  group_outros: gt,
  init: Oa,
  insert: ue,
  listen: Xe,
  mount_component: Ke,
  run_all: Ma,
  safe_not_equal: Ra,
  set_data: fr,
  set_style: re,
  space: _e,
  src_url_equal: Le,
  text: cr,
  toggle_class: le,
  transition_in: G,
  transition_out: X
} = window.__gradio__svelte__internal, { createEventDispatcher: Da } = window.__gradio__svelte__internal, { tick: Ua } = window.__gradio__svelte__internal;
function ii(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i[40] = n, i;
}
function ri(e, t, n) {
  const i = e.slice();
  return i[41] = t[n], i[42] = t, i[40] = n, i;
}
function li(e) {
  let t, n;
  return t = new Zr({
    props: {
      show_label: (
        /*show_label*/
        e[1]
      ),
      Icon: Oi,
      label: (
        /*label*/
        e[2] || "Gallery"
      )
    }
  }), {
    c() {
      Je(t.$$.fragment);
    },
    m(i, r) {
      Ke(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*show_label*/
      2 && (l.show_label = /*show_label*/
      i[1]), r[0] & /*label*/
      4 && (l.label = /*label*/
      i[2] || "Gallery"), t.$set(l);
    },
    i(i) {
      n || (G(t.$$.fragment, i), n = !0);
    },
    o(i) {
      X(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ye(t, i);
    }
  };
}
function xa(e) {
  let t, n, i, r, l, o, a = (
    /*selected_index*/
    e[0] !== null && /*allow_preview*/
    e[7] && oi(e)
  ), s = (
    /*show_share_button*/
    e[9] && ui(e)
  ), u = bt(
    /*_value*/
    e[11]
  ), f = [];
  for (let c = 0; c < u.length; c += 1)
    f[c] = ci(ii(e, u, c));
  return {
    c() {
      a && a.c(), t = _e(), n = V("div"), i = V("div"), s && s.c(), r = _e();
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      B(i, "class", "grid-container svelte-176413r"), re(
        i,
        "--grid-cols",
        /*columns*/
        e[4]
      ), re(
        i,
        "--grid-rows",
        /*rows*/
        e[5]
      ), re(
        i,
        "--object-fit",
        /*object_fit*/
        e[8]
      ), re(
        i,
        "height",
        /*height*/
        e[6]
      ), le(
        i,
        "pt-6",
        /*show_label*/
        e[1]
      ), B(n, "class", "grid-wrap svelte-176413r"), ar(() => (
        /*div1_elementresize_handler*/
        e[33].call(n)
      )), le(n, "fixed-height", !/*height*/
      e[6] || /*height*/
      e[6] == "auto");
    },
    m(c, h) {
      a && a.m(c, h), ue(c, t, h), ue(c, n, h), x(n, i), s && s.m(i, null), x(i, r);
      for (let _ = 0; _ < f.length; _ += 1)
        f[_] && f[_].m(i, null);
      l = La(
        n,
        /*div1_elementresize_handler*/
        e[33].bind(n)
      ), o = !0;
    },
    p(c, h) {
      if (/*selected_index*/
      c[0] !== null && /*allow_preview*/
      c[7] ? a ? (a.p(c, h), h[0] & /*selected_index, allow_preview*/
      129 && G(a, 1)) : (a = oi(c), a.c(), G(a, 1), a.m(t.parentNode, t)) : a && (gt(), X(a, 1, 1, () => {
        a = null;
      }), dt()), /*show_share_button*/
      c[9] ? s ? (s.p(c, h), h[0] & /*show_share_button*/
      512 && G(s, 1)) : (s = ui(c), s.c(), G(s, 1), s.m(i, r)) : s && (gt(), X(s, 1, 1, () => {
        s = null;
      }), dt()), h[0] & /*_value, selected_index*/
      2049) {
        u = bt(
          /*_value*/
          c[11]
        );
        let _;
        for (_ = 0; _ < u.length; _ += 1) {
          const m = ii(c, u, _);
          f[_] ? f[_].p(m, h) : (f[_] = ci(m), f[_].c(), f[_].m(i, null));
        }
        for (; _ < f.length; _ += 1)
          f[_].d(1);
        f.length = u.length;
      }
      (!o || h[0] & /*columns*/
      16) && re(
        i,
        "--grid-cols",
        /*columns*/
        c[4]
      ), (!o || h[0] & /*rows*/
      32) && re(
        i,
        "--grid-rows",
        /*rows*/
        c[5]
      ), (!o || h[0] & /*object_fit*/
      256) && re(
        i,
        "--object-fit",
        /*object_fit*/
        c[8]
      ), (!o || h[0] & /*height*/
      64) && re(
        i,
        "height",
        /*height*/
        c[6]
      ), (!o || h[0] & /*show_label*/
      2) && le(
        i,
        "pt-6",
        /*show_label*/
        c[1]
      ), (!o || h[0] & /*height*/
      64) && le(n, "fixed-height", !/*height*/
      c[6] || /*height*/
      c[6] == "auto");
    },
    i(c) {
      o || (G(a), G(s), o = !0);
    },
    o(c) {
      X(a), X(s), o = !1;
    },
    d(c) {
      c && (ae(t), ae(n)), a && a.d(c), s && s.d(), ur(f, c), l();
    }
  };
}
function Ga(e) {
  let t, n;
  return t = new Al({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Fa] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Je(t.$$.fragment);
    },
    m(i, r) {
      Ke(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[1] & /*$$scope*/
      4096 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (G(t.$$.fragment, i), n = !0);
    },
    o(i) {
      X(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ye(t, i);
    }
  };
}
function oi(e) {
  var b;
  let t, n, i, r, l, o, a, s, u, f, c, h, _, m, H;
  i = new Pa({
    props: { i18n: (
      /*i18n*/
      e[10]
    ), absolute: !1 }
  }), i.$on(
    "clear",
    /*clear_handler*/
    e[25]
  );
  let E = (
    /*_value*/
    ((b = e[11][
      /*selected_index*/
      e[0]
    ]) == null ? void 0 : b.caption) && si(e)
  ), w = bt(
    /*_value*/
    e[11]
  ), g = [];
  for (let d = 0; d < w.length; d += 1)
    g[d] = ai(ri(e, w, d));
  return {
    c() {
      t = V("button"), n = V("div"), Je(i.$$.fragment), r = _e(), l = V("button"), o = V("img"), f = _e(), E && E.c(), c = _e(), h = V("div");
      for (let d = 0; d < g.length; d += 1)
        g[d].c();
      B(n, "class", "icon-buttons svelte-176413r"), B(o, "data-testid", "detailed-image"), Le(o.src, a = /*_value*/
      e[11][
        /*selected_index*/
        e[0]
      ].image.url) || B(o, "src", a), B(o, "alt", s = /*_value*/
      e[11][
        /*selected_index*/
        e[0]
      ].caption || ""), B(o, "title", u = /*_value*/
      e[11][
        /*selected_index*/
        e[0]
      ].caption || null), B(o, "loading", "lazy"), B(o, "class", "svelte-176413r"), le(o, "with-caption", !!/*_value*/
      e[11][
        /*selected_index*/
        e[0]
      ].caption), B(l, "class", "image-button svelte-176413r"), re(l, "height", "calc(100% - " + /*_value*/
      (e[11][
        /*selected_index*/
        e[0]
      ].caption ? "80px" : "60px") + ")"), B(l, "aria-label", "detailed view of selected image"), B(h, "class", "thumbnails scroll-hide svelte-176413r"), B(h, "data-testid", "container_el"), B(t, "class", "preview svelte-176413r");
    },
    m(d, v) {
      ue(d, t, v), x(t, n), Ke(i, n, null), x(t, r), x(t, l), x(l, o), x(t, f), E && E.m(t, null), x(t, c), x(t, h);
      for (let k = 0; k < g.length; k += 1)
        g[k] && g[k].m(h, null);
      e[29](h), _ = !0, m || (H = [
        Xe(
          l,
          "click",
          /*click_handler*/
          e[26]
        ),
        Xe(
          t,
          "keydown",
          /*on_keydown*/
          e[17]
        )
      ], m = !0);
    },
    p(d, v) {
      var R;
      const k = {};
      if (v[0] & /*i18n*/
      1024 && (k.i18n = /*i18n*/
      d[10]), i.$set(k), (!_ || v[0] & /*_value, selected_index*/
      2049 && !Le(o.src, a = /*_value*/
      d[11][
        /*selected_index*/
        d[0]
      ].image.url)) && B(o, "src", a), (!_ || v[0] & /*_value, selected_index*/
      2049 && s !== (s = /*_value*/
      d[11][
        /*selected_index*/
        d[0]
      ].caption || "")) && B(o, "alt", s), (!_ || v[0] & /*_value, selected_index*/
      2049 && u !== (u = /*_value*/
      d[11][
        /*selected_index*/
        d[0]
      ].caption || null)) && B(o, "title", u), (!_ || v[0] & /*_value, selected_index*/
      2049) && le(o, "with-caption", !!/*_value*/
      d[11][
        /*selected_index*/
        d[0]
      ].caption), (!_ || v[0] & /*_value, selected_index*/
      2049) && re(l, "height", "calc(100% - " + /*_value*/
      (d[11][
        /*selected_index*/
        d[0]
      ].caption ? "80px" : "60px") + ")"), /*_value*/
      (R = d[11][
        /*selected_index*/
        d[0]
      ]) != null && R.caption ? E ? E.p(d, v) : (E = si(d), E.c(), E.m(t, c)) : E && (E.d(1), E = null), v[0] & /*_value, el, selected_index*/
      6145) {
        w = bt(
          /*_value*/
          d[11]
        );
        let O;
        for (O = 0; O < w.length; O += 1) {
          const Y = ri(d, w, O);
          g[O] ? g[O].p(Y, v) : (g[O] = ai(Y), g[O].c(), g[O].m(h, null));
        }
        for (; O < g.length; O += 1)
          g[O].d(1);
        g.length = w.length;
      }
    },
    i(d) {
      _ || (G(i.$$.fragment, d), _ = !0);
    },
    o(d) {
      X(i.$$.fragment, d), _ = !1;
    },
    d(d) {
      d && ae(t), Ye(i), E && E.d(), ur(g, d), e[29](null), m = !1, Ma(H);
    }
  };
}
function si(e) {
  let t, n = (
    /*_value*/
    e[11][
      /*selected_index*/
      e[0]
    ].caption + ""
  ), i;
  return {
    c() {
      t = V("caption"), i = cr(n), B(t, "class", "caption svelte-176413r");
    },
    m(r, l) {
      ue(r, t, l), x(t, i);
    },
    p(r, l) {
      l[0] & /*_value, selected_index*/
      2049 && n !== (n = /*_value*/
      r[11][
        /*selected_index*/
        r[0]
      ].caption + "") && fr(i, n);
    },
    d(r) {
      r && ae(t);
    }
  };
}
function ai(e) {
  let t, n, i, r, l, o, a = (
    /*i*/
    e[40]
  ), s, u;
  const f = () => (
    /*button_binding*/
    e[27](t, a)
  ), c = () => (
    /*button_binding*/
    e[27](null, a)
  );
  function h() {
    return (
      /*click_handler_1*/
      e[28](
        /*i*/
        e[40]
      )
    );
  }
  return {
    c() {
      t = V("button"), n = V("img"), l = _e(), Le(n.src, i = /*image*/
      e[41].image.url) || B(n, "src", i), B(n, "title", r = /*image*/
      e[41].caption || null), B(n, "data-testid", "thumbnail " + /*i*/
      (e[40] + 1)), B(n, "alt", ""), B(n, "loading", "lazy"), B(n, "class", "svelte-176413r"), B(t, "class", "thumbnail-item thumbnail-small svelte-176413r"), B(t, "aria-label", o = "Thumbnail " + /*i*/
      (e[40] + 1) + " of " + /*_value*/
      e[11].length), le(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[40]
      );
    },
    m(_, m) {
      ue(_, t, m), x(t, n), x(t, l), f(), s || (u = Xe(t, "click", h), s = !0);
    },
    p(_, m) {
      e = _, m[0] & /*_value*/
      2048 && !Le(n.src, i = /*image*/
      e[41].image.url) && B(n, "src", i), m[0] & /*_value*/
      2048 && r !== (r = /*image*/
      e[41].caption || null) && B(n, "title", r), m[0] & /*_value*/
      2048 && o !== (o = "Thumbnail " + /*i*/
      (e[40] + 1) + " of " + /*_value*/
      e[11].length) && B(t, "aria-label", o), a !== /*i*/
      e[40] && (c(), a = /*i*/
      e[40], f()), m[0] & /*selected_index*/
      1 && le(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[40]
      );
    },
    d(_) {
      _ && ae(t), c(), s = !1, u();
    }
  };
}
function ui(e) {
  let t, n, i;
  return n = new To({
    props: {
      i18n: (
        /*i18n*/
        e[10]
      ),
      value: (
        /*_value*/
        e[11]
      ),
      formatter: Ia
    }
  }), n.$on(
    "share",
    /*share_handler*/
    e[30]
  ), n.$on(
    "error",
    /*error_handler*/
    e[31]
  ), {
    c() {
      t = V("div"), Je(n.$$.fragment), B(t, "class", "icon-button svelte-176413r");
    },
    m(r, l) {
      ue(r, t, l), Ke(n, t, null), i = !0;
    },
    p(r, l) {
      const o = {};
      l[0] & /*i18n*/
      1024 && (o.i18n = /*i18n*/
      r[10]), l[0] & /*_value*/
      2048 && (o.value = /*_value*/
      r[11]), n.$set(o);
    },
    i(r) {
      i || (G(n.$$.fragment, r), i = !0);
    },
    o(r) {
      X(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && ae(t), Ye(n);
    }
  };
}
function fi(e) {
  let t, n = (
    /*entry*/
    e[38].caption + ""
  ), i;
  return {
    c() {
      t = V("div"), i = cr(n), B(t, "class", "caption-label svelte-176413r");
    },
    m(r, l) {
      ue(r, t, l), x(t, i);
    },
    p(r, l) {
      l[0] & /*_value*/
      2048 && n !== (n = /*entry*/
      r[38].caption + "") && fr(i, n);
    },
    d(r) {
      r && ae(t);
    }
  };
}
function ci(e) {
  let t, n, i, r, l, o, a, s, u, f = (
    /*entry*/
    e[38].caption && fi(e)
  );
  function c() {
    return (
      /*click_handler_2*/
      e[32](
        /*i*/
        e[40]
      )
    );
  }
  return {
    c() {
      t = V("button"), n = V("img"), l = _e(), f && f.c(), o = _e(), B(n, "alt", i = /*entry*/
      e[38].caption || ""), Le(n.src, r = typeof /*entry*/
      e[38].image == "string" ? (
        /*entry*/
        e[38].image
      ) : (
        /*entry*/
        e[38].image.url
      )) || B(n, "src", r), B(n, "loading", "lazy"), B(n, "class", "svelte-176413r"), B(t, "class", "thumbnail-item thumbnail-lg svelte-176413r"), B(t, "aria-label", a = "Thumbnail " + /*i*/
      (e[40] + 1) + " of " + /*_value*/
      e[11].length), le(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[40]
      );
    },
    m(h, _) {
      ue(h, t, _), x(t, n), x(t, l), f && f.m(t, null), x(t, o), s || (u = Xe(t, "click", c), s = !0);
    },
    p(h, _) {
      e = h, _[0] & /*_value*/
      2048 && i !== (i = /*entry*/
      e[38].caption || "") && B(n, "alt", i), _[0] & /*_value*/
      2048 && !Le(n.src, r = typeof /*entry*/
      e[38].image == "string" ? (
        /*entry*/
        e[38].image
      ) : (
        /*entry*/
        e[38].image.url
      )) && B(n, "src", r), /*entry*/
      e[38].caption ? f ? f.p(e, _) : (f = fi(e), f.c(), f.m(t, o)) : f && (f.d(1), f = null), _[0] & /*_value*/
      2048 && a !== (a = "Thumbnail " + /*i*/
      (e[40] + 1) + " of " + /*_value*/
      e[11].length) && B(t, "aria-label", a), _[0] & /*selected_index*/
      1 && le(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[40]
      );
    },
    d(h) {
      h && ae(t), f && f.d(), s = !1, u();
    }
  };
}
function Fa(e) {
  let t, n;
  return t = new Oi({}), {
    c() {
      Je(t.$$.fragment);
    },
    m(i, r) {
      Ke(t, i, r), n = !0;
    },
    i(i) {
      n || (G(t.$$.fragment, i), n = !0);
    },
    o(i) {
      X(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ye(t, i);
    }
  };
}
function ja(e) {
  let t, n, i, r, l, o, a;
  ar(
    /*onwindowresize*/
    e[24]
  );
  let s = (
    /*show_label*/
    e[1] && li(e)
  );
  const u = [Ga, xa], f = [];
  function c(h, _) {
    return (
      /*value*/
      h[3] === null || /*_value*/
      h[11] === null || /*_value*/
      h[11].length === 0 ? 0 : 1
    );
  }
  return n = c(e), i = f[n] = u[n](e), {
    c() {
      s && s.c(), t = _e(), i.c(), r = ka();
    },
    m(h, _) {
      s && s.m(h, _), ue(h, t, _), f[n].m(h, _), ue(h, r, _), l = !0, o || (a = Xe(
        window,
        "resize",
        /*onwindowresize*/
        e[24]
      ), o = !0);
    },
    p(h, _) {
      /*show_label*/
      h[1] ? s ? (s.p(h, _), _[0] & /*show_label*/
      2 && G(s, 1)) : (s = li(h), s.c(), G(s, 1), s.m(t.parentNode, t)) : s && (gt(), X(s, 1, 1, () => {
        s = null;
      }), dt());
      let m = n;
      n = c(h), n === m ? f[n].p(h, _) : (gt(), X(f[m], 1, 1, () => {
        f[m] = null;
      }), dt(), i = f[n], i ? i.p(h, _) : (i = f[n] = u[n](h), i.c()), G(i, 1), i.m(r.parentNode, r));
    },
    i(h) {
      l || (G(s), G(i), l = !0);
    },
    o(h) {
      X(s), X(i), l = !1;
    },
    d(h) {
      h && (ae(t), ae(r)), s && s.d(h), f[n].d(h), o = !1, a();
    }
  };
}
function je(e, t) {
  return e ?? t();
}
function ve(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], l = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = l(n)) : (r === "call" || r === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function Va(e, t, n) {
  let i, r, { show_label: l = !0 } = t, { label: o } = t, { root: a = "" } = t, { proxy_url: s = null } = t, { value: u = null } = t, { columns: f = [2] } = t, { rows: c = void 0 } = t, { height: h = "auto" } = t, { preview: _ } = t, { allow_preview: m = !0 } = t, { object_fit: H = "cover" } = t, { show_share_button: E = !1 } = t, { i18n: w } = t, { selected_index: g = null } = t;
  const b = Da();
  let d = !0, v = null, k = u;
  g === null && _ && ve([u, "optionalAccess", (p) => p.length]) && (g = 0);
  let R = g;
  function O(p) {
    const Ue = p.target, Bt = p.clientX, Ct = Ue.offsetWidth / 2;
    Bt < Ct ? n(0, g = i) : n(0, g = r);
  }
  function Y(p) {
    switch (p.code) {
      case "Escape":
        p.preventDefault(), n(0, g = null);
        break;
      case "ArrowLeft":
        p.preventDefault(), n(0, g = i);
        break;
      case "ArrowRight":
        p.preventDefault(), n(0, g = r);
        break;
    }
  }
  let U = [], j;
  async function Te(p) {
    if (typeof p != "number" || (await Ua(), U[p] === void 0))
      return;
    ve([
      U,
      "access",
      (xe) => xe[p],
      "optionalAccess",
      (xe) => xe.focus,
      "call",
      (xe) => xe()
    ]);
    const { left: Ue, width: Bt } = j.getBoundingClientRect(), { left: vn, width: Ct } = U[p].getBoundingClientRect(), wn = vn - Ue + Ct / 2 - Bt / 2 + j.scrollLeft;
    j && typeof j.scrollTo == "function" && j.scrollTo({
      left: wn < 0 ? 0 : wn,
      behavior: "smooth"
    });
  }
  let q = 0, y = 0;
  function ne() {
    n(15, y = window.innerHeight);
  }
  const $e = () => n(0, g = null), Tt = (p) => O(p);
  function et(p, Ue) {
    ti[p ? "unshift" : "push"](() => {
      U[Ue] = p, n(12, U);
    });
  }
  const tt = (p) => n(0, g = p);
  function nt(p) {
    ti[p ? "unshift" : "push"](() => {
      j = p, n(13, j);
    });
  }
  function At(p) {
    ni.call(this, e, p);
  }
  function Ht(p) {
    ni.call(this, e, p);
  }
  const S = (p) => n(0, g = p);
  function dr() {
    q = this.clientHeight, n(14, q);
  }
  return e.$$set = (p) => {
    "show_label" in p && n(1, l = p.show_label), "label" in p && n(2, o = p.label), "root" in p && n(18, a = p.root), "proxy_url" in p && n(19, s = p.proxy_url), "value" in p && n(3, u = p.value), "columns" in p && n(4, f = p.columns), "rows" in p && n(5, c = p.rows), "height" in p && n(6, h = p.height), "preview" in p && n(20, _ = p.preview), "allow_preview" in p && n(7, m = p.allow_preview), "object_fit" in p && n(8, H = p.object_fit), "show_share_button" in p && n(9, E = p.show_share_button), "i18n" in p && n(10, w = p.i18n), "selected_index" in p && n(0, g = p.selected_index);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value, was_reset*/
    2097160 && n(21, d = u == null || u.length == 0 ? !0 : d), e.$$.dirty[0] & /*value, root, proxy_url*/
    786440 && n(11, v = u === null ? null : u.map((p) => ({
      image: Mi(p.image, a, s),
      caption: p.caption
    }))), e.$$.dirty[0] & /*prevValue, value, was_reset, preview, selected_index*/
    7340041 && (Ve(k, u) || (d ? (n(0, g = _ && ve([u, "optionalAccess", (p) => p.length]) ? 0 : null), n(21, d = !1)) : n(
      0,
      g = g !== null && u !== null && g < u.length ? g : null
    ), b("change"), n(22, k = u))), e.$$.dirty[0] & /*selected_index, _value*/
    2049 && (i = (je(g, () => 0) + je(ve([v, "optionalAccess", (p) => p.length]), () => 0) - 1) % je(ve([v, "optionalAccess", (p) => p.length]), () => 0)), e.$$.dirty[0] & /*selected_index, _value*/
    2049 && (r = (je(g, () => 0) + 1) % je(ve([v, "optionalAccess", (p) => p.length]), () => 0)), e.$$.dirty[0] & /*selected_index, old_selected_index, _value*/
    8390657 && g !== R && (n(23, R = g), g !== null && b("select", {
      index: g,
      value: ve([v, "optionalAccess", (p) => p[g]])
    })), e.$$.dirty[0] & /*allow_preview, selected_index*/
    129 && m && Te(g);
  }, [
    g,
    l,
    o,
    u,
    f,
    c,
    h,
    m,
    H,
    E,
    w,
    v,
    U,
    j,
    q,
    y,
    O,
    Y,
    a,
    s,
    _,
    d,
    k,
    R,
    ne,
    $e,
    Tt,
    et,
    tt,
    nt,
    At,
    Ht,
    S,
    dr
  ];
}
class qa extends Na {
  constructor(t) {
    super(), Oa(
      this,
      t,
      Va,
      ja,
      Ra,
      {
        show_label: 1,
        label: 2,
        root: 18,
        proxy_url: 19,
        value: 3,
        columns: 4,
        rows: 5,
        height: 6,
        preview: 20,
        allow_preview: 7,
        object_fit: 8,
        show_share_button: 9,
        i18n: 10,
        selected_index: 0
      },
      null,
      [-1, -1]
    );
  }
}
function He(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let i = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + i;
}
const {
  SvelteComponent: za,
  append: ee,
  attr: I,
  component_subscribe: hi,
  detach: Xa,
  element: Za,
  init: Wa,
  insert: Qa,
  noop: _i,
  safe_not_equal: Ja,
  set_style: at,
  svg_element: te,
  toggle_class: mi
} = window.__gradio__svelte__internal, { onMount: Ya } = window.__gradio__svelte__internal;
function Ka(e) {
  let t, n, i, r, l, o, a, s, u, f, c, h;
  return {
    c() {
      t = Za("div"), n = te("svg"), i = te("g"), r = te("path"), l = te("path"), o = te("path"), a = te("path"), s = te("g"), u = te("path"), f = te("path"), c = te("path"), h = te("path"), I(r, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), I(r, "fill", "#FF7C00"), I(r, "fill-opacity", "0.4"), I(r, "class", "svelte-43sxxs"), I(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), I(l, "fill", "#FF7C00"), I(l, "class", "svelte-43sxxs"), I(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), I(o, "fill", "#FF7C00"), I(o, "fill-opacity", "0.4"), I(o, "class", "svelte-43sxxs"), I(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), I(a, "fill", "#FF7C00"), I(a, "class", "svelte-43sxxs"), at(i, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), I(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), I(u, "fill", "#FF7C00"), I(u, "fill-opacity", "0.4"), I(u, "class", "svelte-43sxxs"), I(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), I(f, "fill", "#FF7C00"), I(f, "class", "svelte-43sxxs"), I(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), I(c, "fill", "#FF7C00"), I(c, "fill-opacity", "0.4"), I(c, "class", "svelte-43sxxs"), I(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), I(h, "fill", "#FF7C00"), I(h, "class", "svelte-43sxxs"), at(s, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), I(n, "viewBox", "-1200 -1200 3000 3000"), I(n, "fill", "none"), I(n, "xmlns", "http://www.w3.org/2000/svg"), I(n, "class", "svelte-43sxxs"), I(t, "class", "svelte-43sxxs"), mi(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(_, m) {
      Qa(_, t, m), ee(t, n), ee(n, i), ee(i, r), ee(i, l), ee(i, o), ee(i, a), ee(n, s), ee(s, u), ee(s, f), ee(s, c), ee(s, h);
    },
    p(_, [m]) {
      m & /*$top*/
      2 && at(i, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), m & /*$bottom*/
      4 && at(s, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), m & /*margin*/
      1 && mi(
        t,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: _i,
    o: _i,
    d(_) {
      _ && Xa(t);
    }
  };
}
function $a(e, t, n) {
  let i, r, { margin: l = !0 } = t;
  const o = Nn([0, 0]);
  hi(e, o, (h) => n(1, i = h));
  const a = Nn([0, 0]);
  hi(e, a, (h) => n(2, r = h));
  let s;
  async function u() {
    await Promise.all([o.set([125, 140]), a.set([-125, -140])]), await Promise.all([o.set([-125, 140]), a.set([125, -140])]), await Promise.all([o.set([-125, 0]), a.set([125, -0])]), await Promise.all([o.set([125, 0]), a.set([-125, 0])]);
  }
  async function f() {
    await u(), s || f();
  }
  async function c() {
    await Promise.all([o.set([125, 0]), a.set([-125, 0])]), f();
  }
  return Ya(() => (c(), () => s = !0)), e.$$set = (h) => {
    "margin" in h && n(0, l = h.margin);
  }, [l, i, r, o, a];
}
class eu extends za {
  constructor(t) {
    super(), Wa(this, t, $a, Ka, Ja, { margin: 0 });
  }
}
const {
  SvelteComponent: tu,
  append: ye,
  attr: oe,
  binding_callbacks: di,
  check_outros: hr,
  create_component: nu,
  create_slot: iu,
  destroy_component: ru,
  destroy_each: _r,
  detach: T,
  element: he,
  empty: De,
  ensure_array_like: pt,
  get_all_dirty_from_scope: lu,
  get_slot_changes: ou,
  group_outros: mr,
  init: su,
  insert: A,
  mount_component: au,
  noop: on,
  safe_not_equal: uu,
  set_data: J,
  set_style: pe,
  space: se,
  text: M,
  toggle_class: Q,
  transition_in: ke,
  transition_out: Oe,
  update_slot_base: fu
} = window.__gradio__svelte__internal, { tick: cu } = window.__gradio__svelte__internal, { onDestroy: hu } = window.__gradio__svelte__internal, _u = (e) => ({}), bi = (e) => ({});
function gi(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i[40] = n, i;
}
function pi(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i;
}
function mu(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), i, r, l;
  const o = (
    /*#slots*/
    e[29].error
  ), a = iu(
    o,
    e,
    /*$$scope*/
    e[28],
    bi
  );
  return {
    c() {
      t = he("span"), i = M(n), r = se(), a && a.c(), oe(t, "class", "error svelte-1txqlrd");
    },
    m(s, u) {
      A(s, t, u), ye(t, i), A(s, r, u), a && a.m(s, u), l = !0;
    },
    p(s, u) {
      (!l || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      s[1]("common.error") + "") && J(i, n), a && a.p && (!l || u[0] & /*$$scope*/
      268435456) && fu(
        a,
        o,
        s,
        /*$$scope*/
        s[28],
        l ? ou(
          o,
          /*$$scope*/
          s[28],
          u,
          _u
        ) : lu(
          /*$$scope*/
          s[28]
        ),
        bi
      );
    },
    i(s) {
      l || (ke(a, s), l = !0);
    },
    o(s) {
      Oe(a, s), l = !1;
    },
    d(s) {
      s && (T(t), T(r)), a && a.d(s);
    }
  };
}
function du(e) {
  let t, n, i, r, l, o, a, s, u, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && vi(e)
  );
  function c(b, d) {
    if (
      /*progress*/
      b[7]
    )
      return pu;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    )
      return gu;
    if (
      /*queue_position*/
      b[2] === 0
    )
      return bu;
  }
  let h = c(e), _ = h && h(e), m = (
    /*timer*/
    e[5] && Ei(e)
  );
  const H = [Eu, yu], E = [];
  function w(b, d) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = w(e)) && (o = E[l] = H[l](e));
  let g = !/*timer*/
  e[5] && Pi(e);
  return {
    c() {
      f && f.c(), t = se(), n = he("div"), _ && _.c(), i = se(), m && m.c(), r = se(), o && o.c(), a = se(), g && g.c(), s = De(), oe(n, "class", "progress-text svelte-1txqlrd"), Q(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), Q(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(b, d) {
      f && f.m(b, d), A(b, t, d), A(b, n, d), _ && _.m(n, null), ye(n, i), m && m.m(n, null), A(b, r, d), ~l && E[l].m(b, d), A(b, a, d), g && g.m(b, d), A(b, s, d), u = !0;
    },
    p(b, d) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? f ? f.p(b, d) : (f = vi(b), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), h === (h = c(b)) && _ ? _.p(b, d) : (_ && _.d(1), _ = h && h(b), _ && (_.c(), _.m(n, i))), /*timer*/
      b[5] ? m ? m.p(b, d) : (m = Ei(b), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!u || d[0] & /*variant*/
      256) && Q(
        n,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!u || d[0] & /*variant*/
      256) && Q(
        n,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let v = l;
      l = w(b), l === v ? ~l && E[l].p(b, d) : (o && (mr(), Oe(E[v], 1, 1, () => {
        E[v] = null;
      }), hr()), ~l ? (o = E[l], o ? o.p(b, d) : (o = E[l] = H[l](b), o.c()), ke(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      b[5] ? g && (g.d(1), g = null) : g ? g.p(b, d) : (g = Pi(b), g.c(), g.m(s.parentNode, s));
    },
    i(b) {
      u || (ke(o), u = !0);
    },
    o(b) {
      Oe(o), u = !1;
    },
    d(b) {
      b && (T(t), T(n), T(r), T(a), T(s)), f && f.d(b), _ && _.d(), m && m.d(), ~l && E[l].d(b), g && g.d(b);
    }
  };
}
function vi(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = he("div"), oe(t, "class", "eta-bar svelte-1txqlrd"), pe(t, "transform", n);
    },
    m(i, r) {
      A(i, t, r);
    },
    p(i, r) {
      r[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (i[17] || 0) * 100 - 100}%)`) && pe(t, "transform", n);
    },
    d(i) {
      i && T(t);
    }
  };
}
function bu(e) {
  let t;
  return {
    c() {
      t = M("processing |");
    },
    m(n, i) {
      A(n, t, i);
    },
    p: on,
    d(n) {
      n && T(t);
    }
  };
}
function gu(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), i, r, l, o;
  return {
    c() {
      t = M("queue: "), i = M(n), r = M("/"), l = M(
        /*queue_size*/
        e[3]
      ), o = M(" |");
    },
    m(a, s) {
      A(a, t, s), A(a, i, s), A(a, r, s), A(a, l, s), A(a, o, s);
    },
    p(a, s) {
      s[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && J(i, n), s[0] & /*queue_size*/
      8 && J(
        l,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (T(t), T(i), T(r), T(l), T(o));
    }
  };
}
function pu(e) {
  let t, n = pt(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = yi(pi(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = De();
    },
    m(r, l) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(r, l);
      A(r, t, l);
    },
    p(r, l) {
      if (l[0] & /*progress*/
      128) {
        n = pt(
          /*progress*/
          r[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = pi(r, n, o);
          i[o] ? i[o].p(a, l) : (i[o] = yi(a), i[o].c(), i[o].m(t.parentNode, t));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && T(t), _r(i, r);
    }
  };
}
function wi(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), i, r, l = " ", o;
  function a(f, c) {
    return (
      /*p*/
      f[38].length != null ? wu : vu
    );
  }
  let s = a(e), u = s(e);
  return {
    c() {
      u.c(), t = se(), i = M(n), r = M(" | "), o = M(l);
    },
    m(f, c) {
      u.m(f, c), A(f, t, c), A(f, i, c), A(f, r, c), A(f, o, c);
    },
    p(f, c) {
      s === (s = a(f)) && u ? u.p(f, c) : (u.d(1), u = s(f), u && (u.c(), u.m(t.parentNode, t))), c[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && J(i, n);
    },
    d(f) {
      f && (T(t), T(i), T(r), T(o)), u.d(f);
    }
  };
}
function vu(e) {
  let t = He(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = M(t);
    },
    m(i, r) {
      A(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = He(
        /*p*/
        i[38].index || 0
      ) + "") && J(n, t);
    },
    d(i) {
      i && T(n);
    }
  };
}
function wu(e) {
  let t = He(
    /*p*/
    e[38].index || 0
  ) + "", n, i, r = He(
    /*p*/
    e[38].length
  ) + "", l;
  return {
    c() {
      n = M(t), i = M("/"), l = M(r);
    },
    m(o, a) {
      A(o, n, a), A(o, i, a), A(o, l, a);
    },
    p(o, a) {
      a[0] & /*progress*/
      128 && t !== (t = He(
        /*p*/
        o[38].index || 0
      ) + "") && J(n, t), a[0] & /*progress*/
      128 && r !== (r = He(
        /*p*/
        o[38].length
      ) + "") && J(l, r);
    },
    d(o) {
      o && (T(n), T(i), T(l));
    }
  };
}
function yi(e) {
  let t, n = (
    /*p*/
    e[38].index != null && wi(e)
  );
  return {
    c() {
      n && n.c(), t = De();
    },
    m(i, r) {
      n && n.m(i, r), A(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].index != null ? n ? n.p(i, r) : (n = wi(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && T(t), n && n.d(i);
    }
  };
}
function Ei(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), i, r;
  return {
    c() {
      t = M(
        /*formatted_timer*/
        e[20]
      ), i = M(n), r = M("s");
    },
    m(l, o) {
      A(l, t, o), A(l, i, o), A(l, r, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && J(
        t,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && J(i, n);
    },
    d(l) {
      l && (T(t), T(i), T(r));
    }
  };
}
function yu(e) {
  let t, n;
  return t = new eu({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      nu(t.$$.fragment);
    },
    m(i, r) {
      au(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*variant*/
      256 && (l.margin = /*variant*/
      i[8] === "default"), t.$set(l);
    },
    i(i) {
      n || (ke(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Oe(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ru(t, i);
    }
  };
}
function Eu(e) {
  let t, n, i, r, l, o = `${/*last_progress_level*/
  e[15] * 100}%`, a = (
    /*progress*/
    e[7] != null && Si(e)
  );
  return {
    c() {
      t = he("div"), n = he("div"), a && a.c(), i = se(), r = he("div"), l = he("div"), oe(n, "class", "progress-level-inner svelte-1txqlrd"), oe(l, "class", "progress-bar svelte-1txqlrd"), pe(l, "width", o), oe(r, "class", "progress-bar-wrap svelte-1txqlrd"), oe(t, "class", "progress-level svelte-1txqlrd");
    },
    m(s, u) {
      A(s, t, u), ye(t, n), a && a.m(n, null), ye(t, i), ye(t, r), ye(r, l), e[30](l);
    },
    p(s, u) {
      /*progress*/
      s[7] != null ? a ? a.p(s, u) : (a = Si(s), a.c(), a.m(n, null)) : a && (a.d(1), a = null), u[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      s[15] * 100}%`) && pe(l, "width", o);
    },
    i: on,
    o: on,
    d(s) {
      s && T(t), a && a.d(), e[30](null);
    }
  };
}
function Si(e) {
  let t, n = pt(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Ci(gi(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = De();
    },
    m(r, l) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(r, l);
      A(r, t, l);
    },
    p(r, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        n = pt(
          /*progress*/
          r[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = gi(r, n, o);
          i[o] ? i[o].p(a, l) : (i[o] = Ci(a), i[o].c(), i[o].m(t.parentNode, t));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && T(t), _r(i, r);
    }
  };
}
function Ti(e) {
  let t, n, i, r, l = (
    /*i*/
    e[40] !== 0 && Su()
  ), o = (
    /*p*/
    e[38].desc != null && Ai(e)
  ), a = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && Hi()
  ), s = (
    /*progress_level*/
    e[14] != null && Bi(e)
  );
  return {
    c() {
      l && l.c(), t = se(), o && o.c(), n = se(), a && a.c(), i = se(), s && s.c(), r = De();
    },
    m(u, f) {
      l && l.m(u, f), A(u, t, f), o && o.m(u, f), A(u, n, f), a && a.m(u, f), A(u, i, f), s && s.m(u, f), A(u, r, f);
    },
    p(u, f) {
      /*p*/
      u[38].desc != null ? o ? o.p(u, f) : (o = Ai(u), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? a || (a = Hi(), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null), /*progress_level*/
      u[14] != null ? s ? s.p(u, f) : (s = Bi(u), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(u) {
      u && (T(t), T(n), T(i), T(r)), l && l.d(u), o && o.d(u), a && a.d(u), s && s.d(u);
    }
  };
}
function Su(e) {
  let t;
  return {
    c() {
      t = M(" /");
    },
    m(n, i) {
      A(n, t, i);
    },
    d(n) {
      n && T(t);
    }
  };
}
function Ai(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = M(t);
    },
    m(i, r) {
      A(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = /*p*/
      i[38].desc + "") && J(n, t);
    },
    d(i) {
      i && T(n);
    }
  };
}
function Hi(e) {
  let t;
  return {
    c() {
      t = M("-");
    },
    m(n, i) {
      A(n, t, i);
    },
    d(n) {
      n && T(t);
    }
  };
}
function Bi(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, i;
  return {
    c() {
      n = M(t), i = M("%");
    },
    m(r, l) {
      A(r, n, l), A(r, i, l);
    },
    p(r, l) {
      l[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (r[14][
        /*i*/
        r[40]
      ] || 0)).toFixed(1) + "") && J(n, t);
    },
    d(r) {
      r && (T(n), T(i));
    }
  };
}
function Ci(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && Ti(e)
  );
  return {
    c() {
      n && n.c(), t = De();
    },
    m(i, r) {
      n && n.m(i, r), A(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].desc != null || /*progress_level*/
      i[14] && /*progress_level*/
      i[14][
        /*i*/
        i[40]
      ] != null ? n ? n.p(i, r) : (n = Ti(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && T(t), n && n.d(i);
    }
  };
}
function Pi(e) {
  let t, n;
  return {
    c() {
      t = he("p"), n = M(
        /*loading_text*/
        e[9]
      ), oe(t, "class", "loading svelte-1txqlrd");
    },
    m(i, r) {
      A(i, t, r), ye(t, n);
    },
    p(i, r) {
      r[0] & /*loading_text*/
      512 && J(
        n,
        /*loading_text*/
        i[9]
      );
    },
    d(i) {
      i && T(t);
    }
  };
}
function Tu(e) {
  let t, n, i, r, l;
  const o = [du, mu], a = [];
  function s(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = s(e)) && (i = a[n] = o[n](e)), {
    c() {
      t = he("div"), i && i.c(), oe(t, "class", r = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-1txqlrd"), Q(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), Q(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), Q(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), Q(
        t,
        "border",
        /*border*/
        e[12]
      ), pe(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), pe(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      A(u, t, f), ~n && a[n].m(t, null), e[31](t), l = !0;
    },
    p(u, f) {
      let c = n;
      n = s(u), n === c ? ~n && a[n].p(u, f) : (i && (mr(), Oe(a[c], 1, 1, () => {
        a[c] = null;
      }), hr()), ~n ? (i = a[n], i ? i.p(u, f) : (i = a[n] = o[n](u), i.c()), ke(i, 1), i.m(t, null)) : i = null), (!l || f[0] & /*variant, show_progress*/
      320 && r !== (r = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1txqlrd")) && oe(t, "class", r), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && Q(t, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Q(
        t,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && Q(
        t,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && Q(
        t,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && pe(
        t,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && pe(
        t,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      l || (ke(i), l = !0);
    },
    o(u) {
      Oe(i), l = !1;
    },
    d(u) {
      u && T(t), ~n && a[n].d(), e[31](null);
    }
  };
}
let ut = [], Xt = !1;
async function Au(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (ut.push(e), !Xt)
      Xt = !0;
    else
      return;
    await cu(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let i = 0; i < ut.length; i++) {
        const l = ut[i].getBoundingClientRect();
        (i === 0 || l.top + window.scrollY <= n[0]) && (n[0] = l.top + window.scrollY, n[1] = i);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Xt = !1, ut = [];
    });
  }
}
function Hu(e, t, n) {
  let i, { $$slots: r = {}, $$scope: l } = t, { i18n: o } = t, { eta: a = null } = t, { queue: s = !1 } = t, { queue_position: u } = t, { queue_size: f } = t, { status: c } = t, { scroll_to_output: h = !1 } = t, { timer: _ = !0 } = t, { show_progress: m = "full" } = t, { message: H = null } = t, { progress: E = null } = t, { variant: w = "default" } = t, { loading_text: g = "Loading..." } = t, { absolute: b = !0 } = t, { translucent: d = !1 } = t, { border: v = !1 } = t, { autoscroll: k } = t, R, O = !1, Y = 0, U = 0, j = null, Te = 0, q = null, y, ne = null, $e = !0;
  const Tt = () => {
    n(25, Y = performance.now()), n(26, U = 0), O = !0, et();
  };
  function et() {
    requestAnimationFrame(() => {
      n(26, U = (performance.now() - Y) / 1e3), O && et();
    });
  }
  function tt() {
    n(26, U = 0), O && (O = !1);
  }
  hu(() => {
    O && tt();
  });
  let nt = null;
  function At(S) {
    di[S ? "unshift" : "push"](() => {
      ne = S, n(16, ne), n(7, E), n(14, q), n(15, y);
    });
  }
  function Ht(S) {
    di[S ? "unshift" : "push"](() => {
      R = S, n(13, R);
    });
  }
  return e.$$set = (S) => {
    "i18n" in S && n(1, o = S.i18n), "eta" in S && n(0, a = S.eta), "queue" in S && n(21, s = S.queue), "queue_position" in S && n(2, u = S.queue_position), "queue_size" in S && n(3, f = S.queue_size), "status" in S && n(4, c = S.status), "scroll_to_output" in S && n(22, h = S.scroll_to_output), "timer" in S && n(5, _ = S.timer), "show_progress" in S && n(6, m = S.show_progress), "message" in S && n(23, H = S.message), "progress" in S && n(7, E = S.progress), "variant" in S && n(8, w = S.variant), "loading_text" in S && n(9, g = S.loading_text), "absolute" in S && n(10, b = S.absolute), "translucent" in S && n(11, d = S.translucent), "border" in S && n(12, v = S.border), "autoscroll" in S && n(24, k = S.autoscroll), "$$scope" in S && n(28, l = S.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (a === null ? n(0, a = j) : s && n(0, a = (performance.now() - Y) / 1e3 + a), a != null && (n(19, nt = a.toFixed(1)), n(27, j = a))), e.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && n(17, Te = a === null || a <= 0 || !U ? null : Math.min(U / a, 1)), e.$$.dirty[0] & /*progress*/
    128 && E != null && n(18, $e = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (E != null ? n(14, q = E.map((S) => {
      if (S.index != null && S.length != null)
        return S.index / S.length;
      if (S.progress != null)
        return S.progress;
    })) : n(14, q = null), q ? (n(15, y = q[q.length - 1]), ne && (y === 0 ? n(16, ne.style.transition = "0", ne) : n(16, ne.style.transition = "150ms", ne))) : n(15, y = void 0)), e.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? Tt() : tt()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && R && h && (c === "pending" || c === "complete") && Au(R, k), e.$$.dirty[0] & /*status, message*/
    8388624, e.$$.dirty[0] & /*timer_diff*/
    67108864 && n(20, i = U.toFixed(1));
  }, [
    a,
    o,
    u,
    f,
    c,
    _,
    m,
    E,
    w,
    g,
    b,
    d,
    v,
    R,
    q,
    y,
    ne,
    Te,
    $e,
    nt,
    i,
    s,
    h,
    H,
    k,
    Y,
    U,
    j,
    l,
    r,
    At,
    Ht
  ];
}
class Bu extends tu {
  constructor(t) {
    super(), su(
      this,
      t,
      Hu,
      Tu,
      uu,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Cu,
  add_flush_callback: Pu,
  assign: Iu,
  bind: Nu,
  binding_callbacks: Lu,
  create_component: sn,
  destroy_component: an,
  detach: ku,
  get_spread_object: Ou,
  get_spread_update: Mu,
  init: Ru,
  insert: Du,
  mount_component: un,
  safe_not_equal: Uu,
  space: xu,
  transition_in: fn,
  transition_out: cn
} = window.__gradio__svelte__internal, { createEventDispatcher: Gu } = window.__gradio__svelte__internal;
function Fu(e) {
  let t, n, i, r, l;
  const o = [
    {
      autoscroll: (
        /*gradio*/
        e[20].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[20].i18n
    ) },
    /*loading_status*/
    e[1]
  ];
  let a = {};
  for (let f = 0; f < o.length; f += 1)
    a = Iu(a, o[f]);
  t = new Bu({ props: a });
  function s(f) {
    e[21](f);
  }
  let u = {
    label: (
      /*label*/
      e[3]
    ),
    value: (
      /*value*/
      e[9]
    ),
    show_label: (
      /*show_label*/
      e[2]
    ),
    root: (
      /*root*/
      e[4]
    ),
    proxy_url: (
      /*proxy_url*/
      e[5]
    ),
    columns: (
      /*columns*/
      e[13]
    ),
    rows: (
      /*rows*/
      e[14]
    ),
    height: (
      /*height*/
      e[15]
    ),
    preview: (
      /*preview*/
      e[16]
    ),
    object_fit: (
      /*object_fit*/
      e[18]
    ),
    allow_preview: (
      /*allow_preview*/
      e[17]
    ),
    show_share_button: (
      /*show_share_button*/
      e[19]
    ),
    i18n: (
      /*gradio*/
      e[20].i18n
    )
  };
  return (
    /*selected_index*/
    e[0] !== void 0 && (u.selected_index = /*selected_index*/
    e[0]), i = new qa({ props: u }), Lu.push(() => Nu(i, "selected_index", s)), i.$on(
      "change",
      /*change_handler*/
      e[22]
    ), i.$on(
      "select",
      /*select_handler*/
      e[23]
    ), i.$on(
      "share",
      /*share_handler*/
      e[24]
    ), i.$on(
      "error",
      /*error_handler*/
      e[25]
    ), {
      c() {
        sn(t.$$.fragment), n = xu(), sn(i.$$.fragment);
      },
      m(f, c) {
        un(t, f, c), Du(f, n, c), un(i, f, c), l = !0;
      },
      p(f, c) {
        const h = c & /*gradio, loading_status*/
        1048578 ? Mu(o, [
          c & /*gradio*/
          1048576 && {
            autoscroll: (
              /*gradio*/
              f[20].autoscroll
            )
          },
          c & /*gradio*/
          1048576 && { i18n: (
            /*gradio*/
            f[20].i18n
          ) },
          c & /*loading_status*/
          2 && Ou(
            /*loading_status*/
            f[1]
          )
        ]) : {};
        t.$set(h);
        const _ = {};
        c & /*label*/
        8 && (_.label = /*label*/
        f[3]), c & /*value*/
        512 && (_.value = /*value*/
        f[9]), c & /*show_label*/
        4 && (_.show_label = /*show_label*/
        f[2]), c & /*root*/
        16 && (_.root = /*root*/
        f[4]), c & /*proxy_url*/
        32 && (_.proxy_url = /*proxy_url*/
        f[5]), c & /*columns*/
        8192 && (_.columns = /*columns*/
        f[13]), c & /*rows*/
        16384 && (_.rows = /*rows*/
        f[14]), c & /*height*/
        32768 && (_.height = /*height*/
        f[15]), c & /*preview*/
        65536 && (_.preview = /*preview*/
        f[16]), c & /*object_fit*/
        262144 && (_.object_fit = /*object_fit*/
        f[18]), c & /*allow_preview*/
        131072 && (_.allow_preview = /*allow_preview*/
        f[17]), c & /*show_share_button*/
        524288 && (_.show_share_button = /*show_share_button*/
        f[19]), c & /*gradio*/
        1048576 && (_.i18n = /*gradio*/
        f[20].i18n), !r && c & /*selected_index*/
        1 && (r = !0, _.selected_index = /*selected_index*/
        f[0], Pu(() => r = !1)), i.$set(_);
      },
      i(f) {
        l || (fn(t.$$.fragment, f), fn(i.$$.fragment, f), l = !0);
      },
      o(f) {
        cn(t.$$.fragment, f), cn(i.$$.fragment, f), l = !1;
      },
      d(f) {
        f && ku(n), an(t, f), an(i, f);
      }
    }
  );
}
function ju(e) {
  let t, n;
  return t = new Nr({
    props: {
      visible: (
        /*visible*/
        e[8]
      ),
      variant: "solid",
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[6]
      ),
      elem_classes: (
        /*elem_classes*/
        e[7]
      ),
      container: (
        /*container*/
        e[10]
      ),
      scale: (
        /*scale*/
        e[11]
      ),
      min_width: (
        /*min_width*/
        e[12]
      ),
      allow_overflow: !1,
      height: typeof /*height*/
      e[15] == "number" ? (
        /*height*/
        e[15]
      ) : void 0,
      $$slots: { default: [Fu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      sn(t.$$.fragment);
    },
    m(i, r) {
      un(t, i, r), n = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*visible*/
      256 && (l.visible = /*visible*/
      i[8]), r & /*elem_id*/
      64 && (l.elem_id = /*elem_id*/
      i[6]), r & /*elem_classes*/
      128 && (l.elem_classes = /*elem_classes*/
      i[7]), r & /*container*/
      1024 && (l.container = /*container*/
      i[10]), r & /*scale*/
      2048 && (l.scale = /*scale*/
      i[11]), r & /*min_width*/
      4096 && (l.min_width = /*min_width*/
      i[12]), r & /*height*/
      32768 && (l.height = typeof /*height*/
      i[15] == "number" ? (
        /*height*/
        i[15]
      ) : void 0), r & /*$$scope, label, value, show_label, root, proxy_url, columns, rows, height, preview, object_fit, allow_preview, show_share_button, gradio, selected_index, loading_status*/
      136307263 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (fn(t.$$.fragment, i), n = !0);
    },
    o(i) {
      cn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      an(t, i);
    }
  };
}
function Vu(e, t, n) {
  let { loading_status: i } = t, { show_label: r } = t, { label: l } = t, { root: o } = t, { proxy_url: a } = t, { elem_id: s = "" } = t, { elem_classes: u = [] } = t, { visible: f = !0 } = t, { value: c = null } = t, { container: h = !0 } = t, { scale: _ = null } = t, { min_width: m = void 0 } = t, { columns: H = [2] } = t, { rows: E = void 0 } = t, { height: w = "auto" } = t, { preview: g } = t, { allow_preview: b = !0 } = t, { selected_index: d = null } = t, { object_fit: v = "cover" } = t, { show_share_button: k = !1 } = t, { gradio: R } = t;
  const O = Gu();
  function Y(y) {
    d = y, n(0, d);
  }
  const U = () => R.dispatch("change", c), j = (y) => R.dispatch("select", y.detail), Te = (y) => R.dispatch("share", y.detail), q = (y) => R.dispatch("error", y.detail);
  return e.$$set = (y) => {
    "loading_status" in y && n(1, i = y.loading_status), "show_label" in y && n(2, r = y.show_label), "label" in y && n(3, l = y.label), "root" in y && n(4, o = y.root), "proxy_url" in y && n(5, a = y.proxy_url), "elem_id" in y && n(6, s = y.elem_id), "elem_classes" in y && n(7, u = y.elem_classes), "visible" in y && n(8, f = y.visible), "value" in y && n(9, c = y.value), "container" in y && n(10, h = y.container), "scale" in y && n(11, _ = y.scale), "min_width" in y && n(12, m = y.min_width), "columns" in y && n(13, H = y.columns), "rows" in y && n(14, E = y.rows), "height" in y && n(15, w = y.height), "preview" in y && n(16, g = y.preview), "allow_preview" in y && n(17, b = y.allow_preview), "selected_index" in y && n(0, d = y.selected_index), "object_fit" in y && n(18, v = y.object_fit), "show_share_button" in y && n(19, k = y.show_share_button), "gradio" in y && n(20, R = y.gradio);
  }, e.$$.update = () => {
    e.$$.dirty & /*selected_index*/
    1 && O("prop_change", { selected_index: d });
  }, [
    d,
    i,
    r,
    l,
    o,
    a,
    s,
    u,
    f,
    c,
    h,
    _,
    m,
    H,
    E,
    w,
    g,
    b,
    v,
    k,
    R,
    Y,
    U,
    j,
    Te,
    q
  ];
}
class zu extends Cu {
  constructor(t) {
    super(), Ru(this, t, Vu, ju, Uu, {
      loading_status: 1,
      show_label: 2,
      label: 3,
      root: 4,
      proxy_url: 5,
      elem_id: 6,
      elem_classes: 7,
      visible: 8,
      value: 9,
      container: 10,
      scale: 11,
      min_width: 12,
      columns: 13,
      rows: 14,
      height: 15,
      preview: 16,
      allow_preview: 17,
      selected_index: 0,
      object_fit: 18,
      show_share_button: 19,
      gradio: 20
    });
  }
}
export {
  qa as BaseGallery,
  zu as default
};
