200!==$response.statusCode&&$done(null);const citytest=/[a-zA-Z]+[a-zA-Z]+/;function longCheck(...e){let o=e.filter(({length:e})=>e>1&&e<31);return o.length>0?o[0]:e[e.length-1]}function letterCheck(e,o,t){let i=[e,o,t].filter(e=>!citytest.test(e)&&e.length>1);return i[0]||t}function placeAdder(e){return e&&!citytest.test(e)?` ${e}`:""}function geticon(e,o){return e?`${o} `:""}const flags=new Map([["AC","\uD83C\uDDE6\uD83C\uDDE8"],["AD","\uD83C\uDDE6\uD83C\uDDE9"],["AE","\uD83C\uDDE6\uD83C\uDDEA"],["AF","\uD83C\uDDE6\uD83C\uDDEB"],["AG","\uD83C\uDDE6\uD83C\uDDEC"],["AI","\uD83C\uDDE6\uD83C\uDDEE"],["AL","\uD83C\uDDE6\uD83C\uDDF1"],["AM","\uD83C\uDDE6\uD83C\uDDF2"],["AO","\uD83C\uDDE6\uD83C\uDDF4"],["AQ","\uD83C\uDDE6\uD83C\uDDF6"],["AR","\uD83C\uDDE6\uD83C\uDDF7"],["AS","\uD83C\uDDE6\uD83C\uDDF8"],["AT","\uD83C\uDDE6\uD83C\uDDF9"],["AU","\uD83C\uDDE6\uD83C\uDDFA"],["AW","\uD83C\uDDE6\uD83C\uDDFC"],["AX","\uD83C\uDDE6\uD83C\uDDFD"],["AZ","\uD83C\uDDE6\uD83C\uDDFF"],["BA","\uD83C\uDDE7\uD83C\uDDE6"],["BB","\uD83C\uDDE7\uD83C\uDDE7"],["BD","\uD83C\uDDE7\uD83C\uDDE9"],["BE","\uD83C\uDDE7\uD83C\uDDEA"],["BF","\uD83C\uDDE7\uD83C\uDDEB"],["BG","\uD83C\uDDE7\uD83C\uDDEC"],["BH","\uD83C\uDDE7\uD83C\uDDED"],["BI","\uD83C\uDDE7\uD83C\uDDEE"],["BJ","\uD83C\uDDE7\uD83C\uDDEF"],["BM","\uD83C\uDDE7\uD83C\uDDF2"],["BN","\uD83C\uDDE7\uD83C\uDDF3"],["BO","\uD83C\uDDE7\uD83C\uDDF4"],["BR","\uD83C\uDDE7\uD83C\uDDF7"],["BS","\uD83C\uDDE7\uD83C\uDDF8"],["BT","\uD83C\uDDE7\uD83C\uDDF9"],["BV","\uD83C\uDDE7\uD83C\uDDFB"],["BW","\uD83C\uDDE7\uD83C\uDDFC"],["BY","\uD83C\uDDE7\uD83C\uDDFE"],["BZ","\uD83C\uDDE7\uD83C\uDDFF"],["CA","\uD83C\uDDE8\uD83C\uDDE6"],["CD","\uD83C\uDDE8\uD83C\uDDE9"],["CF","\uD83C\uDDE8\uD83C\uDDEB"],["CG","\uD83C\uDDE8\uD83C\uDDEC"],["CH","\uD83C\uDDE8\uD83C\uDDED"],["CI","\uD83C\uDDE8\uD83C\uDDEE"],["CK","\uD83C\uDDE8\uD83C\uDDF0"],["CL","\uD83C\uDDE8\uD83C\uDDF1"],["CM","\uD83C\uDDE8\uD83C\uDDF2"],["CN","\uD83C\uDDE8\uD83C\uDDF3"],["CO","\uD83C\uDDE8\uD83C\uDDF4"],["CP","\uD83C\uDDE8\uD83C\uDDF5"],["CR","\uD83C\uDDE8\uD83C\uDDF7"],["CU","\uD83C\uDDE8\uD83C\uDDFA"],["CV","\uD83C\uDDE8\uD83C\uDDFB"],["CW","\uD83C\uDDE8\uD83C\uDDFC"],["CX","\uD83C\uDDE8\uD83C\uDDFD"],["CY","\uD83C\uDDE8\uD83C\uDDFE"],["CZ","\uD83C\uDDE8\uD83C\uDDFF"],["DE","\uD83C\uDDE9\uD83C\uDDEA"],["DG","\uD83C\uDDE9\uD83C\uDDEC"],["DJ","\uD83C\uDDE9\uD83C\uDDEF"],["DK","\uD83C\uDDE9\uD83C\uDDF0"],["DM","\uD83C\uDDE9\uD83C\uDDF2"],["DO","\uD83C\uDDE9\uD83C\uDDF4"],["DZ","\uD83C\uDDE9\uD83C\uDDFF"],["EA","\uD83C\uDDEA\uD83C\uDDE6"],["EC","\uD83C\uDDEA\uD83C\uDDE8"],["EE","\uD83C\uDDEA\uD83C\uDDEA"],["EG","\uD83C\uDDEA\uD83C\uDDEC"],["EH","\uD83C\uDDEA\uD83C\uDDED"],["ER","\uD83C\uDDEA\uD83C\uDDF7"],["ES","\uD83C\uDDEA\uD83C\uDDF8"],["ET","\uD83C\uDDEA\uD83C\uDDF9"],["EU","\uD83C\uDDEA\uD83C\uDDFA"],["FI","\uD83C\uDDEB\uD83C\uDDEE"],["FJ","\uD83C\uDDEB\uD83C\uDDEF"],["FK","\uD83C\uDDEB\uD83C\uDDF0"],["FM","\uD83C\uDDEB\uD83C\uDDF2"],["FO","\uD83C\uDDEB\uD83C\uDDF4"],["FR","\uD83C\uDDEB\uD83C\uDDF7"],["GA","\uD83C\uDDEC\uD83C\uDDE6"],["GB","\uD83C\uDDEC\uD83C\uDDE7"],["GD","\uD83C\uDDEC\uD83C\uDDE9"],["GE","\uD83C\uDDEC\uD83C\uDDEA"],["GF","\uD83C\uDDEC\uD83C\uDDEB"],["GH","\uD83C\uDDEC\uD83C\uDDED"],["GI","\uD83C\uDDEC\uD83C\uDDEE"],["GL","\uD83C\uDDEC\uD83C\uDDF1"],["GM","\uD83C\uDDEC\uD83C\uDDF2"],["GN","\uD83C\uDDEC\uD83C\uDDF3"],["GP","\uD83C\uDDEC\uD83C\uDDF5"],["GR","\uD83C\uDDEC\uD83C\uDDF7"],["GT","\uD83C\uDDEC\uD83C\uDDF9"],["GU","\uD83C\uDDEC\uD83C\uDDFA"],["GW","\uD83C\uDDEC\uD83C\uDDFC"],["GY","\uD83C\uDDEC\uD83C\uDDFE"],["HK","\uD83C\uDDED\uD83C\uDDF0"],["HN","\uD83C\uDDED\uD83C\uDDF3"],["HR","\uD83C\uDDED\uD83C\uDDF7"],["HT","\uD83C\uDDED\uD83C\uDDF9"],["HU","\uD83C\uDDED\uD83C\uDDFA"],["ID","\uD83C\uDDEE\uD83C\uDDE9"],["IE","\uD83C\uDDEE\uD83C\uDDEA"],["IL","\uD83C\uDDEE\uD83C\uDDF1"],["IM","\uD83C\uDDEE\uD83C\uDDF2"],["IN","\uD83C\uDDEE\uD83C\uDDF3"],["IR","\uD83C\uDDEE\uD83C\uDDF7"],["IS","\uD83C\uDDEE\uD83C\uDDF8"],["IT","\uD83C\uDDEE\uD83C\uDDF9"],["JM","\uD83C\uDDEF\uD83C\uDDF2"],["JO","\uD83C\uDDEF\uD83C\uDDF4"],["JP","\uD83C\uDDEF\uD83C\uDDF5"],["KE","\uD83C\uDDF0\uD83C\uDDEA"],["KG","\uD83C\uDDF0\uD83C\uDDEC"],["KH","\uD83C\uDDF0\uD83C\uDDED"],["KI","\uD83C\uDDF0\uD83C\uDDEE"],["KM","\uD83C\uDDF0\uD83C\uDDF2"],["KN","\uD83C\uDDF0\uD83C\uDDF3"],["KP","\uD83C\uDDF0\uD83C\uDDF5"],["KR","\uD83C\uDDF0\uD83C\uDDF7"],["KW","\uD83C\uDDF0\uD83C\uDDFC"],["KY","\uD83C\uDDF0\uD83C\uDDFE"],["KZ","\uD83C\uDDF0\uD83C\uDDFF"],["LA","\uD83C\uDDF1\uD83C\uDDE6"],["LB","\uD83C\uDDF1\uD83C\uDDE7"],["LC","\uD83C\uDDF1\uD83C\uDDE8"],["LI","\uD83C\uDDF1\uD83C\uDDEE"],["LK","\uD83C\uDDF1\uD83C\uDDF0"],["LR","\uD83C\uDDF1\uD83C\uDDF7"],["LS","\uD83C\uDDF1\uD83C\uDDF8"],["LT","\uD83C\uDDF1\uD83C\uDDF9"],["LU","\uD83C\uDDF1\uD83C\uDDFA"],["LV","\uD83C\uDDF1\uD83C\uDDFB"],["LY","\uD83C\uDDF1\uD83C\uDDFE"],["MA","\uD83C\uDDF2\uD83C\uDDE6"],["MC","\uD83C\uDDF2\uD83C\uDDE8"],["MD","\uD83C\uDDF2\uD83C\uDDE9"],["MG","\uD83C\uDDF2\uD83C\uDDEC"],["MH","\uD83C\uDDF2\uD83C\uDDED"],["MK","\uD83C\uDDF2\uD83C\uDDF0"],["ML","\uD83C\uDDF2\uD83C\uDDF1"],["MM","\uD83C\uDDF2\uD83C\uDDF2"],["MN","\uD83C\uDDF2\uD83C\uDDF3"],["MO","\uD83C\uDDF2\uD83C\uDDF4"],["MP","\uD83C\uDDF2\uD83C\uDDF5"],["MQ","\uD83C\uDDF2\uD83C\uDDF6"],["MR","\uD83C\uDDF2\uD83C\uDDF7"],["MS","\uD83C\uDDF2\uD83C\uDDF8"],["MT","\uD83C\uDDF2\uD83C\uDDF9"],["MU","\uD83C\uDDF2\uD83C\uDDFA"],["MV","\uD83C\uDDF2\uD83C\uDDFB"],["MW","\uD83C\uDDF2\uD83C\uDDFC"],["MX","\uD83C\uDDF2\uD83C\uDDFD"],["MY","\uD83C\uDDF2\uD83C\uDDFE"],["MZ","\uD83C\uDDF2\uD83C\uDDFF"],["NA","\uD83C\uDDF3\uD83C\uDDE6"],["NC","\uD83C\uDDF3\uD83C\uDDE8"],["NE","\uD83C\uDDF3\uD83C\uDDEA"],["NF","\uD83C\uDDF3\uD83C\uDDEB"],["NG","\uD83C\uDDF3\uD83C\uDDEC"],["NI","\uD83C\uDDF3\uD83C\uDDEE"],["NL","\uD83C\uDDF3\uD83C\uDDF1"],["NO","\uD83C\uDDF3\uD83C\uDDF4"],["NP","\uD83C\uDDF3\uD83C\uDDF5"],["NR","\uD83C\uDDF3\uD83C\uDDF7"],["NZ","\uD83C\uDDF3\uD83C\uDDFF"],["OM","\uD83C\uDDF4\uD83C\uDDF2"],["PA","\uD83C\uDDF5\uD83C\uDDE6"],["PE","\uD83C\uDDF5\uD83C\uDDEA"],["PF","\uD83C\uDDF5\uD83C\uDDEB"],["PG","\uD83C\uDDF5\uD83C\uDDEC"],["PH","\uD83C\uDDF5\uD83C\uDDED"],["PK","\uD83C\uDDF5\uD83C\uDDF0"],["PL","\uD83C\uDDF5\uD83C\uDDF1"],["PM","\uD83C\uDDF5\uD83C\uDDF2"],["PR","\uD83C\uDDF5\uD83C\uDDF7"],["PS","\uD83C\uDDF5\uD83C\uDDF8"],["PT","\uD83C\uDDF5\uD83C\uDDF9"],["PW","\uD83C\uDDF5\uD83C\uDDFC"],["PY","\uD83C\uDDF5\uD83C\uDDFE"],["QA","\uD83C\uDDF6\uD83C\uDDE6"],["RE","\uD83C\uDDF7\uD83C\uDDEA"],["RO","\uD83C\uDDF7\uD83C\uDDF4"],["RS","\uD83C\uDDF7\uD83C\uDDF8"],["RU","\uD83C\uDDF7\uD83C\uDDFA"],["RW","\uD83C\uDDF7\uD83C\uDDFC"],["SA","\uD83C\uDDF8\uD83C\uDDE6"],["SB","\uD83C\uDDF8\uD83C\uDDE7"],["SC","\uD83C\uDDF8\uD83C\uDDE8"],["SD","\uD83C\uDDF8\uD83C\uDDE9"],["SE","\uD83C\uDDF8\uD83C\uDDEA"],["SG","\uD83C\uDDF8\uD83C\uDDEC"],["SI","\uD83C\uDDF8\uD83C\uDDEE"],["SK","\uD83C\uDDF8\uD83C\uDDF0"],["SL","\uD83C\uDDF8\uD83C\uDDF1"],["SM","\uD83C\uDDF8\uD83C\uDDF2"],["SN","\uD83C\uDDF8\uD83C\uDDF3"],["SR","\uD83C\uDDF8\uD83C\uDDF7"],["ST","\uD83C\uDDF8\uD83C\uDDF9"],["SV","\uD83C\uDDF8\uD83C\uDDFB"],["SY","\uD83C\uDDF8\uD83C\uDDFE"],["SZ","\uD83C\uDDF8\uD83C\uDDFF"],["TC","\uD83C\uDDF9\uD83C\uDDE8"],["TD","\uD83C\uDDF9\uD83C\uDDE9"],["TG","\uD83C\uDDF9\uD83C\uDDEC"],["TH","\uD83C\uDDF9\uD83C\uDDED"],["TJ","\uD83C\uDDF9\uD83C\uDDEF"],["TL","\uD83C\uDDF9\uD83C\uDDF1"],["TM","\uD83C\uDDF9\uD83C\uDDF2"],["TN","\uD83C\uDDF9\uD83C\uDDF3"],["TO","\uD83C\uDDF9\uD83C\uDDF4"],["TR","\uD83C\uDDF9\uD83C\uDDF7"],["TT","\uD83C\uDDF9\uD83C\uDDF9"],["TV","\uD83C\uDDF9\uD83C\uDDFB"],["TW","\uD83C\uDDE8\uD83C\uDDF3"],["TZ","\uD83C\uDDF9\uD83C\uDDFF"],["UA","\uD83C\uDDFA\uD83C\uDDE6"],["UG","\uD83C\uDDFA\uD83C\uDDEC"],["UK","\uD83C\uDDEC\uD83C\uDDE7"],["UM","\uD83C\uDDFA\uD83C\uDDF2"],["US","\uD83C\uDDFA\uD83C\uDDF8"],["UY","\uD83C\uDDFA\uD83C\uDDFE"],["UZ","\uD83C\uDDFA\uD83C\uDDFF"],["VA","\uD83C\uDDFB\uD83C\uDDE6"],["VC","\uD83C\uDDFB\uD83C\uDDE8"],["VE","\uD83C\uDDFB\uD83C\uDDEA"],["VG","\uD83C\uDDFB\uD83C\uDDEC"],["VI","\uD83C\uDDFB\uD83C\uDDEE"],["VN","\uD83C\uDDFB\uD83C\uDDF3"],["VU","\uD83C\uDDFB\uD83C\uDDFA"],["WS","\uD83C\uDDFC\uD83C\uDDF8"],["YE","\uD83C\uDDFE\uD83C\uDDEA"],["YT","\uD83C\uDDFE\uD83C\uDDF9"],["ZA","\uD83C\uDDFF\uD83C\uDDE6"],["ZM","\uD83C\uDDFF\uD83C\uDDF2"],["ZW","\uD83C\uDDFF\uD83C\uDDFC"],]),{body:e}=$response,obj=JSON.parse(e),title=`${flags.get(obj.countryCode)} ${letterCheck(obj.regionName,obj.regionName,obj.country)}`,subtitle=`${geticon(obj.proxy,"⚠︎")}${geticon(obj.hosting,"\uD83C\uDD57")}${longCheck(obj.org,obj.as.replace(/^[^ ]* /gi,""),obj.isp)}  ➤ ${placeAdder(obj.country)}${placeAdder(obj.regionName)}${placeAdder(obj.city)}${placeAdder(obj.district)}  ➤  ${obj.query}`,ip=obj.query,description=`
位置 [${placeAdder(obj.country)}${placeAdder(obj.regionName)}${placeAdder(obj.city)}${placeAdder(obj.district)}]
IP [${obj.query}]
组织 [${obj.org}]
ISP [${obj.isp}]
ASN [${obj.as.replace(/ .*$/gi,"")}]
ASN名称 [${obj.asname}]
时区 [${obj.timezone}]
邮编 [${obj.zip}]
定位 [纬度 ${obj.lat}, 经度 ${obj.lon}] 
特殊信息 [${geticon(obj.mobile,"移动")}${geticon(obj.hosting,"托管")}${geticon(obj.proxy,"代理")}]`;$done({title,subtitle,ip,description});