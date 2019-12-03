//// store...
// -------------------------------------
// ---- FIRS EXEC ALL ----
// -------------------------------------
// 
// -------------------------------------
// ---- /FIRS EXEC ALL ----
// -------------------------------------
// -------------------------------------
// ---- GLOBAL VARS ----
// -------------------------------------
thsBlg_amz = {
	// no empties!
	'com': 'sciensational-20',
	'ca': 'sciensat-20',
	'co.uk': 'sciensational-21',
	'de': 'sciensation02-21',
	'fr': 'sciensational04-21',
	'it': 'sciensation09-21',
	'es': 'sciensation07-21'
};
thsBlg_amz_defKW = "science books";
thsBlg_epn = "5337990178";
thsBlg_dyn_catcher = "www.sciensational.com/common/x/str/c/";
ThsBlg_aT_cd = 'sciensational';
thsBlg_img_cdn = "www.sciensational.com/common/x/str/";
thsBlg_gasJsnPrx = "AKfycbx3xaZ2ELJjdtNOCfCSgsPrKJSCbRbkPF3lG5H6JKOvXfevOzSy";
// 
// 
// 
// ldng_16_3x for asad style
document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", '<style> .ldng_16_3x {display:block;background-image:url(//' + thsBlg_img_cdn + 'ldng_16_3x.gif);background-repeat:no-repeat;background-position:center center;vertical-align: middle;} </style>');
// 
// 
winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// 
// 
// 
// 
if (typeof thsSiteTyp == 'undefined') {
	thsSiteTyp = "www";
}
// 
if (typeof bnndQry === 'undefined') {
	bnndQry = 'no';
}
// 
// 
//// ----------<pagelevelIfNotHardcoded>---------- //
//// v2
function pagelevelIfNotHardcoded() {}

function _pagelevelIfNotHardcoded() {
	try {
		var plTag = document.getElementsByTagName("head")[0].getElementsByTagName("script") || 0;
		for (var i = 0; i < plTag.length; i++) {
			if (plTag[i].textContent.match(/enable_page_level_ads/im)) {
				return;
			}
		}
		(adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: thsBlg_as,
			enable_page_level_ads: true
		});
	} catch (e) {}
}
if (bnndQry != "yes") { //////////// if bnndQry  ///////////
	// pagelevelIfNotHardcoded();
}
////
//// ----------</pagelevelIfNotHardcoded>---------- //
// -------------------------------------
// ---- /GLOBAL VARS ----
// -------------------------------------
// -------------------------------------
// ---- FUNC ----
// -------------------------------------
function viewport(percentage, property) {
	// v2 (vmax) - returns viewport % in pixels
	// property='vw','vh','vmax', usage: viewport(40, "vh")+'px';
	var w = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	var h = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	if (property == "vw") {
		return w;
	}
	if (property == "vh") {
		return h;
	}
	if (property == "vmax") {
		if (w > h) {
			return w;
		}
		if (h > w) {
			return h;
		}
		if (w == h) {
			return w;
		}
	}
}

function ldngPrgssBar() {
	///// v1 
	//// req bootstrap
	return '<div id="ldngPrgssBar"><div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> </div>';
}

function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function detectmob_500() {
	if (window.innerWidth <= 500) {
		return true;
	} else {
		return false;
	}
}
// --- NO GO FOR SCRIPTS ON LOC CONTAINING ---
// usage: if ( OK2Go("asad") ){  }
function OK2Go(what) {
	if (what == "asad") {
		// asad spcfc
	}
	if (arrayItemMatchesString(["blgutpg"], window.location.pathname)) {
		return false;
	}
	return true;
}

function ga_evCatVal(evCat, evVal) {
	// v2
	// console.log(evCat + ' ' + evVal);  // KEEP!
	try {
		ga('send', 'event', evCat, evVal, {
			'nonInteraction': 1
		});
	} catch (a) {
		//
	}
}

function arrayItemMatchesString(arr, stringText) {
	// v1 - arrayItemMatchesString True if in array matches stringText
	if ((new RegExp('\\b' + arr.join('\\b|\\b') + '\\b')).test(stringText)) {
		return true;
	} else {
		return false;
	}
}

