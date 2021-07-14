(this["webpackJsonpreact-omdb-app"] =
  this["webpackJsonpreact-omdb-app"] || []).push([
  [0],
  {
    15: function (e, t, a) {},
    18: function (e, t, a) {},
    19: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(1),
        c = a.n(r),
        s = a(5),
        n = a.n(s),
        i = (a(14), a(15), a(2)),
        o = a.n(i),
        l = a(4),
        d = a(6),
        j = a(7),
        b = a(9),
        h = a(8),
        u = a(0),
        m = function (e) {
          var t = e.movie,
            a = t.Poster,
            r = t.Title,
            c = t.Year,
            s = t.Type;
          return Object(u.jsx)("div", {
            className: "col-md-4",
            children: Object(u.jsxs)("div", {
              className: "card",
              children: [
                Object(u.jsx)("img", {
                  src: a,
                  alt: r,
                  className: "card-img-top",
                  width: "100",
                }),
                Object(u.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(u.jsxs)("h4", { children: [r, " ", c] }),
                    Object(u.jsx)("p", { children: s }),
                  ],
                }),
              ],
            }),
          });
        },
        x = (a(18), a.p + "static/media/oval.3b24a6b9.svg"),
        f = function () {
          return Object(u.jsx)("div", {
            children: Object(u.jsx)("img", {
              className: "loader",
              src: x,
              alt: "Cargando...",
            }),
          });
        },
        O = "http://www.omdbapi.com/?i=tt3896198&apikey=4f5613f2",
        p = (function (e) {
          Object(b.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            var e;
            return (
              Object(d.a)(this, a),
              ((e = t.call(this)).state = {
                db: [],
                searchTerm: "",
                error: "",
                loading: !1,
              }),
              e
            );
          }
          return (
            Object(j.a)(a, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(l.a)(
                    o.a.mark(function e() {
                      var t, a;
                      return o.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.setState({ loading: !0 }),
                                  (e.next = 3),
                                  fetch("".concat(O, "&s=robot"))
                                );
                              case 3:
                                return (t = e.sent), (e.next = 6), t.json();
                              case 6:
                                (a = e.sent),
                                  this.setState({ db: a.Search, loading: !1 });
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "handleSubmit",
                value: (function () {
                  var e = Object(l.a)(
                    o.a.mark(function e(t) {
                      var a, r, c;
                      return o.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (t.preventDefault(),
                                  this.setState({ loading: !0 }),
                                  this.state.searchTerm)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.setState({
                                    error: "Por favor escribe un texto valido",
                                    loading: !1,
                                  })
                                );
                              case 4:
                                return (
                                  (a = ""
                                    .concat(O, "&s=")
                                    .concat(this.state.searchTerm)),
                                  (e.next = 7),
                                  fetch(a)
                                );
                              case 7:
                                return (r = e.sent), (e.next = 10), r.json();
                              case 10:
                                if (((c = e.sent), c.Search)) {
                                  e.next = 14;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.setState({
                                    error: "No hay resultados",
                                    loading: !1,
                                  })
                                );
                              case 14:
                                this.setState({
                                  db: c.Search,
                                  error: "",
                                  searchTerm: "",
                                  loading: !1,
                                });
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.db,
                    r = t.loading;
                  return Object(u.jsxs)("div", {
                    children: [
                      Object(u.jsx)("div", {
                        className: "row",
                        children: Object(u.jsxs)("div", {
                          className: "col-md-4 offset-md-4 p-4",
                          children: [
                            Object(u.jsx)("form", {
                              onSubmit: function (t) {
                                return e.handleSubmit(t);
                              },
                              children: Object(u.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Buscar",
                                autoComplete: "off",
                                autoFocus: !0,
                                onChange: function (t) {
                                  return e.setState({
                                    searchTerm: t.target.value,
                                  });
                                },
                                value: this.state.searchTerm,
                              }),
                            }),
                            Object(u.jsx)("p", {
                              className: "text-white",
                              children: this.state.error
                                ? this.state.error
                                : "",
                            }),
                            r && Object(u.jsx)(f, {}),
                          ],
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "row",
                        children: a.map(function (e) {
                          return Object(u.jsx)(m, { movie: e }, e.imdbID);
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(c.a.Component),
        v = function () {
          return Object(u.jsx)("div", {
            children: Object(u.jsx)("footer", {
              className: "text-center footer-style",
              children: Object(u.jsx)("div", {
                className: "container",
                children: Object(u.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(u.jsxs)("div", {
                      className: "col-md-6 footer-col",
                      children: [
                        Object(u.jsx)("h3", { children: "Direcci\xf3n" }),
                        Object(u.jsxs)("p", {
                          children: [
                            "Merlo - Argentina ",
                            Object(u.jsx)("br", {}),
                            "Urien 188",
                          ],
                        }),
                      ],
                    }),
                    Object(u.jsxs)("div", {
                      className: "col-md-6 footer-col",
                      children: [
                        Object(u.jsx)("h3", { children: "Mis redes" }),
                        Object(u.jsxs)("ul", {
                          className: "list-inline",
                          children: [
                            Object(u.jsx)("li", {
                              children: Object(u.jsx)("a", {
                                target: "blank",
                                href: "https://www.facebook.com/axel.orellana.31337",
                                className: "btn-social btn-outline",
                                children: Object(u.jsx)("i", {
                                  className: "fa fa-fw fa-facebook",
                                }),
                              }),
                            }),
                            Object(u.jsx)("li", {
                              children: Object(u.jsx)("a", {
                                target: "blank",
                                href: "https://www.linkedin.com/in/axel-orellana/",
                                className: "btn-social btn-outline",
                                children: Object(u.jsx)("i", {
                                  className: "fa fa-fw fa-linkedin",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        N = function () {
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("nav", {
                className:
                  "navbar navbar-dark bg-dark border-bottom border-white",
                children: Object(u.jsx)("a", {
                  href: "https://Axe10rellana.github.io/movieapp/movieapp",
                  className: "navbar-brand",
                  children: "MovieApp",
                }),
              }),
              Object(u.jsx)("main", {
                className: "bg-dark",
                children: Object(u.jsx)("div", {
                  className: "container",
                  children: Object(u.jsx)(p, {}),
                }),
              }),
              Object(u.jsx)(v, {}),
            ],
          });
        };
      n.a.render(
        Object(u.jsx)(c.a.StrictMode, { children: Object(u.jsx)(N, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.68d14123.chunk.js.map
