(function () {
  var s = {};
  (function () {
    /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var c =
        {},
      f = this || self;
    var l = /#|$/;
    function n(d) {
      var g = d.search(l),
        a;
      a: {
        for (a = 0; 0 <= (a = d.indexOf('fmt', a)) && a < g; ) {
          var b = d.charCodeAt(a - 1);
          if (38 == b || 63 == b)
            if (
              ((b = d.charCodeAt(a + 3)), !b || 61 == b || 38 == b || 35 == b)
            )
              break a;
          a += 4;
        }
        a = -1;
      }
      if (0 > a) return null;
      b = d.indexOf('&', a);
      if (0 > b || b > g) b = g;
      a += 4;
      return decodeURIComponent(d.substr(a, b - a).replace(/\+/g, ' '));
    }
    function r(d, g, a) {
      function b() {
        --p;
        if (0 >= p) {
          var e;
          (e = d.GooglebQhCsO) || (e = {});
          var q = e[g];
          q && (delete e[g], (e = q[0]) && e.call && e());
        }
      }
      for (var p = a.length + 1, m = 0; m < a.length; m++) {
        var h = n(a[m]),
          k = null;
        (1 != h && 2 != h) ||
          !(h = d.document.getElementById('goog_conv_iframe')) ||
          h.src ||
          (k = h);
        k || (k = new Image());
        k.onload = b;
        k.src = a[m];
      }
      b();
    }
    var t = ['ss_'],
      u = s || f;
    t[0] in u ||
      'undefined' == typeof u.execScript ||
      u.execScript('var ' + t[0]);
    for (var v; t.length && (v = t.shift()); )
      t.length || void 0 === r
        ? u[v] && u[v] !== Object.prototype[v]
          ? (u = u[v])
          : (u = u[v] = {})
        : (u[v] = r);
  }.call(this));
  s.ss_(window, 'OjE2MjQ2MTQ5MzA4Mjg', [
    'https://www.google.com/pagead/1p-user-list/579918601/?random\x3d1624614930828\x26cv\x3d9\x26fst\x3d1624611600000\x26num\x3d1\x26guid\x3dON\x26eid\x3d2505059651\x26u_h\x3d1080\x26u_w\x3d2560\x26u_ah\x3d1080\x26u_aw\x3d2560\x26u_cd\x3d24\x26u_his\x3d2\x26u_tz\x3d420\x26u_java\x3dfalse\x26u_nplug\x3d0\x26u_nmime\x3d0\x26gtm\x3d2wg6n0\x26sendb\x3d1\x26frm\x3d0\x26url\x3dhttps%3A%2F%2Fnhapho.MI DESIGN.com.vn%2F\x26tiba\x3dThi%E1%BA%BFt%20k%E1%BA%BF%2C%20thi%20c%C3%B4ng%20nh%C3%A0%20ph%E1%BB%91%20hi%E1%BB%87n%20%C4%91%E1%BA%A1i%20gi%C3%A1%20r%E1%BA%BB\x26async\x3d1\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2666112014\x26resp\x3dGooglemKTybQhCsO\x26rmt_tld\x3d0\x26ipr\x3dy',
    'https://www.google.com.vn/pagead/1p-user-list/579918601/?random\x3d1624614930828\x26cv\x3d9\x26fst\x3d1624611600000\x26num\x3d1\x26guid\x3dON\x26eid\x3d2505059651\x26u_h\x3d1080\x26u_w\x3d2560\x26u_ah\x3d1080\x26u_aw\x3d2560\x26u_cd\x3d24\x26u_his\x3d2\x26u_tz\x3d420\x26u_java\x3dfalse\x26u_nplug\x3d0\x26u_nmime\x3d0\x26gtm\x3d2wg6n0\x26sendb\x3d1\x26frm\x3d0\x26url\x3dhttps%3A%2F%2Fnhapho.MI DESIGN.com.vn%2F\x26tiba\x3dThi%E1%BA%BFt%20k%E1%BA%BF%2C%20thi%20c%C3%B4ng%20nh%C3%A0%20ph%E1%BB%91%20hi%E1%BB%87n%20%C4%91%E1%BA%A1i%20gi%C3%A1%20r%E1%BA%BB\x26async\x3d1\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2666112014\x26resp\x3dGooglemKTybQhCsO\x26rmt_tld\x3d1\x26ipr\x3dy',
  ]);
})();