function forumMenu() {
	var a = "";
	var current = " ";
	// depending on useAllInOneTopPage, top forum will be forum 0 or forum# 1...
	var topForum = (useAllInOneTopPage == "yes") ? 0 : 1;
	for (var i = topForum; i < subForum.length; i++) {
		if (i == forumId) {
			current = ' class= "active" ';
		} else {
			current = "";
		}
		if (i == 0) {
			a += '<li ' + current + '><a href="/">' + subForum[0][0] + '</a></li>';
		} else {
			a += '<li ' + current + '><a href="/f' + i + '_p1.html">' + subForum[i][0] + '</a></li>';
		}
	}
	return '' +
		'<ul class="nav nav-tabs">' +
		'<li role="presentation"><a href="/"> Home </a></li>' +
		'<li role="presentation" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">All Forums<span class="caret"></span></a><ul class="dropdown-menu" role="menu">' + a + '</ul></li>' +
		'<li role="presentation"><a href="#">' + subForum[forumId][0] + ' </a></li>' +
		'</ul>';
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}

function prependHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function writeInnerHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].innerHTML = html;
	}
}

function prependHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterbegin", html);
	}
}

function insertBeforeHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("afterend", html);
	}
}

function prependHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforeend", html);
	}
}

function appendHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforeend", html);
	}
}

function insertBeforeHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
	}
}

function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterend", html);
	}
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
///// MODDED FOR AS_CD
function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {}

function __asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	// v10 - bugfix
	if (!document.getElementById(divId)) {
		// 
	} else {
		var a = "";
		if (orient == "link") {
			a = "link"
		};
		if (orient == "matched") {
			a = "autorelaxed"
		};
		if (orient == "a") {
			a = "auto"
		};
		if (orient == "h") {
			a = "horizontal"
		};
		if (orient == "v") {
			a = "vertical"
		};
		if (orient == "r") {
			a = "rectangle"
		};
		if (orient == "rh") {
			a = "rectangle, horizontal"
		};
		if (orient == "rv") {
			a = "rectangle, vertical"
		};
		var divWidth = typeof divWidth !== 'undefined' ? divWidth : '100%';
		var divHeight = typeof divHeight !== 'undefined' ? divHeight : '100%';
		try {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { width: ' + divWidth + '; height:' + divHeight + '; }' +
				'</style>' +
				prefix +
				'<span  class="ldng_16_3x"  style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' style="display:block" ' +
			////////////// gen new for sc!!!!
			' data-ad-client="' + '\x63' + 'a' + '-\x70\x75b-' + (00 + 00 + 00) + '" ' +
				' data-ad-slot="' + slot + '" ' +
				' data-ad-format="' + a + '"></ins> ' +
				'</span>' +
				postfix +
				'';
			(adsbygoogle = window.adsbygoogle || []).push({
					params: {
						google_ad_channel: channel
					}
				});
		} catch (e) {
			return true;
		}
	}
}

function addthis_async_append(divId, customUrlTitle, url, title) {
	// v1 ,  
	// VARS TO SET
	var addthis_id = ThsBlg_aT_cd;
	//
	var html = '<div class="addthis_toolbox addthis_32x32_style" style=" "> ' +
		'<table><tr>' +
		'<td> <a rel="nofollow" class="addthis_button_facebook"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_twitter"></a></td>' +
		// '<td> <a rel="nofollow" class="addthis_button_reddit"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_email"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_favorites"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_expanded"></a></td>' +
		'</tr></table>' +
		'</div>';
	var addthis_config = addthis_config || {};
	addthis_config.pubid = addthis_id;
	// optional url, title, comment out to use page's
	if (customUrlTitle == "custom") {
		addthis_share = {
			url: url,
			title: title
		}
	}
	var addthisScript = document.createElement('script');
	addthisScript.setAttribute('src', 'https://s7.addthis.com/js/300/addthis_widget.js#domready=1');
	document.body.appendChild(addthisScript);
	document.getElementById(divId).insertAdjacentHTML("beforeend", html);
}

function disqusAsync(disqusId, divId) {
	// REQ JQRY
	// v3
	var ds_loaded = false;
	try {
		var top = $("#" + divId).offset().top;
	} catch (e) {};

	function check() {
		if (!ds_loaded && $(window).scrollTop() + $(window).height() > top) {
			$.ajax({
				type: "GET",
				url: "https://" + disqusId + ".disqus.com/embed.js",
				dataType: "script",
				cache: true
			});
			ds_loaded = true;
		}
	}
	$(window).scroll(check);
	check();
}

