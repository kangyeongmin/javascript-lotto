(() => {
  var n = {
      221: (n) => {
        var t = {
            secondRankIndex: 1,
            percent: 100,
            moneyUnit: 1e3,
            moneyLimit: 1e5,
            lottoStart: 1,
            lottoEnd: 45,
            winningNumberCount: 6,
            lottoNumberCount: 6,
            losing: 1234,
            failFindIndex: -1,
          },
          e = { separator: ', ', retry: 'y', quit: 'n', comma: ',' },
          r = {
            moneyRange: '[ERROR] 구매 금액을 '
              .concat(t.moneyUnit.toLocaleString(), '원 이상 ')
              .concat(
                t.moneyLimit.toLocaleString(),
                '원 이하로 입력해 주세요.'
              ),
            moneyUnit: '[ERROR] 구매 금액을 '.concat(
              t.moneyUnit.toLocaleString(),
              '원 단위로 입력해 주세요.'
            ),
            number: '[ERROR] 자연수만 입력해 주세요.',
            lottoRange: '[ERROR] 로또 번호는 '
              .concat(t.lottoStart, '부터 ')
              .concat(t.lottoEnd, '로 입력해 주세요.'),
            uniqueWinningNumber:
              '[ERROR] 당첨 번호는 중복되지 않는 값들로 입력해 주세요.',
            uniqueBonusNumber:
              '[ERROR] 당첨 번호와 중복되지 않는 값으로 입력해 주세요.',
            winningNumberCount: '[ERROR] 당첨 번호는 '.concat(
              t.winningNumberCount,
              '개로 입력해 주세요.'
            ),
            retryOption: '[ERROR] 재시작 옵션은 '
              .concat(e.retry, ' 혹은 ')
              .concat(e.quit, '으로 입력해 주세요.'),
          };
        n.exports = {
          ERROR_MESSAGE: r,
          MAGIC_NUMBER: t,
          MAGIC_LITERAL: e,
          RANK_INFORMATIONS: [
            {
              rank: 1,
              reward: 2e9,
              matchedCount: 6,
              isBonus: !1,
              matched: '6개',
            },
            {
              rank: 2,
              reward: 3e7,
              matchedCount: 5,
              isBonus: !0,
              matched: '5개+보너스볼',
            },
            {
              rank: 3,
              reward: 15e5,
              matchedCount: 5,
              isBonus: !1,
              matched: '5개',
            },
            {
              rank: 4,
              reward: 5e4,
              matchedCount: 4,
              isBonus: !1,
              matched: '4개',
            },
            {
              rank: 5,
              reward: 5e3,
              matchedCount: 3,
              isBonus: !1,
              matched: '3개',
            },
          ],
        };
      },
      493: (n) => {
        var t = document.getElementById('moneyInput'),
          e = document.getElementById('bonusNumberInput'),
          r = document.getElementById('purchaseButton'),
          o = document.getElementById('confirmButton'),
          i = document.getElementById('retryButton'),
          a = document.getElementById('closeButton'),
          u = document.getElementById('winningNumbersGroup'),
          s = document.getElementById('lottoContent'),
          l = document.getElementById('result'),
          c = document.getElementById('count'),
          A = document.getElementById('rate'),
          p = document.getElementById('resultListContainer'),
          f = document.getElementById('lottoList');
        n.exports = {
          moneyInput: t,
          bonusNumberInput: e,
          purchaseButton: r,
          confirmButton: o,
          retryButton: i,
          closeButton: a,
          winningNumbersGroup: u,
          lottoContent: s,
          result: l,
          count: c,
          rate: A,
          resultListContainer: p,
          lottoList: f,
        };
      },
      41: (n, t, e) => {
        function r(n) {
          return (
            (r =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      'function' == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
                  }),
            r(n)
          );
        }
        function o(n, t) {
          (null == t || t > n.length) && (t = n.length);
          for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
          return r;
        }
        function i(n, t) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(
                n,
                (void 0,
                (i = (function (n, t) {
                  if ('object' !== r(n) || null === n) return n;
                  var e = n[Symbol.toPrimitive];
                  if (void 0 !== e) {
                    var o = e.call(n, 'string');
                    if ('object' !== r(o)) return o;
                    throw new TypeError(
                      '@@toPrimitive must return a primitive value.'
                    );
                  }
                  return String(n);
                })(o.key)),
                'symbol' === r(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function a(n, t) {
          s(n, t), t.add(n);
        }
        function u(n, t, e) {
          s(n, t), t.set(n, e);
        }
        function s(n, t) {
          if (t.has(n))
            throw new TypeError(
              'Cannot initialize the same private elements twice on an object'
            );
        }
        function l(n, t, e) {
          if (!t.has(n))
            throw new TypeError(
              'attempted to get private field on non-instance'
            );
          return e;
        }
        function c(n, t) {
          return (function (n, t) {
            return t.get ? t.get.call(n) : t.value;
          })(n, p(n, t, 'get'));
        }
        function A(n, t, e) {
          return (
            (function (n, t, e) {
              if (t.set) t.set.call(n, e);
              else {
                if (!t.writable)
                  throw new TypeError(
                    'attempted to set read only private field'
                  );
                t.value = e;
              }
            })(n, p(n, t, 'set'), e),
            e
          );
        }
        function p(n, t, e) {
          if (!t.has(n))
            throw new TypeError(
              'attempted to ' + e + ' private field on non-instance'
            );
          return t.get(n);
        }
        var f = e(968).pickRandomNumberInRange,
          d = e(221),
          m = d.MAGIC_NUMBER,
          h = d.RANK_INFORMATIONS,
          g = new WeakMap(),
          b = new WeakMap(),
          E = new WeakSet(),
          y = new WeakSet(),
          B = new WeakSet(),
          v = new WeakSet(),
          w = new WeakSet(),
          C = (function () {
            function n() {
              !(function (n, t) {
                if (!(n instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
                a(this, w),
                a(this, v),
                a(this, B),
                a(this, y),
                a(this, E),
                u(this, g, { writable: !0, value: void 0 }),
                u(this, b, { writable: !0, value: void 0 }),
                A(this, b, { money: null, winning: null });
            }
            var t, e;
            return (
              (t = n),
              (e = [
                {
                  key: 'getLottos',
                  value: function () {
                    return c(this, g);
                  },
                },
                {
                  key: 'getMoney',
                  value: function () {
                    return c(this, b).money;
                  },
                },
                {
                  key: 'getWinning',
                  value: function () {
                    return c(this, b).winning;
                  },
                },
                {
                  key: 'setMoney',
                  value: function (n) {
                    c(this, b).money = n;
                  },
                },
                {
                  key: 'setWinning',
                  value: function (n) {
                    c(this, b).winning = n;
                  },
                },
                {
                  key: 'generateLottos',
                  value: function () {
                    var n = this,
                      t = this.getLottoCount();
                    A(
                      this,
                      g,
                      Array.from({ length: t }).map(function () {
                        return l(n, E, x)
                          .call(n)
                          .sort(function (n, t) {
                            return n - t;
                          });
                      })
                    );
                  },
                },
                {
                  key: 'getLottoCount',
                  value: function () {
                    return c(this, b).money.getAmount() / m.moneyUnit;
                  },
                },
                {
                  key: 'getCollectedRanks',
                  value: function () {
                    var n = this;
                    return c(this, g).reduce(
                      function (t, e) {
                        return l(n, y, k).call(n, e, t);
                      },
                      [0, 0, 0, 0, 0]
                    );
                  },
                },
              ]) && i(t.prototype, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              n
            );
          })();
        function x() {
          for (var n = new Set(); n.size < m.lottoNumberCount; ) {
            var t = f(m.lottoStart, m.lottoEnd);
            n.add(t);
          }
          return (
            (function (n) {
              if (Array.isArray(n)) return o(n);
            })((e = n)) ||
            (function (n) {
              if (
                ('undefined' != typeof Symbol && null != n[Symbol.iterator]) ||
                null != n['@@iterator']
              )
                return Array.from(n);
            })(e) ||
            (function (n, t) {
              if (n) {
                if ('string' == typeof n) return o(n, t);
                var e = Object.prototype.toString.call(n).slice(8, -1);
                return (
                  'Object' === e && n.constructor && (e = n.constructor.name),
                  'Map' === e || 'Set' === e
                    ? Array.from(n)
                    : 'Arguments' === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    ? o(n, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
          var e;
        }
        function k(n, t) {
          var e = t,
            r = l(this, B, S).call(this, n),
            o = l(this, v, R).call(this, r, l(this, w, N).call(this, n));
          return o !== m.losing && (e[o] += 1), e;
        }
        function S(n) {
          var t = c(this, b).winning.getWinningNumbers();
          return n.filter(function (n) {
            return t.includes(n);
          }).length;
        }
        function R(n, t) {
          var e = h.findIndex(function (e) {
            return e.isBonus === t && e.matchedCount === n;
          });
          return e === m.failFindIndex ? m.losing : e;
        }
        function N(n) {
          return n.includes(c(this, b).winning.getBonusNumber());
        }
        n.exports = C;
      },
      523: (n, t, e) => {
        function r(n) {
          return (
            (r =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      'function' == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
                  }),
            r(n)
          );
        }
        function o(n, t) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(
                n,
                (void 0,
                (i = (function (n, t) {
                  if ('object' !== r(n) || null === n) return n;
                  var e = n[Symbol.toPrimitive];
                  if (void 0 !== e) {
                    var o = e.call(n, 'string');
                    if ('object' !== r(o)) return o;
                    throw new TypeError(
                      '@@toPrimitive must return a primitive value.'
                    );
                  }
                  return String(n);
                })(o.key)),
                'symbol' === r(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function i(n, t, e) {
          if (!t.has(n))
            throw new TypeError(
              'attempted to ' + e + ' private field on non-instance'
            );
          return t.get(n);
        }
        var a = e(221),
          u = a.RANK_INFORMATIONS,
          s = a.MAGIC_NUMBER,
          l = new WeakMap(),
          c = (function () {
            function n() {
              var t, e, r;
              !(function (n, t) {
                if (!(n instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
                (r = { writable: !0, value: void 0 }),
                (function (n, t) {
                  if (t.has(n))
                    throw new TypeError(
                      'Cannot initialize the same private elements twice on an object'
                    );
                })((t = this), (e = l)),
                e.set(t, r);
            }
            var t, e;
            return (
              (t = n),
              (e = [
                {
                  key: 'getRate',
                  value: function () {
                    return (function (n, t) {
                      return t.get ? t.get.call(n) : t.value;
                    })(this, i(this, l, 'get'));
                  },
                },
                {
                  key: 'calculateRate',
                  value: function (n, t) {
                    var e,
                      r,
                      o,
                      a = t.reduce(function (n, t, e) {
                        return n + t * u[e].reward;
                      }, 0);
                    (e = this),
                      (r = l),
                      (o = Number(((a / n) * s.percent).toFixed(1))),
                      (function (n, t, e) {
                        if (t.set) t.set.call(n, e);
                        else {
                          if (!t.writable)
                            throw new TypeError(
                              'attempted to set read only private field'
                            );
                          t.value = e;
                        }
                      })(e, i(e, r, 'set'), o);
                  },
                },
              ]) && o(t.prototype, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              n
            );
          })();
        n.exports = c;
      },
      764: (n, t, e) => {
        function r(n) {
          return (
            (r =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      'function' == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
                  }),
            r(n)
          );
        }
        function o(n, t) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(
                n,
                (void 0,
                (i = (function (n, t) {
                  if ('object' !== r(n) || null === n) return n;
                  var e = n[Symbol.toPrimitive];
                  if (void 0 !== e) {
                    var o = e.call(n, 'string');
                    if ('object' !== r(o)) return o;
                    throw new TypeError(
                      '@@toPrimitive must return a primitive value.'
                    );
                  }
                  return String(n);
                })(o.key)),
                'symbol' === r(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function i(n, t) {
          if (t.has(n))
            throw new TypeError(
              'Cannot initialize the same private elements twice on an object'
            );
        }
        function a(n, t, e) {
          if (!t.has(n))
            throw new TypeError(
              'attempted to ' + e + ' private field on non-instance'
            );
          return t.get(n);
        }
        var u = e(968).inputValidator,
          s = e(221),
          l = s.ERROR_MESSAGE,
          c = s.MAGIC_NUMBER,
          A = new WeakMap(),
          p = new WeakSet(),
          f = (function () {
            function n(t) {
              var e, r, o;
              !(function (n, t) {
                if (!(n instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
                i(this, (e = p)),
                e.add(this),
                (function (n, t, e) {
                  i(n, t), t.set(n, { writable: !0, value: void 0 });
                })(this, A),
                (function (n, t, e) {
                  if (!t.has(n))
                    throw new TypeError(
                      'attempted to get private field on non-instance'
                    );
                  return e;
                })(this, p, d).call(this, t),
                (o = t),
                (function (n, t, e) {
                  if (t.set) t.set.call(n, e);
                  else {
                    if (!t.writable)
                      throw new TypeError(
                        'attempted to set read only private field'
                      );
                    t.value = e;
                  }
                })((r = this), a(r, A, 'set'), o);
            }
            var t, e;
            return (
              (t = n),
              (e = [
                {
                  key: 'getAmount',
                  value: function () {
                    return (function (n, t) {
                      return t.get ? t.get.call(n) : t.value;
                    })(this, a(this, A, 'get'));
                  },
                },
              ]) && o(t.prototype, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              n
            );
          })();
        function d(n) {
          if (!u.isNumber(n)) throw new Error(l.number);
          if (n > c.moneyLimit || n < c.moneyUnit)
            throw new Error(l.moneyRange);
          if (n % c.moneyUnit != 0) throw new Error(l.moneyUnit);
        }
        n.exports = f;
      },
      399: (n, t, e) => {
        function r(n) {
          return (
            (r =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      'function' == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
                  }),
            r(n)
          );
        }
        function o(n, t) {
          (null == t || t > n.length) && (t = n.length);
          for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
          return r;
        }
        function i(n, t) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(
                n,
                (void 0,
                (i = (function (n, t) {
                  if ('object' !== r(n) || null === n) return n;
                  var e = n[Symbol.toPrimitive];
                  if (void 0 !== e) {
                    var o = e.call(n, 'string');
                    if ('object' !== r(o)) return o;
                    throw new TypeError(
                      '@@toPrimitive must return a primitive value.'
                    );
                  }
                  return String(n);
                })(o.key)),
                'symbol' === r(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function a(n, t) {
          s(n, t), t.add(n);
        }
        function u(n, t, e) {
          s(n, t), t.set(n, e);
        }
        function s(n, t) {
          if (t.has(n))
            throw new TypeError(
              'Cannot initialize the same private elements twice on an object'
            );
        }
        function l(n, t, e) {
          return (
            (function (n, t, e) {
              if (t.set) t.set.call(n, e);
              else {
                if (!t.writable)
                  throw new TypeError(
                    'attempted to set read only private field'
                  );
                t.value = e;
              }
            })(n, p(n, t, 'set'), e),
            e
          );
        }
        function c(n, t, e) {
          if (!t.has(n))
            throw new TypeError(
              'attempted to get private field on non-instance'
            );
          return e;
        }
        function A(n, t) {
          return (function (n, t) {
            return t.get ? t.get.call(n) : t.value;
          })(n, p(n, t, 'get'));
        }
        function p(n, t, e) {
          if (!t.has(n))
            throw new TypeError(
              'attempted to ' + e + ' private field on non-instance'
            );
          return t.get(n);
        }
        var f = e(968).inputValidator,
          d = e(221),
          m = d.ERROR_MESSAGE,
          h = d.MAGIC_NUMBER,
          g = new WeakMap(),
          b = new WeakMap(),
          E = new WeakSet(),
          y = new WeakSet(),
          B = new WeakSet(),
          v = (function () {
            function n() {
              !(function (n, t) {
                if (!(n instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
                a(this, B),
                a(this, y),
                a(this, E),
                u(this, g, { writable: !0, value: void 0 }),
                u(this, b, { writable: !0, value: void 0 });
            }
            var t, e;
            return (
              (t = n),
              (e = [
                {
                  key: 'getWinningNumbers',
                  value: function () {
                    return A(this, g);
                  },
                },
                {
                  key: 'getBonusNumber',
                  value: function () {
                    return A(this, b);
                  },
                },
                {
                  key: 'setWinningNumbers',
                  value: function (n) {
                    c(this, E, w).call(this, n), l(this, g, n);
                  },
                },
                {
                  key: 'setBonusNumber',
                  value: function (n) {
                    c(this, y, C).call(this, n), l(this, b, n);
                  },
                },
              ]) && i(t.prototype, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              n
            );
          })();
        function w(n) {
          var t = this;
          if (
            (n.forEach(function (n) {
              c(t, B, x).call(t, n);
            }),
            !f.isUniqueArray(n))
          )
            throw new Error(m.uniqueWinningNumber);
          if (n.length !== h.winningNumberCount)
            throw new Error(m.winningNumberCount);
        }
        function C(n) {
          if (
            (c(this, B, x).call(this, n),
            !f.isUniqueArray(
              [].concat(
                ((t = A(this, g)),
                (function (n) {
                  if (Array.isArray(n)) return o(n);
                })(t) ||
                  (function (n) {
                    if (
                      ('undefined' != typeof Symbol &&
                        null != n[Symbol.iterator]) ||
                      null != n['@@iterator']
                    )
                      return Array.from(n);
                  })(t) ||
                  (function (n, t) {
                    if (n) {
                      if ('string' == typeof n) return o(n, t);
                      var e = Object.prototype.toString.call(n).slice(8, -1);
                      return (
                        'Object' === e &&
                          n.constructor &&
                          (e = n.constructor.name),
                        'Map' === e || 'Set' === e
                          ? Array.from(n)
                          : 'Arguments' === e ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                          ? o(n, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()),
                [n]
              )
            ))
          )
            throw new Error(m.uniqueBonusNumber);
          var t;
        }
        function x(n) {
          if (!f.isNumber(n)) throw new Error(m.number);
          if (!f.isNumberInLottoRange(n)) throw new Error(m.lottoRange);
        }
        n.exports = v;
      },
      968: (n) => {
        var t = {
          isNumber: function (n) {
            return Number.isInteger(n);
          },
          isNumberInLottoRange: function (n) {
            return n <= 45 && n >= 1;
          },
          isUniqueArray: function (n) {
            return new Set(n).size === n.length;
          },
        };
        n.exports = {
          pickRandomNumberInRange: function (n, t) {
            return (
              Math.floor(Math.random() * (t + 1 - Math.ceil(n))) + Math.ceil(n)
            );
          },
          inputValidator: t,
        };
      },
      740: (n, t, e) => {
        'use strict';
        e.d(t, { Z: () => u });
        var r = e(537),
          o = e.n(r),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          "body {\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  width: 100%;\n  height: 36px;\n\n  background: #4e5ba6;\n  border-radius: 4px;\n  border-color: transparent;\n\n  font-weight: 700;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 1.25px;\n}\n\n.normal-font {\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  height: 4rem;\n\n  background: #4e5ba6;\n  padding-left: 2rem;\n\n  font-size: 13px;\n  color: white;\n}\n\n.home-wrapper {\n  background: #f5f5f5;\n  padding: 4rem;\n}\n\n.home {\n  align-items: center;\n  width: 414px;\n  height: 680px;\n\n  padding: 20px;\n  background: white;\n  padding-bottom: 2rem;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\n.home-title {\n  font-weight: 800;\n  font-size: 24px;\n}\n\n.sub-title {\n  margin-bottom: 8px;\n\n  font-weight: 400;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n}\n\n.money-input-container {\n  align-items: center;\n\n  width: 380px;\n  margin-bottom: 14px;\n}\n\n.money-input {\n  width: 190rem;\n  height: 30px;\n\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  margin-right: 15px;\n}\n\n.lotto-list-container {\n  width: 380px;\n  height: 260px;\n\n  margin: 5px 0 10px 0;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.lotto-list-container::-webkit-scrollbar {\n  display: none;\n}\n\n.lotto-container {\n  display: flex;\n  align-items: center;\n  width: 380px;\n  height: 37px;\n}\n\n.lotto-image {\n  font-size: 34px;\n}\n\n.lotto-numbers {\n  display: flex;\n  align-items: center;\n\n  margin-left: 10px;\n}\n\n.number-input-container {\n  margin-bottom: 1.5rem;\n}\n\n.number-input {\n  width: 34px;\n  height: 36px;\n\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  margin-right: 3px;\n\n  font-size: 25px;\n  text-align: center;\n}\n\n.dark-home {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 120vh;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.result-modal {\n  flex-direction: column;\n  width: 320px;\n  height: 500px;\n\n  background: #ffffff;\n  border-radius: 4px;\n  position: relative;\n  padding: 0 1rem;\n}\n\n.result-title {\n  margin: 2.5rem 0 2.5rem 0;\n\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.closeButton {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n\n  background: transparent;\n  border: transparent;\n\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.result-list {\n  align-items: center;\n  width: 318px;\n  height: 1.5rem;\n\n  padding: 8px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.result-list:last-child {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.result-part {\n  width: 33%;\n  text-align: center;\n\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.result-item {\n  width: 33%;\n\n  text-align: center;\n\n  font-weight: 400;\n  font-size: 15px;\n}\n\n.benefit-container {\n  height: 5.5rem;\n\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.copy-right-wrapper {\n  width: 100vw;\n  height: 4.5rem;\n\n  background: #f5f5f5;\n  border-top: 1px solid rgba(78, 91, 166, 0.2);\n\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n  color: #4e5ba6;\n}\n\n.invalid {\n  border: 2px solid red;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/css/styles.css'],
            names: [],
            mappings:
              'AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;;EAEzB,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;;EAEZ,mBAAmB;EACnB,kBAAkB;;EAElB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;;EAElB,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;;EAEnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;;EAEZ,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;;EAEnB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;;EAEjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;;EAEb,kBAAkB;EAClB,MAAM;EACN,SAAS;;EAET,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;;EAEb,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;;EAEzB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;;EAEX,uBAAuB;EACvB,mBAAmB;;EAEnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;;EAEd,YAAY;EACZ,yCAAyC;AAC3C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,UAAU;EACV,kBAAkB;;EAElB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,UAAU;;EAEV,kBAAkB;;EAElB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;;EAEd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;;EAEd,mBAAmB;EACnB,4CAA4C;;EAE5C,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB',
            sourcesContent: [
              "body {\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  width: 100%;\n  height: 36px;\n\n  background: #4e5ba6;\n  border-radius: 4px;\n  border-color: transparent;\n\n  font-weight: 700;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 1.25px;\n}\n\n.normal-font {\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  height: 4rem;\n\n  background: #4e5ba6;\n  padding-left: 2rem;\n\n  font-size: 13px;\n  color: white;\n}\n\n.home-wrapper {\n  background: #f5f5f5;\n  padding: 4rem;\n}\n\n.home {\n  align-items: center;\n  width: 414px;\n  height: 680px;\n\n  padding: 20px;\n  background: white;\n  padding-bottom: 2rem;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\n.home-title {\n  font-weight: 800;\n  font-size: 24px;\n}\n\n.sub-title {\n  margin-bottom: 8px;\n\n  font-weight: 400;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n}\n\n.money-input-container {\n  align-items: center;\n\n  width: 380px;\n  margin-bottom: 14px;\n}\n\n.money-input {\n  width: 190rem;\n  height: 30px;\n\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  margin-right: 15px;\n}\n\n.lotto-list-container {\n  width: 380px;\n  height: 260px;\n\n  margin: 5px 0 10px 0;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.lotto-list-container::-webkit-scrollbar {\n  display: none;\n}\n\n.lotto-container {\n  display: flex;\n  align-items: center;\n  width: 380px;\n  height: 37px;\n}\n\n.lotto-image {\n  font-size: 34px;\n}\n\n.lotto-numbers {\n  display: flex;\n  align-items: center;\n\n  margin-left: 10px;\n}\n\n.number-input-container {\n  margin-bottom: 1.5rem;\n}\n\n.number-input {\n  width: 34px;\n  height: 36px;\n\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  margin-right: 3px;\n\n  font-size: 25px;\n  text-align: center;\n}\n\n.dark-home {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 120vh;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.result-modal {\n  flex-direction: column;\n  width: 320px;\n  height: 500px;\n\n  background: #ffffff;\n  border-radius: 4px;\n  position: relative;\n  padding: 0 1rem;\n}\n\n.result-title {\n  margin: 2.5rem 0 2.5rem 0;\n\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.closeButton {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n\n  background: transparent;\n  border: transparent;\n\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.result-list {\n  align-items: center;\n  width: 318px;\n  height: 1.5rem;\n\n  padding: 8px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.result-list:last-child {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.result-part {\n  width: 33%;\n  text-align: center;\n\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.result-item {\n  width: 33%;\n\n  text-align: center;\n\n  font-weight: 400;\n  font-size: 15px;\n}\n\n.benefit-container {\n  height: 5.5rem;\n\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.copy-right-wrapper {\n  width: 100vw;\n  height: 4.5rem;\n\n  background: #f5f5f5;\n  border-top: 1px solid rgba(78, 91, 166, 0.2);\n\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n  color: #4e5ba6;\n}\n\n.invalid {\n  border: 2px solid red;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const u = a;
      },
      645: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (e += '@supports ('.concat(t[4], ') {')),
                  t[2] && (e += '@media '.concat(t[2], ' {')),
                  r &&
                    (e += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (e += n(t)),
                  r && (e += '}'),
                  t[2] && (e += '}'),
                  t[4] && (e += '}'),
                  e
                );
              }).join('');
            }),
            (t.i = function (n, e, r, o, i) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var s = this[u][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var c = [].concat(n[l]);
                (r && a[c[0]]) ||
                  (void 0 !== i &&
                    (void 0 === c[5] ||
                      (c[1] = '@layer'
                        .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                        .concat(c[1], '}')),
                    (c[5] = i)),
                  e &&
                    (c[2]
                      ? ((c[1] = '@media '
                          .concat(c[2], ' {')
                          .concat(c[1], '}')),
                        (c[2] = e))
                      : (c[2] = e)),
                  o &&
                    (c[4]
                      ? ((c[1] = '@supports ('
                          .concat(c[4], ') {')
                          .concat(c[1], '}')),
                        (c[4] = o))
                      : (c[4] = ''.concat(o))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      537: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = n[1],
            e = n[3];
          if (!e) return t;
          if ('function' == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              o =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  r
                ),
              i = '/*# '.concat(o, ' */');
            return [t].concat([i]).join('\n');
          }
          return [t].join('\n');
        };
      },
      379: (n) => {
        'use strict';
        var t = [];
        function e(n) {
          for (var e = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === n) {
              e = r;
              break;
            }
          return e;
        }
        function r(n, r) {
          for (var i = {}, a = [], u = 0; u < n.length; u++) {
            var s = n[u],
              l = r.base ? s[0] + r.base : s[0],
              c = i[l] || 0,
              A = ''.concat(l, ' ').concat(c);
            i[l] = c + 1;
            var p = e(A),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var d = o(f, r);
              (r.byIndex = u),
                t.splice(u, 0, { identifier: A, updater: d, references: 1 });
            }
            a.push(A);
          }
          return a;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var u = e(i[a]);
              t[u].references--;
            }
            for (var s = r(n, o), l = 0; l < i.length; l++) {
              var c = e(i[l]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        'use strict';
        var t = {};
        n.exports = function (n, e) {
          var r = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(e);
        };
      },
      216: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = document.createElement('style');
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      565: (n, t, e) => {
        'use strict';
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute('nonce', t);
        };
      },
      795: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var r = '';
                e.supports && (r += '@supports ('.concat(e.supports, ') {')),
                  e.media && (r += '@media '.concat(e.media, ' {'));
                var o = void 0 !== e.layer;
                o &&
                  (r += '@layer'.concat(
                    e.layer.length > 0 ? ' '.concat(e.layer) : '',
                    ' {'
                  )),
                  (r += e.css),
                  o && (r += '}'),
                  e.media && (r += '}'),
                  e.supports && (r += '}');
                var i = e.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      589: (n) => {
        'use strict';
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return n[r](i, i.exports, e), i.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      'use strict';
      var n = e(221),
        t = e(379),
        r = e.n(t),
        o = e(795),
        i = e.n(o),
        a = e(569),
        u = e.n(a),
        s = e(565),
        l = e.n(s),
        c = e(216),
        A = e.n(c),
        p = e(589),
        f = e.n(p),
        d = e(740),
        m = {};
      function h(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return g(n);
          })(n) ||
          (function (n) {
            if (
              ('undefined' != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n['@@iterator']
            )
              return Array.from(n);
          })(n) ||
          (function (n, t) {
            if (n) {
              if ('string' == typeof n) return g(n, t);
              var e = Object.prototype.toString.call(n).slice(8, -1);
              return (
                'Object' === e && n.constructor && (e = n.constructor.name),
                'Map' === e || 'Set' === e
                  ? Array.from(n)
                  : 'Arguments' === e ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                  ? g(n, t)
                  : void 0
              );
            }
          })(n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function g(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      (m.styleTagTransform = f()),
        (m.setAttributes = l()),
        (m.insert = u().bind(null, 'head')),
        (m.domAPI = i()),
        (m.insertStyleElement = A()),
        r()(d.Z, m),
        d.Z && d.Z.locals && d.Z.locals;
      var b = e(41),
        E = e(399),
        y = e(764),
        B = e(523),
        v = e(493),
        w = v.moneyInput,
        C = v.bonusNumberInput,
        x = v.purchaseButton,
        k = v.confirmButton,
        S = v.retryButton,
        R = v.winningNumbersGroup,
        N = v.lottoContent,
        I = v.result,
        M = v.closeButton,
        j = v.count,
        T = v.rate,
        L = v.resultListContainer,
        O = v.lottoList,
        z = new b(),
        Y = new E(),
        U = new B();
      x.addEventListener('click', function () {
        W(), z.generateLottos(), P(), Z();
      }),
        k.addEventListener('click', function () {
          q();
          var n = z.getCollectedRanks();
          U.calculateRate(z.getMoney().getAmount(), n), _(n);
        }),
        M.addEventListener('click', function () {
          I.style.display = 'none';
        }),
        S.addEventListener('click', function () {
          window.location.reload();
        });
      var W = function () {
          try {
            var n = new y(Number(w.value));
            z.setMoney(n),
              x.setAttribute('disabled', 'disabled'),
              w.classList.remove('invalid');
          } catch (n) {
            w.classList.add('invalid'), window.alert(n.message), (w.value = '');
          }
        },
        q = function () {
          try {
            Y.setWinningNumbers(G()),
              Y.setBonusNumber(Number(C.value)),
              z.setWinning(Y);
          } catch (n) {
            window.alert(n.message);
          }
        },
        P = function () {
          var n = z.getLottoCount(),
            t = z.getLottos();
          (j.innerHTML = n),
            (O.innerHTML = t
              .map(function (n) {
                return '<div id="lotto" class="lotto-container">\n        <div class="lotto-image">🎟</div>\n        <div id="lottoNumbers" class="lotto-numbers normal-font">'.concat(
                  n.join(', '),
                  '</div>\n      </div>'
                );
              })
              .join('')),
            N.classList.remove('hidden');
        },
        Z = function () {
          R.innerHTML = h(Array(n.MAGIC_NUMBER.winningNumberCount))
            .map(function () {
              return '<input class="number-input" />';
            })
            .join('');
        },
        _ = function (t) {
          (L.innerHTML = n.RANK_INFORMATIONS.reverse()
            .map(function (n, e) {
              return '<div class="result-list space-between">\n    <p class="result-item">'
                .concat(n.matched, '</p>\n    <p class="result-item">')
                .concat(
                  n.reward.toLocaleString(),
                  '</p>\n    <p class="result-item">'
                )
                .concat(t[4 - e], '개</p>\n    </div>');
            })
            .join('')),
            (T.innerHTML = U.getRate()),
            (I.style.display = 'flex');
        },
        G = function () {
          return h(Array(n.MAGIC_NUMBER.winningNumberCount)).map(function (
            n,
            t
          ) {
            var e = document.querySelector(
              '#winningNumbersGroup > input:nth-child('.concat(t + 1, ')')
            );
            return Number(e.value);
          });
        };
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9jb25zdGFudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2RvY3VtZW50L2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZG9tYWluL2NvbnRyb2xsZXIvTG90dG9NYWNoaW5lLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZG9tYWluL21vZGVsL0JlbmVmaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9kb21haW4vbW9kZWwvTW9uZXkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9kb21haW4vbW9kZWwvV2lubmluZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9zdGVwMi1pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNQUdJQ19OVU1CRVIgPSB7XG4gIHNlY29uZFJhbmtJbmRleDogMSxcbiAgcGVyY2VudDogMTAwLFxuICBtb25leVVuaXQ6IDFfMDAwLFxuICBtb25leUxpbWl0OiAxMDBfMDAwLFxuICBsb3R0b1N0YXJ0OiAxLFxuICBsb3R0b0VuZDogNDUsXG4gIHdpbm5pbmdOdW1iZXJDb3VudDogNixcbiAgbG90dG9OdW1iZXJDb3VudDogNixcbiAgbG9zaW5nOiAxMjM0LFxuICBmYWlsRmluZEluZGV4OiAtMSxcbn07XG5cbmNvbnN0IE1BR0lDX0xJVEVSQUwgPSB7XG4gIHNlcGFyYXRvcjogJywgJyxcbiAgcmV0cnk6ICd5JyxcbiAgcXVpdDogJ24nLFxuICBjb21tYTogJywnLFxufTtcblxuY29uc3QgRVJST1JfTUVTU0FHRSA9IHtcbiAgbW9uZXlSYW5nZTogYFtFUlJPUl0g6rWs66ekIOq4iOyVoeydhCAke01BR0lDX05VTUJFUi5tb25leVVuaXQudG9Mb2NhbGVTdHJpbmcoKX3sm5Ag7J207IOBICR7TUFHSUNfTlVNQkVSLm1vbmV5TGltaXQudG9Mb2NhbGVTdHJpbmcoKX3sm5Ag7J207ZWY66GcIOyeheugpe2VtCDso7zshLjsmpQuYCxcbiAgbW9uZXlVbml0OiBgW0VSUk9SXSDqtazrp6Qg6riI7JWh7J2EICR7TUFHSUNfTlVNQkVSLm1vbmV5VW5pdC50b0xvY2FsZVN0cmluZygpfeybkCDri6jsnITroZwg7J6F66Cl7ZW0IOyjvOyEuOyalC5gLFxuICBudW1iZXI6ICdbRVJST1JdIOyekOyXsOyImOunjCDsnoXroKXtlbQg7KO87IS47JqULicsXG4gIGxvdHRvUmFuZ2U6IGBbRVJST1JdIOuhnOuYkCDrsojtmLjripQgJHtNQUdJQ19OVU1CRVIubG90dG9TdGFydH3rtoDthLAgJHtNQUdJQ19OVU1CRVIubG90dG9FbmR966GcIOyeheugpe2VtCDso7zshLjsmpQuYCxcbiAgdW5pcXVlV2lubmluZ051bWJlcjpcbiAgICAnW0VSUk9SXSDri7nssqgg67KI7Zi464qUIOykkeuzteuQmOyngCDslYrripQg6rCS65Ok66GcIOyeheugpe2VtCDso7zshLjsmpQuJyxcbiAgdW5pcXVlQm9udXNOdW1iZXI6ICdbRVJST1JdIOuLueyyqCDrsojtmLjsmYAg7KSR67O165CY7KeAIOyViuuKlCDqsJLsnLzroZwg7J6F66Cl7ZW0IOyjvOyEuOyalC4nLFxuICB3aW5uaW5nTnVtYmVyQ291bnQ6IGBbRVJST1JdIOuLueyyqCDrsojtmLjripQgJHtNQUdJQ19OVU1CRVIud2lubmluZ051bWJlckNvdW50feqwnOuhnCDsnoXroKXtlbQg7KO87IS47JqULmAsXG4gIHJldHJ5T3B0aW9uOiBgW0VSUk9SXSDsnqzsi5zsnpEg7Ji17IWY7J2AICR7TUFHSUNfTElURVJBTC5yZXRyeX0g7Zi57J2AICR7TUFHSUNfTElURVJBTC5xdWl0feycvOuhnCDsnoXroKXtlbQg7KO87IS47JqULmAsXG59O1xuXG5jb25zdCBSQU5LX0lORk9STUFUSU9OUyA9IFtcbiAge1xuICAgIHJhbms6IDEsXG4gICAgcmV3YXJkOiAyXzAwMF8wMDBfMDAwLFxuICAgIG1hdGNoZWRDb3VudDogNixcbiAgICBpc0JvbnVzOiBmYWxzZSxcbiAgICBtYXRjaGVkOiAnNuqwnCcsXG4gIH0sXG4gIHtcbiAgICByYW5rOiAyLFxuICAgIHJld2FyZDogMzBfMDAwXzAwMCxcbiAgICBtYXRjaGVkQ291bnQ6IDUsXG4gICAgaXNCb251czogdHJ1ZSxcbiAgICBtYXRjaGVkOiAnNeqwnCvrs7TrhIjsiqTrs7wnLFxuICB9LFxuICB7XG4gICAgcmFuazogMyxcbiAgICByZXdhcmQ6IDFfNTAwXzAwMCxcbiAgICBtYXRjaGVkQ291bnQ6IDUsXG4gICAgaXNCb251czogZmFsc2UsXG4gICAgbWF0Y2hlZDogJzXqsJwnLFxuICB9LFxuICB7XG4gICAgcmFuazogNCxcbiAgICByZXdhcmQ6IDUwXzAwMCxcbiAgICBtYXRjaGVkQ291bnQ6IDQsXG4gICAgaXNCb251czogZmFsc2UsXG4gICAgbWF0Y2hlZDogJzTqsJwnLFxuICB9LFxuICB7XG4gICAgcmFuazogNSxcbiAgICByZXdhcmQ6IDVfMDAwLFxuICAgIG1hdGNoZWRDb3VudDogMyxcbiAgICBpc0JvbnVzOiBmYWxzZSxcbiAgICBtYXRjaGVkOiAnM+qwnCcsXG4gIH0sXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVJST1JfTUVTU0FHRSxcbiAgTUFHSUNfTlVNQkVSLFxuICBNQUdJQ19MSVRFUkFMLFxuICBSQU5LX0lORk9STUFUSU9OUyxcbn07XG4iLCJjb25zdCBtb25leUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbmV5SW5wdXQnKTtcbmNvbnN0IGJvbnVzTnVtYmVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9udXNOdW1iZXJJbnB1dCcpO1xuXG5jb25zdCBwdXJjaGFzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdXJjaGFzZUJ1dHRvbicpO1xuY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQnV0dG9uJyk7XG5jb25zdCByZXRyeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXRyeUJ1dHRvbicpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKTtcblxuY29uc3Qgd2lubmluZ051bWJlcnNHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uaW5nTnVtYmVyc0dyb3VwJyk7XG5jb25zdCBsb3R0b0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG90dG9Db250ZW50Jyk7XG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG5jb25zdCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xuY29uc3QgcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXRlJyk7XG5jb25zdCByZXN1bHRMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdExpc3RDb250YWluZXInKTtcbmNvbnN0IGxvdHRvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3R0b0xpc3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1vbmV5SW5wdXQsXG4gIGJvbnVzTnVtYmVySW5wdXQsXG4gIHB1cmNoYXNlQnV0dG9uLFxuICBjb25maXJtQnV0dG9uLFxuICByZXRyeUJ1dHRvbixcbiAgY2xvc2VCdXR0b24sXG4gIHdpbm5pbmdOdW1iZXJzR3JvdXAsXG4gIGxvdHRvQ29udGVudCxcbiAgcmVzdWx0LFxuICBjb3VudCxcbiAgcmF0ZSxcbiAgcmVzdWx0TGlzdENvbnRhaW5lcixcbiAgbG90dG9MaXN0LFxufTtcbiIsImNvbnN0IHsgcGlja1JhbmRvbU51bWJlckluUmFuZ2UgfSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG5jb25zdCB7IE1BR0lDX05VTUJFUiwgUkFOS19JTkZPUk1BVElPTlMgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50Jyk7XG5cbmNsYXNzIExvdHRvTWFjaGluZSB7XG4gICNsb3R0b3M7XG5cbiAgI21hY2hpbmVJbnB1dDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNtYWNoaW5lSW5wdXQgPSB7XG4gICAgICBtb25leTogbnVsbCxcbiAgICAgIHdpbm5pbmc6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGdldExvdHRvcygpIHtcbiAgICByZXR1cm4gdGhpcy4jbG90dG9zO1xuICB9XG5cbiAgZ2V0TW9uZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI21hY2hpbmVJbnB1dC5tb25leTtcbiAgfVxuXG4gIGdldFdpbm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI21hY2hpbmVJbnB1dC53aW5uaW5nO1xuICB9XG5cbiAgc2V0TW9uZXkobW9uZXkpIHtcbiAgICB0aGlzLiNtYWNoaW5lSW5wdXQubW9uZXkgPSBtb25leTtcbiAgfVxuXG4gIHNldFdpbm5pbmcod2lubmluZykge1xuICAgIHRoaXMuI21hY2hpbmVJbnB1dC53aW5uaW5nID0gd2lubmluZztcbiAgfVxuXG4gIGdlbmVyYXRlTG90dG9zKCkge1xuICAgIGNvbnN0IGxvdHRvQ291bnQgPSB0aGlzLmdldExvdHRvQ291bnQoKTtcblxuICAgIHRoaXMuI2xvdHRvcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGxvdHRvQ291bnQgfSkubWFwKCgpID0+XG4gICAgICB0aGlzLiNnZXRDb21wb3NlZExvdHRvTnVtYmVycygpLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0IC0gc2Vjb25kKVxuICAgICk7XG4gIH1cblxuICBnZXRMb3R0b0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLiNtYWNoaW5lSW5wdXQubW9uZXkuZ2V0QW1vdW50KCkgLyBNQUdJQ19OVU1CRVIubW9uZXlVbml0O1xuICB9XG5cbiAgZ2V0Q29sbGVjdGVkUmFua3MoKSB7XG4gICAgY29uc3QgUkFOS19URU1QTEFURSA9IFswLCAwLCAwLCAwLCAwXTtcblxuICAgIGNvbnN0IHJhbmtzID0gdGhpcy4jbG90dG9zLnJlZHVjZSgoYWNjdW11bGF0b3IsIGxvdHRvKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy4jZ2V0SW5jcmVhc2VkUmFua3MobG90dG8sIGFjY3VtdWxhdG9yKTtcbiAgICB9LCBSQU5LX1RFTVBMQVRFKTtcblxuICAgIHJldHVybiByYW5rcztcbiAgfVxuXG4gICNnZXRDb21wb3NlZExvdHRvTnVtYmVycygpIHtcbiAgICBjb25zdCBsb3R0b051bWJlcnMgPSBuZXcgU2V0KCk7XG5cbiAgICB3aGlsZSAobG90dG9OdW1iZXJzLnNpemUgPCBNQUdJQ19OVU1CRVIubG90dG9OdW1iZXJDb3VudCkge1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gcGlja1JhbmRvbU51bWJlckluUmFuZ2UoXG4gICAgICAgIE1BR0lDX05VTUJFUi5sb3R0b1N0YXJ0LFxuICAgICAgICBNQUdJQ19OVU1CRVIubG90dG9FbmRcbiAgICAgICk7XG4gICAgICBsb3R0b051bWJlcnMuYWRkKHJhbmRvbU51bWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi5sb3R0b051bWJlcnNdO1xuICB9XG5cbiAgI2dldEluY3JlYXNlZFJhbmtzKGxvdHRvLCByYW5rcykge1xuICAgIGNvbnN0IHVwZGF0ZWRSYW5rcyA9IHJhbmtzO1xuICAgIGNvbnN0IG1hdGNoZWRDb3VudCA9IHRoaXMuI2dldE1hdGNoZWRDb3VudChsb3R0byk7XG4gICAgY29uc3QgcmFua0luZGV4ID0gdGhpcy4jZ2V0UmFua0luZGV4KG1hdGNoZWRDb3VudCwgdGhpcy4jaXNCb251cyhsb3R0bykpO1xuICAgIGlmIChyYW5rSW5kZXggIT09IE1BR0lDX05VTUJFUi5sb3NpbmcpIHtcbiAgICAgIHVwZGF0ZWRSYW5rc1tyYW5rSW5kZXhdICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGVkUmFua3M7XG4gIH1cblxuICAjZ2V0TWF0Y2hlZENvdW50KGxvdHRvKSB7XG4gICAgY29uc3Qgd2lubmluZ051bWJlcnMgPSB0aGlzLiNtYWNoaW5lSW5wdXQud2lubmluZy5nZXRXaW5uaW5nTnVtYmVycygpO1xuICAgIHJldHVybiBsb3R0by5maWx0ZXIoKG51bWJlcikgPT4gd2lubmluZ051bWJlcnMuaW5jbHVkZXMobnVtYmVyKSkubGVuZ3RoO1xuICB9XG5cbiAgI2dldFJhbmtJbmRleChtYXRjaGVkQ291bnQsIGlzQm9udXMpIHtcbiAgICBjb25zdCByYW5rSW5kZXggPSBSQU5LX0lORk9STUFUSU9OUy5maW5kSW5kZXgoXG4gICAgICAocmFua0luZm9ybWF0aW9uKSA9PlxuICAgICAgICByYW5rSW5mb3JtYXRpb24uaXNCb251cyA9PT0gaXNCb251cyAmJlxuICAgICAgICByYW5rSW5mb3JtYXRpb24ubWF0Y2hlZENvdW50ID09PSBtYXRjaGVkQ291bnRcbiAgICApO1xuICAgIGlmIChyYW5rSW5kZXggPT09IE1BR0lDX05VTUJFUi5mYWlsRmluZEluZGV4KSByZXR1cm4gTUFHSUNfTlVNQkVSLmxvc2luZztcblxuICAgIHJldHVybiByYW5rSW5kZXg7XG4gIH1cblxuICAjaXNCb251cyhsb3R0bykge1xuICAgIHJldHVybiBsb3R0by5pbmNsdWRlcyh0aGlzLiNtYWNoaW5lSW5wdXQud2lubmluZy5nZXRCb251c051bWJlcigpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBMb3R0b01hY2hpbmU7XG4iLCJjb25zdCB7IFJBTktfSU5GT1JNQVRJT05TLCBNQUdJQ19OVU1CRVIgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50Jyk7XG5cbmNsYXNzIEJlbmVmaXQge1xuICAjcmF0ZTtcblxuICBnZXRSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiNyYXRlO1xuICB9XG5cbiAgY2FsY3VsYXRlUmF0ZShtb25leSwgcmFua3MpIHtcbiAgICBjb25zdCB0b3RhbCA9IHJhbmtzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgcmFuaywgcmFua0luZGV4KSA9PlxuICAgICAgICBhY2N1bXVsYXRvciArIHJhbmsgKiBSQU5LX0lORk9STUFUSU9OU1tyYW5rSW5kZXhdLnJld2FyZCxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgdGhpcy4jcmF0ZSA9IE51bWJlcigoKHRvdGFsIC8gbW9uZXkpICogTUFHSUNfTlVNQkVSLnBlcmNlbnQpLnRvRml4ZWQoMSkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmVuZWZpdDtcbiIsImNvbnN0IHsgaW5wdXRWYWxpZGF0b3IgfSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG5jb25zdCB7IEVSUk9SX01FU1NBR0UsIE1BR0lDX05VTUJFUiB9ID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnQnKTtcblxuY2xhc3MgTW9uZXkge1xuICAjYW1vdW50O1xuXG4gIGNvbnN0cnVjdG9yKGFtb3VudCkge1xuICAgIHRoaXMuI3ZhbGlkYXRlQW1vdW50KGFtb3VudCk7XG4gICAgdGhpcy4jYW1vdW50ID0gYW1vdW50O1xuICB9XG5cbiAgZ2V0QW1vdW50KCkge1xuICAgIHJldHVybiB0aGlzLiNhbW91bnQ7XG4gIH1cblxuICAjdmFsaWRhdGVBbW91bnQoYW1vdW50KSB7XG4gICAgaWYgKCFpbnB1dFZhbGlkYXRvci5pc051bWJlcihhbW91bnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUVTU0FHRS5udW1iZXIpO1xuICAgIH1cbiAgICBpZiAoYW1vdW50ID4gTUFHSUNfTlVNQkVSLm1vbmV5TGltaXQgfHwgYW1vdW50IDwgTUFHSUNfTlVNQkVSLm1vbmV5VW5pdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01FU1NBR0UubW9uZXlSYW5nZSk7XG4gICAgfVxuICAgIGlmIChhbW91bnQgJSBNQUdJQ19OVU1CRVIubW9uZXlVbml0ICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUVTU0FHRS5tb25leVVuaXQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vbmV5O1xuIiwiY29uc3QgeyBpbnB1dFZhbGlkYXRvciB9ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbmNvbnN0IHsgRVJST1JfTUVTU0FHRSwgTUFHSUNfTlVNQkVSIH0gPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudCcpO1xuXG5jbGFzcyBXaW5uaW5nIHtcbiAgI3dpbm5pbmdOdW1iZXJzO1xuXG4gICNib251c051bWJlcjtcblxuICBnZXRXaW5uaW5nTnVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy4jd2lubmluZ051bWJlcnM7XG4gIH1cblxuICBnZXRCb251c051bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9udXNOdW1iZXI7XG4gIH1cblxuICBzZXRXaW5uaW5nTnVtYmVycyh3aW5uaW5nTnVtYmVycykge1xuICAgIHRoaXMuI3ZhbGlkYXRlV2lubmluZ051bWJlcnMod2lubmluZ051bWJlcnMpO1xuICAgIHRoaXMuI3dpbm5pbmdOdW1iZXJzID0gd2lubmluZ051bWJlcnM7XG4gIH1cblxuICBzZXRCb251c051bWJlcihib251c051bWJlcikge1xuICAgIHRoaXMuI3ZhbGlkYXRlQm9udXNOdW1iZXIoYm9udXNOdW1iZXIpO1xuICAgIHRoaXMuI2JvbnVzTnVtYmVyID0gYm9udXNOdW1iZXI7XG4gIH1cblxuICAjdmFsaWRhdGVXaW5uaW5nTnVtYmVycyh3aW5uaW5nTnVtYmVycykge1xuICAgIHdpbm5pbmdOdW1iZXJzLmZvckVhY2goKHdpbm5pbmdOdW1iZXIpID0+IHtcbiAgICAgIHRoaXMuI3ZhbGlkYXRlTnVtYmVyKHdpbm5pbmdOdW1iZXIpO1xuICAgIH0pO1xuICAgIGlmICghaW5wdXRWYWxpZGF0b3IuaXNVbmlxdWVBcnJheSh3aW5uaW5nTnVtYmVycykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFLnVuaXF1ZVdpbm5pbmdOdW1iZXIpO1xuICAgIH1cbiAgICBpZiAod2lubmluZ051bWJlcnMubGVuZ3RoICE9PSBNQUdJQ19OVU1CRVIud2lubmluZ051bWJlckNvdW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUVTU0FHRS53aW5uaW5nTnVtYmVyQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gICN2YWxpZGF0ZUJvbnVzTnVtYmVyKGJvbnVzTnVtYmVyKSB7XG4gICAgdGhpcy4jdmFsaWRhdGVOdW1iZXIoYm9udXNOdW1iZXIpO1xuXG4gICAgaWYgKCFpbnB1dFZhbGlkYXRvci5pc1VuaXF1ZUFycmF5KFsuLi50aGlzLiN3aW5uaW5nTnVtYmVycywgYm9udXNOdW1iZXJdKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01FU1NBR0UudW5pcXVlQm9udXNOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gICN2YWxpZGF0ZU51bWJlcihudW1iZXIpIHtcbiAgICBpZiAoIWlucHV0VmFsaWRhdG9yLmlzTnVtYmVyKG51bWJlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFLm51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKCFpbnB1dFZhbGlkYXRvci5pc051bWJlckluTG90dG9SYW5nZShudW1iZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUVTU0FHRS5sb3R0b1JhbmdlKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaW5uaW5nO1xuIiwiY29uc3QgaW5wdXRWYWxpZGF0b3IgPSB7XG4gIGlzTnVtYmVyOiAobnVtYmVyKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlciksXG4gIGlzTnVtYmVySW5Mb3R0b1JhbmdlOiAobnVtYmVyKSA9PiBudW1iZXIgPD0gNDUgJiYgbnVtYmVyID49IDEsXG4gIGlzVW5pcXVlQXJyYXk6IChhcnJheSkgPT4gbmV3IFNldChhcnJheSkuc2l6ZSA9PT0gYXJyYXkubGVuZ3RoLFxufTtcblxuY29uc3QgcGlja1JhbmRvbU51bWJlckluUmFuZ2UgPSAoc3RhcnQsIGVuZCkgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZCArIDEgLSBNYXRoLmNlaWwoc3RhcnQpKSkgKyBNYXRoLmNlaWwoc3RhcnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcGlja1JhbmRvbU51bWJlckluUmFuZ2UsIGlucHV0VmFsaWRhdG9yIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zcGFjZS1iZXR3ZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuXFxuICBiYWNrZ3JvdW5kOiAjNGU1YmE2O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xcbn1cXG5cXG4ubm9ybWFsLWZvbnQge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG5cXG4gIGJhY2tncm91bmQ6ICM0ZTViYTY7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbi5ob21lIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDE0cHg7XFxuICBoZWlnaHQ6IDY4MHB4O1xcblxcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uaG9tZS10aXRsZSB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uc3ViLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5tb25leS1pbnB1dC1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiAzODBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbi5tb25leS1pbnB1dCB7XFxuICB3aWR0aDogMTkwcmVtO1xcbiAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiNDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmxvdHRvLWxpc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzODBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuXFxuICBtYXJnaW46IDVweCAwIDEwcHggMDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5sb3R0by1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxvdHRvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzODBweDtcXG4gIGhlaWdodDogMzdweDtcXG59XFxuXFxuLmxvdHRvLWltYWdlIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG59XFxuXFxuLmxvdHRvLW51bWJlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLm51bWJlci1pbnB1dC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4ubnVtYmVyLWlucHV0IHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiNDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcblxcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGFyay1ob21lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEyMHZoO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcblxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnJlc3VsdC10aXRsZSB7XFxuICBtYXJnaW46IDIuNXJlbSAwIDIuNXJlbSAwO1xcblxcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIHJpZ2h0OiAxNXB4O1xcblxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcblxcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJlc3VsdC1saXN0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzE4cHg7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG5cXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG5cXG4ucmVzdWx0LWxpc3Q6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuXFxuLnJlc3VsdC1wYXJ0IHtcXG4gIHdpZHRoOiAzMyU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgd2lkdGg6IDMzJTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5iZW5lZml0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDUuNXJlbTtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jb3B5LXJpZ2h0LXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA0LjVyZW07XFxuXFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNzgsIDkxLCAxNjYsIDAuMik7XFxuXFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcXG4gIGNvbG9yOiAjNGU1YmE2O1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7O0VBRXpCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTs7RUFFWixtQkFBbUI7RUFDbkIsa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTs7RUFFYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7O0VBRVoseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhOztFQUViLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUzs7RUFFVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7O0VBRWIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5Qjs7RUFFekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVzs7RUFFWCx1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjOztFQUVkLFlBQVk7RUFDWix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7O0VBRVYsa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7O0VBRWQsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYzs7RUFFZCxtQkFBbUI7RUFDbkIsNENBQTRDOztFQUU1QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zcGFjZS1iZXR3ZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuXFxuICBiYWNrZ3JvdW5kOiAjNGU1YmE2O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xcbn1cXG5cXG4ubm9ybWFsLWZvbnQge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG5cXG4gIGJhY2tncm91bmQ6ICM0ZTViYTY7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbi5ob21lIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDE0cHg7XFxuICBoZWlnaHQ6IDY4MHB4O1xcblxcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uaG9tZS10aXRsZSB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uc3ViLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5tb25leS1pbnB1dC1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiAzODBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbi5tb25leS1pbnB1dCB7XFxuICB3aWR0aDogMTkwcmVtO1xcbiAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiNDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmxvdHRvLWxpc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzODBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuXFxuICBtYXJnaW46IDVweCAwIDEwcHggMDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5sb3R0by1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxvdHRvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzODBweDtcXG4gIGhlaWdodDogMzdweDtcXG59XFxuXFxuLmxvdHRvLWltYWdlIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG59XFxuXFxuLmxvdHRvLW51bWJlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLm51bWJlci1pbnB1dC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4ubnVtYmVyLWlucHV0IHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiNDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcblxcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGFyay1ob21lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEyMHZoO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcblxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnJlc3VsdC10aXRsZSB7XFxuICBtYXJnaW46IDIuNXJlbSAwIDIuNXJlbSAwO1xcblxcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIHJpZ2h0OiAxNXB4O1xcblxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcblxcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJlc3VsdC1saXN0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzE4cHg7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG5cXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG5cXG4ucmVzdWx0LWxpc3Q6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuXFxuLnJlc3VsdC1wYXJ0IHtcXG4gIHdpZHRoOiAzMyU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgd2lkdGg6IDMzJTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5iZW5lZml0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDUuNXJlbTtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jb3B5LXJpZ2h0LXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA0LjVyZW07XFxuXFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNzgsIDkxLCAxNjYsIDAuMik7XFxuXFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcXG4gIGNvbG9yOiAjNGU1YmE2O1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgTUFHSUNfTlVNQkVSLCBSQU5LX0lORk9STUFUSU9OUyB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcblxuY29uc3QgTG90dG9NYWNoaW5lID0gcmVxdWlyZSgnLi9kb21haW4vY29udHJvbGxlci9Mb3R0b01hY2hpbmUnKTtcbmNvbnN0IFdpbm5pbmcgPSByZXF1aXJlKCcuL2RvbWFpbi9tb2RlbC9XaW5uaW5nJyk7XG5jb25zdCBNb25leSA9IHJlcXVpcmUoJy4vZG9tYWluL21vZGVsL01vbmV5Jyk7XG5jb25zdCBCZW5lZml0ID0gcmVxdWlyZSgnLi9kb21haW4vbW9kZWwvQmVuZWZpdCcpO1xuXG5jb25zdCB7XG4gIG1vbmV5SW5wdXQsXG4gIGJvbnVzTnVtYmVySW5wdXQsXG4gIHB1cmNoYXNlQnV0dG9uLFxuICBjb25maXJtQnV0dG9uLFxuICByZXRyeUJ1dHRvbixcbiAgd2lubmluZ051bWJlcnNHcm91cCxcbiAgbG90dG9Db250ZW50LFxuICByZXN1bHQsXG4gIGNsb3NlQnV0dG9uLFxuICBjb3VudCxcbiAgcmF0ZSxcbiAgcmVzdWx0TGlzdENvbnRhaW5lcixcbiAgbG90dG9MaXN0LFxufSA9IHJlcXVpcmUoJy4vZG9jdW1lbnQnKTtcblxuY29uc3QgbG90dG9NYWNoaW5lID0gbmV3IExvdHRvTWFjaGluZSgpO1xuY29uc3Qgd2lubmluZyA9IG5ldyBXaW5uaW5nKCk7XG5jb25zdCBiZW5lZml0ID0gbmV3IEJlbmVmaXQoKTtcblxucHVyY2hhc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNhdmVNb25leSgpO1xuXG4gIGxvdHRvTWFjaGluZS5nZW5lcmF0ZUxvdHRvcygpO1xuICByZW5kZXJMb3R0b0NvbnRlbnQoKTtcbiAgcmVuZGVyV2lubmluZ051bWViZXJzSW5wdXQoKTtcbn0pO1xuXG5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzYXZlV2lubmluZygpO1xuXG4gIGNvbnN0IHJhbmtzID0gbG90dG9NYWNoaW5lLmdldENvbGxlY3RlZFJhbmtzKCk7XG4gIGJlbmVmaXQuY2FsY3VsYXRlUmF0ZShsb3R0b01hY2hpbmUuZ2V0TW9uZXkoKS5nZXRBbW91bnQoKSwgcmFua3MpO1xuICByZW5kZXJSZXN1bHQocmFua3MpO1xufSk7XG5cbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5yZXRyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmNvbnN0IHNhdmVNb25leSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb25leSA9IG5ldyBNb25leShOdW1iZXIobW9uZXlJbnB1dC52YWx1ZSkpO1xuICAgIGxvdHRvTWFjaGluZS5zZXRNb25leShtb25leSk7XG4gICAgcHVyY2hhc2VCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIG1vbmV5SW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG1vbmV5SW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIHdpbmRvdy5hbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICBtb25leUlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn07XG5cbmNvbnN0IHNhdmVXaW5uaW5nID0gKCkgPT4ge1xuICB0cnkge1xuICAgIHdpbm5pbmcuc2V0V2lubmluZ051bWJlcnMoZ2V0V2lubmluZ051bWJlcnNJbnB1dCgpKTtcbiAgICB3aW5uaW5nLnNldEJvbnVzTnVtYmVyKE51bWJlcihib251c051bWJlcklucHV0LnZhbHVlKSk7XG4gICAgbG90dG9NYWNoaW5lLnNldFdpbm5pbmcod2lubmluZyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd2luZG93LmFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJMb3R0b0NvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGxvdHRvQ291bnQgPSBsb3R0b01hY2hpbmUuZ2V0TG90dG9Db3VudCgpO1xuICBjb25zdCBsb3R0b3MgPSBsb3R0b01hY2hpbmUuZ2V0TG90dG9zKCk7XG5cbiAgY291bnQuaW5uZXJIVE1MID0gbG90dG9Db3VudDtcbiAgbG90dG9MaXN0LmlubmVySFRNTCA9IGxvdHRvc1xuICAgIC5tYXAoXG4gICAgICAobG90dG8pID0+XG4gICAgICAgIGA8ZGl2IGlkPVwibG90dG9cIiBjbGFzcz1cImxvdHRvLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG90dG8taW1hZ2VcIj7wn46fPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJsb3R0b051bWJlcnNcIiBjbGFzcz1cImxvdHRvLW51bWJlcnMgbm9ybWFsLWZvbnRcIj4ke2xvdHRvLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfTwvZGl2PlxuICAgICAgPC9kaXY+YFxuICAgIClcbiAgICAuam9pbignJyk7XG4gIGxvdHRvQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG5cbmNvbnN0IHJlbmRlcldpbm5pbmdOdW1lYmVyc0lucHV0ID0gKCkgPT4ge1xuICB3aW5uaW5nTnVtYmVyc0dyb3VwLmlubmVySFRNTCA9IFsuLi5BcnJheShNQUdJQ19OVU1CRVIud2lubmluZ051bWJlckNvdW50KV1cbiAgICAubWFwKCgpID0+ICc8aW5wdXQgY2xhc3M9XCJudW1iZXItaW5wdXRcIiAvPicpXG4gICAgLmpvaW4oJycpO1xufTtcblxuY29uc3QgcmVuZGVyUmVzdWx0ID0gKHJhbmtzKSA9PiB7XG4gIHJlc3VsdExpc3RDb250YWluZXIuaW5uZXJIVE1MID0gUkFOS19JTkZPUk1BVElPTlMucmV2ZXJzZSgpXG4gICAgLm1hcCgocmFua0luZm9ybWF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicmVzdWx0LWxpc3Qgc3BhY2UtYmV0d2VlblwiPlxuICAgIDxwIGNsYXNzPVwicmVzdWx0LWl0ZW1cIj4ke3JhbmtJbmZvcm1hdGlvbi5tYXRjaGVkfTwvcD5cbiAgICA8cCBjbGFzcz1cInJlc3VsdC1pdGVtXCI+JHtyYW5rSW5mb3JtYXRpb24ucmV3YXJkLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgIDxwIGNsYXNzPVwicmVzdWx0LWl0ZW1cIj4ke3JhbmtzWzQgLSBpbmRleF196rCcPC9wPlxuICAgIDwvZGl2PmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG4gIHJhdGUuaW5uZXJIVE1MID0gYmVuZWZpdC5nZXRSYXRlKCk7XG4gIHJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufTtcblxuY29uc3QgZ2V0V2lubmluZ051bWJlcnNJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgd2lubmluZ051bWJlcnNJbnB1dCA9IFsuLi5BcnJheShNQUdJQ19OVU1CRVIud2lubmluZ051bWJlckNvdW50KV0ubWFwKFxuICAgIChfXywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG51bWJlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCN3aW5uaW5nTnVtYmVyc0dyb3VwID4gaW5wdXQ6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSlgXG4gICAgICApO1xuICAgICAgcmV0dXJuIE51bWJlcihudW1iZXJJbnB1dC52YWx1ZSk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiB3aW5uaW5nTnVtYmVyc0lucHV0O1xufTtcbiJdLCJuYW1lcyI6WyJNQUdJQ19OVU1CRVIiLCJzZWNvbmRSYW5rSW5kZXgiLCJwZXJjZW50IiwibW9uZXlVbml0IiwibW9uZXlMaW1pdCIsImxvdHRvU3RhcnQiLCJsb3R0b0VuZCIsIndpbm5pbmdOdW1iZXJDb3VudCIsImxvdHRvTnVtYmVyQ291bnQiLCJsb3NpbmciLCJmYWlsRmluZEluZGV4IiwiTUFHSUNfTElURVJBTCIsInNlcGFyYXRvciIsInJldHJ5IiwicXVpdCIsImNvbW1hIiwiRVJST1JfTUVTU0FHRSIsIm1vbmV5UmFuZ2UiLCJ0b0xvY2FsZVN0cmluZyIsIm51bWJlciIsImxvdHRvUmFuZ2UiLCJ1bmlxdWVXaW5uaW5nTnVtYmVyIiwidW5pcXVlQm9udXNOdW1iZXIiLCJyZXRyeU9wdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJSQU5LX0lORk9STUFUSU9OUyIsInJhbmsiLCJyZXdhcmQiLCJtYXRjaGVkQ291bnQiLCJpc0JvbnVzIiwibWF0Y2hlZCIsIm1vbmV5SW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9udXNOdW1iZXJJbnB1dCIsInB1cmNoYXNlQnV0dG9uIiwiY29uZmlybUJ1dHRvbiIsInJldHJ5QnV0dG9uIiwiY2xvc2VCdXR0b24iLCJ3aW5uaW5nTnVtYmVyc0dyb3VwIiwibG90dG9Db250ZW50IiwicmVzdWx0IiwiY291bnQiLCJyYXRlIiwicmVzdWx0TGlzdENvbnRhaW5lciIsImxvdHRvTGlzdCIsInBpY2tSYW5kb21OdW1iZXJJblJhbmdlIiwicmVxdWlyZSIsIkxvdHRvTWFjaGluZSIsInRoaXMiLCJtb25leSIsIndpbm5pbmciLCJsb3R0b0NvdW50IiwiZ2V0TG90dG9Db3VudCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsInNvcnQiLCJmaXJzdCIsInNlY29uZCIsImdldEFtb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwibG90dG8iLCJsb3R0b051bWJlcnMiLCJTZXQiLCJzaXplIiwicmFuZG9tTnVtYmVyIiwiYWRkIiwicmFua3MiLCJ1cGRhdGVkUmFua3MiLCJyYW5rSW5kZXgiLCJ3aW5uaW5nTnVtYmVycyIsImdldFdpbm5pbmdOdW1iZXJzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJmaW5kSW5kZXgiLCJyYW5rSW5mb3JtYXRpb24iLCJnZXRCb251c051bWJlciIsIkJlbmVmaXQiLCJ0b3RhbCIsIk51bWJlciIsInRvRml4ZWQiLCJpbnB1dFZhbGlkYXRvciIsIk1vbmV5IiwiYW1vdW50IiwiaXNOdW1iZXIiLCJFcnJvciIsIldpbm5pbmciLCJib251c051bWJlciIsImZvckVhY2giLCJ3aW5uaW5nTnVtYmVyIiwiaXNVbmlxdWVBcnJheSIsImlzTnVtYmVySW5Mb3R0b1JhbmdlIiwiaXNJbnRlZ2VyIiwiYXJyYXkiLCJzdGFydCIsImVuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNlaWwiLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJpZCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5jIiwibG90dG9NYWNoaW5lIiwiYmVuZWZpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlTW9uZXkiLCJnZW5lcmF0ZUxvdHRvcyIsInJlbmRlckxvdHRvQ29udGVudCIsInJlbmRlcldpbm5pbmdOdW1lYmVyc0lucHV0Iiwic2F2ZVdpbm5pbmciLCJnZXRDb2xsZWN0ZWRSYW5rcyIsImNhbGN1bGF0ZVJhdGUiLCJnZXRNb25leSIsInJlbmRlclJlc3VsdCIsImRpc3BsYXkiLCJsb2NhdGlvbiIsInJlbG9hZCIsInZhbHVlIiwic2V0TW9uZXkiLCJjbGFzc0xpc3QiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsInNldFdpbm5pbmdOdW1iZXJzIiwiZ2V0V2lubmluZ051bWJlcnNJbnB1dCIsInNldEJvbnVzTnVtYmVyIiwic2V0V2lubmluZyIsImxvdHRvcyIsImdldExvdHRvcyIsImlubmVySFRNTCIsImdldFJhdGUiLCJfXyIsIm51bWJlcklucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==
