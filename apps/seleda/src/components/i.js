// (window.webpackJsonp = window.webpackJsonp || []).push([
//   [15],
//   {
//     "3GdC": function (e, t, c) {
//       "use strict";
//       c.d(t, "d", function () {
//         return n;
//       }),
//         c.d(t, "c", function () {
//           return i;
//         }),
//         c.d(t, "a", function () {
//           return s;
//         }),
//         c.d(t, "b", function () {
//           return r;
//         }),
//         c.d(t, "f", function () {
//           return a;
//         }),
//         c.d(t, "e", function () {
//           return o;
//         });
//       let n = (() => {
//           class e {
//             constructor(e) {
//               this.payload = e;
//             }
//           }
//           return (e.type = "[PurchasingState] ListPurchasings"), e;
//         })(),
//         i = (() => {
//           class e {}
//           return (e.type = "[PurchasingState] ListProcuringEntities"), e;
//         })(),
//         s = (() => {
//           class e {
//             constructor(e) {
//               this.payload = e;
//             }
//           }
//           return (e.type = "[PurchasingState] DetailPurchasing"), e;
//         })(),
//         r = (() => {
//           class e {
//             constructor(e, t) {
//               (this.payload = e), (this.filterPage = t);
//             }
//           }
//           return (e.type = "[supplierRegistrationState] GetChildren"), e;
//         })(),
//         a = (() => {
//           class e {
//             constructor(e) {
//               this.payload = e;
//             }
//           }
//           return (e.type = "[PurchasingState] RegisterToBid"), e;
//         })(),
//         o = (() => {
//           class e {
//             constructor(e) {
//               this.payload = e;
//             }
//           }
//           return (e.type = "[PurchasingState] RegisterBookmark"), e;
//         })();
//     },
//     "3uam": function (e, t, c) {
//       "use strict";
//       c.d(t, "a", function () {
//         return f;
//       });
//       var n = c("UNrv"),
//         i = c("AoU+"),
//         s = c("0Qy+"),
//         r = c("fwXJ"),
//         a = c("ldfw"),
//         o = c("lgJ9"),
//         d = c("6jvO"),
//         l = c("8so3"),
//         u = c("3GdC"),
//         b = c("Iq5M"),
//         g = c("oIEy"),
//         p = c("Db6w"),
//         h = c("MVH1");
//       let f = (() => {
//         let e = class {
//           constructor(e, t, c, n, i, s) {
//             (this.logger = e),
//               (this.aggregateRootApi = t),
//               (this.notification = c),
//               (this.router = n),
//               (this.message = i),
//               (this.modalService = s),
//               (this.alreadyMessage = "Already Registered For This Quotation!"),
//               (this.alreadyBookmarked = "Already Bookmarked This Quotation!");
//           }
//           static collectionQuery(e) {
//             return e.collectionQuery;
//           }
//           static items(e) {
//             return e.items;
//           }
//           static procuringEntities(e) {
//             return e.procuringEntities;
//           }
//           static nodes(e) {
//             return e.nodes;
//           }
//           static selectedPurchasing(e) {
//             return e.selectedPurchasing;
//           }
//           static selectedLot(e) {
//             return e.selectedLot;
//           }
//           static total(e) {
//             return e.total;
//           }
//           static itemsLoading(e) {
//             return e.itemsLoading;
//           }
//           ListPurchasings({ patchState: e }, { payload: t }) {
//             return (
//               e({
//                 collectionQuery: t,
//                 itemsLoading: !0,
//               }),
//               this.aggregateRootApi.getAllPurchasings(t).pipe(
//                 Object(o.a)((t) => {
//                   e({
//                     itemsLoading: !1,
//                     items: t.items,
//                     total: t.total,
//                   });
//                 }),
//                 Object(d.a)((t) =>
//                   Object(r.a)(
//                     e({
//                       itemsLoading: !1,
//                     })
//                   )
//                 )
//               )
//             );
//           }
//           ListProcuringEntities({ patchState: e }) {
//             return (
//               e({
//                 itemsLoading: !0,
//               }),
//               this.aggregateRootApi.getProcuringEntities().pipe(
//                 Object(o.a)((t) => {
//                   e({
//                     itemsLoading: !1,
//                     procuringEntities: t.items,
//                   });
//                 }),
//                 Object(d.a)((t) =>
//                   Object(r.a)(
//                     e({
//                       itemsLoading: !1,
//                     })
//                   )
//                 )
//               )
//             );
//           }
//           DetailPurchasing({ patchState: e }, { payload: t }) {
//             return (
//               e({
//                 detailLotLoading: !0,
//               }),
//               this.aggregateRootApi.getPurchasingDetail(t).pipe(
//                 Object(o.a)((t) => {
//                   e({
//                     detailLotLoading: !1,
//                     selectedPurchasing: t,
//                   });
//                 }),
//                 Object(d.a)((t) =>
//                   Object(r.a)(
//                     e({
//                       detailLotLoading: !1,
//                     })
//                   )
//                 )
//               )
//             );
//           }
//           RegisterToBid({ patchState: e }, { payload: t }) {
//             return (
//               e({
//                 creating: !0,
//               }),
//               this.aggregateRootApi.registerToBid(t).pipe(
//                 Object(o.a)((t) => {
//                   e({
//                     creating: !1,
//                   }),
//                     this.notification.success(
//                       Object(i.v)("Selected quotation registered successfully")
//                     );
//                 }),
//                 Object(d.a)(
//                   (t) => (
//                     t.error.sourceMethod === this.alreadyMessage &&
//                       this.notification.error(Object(i.v)(this.alreadyMessage)),
//                     Object(r.a)(
//                       e({
//                         creating: !1,
//                       })
//                     )
//                   )
//                 )
//               )
//             );
//           }
//           RegisterBookmark({ patchState: e }, { payload: t }) {
//             return (
//               e({
//                 creating: !0,
//               }),
//               this.aggregateRootApi.registerBookmark(t).pipe(
//                 Object(o.a)((t) => {
//                   e({
//                     creating: !1,
//                     items: t,
//                   }),
//                     this.notification.success(
//                       Object(i.v)("SYSTEM.SUCCESS"),
//                       Object(i.v)("Selected quotation bookmarked successfully")
//                     );
//                 }),
//                 Object(d.a)(
//                   (t) => (
//                     t.error.sourceMethod === this.alreadyBookmarked &&
//                       this.notification.error(
//                         Object(i.v)(this.alreadyBookmarked)
//                       ),
//                     Object(r.a)(e({}))
//                   )
//                 )
//               )
//             );
//           }
//           getChildren({ patchState: e }, {}) {
//             return (
//               e({
//                 itemsLoading: !0,
//               }),
//               this.aggregateRootApi.selectTaxonomy().pipe(
//                 Object(o.a)((t) => {
//                   const c = t.items.map((e) => ({
//                     title: e.data.name,
//                     key: e.data.code,
//                     order: e.data.order,
//                     isLeaf: !1,
//                     children: [],
//                   }));
//                   e({
//                     nodes: [...c],
//                     itemsLoading: !1,
//                   });
//                 }),
//                 Object(d.a)((t) =>
//                   Object(r.a)(
//                     e({
//                       itemsLoading: !1,
//                     })
//                   )
//                 )
//               )
//             );
//           }
//         };
//         return (
//           (e.ɵfac = function (t) {
//             return new (t || e)(
//               b.gc(i.o),
//               b.gc(l.a),
//               b.gc(i.q),
//               b.gc(g.h),
//               b.gc(p.e),
//               b.gc(h.e)
//             );
//           }),
//           (e.ɵprov = b.Sb({
//             token: e,
//             factory: e.ɵfac,
//           })),
//           Object(n.b)(
//             [
//               Object(s.a)(u.d),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object, u.d]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "ListPurchasings",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.a)(u.c),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "ListProcuringEntities",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.a)(u.a),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object, u.a]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "DetailPurchasing",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.a)(u.f),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object, u.f]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "RegisterToBid",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.a)(u.e),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object, u.e]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "RegisterBookmark",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.a)(u.b),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object, u.b]),
//               Object(n.c)("design:returntype", a.a),
//             ],
//             e.prototype,
//             "getChildren",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Object),
//             ],
//             e,
//             "collectionQuery",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.f)(),
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
//               Object(s.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Array),
//             ],
//             e,
//             "procuringEntities",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Array),
//             ],
//             e,
//             "nodes",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Object),
//             ],
//             e,
//             "selectedPurchasing",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Object),
//             ],
//             e,
//             "selectedLot",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Number),
//             ],
//             e,
//             "total",
//             null
//           ),
//           Object(n.b)(
//             [
//               Object(s.f)(),
//               Object(n.c)("design:type", Function),
//               Object(n.c)("design:paramtypes", [Object]),
//               Object(n.c)("design:returntype", Boolean),
//             ],
//             e,
//             "itemsLoading",
//             null
//           ),
//           (e = Object(n.b)(
//             [
//               Object(s.g)({
//                 name: "PurchasingModel",
//                 defaults: {
//                   collectionQuery: void 0,
//                   total: 0,
//                   registration: [],
//                   items: [],
//                   supplierResponseItems: [],
//                   formItems: [],
//                   nodes: [],
//                   procuringEntities: [],
//                   selectedItem: void 0,
//                   selectedPurchasing: void 0,
//                   selectedLot: void 0,
//                   selectedSupplierResponseItem: void 0,
//                   selectedFormItem: void 0,
//                   formsLoading: !1,
//                   itemsLoading: !1,
//                   deletingResponse: !1,
//                   detailLoading: !1,
//                   detailLotLoading: !1,
//                   detailFormLoading: !1,
//                   detailSupplierResponseLoading: !1,
//                   creatingDocumentaryEvidence: !1,
//                   updatingAttestation: !1,
//                   supplierResponseLoading: !1,
//                   creating: !1,
//                 },
//               }),
//             ],
//             e
//           )),
//           e
//         );
//       })();
//     },
//     "8so3": function (e, t, c) {
//       "use strict";
//       c.d(t, "a", function () {
//         return l;
//       });
//       var n = c("AoU+"),
//         i = c("0Qy+"),
//         s = c("kpJz"),
//         r = c("AytR");
//       const a = {
//         getAllPurchasings:
//           r.a.urls.api +
//           "/purchasing-quotation-requests/api/get-quotation-requests",
//         getLotInPackageDetail:
//           r.a.urls.api + "/purchasing-int/api/packages/get-public-packages",
//         getPurchasingDetail:
//           r.a.urls.api +
//           "/purchasing-quotation-requests/api/get-quotation-request",
//         registerToBid:
//           r.a.urls.api +
//           "/purchasing-registrations/api/create-quotation-request-registration",
//         registerBookmark:
//           r.a.urls.api +
//           "/purchasing-bookmarks/api/create-quotation-request-bookmark",
//         getTaxonomiesChild: r.a.urls.api + "/commodities/api/getchild",
//         getTaxonomies: r.a.urls.api + "/commodities/api/get-roots",
//         getProcuringEntities:
//           r.a.urls.api +
//           "/private-registration/api/organization/get-organizations-by-mandate-for-public?mandateKeys=procuring-entity",
//         listInvitation: r.a.urls.api + "/cms/api/sourcing/get-sourcing",
//         detailInvitation:
//           r.a.urls.api +
//           "/purchasing-quotation-invitations/api/get-quotation-invitation",
//       };
//       var o = c("Iq5M"),
//         d = c("3ukZ");
//       let l = (() => {
//         class e {
//           constructor(e, t, c) {
//             (this.http = e), (this.logger = t), (this.store = c);
//           }
//           getAllPurchasings(e) {
//             const t = Object.assign(Object.assign({}, e), {
//                 locale: this.store.selectSnapshot(n.b.currentLanguage).key,
//               }),
//               c = Object(n.x)(t);
//             return this.http
//               .get("" + a.listInvitation, {
//                 params: c,
//               })
//               .pipe(Object(s.a)((e) => e));
//           }
//           getProcuringEntities() {
//             return this.http.get("" + a.getProcuringEntities);
//           }
//           getLotInPackageDetail(e) {
//             const t = Object.assign(Object.assign({}, e), {
//                 locale: this.store.selectSnapshot(n.b.currentLanguage).key,
//               }),
//               c = Object(n.x)(t);
//             return this.http
//               .get("" + a.getLotInPackageDetail, {
//                 params: c,
//               })
//               .pipe(Object(s.a)((e) => e));
//           }
//           getPurchasingDetail(e) {
//             return this.http.get(`${a.detailInvitation}/${e}`);
//           }
//           registerToBid(e) {
//             return this.http.post("" + a.registerToBid, e);
//           }
//           registerBookmark(e) {
//             return this.http.post("" + a.registerBookmark, e);
//           }
//           selectTaxonomy() {
//             return this.http.get(a.getTaxonomies);
//           }
//           selectTaxonomyAsync(e, t) {
//             return this.http.post(a.getTaxonomiesChild, {
//               code: e,
//               order: t,
//             });
//           }
//         }
//         return (
//           (e.ɵfac = function (t) {
//             return new (t || e)(o.gc(d.c), o.gc(n.o), o.gc(i.h));
//           }),
//           (e.ɵprov = o.Sb({
//             token: e,
//             factory: e.ɵfac,
//           })),
//           e
//         );
//       })();
//     },
//     BVP5: function (e, t, c) {
//       "use strict";
//       c.d(t, "a", function () {
//         return X;
//       });
//       var n = c("Iq5M"),
//         i = c("AoU+"),
//         s = c("0Qy+"),
//         r = c("umQr"),
//         a = c("FLQ+"),
//         o = c("TpS0"),
//         d = c("qgVS"),
//         l = c("oIEy"),
//         u = c("HKMU"),
//         b = c("nn4Z"),
//         g = c("iYqt"),
//         p = c("9qbf"),
//         h = c("rwjT"),
//         f = c("9pXO"),
//         m = c("0lhZ"),
//         y = c("Tm5P");
//       const O = function (e) {
//         return ["detail", e];
//       };
//       function j(e, t) {
//         if (1 & e) {
//           const e = n.dc();
//           n.cc(0, "div", 4),
//             n.cc(1, "div", 13),
//             n.cc(2, "p", 14),
//             n.bd(3),
//             n.bc(),
//             n.bc(),
//             n.cc(4, "table", 15),
//             n.cc(5, "tr", 16),
//             n.cc(6, "td", 17),
//             n.bd(7),
//             n.bc(),
//             n.cc(8, "td", 18),
//             n.bd(9),
//             n.pc(10, "date"),
//             n.bc(),
//             n.bc(),
//             n.cc(11, "tr", 16),
//             n.cc(12, "td", 17),
//             n.bd(13),
//             n.bc(),
//             n.cc(14, "td", 18),
//             n.bd(15),
//             n.pc(16, "date"),
//             n.bc(),
//             n.bc(),
//             n.cc(17, "tr", 16),
//             n.cc(18, "td", 17),
//             n.bd(19),
//             n.bc(),
//             n.cc(20, "td", 18),
//             n.bd(21),
//             n.bc(),
//             n.bc(),
//             n.bc(),
//             n.cc(22, "div", 19),
//             n.cc(23, "div", 20),
//             n.cc(24, "a", 21),
//             n.kc("click", function () {
//               n.Oc(e);
//               const c = t.ngIf;
//               return n.oc(2).bookmark(null == c ? null : c.id);
//             }),
//             n.cc(25, "span", 22),
//             n.bd(26, " Bookmark "),
//             n.bc(),
//             n.bc(),
//             n.cc(27, "a", 23),
//             n.cc(28, "span", 22),
//             n.bd(29, " Show More "),
//             n.bc(),
//             n.bc(),
//             n.bc(),
//             n.bc(),
//             n.bc();
//         }
//         if (2 & e) {
//           const e = t.ngIf,
//             c = n.oc().$implicit;
//           n.Gb(3),
//             n.cd(null == e ? null : e.name),
//             n.Gb(4),
//             n.cd("Lot closing date"),
//             n.Gb(2),
//             n.cd(n.qc(10, 8, null == e ? null : e.submission_deadline)),
//             n.Gb(4),
//             n.cd("Lot opening date"),
//             n.Gb(2),
//             n.cd(n.qc(16, 10, null == e ? null : e.submission_deadline)),
//             n.Gb(4),
//             n.cd("Lot Description"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.description),
//             n.Gb(6),
//             n.xc("routerLink", n.Dc(12, O, c.id));
//         }
//       }
//       function k(e, t) {
//         if (
//           (1 & e && (n.cc(0, "div", 10), n.Zc(1, j, 30, 14, "div", 12), n.bc()),
//           2 & e)
//         ) {
//           const e = t.$implicit;
//           n.Gb(1), n.xc("ngIf", null == e ? null : e.lotInformation);
//         }
//       }
//       function x(e, t) {
//         1 & e && n.bd(0, " Related Bids ");
//       }
//       function I(e, t) {
//         if ((1 & e && (n.bd(0), n.pc(1, "async")), 2 & e)) {
//           const e = n.oc();
//           var c;
//           n.dd(
//             " ",
//             null == (c = n.qc(1, 1, e.selectedPurchasing$)) ||
//               null == c.lotInformation
//               ? null
//               : c.lotInformation.name,
//             " "
//           );
//         }
//       }
//       function v(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "tr", 16),
//             n.cc(1, "td", 35),
//             n.bd(2),
//             n.bc(),
//             n.cc(3, "td", 36),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc().ngIf;
//           n.Gb(2),
//             n.cd("Description"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.description);
//         }
//       }
//       function P(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Country:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.cd(null == e || null == e.address ? null : e.address.country);
//         }
//       }
//       function G(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Town:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4), n.cd(null == e || null == e.address ? null : e.address.town);
//         }
//       }
//       function L(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Street:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.cd(null == e || null == e.address ? null : e.address.street);
//         }
//       }
//       function q(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Postal code:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.cd(null == e || null == e.address ? null : e.address.postCode);
//         }
//       }
//       function C(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Room Number:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.cd(null == e || null == e.address ? null : e.address.roomNumber);
//         }
//       }
//       function w(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Telephone:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.ed(
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
//       function T(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Email:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.cd(null == e || null == e.address ? null : e.address.email);
//         }
//       }
//       function R(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Po Box:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.cd(null == e || null == e.address ? null : e.address.poBox);
//         }
//       }
//       function E(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "p", 44),
//             n.cc(1, "span", 14),
//             n.bd(2, "Fax:"),
//             n.bc(),
//             n.cc(3, "span"),
//             n.bd(4),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(2).ngIf;
//           n.Gb(4),
//             n.cd(null == e || null == e.address ? null : e.address.facsimile);
//         }
//       }
//       function S(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "td", 40),
//             n.cc(1, "div", 41),
//             n.Zc(2, P, 5, 1, "p", 42),
//             n.Zc(3, G, 5, 1, "p", 42),
//             n.Zc(4, L, 5, 1, "p", 42),
//             n.bc(),
//             n.cc(5, "div", 43),
//             n.Zc(6, q, 5, 1, "p", 42),
//             n.Zc(7, C, 5, 1, "p", 42),
//             n.Zc(8, w, 5, 2, "p", 42),
//             n.bc(),
//             n.cc(9, "div", 43),
//             n.Zc(10, T, 5, 1, "p", 42),
//             n.Zc(11, R, 5, 1, "p", 42),
//             n.Zc(12, E, 5, 1, "p", 42),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc().ngIf;
//           n.Gb(2),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.country
//             ),
//             n.Gb(1),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.town
//             ),
//             n.Gb(1),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.street
//             ),
//             n.Gb(2),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.postCode
//             ),
//             n.Gb(1),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.roomNumber
//             ),
//             n.Gb(1),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.telephone
//             ),
//             n.Gb(2),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.email
//             ),
//             n.Gb(1),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.poBox
//             ),
//             n.Gb(1),
//             n.xc(
//               "ngIf",
//               null == e || null == e.address ? null : e.address.facsimile
//             );
//         }
//       }
//       function B(e, t) {
//         1 & e && (n.cc(0, "td", 36), n.bd(1, "-"), n.bc());
//       }
//       function A(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "table", 34),
//             n.cc(1, "tr", 16),
//             n.cc(2, "td", 35),
//             n.bd(3),
//             n.bc(),
//             n.cc(4, "td", 36),
//             n.bd(5),
//             n.bc(),
//             n.bc(),
//             n.cc(6, "tr", 16),
//             n.cc(7, "td", 35),
//             n.bd(8),
//             n.bc(),
//             n.cc(9, "td", 36),
//             n.bd(10),
//             n.bc(),
//             n.bc(),
//             n.Zc(11, v, 5, 2, "tr", 37),
//             n.cc(12, "tr", 16),
//             n.cc(13, "td", 35),
//             n.bd(14),
//             n.bc(),
//             n.cc(15, "td", 36),
//             n.bd(16),
//             n.bc(),
//             n.bc(),
//             n.cc(17, "tr", 16),
//             n.cc(18, "td", 35),
//             n.bd(19),
//             n.bc(),
//             n.cc(20, "td", 36),
//             n.bd(21),
//             n.bc(),
//             n.bc(),
//             n.cc(22, "tr", 16),
//             n.cc(23, "td", 35),
//             n.bd(24),
//             n.bc(),
//             n.cc(25, "td", 36),
//             n.bd(26),
//             n.bc(),
//             n.bc(),
//             n.cc(27, "tr", 16),
//             n.cc(28, "td", 35),
//             n.bd(29),
//             n.bc(),
//             n.cc(30, "td", 36),
//             n.bd(31),
//             n.bc(),
//             n.bc(),
//             n.cc(32, "tr", 16),
//             n.cc(33, "td", 35),
//             n.bd(34),
//             n.bc(),
//             n.cc(35, "td", 36),
//             n.bd(36),
//             n.bc(),
//             n.bc(),
//             n.cc(37, "tr", 16),
//             n.cc(38, "td", 35),
//             n.bd(39),
//             n.bc(),
//             n.cc(40, "td", 36),
//             n.bd(41),
//             n.pc(42, "date"),
//             n.bc(),
//             n.bc(),
//             n.cc(43, "tr", 16),
//             n.cc(44, "td", 35),
//             n.bd(45),
//             n.bc(),
//             n.cc(46, "td", 36),
//             n.bd(47),
//             n.pc(48, "date"),
//             n.bc(),
//             n.bc(),
//             n.cc(49, "tr"),
//             n.cc(50, "td", 35),
//             n.bd(51),
//             n.pc(52, "translate"),
//             n.bc(),
//             n.Zc(53, S, 13, 9, "td", 38),
//             n.Zc(54, B, 2, 0, "td", 39),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = t.ngIf;
//           n.Gb(3),
//             n.cd("Procurement Reference Number"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.reference_no),
//             n.Gb(3),
//             n.cd("Object of Procurement"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.name),
//             n.Gb(1),
//             n.xc("ngIf", null == e ? null : e.description),
//             n.Gb(3),
//             n.cd("Award Type"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.award_type),
//             n.Gb(3),
//             n.cd("Procurement Type"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.procurement_type),
//             n.Gb(3),
//             n.cd("Procurement Method"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.procurement_method),
//             n.Gb(3),
//             n.cd("Market Type"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.market_type),
//             n.Gb(3),
//             n.cd("Procuring Entity"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.procuring_entity),
//             n.Gb(3),
//             n.cd("Clarification Request Deadline"),
//             n.Gb(2),
//             n.cd(
//               n.rc(
//                 42,
//                 22,
//                 null == e ? null : e.clarification_deadline,
//                 "medium"
//               )
//             ),
//             n.Gb(4),
//             n.cd("Bid Submission Deadline"),
//             n.Gb(2),
//             n.cd(
//               n.rc(48, 25, null == e ? null : e.submission_deadline, "medium")
//             ),
//             n.Gb(4),
//             n.cd(n.qc(52, 28, "Portal.Address")),
//             n.Gb(2),
//             n.xc("ngIf", null == e ? null : e.address),
//             n.Gb(1),
//             n.xc("ngIf", !(null != e && e.address));
//         }
//       }
//       function M(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "table", 34),
//             n.cc(1, "tr"),
//             n.cc(2, "td", 35),
//             n.bd(3),
//             n.bc(),
//             n.cc(4, "td", 36),
//             n.bd(5),
//             n.bc(),
//             n.bc(),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = t.ngIf;
//           n.Gb(3),
//             n.cd("Terms and Conditions"),
//             n.Gb(2),
//             n.cd(null == e ? null : e.termsAndConditions);
//         }
//       }
//       function z(e, t) {
//         if ((1 & e && n.Xb(0, "nz-alert", 45), 2 & e)) {
//           n.oc();
//           const e = n.Mc(20);
//           n.xc("nzMessage", e);
//         }
//       }
//       function Z(e, t) {
//         1 & e &&
//           (n.cc(0, "span", 46),
//           n.bd(
//             1,
//             " Please complete your supplier registration in-order to register on available quotations. "
//           ),
//           n.cc(2, "a", 47),
//           n.bd(3, " Click here to register "),
//           n.bc(),
//           n.bc());
//       }
//       function F(e, t) {
//         1 & e &&
//           (n.cc(0, "p"),
//           n.bd(
//             1,
//             " You are not allowed to register to this quotation because you are debarred by the public authority please for more information goto your company list and click on the company and see the reason for your debarment. "
//           ),
//           n.bc());
//       }
//       function D(e, t) {
//         if (
//           (1 & e &&
//             (n.ac(0),
//             n.Xb(1, "nz-alert", 49),
//             n.Zc(2, F, 2, 0, "ng-template", null, 50, n.ad),
//             n.Zb()),
//           2 & e)
//         ) {
//           const e = n.Mc(3);
//           n.Gb(1), n.xc("nzMessage", e);
//         }
//       }
//       function $(e, t) {
//         if (
//           (1 & e && (n.ac(0), n.Zc(1, D, 4, 1, "ng-container", 32), n.Zb()),
//           2 & e)
//         ) {
//           const e = t.ngIf;
//           n.oc();
//           const c = n.Mc(4);
//           n.Gb(1),
//             n.xc("ngIf", "active" !== (null == e ? null : e.status))(
//               "ngIfElse",
//               c
//             );
//         }
//       }
//       function _(e, t) {
//         if (1 & e) {
//           const e = n.dc();
//           n.cc(0, "button", 53),
//             n.kc("click", function () {
//               n.Oc(e);
//               const c = t.ngIf;
//               return n.oc(4).registerToBid(c);
//             }),
//             n.pc(1, "async"),
//             n.bd(2, " Register "),
//             n.bc();
//         }
//         if (2 & e) {
//           const e = n.oc(4);
//           n.xc(
//             "disabled",
//             (e.currentOrganization &&
//               "Customer Organization" === e.currentOrganization.name.en) ||
//               e.payment ||
//               "active" !== n.qc(1, 1, e.currentEconomicOperator$).status
//           );
//         }
//       }
//       function Q(e, t) {
//         if (
//           (1 & e &&
//             (n.cc(0, "div", 51),
//             n.Zc(1, _, 3, 3, "button", 52),
//             n.pc(2, "async"),
//             n.bc()),
//           2 & e)
//         ) {
//           const e = n.oc(3);
//           n.Gb(1), n.xc("ngIf", n.qc(2, 1, e.selectedPurchasing$));
//         }
//       }
//       function H(e, t) {
//         if (
//           (1 & e &&
//             (n.ac(0),
//             n.Zc(1, $, 2, 2, "ng-container", 11),
//             n.pc(2, "async"),
//             n.Zc(3, Q, 3, 3, "ng-template", null, 48, n.ad),
//             n.Zb()),
//           2 & e)
//         ) {
//           const e = n.oc(2);
//           n.Gb(1), n.xc("ngIf", n.qc(2, 1, e.currentEconomicOperator$));
//         }
//       }
//       function N(e, t) {
//         1 & e &&
//           (n.cc(0, "p"),
//           n.bd(1, "The selected bid submission deadline has passed!"),
//           n.bc());
//       }
//       function U(e, t) {
//         if (
//           (1 & e &&
//             (n.Xb(0, "nz-alert", 45),
//             n.Zc(1, N, 2, 0, "ng-template", null, 54, n.ad)),
//           2 & e)
//         ) {
//           const e = n.Mc(2);
//           n.xc("nzMessage", e);
//         }
//       }
//       function W(e, t) {
//         if (
//           (1 & e &&
//             (n.ac(0),
//             n.cc(1, "div", 16),
//             n.cc(2, "div", 24),
//             n.cc(3, "div", 25),
//             n.cc(4, "p", 26),
//             n.bd(5, "Lot Information"),
//             n.bc(),
//             n.bc(),
//             n.cc(6, "div", 27),
//             n.cc(7, "div", 28),
//             n.Zc(8, A, 55, 30, "table", 29),
//             n.pc(9, "async"),
//             n.bc(),
//             n.bc(),
//             n.bc(),
//             n.cc(10, "div", 24),
//             n.cc(11, "div", 25),
//             n.cc(12, "p", 26),
//             n.bd(13, "Notice"),
//             n.bc(),
//             n.bc(),
//             n.cc(14, "div", 27),
//             n.cc(15, "div", 28),
//             n.Zc(16, M, 6, 2, "table", 29),
//             n.pc(17, "async"),
//             n.bc(),
//             n.bc(),
//             n.bc(),
//             n.Zc(18, z, 1, 1, "nz-alert", 30),
//             n.Zc(19, Z, 4, 0, "ng-template", null, 31, n.ad),
//             n.Zc(21, H, 5, 3, "ng-container", 32),
//             n.Zc(22, U, 3, 1, "ng-template", null, 33, n.ad),
//             n.bc(),
//             n.Zb()),
//           2 & e)
//         ) {
//           const e = n.Mc(23),
//             t = n.oc();
//           var c;
//           const s =
//             null == (c = n.qc(9, 5, t.selectedPurchasing$))
//               ? null
//               : c.lotInformation;
//           var i;
//           const r =
//             null == (i = n.qc(17, 7, t.selectedPurchasing$)) ||
//             null == i.purchaseRequestDefinition
//               ? null
//               : i.purchaseRequestDefinition.terms_and_conditions;
//           n.Gb(8),
//             n.xc("ngIf", s),
//             n.Gb(8),
//             n.xc("ngIf", r),
//             n.Gb(2),
//             n.xc(
//               "ngIf",
//               t.currentOrganization &&
//                 "Customer Organization" === t.currentOrganization.name.en
//             ),
//             n.Gb(3),
//             n.xc("ngIf", t.isSubmittable)("ngIfElse", e);
//         }
//       }
//       function J(e, t) {
//         if ((1 & e && (n.bd(0), n.pc(1, "async")), 2 & e)) {
//           const e = n.oc();
//           var c;
//           n.dd(
//             " ",
//             null == (c = n.qc(1, 1, e.selectedPurchasing$)) ||
//               null == c.lotInformation
//               ? null
//               : c.lotInformation.name,
//             " "
//           );
//         }
//       }
//       let X = (() => {
//         class e extends i.d {
//           constructor(e, t, c, s, o, d, l, u) {
//             super(),
//               (this.activatedRouter = e),
//               (this.logger = t),
//               (this.router = c),
//               (this.cd = s),
//               (this.facade = o),
//               (this.tenderFacade = d),
//               (this.location = l),
//               (this.store = u),
//               (this.selectedLots = new n.o()),
//               (this.isCollapsed = !1),
//               (this.isSubmittable = !1),
//               (this.selectedPurchasing$ = this.facade.selectedPurchasing$),
//               (this.currentEconomicOperator$ =
//                 this.tenderFacade.currentEconomicOperator$),
//               (this.items$ = this.facade.items$),
//               (this.collectionQuery = {
//                 skip: 0,
//                 top: 10,
//                 orderBy: [],
//               }),
//               (this.isFullscreen = !1),
//               (this.selectedHelper = "none"),
//               (this.helper = a.a),
//               (this.viewDetail = !1),
//               (this.checked = !1),
//               (this.indeterminate = !1),
//               (this.listOfCurrentPageData = []),
//               (this.listOfData = []),
//               (this.setOfCheckedId = []),
//               this.store
//                 .select(i.b.currentOrganization)
//                 .pipe(Object(r.a)(this.ngUnsubscribe))
//                 .subscribe((e) => {
//                   (this.currentOrganization = e),
//                     this.currentOrganization &&
//                       this.tenderFacade.myCompany(this.currentOrganization.id);
//                 });
//           }
//           onItemChecked(e, t) {
//             this.updateCheckedSet(e, t), this.refreshCheckedStatus();
//           }
//           updateCheckedSet(e, t) {
//             t
//               ? (this.setOfCheckedId.push(e),
//                 this.logger.log("the ids are :", this.setOfCheckedId))
//               : (this.setOfCheckedId = this.setOfCheckedId.filter(
//                   (t) => t !== e
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
//               this.tenderFacade.getCurrentEconomicOperator(),
//               this.facade.listPurchasings(this.collectionQuery),
//               this.activatedRouter.paramMap
//                 .pipe(Object(r.a)(this.ngUnsubscribe))
//                 .subscribe((e) => {
//                   this.facade.detailPurchasing(e.get("id")),
//                     (this.isSubmittable = "open" === e.get("status"));
//                 });
//           }
//           bookmark(e) {
//             this.logger.log("register...", e),
//               this.facade.registerBookmark({
//                 quotationRequestId: e.quotationRequestId,
//                 quatationRequestName: e.lotInformation.name,
//               });
//           }
//           registerToBid(e) {
//             this.logger.log("register...", e),
//               this.facade.registerToBid({
//                 quatationRequestId: e.quotationRequestId,
//                 quatationRequestName: e.lotInformation.name,
//               });
//           }
//           onHelperChange(e) {
//             this.selectedHelper = e;
//           }
//           onCloseHelper() {
//             this.selectedHelper = "none";
//           }
//           onReturnBack() {
//             this.router.navigate(["purchasing"]);
//           }
//           onHeaderChange(e) {
//             (this.headerChanged = e),
//               this.cd.markForCheck(),
//               this.cd.detectChanges();
//           }
//           backClicked() {
//             this.location.back();
//           }
//           trackByFn(e, t) {
//             return t && t.id ? t.id : e;
//           }
//         }
//         return (
//           (e.ɵfac = function (t) {
//             return new (t || e)(
//               n.Wb(l.a),
//               n.Wb(i.o),
//               n.Wb(l.h),
//               n.Wb(n.i),
//               n.Wb(o.a),
//               n.Wb(d.a),
//               n.Wb(u.n),
//               n.Wb(s.h)
//             );
//           }),
//           (e.ɵcmp = n.Qb({
//             type: e,
//             selectors: [["egp-portal-detail"]],
//             outputs: {
//               selectedLots: "selectedLots",
//             },
//             features: [n.Db],
//             decls: 18,
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
//               [1, "flex", "flex-col", "flex-1"],
//               ["class", "block my-3", 4, "ngFor", "ngForOf", "ngForTrackBy"],
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
//               ["mainTitleBar", ""],
//               [1, "z-0", "flex-1"],
//               [1, "block", "my-3"],
//               [4, "ngIf"],
//               ["class", "flex flex-col flex-1", 4, "ngIf"],
//               [
//                 1,
//                 "flex",
//                 "px-2",
//                 "py-2",
//                 "text-sm",
//                 "text-gray-600",
//                 "bg-gray-100",
//                 "border",
//                 "border-b-0",
//                 "border-gray-400",
//                 "rounded-t",
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
//                 "px-6",
//                 "py-2",
//                 "text-xs",
//                 "text-gray-600",
//                 "bg-gray-100",
//                 "border",
//                 "border-t-0",
//                 "border-gray-400",
//                 "rounded-b",
//               ],
//               [1, "flex", "justify-end"],
//               [
//                 1,
//                 "flex",
//                 "items-center",
//                 "justify-center",
//                 "text-xs",
//                 "font-medium",
//                 "rounded-lg",
//                 "cursor-pointer",
//                 3,
//                 "click",
//               ],
//               [
//                 1,
//                 "inline-block",
//                 "w-auto",
//                 "px-6",
//                 "py-1",
//                 "mr-3",
//                 "font-semibold",
//                 "text-center",
//                 "text-gray-700",
//                 "bg-white",
//                 "border",
//                 "border-gray-500",
//                 "rounded-full",
//                 "hover:bg-gray-200",
//               ],
//               [
//                 "routerLinkActive",
//                 "router-link-active",
//                 1,
//                 "flex",
//                 "items-center",
//                 "justify-center",
//                 "text-xs",
//                 "font-medium",
//                 "rounded-lg",
//                 "cursor-pointer",
//                 3,
//                 "routerLink",
//               ],
//               [
//                 1,
//                 "px-3",
//                 "pt-3",
//                 "m-3",
//                 "bg-white",
//                 "border",
//                 "border-gray-400",
//                 "rounded",
//               ],
//               [1, "flex", "justify-between"],
//               [1, "font-semibold", "text-gray-600", "text-normal"],
//               [1, "pt-2", "-mx-3", "text-gray-600"],
//               [1, "border-t", "border-b"],
//               ["class", "w-full mb-0", 4, "ngIf"],
//               ["nzType", "info", "class", "my-2", 3, "nzMessage", 4, "ngIf"],
//               ["alertMessageRegistration", ""],
//               [4, "ngIf", "ngIfElse"],
//               ["closed", ""],
//               [1, "w-full", "mb-0"],
//               [1, "w-1/4", "p-3", "font-semibold", "bg-gray-100", "border-r"],
//               [1, "p-3"],
//               [
//                 "class",
//                 "border border-t-0 border-l-0 border-r-0 border-dashed",
//                 4,
//                 "ngIf",
//               ],
//               ["class", "p-3 flex justify-between space-x-2", 4, "ngIf"],
//               ["class", "p-3", 4, "ngIf"],
//               [1, "p-3", "flex", "justify-between", "space-x-2"],
//               [1, "border-l-2", "border-r-2", "px-2", "w-full"],
//               ["class", "p-2 flex space-x-2", 4, "ngIf"],
//               [1, "border-l-2", "border-r-2", "px-2"],
//               [1, "p-2", "flex", "space-x-2"],
//               ["nzType", "info", 1, "my-2", 3, "nzMessage"],
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
//                 "mx-3",
//                 "mt-2",
//                 "mb-6",
//                 "text-gray-600",
//                 "bg-gray-200",
//                 "border",
//                 "border-gray-400",
//                 "rounded",
//               ],
//               [
//                 "nzType",
//                 "primary",
//                 "nz-button",
//                 "",
//                 3,
//                 "disabled",
//                 "click",
//                 4,
//                 "ngIf",
//               ],
//               ["nzType", "primary", "nz-button", "", 3, "disabled", "click"],
//               ["closedMessage", ""],
//             ],
//             template: function (e, t) {
//               if (
//                 (1 & e &&
//                   (n.cc(0, "div", 0),
//                   n.cc(1, "div", 1),
//                   n.cc(2, "div", 2),
//                   n.cc(3, "nz-card", 3),
//                   n.cc(4, "div", 4),
//                   n.Zc(5, k, 2, 1, "div", 5),
//                   n.pc(6, "async"),
//                   n.bc(),
//                   n.bc(),
//                   n.Zc(7, x, 1, 0, "ng-template", null, 6, n.ad),
//                   n.bc(),
//                   n.cc(9, "nz-card", 7),
//                   n.Zc(10, I, 2, 3, "ng-template", null, 8, n.ad),
//                   n.cc(12, "div", 9),
//                   n.cc(13, "div", 10),
//                   n.Zc(14, W, 24, 9, "ng-container", 11),
//                   n.pc(15, "async"),
//                   n.bc(),
//                   n.bc(),
//                   n.bc(),
//                   n.Zc(16, J, 2, 3, "ng-template", null, 8, n.ad),
//                   n.bc(),
//                   n.bc()),
//                 2 & e)
//               ) {
//                 const e = n.Mc(8),
//                   c = n.Mc(11);
//                 n.Gb(3),
//                   n.xc("nzTitle", e),
//                   n.Gb(2),
//                   n.xc("ngForOf", n.qc(6, 5, t.items$))(
//                     "ngForTrackBy",
//                     t.trackByFn
//                   ),
//                   n.Gb(4),
//                   n.xc("nzTitle", c),
//                   n.Gb(5),
//                   n.xc("ngIf", n.qc(15, 7, t.selectedPurchasing$));
//               }
//             },
//             directives: [b.a, u.s, u.t, g.q, g.f, l.k, l.j, p.a, h.a, f.a, m.a],
//             pipes: [u.b, u.f, y.e],
//             styles: [
//               ".ant-menu[_ngcontent-%COMP%]{background-color:#f8fcfc}.min-h[_ngcontent-%COMP%]{min-height:400px}.fl-rt[_ngcontent-%COMP%]{float:right;justify-content:right}.hide[_ngcontent-%COMP%]{display:none}.row[_ngcontent-%COMP%]:hover + .hide[_ngcontent-%COMP%]{display:block}",
//             ],
//           })),
//           e
//         );
//       })();
//     },
//     "FLQ+": function (e, t, c) {
//       "use strict";
//       c.d(t, "a", function () {
//         return i;
//       });
//       var n = c("AoU+");
//       const i = {
//         help: Object(n.v)("PAGE_HEADER.Help"),
//         correspondence: Object(n.v)("PAGE_HEADER.correspondence"),
//         audit: Object(n.v)("PAGE_HEADER.activity-audit"),
//         none: Object(n.v)("PAGE_HEADER.none"),
//       };
//     },
//     TpS0: function (e, t, c) {
//       "use strict";
//       c.d(t, "a", function () {
//         return l;
//       });
//       var n = c("UNrv"),
//         i = c("AoU+"),
//         s = c("0Qy+"),
//         r = c("8so3"),
//         a = c("3GdC"),
//         o = c("3uam"),
//         d = c("Iq5M");
//       let l = (() => {
//         class e {
//           constructor(e, t, c) {
//             (this.logger = e),
//               (this.store = t),
//               (this.aggregateRootApi = c),
//               (this.collectionQuery$ = this.store.select(o.a.collectionQuery)),
//               (this.total$ = this.store.select(o.a.total)),
//               (this.items$ = this.store.select(o.a.items)),
//               (this.procuringEntities$ = this.store.select(
//                 o.a.procuringEntities
//               )),
//               (this.nodes$ = this.store.select(o.a.nodes)),
//               (this.selectedPurchasing$ = this.store.select(
//                 o.a.selectedPurchasing
//               )),
//               (this.selectedLot$ = this.store.select(o.a.selectedLot));
//           }
//           listPurchasings(e) {
//             this.store.dispatch(new a.d(e));
//           }
//           listProcuringEntities() {
//             this.store.dispatch(new a.c());
//           }
//           detailPurchasing(e) {
//             this.store.dispatch(new a.a(e));
//           }
//           registerToBid(e) {
//             this.store.dispatch(new a.f(e));
//           }
//           registerBookmark(e) {
//             this.store.dispatch(new a.e(e));
//           }
//           getNodes(e, t) {
//             this.store.dispatch(new a.b(e, t));
//           }
//           getNodesAsync(e, t) {
//             return Object(n.a)(this, void 0, void 0, function* () {
//               return new Promise((c, n) => {
//                 this.aggregateRootApi
//                   .selectTaxonomyAsync(e, t)
//                   .toPromise()
//                   .then((t) => {
//                     const n = t.items.map((e) => {
//                       let t = !1;
//                       return (
//                         e.data.order || (t = !0),
//                         {
//                           title: e.data.name,
//                           key: e.data.code,
//                           order: e.data.order,
//                           isLeaf: t,
//                           children: [],
//                         }
//                       );
//                     });
//                     this.logger.log("The data that I dispatch is: ", {
//                       parent: e,
//                       children: n,
//                     }),
//                       c(n);
//                   });
//               });
//             });
//           }
//         }
//         return (
//           (e.ɵfac = function (t) {
//             return new (t || e)(d.gc(i.o), d.gc(s.h), d.gc(r.a));
//           }),
//           (e.ɵprov = d.Sb({
//             token: e,
//             factory: e.ɵfac,
//             providedIn: "root",
//           })),
//           e
//         );
//       })();
//     },
//   },
// ]);