function addthisAsync() {
	addthis_config = {
		pubid: ThsBlg_adth_co
	};
	var addthisScript = document.createElement('script');
	addthisScript.setAttribute('src', 'https://s7.addthis.com/js/300/addthis_widget.js#domready=1');
	document.body.appendChild(addthisScript);
}
// --- GooFeeAPI
// v1 - REQ JQR
function jqFetchRSS(url, callback) {
	// REQ JQR
	$.ajax({
		url: '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
		dataType: 'json',
		success: function(data) {
			callback(data.responseData.feed);
		}
	});
}

function tablify(html_array, rows, cols, bord) {
	// v2 -
	// html_array e.g. ['<a><h3></h3><img/></a>', ''<a><h3></h3><img/></a>'']
	// rows,cols,bord='yes'
	var d = (bord == "yes") ? 'border:solid 1px #ccc!important;padding:0.5%!important;' : '';
	var a = '',
		b = '',
		c = '',
		counter = 0;
	a = '' +
		'<style type="text/css">' +
		'.axaffdtbl,.axaffdtbl a,.axaffdtbl img' +
		'{margin:0!important;background:#fff!important;box-shadow:none!important;border:none!important;}' +
		'.axaffdtbl {display:table;width:95%!important;border-collapse:collapse!important;}' +
		'.axaffdtbl_tr {display:table-row} ' +
		'.axaffdtbl_td {display:table-cell;vertical-align:top!important;' + d + '} ' +
		'.axaffdtbl a {text-decoration:none;display:block!important;width:100%!important;height:auto!important;}' +
		'.axaffdtbl img {width:100%!important;}' +
		'</style>' +
		'<span class="axaffdtbl">';
	for (i = 0; i < rows; i++) {
		b += '<span class="axaffdtbl_tr">';
		for (j = 0; j < cols; j++) {
			var item = html_array[counter] || ''; //TODO placeholder for empties
			b += '<span class="axaffdtbl_td">' + item + '</span>';
			counter++;
		}
		b += '</span>';
	}
	c = '</span>';
	return a + b + c;
}

function epnSmPl(divId, adID, kw = "", categ = "", divWidth = 300, divHeight = divWidth * 1.3) {
	// v1
	// categ : "1234 | 4567" or "" for default set at epn pg
	// kw or "" - do -
	//
	// prevent too tall
	divHeight = ($(window).width() >= $(window).height()) ? 300 : divHeight;
	if (document.getElementById(divId)) {
		try {
			$.getScript("https://epnt.ebay.com/static/epn-smart-tools.js").done(function() {
				// make width always container's or ATLEAST 300!
				var desiredWidth = $('#' + divId).width() - 12;
				var usableWidth = (desiredWidth < 300 || divWidth < 300) ? 300 : desiredWidth;
				// console.log ( usableWidth + ' ' + divHeight)
				$('#' + divId).html(
					'<div style="outline:solid 1px #aaa;max-width:99%;overflow:scroll;">' + // epn won't show if less than 300px! only way to crop for smaller widths
					'<div id="epncont_' + divId + '" style="width:' + usableWidth + 'px;height:' + divHeight + 'px;">' +
					'<ins data-keyword="' + kw + '" data-category-id="' + categ + '" class="epn-placement" data-config-id="' + adID + '"></ins>' +
					'</div> </div>' +
					'');
			});
		} catch (e) {
			console.log('no epnSmPl');
		}
	}
}

function epnFromLbls(keywords, div) {
	// v6 -  gasJsnPrx
	// insrts b4 lbls 4 epn rss itms using lbls txt
	// REQ jq,epnRs,tablify
	// 
	// 
	////////// --------- OPT 1  USING ebRS -------------
	function ebRS(tld) {
		epnRs(
			thsBlg_gasJsnPrx,
			tld,
			keywords,
			div,
			thsBlg_epn,
			'',
			4, // numItems
			2, // rows
			2, // cols
			'<a rel="nofollow" target="_blank" href="___LINK___"><b style="font-size:' + ((window.innerWidth > 360) ? '14' : '11') + 'px;line-height:1em;display:block;">___TITLE___</b><img src="___THUMBNAIL___"/></a>' // itemTemplate
		);
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		url: "https://freegeoip.app/json/" // new 11/18
	}).done(function(json) {
		try {
			var strTLD = json.country_code || '';
		} catch (e) {}
		ebRS(strTLD);
	}).fail(function(error) {
		ebRS('');
	});
	// 
	/////////// --------- OPT 2  USING epnSmpl (no geo req'd) -------------
	// 	epnSmPl(
	// 		div, // divId
	// 		"5cea98c1acd3bc52fe30de5b"  // SmPl adId
	// 	);
	////////////
}

