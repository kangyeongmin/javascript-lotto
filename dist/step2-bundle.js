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
          A = document.getElementById('count'),
          c = document.getElementById('rate'),
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
          count: A,
          rate: c,
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
        function A(n, t) {
          return (function (n, t) {
            return t.get ? t.get.call(n) : t.value;
          })(n, p(n, t, 'get'));
        }
        function c(n, t, e) {
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
                c(this, b, { money: null, winning: null });
            }
            var t, e;
            return (
              (t = n),
              (e = [
                {
                  key: 'getLottos',
                  value: function () {
                    return A(this, g);
                  },
                },
                {
                  key: 'getMoney',
                  value: function () {
                    return A(this, b).money;
                  },
                },
                {
                  key: 'getWinning',
                  value: function () {
                    return A(this, b).winning;
                  },
                },
                {
                  key: 'setMoney',
                  value: function (n) {
                    A(this, b).money = n;
                  },
                },
                {
                  key: 'setWinning',
                  value: function (n) {
                    A(this, b).winning = n;
                  },
                },
                {
                  key: 'generateLottos',
                  value: function () {
                    var n = this,
                      t = this.getLottoCount();
                    c(
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
                    return A(this, b).money.getAmount() / m.moneyUnit;
                  },
                },
                {
                  key: 'getCollectedRanks',
                  value: function () {
                    var n = this;
                    return A(this, g).reduce(
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
          var t = A(this, b).winning.getWinningNumbers();
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
          return n.includes(A(this, b).winning.getBonusNumber());
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
          A = (function () {
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
        n.exports = A;
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
          A = s.MAGIC_NUMBER,
          c = new WeakMap(),
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
                })(this, c),
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
                })((r = this), a(r, c, 'set'), o);
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
                    })(this, a(this, c, 'get'));
                  },
                },
              ]) && o(t.prototype, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              n
            );
          })();
        function d(n) {
          if (!u.isNumber(n)) throw new Error(l.number);
          if (n > A.moneyLimit || n < A.moneyUnit)
            throw new Error(l.moneyRange);
          if (n % A.moneyUnit != 0) throw new Error(l.moneyUnit);
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
        function A(n, t, e) {
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
                    return c(this, g);
                  },
                },
                {
                  key: 'getBonusNumber',
                  value: function () {
                    return c(this, b);
                  },
                },
                {
                  key: 'setWinningNumbers',
                  value: function (n) {
                    A(this, E, w).call(this, n), l(this, g, n);
                  },
                },
                {
                  key: 'setBonusNumber',
                  value: function (n) {
                    A(this, y, C).call(this, n), l(this, b, n);
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
              A(t, B, x).call(t, n);
            }),
            !f.isUniqueArray(n))
          )
            throw new Error(m.uniqueWinningNumber);
          if (n.length !== h.winningNumberCount)
            throw new Error(m.winningNumberCount);
        }
        function C(n) {
          if (
            (A(this, B, x).call(this, n),
            !f.isUniqueArray(
              [].concat(
                ((t = c(this, g)),
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
                var A = [].concat(n[l]);
                (r && a[A[0]]) ||
                  (void 0 !== i &&
                    (void 0 === A[5] ||
                      (A[1] = '@layer'
                        .concat(A[5].length > 0 ? ' '.concat(A[5]) : '', ' {')
                        .concat(A[1], '}')),
                    (A[5] = i)),
                  e &&
                    (A[2]
                      ? ((A[1] = '@media '
                          .concat(A[2], ' {')
                          .concat(A[1], '}')),
                        (A[2] = e))
                      : (A[2] = e)),
                  o &&
                    (A[4]
                      ? ((A[1] = '@supports ('
                          .concat(A[4], ') {')
                          .concat(A[1], '}')),
                        (A[4] = o))
                      : (A[4] = ''.concat(o))),
                  t.push(A));
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
              A = i[l] || 0,
              c = ''.concat(l, ' ').concat(A);
            i[l] = A + 1;
            var p = e(c),
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
                t.splice(u, 0, { identifier: c, updater: d, references: 1 });
            }
            a.push(c);
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
              var A = e(i[l]);
              0 === t[A].references && (t[A].updater(), t.splice(A, 1));
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
        A = e(216),
        c = e.n(A),
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
        (m.insertStyleElement = c()),
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
        W(),
          x.setAttribute('disabled', 'disabled'),
          z.generateLottos(),
          P(),
          Z();
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
            z.setMoney(n);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2NyaXB0LWxvdHRvLy4vc3JjL2NvbnN0YW50L2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZG9jdW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9kb21haW4vY29udHJvbGxlci9Mb3R0b01hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9kb21haW4vbW9kZWwvQmVuZWZpdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2RvbWFpbi9tb2RlbC9Nb25leS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2RvbWFpbi9tb2RlbC9XaW5uaW5nLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3N0ZXAyLWluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1BR0lDX05VTUJFUiA9IHtcbiAgc2Vjb25kUmFua0luZGV4OiAxLFxuICBwZXJjZW50OiAxMDAsXG4gIG1vbmV5VW5pdDogMV8wMDAsXG4gIG1vbmV5TGltaXQ6IDEwMF8wMDAsXG4gIGxvdHRvU3RhcnQ6IDEsXG4gIGxvdHRvRW5kOiA0NSxcbiAgd2lubmluZ051bWJlckNvdW50OiA2LFxuICBsb3R0b051bWJlckNvdW50OiA2LFxuICBsb3Npbmc6IDEyMzQsXG4gIGZhaWxGaW5kSW5kZXg6IC0xLFxufTtcblxuY29uc3QgTUFHSUNfTElURVJBTCA9IHtcbiAgc2VwYXJhdG9yOiAnLCAnLFxuICByZXRyeTogJ3knLFxuICBxdWl0OiAnbicsXG4gIGNvbW1hOiAnLCcsXG59O1xuXG5jb25zdCBFUlJPUl9NRVNTQUdFID0ge1xuICBtb25leVJhbmdlOiBgW0VSUk9SXSDqtazrp6Qg6riI7JWh7J2EICR7TUFHSUNfTlVNQkVSLm1vbmV5VW5pdC50b0xvY2FsZVN0cmluZygpfeybkCDsnbTsg4EgJHtNQUdJQ19OVU1CRVIubW9uZXlMaW1pdC50b0xvY2FsZVN0cmluZygpfeybkCDsnbTtlZjroZwg7J6F66Cl7ZW0IOyjvOyEuOyalC5gLFxuICBtb25leVVuaXQ6IGBbRVJST1JdIOq1rOunpCDquIjslaHsnYQgJHtNQUdJQ19OVU1CRVIubW9uZXlVbml0LnRvTG9jYWxlU3RyaW5nKCl97JuQIOuLqOychOuhnCDsnoXroKXtlbQg7KO87IS47JqULmAsXG4gIG51bWJlcjogJ1tFUlJPUl0g7J6Q7Jew7IiY66eMIOyeheugpe2VtCDso7zshLjsmpQuJyxcbiAgbG90dG9SYW5nZTogYFtFUlJPUl0g66Gc65iQIOuyiO2YuOuKlCAke01BR0lDX05VTUJFUi5sb3R0b1N0YXJ0feu2gO2EsCAke01BR0lDX05VTUJFUi5sb3R0b0VuZH3roZwg7J6F66Cl7ZW0IOyjvOyEuOyalC5gLFxuICB1bmlxdWVXaW5uaW5nTnVtYmVyOlxuICAgICdbRVJST1JdIOuLueyyqCDrsojtmLjripQg7KSR67O165CY7KeAIOyViuuKlCDqsJLrk6TroZwg7J6F66Cl7ZW0IOyjvOyEuOyalC4nLFxuICB1bmlxdWVCb251c051bWJlcjogJ1tFUlJPUl0g64u57LKoIOuyiO2YuOyZgCDspJHrs7XrkJjsp4Ag7JWK64qUIOqwkuycvOuhnCDsnoXroKXtlbQg7KO87IS47JqULicsXG4gIHdpbm5pbmdOdW1iZXJDb3VudDogYFtFUlJPUl0g64u57LKoIOuyiO2YuOuKlCAke01BR0lDX05VTUJFUi53aW5uaW5nTnVtYmVyQ291bnR96rCc66GcIOyeheugpe2VtCDso7zshLjsmpQuYCxcbiAgcmV0cnlPcHRpb246IGBbRVJST1JdIOyerOyLnOyekSDsmLXshZjsnYAgJHtNQUdJQ19MSVRFUkFMLnJldHJ5fSDtmLnsnYAgJHtNQUdJQ19MSVRFUkFMLnF1aXR97Jy866GcIOyeheugpe2VtCDso7zshLjsmpQuYCxcbn07XG5cbmNvbnN0IFJBTktfSU5GT1JNQVRJT05TID0gW1xuICB7XG4gICAgcmFuazogMSxcbiAgICByZXdhcmQ6IDJfMDAwXzAwMF8wMDAsXG4gICAgbWF0Y2hlZENvdW50OiA2LFxuICAgIGlzQm9udXM6IGZhbHNlLFxuICAgIG1hdGNoZWQ6ICc26rCcJyxcbiAgfSxcbiAge1xuICAgIHJhbms6IDIsXG4gICAgcmV3YXJkOiAzMF8wMDBfMDAwLFxuICAgIG1hdGNoZWRDb3VudDogNSxcbiAgICBpc0JvbnVzOiB0cnVlLFxuICAgIG1hdGNoZWQ6ICc16rCcK+uztOuEiOyKpOuzvCcsXG4gIH0sXG4gIHtcbiAgICByYW5rOiAzLFxuICAgIHJld2FyZDogMV81MDBfMDAwLFxuICAgIG1hdGNoZWRDb3VudDogNSxcbiAgICBpc0JvbnVzOiBmYWxzZSxcbiAgICBtYXRjaGVkOiAnNeqwnCcsXG4gIH0sXG4gIHtcbiAgICByYW5rOiA0LFxuICAgIHJld2FyZDogNTBfMDAwLFxuICAgIG1hdGNoZWRDb3VudDogNCxcbiAgICBpc0JvbnVzOiBmYWxzZSxcbiAgICBtYXRjaGVkOiAnNOqwnCcsXG4gIH0sXG4gIHtcbiAgICByYW5rOiA1LFxuICAgIHJld2FyZDogNV8wMDAsXG4gICAgbWF0Y2hlZENvdW50OiAzLFxuICAgIGlzQm9udXM6IGZhbHNlLFxuICAgIG1hdGNoZWQ6ICcz6rCcJyxcbiAgfSxcbl07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFUlJPUl9NRVNTQUdFLFxuICBNQUdJQ19OVU1CRVIsXG4gIE1BR0lDX0xJVEVSQUwsXG4gIFJBTktfSU5GT1JNQVRJT05TLFxufTtcbiIsImNvbnN0IG1vbmV5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXlJbnB1dCcpO1xuY29uc3QgYm9udXNOdW1iZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib251c051bWJlcklucHV0Jyk7XG5cbmNvbnN0IHB1cmNoYXNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1cmNoYXNlQnV0dG9uJyk7XG5jb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1CdXR0b24nKTtcbmNvbnN0IHJldHJ5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldHJ5QnV0dG9uJyk7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpO1xuXG5jb25zdCB3aW5uaW5nTnVtYmVyc0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5pbmdOdW1iZXJzR3JvdXAnKTtcbmNvbnN0IGxvdHRvQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3R0b0NvbnRlbnQnKTtcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcbmNvbnN0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XG5jb25zdCByYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGUnKTtcbmNvbnN0IHJlc3VsdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0TGlzdENvbnRhaW5lcicpO1xuY29uc3QgbG90dG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdHRvTGlzdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbW9uZXlJbnB1dCxcbiAgYm9udXNOdW1iZXJJbnB1dCxcbiAgcHVyY2hhc2VCdXR0b24sXG4gIGNvbmZpcm1CdXR0b24sXG4gIHJldHJ5QnV0dG9uLFxuICBjbG9zZUJ1dHRvbixcbiAgd2lubmluZ051bWJlcnNHcm91cCxcbiAgbG90dG9Db250ZW50LFxuICByZXN1bHQsXG4gIGNvdW50LFxuICByYXRlLFxuICByZXN1bHRMaXN0Q29udGFpbmVyLFxuICBsb3R0b0xpc3QsXG59O1xuIiwiY29uc3QgeyBwaWNrUmFuZG9tTnVtYmVySW5SYW5nZSB9ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbmNvbnN0IHsgTUFHSUNfTlVNQkVSLCBSQU5LX0lORk9STUFUSU9OUyB9ID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnQnKTtcblxuY2xhc3MgTG90dG9NYWNoaW5lIHtcbiAgI2xvdHRvcztcblxuICAjbWFjaGluZUlucHV0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI21hY2hpbmVJbnB1dCA9IHtcbiAgICAgIG1vbmV5OiBudWxsLFxuICAgICAgd2lubmluZzogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TG90dG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNsb3R0b3M7XG4gIH1cblxuICBnZXRNb25leSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbWFjaGluZUlucHV0Lm1vbmV5O1xuICB9XG5cbiAgZ2V0V2lubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy4jbWFjaGluZUlucHV0Lndpbm5pbmc7XG4gIH1cblxuICBzZXRNb25leShtb25leSkge1xuICAgIHRoaXMuI21hY2hpbmVJbnB1dC5tb25leSA9IG1vbmV5O1xuICB9XG5cbiAgc2V0V2lubmluZyh3aW5uaW5nKSB7XG4gICAgdGhpcy4jbWFjaGluZUlucHV0Lndpbm5pbmcgPSB3aW5uaW5nO1xuICB9XG5cbiAgZ2VuZXJhdGVMb3R0b3MoKSB7XG4gICAgY29uc3QgbG90dG9Db3VudCA9IHRoaXMuZ2V0TG90dG9Db3VudCgpO1xuXG4gICAgdGhpcy4jbG90dG9zID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbG90dG9Db3VudCB9KS5tYXAoKCkgPT5cbiAgICAgIHRoaXMuI2dldENvbXBvc2VkTG90dG9OdW1iZXJzKCkuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QgLSBzZWNvbmQpXG4gICAgKTtcbiAgfVxuXG4gIGdldExvdHRvQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI21hY2hpbmVJbnB1dC5tb25leS5nZXRBbW91bnQoKSAvIE1BR0lDX05VTUJFUi5tb25leVVuaXQ7XG4gIH1cblxuICBnZXRDb2xsZWN0ZWRSYW5rcygpIHtcbiAgICBjb25zdCBSQU5LX1RFTVBMQVRFID0gWzAsIDAsIDAsIDAsIDBdO1xuXG4gICAgY29uc3QgcmFua3MgPSB0aGlzLiNsb3R0b3MucmVkdWNlKChhY2N1bXVsYXRvciwgbG90dG8pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLiNnZXRJbmNyZWFzZWRSYW5rcyhsb3R0bywgYWNjdW11bGF0b3IpO1xuICAgIH0sIFJBTktfVEVNUExBVEUpO1xuXG4gICAgcmV0dXJuIHJhbmtzO1xuICB9XG5cbiAgI2dldENvbXBvc2VkTG90dG9OdW1iZXJzKCkge1xuICAgIGNvbnN0IGxvdHRvTnVtYmVycyA9IG5ldyBTZXQoKTtcblxuICAgIHdoaWxlIChsb3R0b051bWJlcnMuc2l6ZSA8IE1BR0lDX05VTUJFUi5sb3R0b051bWJlckNvdW50KSB7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBwaWNrUmFuZG9tTnVtYmVySW5SYW5nZShcbiAgICAgICAgTUFHSUNfTlVNQkVSLmxvdHRvU3RhcnQsXG4gICAgICAgIE1BR0lDX05VTUJFUi5sb3R0b0VuZFxuICAgICAgKTtcbiAgICAgIGxvdHRvTnVtYmVycy5hZGQocmFuZG9tTnVtYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLmxvdHRvTnVtYmVyc107XG4gIH1cblxuICAjZ2V0SW5jcmVhc2VkUmFua3MobG90dG8sIHJhbmtzKSB7XG4gICAgY29uc3QgdXBkYXRlZFJhbmtzID0gcmFua3M7XG4gICAgY29uc3QgbWF0Y2hlZENvdW50ID0gdGhpcy4jZ2V0TWF0Y2hlZENvdW50KGxvdHRvKTtcbiAgICBjb25zdCByYW5rSW5kZXggPSB0aGlzLiNnZXRSYW5rSW5kZXgobWF0Y2hlZENvdW50LCB0aGlzLiNpc0JvbnVzKGxvdHRvKSk7XG4gICAgaWYgKHJhbmtJbmRleCAhPT0gTUFHSUNfTlVNQkVSLmxvc2luZykge1xuICAgICAgdXBkYXRlZFJhbmtzW3JhbmtJbmRleF0gKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZWRSYW5rcztcbiAgfVxuXG4gICNnZXRNYXRjaGVkQ291bnQobG90dG8pIHtcbiAgICBjb25zdCB3aW5uaW5nTnVtYmVycyA9IHRoaXMuI21hY2hpbmVJbnB1dC53aW5uaW5nLmdldFdpbm5pbmdOdW1iZXJzKCk7XG4gICAgcmV0dXJuIGxvdHRvLmZpbHRlcigobnVtYmVyKSA9PiB3aW5uaW5nTnVtYmVycy5pbmNsdWRlcyhudW1iZXIpKS5sZW5ndGg7XG4gIH1cblxuICAjZ2V0UmFua0luZGV4KG1hdGNoZWRDb3VudCwgaXNCb251cykge1xuICAgIGNvbnN0IHJhbmtJbmRleCA9IFJBTktfSU5GT1JNQVRJT05TLmZpbmRJbmRleChcbiAgICAgIChyYW5rSW5mb3JtYXRpb24pID0+XG4gICAgICAgIHJhbmtJbmZvcm1hdGlvbi5pc0JvbnVzID09PSBpc0JvbnVzICYmXG4gICAgICAgIHJhbmtJbmZvcm1hdGlvbi5tYXRjaGVkQ291bnQgPT09IG1hdGNoZWRDb3VudFxuICAgICk7XG4gICAgaWYgKHJhbmtJbmRleCA9PT0gTUFHSUNfTlVNQkVSLmZhaWxGaW5kSW5kZXgpIHJldHVybiBNQUdJQ19OVU1CRVIubG9zaW5nO1xuXG4gICAgcmV0dXJuIHJhbmtJbmRleDtcbiAgfVxuXG4gICNpc0JvbnVzKGxvdHRvKSB7XG4gICAgcmV0dXJuIGxvdHRvLmluY2x1ZGVzKHRoaXMuI21hY2hpbmVJbnB1dC53aW5uaW5nLmdldEJvbnVzTnVtYmVyKCkpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IExvdHRvTWFjaGluZTtcbiIsImNvbnN0IHsgUkFOS19JTkZPUk1BVElPTlMsIE1BR0lDX05VTUJFUiB9ID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnQnKTtcblxuY2xhc3MgQmVuZWZpdCB7XG4gICNyYXRlO1xuXG4gIGdldFJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3JhdGU7XG4gIH1cblxuICBjYWxjdWxhdGVSYXRlKG1vbmV5LCByYW5rcykge1xuICAgIGNvbnN0IHRvdGFsID0gcmFua3MucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCByYW5rLCByYW5rSW5kZXgpID0+XG4gICAgICAgIGFjY3VtdWxhdG9yICsgcmFuayAqIFJBTktfSU5GT1JNQVRJT05TW3JhbmtJbmRleF0ucmV3YXJkLFxuICAgICAgMFxuICAgICk7XG5cbiAgICB0aGlzLiNyYXRlID0gTnVtYmVyKCgodG90YWwgLyBtb25leSkgKiBNQUdJQ19OVU1CRVIucGVyY2VudCkudG9GaXhlZCgxKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCZW5lZml0O1xuIiwiY29uc3QgeyBpbnB1dFZhbGlkYXRvciB9ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbmNvbnN0IHsgRVJST1JfTUVTU0FHRSwgTUFHSUNfTlVNQkVSIH0gPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudCcpO1xuXG5jbGFzcyBNb25leSB7XG4gICNhbW91bnQ7XG5cbiAgY29uc3RydWN0b3IoYW1vdW50KSB7XG4gICAgdGhpcy4jdmFsaWRhdGVBbW91bnQoYW1vdW50KTtcbiAgICB0aGlzLiNhbW91bnQgPSBhbW91bnQ7XG4gIH1cblxuICBnZXRBbW91bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Ftb3VudDtcbiAgfVxuXG4gICN2YWxpZGF0ZUFtb3VudChhbW91bnQpIHtcbiAgICBpZiAoIWlucHV0VmFsaWRhdG9yLmlzTnVtYmVyKGFtb3VudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFLm51bWJlcik7XG4gICAgfVxuICAgIGlmIChhbW91bnQgPiBNQUdJQ19OVU1CRVIubW9uZXlMaW1pdCB8fCBhbW91bnQgPCBNQUdJQ19OVU1CRVIubW9uZXlVbml0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUVTU0FHRS5tb25leVJhbmdlKTtcbiAgICB9XG4gICAgaWYgKGFtb3VudCAlIE1BR0lDX05VTUJFUi5tb25leVVuaXQgIT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFLm1vbmV5VW5pdCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9uZXk7XG4iLCJjb25zdCB7IGlucHV0VmFsaWRhdG9yIH0gPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuY29uc3QgeyBFUlJPUl9NRVNTQUdFLCBNQUdJQ19OVU1CRVIgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50Jyk7XG5cbmNsYXNzIFdpbm5pbmcge1xuICAjd2lubmluZ051bWJlcnM7XG5cbiAgI2JvbnVzTnVtYmVyO1xuXG4gIGdldFdpbm5pbmdOdW1iZXJzKCkge1xuICAgIHJldHVybiB0aGlzLiN3aW5uaW5nTnVtYmVycztcbiAgfVxuXG4gIGdldEJvbnVzTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNib251c051bWJlcjtcbiAgfVxuXG4gIHNldFdpbm5pbmdOdW1iZXJzKHdpbm5pbmdOdW1iZXJzKSB7XG4gICAgdGhpcy4jdmFsaWRhdGVXaW5uaW5nTnVtYmVycyh3aW5uaW5nTnVtYmVycyk7XG4gICAgdGhpcy4jd2lubmluZ051bWJlcnMgPSB3aW5uaW5nTnVtYmVycztcbiAgfVxuXG4gIHNldEJvbnVzTnVtYmVyKGJvbnVzTnVtYmVyKSB7XG4gICAgdGhpcy4jdmFsaWRhdGVCb251c051bWJlcihib251c051bWJlcik7XG4gICAgdGhpcy4jYm9udXNOdW1iZXIgPSBib251c051bWJlcjtcbiAgfVxuXG4gICN2YWxpZGF0ZVdpbm5pbmdOdW1iZXJzKHdpbm5pbmdOdW1iZXJzKSB7XG4gICAgd2lubmluZ051bWJlcnMuZm9yRWFjaCgod2lubmluZ051bWJlcikgPT4ge1xuICAgICAgdGhpcy4jdmFsaWRhdGVOdW1iZXIod2lubmluZ051bWJlcik7XG4gICAgfSk7XG4gICAgaWYgKCFpbnB1dFZhbGlkYXRvci5pc1VuaXF1ZUFycmF5KHdpbm5pbmdOdW1iZXJzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01FU1NBR0UudW5pcXVlV2lubmluZ051bWJlcik7XG4gICAgfVxuICAgIGlmICh3aW5uaW5nTnVtYmVycy5sZW5ndGggIT09IE1BR0lDX05VTUJFUi53aW5uaW5nTnVtYmVyQ291bnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFLndpbm5pbmdOdW1iZXJDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgI3ZhbGlkYXRlQm9udXNOdW1iZXIoYm9udXNOdW1iZXIpIHtcbiAgICB0aGlzLiN2YWxpZGF0ZU51bWJlcihib251c051bWJlcik7XG5cbiAgICBpZiAoIWlucHV0VmFsaWRhdG9yLmlzVW5pcXVlQXJyYXkoWy4uLnRoaXMuI3dpbm5pbmdOdW1iZXJzLCBib251c051bWJlcl0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUVTU0FHRS51bmlxdWVCb251c051bWJlcik7XG4gICAgfVxuICB9XG5cbiAgI3ZhbGlkYXRlTnVtYmVyKG51bWJlcikge1xuICAgIGlmICghaW5wdXRWYWxpZGF0b3IuaXNOdW1iZXIobnVtYmVyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01FU1NBR0UubnVtYmVyKTtcbiAgICB9XG5cbiAgICBpZiAoIWlucHV0VmFsaWRhdG9yLmlzTnVtYmVySW5Mb3R0b1JhbmdlKG51bWJlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFLmxvdHRvUmFuZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbm5pbmc7XG4iLCJjb25zdCBpbnB1dFZhbGlkYXRvciA9IHtcbiAgaXNOdW1iZXI6IChudW1iZXIpID0+IE51bWJlci5pc0ludGVnZXIobnVtYmVyKSxcbiAgaXNOdW1iZXJJbkxvdHRvUmFuZ2U6IChudW1iZXIpID0+IG51bWJlciA8PSA0NSAmJiBudW1iZXIgPj0gMSxcbiAgaXNVbmlxdWVBcnJheTogKGFycmF5KSA9PiBuZXcgU2V0KGFycmF5KS5zaXplID09PSBhcnJheS5sZW5ndGgsXG59O1xuXG5jb25zdCBwaWNrUmFuZG9tTnVtYmVySW5SYW5nZSA9IChzdGFydCwgZW5kKSA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kICsgMSAtIE1hdGguY2VpbChzdGFydCkpKSArIE1hdGguY2VpbChzdGFydCk7XG5cbm1vZHVsZS5leHBvcnRzID0geyBwaWNrUmFuZG9tTnVtYmVySW5SYW5nZSwgaW5wdXRWYWxpZGF0b3IgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzZweDtcXG5cXG4gIGJhY2tncm91bmQ6ICM0ZTViYTY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XFxufVxcblxcbi5ub3JtYWwtZm9udCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgYmFja2dyb3VuZDogIzRlNWJhNjtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWUtd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgcGFkZGluZzogNHJlbTtcXG59XFxuXFxuLmhvbWUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MTRweDtcXG4gIGhlaWdodDogNjgwcHg7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5ob21lLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zdWItdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcblxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLm1vbmV5LWlucHV0LWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDM4MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLm1vbmV5LWlucHV0IHtcXG4gIHdpZHRoOiAxOTByZW07XFxuICBoZWlnaHQ6IDMwcHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ubG90dG8tbGlzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgaGVpZ2h0OiAyNjBweDtcXG5cXG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmxvdHRvLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG90dG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbn1cXG5cXG4ubG90dG8taW1hZ2Uge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbn1cXG5cXG4ubG90dG8tbnVtYmVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubnVtYmVyLWlucHV0LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5udW1iZXItaW5wdXQge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuXFxuICBmb250LXNpemU6IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXJrLWhvbWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTIwdmg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5yZXN1bHQtbW9kYWwge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ucmVzdWx0LXRpdGxlIHtcXG4gIG1hcmdpbjogMi41cmVtIDAgMi41cmVtIDA7XFxuXFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMnB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucmVzdWx0LWxpc3Qge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMThweDtcXG4gIGhlaWdodDogMS41cmVtO1xcblxcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcblxcbi5yZXN1bHQtbGlzdDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG5cXG4ucmVzdWx0LXBhcnQge1xcbiAgd2lkdGg6IDMzJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICB3aWR0aDogMzMlO1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmJlbmVmaXQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNS41cmVtO1xcblxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNvcHktcmlnaHQtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDQuNXJlbTtcXG5cXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg3OCwgOTEsIDE2NiwgMC4yKTtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xcbiAgY29sb3I6ICM0ZTViYTY7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7RUFFekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZOztFQUVaLG1CQUFtQjtFQUNuQixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhOztFQUViLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTs7RUFFWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTOztFQUVULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCOztFQUV6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXOztFQUVYLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7O0VBRWQsWUFBWTtFQUNaLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTs7RUFFVixrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjOztFQUVkLG1CQUFtQjtFQUNuQiw0Q0FBNEM7O0VBRTVDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzZweDtcXG5cXG4gIGJhY2tncm91bmQ6ICM0ZTViYTY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XFxufVxcblxcbi5ub3JtYWwtZm9udCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgYmFja2dyb3VuZDogIzRlNWJhNjtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWUtd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgcGFkZGluZzogNHJlbTtcXG59XFxuXFxuLmhvbWUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MTRweDtcXG4gIGhlaWdodDogNjgwcHg7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5ob21lLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zdWItdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcblxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLm1vbmV5LWlucHV0LWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDM4MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLm1vbmV5LWlucHV0IHtcXG4gIHdpZHRoOiAxOTByZW07XFxuICBoZWlnaHQ6IDMwcHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ubG90dG8tbGlzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgaGVpZ2h0OiAyNjBweDtcXG5cXG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmxvdHRvLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG90dG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbn1cXG5cXG4ubG90dG8taW1hZ2Uge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbn1cXG5cXG4ubG90dG8tbnVtYmVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubnVtYmVyLWlucHV0LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5udW1iZXItaW5wdXQge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuXFxuICBmb250LXNpemU6IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXJrLWhvbWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTIwdmg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5yZXN1bHQtbW9kYWwge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ucmVzdWx0LXRpdGxlIHtcXG4gIG1hcmdpbjogMi41cmVtIDAgMi41cmVtIDA7XFxuXFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMnB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucmVzdWx0LWxpc3Qge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMThweDtcXG4gIGhlaWdodDogMS41cmVtO1xcblxcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcblxcbi5yZXN1bHQtbGlzdDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG5cXG4ucmVzdWx0LXBhcnQge1xcbiAgd2lkdGg6IDMzJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICB3aWR0aDogMzMlO1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmJlbmVmaXQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNS41cmVtO1xcblxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNvcHktcmlnaHQtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDQuNXJlbTtcXG5cXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg3OCwgOTEsIDE2NiwgMC4yKTtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xcbiAgY29sb3I6ICM0ZTViYTY7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBNQUdJQ19OVU1CRVIsIFJBTktfSU5GT1JNQVRJT05TIH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBMb3R0b01hY2hpbmUgPSByZXF1aXJlKCcuL2RvbWFpbi9jb250cm9sbGVyL0xvdHRvTWFjaGluZScpO1xuY29uc3QgV2lubmluZyA9IHJlcXVpcmUoJy4vZG9tYWluL21vZGVsL1dpbm5pbmcnKTtcbmNvbnN0IE1vbmV5ID0gcmVxdWlyZSgnLi9kb21haW4vbW9kZWwvTW9uZXknKTtcbmNvbnN0IEJlbmVmaXQgPSByZXF1aXJlKCcuL2RvbWFpbi9tb2RlbC9CZW5lZml0Jyk7XG5cbmNvbnN0IHtcbiAgbW9uZXlJbnB1dCxcbiAgYm9udXNOdW1iZXJJbnB1dCxcbiAgcHVyY2hhc2VCdXR0b24sXG4gIGNvbmZpcm1CdXR0b24sXG4gIHJldHJ5QnV0dG9uLFxuICB3aW5uaW5nTnVtYmVyc0dyb3VwLFxuICBsb3R0b0NvbnRlbnQsXG4gIHJlc3VsdCxcbiAgY2xvc2VCdXR0b24sXG4gIGNvdW50LFxuICByYXRlLFxuICByZXN1bHRMaXN0Q29udGFpbmVyLFxuICBsb3R0b0xpc3QsXG59ID0gcmVxdWlyZSgnLi9kb2N1bWVudCcpO1xuXG5jb25zdCBsb3R0b01hY2hpbmUgPSBuZXcgTG90dG9NYWNoaW5lKCk7XG5jb25zdCB3aW5uaW5nID0gbmV3IFdpbm5pbmcoKTtcbmNvbnN0IGJlbmVmaXQgPSBuZXcgQmVuZWZpdCgpO1xuXG5wdXJjaGFzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2F2ZU1vbmV5KCk7XG4gIHB1cmNoYXNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblxuICBsb3R0b01hY2hpbmUuZ2VuZXJhdGVMb3R0b3MoKTtcbiAgcmVuZGVyTG90dG9Db250ZW50KCk7XG4gIHJlbmRlcldpbm5pbmdOdW1lYmVyc0lucHV0KCk7XG59KTtcblxuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2F2ZVdpbm5pbmcoKTtcblxuICBjb25zdCByYW5rcyA9IGxvdHRvTWFjaGluZS5nZXRDb2xsZWN0ZWRSYW5rcygpO1xuICBiZW5lZml0LmNhbGN1bGF0ZVJhdGUobG90dG9NYWNoaW5lLmdldE1vbmV5KCkuZ2V0QW1vdW50KCksIHJhbmtzKTtcbiAgcmVuZGVyUmVzdWx0KHJhbmtzKTtcbn0pO1xuXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxucmV0cnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5jb25zdCBzYXZlTW9uZXkgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbW9uZXkgPSBuZXcgTW9uZXkoTnVtYmVyKG1vbmV5SW5wdXQudmFsdWUpKTtcbiAgICBsb3R0b01hY2hpbmUuc2V0TW9uZXkobW9uZXkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG1vbmV5SW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIHdpbmRvdy5hbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICBtb25leUlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn07XG5cbmNvbnN0IHNhdmVXaW5uaW5nID0gKCkgPT4ge1xuICB0cnkge1xuICAgIHdpbm5pbmcuc2V0V2lubmluZ051bWJlcnMoZ2V0V2lubmluZ051bWJlcnNJbnB1dCgpKTtcbiAgICB3aW5uaW5nLnNldEJvbnVzTnVtYmVyKE51bWJlcihib251c051bWJlcklucHV0LnZhbHVlKSk7XG4gICAgbG90dG9NYWNoaW5lLnNldFdpbm5pbmcod2lubmluZyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd2luZG93LmFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJMb3R0b0NvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGxvdHRvQ291bnQgPSBsb3R0b01hY2hpbmUuZ2V0TG90dG9Db3VudCgpO1xuICBjb25zdCBsb3R0b3MgPSBsb3R0b01hY2hpbmUuZ2V0TG90dG9zKCk7XG5cbiAgY291bnQuaW5uZXJIVE1MID0gbG90dG9Db3VudDtcbiAgbG90dG9MaXN0LmlubmVySFRNTCA9IGxvdHRvc1xuICAgIC5tYXAoXG4gICAgICAobG90dG8pID0+XG4gICAgICAgIGA8ZGl2IGlkPVwibG90dG9cIiBjbGFzcz1cImxvdHRvLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG90dG8taW1hZ2VcIj7wn46fPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJsb3R0b051bWJlcnNcIiBjbGFzcz1cImxvdHRvLW51bWJlcnMgbm9ybWFsLWZvbnRcIj4ke2xvdHRvLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfTwvZGl2PlxuICAgICAgPC9kaXY+YFxuICAgIClcbiAgICAuam9pbignJyk7XG4gIGxvdHRvQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG5cbmNvbnN0IHJlbmRlcldpbm5pbmdOdW1lYmVyc0lucHV0ID0gKCkgPT4ge1xuICB3aW5uaW5nTnVtYmVyc0dyb3VwLmlubmVySFRNTCA9IFsuLi5BcnJheShNQUdJQ19OVU1CRVIud2lubmluZ051bWJlckNvdW50KV1cbiAgICAubWFwKCgpID0+ICc8aW5wdXQgY2xhc3M9XCJudW1iZXItaW5wdXRcIiAvPicpXG4gICAgLmpvaW4oJycpO1xufTtcblxuY29uc3QgcmVuZGVyUmVzdWx0ID0gKHJhbmtzKSA9PiB7XG4gIHJlc3VsdExpc3RDb250YWluZXIuaW5uZXJIVE1MID0gUkFOS19JTkZPUk1BVElPTlMucmV2ZXJzZSgpXG4gICAgLm1hcCgocmFua0luZm9ybWF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicmVzdWx0LWxpc3Qgc3BhY2UtYmV0d2VlblwiPlxuICAgIDxwIGNsYXNzPVwicmVzdWx0LWl0ZW1cIj4ke3JhbmtJbmZvcm1hdGlvbi5tYXRjaGVkfTwvcD5cbiAgICA8cCBjbGFzcz1cInJlc3VsdC1pdGVtXCI+JHtyYW5rSW5mb3JtYXRpb24ucmV3YXJkLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgIDxwIGNsYXNzPVwicmVzdWx0LWl0ZW1cIj4ke3JhbmtzWzQgLSBpbmRleF196rCcPC9wPlxuICAgIDwvZGl2PmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG4gIHJhdGUuaW5uZXJIVE1MID0gYmVuZWZpdC5nZXRSYXRlKCk7XG4gIHJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufTtcblxuY29uc3QgZ2V0V2lubmluZ051bWJlcnNJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgd2lubmluZ051bWJlcnNJbnB1dCA9IFsuLi5BcnJheShNQUdJQ19OVU1CRVIud2lubmluZ051bWJlckNvdW50KV0ubWFwKFxuICAgIChfXywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG51bWJlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCN3aW5uaW5nTnVtYmVyc0dyb3VwID4gaW5wdXQ6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSlgXG4gICAgICApO1xuICAgICAgcmV0dXJuIE51bWJlcihudW1iZXJJbnB1dC52YWx1ZSk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiB3aW5uaW5nTnVtYmVyc0lucHV0O1xufTtcbiJdLCJuYW1lcyI6WyJNQUdJQ19OVU1CRVIiLCJzZWNvbmRSYW5rSW5kZXgiLCJwZXJjZW50IiwibW9uZXlVbml0IiwibW9uZXlMaW1pdCIsImxvdHRvU3RhcnQiLCJsb3R0b0VuZCIsIndpbm5pbmdOdW1iZXJDb3VudCIsImxvdHRvTnVtYmVyQ291bnQiLCJsb3NpbmciLCJmYWlsRmluZEluZGV4IiwiTUFHSUNfTElURVJBTCIsInNlcGFyYXRvciIsInJldHJ5IiwicXVpdCIsImNvbW1hIiwiRVJST1JfTUVTU0FHRSIsIm1vbmV5UmFuZ2UiLCJ0b0xvY2FsZVN0cmluZyIsIm51bWJlciIsImxvdHRvUmFuZ2UiLCJ1bmlxdWVXaW5uaW5nTnVtYmVyIiwidW5pcXVlQm9udXNOdW1iZXIiLCJyZXRyeU9wdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJSQU5LX0lORk9STUFUSU9OUyIsInJhbmsiLCJyZXdhcmQiLCJtYXRjaGVkQ291bnQiLCJpc0JvbnVzIiwibWF0Y2hlZCIsIm1vbmV5SW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9udXNOdW1iZXJJbnB1dCIsInB1cmNoYXNlQnV0dG9uIiwiY29uZmlybUJ1dHRvbiIsInJldHJ5QnV0dG9uIiwiY2xvc2VCdXR0b24iLCJ3aW5uaW5nTnVtYmVyc0dyb3VwIiwibG90dG9Db250ZW50IiwicmVzdWx0IiwiY291bnQiLCJyYXRlIiwicmVzdWx0TGlzdENvbnRhaW5lciIsImxvdHRvTGlzdCIsInBpY2tSYW5kb21OdW1iZXJJblJhbmdlIiwicmVxdWlyZSIsIkxvdHRvTWFjaGluZSIsInRoaXMiLCJtb25leSIsIndpbm5pbmciLCJsb3R0b0NvdW50IiwiZ2V0TG90dG9Db3VudCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsInNvcnQiLCJmaXJzdCIsInNlY29uZCIsImdldEFtb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwibG90dG8iLCJsb3R0b051bWJlcnMiLCJTZXQiLCJzaXplIiwicmFuZG9tTnVtYmVyIiwiYWRkIiwicmFua3MiLCJ1cGRhdGVkUmFua3MiLCJyYW5rSW5kZXgiLCJ3aW5uaW5nTnVtYmVycyIsImdldFdpbm5pbmdOdW1iZXJzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJmaW5kSW5kZXgiLCJyYW5rSW5mb3JtYXRpb24iLCJnZXRCb251c051bWJlciIsIkJlbmVmaXQiLCJ0b3RhbCIsIk51bWJlciIsInRvRml4ZWQiLCJpbnB1dFZhbGlkYXRvciIsIk1vbmV5IiwiYW1vdW50IiwiaXNOdW1iZXIiLCJFcnJvciIsIldpbm5pbmciLCJib251c051bWJlciIsImZvckVhY2giLCJ3aW5uaW5nTnVtYmVyIiwiaXNVbmlxdWVBcnJheSIsImlzTnVtYmVySW5Mb3R0b1JhbmdlIiwiaXNJbnRlZ2VyIiwiYXJyYXkiLCJzdGFydCIsImVuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNlaWwiLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJpZCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5jIiwibG90dG9NYWNoaW5lIiwiYmVuZWZpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlTW9uZXkiLCJnZW5lcmF0ZUxvdHRvcyIsInJlbmRlckxvdHRvQ29udGVudCIsInJlbmRlcldpbm5pbmdOdW1lYmVyc0lucHV0Iiwic2F2ZVdpbm5pbmciLCJnZXRDb2xsZWN0ZWRSYW5rcyIsImNhbGN1bGF0ZVJhdGUiLCJnZXRNb25leSIsInJlbmRlclJlc3VsdCIsImRpc3BsYXkiLCJsb2NhdGlvbiIsInJlbG9hZCIsInZhbHVlIiwic2V0TW9uZXkiLCJlcnJvciIsImNsYXNzTGlzdCIsImFsZXJ0IiwibWVzc2FnZSIsInNldFdpbm5pbmdOdW1iZXJzIiwiZ2V0V2lubmluZ051bWJlcnNJbnB1dCIsInNldEJvbnVzTnVtYmVyIiwic2V0V2lubmluZyIsImxvdHRvcyIsImdldExvdHRvcyIsImlubmVySFRNTCIsImdldFJhdGUiLCJfXyIsIm51bWJlcklucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==
