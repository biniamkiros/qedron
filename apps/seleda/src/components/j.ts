// (window.webpackJsonp = window.webpackJsonp || []).push([
//   [21],
//   {
//     "6gJx": function (e, c, t) {
//       "use strict";
//       t.d(c, "a", function () {
//         return s;
//       });
//       var n = t("AoU+"),
//         i = t("0Qy+"),
//         r = t("ECmG"),
//         o = t("Reti"),
//         a = t("JxkB"),
//         l = t("Iq5M");
//       let s = (() => {
//         class e {
//           constructor(e, c, t) {
//             (this.logger = e),
//               (this.store = c),
//               (this.aggregateRootApi = t),
//               (this.items$ = this.store.select(a.a.items)),
//               (this.selectedItem$ = this.store.select(a.a.selectedItem)),
//               (this.contentLoading$ = this.store.select(a.a.contentLoading)),
//               (this.counter$ = this.store.select(a.a.counter)),
//               (this.counterLoading$ = this.store.select(a.a.counterLoading));
//           }
//           getPortalContent(e) {
//             this.store.dispatch(new o.b(e));
//           }
//           getCounter() {
//             this.store.dispatch(new o.a());
//           }
//         }
//         return (
//           (e.ɵfac = function (c) {
//             return new (c || e)(l.gc(n.o), l.gc(i.h), l.gc(r.a));
//           }),
//           (e.ɵprov = l.Sb({
//             token: e,
//             factory: e.ɵfac,
//             providedIn: "root",
//           })),
//           e
//         );
//       })();
//     },
//     ECmG: function (e, c, t) {
//       "use strict";
//       t.d(c, "a", function () {
//         return b;
//       });
//       var n = t("AoU+"),
//         i = t("0Qy+"),
//         r = t("kpJz"),
//         o = t("AytR");
//       const a =
//           o.a.urls.api + "/cms/api/portal-content/get-portal-content-by-key",
//         l = o.a.urls.api + "/cms/api/sourcing/get-tender-summary";
//       var s = t("Iq5M"),
//         d = t("3ukZ");
//       let b = (() => {
//         class e {
//           constructor(e, c, t) {
//             (this.http = e), (this.logger = c), (this.store = t);
//           }
//           getPortalContent(e) {
//             return this.http.get(`${a}/${e}`);
//           }
//           getCounter() {
//             return this.http.get("" + l).pipe(Object(r.a)((e) => e));
//           }
//         }
//         return (
//           (e.ɵfac = function (c) {
//             return new (c || e)(s.gc(d.c), s.gc(n.o), s.gc(i.h));
//           }),
//           (e.ɵprov = s.Sb({
//             token: e,
//             factory: e.ɵfac,
//           })),
//           e
//         );
//       })();
//     },
//     JxkB: function (e, c, t) {
//       "use strict";
//       t.d(c, "a", function () {
//         return f;
//       });
//       var n = t("UNrv"),
//         i = t("AoU+"),
//         r = t("0Qy+"),
//         o = t("fwXJ"),
//         a = t("ldfw"),
//         l = t("lgJ9"),
//         s = t("6jvO"),
//         d = t("ECmG"),
//         b = t("Reti"),
//         u = t("Iq5M"),
//         p = t("Lq/f"),
//         g = t("oIEy");
//       let f = (() => {
//         let e = class {
//           constructor(e, c, t, n) {
//             (this.logger = e),
//               (this.aggregateRootApi = c),
//               (this.notification = t),
//               (this.router = n);
//           }
//           static items(e) {
//             return e.items;
//           }
//           static selectedItem(e) {
//             return e.selectedItem;
//           }
//           static contentLoading(e) {
//             return e.contentLoading;
//           }
//           static counter(e) {
//             return e.counter;
//           }
//           static counterLoading(e) {
//             return e.counterLoading;
//           }
//           getPortalContent({ patchState: e }, { payload: c }) {
//             return (
//               e({
//                 contentLoading: !0,
//               }),
//               this.aggregateRootApi.getPortalContent(c).pipe(
//                 Object(l.a)((c) => {
//                   e({
//                     contentLoading: !1,
//                     selectedItem: c,
//                   });
//                 }),
//                 Object(s.a)((c) =>
//                   Object(o.a)(
//                     e({
//                       contentLoading: !1,
//                     })
//                   )
//                 )
//               )
//             );
//           }
//           getCounter({ patchState: e }) {
//             return (
//               e({
//                 counterLoading: !0,
//               }),
//               this.aggregateRootApi.getCounter().pipe(
//                 Object(l.a)((c) => {
//                   e({
//                     counterLoading: !1,
//                     counter: c,
//                   });
//                 }),
//                 Object(s.a)((c) =>
//                   Object(o.a)(
//                     e({
//                       counterLoading: !1,
//                     })
//                   )
//                 )
//               )
//             );
//           }
//         };
//         return (
//           (e.ɵfac = function (c) {
//             return new (c || e)(u.gc(i.o), u.gc(d.a), u.gc(p.b), u.gc(g.h));
//           }),
//           (e.ɵprov = u.Sb({
//             token: e,
//             factory: e.ɵfac,
//           })),
//           Object(n.b)(
//             [
//               Object(r.a)(b.b),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object, b.b]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "getPortalContent",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(r.a)(b.a),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "getCounter",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(r.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Array),
//             ],
//             e,
//             "items",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(r.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Object),
//             ],
//             e,
//             "selectedItem",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(r.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Boolean),
//             ],
//             e,
//             "contentLoading",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(r.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Number),
//             ],
//             e,
//             "counter",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(r.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Boolean),
//             ],
//             e,
//             "counterLoading",
//             null
//           ),
//           (e = Object(n.b)(
//             [
//               Object(r.g)({
//                 name: "PortalContentStateModel",
//                 defaults: {
//                   items: [],
//                   selectedItem: void 0,
//                   contentLoading: !1,
//                   counter: 0,
//                   counterLoading: !1,
//                 },
//               }),
//             ],
//             e
//           )),
//           e
//         );
//       })();
//     },
//     Reti: function (e, c, t) {
//       "use strict";
//       t.d(c, "b", function () {
//         return n;
//       }),
//         t.d(c, "a", function () {
//           return i;
//         });
//       let n = (() => {
//           class e {
//             constructor(e) {
//               this.payload = e;
//             }
//           }
//           return (e.type = "[PortalContentState] GetPortalContent"), e;
//         })(),
//         i = (() => {
//           class e {}
//           return (e.type = "[PortalContentState] GetCounter"), e;
//         })();
//     },
//     "jd/t": function (e, c, t) {
//       "use strict";
//       t.r(c),
//         t.d(c, "TenderingModule", function () {
//           return Uc;
//         });
//       var n = t("SpTn"),
//         i = t("bgvj"),
//         r = t("0Qy+"),
//         o = t("iynU"),
//         a = t("pbKG"),
//         l = t("0EGD"),
//         s = t("BATW"),
//         d = t("ECmG"),
//         b = t("6gJx"),
//         u = t("JxkB"),
//         p = t("AvXS"),
//         g = t("8so3"),
//         f = t("kKgD"),
//         h = t("KwjO"),
//         m = t("TpS0"),
//         y = t("qgVS"),
//         x = t("NeLi"),
//         z = t("bHUW"),
//         k = t("3uam"),
//         G = t("Ccs0"),
//         v = t("oIEy"),
//         C = t("IiTI"),
//         I = t("BVP5"),
//         S = t("AoU+"),
//         T = t("Iq5M"),
//         O = t("RlrJ"),
//         F = t("nn4Z"),
//         P = t("r5Zq"),
//         w = t("Adwk"),
//         q = t("J5bZ"),
//         Z = t("GvFY"),
//         L = t("HKMU"),
//         j = t("H9Fw"),
//         D = t("0lhZ"),
//         $ = t("LI7M"),
//         M = t("iYqt"),
//         B = t("0Alf"),
//         E = t("bC+c"),
//         N = t("9qbf"),
//         A = t("rwjT"),
//         Q = t("9pXO"),
//         R = t("Tm5P"),
//         W = t("aMDd");
//       function V(e, c) {
//         1 & e && T.Xb(0, "i", 24);
//       }
//       function X(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0, 29),
//             T.cc(1, "tr", 30),
//             T.cc(2, "td", 31),
//             T.ac(3),
//             T.bd(4),
//             T.Zb(),
//             T.bc(),
//             T.cc(5, "td", 32),
//             T.ac(6),
//             T.bd(7),
//             T.Zb(),
//             T.bc(),
//             T.cc(8, "td", 32),
//             T.ac(9),
//             T.bd(10),
//             T.Zb(),
//             T.bc(),
//             T.cc(11, "td", 32),
//             T.ac(12),
//             T.bd(13),
//             T.Zb(),
//             T.bc(),
//             T.cc(14, "td", 32),
//             T.ac(15),
//             T.bd(16),
//             T.Zb(),
//             T.bc(),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = c.$implicit,
//             t = c.index,
//             n = T.oc(2);
//           T.Gb(2),
//             T.xc("ngClass", n.getBorder(t)),
//             T.Gb(2),
//             T.dd(" ", null == e ? null : e.referenceNo, " "),
//             T.Gb(3),
//             T.dd("", e.organizationName, " "),
//             T.Gb(3),
//             T.dd("", e.packageName, " "),
//             T.Gb(3),
//             T.dd(" ", e.procurementCategory, " "),
//             T.Gb(3),
//             T.dd(" ", null == e ? null : e.amount, " ");
//         }
//       }
//       const U = function () {
//         return {
//           x: "1000px",
//         };
//       };
//       function H(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.cc(0, "nz-table", 25, 26),
//             T.pc(2, "async"),
//             T.cc(3, "thead"),
//             T.cc(4, "tr"),
//             T.cc(5, "th"),
//             T.bd(6),
//             T.pc(7, "translate"),
//             T.bc(),
//             T.cc(8, "th"),
//             T.bd(9),
//             T.pc(10, "translate"),
//             T.bc(),
//             T.cc(11, "th"),
//             T.bd(12),
//             T.pc(13, "translate"),
//             T.bc(),
//             T.cc(14, "th", 27),
//             T.kc("nzFilterChange", function (c) {
//               return T.Oc(e), T.oc().filterByCategories(c);
//             }),
//             T.bd(15),
//             T.pc(16, "translate"),
//             T.bc(),
//             T.cc(17, "th"),
//             T.bd(18),
//             T.pc(19, "translate"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(20, "tbody"),
//             T.Zc(21, X, 17, 6, "ng-container", 28),
//             T.pc(22, "async"),
//             T.bc(),
//             T.bc();
//         }
//         if (2 & e) {
//           const e = T.oc();
//           T.xc("nzScroll", T.Cc(25, U))("nzShowPagination", !1)(
//             "nzData",
//             T.qc(2, 11, e.items$)
//           ),
//             T.Gb(6),
//             T.dd(" ", T.qc(7, 13, "Portal.Procurement Ref No"), " "),
//             T.Gb(3),
//             T.dd(" ", T.qc(10, 15, "Organization Name"), " "),
//             T.Gb(3),
//             T.dd(" ", T.qc(13, 17, "Portal.Package Name"), " "),
//             T.Gb(2),
//             T.xc("nzFilters", e.categories)("nzFilterMultiple", !0),
//             T.Gb(1),
//             T.dd(" ", T.qc(16, 19, "Portal.Procurement Category"), " "),
//             T.Gb(3),
//             T.dd(" ", T.qc(19, 21, "Portal.Amount"), " "),
//             T.Gb(3),
//             T.xc("ngForOf", T.qc(22, 23, e.items$));
//         }
//       }
//       function J(e, c) {
//         if (
//           (1 & e && (T.cc(0, "span"), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2);
//           T.Gb(1),
//             T.dd(
//               " No ",
//               e.typeText ? e.typeText : T.qc(2, 1, "Portal.Tenders"),
//               " "
//             );
//         }
//       }
//       function K(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "nz-empty", 33),
//             T.Zc(1, J, 3, 3, "ng-template", null, 34, T.ad),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.Mc(2);
//           T.xc("nzNotFoundContent", e);
//         }
//       }
//       function _(e, c) {
//         if (
//           (1 & e && (T.cc(0, "p", 43), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(3);
//           T.Gb(1), T.dd(" ", T.qc(2, 1, e.typeText), " ");
//         }
//       }
//       function Y(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.cc(1, "div", 40),
//             T.Xb(2, "nz-alert", 41),
//             T.Zc(3, _, 3, 3, "ng-template", null, 42, T.ad),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.Mc(4);
//           T.Gb(2), T.xc("nzMessage", e);
//         }
//       }
//       function ee(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.ac(0),
//             T.cc(1, "button", 44),
//             T.kc("click", function () {
//               return T.Oc(e), T.oc(2).onReset();
//             }),
//             T.bd(2, "Reset Filters"),
//             T.bc(),
//             T.Zb();
//         }
//       }
//       const ce = function () {
//         return ["../../"];
//       };
//       function te(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "div", 35),
//             T.Zc(1, Y, 5, 1, "ng-container", 36),
//             T.Zc(2, ee, 3, 0, "ng-container", 36),
//             T.cc(3, "a", 37),
//             T.nc(),
//             T.cc(4, "svg", 38),
//             T.Xb(5, "path", 39),
//             T.bc(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc();
//           T.Gb(1),
//             T.xc("ngIf", "" !== e.typeText),
//             T.Gb(1),
//             T.xc("ngIf", e.collectionQuery.filter.length > 0),
//             T.Gb(1),
//             T.xc("routerLink", T.Cc(3, ce));
//         }
//       }
//       function ne(e, c) {
//         if (
//           (1 & e && (T.ac(0), T.bd(1), T.pc(2, "translate"), T.Zb()), 2 & e)
//         ) {
//           const e = c.$implicit,
//             t = T.oc().$implicit;
//           T.Gb(1), T.cd(T.qc(2, 1, t.errors[e.key].message));
//         }
//       }
//       function ie(e, c) {
//         if (
//           (1 & e &&
//             (T.Zc(0, ne, 3, 3, "ng-container", 45), T.pc(1, "keyvalue")),
//           2 & e)
//         ) {
//           const e = c.$implicit,
//             t = T.oc();
//           T.xc("ngForOf", T.qc(1, 2, e.errors))("ngForTrackBy", t.index);
//         }
//       }
//       function re(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.ac(0),
//             T.cc(1, "div", 48),
//             T.cc(2, "span", 49),
//             T.cc(3, "i", 50),
//             T.kc("click", function () {
//               T.Oc(e);
//               const c = T.oc().$implicit;
//               return T.oc().expandUsingFolderIcon(c);
//             }),
//             T.bc(),
//             T.cc(4, "span", 51),
//             T.pc(5, "locale"),
//             T.cc(6, "span", 52),
//             T.bd(7),
//             T.bc(),
//             T.bd(8),
//             T.pc(9, "locale"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.Zb();
//         }
//         if (2 & e) {
//           const e = T.oc().$implicit;
//           T.Gb(3),
//             T.xc("nzType", e.isExpanded ? "folder-open" : "folder"),
//             T.Gb(1),
//             T.xc("nzTitle", T.qc(5, 4, null == e ? null : e.title)),
//             T.Gb(3),
//             T.cd(null == e ? null : e.key),
//             T.Gb(1),
//             T.dd(" ", T.qc(9, 6, null == e ? null : e.title), " ");
//         }
//       }
//       function oe(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.cc(1, "span"),
//             T.cc(2, "span"),
//             T.Xb(3, "i", 53),
//             T.bc(),
//             T.cc(4, "span", 54),
//             T.bd(5),
//             T.pc(6, "locale"),
//             T.bc(),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.oc().$implicit;
//           T.Gb(5),
//             T.ed(
//               "[",
//               null == e ? null : e.key,
//               "]: ",
//               T.qc(6, 2, null == e ? null : e.title),
//               ""
//             );
//         }
//       }
//       function ae(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "div", 46),
//             T.cc(1, "div", 47),
//             T.Zc(2, re, 10, 8, "ng-container", 36),
//             T.Zc(3, oe, 7, 4, "ng-container", 36),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(2), T.xc("ngIf", !e.isLeaf), T.Gb(1), T.xc("ngIf", e.isLeaf);
//         }
//       }
//       let le = (() => {
//         class e extends S.d {
//           constructor(e, c, t, n, i) {
//             super(),
//               (this.logger = e),
//               (this.activatedRouter = c),
//               (this.fb = t),
//               (this.facade = n),
//               (this.pFacade = i),
//               (this.pageIndex = 1),
//               (this.pageSize = 10),
//               (this.borderColors = [
//                 "border-blue-light",
//                 "border-orange-light",
//                 "border-yellow-light",
//                 "border-green-light",
//                 "border-gray-300",
//                 "border-blue-light",
//                 "border-orange-light",
//                 "border-yellow-light",
//                 "border-green-light",
//                 "border-gray-300",
//               ]),
//               (this.counter = 0),
//               (this.items$ = this.facade.signedContracts$),
//               (this.itemsLoading$ = this.facade.itemsLoading$),
//               (this.total$ = this.facade.total$),
//               (this.isVisible = !1),
//               (this.type = "all"),
//               (this.typeText = ""),
//               (this.collectionQuery = {
//                 skip: 0,
//                 top: 10,
//                 orderBy: [],
//                 filter: [],
//               }),
//               (this.peCollectionQuery = {
//                 orderBy: [],
//               }),
//               (this.selectedLan = "Select Language"),
//               (this.checked = !1),
//               (this.indeterminate = !1),
//               (this.listOfCurrentPageData = []),
//               (this.listOfData = []),
//               (this.searchValue = ""),
//               (this.setOfCheckedId = []),
//               (this.nodes = []),
//               (this.extendCheckbox = !1),
//               (this.selectedKeys = []),
//               (this.filterSelected = []),
//               (this.categories = [
//                 {
//                   text: "Goods",
//                   value: "Goods",
//                 },
//                 {
//                   text: "Works",
//                   value: "Works",
//                 },
//                 {
//                   text: "Consultancy Services",
//                   value: "ConsultancyServices",
//                 },
//                 {
//                   text: "Non-Consultancy Services",
//                   value: "NonConsultancyServices",
//                 },
//               ]),
//               (this.marketApproaches = [
//                 {
//                   text: "National",
//                   value: "National",
//                 },
//                 {
//                   text: "International",
//                   value: "International",
//                 },
//               ]),
//               (this.procuringEntities = []);
//           }
//           ngOnInit() {
//             this.facade.getSignedContracts(
//               this.collectionQuery,
//               "SignedContract"
//             );
//           }
//           onSearching(e, c) {
//             (this.collectionQuery = Object.assign(
//               Object.assign({}, this.collectionQuery),
//               "" !== e
//                 ? {
//                     search: c,
//                     searchFrom: [e],
//                   }
//                 : {
//                     search: c,
//                     searchFrom: [
//                       "packageName",
//                       "referenceNo",
//                       "procurementCategory",
//                     ],
//                   }
//             )),
//               this.facade.getSignedContracts(
//                 this.collectionQuery,
//                 "SignedContract"
//               );
//           }
//           filterByCategories(e) {
//             if (0 === e.length)
//               (this.categoriesFilter = []),
//                 this.facade.getSignedContracts(
//                   this.collectionQuery,
//                   "SignedContract"
//                 );
//             else {
//               (this.categoriesFilter = Object.assign({}, this.collectionQuery)),
//                 (this.categoriesFilter.filter = []);
//               let c = [];
//               e.forEach((e) => {
//                 c = [
//                   ...c,
//                   {
//                     field: "procurementCategory",
//                     value: e,
//                     operator: "=",
//                   },
//                 ];
//               }),
//                 (this.categoriesFilter.filter = [
//                   ...this.categoriesFilter.filter,
//                   c,
//                 ]);
//             }
//             this.facade.getSignedContracts(
//               this.categoriesFilter,
//               "SignedContract"
//             ),
//               (this.collectionQuery = Object.assign({}, this.categoriesFilter));
//           }
//           getBorder(e) {
//             return this.borderColors[e];
//           }
//           ngOnChanges() {}
//           checkBoxChange(e) {
//             this.selectedKeys = e.keys;
//           }
//           onReset() {
//             (this.selectedKeys = []),
//               (this.collectionQuery = {
//                 skip: 0,
//                 top: 10,
//                 filter: [],
//               }),
//               (this.startDate = void 0),
//               (this.endDate = void 0),
//               (this.filterSelected = []),
//               this.facade.getSignedContracts(
//                 this.collectionQuery,
//                 "SignedContract"
//               );
//           }
//           trackByFn(e, c) {
//             return c && c.id ? c.id : e;
//           }
//           onPageIndexChange(e) {
//             const c = Object.assign({}, this.collectionQuery);
//             (c.skip = (e - 1) * this.pageSize),
//               (c.top = this.pageSize),
//               this.facade.getSignedContracts(c, "SignedContract");
//           }
//           onPageSizeChange(e) {
//             const c = Object.assign({}, this.collectionQuery);
//             (c.skip = 0),
//               (c.top = e),
//               this.facade.getSignedContracts(c, "SignedContract");
//           }
//         }
//         return (
//           (e.ɵfac = function (c) {
//             return new (c || e)(
//               T.Wb(S.o),
//               T.Wb(v.a),
//               T.Wb(O.h),
//               T.Wb(y.a),
//               T.Wb(b.a)
//             );
//           }),
//           (e.ɵcmp = T.Qb({
//             type: e,
//             selectors: [["egp-portal-signed-contract-list"]],
//             features: [T.Db, T.Eb],
//             decls: 40,
//             vars: 22,
//             consts: [
//               [1, "p-3", "bg-gray-100", "min-h-screen"],
//               [1, "container", "mx-auto"],
//               [
//                 1,
//                 "flex",
//                 "flex-col",
//                 "w-full",
//                 "flex-grow",
//                 3,
//                 "nzTitle",
//                 "nzExtra",
//               ],
//               [3, "nzSpinning", "nzDelay"],
//               [1, "flex-1", "-m-4", "bg-white", "border-t"],
//               [1, "z-0", "flex-1", "p-3", "overflow-y-auto"],
//               [1, "flex-1", "mb-3"],
//               [3, "nzSuffix"],
//               ["type", "text", "nz-input", "", 3, "keyup"],
//               ["suffixIconSearch", ""],
//               ["procurementCategory", "nzDropdownMenu"],
//               [1, "ant-table-filter-dropdown"],
//               ["formControlName", "procurementCategory", 3, "change"],
//               ["nz-radio", "", "nzValue", "Goods", 1, "w-full", "my-1"],
//               ["nz-radio", "", "nzValue", "Works", 1, "w-full", "my-1"],
//               [
//                 "nz-radio",
//                 "",
//                 "nzValue",
//                 "ConsultancyServices",
//                 1,
//                 "w-full",
//                 "my-1",
//               ],
//               [
//                 "nz-radio",
//                 "",
//                 "nzValue",
//                 "NonConsultancyServices",
//                 1,
//                 "w-full",
//                 "my-1",
//               ],
//               [
//                 "nzSize",
//                 "small",
//                 "nzShowSizeChanger",
//                 "",
//                 "class",
//                 "h-auto my-3 border-t border-l border-r",
//                 3,
//                 "nzScroll",
//                 "nzShowPagination",
//                 "nzData",
//                 4,
//                 "ngIf",
//                 "ngIfElse",
//               ],
//               [1, "flex", "items-center", "justify-end", "py-3", "bg-gray-100"],
//               [
//                 "nzShowSizeChanger",
//                 "",
//                 "nzSize",
//                 "small",
//                 3,
//                 "nzPageIndex",
//                 "nzPageSize",
//                 "nzTotal",
//                 "nzPageIndexChange",
//                 "nzPageSizeChange",
//               ],
//               ["elseNoBids", ""],
//               ["headerExtra", ""],
//               ["errorTemplate", ""],
//               ["nzTreeTemplate", ""],
//               ["nz-icon", "", "nzType", "search"],
//               [
//                 "nzSize",
//                 "small",
//                 "nzShowSizeChanger",
//                 "",
//                 1,
//                 "h-auto",
//                 "my-3",
//                 "border-t",
//                 "border-l",
//                 "border-r",
//                 3,
//                 "nzScroll",
//                 "nzShowPagination",
//                 "nzData",
//               ],
//               ["row", ""],
//               [3, "nzFilters", "nzFilterMultiple", "nzFilterChange"],
//               ["class", "text-gray-600", 4, "ngFor", "ngForOf"],
//               [1, "text-gray-600"],
//               [1, "text-gray-600", "cursor-pointer", "hover:shadow"],
//               [
//                 1,
//                 "border-l-4",
//                 "cursor-pointer",
//                 "hover:shadow",
//                 2,
//                 "font-size",
//                 "12px",
//                 "margin",
//                 "-23px",
//                 3,
//                 "ngClass",
//               ],
//               [2, "font-size", "12px", "margin", "-23px"],
//               [3, "nzNotFoundContent"],
//               ["contentTpl", ""],
//               [1, "md:block", "hidden", "md:flex", "items-center"],
//               [4, "ngIf"],
//               [
//                 "nzTooltipTitle",
//                 "Back",
//                 "nzTooltipPlacement",
//                 "topCenter",
//                 "nz-tooltip",
//                 "",
//                 1,
//                 "ml-3",
//                 3,
//                 "routerLink",
//               ],
//               [
//                 "xmlns",
//                 "http://www.w3.org/2000/svg",
//                 0,
//                 "xmlns",
//                 "xlink",
//                 "http://www.w3.org/1999/xlink",
//                 "viewBox",
//                 "0 0 50 50",
//                 1,
//                 "fill-current",
//                 "text-gray-800",
//                 "ml-6",
//                 "w-5",
//               ],
//               [
//                 "d",
//                 "M22 3.59375L20.40625 4.8125L1.40625 19.1875L0.34375 20L1.40625 20.8125L20.40625 35.1875L22 36.40625L22 26.09375C34.339844 26.347656 40.796875 30.738281 44.1875 35.125C47.679688 39.644531 48 44.0625 48 44.0625L50 44.03125C50 44.03125 50 43.9375 50 43.9375C50 43.9375 50 43.90625 50 43.90625C50.007813 43.710938 50.226563 36.460938 46.78125 29.0625C43.375 21.742188 36.136719 14.414063 22 14.0625 Z M 20 7.625L20 16L21 16C35.167969 16 41.710938 22.9375 44.96875 29.9375C45.914063 31.96875 46.519531 33.917969 46.96875 35.78125C46.582031 35.144531 46.28125 34.519531 45.78125 33.875C41.929688 28.894531 34.550781 24 21 24L20 24L20 32.375L3.65625 20Z",
//               ],
//               [1, "flex", "items-center", "text-xs"],
//               ["nzType", "warning", 1, "text-xs", 3, "nzMessage"],
//               ["typeMessage", ""],
//               [1, "text-xs", "font-semibold"],
//               ["nz-button", "", "nzType", "default", 1, "mx-2", 3, "click"],
//               [4, "ngFor", "ngForOf", "ngForTrackBy"],
//               ["routerLinkActive", "active", 1, "text-xs", "tree-row"],
//               [1, "flex"],
//               [
//                 1,
//                 "float-left",
//                 "truncate",
//                 "folder-name",
//                 2,
//                 "width",
//                 "calc(100% - 10px)",
//               ],
//               [1, "cursor-pointer"],
//               [
//                 "nz-icon",
//                 "",
//                 1,
//                 "cursor:pointer;",
//                 "rounded-full",
//                 "p-1",
//                 "bg-gray-200",
//                 "border",
//                 "border-gray-400",
//                 3,
//                 "nzType",
//                 "click",
//               ],
//               ["nz-tooltip", "", 3, "nzTitle"],
//               [
//                 1,
//                 "px-2",
//                 "ml-2",
//                 "bg-gray-200",
//                 "border",
//                 "border-gray-400",
//                 "rounded",
//               ],
//               ["nz-icon", "", "nzType", "file"],
//               [1, "ml-2", "folder-name"],
//             ],
//             template: function (e, c) {
//               if (
//                 (1 & e &&
//                   (T.cc(0, "div", 0),
//                   T.cc(1, "div", 1),
//                   T.cc(2, "nz-card", 2),
//                   T.pc(3, "translate"),
//                   T.cc(4, "nz-spin", 3),
//                   T.pc(5, "async"),
//                   T.ac(6),
//                   T.cc(7, "main", 4),
//                   T.cc(8, "div", 5),
//                   T.cc(9, "div", 6),
//                   T.cc(10, "nz-input-group", 7),
//                   T.cc(11, "input", 8),
//                   T.kc("keyup", function (e) {
//                     return c.onSearching("", e.target.value);
//                   }),
//                   T.pc(12, "translate"),
//                   T.bc(),
//                   T.bc(),
//                   T.Zc(13, V, 1, 0, "ng-template", null, 9, T.ad),
//                   T.bc(),
//                   T.cc(15, "nz-dropdown-menu", null, 10),
//                   T.cc(17, "div", 11),
//                   T.cc(18, "nz-radio-group", 12),
//                   T.kc("change", function () {
//                     return c.onSearching("procurementCategory", "");
//                   }),
//                   T.cc(19, "label", 13),
//                   T.bd(20, "Goods"),
//                   T.bc(),
//                   T.cc(21, "label", 14),
//                   T.bd(22, "Works"),
//                   T.bc(),
//                   T.cc(23, "label", 15),
//                   T.bd(24, "Consultancy Services"),
//                   T.bc(),
//                   T.cc(25, "label", 16),
//                   T.bd(26, "Non-Consultancy Services"),
//                   T.bc(),
//                   T.bc(),
//                   T.bc(),
//                   T.bc(),
//                   T.Zc(27, H, 23, 26, "nz-table", 17),
//                   T.pc(28, "async"),
//                   T.cc(29, "div", 18),
//                   T.cc(30, "nz-pagination", 19),
//                   T.kc("nzPageIndexChange", function (e) {
//                     return c.onPageIndexChange(e);
//                   })("nzPageSizeChange", function (e) {
//                     return c.onPageSizeChange(e);
//                   }),
//                   T.pc(31, "async"),
//                   T.bc(),
//                   T.bc(),
//                   T.bc(),
//                   T.bc(),
//                   T.Zb(),
//                   T.Zc(32, K, 3, 1, "ng-template", null, 20, T.ad),
//                   T.bc(),
//                   T.bc(),
//                   T.Zc(34, te, 6, 4, "ng-template", null, 21, T.ad),
//                   T.bc(),
//                   T.bc(),
//                   T.Zc(36, ie, 2, 4, "ng-template", null, 22, T.ad),
//                   T.Zc(38, ae, 4, 2, "ng-template", null, 23, T.ad)),
//                 2 & e)
//               ) {
//                 const e = T.Mc(14),
//                   t = T.Mc(33),
//                   n = T.Mc(35);
//                 T.Gb(2),
//                   T.yc("nzTitle", T.qc(3, 12, "Portal.Contracts Signed")),
//                   T.xc("nzExtra", n),
//                   T.Gb(2),
//                   T.xc("nzSpinning", T.qc(5, 14, c.itemsLoading$))(
//                     "nzDelay",
//                     500
//                   ),
//                   T.Gb(6),
//                   T.xc("nzSuffix", e),
//                   T.Gb(1),
//                   T.Hb("placeholder", T.qc(12, 16, "Search here")),
//                   T.Gb(16),
//                   T.xc("ngIf", T.qc(28, 18, c.total$) > 0)("ngIfElse", t),
//                   T.Gb(3),
//                   T.xc("nzPageIndex", c.pageIndex)("nzPageSize", c.pageSize)(
//                     "nzPageIndex",
//                     1
//                   )("nzTotal", T.qc(31, 20, c.total$));
//               }
//             },
//             directives: [
//               F.a,
//               P.a,
//               w.c,
//               w.d,
//               w.b,
//               q.e,
//               Z.c,
//               O.v,
//               O.k,
//               Z.b,
//               L.t,
//               j.a,
//               D.a,
//               $.a,
//               M.g,
//               M.p,
//               M.q,
//               M.f,
//               M.n,
//               M.m,
//               M.k,
//               L.s,
//               L.q,
//               B.b,
//               v.k,
//               E.d,
//               N.a,
//               A.a,
//               Q.a,
//               v.j,
//             ],
//             pipes: [R.e, L.b, L.l, W.a],
//             encapsulation: 2,
//           })),
//           e
//         );
//       })();
//       var se = t("umQr"),
//         de = t("FLQ+"),
//         be = t("Db6w");
//       const ue = function (e) {
//         return ["tendering", e];
//       };
//       function pe(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "div", 17),
//             T.cc(1, "div", 18),
//             T.cc(2, "p", 19),
//             T.bd(3),
//             T.bc(),
//             T.bc(),
//             T.cc(4, "table", 20),
//             T.cc(5, "tr", 21),
//             T.cc(6, "td", 22),
//             T.bd(7),
//             T.bc(),
//             T.cc(8, "td", 23),
//             T.bd(9),
//             T.pc(10, "date"),
//             T.bc(),
//             T.bc(),
//             T.cc(11, "tr", 21),
//             T.cc(12, "td", 22),
//             T.bd(13),
//             T.bc(),
//             T.cc(14, "td", 23),
//             T.bd(15),
//             T.pc(16, "date"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(17, "div", 24),
//             T.cc(18, "div", 25),
//             T.cc(19, "button", 26),
//             T.bd(20, " Show more "),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(3),
//             T.cd(
//               null == e || null == e.lotInformation
//                 ? null
//                 : e.lotInformation.objectOfProcurement
//             ),
//             T.Gb(4),
//             T.cd("Opening date"),
//             T.Gb(2),
//             T.cd(
//               T.rc(
//                 10,
//                 6,
//                 null == e || null == e.lotInformation
//                   ? null
//                   : e.lotInformation.submissionDeadline,
//                 "medium"
//               )
//             ),
//             T.Gb(4),
//             T.cd("Closing date"),
//             T.Gb(2),
//             T.cd(
//               T.rc(
//                 16,
//                 9,
//                 null == e || null == e.lotInformation
//                   ? null
//                   : e.lotInformation.submissionDeadline,
//                 "medium"
//               )
//             ),
//             T.Gb(4),
//             T.xc("routerLink", T.Dc(12, ue, e.lotId));
//         }
//       }
//       function ge(e, c) {
//         if (
//           (1 & e && (T.cc(0, "div", 9), T.Zc(1, pe, 21, 14, "div", 16), T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit,
//             t = T.oc(3);
//           T.Gb(1), T.xc("ngForOf", e.lots)("ngForTrackBy", t.trackByFn);
//         }
//       }
//       function fe(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.cc(1, "div", 14),
//             T.Zc(2, ge, 2, 2, "div", 15),
//             T.pc(3, "async"),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.oc(2);
//           T.Gb(2),
//             T.xc("ngForOf", T.qc(3, 2, e.items$))("ngForTrackBy", e.trackByFn);
//         }
//       }
//       function he(e, c) {
//         if (
//           (1 & e && (T.ac(0), T.Zc(1, fe, 4, 4, "ng-container", 13), T.Zb()),
//           2 & e)
//         ) {
//           const e = c.ngIf;
//           T.oc();
//           const t = T.Mc(7);
//           T.Gb(1), T.xc("ngIf", e.length > 1e4)("ngIfElse", t);
//         }
//       }
//       function me(e, c) {
//         1 & e && (T.cc(0, "span"), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e &&
//             (T.Gb(1),
//             T.dd(" ", T.qc(2, 1, "Portal.No Related Lots Available"), " "));
//       }
//       function ye(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "nz-empty", 27),
//             T.Zc(1, me, 3, 3, "ng-template", null, 28, T.ad),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.Mc(2);
//           T.xc("nzNotFoundContent", e);
//         }
//       }
//       function xe(e, c) {
//         1 & e && (T.bd(0), T.pc(1, "translate")),
//           2 & e && T.dd(" ", T.qc(1, 1, "Portal.Related Bids"), " ");
//       }
//       function ze(e, c) {
//         1 & e &&
//           (T.cc(0, "p"),
//           T.bd(1, "The time zone is: "),
//           T.cc(2, "strong", 29),
//           T.bd(3, "East Africa Time (GMT+3:00)"),
//           T.bc(),
//           T.bc());
//       }
//       function ke(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "tr"),
//             T.cc(1, "td"),
//             T.bd(2),
//             T.bc(),
//             T.cc(3, "td"),
//             T.bd(4),
//             T.pc(5, "locale"),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(2), T.cd(e.key), T.Gb(2), T.cd(T.qc(5, 2, e.title));
//         }
//       }
//       function Ge(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Country:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.cd(null == e || null == e.address ? null : e.address.country);
//         }
//       }
//       function ve(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Town:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4), T.cd(null == e || null == e.address ? null : e.address.town);
//         }
//       }
//       function Ce(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Street:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.cd(null == e || null == e.address ? null : e.address.street);
//         }
//       }
//       function Ie(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Postal code:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.cd(null == e || null == e.address ? null : e.address.postalCode);
//         }
//       }
//       function Se(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Room Number:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.cd(null == e || null == e.address ? null : e.address.roomNumber);
//         }
//       }
//       function Te(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Telephone:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.ed(
//               "",
//               null == e || null == e.address || null == e.address.telephone
//                 ? null
//                 : e.address.telephone.code,
//               "",
//               null == e || null == e.address || null == e.address.telephone
//                 ? null
//                 : e.address.telephone.number,
//               ""
//             );
//         }
//       }
//       function Oe(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Email:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.cd(null == e || null == e.address ? null : e.address.email);
//         }
//       }
//       function Fe(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Po Box:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.cd(null == e || null == e.address ? null : e.address.poBoz);
//         }
//       }
//       function Pe(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "p", 52),
//             T.cc(1, "span", 19),
//             T.bd(2, "Fax:"),
//             T.bc(),
//             T.cc(3, "span"),
//             T.bd(4),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf;
//           T.Gb(4),
//             T.cd(null == e || null == e.address ? null : e.address.facsimile);
//         }
//       }
//       function we(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "td", 48),
//             T.cc(1, "div", 49),
//             T.Zc(2, Ge, 5, 1, "p", 50),
//             T.Zc(3, ve, 5, 1, "p", 50),
//             T.Zc(4, Ce, 5, 1, "p", 50),
//             T.bc(),
//             T.cc(5, "div", 51),
//             T.Zc(6, Ie, 5, 1, "p", 50),
//             T.Zc(7, Se, 5, 1, "p", 50),
//             T.Zc(8, Te, 5, 2, "p", 50),
//             T.bc(),
//             T.cc(9, "div", 51),
//             T.Zc(10, Oe, 5, 1, "p", 50),
//             T.Zc(11, Fe, 5, 1, "p", 50),
//             T.Zc(12, Pe, 5, 1, "p", 50),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc().ngIf;
//           T.Gb(2),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.country
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.town
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.street
//             ),
//             T.Gb(2),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.postalCode
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.roomNumber
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.telephone
//             ),
//             T.Gb(2),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.email
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.poBox
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.facsimile
//             );
//         }
//       }
//       function qe(e, c) {
//         1 & e && (T.cc(0, "td", 41), T.bd(1, "-"), T.bc());
//       }
//       function Ze(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "table", 39),
//             T.cc(1, "tr", 21),
//             T.cc(2, "td", 40),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc(),
//             T.cc(5, "td", 41),
//             T.bd(6),
//             T.pc(7, "date"),
//             T.bc(),
//             T.bc(),
//             T.cc(8, "tr", 21),
//             T.cc(9, "td", 40),
//             T.bd(10),
//             T.pc(11, "translate"),
//             T.bc(),
//             T.cc(12, "td", 41),
//             T.bd(13),
//             T.bc(),
//             T.bc(),
//             T.cc(14, "tr", 21),
//             T.cc(15, "td", 40),
//             T.bd(16),
//             T.pc(17, "translate"),
//             T.bc(),
//             T.cc(18, "td", 41),
//             T.bd(19),
//             T.bc(),
//             T.bc(),
//             T.cc(20, "tr", 21),
//             T.cc(21, "td", 40),
//             T.bd(22),
//             T.pc(23, "translate"),
//             T.bc(),
//             T.cc(24, "td", 41),
//             T.bd(25),
//             T.bc(),
//             T.bc(),
//             T.cc(26, "tr", 21),
//             T.cc(27, "td", 40),
//             T.bd(28),
//             T.pc(29, "translate"),
//             T.bc(),
//             T.cc(30, "td", 41),
//             T.bd(31),
//             T.bc(),
//             T.bc(),
//             T.cc(32, "tr", 21),
//             T.cc(33, "td", 40),
//             T.bd(34),
//             T.pc(35, "translate"),
//             T.bc(),
//             T.cc(36, "td"),
//             T.cc(37, "nz-table", 42, 43),
//             T.cc(39, "thead"),
//             T.cc(40, "tr"),
//             T.cc(41, "th", 44),
//             T.bd(42),
//             T.pc(43, "translate"),
//             T.bc(),
//             T.cc(44, "th", 44),
//             T.bd(45),
//             T.pc(46, "translate"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(47, "tbody"),
//             T.Zc(48, ke, 6, 4, "tr", 45),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(49, "tr", 21),
//             T.cc(50, "td", 40),
//             T.bd(51),
//             T.pc(52, "translate"),
//             T.bc(),
//             T.cc(53, "td", 41),
//             T.bd(54),
//             T.pc(55, "locale"),
//             T.bc(),
//             T.bc(),
//             T.cc(56, "tr"),
//             T.cc(57, "td", 40),
//             T.bd(58),
//             T.pc(59, "translate"),
//             T.bc(),
//             T.Zc(60, we, 13, 9, "td", 46),
//             T.Zc(61, qe, 2, 0, "td", 47),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.ngIf,
//             t = T.oc(2);
//           T.Gb(3),
//             T.cd(T.qc(4, 22, "Portal.Invitation Date")),
//             T.Gb(3),
//             T.cd(T.qc(7, 24, null == e ? null : e.invitationDate)),
//             T.Gb(4),
//             T.cd(T.qc(11, 26, "Portal.Procurement Reference No")),
//             T.Gb(3),
//             T.cd(null == e ? null : e.packageNumber),
//             T.Gb(3),
//             T.cd(T.qc(17, 28, "Portal.Procurement Category")),
//             T.Gb(3),
//             T.cd(null == e ? null : e.procurementCategory),
//             T.Gb(3),
//             T.cd(T.qc(23, 30, "Portal.Market Type")),
//             T.Gb(3),
//             T.cd(null == e ? null : e.marketType),
//             T.Gb(3),
//             T.cd(T.qc(29, 32, "Portal.Procurement Method")),
//             T.Gb(3),
//             T.cd(null == e ? null : e.procurementMethod),
//             T.Gb(3),
//             T.cd(T.qc(35, 34, "Portal.Procurement Classification")),
//             T.Gb(3),
//             T.xc("nzShowPagination", !1)(
//               "nzData",
//               null == e ? null : e.procurementClassification
//             ),
//             T.Gb(5),
//             T.cd(T.qc(43, 36, "Code")),
//             T.Gb(3),
//             T.cd(T.qc(46, 38, "TENDERING.Title")),
//             T.Gb(3),
//             T.xc("ngForOf", null == e ? null : e.procurementClassification)(
//               "ngForTrackBy",
//               t.trackByFn
//             ),
//             T.Gb(3),
//             T.cd(T.qc(52, 40, "Portal.Procuring Entity")),
//             T.Gb(3),
//             T.cd(T.qc(55, 42, null == e ? null : e.procuringEntity)),
//             T.Gb(4),
//             T.cd(T.qc(59, 44, "Portal.Address")),
//             T.Gb(2),
//             T.xc("ngIf", null == e ? null : e.address),
//             T.Gb(1),
//             T.xc("ngIf", !(null != e && e.address));
//         }
//       }
//       function Le(e, c) {
//         if ((1 & e && (T.cc(0, "td", 41), T.bd(1), T.bc()), 2 & e)) {
//           const e = T.oc().ngIf;
//           T.Gb(1), T.cd(null == e ? null : e.description);
//         }
//       }
//       function je(e, c) {
//         1 & e && (T.cc(0, "td", 41), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e && (T.Gb(1), T.cd(T.qc(2, 1, "Portal.Not Available")));
//       }
//       function De(e, c) {
//         if (
//           (1 & e && (T.cc(0, "td", 41), T.bd(1), T.pc(2, "date"), T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc().ngIf;
//           T.Gb(1),
//             T.cd(
//               T.rc(
//                 2,
//                 1,
//                 null == e ? null : e.preBidConferenceSchedule,
//                 "medium"
//               )
//             );
//         }
//       }
//       function $e(e, c) {
//         1 & e && (T.cc(0, "td", 41), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e && (T.Gb(1), T.cd(T.qc(2, 1, "Portal.Not Applicable")));
//       }
//       function Me(e, c) {
//         if ((1 & e && (T.ac(0), T.bd(1), T.pc(2, "date"), T.Zb()), 2 & e)) {
//           const e = T.oc(2).ngIf;
//           T.Gb(1),
//             T.dd(
//               " -",
//               T.rc(
//                 2,
//                 1,
//                 null == e ? null : e.siteVisitScheduleEndDate,
//                 "medium"
//               ),
//               " "
//             );
//         }
//       }
//       function Be(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "td", 41),
//             T.bd(1),
//             T.pc(2, "date"),
//             T.Zc(3, Me, 3, 4, "ng-container", 4),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc().ngIf;
//           T.Gb(1),
//             T.dd(
//               " ",
//               T.rc(
//                 2,
//                 2,
//                 null == e ? null : e.siteVisitScheduleStartDate,
//                 "medium"
//               ),
//               " "
//             ),
//             T.Gb(2),
//             T.xc("ngIf", null == e ? null : e.siteVisitScheduleEndDate);
//         }
//       }
//       function Ee(e, c) {
//         1 & e && (T.cc(0, "td", 41), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e && (T.Gb(1), T.cd(T.qc(2, 1, "Portal.Not Applicable")));
//       }
//       function Ne(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "table", 39),
//             T.cc(1, "tr", 21),
//             T.cc(2, "td", 40),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc(),
//             T.cc(5, "td", 41),
//             T.bd(6),
//             T.bc(),
//             T.bc(),
//             T.cc(7, "tr", 21),
//             T.cc(8, "td", 40),
//             T.bd(9),
//             T.pc(10, "translate"),
//             T.bc(),
//             T.Zc(11, Le, 2, 1, "td", 47),
//             T.Zc(12, je, 3, 3, "td", 47),
//             T.bc(),
//             T.cc(13, "tr", 21),
//             T.cc(14, "td", 40),
//             T.bd(15),
//             T.pc(16, "translate"),
//             T.bc(),
//             T.cc(17, "td", 41),
//             T.bd(18),
//             T.bc(),
//             T.bc(),
//             T.cc(19, "tr", 21),
//             T.cc(20, "td", 40),
//             T.bd(21),
//             T.pc(22, "translate"),
//             T.bc(),
//             T.cc(23, "td", 41),
//             T.bd(24),
//             T.pc(25, "date"),
//             T.bc(),
//             T.bc(),
//             T.cc(26, "tr", 21),
//             T.cc(27, "td", 40),
//             T.bd(28),
//             T.pc(29, "translate"),
//             T.bc(),
//             T.Zc(30, De, 3, 4, "td", 47),
//             T.Zc(31, $e, 3, 3, "td", 47),
//             T.bc(),
//             T.cc(32, "tr", 21),
//             T.cc(33, "td", 40),
//             T.bd(34),
//             T.pc(35, "translate"),
//             T.bc(),
//             T.Zc(36, Be, 4, 5, "td", 47),
//             T.Zc(37, Ee, 3, 3, "td", 47),
//             T.bc(),
//             T.cc(38, "tr", 21),
//             T.cc(39, "td", 40),
//             T.bd(40),
//             T.pc(41, "translate"),
//             T.bc(),
//             T.cc(42, "td", 41),
//             T.bd(43),
//             T.pc(44, "date"),
//             T.bc(),
//             T.bc(),
//             T.cc(45, "tr"),
//             T.cc(46, "td", 40),
//             T.bd(47),
//             T.pc(48, "translate"),
//             T.bc(),
//             T.cc(49, "td", 41),
//             T.bd(50),
//             T.pc(51, "date"),
//             T.bc(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.ngIf;
//           T.Gb(3),
//             T.cd(T.qc(4, 19, "Portal.Object of Procurement")),
//             T.Gb(3),
//             T.cd(null == e ? null : e.objectOfProcurement),
//             T.Gb(3),
//             T.cd(T.qc(10, 21, "Portal.Description")),
//             T.Gb(2),
//             T.xc("ngIf", null == e ? null : e.description),
//             T.Gb(1),
//             T.xc("ngIf", !(null != e && e.description)),
//             T.Gb(3),
//             T.cd(T.qc(16, 23, "Portal.Lot Number")),
//             T.Gb(3),
//             T.cd(null == e ? null : e.lotNumber),
//             T.Gb(3),
//             T.dd(
//               " ",
//               T.qc(22, 25, "Portal.Clarification Request Deadline"),
//               " "
//             ),
//             T.Gb(3),
//             T.cd(
//               T.rc(25, 27, null == e ? null : e.clarificationDeadline, "medium")
//             ),
//             T.Gb(4),
//             T.cd(T.qc(29, 30, "Portal.Pre-Bid Conference Schedule")),
//             T.Gb(2),
//             T.xc("ngIf", null == e ? null : e.preBidConferenceSchedule),
//             T.Gb(1),
//             T.xc("ngIf", !(null != e && e.preBidConferenceSchedule)),
//             T.Gb(3),
//             T.cd(T.qc(35, 32, "Portal.Site Visit Schedule")),
//             T.Gb(2),
//             T.xc("ngIf", null == e ? null : e.siteVisitScheduleStartDate),
//             T.Gb(1),
//             T.xc("ngIf", !(null != e && e.siteVisitScheduleStartDate)),
//             T.Gb(3),
//             T.cd(T.qc(41, 34, "Portal.Bid Submission Deadline")),
//             T.Gb(3),
//             T.cd(
//               T.rc(44, 36, null == e ? null : e.submissionDeadline, "medium")
//             ),
//             T.Gb(4),
//             T.cd(T.qc(48, 39, "Portal.Bid Opening Schedule")),
//             T.Gb(3),
//             T.cd(T.rc(51, 41, null == e ? null : e.openingSchedule, "medium"));
//         }
//       }
//       function Ae(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.cc(1, "div", 53),
//             T.cc(2, "div", 54),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc(),
//             T.cc(5, "div", 55),
//             T.bd(6),
//             T.bc(),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(3),
//             T.dd(" ", T.qc(4, 2, null == e ? null : e.attribute), " "),
//             T.Gb(3),
//             T.dd(
//               " ",
//               null == e || null == e.value ? null : e.value.values,
//               " "
//             );
//         }
//       }
//       function Qe(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "table", 39),
//             T.cc(1, "tr", 21),
//             T.cc(2, "td", 40),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc(),
//             T.cc(5, "td", 41),
//             T.Zc(6, Ae, 7, 4, "ng-container", 45),
//             T.bc(),
//             T.bc(),
//             T.cc(7, "tr"),
//             T.cc(8, "td", 40),
//             T.bd(9),
//             T.pc(10, "translate"),
//             T.bc(),
//             T.cc(11, "td", 41),
//             T.bd(12),
//             T.pc(13, "locale"),
//             T.bc(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.ngIf,
//             t = T.oc(2);
//           T.Gb(3),
//             T.cd(T.qc(4, 5, "Portal.Funding Source")),
//             T.Gb(3),
//             T.xc("ngForOf", null == e ? null : e.sourceOfFund)(
//               "ngForTrackBy",
//               t.trackByFn
//             ),
//             T.Gb(3),
//             T.cd(T.qc(10, 7, "Portal.Governing Laws")),
//             T.Gb(3),
//             T.cd(
//               T.qc(
//                 13,
//                 9,
//                 null == e || null == e.governingRule
//                   ? null
//                   : e.governingRule.name
//               )
//             );
//         }
//       }
//       function Re(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "td", 41),
//             T.bd(1),
//             T.pc(2, "number"),
//             T.pc(3, "async"),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc().ngIf,
//             c = T.oc(2);
//           var t;
//           T.Gb(1),
//             T.ed(
//               " ",
//               T.qc(2, 2, null == e ? null : e.participationFee),
//               " ",
//               null == (t = T.qc(3, 4, c.selectedTender$)) ||
//                 null == t.lotInformation
//                 ? null
//                 : t.lotInformation.bidCurrency,
//               " "
//             );
//         }
//       }
//       function We(e, c) {
//         1 & e && (T.cc(0, "td", 41), T.bd(1, " Free of Charge "), T.bc());
//       }
//       function Ve(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "tr"),
//             T.cc(1, "td"),
//             T.bd(2),
//             T.bc(),
//             T.cc(3, "td"),
//             T.Xb(4, "div", 56),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(2),
//             T.cd(e.factor),
//             T.Gb(2),
//             T.xc("innerHTML", null == e ? null : e.requirement, T.Pc);
//         }
//       }
//       function Xe(e, c) {
//         if (
//           (1 & e && (T.cc(0, "td", 41), T.bd(1), T.pc(2, "number"), T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc().ngIf;
//           T.Gb(1),
//             T.ed(
//               " ",
//               T.qc(2, 2, null == e ? null : e.bidSecurityAmount.amount),
//               " ",
//               null == e ? null : e.bidSecurityAmount.currency,
//               " "
//             );
//         }
//       }
//       function Ue(e, c) {
//         1 & e && (T.cc(0, "td", 41), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e &&
//             (T.Gb(1), T.dd(" ", T.qc(2, 1, "Portal.Not Applicable"), " "));
//       }
//       function He(e, c) {
//         if (
//           (1 & e && (T.ac(0), T.bd(1), T.pc(2, "translate"), T.Zb()), 2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(1), T.dd(" ", T.qc(2, 1, e), ", ");
//         }
//       }
//       function Je(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "tr"),
//             T.cc(1, "td", 57),
//             T.bd(2),
//             T.bc(),
//             T.cc(3, "td", 41),
//             T.Zc(4, He, 3, 3, "ng-container", 45),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf,
//             c = T.oc(2);
//           T.Gb(2),
//             T.cd("Bid Security Form For SME"),
//             T.Gb(2),
//             T.xc("ngForOf", null == e ? null : e.bidSecurityFormForSMEBidders)(
//               "ngForTrackBy",
//               c.trackByFn
//             );
//         }
//       }
//       function Ke(e, c) {
//         if (
//           (1 & e && (T.ac(0), T.bd(1), T.pc(2, "translate"), T.Zb()), 2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(1), T.dd(" ", T.qc(2, 1, e), ", ");
//         }
//       }
//       function _e(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "tr"),
//             T.cc(1, "td", 57),
//             T.bd(2),
//             T.bc(),
//             T.cc(3, "td", 41),
//             T.Zc(4, Ke, 3, 3, "ng-container", 45),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf,
//             c = T.oc(2);
//           T.Gb(2),
//             T.dd(" ", "Bid Security Form For Foreign Bidders", " "),
//             T.Gb(2),
//             T.xc(
//               "ngForOf",
//               null == e ? null : e.bidSecurityFormForLocalBidders
//             )("ngForTrackBy", c.trackByFn);
//         }
//       }
//       function Ye(e, c) {
//         if (
//           (1 & e && (T.ac(0), T.bd(1), T.pc(2, "translate"), T.Zb()), 2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(1), T.dd(" ", T.qc(2, 1, e), ", ");
//         }
//       }
//       function ec(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "tr"),
//             T.cc(1, "td", 57),
//             T.bd(2),
//             T.bc(),
//             T.cc(3, "td", 41),
//             T.Zc(4, Ye, 3, 3, "ng-container", 45),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2).ngIf,
//             c = T.oc(2);
//           T.Gb(2),
//             T.cd("Bid Security Form For Local Bidders"),
//             T.Gb(2),
//             T.xc(
//               "ngForOf",
//               null == e ? null : e.bidSecurityFormForForeignBidders
//             )("ngForTrackBy", c.trackByFn);
//         }
//       }
//       function cc(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.Zc(1, Je, 5, 3, "tr", 4),
//             T.Zc(2, _e, 5, 3, "tr", 4),
//             T.Zc(3, ec, 5, 3, "tr", 4),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.oc().ngIf;
//           T.Gb(1),
//             T.xc("ngIf", null == e ? null : e.bidSecurityFormForSMEBidders),
//             T.Gb(1),
//             T.xc("ngIf", null == e ? null : e.bidSecurityFormForLocalBidders),
//             T.Gb(1),
//             T.xc("ngIf", null == e ? null : e.bidSecurityFormForForeignBidders);
//         }
//       }
//       function tc(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "table", 39),
//             T.cc(1, "tr", 21),
//             T.cc(2, "td", 40),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc(),
//             T.Zc(5, Re, 4, 6, "td", 47),
//             T.Zc(6, We, 2, 0, "td", 47),
//             T.bc(),
//             T.cc(7, "tr", 21),
//             T.cc(8, "td", 40),
//             T.bd(9),
//             T.pc(10, "translate"),
//             T.bc(),
//             T.cc(11, "td"),
//             T.cc(12, "nz-table", 42, 43),
//             T.cc(14, "thead"),
//             T.Xb(15, "tr"),
//             T.cc(16, "tr"),
//             T.cc(17, "th"),
//             T.bd(18),
//             T.pc(19, "translate"),
//             T.bc(),
//             T.cc(20, "th"),
//             T.bd(21),
//             T.pc(22, "translate"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(23, "tbody"),
//             T.Zc(24, Ve, 5, 2, "tr", 45),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(25, "tr", 21),
//             T.cc(26, "td", 40),
//             T.bd(27),
//             T.pc(28, "translate"),
//             T.bc(),
//             T.Zc(29, Xe, 3, 4, "td", 47),
//             T.Zc(30, Ue, 3, 3, "td", 47),
//             T.bc(),
//             T.Zc(31, cc, 4, 3, "ng-container", 4),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.ngIf,
//             t = T.oc(2);
//           T.Gb(3),
//             T.cd(T.qc(4, 14, "Portal.Participation Fee")),
//             T.Gb(2),
//             T.xc(
//               "ngIf",
//               (null == e ? null : e.participationFee) &&
//                 (null == e ? null : e.participationFee) > 0
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               !(null != e && e.participationFee) ||
//                 0 === (null == e ? null : e.participationFee)
//             ),
//             T.Gb(3),
//             T.cd(T.qc(10, 16, "Portal.Eligibility Documents")),
//             T.Gb(3),
//             T.xc("nzShowPagination", !1)(
//               "nzData",
//               null == e ? null : e.eligibleDocument
//             ),
//             T.Gb(6),
//             T.cd(T.qc(19, 18, "Portal.Factor")),
//             T.Gb(3),
//             T.cd(T.qc(22, 20, "Portal.Criteria")),
//             T.Gb(3),
//             T.xc("ngForOf", null == e ? null : e.eligibleDocument)(
//               "ngForTrackBy",
//               t.trackByFn
//             ),
//             T.Gb(3),
//             T.cd(T.qc(28, 22, "Portal.Bid Security Amount")),
//             T.Gb(2),
//             T.xc(
//               "ngIf",
//               (null == e ? null : e.bidSecurityAmount.amount) &&
//                 (null == e ? null : e.bidSecurityAmount.amount) > 0
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               !(null != e && e.bidSecurityAmount.amount) ||
//                 0 === (null == e ? null : e.bidSecurityAmount.amount)
//             ),
//             T.Gb(1),
//             T.xc(
//               "ngIf",
//               (null == e ? null : e.bidSecurityAmount.amount) &&
//                 (null == e ? null : e.bidSecurityAmount.amount) > 0
//             );
//         }
//       }
//       function nc(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "table", 39),
//             T.cc(1, "tr"),
//             T.cc(2, "td", 40),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc(),
//             T.cc(5, "td", 41),
//             T.bd(6),
//             T.bc(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.ngIf;
//           T.Gb(3),
//             T.cd(T.qc(4, 2, "Portal.Terms and Conditions")),
//             T.Gb(3),
//             T.cd(null == e ? null : e.termsAndConditions);
//         }
//       }
//       function ic(e, c) {
//         if ((1 & e && T.Xb(0, "nz-alert", 10), 2 & e)) {
//           T.oc();
//           const e = T.Mc(49);
//           T.xc("nzMessage", e);
//         }
//       }
//       function rc(e, c) {
//         1 & e &&
//           (T.cc(0, "span", 58),
//           T.bd(
//             1,
//             " Please complete your supplier registration in-order to register on available tenders. "
//           ),
//           T.cc(2, "a", 59),
//           T.bd(3, " Click here to register "),
//           T.bc(),
//           T.bc());
//       }
//       function oc(e, c) {
//         1 & e &&
//           (T.cc(0, "p"),
//           T.bd(
//             1,
//             " You are not allowed to register to this tender because you are debarred by the public authority please for more information goto your company list and click on the company and see the reason for your debarment "
//           ),
//           T.bc());
//       }
//       function ac(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.Xb(1, "nz-alert", 61),
//             T.Zc(2, oc, 2, 0, "ng-template", null, 62, T.ad),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.Mc(3);
//           T.Gb(1), T.xc("nzMessage", e);
//         }
//       }
//       function lc(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.cc(0, "button", 66),
//             T.kc("click", function () {
//               T.Oc(e);
//               const t = c.ngIf;
//               return T.oc(5).registerToBid(
//                 null == t ? null : t.packageId,
//                 null == t ? null : t.lotId,
//                 null == t ? null : t.spdId,
//                 null == t ? null : t.lotInPackageId,
//                 null == t || null == t.lotInformation
//                   ? null
//                   : t.lotInformation.objectOfProcurement,
//                 null == t || null == t.lotInformation
//                   ? null
//                   : t.lotInformation.description,
//                 null == t || null == t.eligibilityRequirements
//                   ? null
//                   : t.eligibilityRequirements.participationFee,
//                 null == t || null == t.lotInformation
//                   ? null
//                   : t.lotInformation.bidCurrency,
//                 null == t || null == t.packageInformation
//                   ? null
//                   : t.packageInformation.envelopType,
//                 null == t || null == t.lotInformation
//                   ? null
//                   : t.lotInformation.openingSchedule
//               );
//             }),
//             T.pc(1, "async"),
//             T.pc(2, "async"),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc();
//         }
//         if (2 & e) {
//           const e = T.oc(5);
//           T.xc(
//             "disabled",
//             (e.currentOrganization &&
//               "Customer Organization" === e.currentOrganization.name.en) ||
//               e.payment ||
//               "active" !== T.qc(1, 3, e.currentEconomicOperator$).status
//           )("nzLoading", T.qc(2, 5, e.creating$)),
//             T.Gb(3),
//             T.dd(" ", T.qc(4, 7, "Portal.Register"), " ");
//         }
//       }
//       function sc(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.cc(0, "div", 63),
//             T.cc(1, "button", 64),
//             T.kc("click", function () {
//               T.Oc(e);
//               const c = T.oc(3).ngIf;
//               return T.oc().bookmark(null == c ? null : c.lotInPackageId);
//             }),
//             T.pc(2, "async"),
//             T.bd(3),
//             T.pc(4, "translate"),
//             T.bc(),
//             T.Zc(5, lc, 5, 9, "button", 65),
//             T.pc(6, "async"),
//             T.bc();
//         }
//         if (2 & e) {
//           const e = T.oc(4);
//           T.Gb(1),
//             T.xc(
//               "disabled",
//               e.currentOrganization &&
//                 "Customer Organization" === e.currentOrganization.name.en
//             )("nzLoading", T.qc(2, 4, e.creatingBookmark$)),
//             T.Gb(2),
//             T.dd(" ", T.qc(4, 6, "Portal.Bookmark"), " "),
//             T.Gb(2),
//             T.xc("ngIf", T.qc(6, 8, e.selectedTender$));
//         }
//       }
//       function dc(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.Zc(1, ac, 4, 1, "ng-container", 13),
//             T.Zc(2, sc, 7, 10, "ng-template", null, 60, T.ad),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = c.ngIf,
//             t = T.Mc(3);
//           T.Gb(1),
//             T.xc("ngIf", "active" !== (null == e ? null : e.status))(
//               "ngIfElse",
//               t
//             );
//         }
//       }
//       function bc(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.Zc(1, dc, 4, 2, "ng-container", 4),
//             T.pc(2, "async"),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.oc(2);
//           T.Gb(1), T.xc("ngIf", T.qc(2, 1, e.currentEconomicOperator$));
//         }
//       }
//       function uc(e, c) {
//         1 & e &&
//           (T.cc(0, "p"),
//           T.bd(1, "The selected bid submission deadline has passed!"),
//           T.bc());
//       }
//       function pc(e, c) {
//         if (
//           (1 & e &&
//             (T.Xb(0, "nz-alert", 10),
//             T.Zc(1, uc, 2, 0, "ng-template", null, 67, T.ad)),
//           2 & e)
//         ) {
//           const e = T.Mc(2);
//           T.xc("nzMessage", e);
//         }
//       }
//       function gc(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.cc(1, "div"),
//             T.cc(2, "div", 30),
//             T.cc(3, "div", 31),
//             T.cc(4, "p", 32),
//             T.bd(5),
//             T.pc(6, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(7, "div", 33),
//             T.cc(8, "div", 34),
//             T.Zc(9, Ze, 62, 46, "table", 35),
//             T.pc(10, "async"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(11, "div", 30),
//             T.cc(12, "div", 31),
//             T.cc(13, "p", 32),
//             T.bd(14),
//             T.pc(15, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(16, "div", 33),
//             T.cc(17, "div", 34),
//             T.Zc(18, Ne, 52, 44, "table", 35),
//             T.pc(19, "async"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(20, "div", 30),
//             T.cc(21, "div", 31),
//             T.cc(22, "p", 32),
//             T.bd(23),
//             T.pc(24, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(25, "div", 33),
//             T.cc(26, "div", 34),
//             T.Zc(27, Qe, 14, 11, "table", 35),
//             T.pc(28, "async"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(29, "div", 30),
//             T.cc(30, "div", 31),
//             T.cc(31, "p", 32),
//             T.bd(32),
//             T.pc(33, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(34, "div", 33),
//             T.cc(35, "div", 34),
//             T.Zc(36, tc, 32, 24, "table", 35),
//             T.pc(37, "async"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(38, "div", 30),
//             T.cc(39, "div", 31),
//             T.cc(40, "p", 32),
//             T.bd(41),
//             T.pc(42, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(43, "div", 33),
//             T.cc(44, "div", 34),
//             T.Zc(45, nc, 7, 4, "table", 35),
//             T.pc(46, "async"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.Zc(47, ic, 1, 1, "nz-alert", 36),
//             T.Zc(48, rc, 4, 0, "ng-template", null, 37, T.ad),
//             T.Zc(50, bc, 3, 3, "ng-container", 13),
//             T.Zc(51, pc, 3, 1, "ng-template", null, 38, T.ad),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.Mc(52),
//             c = T.oc();
//           var t;
//           const a =
//             null == (t = T.qc(10, 15, c.selectedTender$))
//               ? null
//               : t.packageInformation;
//           var n;
//           const l =
//             null == (n = T.qc(19, 19, c.selectedTender$))
//               ? null
//               : n.lotInformation;
//           var i;
//           const s =
//             null == (i = T.qc(28, 23, c.selectedTender$))
//               ? null
//               : i.lotInformation;
//           var r;
//           const d =
//             null == (r = T.qc(37, 27, c.selectedTender$))
//               ? null
//               : r.eligibilityRequirements;
//           var o;
//           const b =
//             null == (o = T.qc(46, 31, c.selectedTender$))
//               ? null
//               : o.termsAndConditions;
//           T.Gb(5),
//             T.cd(T.qc(6, 13, "Portal.Package Information")),
//             T.Gb(4),
//             T.xc("ngIf", a),
//             T.Gb(5),
//             T.cd(T.qc(15, 17, "Portal.Lot Information")),
//             T.Gb(4),
//             T.xc("ngIf", l),
//             T.Gb(5),
//             T.cd(T.qc(24, 21, "Portal.Source of Fund")),
//             T.Gb(4),
//             T.xc("ngIf", s),
//             T.Gb(5),
//             T.cd(T.qc(33, 25, "Portal.Eligibility Requirements")),
//             T.Gb(4),
//             T.xc("ngIf", d),
//             T.Gb(5),
//             T.cd(T.qc(42, 29, "Portal.Notice")),
//             T.Gb(4),
//             T.xc("ngIf", b),
//             T.Gb(2),
//             T.xc(
//               "ngIf",
//               c.currentOrganization &&
//                 "Customer Organization" === c.currentOrganization.name.en
//             ),
//             T.Gb(3),
//             T.xc("ngIf", c.isSubmittable)("ngIfElse", e);
//         }
//       }
//       function fc(e, c) {
//         if ((1 & e && (T.bd(0), T.pc(1, "async")), 2 & e)) {
//           const e = T.oc();
//           var t;
//           T.dd(
//             " ",
//             null == (t = T.qc(1, 1, e.selectedTender$)) ||
//               null == t.lotInformation
//               ? null
//               : t.lotInformation.objectOfProcurement,
//             " "
//           );
//         }
//       }
//       let hc = (() => {
//         class e extends S.d {
//           constructor(e, c, t, n, i, r, o, a, l, s) {
//             super(),
//               (this.activatedRouter = e),
//               (this.logger = c),
//               (this.router = t),
//               (this.cd = n),
//               (this.facade = i),
//               (this.location = r),
//               (this.store = o),
//               (this.headerFacade = a),
//               (this.notification = l),
//               (this.message = s),
//               (this.selectedLots = new T.o()),
//               (this.isCollapsed = !1),
//               (this.isSubmittable = !1),
//               (this.selectedTender$ = this.facade.selectedTender$),
//               (this.selectedLot$ = this.facade.selectedLot$),
//               (this.creating$ = this.facade.creating$),
//               (this.creatingBookmark$ = this.facade.creatingBookmark$),
//               (this.supplier$ = this.facade.supplier$),
//               (this.items$ = this.facade.items$),
//               (this.itemsLoading$ = this.facade.itemsLoading$),
//               (this.paymentInitiating$ = this.facade.paymentInitiating$),
//               (this.payed$ = this.facade.payed$),
//               (this.currentEconomicOperator$ =
//                 this.facade.currentEconomicOperator$),
//               (this.collectionQuery = {
//                 skip: 0,
//                 top: 10,
//                 orderBy: [],
//               }),
//               (this.data = void 0),
//               (this.payment = !1),
//               (this.isFullscreen = !1),
//               (this.selectedHelper = "none"),
//               (this.helper = de.a),
//               (this.viewDetail = !1),
//               (this.checked = !1),
//               (this.indeterminate = !1),
//               (this.listOfCurrentPageData = []),
//               (this.listOfData = []),
//               (this.setOfCheckedId = []),
//               this.store
//                 .select(S.b.currentOrganization)
//                 .pipe(Object(se.a)(this.ngUnsubscribe))
//                 .subscribe((e) => {
//                   (this.currentOrganization = e),
//                     this.currentOrganization &&
//                       this.facade.myCompany(this.currentOrganization.id);
//                 });
//           }
//           onItemChecked(e, c) {
//             this.updateCheckedSet(e, c), this.refreshCheckedStatus();
//           }
//           updateCheckedSet(e, c) {
//             c
//               ? (this.setOfCheckedId.push(e),
//                 this.logger.log("the ids are :", this.setOfCheckedId))
//               : (this.setOfCheckedId = this.setOfCheckedId.filter(
//                   (c) => c !== e
//                 ));
//           }
//           refreshCheckedStatus() {
//             (this.checked = this.listOfCurrentPageData.every((e) =>
//               this.setOfCheckedId.includes(e.id)
//             )),
//               (this.indeterminate =
//                 this.listOfCurrentPageData.some((e) =>
//                   this.setOfCheckedId.includes(e.id)
//                 ) && !this.checked);
//           }
//           onCurrentPageDataChange(e) {
//             (this.listOfCurrentPageData = e), this.refreshCheckedStatus();
//           }
//           ngOnInit() {
//             (this.collectionQuery = {
//               skip: 0,
//               top: 10,
//             }),
//               this.facade.getCurrentEconomicOperator(),
//               this.facade.listTenders(this.collectionQuery, "all"),
//               this.activatedRouter.paramMap
//                 .pipe(Object(se.a)(this.ngUnsubscribe))
//                 .subscribe((e) => {
//                   this.facade.detailTender(e.get("id")),
//                     (this.tenderId = e.get("id")),
//                     (this.isSubmittable = "open" === e.get("status"));
//                 });
//           }
//           bookmark(e) {
//             this.facade.registerBookmark({
//               lotInPackageId: e,
//             });
//           }
//           registerToBid(e, c, t, n, i, r, o, a, l, s) {
//             var d, b;
//             (this.data = {
//               procurementPackageId: e,
//               envelopType: l,
//               registrationDetail: [
//                 {
//                   procurementLotId: c,
//                   openingSchedule: s,
//                   spdId: t,
//                   lotInPackageId: n,
//                   lotName: i,
//                   lotDescription: r,
//                   serviceFee: o,
//                   currency: a,
//                 },
//               ],
//               organizationId: this.currentOrganization.id,
//             }),
//               "Customer Organization" !==
//               (null ===
//                 (b =
//                   null ===
//                     (d = JSON.parse(
//                       localStorage.getItem("selectedOrganization")
//                     )) || void 0 === d
//                     ? void 0
//                     : d.name) || void 0 === b
//                 ? void 0
//                 : b.en)
//                 ? this.facade.registerToBid(this.data)
//                 : this.message.create(
//                     "error",
//                     "You have to regsiter your organization first!"
//                   );
//           }
//           onHelperChange(e) {
//             this.selectedHelper = e;
//           }
//           onCloseHelper() {
//             this.selectedHelper = "none";
//           }
//           onReturnBack() {
//             this.router.navigate(["tendering"]);
//           }
//           onHeaderChange(e) {
//             (this.headerChanged = e),
//               this.cd.markForCheck(),
//               this.cd.detectChanges();
//           }
//           backClicked() {
//             this.location.back();
//           }
//           trackByFn(e, c) {
//             return c && c.id ? c.id : e;
//           }
//         }
//         return (
//           (e.ɵfac = function (c) {
//             return new (c || e)(
//               T.Wb(v.a),
//               T.Wb(S.o),
//               T.Wb(v.h),
//               T.Wb(T.i),
//               T.Wb(y.a),
//               T.Wb(L.n),
//               T.Wb(r.h),
//               T.Wb(S.j),
//               T.Wb(S.q),
//               T.Wb(be.e)
//             );
//           }),
//           (e.ɵcmp = T.Qb({
//             type: e,
//             selectors: [["egp-portal-detail"]],
//             outputs: {
//               selectedLots: "selectedLots",
//             },
//             features: [T.Db],
//             decls: 20,
//             vars: 9,
//             consts: [
//               [1, "flex-1", "p-3"],
//               [1, "container", "mx-auto", "flex"],
//               [1, "w-1/4", "mr-3"],
//               [
//                 1,
//                 "flex",
//                 "flex-col",
//                 "flex-grow",
//                 "min-h-screen",
//                 3,
//                 "nzTitle",
//               ],
//               [4, "ngIf"],
//               ["elseEmpty", ""],
//               ["relatedTitleBar", ""],
//               [
//                 1,
//                 "flex",
//                 "flex-1",
//                 "flex-col",
//                 "flex-grow",
//                 "min-h-screen",
//                 3,
//                 "nzTitle",
//               ],
//               [1, "z-0", "flex-1"],
//               [1, "block", "mb-3"],
//               ["nzType", "info", 1, "my-2", 3, "nzMessage"],
//               ["alertMessage", ""],
//               ["mainTitleBar", ""],
//               [4, "ngIf", "ngIfElse"],
//               [1, "flex", "flex-col", "flex-1"],
//               ["class", "block mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"],
//               [
//                 "class",
//                 "mb-2 text-xs text-gray-600",
//                 4,
//                 "ngFor",
//                 "ngForOf",
//                 "ngForTrackBy",
//               ],
//               [1, "mb-2", "text-xs", "text-gray-600"],
//               [
//                 1,
//                 "flex",
//                 "px-2",
//                 "py-2",
//                 "text-xs",
//                 "text-gray-600",
//                 "bg-gray-100",
//                 "border",
//                 "border-b-0",
//                 "border-gray-400",
//                 "-t",
//               ],
//               [1, "font-semibold"],
//               [1, "w-full", "mb-0", "bg-white", "border", "border-gray-400"],
//               [
//                 1,
//                 "border",
//                 "border-t-0",
//                 "border-l-0",
//                 "border-r-0",
//                 "border-dashed",
//               ],
//               [1, "w-1/3", "p-2", "font-semibold", "border-r"],
//               [1, "p-2"],
//               [
//                 1,
//                 "flex",
//                 "justify-end",
//                 "p-3",
//                 "text-xs",
//                 "text-gray-600",
//                 "bg-gray-100",
//                 "border",
//                 "border-t-0",
//                 "border-gray-400",
//                 "-b",
//               ],
//               [1, "flex", "justify-end"],
//               [
//                 "nzType",
//                 "default",
//                 "nzSize",
//                 "small",
//                 "nz-button",
//                 "",
//                 3,
//                 "routerLink",
//               ],
//               [3, "nzNotFoundContent"],
//               ["contentTpl", ""],
//               [1, "text-gray-700"],
//               [
//                 1,
//                 "px-3",
//                 "pt-3",
//                 "mb-3",
//                 "bg-white",
//                 "border",
//                 "border-gray-400",
//               ],
//               [1, "flex", "justify-between"],
//               [1, "font-semibold", "text-gray-800", "text-base"],
//               [1, "pt-2", "-mx-3", "text-gray-600"],
//               [1, "border-t", "border-b"],
//               ["class", "w-full mb-0", 4, "ngIf"],
//               ["nzType", "info", "class", "my-2", 3, "nzMessage", 4, "ngIf"],
//               ["alertMessageRegistration", ""],
//               ["closed", ""],
//               [1, "w-full", "mb-0"],
//               [1, "w-1/4", "p-3", "font-semibold", "bg-gray-100", "border-r"],
//               [1, "p-3"],
//               [
//                 "nzBordered",
//                 "false",
//                 "nzSize",
//                 "small",
//                 3,
//                 "nzShowPagination",
//                 "nzData",
//               ],
//               ["basicTable", ""],
//               ["nzAlign", "center"],
//               [4, "ngFor", "ngForOf", "ngForTrackBy"],
//               ["class", "p-3 flex justify-between space-x-2", 4, "ngIf"],
//               ["class", "p-3", 4, "ngIf"],
//               [1, "p-3", "flex", "justify-between", "space-x-2"],
//               [1, "border-l-2", "border-r-2", "px-2", "w-full"],
//               ["class", "p-2 flex space-x-2", 4, "ngIf"],
//               [1, "border-l-2", "border-r-2", "px-2"],
//               [1, "p-2", "flex", "space-x-2"],
//               [
//                 1,
//                 "flex",
//                 "justify-between",
//                 "border-t",
//                 "border-b",
//                 "border-dashed",
//               ],
//               [
//                 1,
//                 "w-1/3",
//                 "p-2",
//                 "font-semibold",
//                 "text-gray-600",
//                 "bg-gray-100",
//                 "border-r",
//               ],
//               [1, "w-2/3", "p-2", "text-gray-700", "bg-white"],
//               [1, "wraper", "ml-3", 3, "innerHTML"],
//               [
//                 1,
//                 "w-1/4",
//                 "p-3",
//                 "font-semibold",
//                 "bg-gray-100",
//                 "border-b",
//                 "border-r",
//               ],
//               [1, "text-base"],
//               [
//                 "href",
//                 "https://egp.ppa.gov.et/egp/my/supplier-registration/new",
//                 1,
//                 "text-primary-800",
//                 "font-semibold",
//                 "ml-1",
//               ],
//               ["elseTemp", ""],
//               ["nzType", "error", 1, "my-2", 3, "nzMessage"],
//               ["alertMessageDebarment", ""],
//               [
//                 1,
//                 "flex",
//                 "justify-end",
//                 "px-6",
//                 "py-4",
//                 "mt-2",
//                 "mb-6",
//                 "text-gray-600",
//                 "bg-gray-200",
//                 "border",
//                 "border-gray-400",
//               ],
//               [
//                 "nz-button",
//                 "",
//                 "nzType",
//                 "primary",
//                 1,
//                 "mr-3",
//                 3,
//                 "disabled",
//                 "nzLoading",
//                 "click",
//               ],
//               [
//                 "nzType",
//                 "primary",
//                 "nz-button",
//                 "",
//                 3,
//                 "disabled",
//                 "nzLoading",
//                 "click",
//                 4,
//                 "ngIf",
//               ],
//               [
//                 "nzType",
//                 "primary",
//                 "nz-button",
//                 "",
//                 3,
//                 "disabled",
//                 "nzLoading",
//                 "click",
//               ],
//               ["closedMessage", ""],
//             ],
//             template: function (e, c) {
//               if (
//                 (1 & e &&
//                   (T.cc(0, "div", 0),
//                   T.cc(1, "div", 1),
//                   T.cc(2, "div", 2),
//                   T.cc(3, "nz-card", 3),
//                   T.Zc(4, he, 2, 2, "ng-container", 4),
//                   T.pc(5, "async"),
//                   T.Zc(6, ye, 3, 1, "ng-template", null, 5, T.ad),
//                   T.bc(),
//                   T.Zc(8, xe, 2, 3, "ng-template", null, 6, T.ad),
//                   T.bc(),
//                   T.cc(10, "nz-card", 7),
//                   T.cc(11, "div", 8),
//                   T.cc(12, "div", 9),
//                   T.Xb(13, "nz-alert", 10),
//                   T.Zc(14, ze, 4, 0, "ng-template", null, 11, T.ad),
//                   T.Zc(16, gc, 53, 33, "ng-container", 4),
//                   T.pc(17, "async"),
//                   T.bc(),
//                   T.bc(),
//                   T.bc(),
//                   T.Zc(18, fc, 2, 3, "ng-template", null, 12, T.ad),
//                   T.bc(),
//                   T.bc()),
//                 2 & e)
//               ) {
//                 const e = T.Mc(9),
//                   t = T.Mc(15),
//                   n = T.Mc(19);
//                 T.Gb(3),
//                   T.xc("nzTitle", e),
//                   T.Gb(1),
//                   T.xc("ngIf", T.qc(5, 5, c.items$)),
//                   T.Gb(6),
//                   T.xc("nzTitle", n),
//                   T.Gb(3),
//                   T.xc("nzMessage", t),
//                   T.Gb(3),
//                   T.xc("ngIf", T.qc(17, 7, c.selectedTender$));
//               }
//             },
//             directives: [
//               F.a,
//               L.t,
//               N.a,
//               L.s,
//               M.q,
//               M.f,
//               A.a,
//               Q.a,
//               D.a,
//               v.i,
//               B.b,
//               M.g,
//               M.p,
//               M.n,
//               M.a,
//               M.k,
//             ],
//             pipes: [L.b, L.f, R.e, W.a, L.g],
//             styles: [
//               ".ant-menu[_ngcontent-%COMP%]{background-color:#f8fcfc}.min-h[_ngcontent-%COMP%]{min-height:400px}.fl-rt[_ngcontent-%COMP%]{float:right;justify-content:right}.hide[_ngcontent-%COMP%]{display:none}.row[_ngcontent-%COMP%]:hover + .hide[_ngcontent-%COMP%]{display:block}",
//             ],
//           })),
//           e
//         );
//       })();
//       var mc = t("ytxn");
//       const yc = function () {
//           return ["../all"];
//         },
//         xc = function () {
//           return ["../publishedToday"];
//         },
//         zc = function () {
//           return ["../closingToday"];
//         },
//         kc = function () {
//           return ["../openningToday"];
//         },
//         Gc = function () {
//           return ["../report"];
//         },
//         vc = function () {
//           return ["../CanceledTender"];
//         };
//       function Cc(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "div", 43),
//             T.cc(1, "div", 44),
//             T.cc(2, "div", 45),
//             T.cc(3, "p", 46),
//             T.bd(4),
//             T.pc(5, "number"),
//             T.bc(),
//             T.cc(6, "p", 47),
//             T.bd(7),
//             T.pc(8, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(9, "div", 48),
//             T.cc(10, "p", 46),
//             T.bd(11),
//             T.pc(12, "number"),
//             T.bc(),
//             T.cc(13, "p", 47),
//             T.bd(14),
//             T.pc(15, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(16, "div", 49),
//             T.cc(17, "p", 46),
//             T.bd(18),
//             T.pc(19, "number"),
//             T.bc(),
//             T.cc(20, "p", 47),
//             T.bd(21),
//             T.pc(22, "translate"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(23, "div", 50),
//             T.cc(24, "div", 45),
//             T.cc(25, "p", 46),
//             T.bd(26),
//             T.pc(27, "number"),
//             T.bc(),
//             T.cc(28, "p", 47),
//             T.bd(29),
//             T.pc(30, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(31, "div", 51),
//             T.cc(32, "p", 46),
//             T.bd(33),
//             T.pc(34, "number"),
//             T.bc(),
//             T.cc(35, "p", 47),
//             T.bd(36),
//             T.pc(37, "translate"),
//             T.bc(),
//             T.bc(),
//             T.cc(38, "div", 49),
//             T.cc(39, "p", 46),
//             T.bd(40),
//             T.pc(41, "number"),
//             T.bc(),
//             T.cc(42, "p", 47),
//             T.bd(43),
//             T.pc(44, "translate"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.ngIf;
//           T.Gb(2),
//             T.xc("routerLinkActive", "font-semibold text-primary-400")(
//               "routerLink",
//               T.Cc(48, yc)
//             ),
//             T.Gb(2),
//             T.cd(T.qc(5, 24, e.totalActive)),
//             T.Gb(3),
//             T.cd(T.qc(8, 26, "Portal.Total Active Tenders")),
//             T.Gb(2),
//             T.xc("routerLinkActive", "font-semibold text-primary-400")(
//               "routerLink",
//               T.Cc(49, xc)
//             ),
//             T.Gb(2),
//             T.cd(T.qc(12, 28, e.publishedToday)),
//             T.Gb(3),
//             T.cd(T.qc(15, 30, "Portal.Tenders Published Today")),
//             T.Gb(2),
//             T.xc("routerLinkActive", "font-semibold text-primary-400")(
//               "routerLink",
//               T.Cc(50, zc)
//             ),
//             T.Gb(2),
//             T.cd(T.qc(19, 32, e.closingToday)),
//             T.Gb(3),
//             T.cd(T.qc(22, 34, "Portal.Tenders Closing Today")),
//             T.Gb(3),
//             T.xc("routerLinkActive", "font-semibold text-primary-400")(
//               "routerLink",
//               T.Cc(51, kc)
//             ),
//             T.Gb(2),
//             T.cd(T.qc(27, 36, e.openingToday)),
//             T.Gb(3),
//             T.cd(T.qc(30, 38, "Portal.Tenders Opening Today")),
//             T.Gb(2),
//             T.xc("routerLinkActive", "font-semibold text-primary-400")(
//               "routerLink",
//               T.Cc(52, Gc)
//             ),
//             T.Gb(2),
//             T.cd(T.qc(34, 40, e.totalTendersPublished)),
//             T.Gb(3),
//             T.cd(T.qc(37, 42, "Portal.Total Tenders Published")),
//             T.Gb(2),
//             T.xc("routerLinkActive", "font-semibold text-primary-400")(
//               "routerLink",
//               T.Cc(53, vc)
//             ),
//             T.Gb(2),
//             T.cd(T.qc(41, 44, e.canceledTender)),
//             T.Gb(3),
//             T.cd(T.qc(44, 46, "Portal.Tenders Cancelled"));
//         }
//       }
//       function Ic(e, c) {
//         1 & e &&
//           (T.cc(0, "p"),
//           T.bd(1, "The time zone is: "),
//           T.cc(2, "strong", 52),
//           T.bd(3, "East Africa Time (GMT+3:00)"),
//           T.bc(),
//           T.bc());
//       }
//       function Sc(e, c) {
//         1 & e && T.Xb(0, "i", 53);
//       }
//       function Tc(e, c) {
//         if (
//           (1 & e && (T.cc(0, "label", 54), T.bd(1), T.pc(2, "locale"), T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit;
//           T.xc("nzValue", null == e || null == e.name ? null : e.name.en),
//             T.Gb(1),
//             T.cd(T.qc(2, 2, null == e ? null : e.name));
//         }
//       }
//       function Oc(e, c) {
//         1 & e && (T.cc(0, "span"), T.bd(1, "Lot: "), T.bc());
//       }
//       const Fc = function (e, c, t) {
//         return [e, c, t];
//       };
//       function Pc(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "tr", 64),
//             T.cc(1, "td", 65),
//             T.ac(2),
//             T.bd(3),
//             T.Zb(),
//             T.bc(),
//             T.cc(4, "td", 66),
//             T.ac(5),
//             T.Zc(6, Oc, 2, 0, "span", 67),
//             T.bd(7),
//             T.Zb(),
//             T.bc(),
//             T.cc(8, "td", 66),
//             T.ac(9),
//             T.bd(10),
//             T.pc(11, "slice"),
//             T.Zb(),
//             T.bc(),
//             T.cc(12, "td", 66),
//             T.ac(13),
//             T.bd(14),
//             T.pc(15, "slice"),
//             T.Zb(),
//             T.bc(),
//             T.cc(16, "td", 66),
//             T.ac(17),
//             T.bd(18),
//             T.pc(19, "slice"),
//             T.Zb(),
//             T.bc(),
//             T.cc(20, "td", 66),
//             T.bd(21),
//             T.pc(22, "slice"),
//             T.bc(),
//             T.cc(23, "td", 66),
//             T.ac(24),
//             T.bd(25),
//             T.pc(26, "date"),
//             T.Zb(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit,
//             t = T.oc().index,
//             n = T.oc(2);
//           T.xc(
//             "routerLink",
//             T.Fc(
//               29,
//               Fc,
//               n.getSourceApplication(null == e ? null : e.sourceApplication),
//               "Purchasing" == (null == e ? null : e.sourceApplication)
//                 ? null == e
//                   ? null
//                   : e.sourceId
//                 : e.lotId
//                   ? e.lotId
//                   : e.id,
//               null != e && e.isSubmittable ? "open" : "closed"
//             )
//           ),
//             T.Gb(1),
//             T.xc("ngClass", n.getBorder(t)),
//             T.Gb(2),
//             T.dd(
//               " ",
//               null != e && e.procurementReferenceNo
//                 ? null == e
//                   ? null
//                   : e.procurementReferenceNo
//                 : "Not Available",
//               " "
//             ),
//             T.Gb(3),
//             T.xc("ngIf", null == e ? null : e.lotNo),
//             T.Gb(1),
//             T.dd(
//               " ",
//               null != e && e.lotNo
//                 ? null == e
//                   ? null
//                   : e.lotNo
//                 : "Not Available",
//               " "
//             ),
//             T.Gb(3),
//             T.dd(" ", T.sc(11, 10, null == e ? null : e.lotName, 0, 40), " "),
//             T.Gb(4),
//             T.dd(
//               " ",
//               T.sc(15, 14, null == e ? null : e.procuringEntity, 0, 40),
//               " "
//             ),
//             T.Gb(4),
//             T.dd(
//               " ",
//               null != e && e.procurementCategory
//                 ? T.sc(
//                     19,
//                     18,
//                     null == e ? null : e.procurementCategory,
//                     0,
//                     40
//                   ) || "" === (null == e ? null : e.procurementCategory)
//                 : "Not Available",
//               " "
//             ),
//             T.Gb(3),
//             T.dd(
//               " ",
//               null != e && e.marketPlace
//                 ? T.sc(22, 22, null == e ? null : e.marketPlace, 0, 40) ||
//                     "" === (null == e ? null : e.marketPlace)
//                 : "Not Available",
//               " "
//             ),
//             T.Gb(4),
//             T.dd(
//               " ",
//               T.rc(26, 26, null == e ? null : e.submissionDeadline, "medium"),
//               " "
//             );
//         }
//       }
//       function wc(e, c) {
//         if (
//           (1 & e && (T.ac(0, 62), T.Zc(1, Pc, 27, 33, "tr", 63), T.Zb()), 2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(1), T.xc("ngForOf", null == e ? null : e.result);
//         }
//       }
//       const qc = function () {
//         return {
//           x: "1000px",
//         };
//       };
//       function Zc(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.cc(0, "nz-table", 55, 56),
//             T.pc(2, "async"),
//             T.cc(3, "thead"),
//             T.cc(4, "tr"),
//             T.cc(5, "th", 57),
//             T.bd(6),
//             T.pc(7, "translate"),
//             T.cc(8, "nz-filter-trigger", 58),
//             T.Xb(9, "i", 53),
//             T.bc(),
//             T.bc(),
//             T.cc(10, "th", 57),
//             T.bd(11),
//             T.pc(12, "translate"),
//             T.cc(13, "nz-filter-trigger", 58),
//             T.Xb(14, "i", 53),
//             T.bc(),
//             T.bc(),
//             T.cc(15, "th", 57),
//             T.bd(16),
//             T.pc(17, "translate"),
//             T.cc(18, "nz-filter-trigger", 58),
//             T.Xb(19, "i", 53),
//             T.bc(),
//             T.bc(),
//             T.cc(20, "th", 59),
//             T.kc("nzFilterChange", function (c) {
//               return T.Oc(e), T.oc().filterByProcuringEntity(c);
//             }),
//             T.bd(21),
//             T.pc(22, "translate"),
//             T.bc(),
//             T.cc(23, "th", 59),
//             T.kc("nzFilterChange", function (c) {
//               return T.Oc(e), T.oc().filterByCategories(c);
//             }),
//             T.bd(24),
//             T.pc(25, "translate"),
//             T.bc(),
//             T.cc(26, "th", 59),
//             T.kc("nzFilterChange", function (c) {
//               return T.Oc(e), T.oc().filterByMarketApproach(c);
//             }),
//             T.bd(27),
//             T.pc(28, "translate"),
//             T.bc(),
//             T.cc(29, "th", 57),
//             T.bd(30),
//             T.pc(31, "translate"),
//             T.cc(32, "nz-filter-trigger", 58),
//             T.Xb(33, "i", 60),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.cc(34, "tbody"),
//             T.Zc(35, wc, 2, 1, "ng-container", 61),
//             T.pc(36, "async"),
//             T.bc(),
//             T.bc();
//         }
//         if (2 & e) {
//           const e = T.oc(),
//             c = T.Mc(23),
//             t = T.Mc(28),
//             n = T.Mc(33),
//             i = T.Mc(64);
//           T.xc("nzScroll", T.Cc(39, qc))("nzShowPagination", !1)(
//             "nzData",
//             T.qc(2, 21, e.items$)
//           ),
//             T.Gb(6),
//             T.dd(" ", T.qc(7, 23, "Portal.Procurement Ref No"), " "),
//             T.Gb(2),
//             T.xc("nzDropdownMenu", c),
//             T.Gb(3),
//             T.dd(" ", T.qc(12, 25, "Portal.Lot No"), " "),
//             T.Gb(2),
//             T.xc("nzDropdownMenu", t),
//             T.Gb(3),
//             T.dd(" ", T.qc(17, 27, "Portal.Procurement Title"), " "),
//             T.Gb(2),
//             T.xc("nzDropdownMenu", n),
//             T.Gb(2),
//             T.xc("nzFilters", e.procuringEntities)("nzFilterMultiple", !0),
//             T.Gb(1),
//             T.dd(" ", T.qc(22, 29, "Portal.Procuring Entity"), " "),
//             T.Gb(2),
//             T.xc("nzFilters", e.categories)("nzFilterMultiple", !0),
//             T.Gb(1),
//             T.dd(" ", T.qc(25, 31, "Portal.Procurement Category"), " "),
//             T.Gb(2),
//             T.xc("nzFilters", e.marketApproaches)("nzFilterMultiple", !0),
//             T.Gb(1),
//             T.dd(" ", T.qc(28, 33, "Portal.Market Approach"), " "),
//             T.Gb(3),
//             T.dd(" ", T.qc(31, 35, "Portal.Submission Deadline"), " "),
//             T.Gb(2),
//             T.xc("nzDropdownMenu", i),
//             T.Gb(3),
//             T.xc("ngForOf", T.qc(36, 37, e.items$));
//         }
//       }
//       function Lc(e, c) {
//         if (
//           (1 & e && (T.cc(0, "span"), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(2);
//           T.Gb(1),
//             T.dd(
//               " No ",
//               e.typeText ? e.typeText : T.qc(2, 1, "Portal.Tenders"),
//               " "
//             );
//         }
//       }
//       function jc(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "nz-empty", 68),
//             T.Zc(1, Lc, 3, 3, "ng-template", null, 69, T.ad),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.Mc(2);
//           T.xc("nzNotFoundContent", e);
//         }
//       }
//       function Dc(e, c) {
//         if (
//           (1 & e && (T.cc(0, "p", 77), T.bd(1), T.pc(2, "translate"), T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc(3);
//           T.Gb(1), T.dd(" ", T.qc(2, 1, e.typeText), " ");
//         }
//       }
//       function $c(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.cc(1, "div", 74),
//             T.Xb(2, "nz-alert", 75),
//             T.Zc(3, Dc, 3, 3, "ng-template", null, 76, T.ad),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.Mc(4);
//           T.Gb(2), T.xc("nzMessage", e);
//         }
//       }
//       function Mc(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.ac(0),
//             T.cc(1, "button", 78),
//             T.kc("click", function () {
//               return T.Oc(e), T.oc(2).onReset();
//             }),
//             T.bd(2, "Reset Filters"),
//             T.bc(),
//             T.Zb();
//         }
//       }
//       const Bc = function () {
//         return ["../../"];
//       };
//       function Ec(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "div", 70),
//             T.Zc(1, $c, 5, 1, "ng-container", 67),
//             T.Zc(2, Mc, 3, 0, "ng-container", 67),
//             T.cc(3, "a", 71),
//             T.nc(),
//             T.cc(4, "svg", 72),
//             T.Xb(5, "path", 73),
//             T.bc(),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = T.oc();
//           T.Gb(1),
//             T.xc("ngIf", "" !== e.typeText),
//             T.Gb(1),
//             T.xc("ngIf", e.collectionQuery.filter.length > 0),
//             T.Gb(1),
//             T.xc("routerLink", T.Cc(3, Bc));
//         }
//       }
//       function Nc(e, c) {
//         if (
//           (1 & e && (T.ac(0), T.bd(1), T.pc(2, "translate"), T.Zb()), 2 & e)
//         ) {
//           const e = c.$implicit,
//             t = T.oc().$implicit;
//           T.Gb(1), T.cd(T.qc(2, 1, t.errors[e.key].message));
//         }
//       }
//       function Ac(e, c) {
//         if (
//           (1 & e &&
//             (T.Zc(0, Nc, 3, 3, "ng-container", 79), T.pc(1, "keyvalue")),
//           2 & e)
//         ) {
//           const e = c.$implicit,
//             t = T.oc();
//           T.xc("ngForOf", T.qc(1, 2, e.errors))("ngForTrackBy", t.index);
//         }
//       }
//       function Qc(e, c) {
//         if (1 & e) {
//           const e = T.dc();
//           T.ac(0),
//             T.cc(1, "div", 82),
//             T.cc(2, "span", 47),
//             T.cc(3, "i", 83),
//             T.kc("click", function () {
//               T.Oc(e);
//               const c = T.oc().$implicit;
//               return T.oc().expandUsingFolderIcon(c);
//             }),
//             T.bc(),
//             T.cc(4, "span", 84),
//             T.pc(5, "locale"),
//             T.cc(6, "span", 85),
//             T.bd(7),
//             T.bc(),
//             T.bd(8),
//             T.pc(9, "locale"),
//             T.bc(),
//             T.bc(),
//             T.bc(),
//             T.Zb();
//         }
//         if (2 & e) {
//           const e = T.oc().$implicit;
//           T.Gb(3),
//             T.xc("nzType", e.isExpanded ? "folder-open" : "folder"),
//             T.Gb(1),
//             T.xc("nzTitle", T.qc(5, 4, null == e ? null : e.title)),
//             T.Gb(3),
//             T.cd(null == e ? null : e.key),
//             T.Gb(1),
//             T.dd(" ", T.qc(9, 6, null == e ? null : e.title), " ");
//         }
//       }
//       function Rc(e, c) {
//         if (
//           (1 & e &&
//             (T.ac(0),
//             T.cc(1, "span"),
//             T.cc(2, "span"),
//             T.Xb(3, "i", 86),
//             T.bc(),
//             T.cc(4, "span", 87),
//             T.bd(5),
//             T.pc(6, "locale"),
//             T.bc(),
//             T.bc(),
//             T.Zb()),
//           2 & e)
//         ) {
//           const e = T.oc().$implicit;
//           T.Gb(5),
//             T.ed(
//               "[",
//               null == e ? null : e.key,
//               "]: ",
//               T.qc(6, 2, null == e ? null : e.title),
//               ""
//             );
//         }
//       }
//       function Wc(e, c) {
//         if (
//           (1 & e &&
//             (T.cc(0, "div", 80),
//             T.cc(1, "div", 81),
//             T.Zc(2, Qc, 10, 8, "ng-container", 67),
//             T.Zc(3, Rc, 7, 4, "ng-container", 67),
//             T.bc(),
//             T.bc()),
//           2 & e)
//         ) {
//           const e = c.$implicit;
//           T.Gb(2), T.xc("ngIf", !e.isLeaf), T.Gb(1), T.xc("ngIf", e.isLeaf);
//         }
//       }
//       const Vc = [
//         {
//           path: "",
//           component: (() => {
//             class e extends S.d {
//               constructor(e, c, t, n, i) {
//                 super(),
//                   (this.logger = e),
//                   (this.activatedRouter = c),
//                   (this.fb = t),
//                   (this.facade = n),
//                   (this.pFacade = i),
//                   (this.pageIndex = 1),
//                   (this.pageSize = 10),
//                   (this.borderColors = [
//                     "border-blue-light",
//                     "border-orange-light",
//                     "border-yellow-light",
//                     "border-green-light",
//                     "border-gray-300",
//                     "border-blue-light",
//                     "border-orange-light",
//                     "border-yellow-light",
//                     "border-green-light",
//                     "border-gray-300",
//                   ]),
//                   (this.procurementType = "tendering"),
//                   (this.counter = 0),
//                   (this.items$ = this.facade.items$),
//                   (this.itemsLoading$ = this.facade.itemsLoading$),
//                   (this.nodes$ = this.facade.nodes$),
//                   (this.procuringEntities$ = this.facade.procuringEntities$),
//                   (this.total$ = this.facade.total$),
//                   (this.counter$ = this.pFacade.counter$),
//                   (this.counterLoading$ = this.pFacade.counterLoading$),
//                   (this.isVisible = !1),
//                   (this.type = "all"),
//                   (this.typeText = ""),
//                   (this.collectionQuery = {
//                     skip: 0,
//                     top: 10,
//                     orderBy: [],
//                     filter: [],
//                   }),
//                   (this.peCollectionQuery = {
//                     orderBy: [],
//                   }),
//                   (this.selectedLan = "Select Language"),
//                   (this.invitationDate = "invitationDate"),
//                   (this.checked = !1),
//                   (this.indeterminate = !1),
//                   (this.listOfCurrentPageData = []),
//                   (this.listOfData = []),
//                   (this.searchValue = ""),
//                   (this.setOfCheckedId = []),
//                   (this.nodes = []),
//                   (this.extendCheckbox = !1),
//                   (this.selectedKeys = []),
//                   (this.filterSelected = []),
//                   (this.categories = [
//                     {
//                       text: "Goods",
//                       value: "Goods",
//                     },
//                     {
//                       text: "Works",
//                       value: "Works",
//                     },
//                     {
//                       text: "Consultancy Services",
//                       value: "ConsultancyServices",
//                     },
//                     {
//                       text: "Non-Consultancy Services",
//                       value: "NonConsultancyServices",
//                     },
//                   ]),
//                   (this.marketApproaches = [
//                     {
//                       text: "National",
//                       value: "National",
//                     },
//                     {
//                       text: "International",
//                       value: "International",
//                     },
//                   ]),
//                   (this.procuringEntities = []);
//               }
//               ngOnInit() {
//                 this.pFacade.getCounter(),
//                   this.activatedRouter.paramMap
//                     .pipe(Object(se.a)(this.ngUnsubscribe))
//                     .subscribe((e) => {
//                       switch (e.get("type")) {
//                         case "publishedToday":
//                           (this.typeText = Object(S.v)(
//                             "Portal.Tenders Published Today"
//                           )),
//                             (this.type = "publishedToday");
//                           break;
//                         case "report":
//                           (this.typeText = Object(S.v)(
//                             "Portal.Tenders Published to Date"
//                           )),
//                             (this.type = "report");
//                           break;
//                         case "closingToday":
//                           (this.typeText = Object(S.v)(
//                             "Portal.Tenders Closing Today"
//                           )),
//                             (this.type = "closingToday");
//                           break;
//                         case "openningToday":
//                           (this.typeText = Object(S.v)(
//                             "Portal.Tenders Opening Today"
//                           )),
//                             (this.type = "openningToday");
//                           break;
//                         case "EvaluationTender":
//                           (this.typeText = Object(S.v)(
//                             "Portal.Tenders Under Evaluation"
//                           )),
//                             (this.type = "EvaluationTender");
//                           break;
//                         case "CanceledTender":
//                           (this.typeText = Object(S.v)(
//                             "Portal.Tenders Cancelled"
//                           )),
//                             (this.type = "CanceledTender");
//                           break;
//                         case "AwardedTender":
//                           (this.typeText = Object(S.v)(
//                             "Portal.Tenders Awarded"
//                           )),
//                             (this.type = "AwardedTender");
//                           break;
//                         case "all":
//                           (this.typeText = Object(S.v)("Portal.All Tenders")),
//                             (this.type = "all");
//                       }
//                       (this.collectionQuery.orderBy = [
//                         {
//                           field: this.invitationDate,
//                           direction: "desc",
//                         },
//                       ]),
//                         this.facade.listTenders(
//                           this.collectionQuery,
//                           this.type
//                         );
//                     }),
//                   this.facade.getNodes(),
//                   this.nodes$.subscribe((e) => {
//                     this.nodes = e.map((e) => Object.assign({}, e));
//                   }),
//                   this.facade.listProcuringEntities(this.peCollectionQuery),
//                   this.facade.procuringEntities$
//                     .pipe(Object(se.a)(this.ngUnsubscribe))
//                     .subscribe((e) => {
//                       e &&
//                         (this.procuringEntities = e.map((e) => ({
//                           text: e.name.en,
//                           value: e.name.en,
//                         })));
//                     });
//               }
//               onSearching(e, c) {
//                 (this.collectionQuery = Object.assign(
//                   Object.assign({}, this.collectionQuery),
//                   "" !== e
//                     ? {
//                         search: c,
//                         searchFrom: [e],
//                       }
//                     : {
//                         search: c,
//                         searchFrom: [
//                           "lotName",
//                           "sourceApplication",
//                           "lotReferenceNo",
//                           "procurementReferenceNo",
//                         ],
//                       }
//                 )),
//                   this.facade.listTenders(this.collectionQuery, this.type);
//               }
//               onPESearching(e) {
//                 "" === e
//                   ? (this.peCollectionQuery = {
//                       skip: 0,
//                       top: 10,
//                     })
//                   : ((this.peCollectionQuery = Object.assign(
//                       Object.assign({}, this.peCollectionQuery),
//                       {
//                         search: e,
//                       }
//                     )),
//                     this.facade.listProcuringEntities(this.peCollectionQuery));
//               }
//               filterByCategories(e) {
//                 if (0 === e.length)
//                   (this.categoriesFilter = []),
//                     this.facade.listTenders(this.collectionQuery, this.type);
//                 else {
//                   (this.categoriesFilter = Object.assign(
//                     {},
//                     this.collectionQuery
//                   )),
//                     (this.categoriesFilter.filter = []);
//                   let c = [];
//                   e.forEach((e) => {
//                     c = [
//                       ...c,
//                       {
//                         field: "procurementCategory",
//                         value: e,
//                         operator: "=",
//                       },
//                     ];
//                   }),
//                     (this.categoriesFilter.filter = [
//                       ...this.categoriesFilter.filter,
//                       c,
//                     ]);
//                 }
//                 this.facade.listTenders(this.categoriesFilter, this.type),
//                   (this.collectionQuery = Object.assign(
//                     {},
//                     this.categoriesFilter
//                   ));
//               }
//               filterByMarketApproach(e) {
//                 if (0 === e.length)
//                   (this.marketApproachFilter.filter = []),
//                     this.facade.listTenders(this.collectionQuery, this.type);
//                 else {
//                   (this.marketApproachFilter = Object.assign(
//                     {},
//                     this.collectionQuery
//                   )),
//                     (this.marketApproachFilter.filter = []);
//                   let c = [];
//                   e.forEach((e) => {
//                     c = [
//                       ...c,
//                       {
//                         field: "marketPlace",
//                         value: e,
//                         operator: "=",
//                       },
//                     ];
//                   }),
//                     (this.marketApproachFilter.filter = [
//                       ...this.marketApproachFilter.filter,
//                       c,
//                     ]);
//                 }
//                 this.facade.listTenders(this.marketApproachFilter, this.type),
//                   (this.collectionQuery = Object.assign(
//                     {},
//                     this.marketApproachFilter
//                   ));
//               }
//               filterByProcuringEntity(e) {
//                 if (0 === e.length)
//                   (this.procuringEntityFilter.filter = []),
//                     this.facade.listTenders(this.collectionQuery, this.type);
//                 else {
//                   (this.procuringEntityFilter = Object.assign(
//                     {},
//                     this.collectionQuery
//                   )),
//                     (this.procuringEntityFilter.filter = []);
//                   let c = [];
//                   e.forEach((e) => {
//                     c = [
//                       ...c,
//                       {
//                         field: "procuringEntity",
//                         value: e,
//                         operator: "=",
//                       },
//                     ];
//                   }),
//                     (this.procuringEntityFilter.filter = [
//                       ...this.procuringEntityFilter.filter,
//                       c,
//                     ]);
//                 }
//                 this.facade.listTenders(this.procuringEntityFilter, this.type),
//                   (this.collectionQuery = Object.assign(
//                     {},
//                     this.procuringEntityFilter
//                   ));
//               }
//               onSetClosingDate(e) {
//                 (this.submissionDeadlineFilter = Object.assign(
//                   {},
//                   this.collectionQuery
//                 )),
//                   (this.submissionDeadlineFilter.filter = []),
//                   (this.submissionDeadlineFilter.filter = [
//                     ...this.submissionDeadlineFilter.filter,
//                     [
//                       {
//                         field: "submissionDeadline",
//                         value: e.StartDate.toISOString(),
//                         operator: ">=",
//                       },
//                     ],
//                     [
//                       {
//                         field: "submissionDeadline",
//                         value: e.EndDate.toISOString(),
//                         operator: "<=",
//                       },
//                     ],
//                   ]),
//                   this.facade.listTenders(
//                     this.submissionDeadlineFilter,
//                     this.type
//                   ),
//                   (this.collectionQuery = Object.assign(
//                     {},
//                     this.submissionDeadlineFilter
//                   ));
//               }
//               getBorder(e) {
//                 return this.borderColors[e];
//               }
//               ngOnChanges() {}
//               checkBoxChange(e) {
//                 this.selectedKeys = e.keys;
//               }
//               nzEventChange(e) {
//                 if ("expand" === e.eventName) {
//                   const c = e.node;
//                   c &&
//                     0 === c.getChildren().length &&
//                     c.isExpanded &&
//                     this.facade
//                       .getNodesAsync(c.key, c.origin.order)
//                       .then((e) => {
//                         c.addChildren(e);
//                       });
//                 }
//               }
//               onReset() {
//                 (this.selectedKeys = []),
//                   (this.collectionQuery = {
//                     skip: 0,
//                     top: 10,
//                     filter: [],
//                     orderBy: [
//                       {
//                         field: this.invitationDate,
//                         direction: "desc",
//                       },
//                     ],
//                   }),
//                   (this.startDate = void 0),
//                   (this.endDate = void 0),
//                   (this.filterSelected = []),
//                   this.facade.listTenders(this.collectionQuery, this.type);
//               }
//               expandUsingFolderIcon(e) {
//                 e.isExpanded = !e.isExpanded;
//                 const c = e;
//                 c &&
//                   0 === c.getChildren().length &&
//                   c.isExpanded &&
//                   this.facade.getNodesAsync(c.key, c.origin.order).then((e) => {
//                     c.addChildren(e);
//                   });
//               }
//               getSourceApplication(e) {
//                 let c = "";
//                 switch (e) {
//                   case "Tendering":
//                     c = "tendering";
//                     break;
//                   case "Auctioning":
//                     c = "auctioning";
//                     break;
//                   case "Purchasing":
//                     c = "purchasing";
//                 }
//                 return c;
//               }
//               trackByFn(e, c) {
//                 return c && c.id ? c.id : e;
//               }
//               onPageIndexChange(e) {
//                 const c = Object.assign({}, this.collectionQuery);
//                 (c.skip = (e - 1) * this.pageSize),
//                   (c.top = this.pageSize),
//                   this.facade.listTenders(c, this.type);
//               }
//               onPageSizeChange(e) {
//                 const c = Object.assign({}, this.collectionQuery);
//                 (c.skip = 0),
//                   (c.top = e),
//                   this.facade.listTenders(c, this.type);
//               }
//             }
//             return (
//               (e.ɵfac = function (c) {
//                 return new (c || e)(
//                   T.Wb(S.o),
//                   T.Wb(v.a),
//                   T.Wb(O.h),
//                   T.Wb(y.a),
//                   T.Wb(b.a)
//                 );
//               }),
//               (e.ɵcmp = T.Qb({
//                 type: e,
//                 selectors: [["egp-portal-tendering-list"]],
//                 features: [T.Db, T.Eb],
//                 decls: 80,
//                 vars: 38,
//                 consts: [
//                   [1, "p-3", "bg-gray-100", "min-h-screen"],
//                   [1, "container", "mx-auto"],
//                   [3, "nzSpinning", "nzDelay"],
//                   [
//                     "class",
//                     "hidden md:block md:flex justify-between mb-2",
//                     4,
//                     "ngIf",
//                   ],
//                   [
//                     1,
//                     "flex",
//                     "flex-col",
//                     "w-full",
//                     "flex-grow",
//                     3,
//                     "nzTitle",
//                     "nzExtra",
//                   ],
//                   [1, "flex-1", "-m-4", "bg-white", "border-t"],
//                   [1, "z-0", "flex-1", "p-3", "overflow-y-auto"],
//                   ["nzType", "info", 1, "my-2", 3, "nzMessage"],
//                   ["alertMessage", ""],
//                   [1, "flex-1", "mb-3"],
//                   [3, "nzSuffix"],
//                   ["type", "text", "nz-input", "", 3, "keyup"],
//                   ["suffixIconSearch", ""],
//                   ["proRefNo", "nzDropdownMenu"],
//                   [1, "ant-table-filter-dropdown"],
//                   [1, "search-box"],
//                   [
//                     "type",
//                     "text",
//                     "nz-input",
//                     "",
//                     "placeholder",
//                     "Search by Procurement Ref. No.",
//                     3,
//                     "keyup",
//                   ],
//                   ["lotNo", "nzDropdownMenu"],
//                   [
//                     "type",
//                     "text",
//                     "nz-input",
//                     "",
//                     "placeholder",
//                     "Search by Lot No.",
//                     3,
//                     "keyup",
//                   ],
//                   ["proTitle", "nzDropdownMenu"],
//                   [
//                     "type",
//                     "text",
//                     "nz-input",
//                     "",
//                     "placeholder",
//                     "Search by Procurement Title",
//                     3,
//                     "keyup",
//                   ],
//                   ["procurementCategory", "nzDropdownMenu"],
//                   ["formControlName", "procurementCategory", 3, "change"],
//                   ["nz-radio", "", "nzValue", "Goods", 1, "w-full", "my-1"],
//                   ["nz-radio", "", "nzValue", "Works", 1, "w-full", "my-1"],
//                   [
//                     "nz-radio",
//                     "",
//                     "nzValue",
//                     "ConsultancyServices",
//                     1,
//                     "w-full",
//                     "my-1",
//                   ],
//                   [
//                     "nz-radio",
//                     "",
//                     "nzValue",
//                     "NonConsultancyServices",
//                     1,
//                     "w-full",
//                     "my-1",
//                   ],
//                   ["procuringEntity", "nzDropdownMenu"],
//                   ["formControlName", "procuringEntity"],
//                   [
//                     "class",
//                     "w-full my-1",
//                     "nz-radio",
//                     "",
//                     3,
//                     "nzValue",
//                     4,
//                     "ngFor",
//                     "ngForOf",
//                   ],
//                   ["marketApproach", "nzDropdownMenu"],
//                   ["formControlName", "marketApproach"],
//                   ["nz-radio", "", "nzValue", "National", 1, "w-full", "my-1"],
//                   [
//                     "nz-radio",
//                     "",
//                     "nzValue",
//                     "International",
//                     1,
//                     "w-full",
//                     "my-1",
//                   ],
//                   ["submissionDeadline", "nzDropdownMenu"],
//                   [
//                     3,
//                     "minDate",
//                     "maxDate",
//                     "startDate",
//                     "endDate",
//                     "rangePicker",
//                     "setDateResult",
//                   ],
//                   [
//                     "nzSize",
//                     "small",
//                     "nzShowSizeChanger",
//                     "",
//                     "class",
//                     "h-auto my-3 border-t border-l border-r",
//                     3,
//                     "nzScroll",
//                     "nzShowPagination",
//                     "nzData",
//                     4,
//                     "ngIf",
//                     "ngIfElse",
//                   ],
//                   [
//                     1,
//                     "flex",
//                     "items-center",
//                     "justify-end",
//                     "py-3",
//                     "bg-gray-100",
//                   ],
//                   [
//                     "nzShowSizeChanger",
//                     "",
//                     "nzSize",
//                     "small",
//                     3,
//                     "nzPageIndex",
//                     "nzPageSize",
//                     "nzTotal",
//                     "nzPageIndexChange",
//                     "nzPageSizeChange",
//                   ],
//                   ["elseNoBids", ""],
//                   ["headerExtra", ""],
//                   ["errorTemplate", ""],
//                   ["nzTreeTemplate", ""],
//                   [
//                     1,
//                     "hidden",
//                     "md:block",
//                     "md:flex",
//                     "justify-between",
//                     "mb-2",
//                   ],
//                   [
//                     1,
//                     "w-1/2",
//                     "flex",
//                     "justify-between",
//                     "mr-3",
//                     "rounded",
//                     "border",
//                     "px-4",
//                     "py-2",
//                     2,
//                     "background-color",
//                     "#caf1de47",
//                   ],
//                   [
//                     1,
//                     "flex",
//                     "flex-col",
//                     "cursor-pointer",
//                     "hover:font-semibold",
//                     "hover:text-primary-400",
//                     "w-1/3",
//                     "pr-4",
//                     3,
//                     "routerLinkActive",
//                     "routerLink",
//                   ],
//                   [1, "text-2xl", "text-gray-900", "cursor-pointer"],
//                   [1, "cursor-pointer"],
//                   [
//                     1,
//                     "flex",
//                     "flex-col",
//                     "cursor-pointer",
//                     "hover:font-semibold",
//                     "hover:text-primary-400",
//                     "w-1/3",
//                     "border-l",
//                     "border-r",
//                     "px-4",
//                     3,
//                     "routerLinkActive",
//                     "routerLink",
//                   ],
//                   [
//                     1,
//                     "flex",
//                     "flex-col",
//                     "cursor-pointer",
//                     "hover:font-semibold",
//                     "hover:text-primary-400",
//                     "w-1/3",
//                     "pl-4",
//                     3,
//                     "routerLinkActive",
//                     "routerLink",
//                   ],
//                   [
//                     1,
//                     "w-1/2",
//                     "flex",
//                     "justify-between",
//                     "rounded",
//                     "border",
//                     "px-4",
//                     "py-2",
//                     2,
//                     "background-color",
//                     "#fef8dd85",
//                   ],
//                   [
//                     1,
//                     "flex",
//                     "flex-col",
//                     "cursor-pointer",
//                     "hover:font-semibold",
//                     "hover:text-primary-400",
//                     "w-1/3",
//                     "border-l",
//                     "border-r",
//                     "pl-4",
//                     3,
//                     "routerLinkActive",
//                     "routerLink",
//                   ],
//                   [1, "text-gray-700", "md:text-sm", "text-xs"],
//                   ["nz-icon", "", "nzType", "search"],
//                   ["nz-radio", "", 1, "w-full", "my-1", 3, "nzValue"],
//                   [
//                     "nzSize",
//                     "small",
//                     "nzShowSizeChanger",
//                     "",
//                     1,
//                     "h-auto",
//                     "my-3",
//                     "border-t",
//                     "border-l",
//                     "border-r",
//                     3,
//                     "nzScroll",
//                     "nzShowPagination",
//                     "nzData",
//                   ],
//                   ["row", ""],
//                   ["nzCustomFilter", ""],
//                   [3, "nzDropdownMenu"],
//                   [3, "nzFilters", "nzFilterMultiple", "nzFilterChange"],
//                   ["nz-icon", "", "nzType", "calendar"],
//                   ["class", "text-gray-600", 4, "ngFor", "ngForOf"],
//                   [1, "text-gray-600"],
//                   [
//                     "class",
//                     "text-gray-600 cursor-pointer hover:shadow",
//                     3,
//                     "routerLink",
//                     4,
//                     "ngFor",
//                     "ngForOf",
//                   ],
//                   [
//                     1,
//                     "text-gray-600",
//                     "cursor-pointer",
//                     "hover:shadow",
//                     3,
//                     "routerLink",
//                   ],
//                   [
//                     1,
//                     "border-l-4",
//                     "cursor-pointer",
//                     "hover:shadow",
//                     2,
//                     "font-size",
//                     "12px",
//                     "margin",
//                     "-23px",
//                     3,
//                     "ngClass",
//                   ],
//                   [2, "font-size", "12px", "margin", "-23px"],
//                   [4, "ngIf"],
//                   [3, "nzNotFoundContent"],
//                   ["contentTpl", ""],
//                   [1, "md:block", "hidden", "md:flex", "items-center"],
//                   [
//                     "nzTooltipTitle",
//                     "Back",
//                     "nzTooltipPlacement",
//                     "topCenter",
//                     "nz-tooltip",
//                     "",
//                     1,
//                     "ml-3",
//                     3,
//                     "routerLink",
//                   ],
//                   [
//                     "xmlns",
//                     "http://www.w3.org/2000/svg",
//                     0,
//                     "xmlns",
//                     "xlink",
//                     "http://www.w3.org/1999/xlink",
//                     "viewBox",
//                     "0 0 50 50",
//                     1,
//                     "fill-current",
//                     "text-gray-800",
//                     "ml-6",
//                     "w-5",
//                   ],
//                   [
//                     "d",
//                     "M22 3.59375L20.40625 4.8125L1.40625 19.1875L0.34375 20L1.40625 20.8125L20.40625 35.1875L22 36.40625L22 26.09375C34.339844 26.347656 40.796875 30.738281 44.1875 35.125C47.679688 39.644531 48 44.0625 48 44.0625L50 44.03125C50 44.03125 50 43.9375 50 43.9375C50 43.9375 50 43.90625 50 43.90625C50.007813 43.710938 50.226563 36.460938 46.78125 29.0625C43.375 21.742188 36.136719 14.414063 22 14.0625 Z M 20 7.625L20 16L21 16C35.167969 16 41.710938 22.9375 44.96875 29.9375C45.914063 31.96875 46.519531 33.917969 46.96875 35.78125C46.582031 35.144531 46.28125 34.519531 45.78125 33.875C41.929688 28.894531 34.550781 24 21 24L20 24L20 32.375L3.65625 20Z",
//                   ],
//                   [1, "flex", "items-center", "text-xs"],
//                   ["nzType", "warning", 1, "text-xs", 3, "nzMessage"],
//                   ["typeMessage", ""],
//                   [1, "text-xs", "font-semibold"],
//                   ["nz-button", "", "nzType", "default", 1, "mx-2", 3, "click"],
//                   [4, "ngFor", "ngForOf", "ngForTrackBy"],
//                   ["routerLinkActive", "active", 1, "text-xs", "tree-row"],
//                   [1, "flex"],
//                   [
//                     1,
//                     "float-left",
//                     "truncate",
//                     "folder-name",
//                     2,
//                     "width",
//                     "calc(100% - 10px)",
//                   ],
//                   [
//                     "nz-icon",
//                     "",
//                     1,
//                     "cursor:pointer;",
//                     "rounded-full",
//                     "p-1",
//                     "bg-gray-200",
//                     "border",
//                     "border-gray-400",
//                     3,
//                     "nzType",
//                     "click",
//                   ],
//                   ["nz-tooltip", "", 3, "nzTitle"],
//                   [
//                     1,
//                     "px-2",
//                     "ml-2",
//                     "bg-gray-200",
//                     "border",
//                     "border-gray-400",
//                     "rounded",
//                   ],
//                   ["nz-icon", "", "nzType", "file"],
//                   [1, "ml-2", "folder-name"],
//                 ],
//                 template: function (e, c) {
//                   if (
//                     (1 & e &&
//                       (T.cc(0, "div", 0),
//                       T.cc(1, "div", 1),
//                       T.cc(2, "nz-spin", 2),
//                       T.pc(3, "async"),
//                       T.Zc(4, Cc, 45, 54, "div", 3),
//                       T.pc(5, "async"),
//                       T.bc(),
//                       T.cc(6, "nz-card", 4),
//                       T.pc(7, "translate"),
//                       T.cc(8, "nz-spin", 2),
//                       T.pc(9, "async"),
//                       T.ac(10),
//                       T.cc(11, "main", 5),
//                       T.cc(12, "div", 6),
//                       T.Xb(13, "nz-alert", 7),
//                       T.Zc(14, Ic, 4, 0, "ng-template", null, 8, T.ad),
//                       T.cc(16, "div", 9),
//                       T.cc(17, "nz-input-group", 10),
//                       T.cc(18, "input", 11),
//                       T.kc("keyup", function (e) {
//                         return c.onSearching("", e.target.value);
//                       }),
//                       T.pc(19, "translate"),
//                       T.bc(),
//                       T.bc(),
//                       T.Zc(20, Sc, 1, 0, "ng-template", null, 12, T.ad),
//                       T.bc(),
//                       T.cc(22, "nz-dropdown-menu", null, 13),
//                       T.cc(24, "div", 14),
//                       T.cc(25, "div", 15),
//                       T.cc(26, "input", 16),
//                       T.kc("keyup", function (e) {
//                         return c.onSearching(
//                           "procurementReferenceNo",
//                           e.target.value
//                         );
//                       }),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.cc(27, "nz-dropdown-menu", null, 17),
//                       T.cc(29, "div", 14),
//                       T.cc(30, "div", 15),
//                       T.cc(31, "input", 18),
//                       T.kc("keyup", function (e) {
//                         return c.onSearching("lotNo", e.target.value);
//                       }),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.cc(32, "nz-dropdown-menu", null, 19),
//                       T.cc(34, "div", 14),
//                       T.cc(35, "div", 15),
//                       T.cc(36, "input", 20),
//                       T.kc("keyup", function (e) {
//                         return c.onSearching("lotName", e.target.value);
//                       }),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.cc(37, "nz-dropdown-menu", null, 21),
//                       T.cc(39, "div", 14),
//                       T.cc(40, "nz-radio-group", 22),
//                       T.kc("change", function () {
//                         return c.onSearching("procurementCategory", "");
//                       }),
//                       T.cc(41, "label", 23),
//                       T.bd(42, "Goods"),
//                       T.bc(),
//                       T.cc(43, "label", 24),
//                       T.bd(44, "Works"),
//                       T.bc(),
//                       T.cc(45, "label", 25),
//                       T.bd(46, "Consultancy Services"),
//                       T.bc(),
//                       T.cc(47, "label", 26),
//                       T.bd(48, "Non-Consultancy Services"),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.cc(49, "nz-dropdown-menu", null, 27),
//                       T.cc(51, "div", 14),
//                       T.cc(52, "nz-radio-group", 28),
//                       T.Zc(53, Tc, 3, 4, "label", 29),
//                       T.pc(54, "async"),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.cc(55, "nz-dropdown-menu", null, 30),
//                       T.cc(57, "div", 14),
//                       T.cc(58, "nz-radio-group", 31),
//                       T.cc(59, "label", 32),
//                       T.bd(60, "National"),
//                       T.bc(),
//                       T.cc(61, "label", 33),
//                       T.bd(62, "International"),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.cc(63, "nz-dropdown-menu", null, 34),
//                       T.cc(65, "div", 14),
//                       T.cc(66, "ps-date-time-picker", 35),
//                       T.kc("setDateResult", function (e) {
//                         return c.onSetClosingDate(e);
//                       }),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.Zc(67, Zc, 37, 40, "nz-table", 36),
//                       T.pc(68, "async"),
//                       T.cc(69, "div", 37),
//                       T.cc(70, "nz-pagination", 38),
//                       T.kc("nzPageIndexChange", function (e) {
//                         return c.onPageIndexChange(e);
//                       })("nzPageSizeChange", function (e) {
//                         return c.onPageSizeChange(e);
//                       }),
//                       T.pc(71, "async"),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.bc(),
//                       T.Zb(),
//                       T.Zc(72, jc, 3, 1, "ng-template", null, 39, T.ad),
//                       T.bc(),
//                       T.bc(),
//                       T.Zc(74, Ec, 6, 4, "ng-template", null, 40, T.ad),
//                       T.bc(),
//                       T.bc(),
//                       T.Zc(76, Ac, 2, 4, "ng-template", null, 41, T.ad),
//                       T.Zc(78, Wc, 4, 2, "ng-template", null, 42, T.ad)),
//                     2 & e)
//                   ) {
//                     const e = T.Mc(15),
//                       t = T.Mc(21),
//                       n = T.Mc(73),
//                       i = T.Mc(75);
//                     T.Gb(2),
//                       T.xc("nzSpinning", T.qc(3, 22, c.counterLoading$))(
//                         "nzDelay",
//                         500
//                       ),
//                       T.Gb(2),
//                       T.xc("ngIf", T.qc(5, 24, c.counter$)),
//                       T.Gb(2),
//                       T.yc("nzTitle", T.qc(7, 26, "Portal.Bidding List")),
//                       T.xc("nzExtra", i),
//                       T.Gb(2),
//                       T.xc("nzSpinning", T.qc(9, 28, c.itemsLoading$))(
//                         "nzDelay",
//                         500
//                       ),
//                       T.Gb(5),
//                       T.xc("nzMessage", e),
//                       T.Gb(4),
//                       T.xc("nzSuffix", t),
//                       T.Gb(1),
//                       T.Hb("placeholder", T.qc(19, 30, "Search here")),
//                       T.Gb(35),
//                       T.xc("ngForOf", T.qc(54, 32, c.procuringEntities$)),
//                       T.Gb(13),
//                       T.xc("minDate", c.minDate)("maxDate", c.maxDate)(
//                         "startDate",
//                         c.startDate
//                       )("endDate", c.endDate)("rangePicker", !0),
//                       T.Gb(1),
//                       T.xc("ngIf", T.qc(68, 34, c.total$) > 0)("ngIfElse", n),
//                       T.Gb(3),
//                       T.xc("nzPageIndex", c.pageIndex)(
//                         "nzPageSize",
//                         c.pageSize
//                       )("nzPageIndex", 1)("nzTotal", T.qc(71, 36, c.total$));
//                   }
//                 },
//                 directives: [
//                   P.a,
//                   L.t,
//                   F.a,
//                   N.a,
//                   w.c,
//                   w.d,
//                   w.b,
//                   q.e,
//                   Z.c,
//                   O.v,
//                   O.k,
//                   Z.b,
//                   L.s,
//                   mc.a,
//                   j.a,
//                   v.j,
//                   v.i,
//                   D.a,
//                   $.a,
//                   M.g,
//                   M.p,
//                   M.q,
//                   M.f,
//                   M.n,
//                   M.m,
//                   M.e,
//                   M.k,
//                   L.q,
//                   B.b,
//                   v.k,
//                   E.d,
//                   A.a,
//                   Q.a,
//                 ],
//                 pipes: [L.b, R.e, L.g, W.a, L.F, L.f, L.l],
//                 encapsulation: 2,
//               })),
//               e
//             );
//           })(),
//         },
//         {
//           path: "signed-contracts",
//           component: le,
//         },
//         {
//           path: "tendering/:id/:status",
//           component: hc,
//         },
//         {
//           path: "purchasing/:id/:status",
//           component: I.a,
//         },
//         {
//           path: "auctioning/:id/:status",
//           component: C.a,
//         },
//       ];
//       let Xc = (() => {
//           class e {}
//           return (
//             (e.ɵmod = T.Ub({
//               type: e,
//             })),
//             (e.ɵinj = T.Tb({
//               factory: function (c) {
//                 return new (c || e)();
//               },
//               imports: [[v.l.forChild(Vc)], v.l],
//             })),
//             e
//           );
//         })(),
//         Uc = (() => {
//           class e {}
//           return (
//             (e.ɵmod = T.Ub({
//               type: e,
//             })),
//             (e.ɵinj = T.Tb({
//               factory: function (c) {
//                 return new (c || e)();
//               },
//               providers: [m.a, g.a, y.a, f.a, h.a, p.a, b.a, d.a],
//               imports: [
//                 [
//                   i.b,
//                   r.d.forFeature([G.a, x.a, k.a, u.a, z.a]),
//                   Xc,
//                   l.b,
//                   a.c,
//                   n.a,
//                   o.b,
//                   s.b,
//                 ],
//               ],
//             })),
//             e
//           );
//         })();
//     },
//   },
// ]);