function epnRs(gasID, country, kw, divId, cmpId, rand, numItems, rows, cols, itemTemplate) {
	// epn rss (GAS)
	// v8 
	// gasID = our GAS prx ID
	// country = 'CA' etc or '';
	// rand = "rand" to randomize, intNumItems = numOfitmes 
	// req tablify(), jquery 
	if (document.getElementById(divId)) {
		console.log(country);
		var div = document.getElementById(divId);
		var geo = (country == "") ? '' : '&availableTo=' + country;
		try {
			var prxJsn = '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F' + gasID + '/exec';
			//////////// json prx jp plugin by mcpher /////////////
			if (!jQuery().ajaxOrig) {
				jQuery.ajaxOrig = jQuery.ajax;
				jQuery.ajax = function(a, b) {
					function d(a) {
						a = encodeURI(a).replace(/&/g, "%26");
						return prxJsn + "?url=" + a + "&callback=?"
					}
					var c = "object" === typeof a ? a : b || {};
					c.url = c.url || ("string" === typeof a ? a : "");
					var c = jQuery.ajaxSetup({}, c),
						e = function(a, c) {
							var b = document.createElement("a");
							b.href = a;
							return c.crossOrigin && "http" == a.substr(0, 4).toLowerCase() && "localhost" != b.hostname && "127.0.0.1" != b.hostname && b.hostname != window.location.hostname
						}(c.url, c);
					c.proxy && 0 < c.proxy.length && (prxJsn = c.proxy, "object" === typeof a ?
						a.crossDomain = !0 : "object" === typeof b && (b.crossDomain = !0));
					e && ("object" === typeof a ? a.url && (a.url = d(a.url), a.charset && (a.url += "&charset=" + a.charset), a.dataType = "json") : "string" === typeof a && "object" === typeof b && (a = d(a), b.charset && (a += "&charset=" + b.charset), b.dataType = "json"));
					return jQuery.ajaxOrig.apply(this, arguments)
				};
				jQuery.ajax.prototype = new jQuery.ajaxOrig;
				jQuery.ajax.prototype.constructor = jQuery.ajax;
				//////////// json prx jp plugin by mcpher /////////////
			}
			//////////// /json prx jp plugin by mcpher /////////////
			$.ajax({
				crossOrigin: true,
				url: 'https://rest.ebay.com/epn/v1/find/item.rss?keyword=' + kw.replace(/\s+/igm, "%20") + '&sortOrder=BestMatch&programid=1&campaignid=' + cmpId + '&toolid=10039&listingType1=AuctionWithBIN&listingType2=FixedPrice&lgeo=1&condition1=New' + geo + '&feedType=rss',
				success: function(data) {
					var xml = $.parseXML(data.result.trim());
					// console.log(xml);
					var html = '  ';
					var items = [];
					var counter;
					$(xml).find("item").each(function(index) {
						// console.log(index);
						counter = index + 1;
						var el = $(this);
						// 
						var title = el.find("title").text();
						// console.log(title);
						var desc = el.find("description").text();
						var link = el.find("link").text().replace(/http\:/, 'https\:') || '';
						// 
						var thumbnail = desc.match(/src\=['"](htt[^"]*\.jpg)['"]/)[1].replace(/http\:/, 'https\:') || '';
						//// prevent items with no images:
						if (thumbnail.match(/04040_0\.jpg/)) {
							return true; // no continue for jq .each()!!
						}
						// 
						var item = itemTemplate.replace("___LINK___", link).replace("___TITLE___", title).replace("___THUMBNAIL___", thumbnail);
						// 
						items.push([item]);
					});
					if (rand == "rand") {
						shuffle(items);
					}
					html = tablify(items, rows, cols, 'yes');
					div.innerHTML = html;
				}
			});
		} catch (e) {
			console.log('no feed');
		}
	}
	///// helper func ////
	function shuffle(sourceArray) {
		for (var i = 0; i < sourceArray.length - 1; i++) {
			var j = i + Math.floor(Math.random() * (sourceArray.length - i));
			var temp = sourceArray[j];
			sourceArray[j] = sourceArray[i];
			sourceArray[i] = temp;
		}
		return sourceArray;
	}
	//////
}

function amzNtv_sync(ad_mode, design, search_phrase, tracking_id, linkid, title, default_category) {
	// v2
	// ad_mode: "search"||"";
	// design: "text_links"||"grid";
	// 
	var adMode = (ad_mode === '') ? 'search' : ad_mode;
	var adDesign = (design == 'text_links') ? 'amzn_assoc_rows = "4"; amzn_assoc_design = "text_links";' : 'amzn_assoc_enable_interest_ads = "true";';
	var adCategory = (default_category === '') ? 'All' : default_category;
	// 
	document.write(
		'<script>' +
		'amzn_assoc_ad_type = "smart";' + // *
		'amzn_assoc_marketplace = "amazon";' + // *
		'amzn_assoc_region = "US";' + // *
		'amzn_assoc_placement = "adunit0";' + // *
		'amzn_assoc_search_bar = "false";' + // *
		'amzn_assoc_tracking_id = "' + tracking_id + '";' + // *
		'amzn_assoc_linkid = "' + linkid + '";' + // *
		'amzn_assoc_title = "' + title + '";' + // *
		'amzn_assoc_ad_mode = "' + adMode + '";' +
		'amzn_assoc_default_category = "' + adCategory + '";' + // *
		'amzn_assoc_default_search_phrase = "' + search_phrase + '";' +
		// for text_links only
		adDesign +
		// for text_links only
		'</script>' +
		'<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' +
		'');
}

function amzFromLbls(keywords, div) {
	// v2
	// req iframeResizer.min.js
	$('#' + div).html(
		'<iframe class="iframeresize_class" style="display:block;width:99%" src="https://' + thsBlg_dyn_catcher + '?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		// '<iframe style="height:450px;width:' + (!detectmob() ? '400' : '200') + 'px;overflow:hidden;display:block" src="https://'+thsBlg_dyn_catcher+'?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		''
	);
	// 
}

function affLocalize(objAmAffIds, strEPNId) {
	// v3
	// req: jq
	function ebLocalize(strTLD, url) {
		if (strTLD) {
			switch (strTLD) {
				case 'AT':
					cntry = "5221-53469-19255-0";
					icep = "229473";
					break;
				case 'AU':
					cntry = "705-53470-19255-0";
					icep = "229515";
					break;
				case 'BE':
					cntry = "1553-53471-19255-0";
					icep = "229522";
					break;
				case 'CA':
					cntry = "706-53473-19255-0";
					icep = "229529";
					break;
				case 'CH':
					cntry = "5222-53480-19255-0";
					icep = "229536";
					break;
				case 'DE':
					cntry = "707-53477-19255-0";
					icep = "229487";
					break;
				case 'ES':
					cntry = "1185-53479-19255-0";
					icep = "229501";
					break;
				case 'FR':
					cntry = "709-53476-19255-0";
					icep = "229480";
					break;
				case 'IE':
					cntry = "5282-53468-19255-0";
					icep = "229543";
					break;
				case 'IN':
					cntry = "4686-53472-19255-0";
					icep = "229550";
					break;
				case 'IT':
					cntry = "724-53478-19255-0";
					icep = "229494";
					break;
				case 'NL':
					cntry = "1346-53482-19255-0";
					icep = "229557";
					break;
				case 'UK':
					cntry = "710-53481-19255-0";
					icep = "229508";
					break;
				default:
					cntry = "711-53200-19255-0";
					icep = "229466";
			}
		}
		var affUrl = url;
		affUrl = affUrl.replace(/\/[0-9]+\-[0-9]+\-19255\-0\//, '/' + cntry + '/');
		affUrl = affUrl.replace(/vectorid\=[0-9]+/, 'icep_vectorid=' + icep);
		return affUrl;
	}
	// 
	function amLocalize(itmId, strTLD) {
		if (strTLD) {
			switch (strTLD) {
				case 'JP':
					strTLD = 'co.jp';
					break;
				case 'GB':
				case 'JE':
				case 'GG':
				case 'IM':
				case 'IE':
				case 'UK':
					strTLD = 'co.uk';
					break;
				case 'CH':
				case 'AT':
					strTLD = 'de';
					break;
				case 'PT':
					strTLD = 'es';
					break;
				default:
					strTLD = (objAmAffIds[strTLD.toLowerCase()] != null ? strTLD.toLowerCase() : 'com');
					break;
			}
			affId = objAmAffIds[strTLD.toLowerCase()];
		}
		// OneLink Mod  DEL IF NOT USING OneLink <script> in html
		strTLD = (strTLD == 'ca' || strTLD == 'co.uk') ? "com" : strTLD;
		affId = thsBlg_amz.com; ///// default US tag for this site
		// /OneLink Mod
		return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + itmId + "/" + affId;
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		url: "https://freegeoip.app/json/" // new 11/18
	}).done(function(json) {
		try {
			var strTLD = json.country_code;
			var epnUrlReg = /vectorid/;
			var amzUrlReg = RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
			// var amzUrlReg = RegExp("/(?!/e|st)../([A-Z0-9]{10})");
			// "/(?!/e|st)../([A-Z0-9]{10})"
			$('a').each(function(index) {
				var url = unescape($(this).attr('href'));
				if (url.match(amzUrlReg)) {
					var itmId = url.match(amzUrlReg)[1];
					// amLocalize is OFF (USING ONELINK) (uncommnt to enable)
					// $(this).attr('href', amLocalize(itmId, strTLD));
				}
				// EPN
				if (url.match(epnUrlReg)) {
					$(this).attr('href', ebLocalize(strTLD, url));
				}
			});
		} catch (e) {}
	}).fail(function(error) {
		// console.log(error);
	});
}

function amzSrchURL(affId, srchQry, categ) {
	// v1
	// optional categ: amz index
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	var b = (typeof categ === 'undefined') ? '' : categ;
	return 'https://www.amazon.com/gp/search?ie=UTF8&tag=' + affId + '&index=' + b + '&keywords=' + srchQry;
}

function epnSrchURL(campId, srchQry) {
	// v1
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	return 'https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=\x35\x35\x37\x35\x31\x35\x30\x38\x30\x38&toolid=10001&campid=' + campId + '&customid=&icep_uq=' + a + '&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg';
}

function aead(divId, aid, akey, asize) {
	// v3
	// aid,akey,asize from ae code
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = '<span style="display:table;margin:0 auto"><a style="display:none!important" id="' + aid + '"></a></span>';
		if (window.AED_SHOW) {
			window.AED_SHOW({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
		} else {
			window.AED_ONLOAD = window.AED_ONLOAD || [];
			window.AED_ONLOAD.push({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
			if (!document.getElementById("ae-ad-script-$")) {
				var s = document.createElement("script"),
					h = document.getElementsByTagName("head")[0];
				s.id = 'ae-ad-script-$';
				s.charset = "utf-8";
				s.async = !0;
				s.src = "https://i.alicdn.com/ae-game/thirdparty/show-window/index.js";
				h.insertBefore(s, h.firstChild)
			}
		}
	}
}
/// use as amazonLocalize()
function writeRSS(url, objElement) {
	// objElement e.g. document.getElementById("feBu_right").getElementsByTagName("ul")[0]
	jqFetchRSS(url, function(feedResponse) {
		var html = '';
		for (i = 0; i < feedResponse.entries.length; i++) {
			html += ' <a href="' + feedResponse.entries[i].link + '">' + feedResponse.entries[i].title + '</a> ';
		}
		html += ' ';
		objElement.innerHTML = html;
	});
}
// --- /GooFeeAPI
function gettags_main(str) {
	// RTRNS-1-TAG-ONLY
	var text = str.replace(/\./g, " ");
	text = text.replace(/tagged|under|tagged under|topics|@t|www|\scom\s|sciensational|\s\,\s/ig, ""); // : WWW.sciensational.COM : //
	if (text.match(/[A-Za-z]/)) {
		//
	} else {
		text = "science, News"; // : WWW.sciensational.COM : //
	}
	texts = text.split(",");
	return texts[0];
}

function addThisContainer() {
	var a = '' +
		'<style> a.at-share-btn {float:left;}</style>' +
		'<div style="margin:0; display:inline-block;">' +
		'<div class="addthis_sharing_toolbox"></div>' +
		'</div>' +
		'';
	return a;
}
// 
// 
// 
// 
// 
// 
// -------------------------------------
// -------------------------------------
// --- EXEC 
// -------------------------------------
// -------------------------------------
// ---- EXEC:AS ----
// CRC ad 8967036449, link 0744487852
// 
// 
// 
// ///////////////// / WWW. ///////////////// 
// 
// 
// /////////////////  STORE. /////////////////
// 
if (thsSiteTyp == "store") {
	// --- AS
	//   resp ad: , resp lu: 
	//// STORE BOTH MAINPAGE+ITEMPAGE BOTH DTP+MOB
	var ad_Id_resp = '';
	var lu_Id_resp = '';
	//// STORE CHANNELS
	var ad_Channel = (ThsBlg_pg == 'mainpage') ? '' : '';
	var lu_Channel = (ThsBlg_pg == 'mainpage') ? '' : '';
	//// STORE BOTH MAINPAGE+ITEMPAGE LINKU ON DTP SIDEBAR
	var a = !detectmob() ? prependHTML('leftbar', '<div style="max-width:300px ; max-height:600px; min-height:100px; margin-bottom:10px;"><div id="as_sb1"></div></div>') : '';
	//// not now
	// asadRespId(
	// 	'<div style="text-align:center;width:90%;">',
	// 	'</div>',
	// 	"as_sb1",
	// 	"xyz_as_lb1",
	// 	lu_Id_resp,
	// 	lu_Channel,
	// 	"link"
	// );
	//// STORE BOTH MAINPAGE+ITEMPAGE LINKU ON MOB
	var sideBysideLU = detectmob() ? '<hr/><div style="margin:10px auto 20px"> <div class="row"><div class="col-sm-9"> <div id="as_lb1"></div> </div> <div class="col-sm-3"> <div id="as_lb2"></div> </div> </div> </div><hr/>' : '';
	if (ThsBlg_pg == 'mainpage') {
		insertAfterHTMLByClass('postbody', sideBysideLU);
	}
	if (ThsBlg_pg == 'itempage') {
		insertBeforeHTMLByClass('blogger-labels', sideBysideLU);
	}
	//// not now
	// asadRespId(
	// 	'<div style="text-align:center;width:90%;">',
	// 	'</div>',
	// 	"as_lb1",
	// 	"xyz_as_lb1",
	// 	lu_Id_resp,
	// 	lu_Channel,
	// 	"link"
	// );
	// 
	////////
	function amazonCleanUrl(strURL, strTLD, strAffId) {
		// v4 
		if (strURL.match("/(?!/e|st)../([A-Z0-9]{10})") === null) {
			return strURL;
		} else {
			var strAsin = strURL.match("/(?!/e|st)../([A-Z0-9]{10})")[1] || strURL;
			//    return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + strAsin + "/" + strAffId; /// old style
			// return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId; /// clean no params    
			return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId + '&linkCode=osi&th=1&psc=1'; /// api v5 url

		}
	}
	///// store jq /////
	$(function() {
		// ========= ALL =========
		// 
		/// amz url clean
		// *** CLEAN ALL AMZ API URLS to .com/dp/xxx?tag=yyy ***
		$('.postbody a').each(function(index) {
			var aurl = $(this).attr('href');
			if (aurl.match(/(amazon\.|amzn\.)/igm)) {
				var a = amazonCleanUrl(aurl, "com", thsBlg_amz.com);
				$(this).attr('href', a);
				// console.log(a);
			}
		});
		//// amz url clean
		// 
		// 
		$('.postbody h3 a').each(function(index) {
			$(this).html(' More Details &amp; Prices ');
			$(this).addClass('btn btn-info');
		});
		$('.postbody a:nth-child(6)').each(function(index) {
			$(this).html(' Buy Now ');
			$(this).addClass('btn btn-success');
		});
		// 
		// 
	});
}
// 
// 
// ///////////////// /STORE /////////////////
// 
//
/////////////////    DYN_CATCHER   ///////////////////
// 
if (thsSiteTyp == "dyn_catcher") {
	var keywords = (qs.contains("a")) ? qs.get("a") : 'sciensational books';
	keywords = decodeURIComponent(keywords);
	if (qs.get("s") == "amz") {
		amzNtv_sync(
			'search', // ad_mode, 
			'grid', // design,  "text_links"||"grid"
			keywords, // search_phrase, 
			thsBlg_amz.com, // tracking_id, 
			'06483062a172ded549d69e1886790a34', // linkid, 
			'', // title, 
			'' // default_category
		);
		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js")
			.done(function() {});
	}
}
// 
/////////////////    /DYN_CATCHER   ///////////////////
// 
//
// ============== ALL LAST --- WINDOW ON LOAD ===================
// LAST --- WINDOW ON LOAD 
$(window).on("load", function() {
	// 
	///// STORE /////
	// 
	if (thsSiteTyp == "store") {
		// 
		if (ThsBlg_pg == 'itempage') {
			// --- AFF IN SIDEBAR
			// DTP STR AFF SB
			if (!detectmob()) {
				$('#rightbar').prepend('<div  class="ldng_16_3x" id="amzSB_T"></div>');
				amzFromLbls(thsBlg_amz_defKW, "amzSB_T");
			}
			// ---AFF FROM LABLES
			$('.blogger-labels').before('<hr/><h4>If you liked it, ALSO TRY:</h4><hr/><div  class="ldng_16_3x"  id="ebRSBtm_1"></div><hr/><div class="ldng_16_3x"  id="ebRSBtm_2"></div><hr/>');
			var kw = $('.blogger-labels').text().replace(/\s+/igm, " ").trim().replace(/(labels\:)/igm, "").trim();
			if ($('.postbody h3 a').attr('href').match(/amazon\./)) {
				kw = encodeURIComponent(kw.replace(/, /g, " ").trim());
				epnFromLbls(kw, "ebRSBtm_1");
				amzFromLbls(kw, "ebRSBtm_2");
			} else {
				amzFromLbls(kw, "ebRSBtm_1");
				epnFromLbls(kw, "ebRSBtm_2");
			}
			// ---/AFF FROM LABLES
			$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
				$('.iframeresize_class').iFrameResize();
			});
		}
		// 
		///// HNDLE BRKN IMGS - v2
		// req: epnSrchURL()
		$('.postbody a img').each(function(index) {
			if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth < 100) { // < 100 (ebay fallbck is 80px w) (default is 0 )
				var imgSrc = $(this).attr('src') || '';
				var redirURL = '';
				var redirQuery = $('h1').text().replace(/\s+/igm, " ").replace(/^[^\:]*\:(.*)/igm, "$1").replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "+").trim();
				ga_evCatVal('store', 'err_NoAffImg:U: ' + imgSrc);
				if (imgSrc.match(/amazon/)) {
					redirURL = amzSrchURL(thsBlg_amz.com, redirQuery);
				} else {
					redirURL = epnSrchURL(thsBlg_epn, redirQuery);
				}
				// 
				$(this).parent().replaceWith('<div style="margin:20px auto"><div class="panel panel-warning">   <div class="panel-heading"> <span class="glyphicon glyphicon-info-sign"></span> Oops! It seems this item got moved or re-categorized... <br/><a id="mssngImgRedir_' + index + '" class="btn btn-warning" href="' + redirURL + '" role="button"><b style="font-size:120%">Locate Item Now</b> &#x25B6; </a> </div>     </div></div> ');
				// 
				$("#mssngImgRedir_" + index).click(function() {
					ga_evCatVal('store', 'inf_btnLocItmNw:U: ' + redirURL);
				});
			}
		});
		/// HNDLE BRKN IMGS
		// 
		// 
		// ** ebay ebLocalize IS >>ON<< in affLocalize() **
		// ** amazon amLocalize IS >>OFF<< in affLocalize() **
		affLocalize(thsBlg_amz, thsBlg_epn);
		// 
		if (ThsBlg_pg == 'itempage') {
			insertAfterHTMLByClass('postbody', '<div style="display:table;margin:10px auto;" id="addths_rec"></div>');
			addthis_async_append('addths_rec', '', '', '');
		}
	}
	//
	///// /STORE /////
	// 
});
//
// 
// ============== /ALL LAST --- WINDOW ON LOAD ===================