(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    137: function (e, t, n) {
      'use strict';
      n.r(t);
      var c = n(1),
        o = n.n(c),
        a = n(59),
        r = n.n(a),
        s = n(43),
        i = n(67),
        l = n(3),
        u = n(6),
        d = n(4),
        j = n(0),
        b = Object(d.f)(function (e) {
          var t = Object(c.useState)(),
            n = Object(l.a)(t, 2),
            o = n[0],
            a = n[1];
          return Object(j.jsx)('nav', {
            className: 'navbar navbar-expand-lg navbar-dark bg-dark',
            children: Object(j.jsxs)('div', {
              className: 'container-fluid',
              children: [
                Object(j.jsx)(u.b, {
                  className: 'navbar-brand',
                  to: '/',
                  children: 'CollabCode',
                }),
                Object(j.jsx)('button', {
                  className: 'navbar-toggler',
                  type: 'button',
                  'data-bs-toggle': 'collapse',
                  'data-bs-target': '#navbarSupportedContent',
                  'aria-controls': 'navbarSupportedContent',
                  'aria-expanded': 'false',
                  'aria-label': 'Toggle navigation',
                  children: Object(j.jsx)('span', {
                    className: 'navbar-toggler-icon',
                  }),
                }),
                Object(j.jsxs)('div', {
                  className: 'collapse navbar-collapse',
                  id: 'navbarSupportedContent',
                  children: [
                    Object(j.jsxs)('ul', {
                      className: 'navbar-nav me-auto mb-2 mb-lg-0',
                      children: [
                        Object(j.jsx)('li', {
                          className: 'nav-item',
                          children: Object(j.jsx)(u.b, {
                            className: 'nav-link active',
                            'aria-current': 'page',
                            to: '/',
                            children: 'Home',
                          }),
                        }),
                        Object(j.jsx)('li', {
                          className: 'nav-item',
                          children: Object(j.jsx)(u.b, {
                            className: 'nav-link active',
                            'aria-current': 'page',
                            to: '/newroom',
                            children: 'New Room',
                          }),
                        }),
                        Object(j.jsx)('li', {
                          className: 'nav-item',
                          children: Object(j.jsx)(u.b, {
                            className: 'nav-link active',
                            'aria-current': 'page',
                            to: '/joinroom',
                            children: 'Join Room',
                          }),
                        }),
                      ],
                    }),
                    Object(j.jsxs)('div', {
                      className: 'd-flex',
                      children: [
                        Object(j.jsx)('input', {
                          className: 'form-control me-2',
                          type: 'search',
                          placeholder: 'Enter Room ID',
                          'aria-label': 'Search',
                          value: o,
                          onChange: function (e) {
                            return a(e.target.value);
                          },
                        }),
                        Object(j.jsx)('button', {
                          className: 'btn btn-outline-success',
                          onClick: function () {
                            o && (e.history.push('/room/'.concat(o)), a(''));
                          },
                          children: 'Join',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        m = function (e) {
          var t = e.previousRooms;
          return (
            Object(c.useEffect)(function () {}, [t]),
            Object(j.jsx)('div', {
              children: Object(j.jsxs)('table', {
                className: 'table table-hover',
                children: [
                  Object(j.jsx)('thead', {
                    children: Object(j.jsxs)('tr', {
                      children: [
                        Object(j.jsx)('th', { scope: 'col', children: '#' }),
                        Object(j.jsx)('th', { scope: 'col', children: 'Name' }),
                      ],
                    }),
                  }),
                  Object(j.jsx)('tbody', {
                    children: t.map(function (e, t) {
                      var n = e.split('!', 2),
                        c = Object(l.a)(n, 2),
                        o = c[0],
                        a = c[1];
                      return Object(j.jsxs)(
                        'tr',
                        {
                          children: [
                            Object(j.jsx)('td', {
                              children: Object(j.jsx)(u.b, {
                                style: {
                                  display: 'block',
                                  textDecoration: 'none',
                                  color: 'black',
                                },
                                to: '/room/'.concat(o),
                                children: o,
                              }),
                            }),
                            Object(j.jsx)('td', {
                              children: Object(j.jsx)(u.b, {
                                style: {
                                  display: 'block',
                                  textDecoration: 'none',
                                  color: 'black',
                                },
                                to: '/room/'.concat(o),
                                children: a,
                              }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            })
          );
        },
        h = function (e) {
          var t = e.previousRooms;
          return Object(j.jsxs)('div', {
            className: 'p-5 text-center',
            children: [
              Object(j.jsxs)('div', {
                children: [
                  Object(j.jsx)('h1', {
                    className: 'mb-3',
                    children: 'CollabCode',
                  }),
                  Object(j.jsx)('h4', {
                    className: 'mb-3',
                    children: 'Code collaboration with voice rooms',
                  }),
                  Object(j.jsx)('small', {
                    className: 'mb-3',
                    children:
                      "No more GMeet coding sessions :p",
                  }),
                  Object(j.jsx)('br', {}),
                  Object(j.jsx)('br', {}),
                  Object(j.jsx)(u.b, {
                    className: 'btn btn-primary p-2 m-2',
                    to: '/newroom',
                    children: 'Create a room',
                  }),
                  Object(j.jsx)(u.b, {
                    className: 'btn btn-primary p-2 m-2',
                    to: '/joinroom',
                    children: 'Join an existing room',
                  }),
                ],
              }),
              Object(j.jsx)('br', {}),
              t.length > 0
                ? Object(j.jsxs)('div', {
                    children: [
                      Object(j.jsx)('hr', {}),
                      Object(j.jsx)('br', {}),
                      Object(j.jsx)('h3', { children: 'Your history' }),
                      Object(j.jsx)(m, { previousRooms: t }),
                    ],
                  })
                : Object(j.jsx)('div', {}),
            ],
          });
        },
        O = n(62),
        f = n.n(O),
        p =
          (n(82),
          n(83),
          n(84),
          n(85),
          n(86),
          n(87),
          n(88),
          n(89),
          n(90),
          n(91),
          n(92),
          n(93),
          n(94),
          n(95),
          n(96),
          n(97),
          n(98),
          function (e) {
            var t = e.language,
              n = e.theme,
              c = e.body,
              o = e.setBody,
              a = e.height,
              r = e.readOnly,
              s = e.width,
              i = e.fontSize;
            return Object(j.jsx)('div', {
              children: Object(j.jsx)(f.a, {
                mode: t,
                theme: n,
                onChange: function (e) {
                  return o(e);
                },
                value: c,
                width: s || '100%',
                height: a || '73vh',
                readOnly: r || !1,
                fontSize: i ? (isNaN(+i) ? 12 : +i) : 12,
                name: 'UNIQUE_ID_OF_DIV',
                showGutter: !0,
                editorProps: { $blockScrolling: !0 },
                setOptions: {
                  enableBasicAutocompletion: !0,
                  enableLiveAutocompletion: !0,
                  enableSnippets: !0,
                },
              }),
            });
          }),
        v = {
          c: 'c_cpp',
          cpp: 'c_cpp',
          python: 'python',
          python3: 'python',
          java: 'java',
          javascript: 'javascript',
          kotlin: 'kotlin',
          rust: 'rust',
        },
        x = n(63),
        g = n.n(x).a.create({ baseURL: '/' });
      function y(e, t) {
        var n;
        return function () {
          for (var c = arguments.length, o = new Array(c), a = 0; a < c; a++)
            o[a] = arguments[a];
          clearTimeout(n),
            (n = setTimeout(function () {
              e.apply(void 0, o);
            }, t));
        };
      }
      var N,
        S,
        w = n(68),
        k = n(66),
        I = Object(k.a)('/'),
        C = n(65),
        E = n(39),
        R = {},
        _ = {},
        z = Object(d.f)(function (e) {
          var t,
            n,
            o,
            a = Object(c.useState)(''),
            r = Object(l.a)(a, 2),
            s = r[0],
            i = r[1],
            u = Object(c.useState)(''),
            d = Object(l.a)(u, 2),
            b = d[0],
            m = d[1],
            h = Object(c.useState)(''),
            O = Object(l.a)(h, 2),
            f = O[0],
            x = O[1],
            k = Object(c.useState)(''),
            z = Object(l.a)(k, 2),
            A = z[0],
            D = z[1],
            L = Object(c.useState)(''),
            B = Object(l.a)(L, 2),
            J = B[0],
            T = B[1],
            U = Object(c.useState)(''),
            M = Object(l.a)(U, 2),
            P = M[0],
            F = M[1],
            G = Object(c.useState)(''),
            H = Object(l.a)(G, 2),
            V = H[0],
            W = H[1],
            Q = Object(c.useState)(window.innerWidth),
            Y = Object(l.a)(Q, 2),
            $ = Y[0],
            q = Y[1],
            K = Object.keys(v),
            X = [
              'monokai',
              'github',
              'solarized_dark',
              'dracula',
              'eclipse',
              'tomorrow_night',
              'tomorrow_night_blue',
              'xcode',
              'ambiance',
              'solarized_light',
            ].sort(),
            Z = Object(c.useState)(
              null !== (t = localStorage.getItem('language')) && void 0 !== t
                ? t
                : 'c'
            ),
            ee = Object(l.a)(Z, 2),
            te = ee[0],
            ne = ee[1],
            ce = Object(c.useState)(
              null !== (n = localStorage.getItem('theme')) && void 0 !== n
                ? n
                : 'monokai'
            ),
            oe = Object(l.a)(ce, 2),
            ae = oe[0],
            re = oe[1],
            se = Object(c.useState)(
              null !== (o = localStorage.getItem('fontSize')) && void 0 !== o
                ? o
                : '12'
            ),
            ie = Object(l.a)(se, 2),
            le = ie[0],
            ue = ie[1],
            de = 'running',
            je = 'Some error occured',
            be = Object(c.useState)('Idle'),
            me = Object(l.a)(be, 2),
            he = me[0],
            Oe = me[1],
            fe = Object(c.useState)(''),
            pe = Object(l.a)(fe, 2),
            ve = pe[0],
            xe = pe[1],
            ge = Object(c.useState)(null),
            ye = Object(l.a)(ge, 2),
            Ne = ye[0],
            Se = ye[1],
            we = Object(c.useState)(!1),
            ke = Object(l.a)(we, 2),
            Ie = ke[0],
            Ce = ke[1],
            Ee = Object(c.useState)(!1),
            Re = Object(l.a)(Ee, 2),
            _e = Re[0],
            ze = Re[1],
            Ae = new E.diff_match_patch();
          Object(c.useEffect)(
            function () {
              I.off('userjoined'),
                I.on('userjoined', function () {
                  I.emit('setBody', { value: f, roomId: s }),
                    I.emit('setLanguage', { value: te, roomId: s }),
                    I.emit('setInput', { value: A, roomId: s }),
                    I.emit('setOutput', { value: J, roomId: s });
                });
            },
            [f, te, A, J]
          ),
            Object(c.useEffect)(
              function () {
                I.off('updateBody'),
                  I.on('updateBody', function (e) {
                    var t = Ae.patch_apply(e, f),
                      n = Object(l.a)(t, 2),
                      c = n[0];
                    n[1][0] ? x(c) : console.log('Failed', f, e);
                  });
              },
              [f]
            ),
            Object(c.useEffect)(
              function () {
                I.off('updateInput'),
                  I.on('updateInput', function (e) {
                    var t = Ae.patch_apply(e, A),
                      n = Object(l.a)(t, 2),
                      c = n[0];
                    n[1][0] ? D(c) : console.log('Failed', f, e);
                  });
              },
              [A]
            ),
            Object(c.useEffect)(
              function () {
                var t = e.match.params.id;
                return (
                  i(t),
                  I.emit('joinroom', t),
                  g
                    .get('/api/room/'.concat(t))
                    .then(function (n) {
                      var c = n.data.data,
                        o = c.title,
                        a = c.body,
                        r = c.language,
                        s = c.input;
                      o &&
                        (m(o),
                        (document.title = 'CollabCode: '.concat(o)),
                        e.updatePreviousRooms(''.concat(t, '!').concat(o))),
                        x(null !== a && void 0 !== a ? a : ''),
                        D(null !== s && void 0 !== s ? s : ''),
                        r && ne(r),
                        console.log(r);
                    })
                    .catch(function (t) {
                      e.history.push('/404');
                    }),
                  function () {
                    N && (I.emit('leaveAudioRoom', N.id), Je()),
                      (S = null),
                      I.emit('leaveroom', t);
                  }
                );
              },
              [e.match.params.id]
            ),
            Object(c.useEffect)(function () {
              I.on('setBody', function (e) {
                x(e);
              }),
                I.on('setInput', function (e) {
                  D(e);
                }),
                I.on('setLanguage', function (e) {
                  ne(e);
                }),
                I.on('setOutput', function (e) {
                  T(e);
                });
              var e = function () {
                return q(window.innerWidth);
              };
              return (
                window.addEventListener('resize', e),
                function () {
                  window.removeEventListener('resize', e);
                }
              );
            }, []),
            Object(c.useEffect)(
              function () {
                Ce(!1);
              },
              [s]
            ),
            Object(c.useEffect)(
              function () {
                if (Ne && 'completed' == he) {
                  clearInterval(Ne), Se(null);
                  var e = new URLSearchParams({
                    id: ve,
                    api_key: 'guest',
                  }).toString();
                  g.get(
                    'https://api.paiza.io/runners/get_details?'.concat(e)
                  ).then(function (e) {
                    var t = e.data,
                      n = t.stdout,
                      c = t.stderr,
                      o = t.build_stderr;
                    console.log(e.data);
                    var a = '';
                    n && (a += n),
                      c && (a += c),
                      o && (a += o),
                      T(a),
                      I.emit('setOutput', { value: a, roomId: s });
                  });
                }
              },
              [he]
            );
          Object(c.useEffect)(
            function () {
              ve &&
                Se(
                  setInterval(function () {
                    return De();
                  }, 1e3)
                );
            },
            [ve]
          );
          var De = function () {
            var e = new URLSearchParams({
              id: ve,
              api_key: 'guest',
            }).toString();
            g.get('https://api.paiza.io/runners/get_status?'.concat(e)).then(
              function (e) {
                var t = e.data.status;
                Oe(t);
              }
            );
          };
          Object(c.useEffect)(
            function () {
              localStorage.setItem('theme', ae);
            },
            [ae]
          ),
            Object(c.useEffect)(
              function () {
                localStorage.setItem('language', te);
              },
              [te]
            ),
            Object(c.useEffect)(
              function () {
                localStorage.setItem('fontSize', le);
              },
              [le]
            );
          var Le = function (e) {
              var t = e.id,
                n = e.stream;
              if (!R[t]) {
                var c = document.createElement('audio');
                (c.id = t),
                  (c.srcObject = n),
                  N && t == N.id && ((S = n), (c.muted = !0)),
                  (c.autoplay = !0),
                  (R[t] = e),
                  console.log('Adding audio: ', t);
              }
            },
            Be = function (e) {
              delete R[e];
              var t = document.getElementById(e);
              t && t.remove();
            },
            Je = function () {
              (console.log('distroying', R, N.id), R[N.id]) &&
                R[N.id].stream.getTracks().forEach(function (e) {
                  e.stop();
                });
              N && N.destroy();
            };
          return (
            Object(c.useEffect)(
              function () {
                Ie
                  ? ((N = new C.a()).on('open', function (e) {
                      console.log('opened'),
                        (
                          navigator.mediaDevices.getUserMedia ||
                          navigator.mediaDevices.webkitGetUserMedia ||
                          navigator.mediaDevices.mozGetUserMedia ||
                          navigator.mediaDevices.msGetUserMedia
                        )({ audio: !0 }).then(function (t) {
                          I.emit('joinAudioRoom', s, e),
                            (t.getAudioTracks()[0].enabled = !_e),
                            (function (e) {
                              I.on('userJoinedAudio', function (t) {
                                var n = N.call(t, e, {
                                  metadata: { id: N.id },
                                });
                                n.on('stream', function (e) {
                                  Le({ id: t, stream: e });
                                }),
                                  n.on('close', function () {
                                    Be(t);
                                  }),
                                  n.on('error', function () {
                                    console.log('peer error'),
                                      N.destroyed || Be(t);
                                  }),
                                  (_[t] = n);
                              });
                            })(t),
                            (function (e) {
                              N.on('call', function (t) {
                                t.answer(e),
                                  t.on('stream', function (e) {
                                    Le({ id: t.metadata.id, stream: e });
                                  }),
                                  t.on('close', function () {
                                    Be(t.metadata.id);
                                  }),
                                  t.on('error', function () {
                                    console.log('peer error'),
                                      N.destroyed || Be(t.metadata.id);
                                  }),
                                  (_[t.metadata.id] = t);
                              });
                            })(t),
                            Le({ id: N.id, stream: t });
                        });
                    }),
                    N.on('error', function (e) {
                      console.log('peerjs error: ', e),
                        N.destroyed || N.reconnect();
                    }),
                    I.on('userLeftAudio', function (e) {
                      console.log('user left aiudio:', e),
                        _[e] && _[e].close(),
                        Be(e);
                    }))
                  : (console.log('leaving', N),
                    N && (I.emit('leaveAudioRoom', N.id), Je()),
                    (S = null));
              },
              [Ie]
            ),
            Object(c.useEffect)(
              function () {
                Ie && S && (S.getAudioTracks()[0].enabled = !_e);
              },
              [_e]
            ),
            Object(j.jsxs)('div', {
              children: [
                Object(j.jsxs)('div', {
                  className:
                    'row container-fluid text-center justify-content-center',
                  children: [
                    Object(j.jsxs)('div', {
                      className: 'form-group col-lg-2 col-md-3',
                      children: [
                        Object(j.jsx)('label', { children: 'Choose Language' }),
                        Object(j.jsx)('select', {
                          className: 'form-select',
                          defaultValue: te,
                          onChange: function (e) {
                            ne(e.target.value),
                              I.emit('setLanguage', {
                                value: e.target.value,
                                roomId: s,
                              });
                          },
                          children: K.map(function (e, t) {
                            return Object(j.jsx)(
                              'option',
                              { value: e, selected: e == te, children: e },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    Object(j.jsxs)('div', {
                      className: 'form-group col-lg-2 col-md-3',
                      children: [
                        Object(j.jsx)('label', { children: 'Choose Theme' }),
                        Object(j.jsx)('select', {
                          className: 'form-select',
                          defaultValue: ae,
                          onChange: function (e) {
                            return re(e.target.value);
                          },
                          children: X.map(function (e, t) {
                            return Object(j.jsx)(
                              'option',
                              { value: e, children: e },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    Object(j.jsxs)('div', {
                      className: 'form-group col-lg-2 col-md-3',
                      children: [
                        Object(j.jsx)('label', { children: 'Font Size' }),
                        Object(j.jsx)('select', {
                          className: 'form-select',
                          defaultValue: le,
                          onChange: function (e) {
                            return ue(e.target.value);
                          },
                          children: [
                            '8',
                            '10',
                            '12',
                            '14',
                            '16',
                            '18',
                            '20',
                            '22',
                            '24',
                            '26',
                            '28',
                            '30',
                            '32',
                          ].map(function (e, t) {
                            return Object(j.jsx)(
                              'option',
                              { value: e, children: e },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    Object(j.jsxs)('div', {
                      className: 'form-group col-lg-2 col-md-3',
                      children: [
                        Object(j.jsx)('br', {}),
                        Object(j.jsx)('button', {
                          className: 'btn btn-secondary',
                          onClick: function () {
                            navigator.clipboard.writeText(window.location.href);
                          },
                          children: 'Copy room link',
                        }),
                      ],
                    }),
                    Object(j.jsxs)('div', {
                      className: 'form-group col-lg-2 col-md-2',
                      children: [
                        Object(j.jsx)('br', {}),
                        Object(j.jsxs)('button', {
                          className: 'btn btn-'.concat(
                            Ie ? 'primary' : 'secondary'
                          ),
                          onClick: function () {
                            return Ce(!Ie);
                          },
                          children: [
                            Ie ? 'Leave Audio' : 'Join Audio',
                            ' Room',
                          ],
                        }),
                      ],
                    }),
                    Ie
                      ? Object(j.jsxs)('div', {
                          className: 'form-group col-lg-1 col-md-2',
                          children: [
                            Object(j.jsx)('br', {}),
                            Object(j.jsx)('button', {
                              className: 'btn btn-'.concat(
                                _e ? 'secondary' : 'primary'
                              ),
                              onClick: function () {
                                return ze(!_e);
                              },
                              children: _e ? 'Muted' : 'Speaking',
                            }),
                          ],
                        })
                      : Object(j.jsx)('div', {
                          className: 'form-group col-lg-1 col-md-2',
                        }),
                    Object(j.jsxs)('div', {
                      className: 'form-group col-lg-1 col-md-2',
                      children: [
                        Object(j.jsx)('br', {}),
                        Object(j.jsxs)('label', { children: ['Status: ', he] }),
                      ],
                    }),
                  ],
                }),
                Object(j.jsx)('hr', {}),
                Object(j.jsxs)(w.a, {
                  split: 'vertical',
                  minSize: 150,
                  maxSize: $ - 150,
                  defaultSize: $ / 2,
                  className: 'row text-center ',
                  style: { height: '78vh', width: '100vw', marginRight: '0' },
                  onChange: function (e) {
                    W((100 - e).toString()), F(e.toString());
                  },
                  children: [
                    Object(j.jsxs)('div', {
                      children: [
                        Object(j.jsxs)('div', {
                          className: 'row mb-1',
                          children: [
                            Object(j.jsx)('h5', {
                              className: 'col',
                              children: 'Code Here',
                            }),
                            Object(j.jsx)('div', {
                              className: 'form-group col',
                              children: Object(j.jsx)('button', {
                                className: 'btn btn-secondary',
                                onClick: function () {
                                  navigator.clipboard.writeText(f);
                                },
                                children: 'Copy Code',
                              }),
                            }),
                            Object(j.jsx)('div', {
                              className: 'form-group col',
                              children: Object(j.jsx)('button', {
                                className: 'btn btn-primary',
                                onClick: function () {
                                  if (he !== de) {
                                    Oe(de),
                                      g
                                        .patch('/api/room/'.concat(s), {
                                          title: b,
                                          body: f,
                                          input: A,
                                          language: te,
                                        })
                                        .then()
                                        .catch(function (e) {
                                          Oe(je);
                                        });
                                    var e = {
                                      source_code: f,
                                      language: te,
                                      input: A,
                                      api_key: 'guest',
                                    };
                                    g.post(
                                      'https://api.paiza.io/runners/create',
                                      e
                                    )
                                      .then(function (e) {
                                        var t = e.data,
                                          n = t.id,
                                          c = t.status;
                                        xe(n), Oe(c);
                                      })
                                      .catch(function (e) {
                                        xe(''), Oe(je);
                                      });
                                  }
                                },
                                disabled: he === de,
                                children: 'Save and Run',
                              }),
                            }),
                          ],
                        }),
                        Object(j.jsx)(p, {
                          theme: ae,
                          width: P,
                          language: v[te],
                          body: f,
                          setBody: function (e) {
                            var t = Ae.patch_make(f, e);
                            x(e),
                              y(function () {
                                return I.emit('updateBody', {
                                  value: t,
                                  roomId: s,
                                });
                              }, 100)();
                          },
                          fontSize: le,
                        }),
                      ],
                    }),
                    Object(j.jsxs)('div', {
                      className: 'text-center',
                      children: [
                        Object(j.jsx)('h5', { children: 'Input' }),
                        Object(j.jsx)(p, {
                          theme: ae,
                          language: '',
                          body: A,
                          setBody: function (e) {
                            var t = Ae.patch_make(A, e);
                            D(e),
                              y(function () {
                                return I.emit('updateInput', {
                                  value: t,
                                  roomId: s,
                                });
                              }, 100)();
                          },
                          height: '35vh',
                          width: V,
                          fontSize: le,
                        }),
                        Object(j.jsx)('h5', { children: 'Output' }),
                        Object(j.jsx)(p, {
                          theme: ae,
                          language: '',
                          body: J,
                          setBody: T,
                          readOnly: !0,
                          height: '39vh',
                          width: V,
                          fontSize: le,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        A = function () {
          return Object(j.jsxs)('div', {
            className: 'p-5 text-center',
            children: [
              Object(j.jsx)('h1', {
                className: 'mb-3',
                children: '404 Page not found',
              }),
              Object(j.jsx)(u.b, { to: '/', children: 'Return to home' }),
            ],
          });
        },
        D = {
          updatePreviousRooms: function () {
            console.log('default');
          },
        },
        L = [
          { path: '/room/:id', exact: !0, component: z, props: { props: D } },
          { path: '/404', exact: !0, component: A },
          {
            path: '/joinroom',
            exact: !0,
            component: function (e) {
              var t = Object(c.useState)(''),
                n = Object(l.a)(t, 2),
                o = n[0],
                a = n[1];
              return Object(j.jsx)('div', {
                className: 'container-fluid',
                children: Object(j.jsxs)('div', {
                  children: [
                    Object(j.jsx)('div', {
                      className:
                        'form-group text-center pt-5 mt-5 row justify-content-center',
                      children: Object(j.jsxs)('div', {
                        className: 'col-4',
                        children: [
                          Object(j.jsx)('h1', { children: 'Enter Room ID' }),
                          Object(j.jsx)('input', {
                            type: 'text',
                            value: o,
                            onChange: function (e) {
                              return a(e.target.value);
                            },
                            className: 'form-control',
                            placeholder: 'Enter room id',
                          }),
                          Object(j.jsxs)('small', {
                            id: 'emailHelp',
                            className: 'form-text text-muted',
                            children: [
                              'Ask from room host or ',
                              Object(j.jsx)(u.b, {
                                to: '/newroom',
                                children: ' Make your own room ',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(j.jsx)('div', {
                      className:
                        'form-group text-center pt-3 row justify-content-center',
                      children: Object(j.jsx)('button', {
                        onClick: function () {
                          o && e.history.push('/room/'.concat(o));
                        },
                        className: 'btn btn-primary col-2 text-lg',
                        children: Object(j.jsx)('h3', {
                          children: 'Join Room',
                        }),
                      }),
                    }),
                  ],
                }),
              });
            },
          },
          {
            path: '/newroom',
            exact: !0,
            component: function (e) {
              var t = Object(c.useState)(''),
                n = Object(l.a)(t, 2),
                o = n[0],
                a = n[1];
              return Object(j.jsx)('div', {
                className: 'container-fluid',
                children: Object(j.jsxs)('div', {
                  children: [
                    Object(j.jsx)('div', {
                      className:
                        'form-group text-center pt-5 mt-5 row justify-content-center',
                      children: Object(j.jsxs)('div', {
                        className: 'col-4',
                        children: [
                          Object(j.jsx)('h1', { children: 'Enter Room Name' }),
                          Object(j.jsx)('input', {
                            type: 'text',
                            value: o,
                            onChange: function (e) {
                              return a(e.target.value);
                            },
                            className: 'form-control',
                            placeholder: 'Enter room name',
                          }),
                          Object(j.jsxs)('small', {
                            id: 'emailHelp',
                            className: 'form-text text-muted',
                            children: [
                              'Create your room or ',
                              Object(j.jsx)(u.b, {
                                to: '/joinroom',
                                children: ' Join another ',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(j.jsx)('div', {
                      className:
                        'form-group text-center pt-3 row justify-content-center',
                      children: Object(j.jsx)('button', {
                        onClick: function () {
                          g.post('/api/room', { title: o })
                            .then(function (t) {
                              e.history.push('/room/'.concat(t.data.data.id));
                            })
                            .catch(function (e) {
                              alert('Looks like some error occured');
                            });
                        },
                        className: 'btn btn-primary col-2 text-lg',
                        children: Object(j.jsx)('h3', {
                          children: 'Join Room',
                        }),
                      }),
                    }),
                  ],
                }),
              });
            },
          },
          { path: '/', exact: !1, component: A },
        ],
        B = function () {
          var e = Object(c.useState)([]),
            t = Object(l.a)(e, 2),
            n = t[0],
            o = t[1];
          return (
            (D.updatePreviousRooms = function (e) {
              if (n[0] !== e) {
                var t = Object(i.a)(n);
                t.unshift(e), t.slice(0, 40), o(t);
              }
            }),
            Object(c.useEffect)(function () {
              var e = localStorage.getItem('previousRooms');
              e && o(JSON.parse(e).previousRooms);
            }, []),
            Object(c.useEffect)(
              function () {
                localStorage.setItem(
                  'previousRooms',
                  JSON.stringify({ previousRooms: n })
                );
              },
              [n]
            ),
            Object(j.jsx)('div', {
              style: { height: '100vh' },
              className: 'bg-light',
              children: Object(j.jsxs)(u.a, {
                children: [
                  Object(j.jsx)(b, {}),
                  Object(j.jsx)('br', {}),
                  Object(j.jsxs)(d.c, {
                    children: [
                      Object(j.jsx)(d.a, {
                        exact: !0,
                        path: '/',
                        render: function () {
                          return Object(j.jsx)(h, { previousRooms: n });
                        },
                      }),
                      L.map(function (e, t) {
                        return Object(j.jsx)(
                          d.a,
                          {
                            path: e.path,
                            exact: e.exact,
                            render: function (t) {
                              return Object(j.jsx)(
                                e.component,
                                Object(s.a)(
                                  Object(s.a)({}, t),
                                  e.props ? e.props.props : {}
                                )
                              );
                            },
                          },
                          t
                        );
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      r.a.render(
        Object(j.jsx)(o.a.StrictMode, { children: Object(j.jsx)(B, {}) }),
        document.getElementById('root')
      );
    },
  },
  [[137, 1, 2]],
]);
//# sourceMappingURL=main.7a17417a.chunk.js.map
