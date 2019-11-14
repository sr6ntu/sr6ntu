//////////// legacy 
////////////////
// ldng_16_3x for asad style
document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", '<style> .ldng_16_3x {display:block;background-image:url(//i.sitesworld.com/img/ldng_16_3x.gif);background-repeat:no-repeat;background-position:center center;vertical-align: middle;} </style>');
/* --- vars --- */
 
function detectmob() {
	// v1
	if (window.innerWidth <= 762) {
		return true;
	} else {
		return false;
	}
}

function asadPageLevel() {
	var script = document.createElement("script");
	script.innerHTML = ' (adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "' + sci_as_cd + '", enable_page_level_ads: true }); ';
	document.head.appendChild(script);
}
if (detectmob()) {
	// asadPageLevel();
}
// 
// 
// lazyad-loader.min.js (for mnad() )
if (sci_pg.match(/f_/)) {
	// document.write('\x3Cscript src="//www.sciensational.com/common/x/j/j/lazyad-loader.min.js" async>\x3C/scr' + 'ipt\x3E');
}
// 
// if (sci_pg.match(/blog_/)) {
// 	document.write('\x3Cscript src="//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js">\x3C/scr' + 'ipt\x3E');
// }
// 
// 
currProt = (document.location.protocol == 'https:') ? 'https:' : 'http:';
// 
sci_infl_cd = '38573';
var adParams = {
	a: "6471003",
	size: "300x250"
};
// 
var sci_pg_name = sci_pg.replace(/f_/g, '');
var sci_pg_name_lc = sci_pg_name.toLowerCase();
// store vars 
this_category = 11;
this_section = 2;
var r_AB_s = Math.random();
if (r_AB_s < .5) {
	AB_tst = "A";
} else {
	AB_tst = "B";
};
if (sci_pg.match(/f_/)) {
	factpage_url = currProt + '//www.sciensational.com/' + document.URL.match(/(https?\:\/\/)([^\/]*\/)([^\/#\?\&]*)(\.html.*)/)[3] + '.html';
} else {
	factpage_url = currProt + '//www.sciensational.com/';
}
sci_share_flares = '<div class="addthis_toolbox addthis_32x32_style" style=" "> ' +
	'<table><tr>' +
	'<td> <a rel="nofollow" class="addthis_button_facebook"></a></td>' +
	'<td> <a rel="nofollow" class="addthis_button_twitter"></a></td>' +
// buttons with custom urls
//'<td><a target="_blank" href="https://www.facebook.com/PAGE"><span class="at300bs at15nc at15t_facebook"></span></a></td>' +
//'<td><a target="_blank" href="https://twitter.com/ID"><span class="at300bs at15nc at15t_twitter"></span></a></td>' +
'<td> <a rel="nofollow" class="addthis_button_email"></a></td>' +
	'<td> <a rel="nofollow" class="addthis_button_favorites"></a></td>' +
	'<td> <a rel="nofollow" class="addthis_button_expanded"></a></td>' +
	'</tr></table>' +
	'</div>';
/* /vars */
// ----------- FUNCS ----------------
function ga_evCatVal(evCat, evVal) {
	// v2
	// console.log(evCat + ' ' + evVal); // KEEP!
	try {
		ga('send', 'event', evCat, evVal, {
			'nonInteraction': 1
		});
	} catch (a) {
		//
	}
}

function tablify(html_array, rows, cols, bord) {
	// v2
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
		'.axaffdtbl img {width:100%!important;margin:0 auto}' +
	//
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

function writeEbayRSS(kw, divId, cmpId, rand, numItems, rows, cols, itemTemplate) {
	// v1 -
	// NOT SSL yet!
	// rand = "rand" to randomize, intNumItems = numOfitmes 
	// req tablify(), jquery, google jsapi
	if (document.getElementById(divId)) {
		var div = document.getElementById(divId);
		try {
			$.ajax({
				url: '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + numItems + '&callback=?&q=' +
					encodeURIComponent(
						'http://rest.ebay.com/epn/v1/find/item.rss?keyword=' +
						kw +
						'&sortOrder=BestMatch&programid=1&campaignid=' +
						cmpId +
						'&toolid=10039&listingType1=AuctionWithBIN&listingType2=FixedPrice&lgeo=1&feedType=rss'
				),
				dataType: 'json',
				success: function(data) {
					var feed = data.responseData.feed || {};
					var html = '  ';
					var items = [];
					// feedResponse.entries.length
					for (var i = 0; i < feed.entries.length; i++) {
						// var author = feedResponse.entries[i].author.replace(/[^@\s]*@[^@\s]*\s+/igm, "") || '';
						var title = feed.entries[i].title || '';
						var desc = feed.entries[i].content || '';
						var link = feed.entries[i].link || '';
						desc = desc.replace(/http\:/igm, 'https\:');
						// extr img
						var thumbnail = desc.match(/src\="(htt[^"]*\.jpg)"/)[1] || ''; // TODO plceholder 
						link = link.replace(/http\:/, 'https\:') || '';
						var item = itemTemplate.replace("___LINK___", link).replace("___TITLE___", title).replace("___THUMBNAIL___", thumbnail);
						items.push([item]);
					}
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
}

function prependHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
	}
}

function appendHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforeend", html);
	}
}

function loadjs(filename) {
	var fileref = document.createElement('script');
	fileref.setAttribute("type", "text/javascript");
	fileref.setAttribute("src", filename);
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

function loadjs_async(filename) {
	var fileref = document.createElement('script');
	fileref.setAttribute("type", "text/javascript");
	fileref.async = true;
	fileref.setAttribute("src", filename);
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

function mnad_async(divId, size, crid, versionId, cid) {
	// v1 - official mn async
	if (!document.getElementById(divId)) {
		// 
	} else {
		window._mNHandle = window._mNHandle || {};
		window._mNHandle.queue = window._mNHandle.queue || [];
		medianet_versionId = versionId;
		(function() {
			var sct = document.createElement("script"),
				sctHl = document.getElementsByTagName("script")[0],
				isSSL = 'https:' == document.location.protocol;
			sct.type = "text/javascript";
			sct.src = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/dmedianet.js?cid=' + cid + (isSSL ? '&https=1' : '') + '';
			sct.async = "async";
			sctHl.parentNode.insertBefore(sct, sctHl);
		})();
		document.getElementById(divId).innerHTML =
			' <div id="' + crid + '"></div>' +
			'';
		try {
			window._mNHandle.queue.push(function() {
				window._mNDetails.loadTag(crid, size, crid);
			});
		} catch (error) {}
	}
}

function asadFixId(prefix, postfix, divId, width, height, slot, channel) {}
function _asadFixId(prefix, postfix, divId, width, height, slot, channel) {
	//v3 (span not div)
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = '' +
			prefix +
			' <span class="ldng_16_3x"> <ins class="adsbygoogle" ' +
			' style="display:inline-block;' +
			' width:' + width + 'px;' +
			' height:' + height + 'px" ' +
			' data-ad-client="' + sci_as_cd + '" ' +
			' data-ad-slot="' + slot + '"></ins> </span>' +
			postfix;
		(adsbygoogle = window.adsbygoogle || []).push({
				params: {
					google_ad_channel: channel
				}
			});
	}
}

function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {}
function _asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
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
				'<span  class="ldng_16_3x" style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' style="display:block" ' +
				' data-ad-client="' + sci_as_cd + '" ' +
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

function affLocalize() {
	// v2
	// req: jq
	// --- VARS TO CHANGE
	/// AMAZON ///
	var amAffIds = {
		// no empties!
		'com': 'sciensational-20',
		'ca': 'sciensat-20',
		'co.uk': 'sciensational-21',
		'de': 'sciensation02-21',
		'fr': 'sciensation08-21',
		'it': 'sciensation09-21',
		'es': 'sciensation07-21'
	};
	// EBAY
	var ebAffId = "5337990178"; // campId
	// /--- VARS TO CHANGE
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
					strTLD = (amAffIds[strTLD.toLowerCase()] != null ? strTLD.toLowerCase() : 'com');
					break;
			}
			affId = amAffIds[strTLD.toLowerCase()];
		}
		return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + itmId + "/" + affId;
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		url: "https://freegeoip.net/json/"
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
					// console.log(itmId)
					$(this).attr('href', amLocalize(itmId, strTLD));
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

function addths_any() {
	// if (AB_tst == "A") {
	// 	_gaq.push(['_trackEvent', 'AB_Tst', 'A', '']);
	// }
	// if (AB_tst == "B") {
	// 	_gaq.push(['_trackEvent', 'AB_Tst', 'B', '']);
	// }
}

function as_all_bottm() {}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}
//
function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertBeforeHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterend", html);
	}
}
// 
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
// 
function isInViewport(el) {
	// el = DOM element 
	var elemTop = el.getBoundingClientRect().top;
	var elemBottom = el.getBoundingClientRect().bottom;
	var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	return isVisible;
}
// 
function htmlAmzItm(title, price, url, img) {
	return '' +
		'<a class="grid-item" target="_blank" href="' + url + '"> ' +
		' <img alt="" src="' + img + '"/> ' +
		// '<span>'+title+'</span>'+
		// '<span>'+price+'</span>'+
		' </a>';
}

function addthis_async_append_mob(divId, customUrlTitle, url, title) {
	// ** CUSTOM FOR SCI MOB
	// v1 , *APPENDS* TO divId, fully contained, no other code req.
	// e.g. addthis_async('divId', 'custom','http://asdf','title'); 
	// or addthis_async('divId', '','',''); 
	// divId: id,  customUrlTitle: 'custom' or 'default'
	// VARS TO SET
	var addthis_id = 'sciensational';
	//
	var html = '<div class="addthis_toolbox addthis_32x32_style" style=" "> ' +
		'<table>' +
		'<tr><td><a rel="nofollow" class="addthis_button_facebook"></a></td></tr>' +
		'<tr><td><a rel="nofollow" class="addthis_button_twitter"></a></td></tr>' +
		'<tr><td><a rel="nofollow" class="addthis_button_email"></a></td></tr>' +
		'<tr><td><a rel="nofollow" class="addthis_button_favorites"></a></td></tr>' +
		'<tr><td><a rel="nofollow" class="addthis_button_expanded"></a></td></tr>' +
		'</table>' +
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
	addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#domready=1');
	document.body.appendChild(addthisScript);
	document.getElementById(divId).insertAdjacentHTML("beforeend", html);
}

function masonrify(html, divId) {
	// console.log(html)
	$('#' + divId).html(
		'<div id="grid-loading">Loading...</div>' +
		'<div class="grid">' +
		'<div class="grid-sizer"></div>' +
		html +
		'</div>'
	);
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress(function() {
		// console.log('yeah');
		$('#grid-loading').remove();
		$grid.masonry();
		$('.grid').css({
			'visibility': 'visible'
		});
	});
}
// ------------ /FUNCS -----------------
//
/* ---- BEGIN EXEC ---- */
// FOR MED.NT ADCOD. DISBLD 30/3/15
//loadjs_async("//www.sciensational.com/common/x/j/j/lazyad-loader.min.js");
// 
// 
// 
//   --------------------  AS -------------------------
// 
// 
// // 
// **********************  DTP	***********************
// 
if (!detectmob()) {
	//============== HOMEPAGE DTP =====================
	if (sci_pg == "main") {
		// asadRespId(
		// 	'<div style="margin: 5px 0 0;">', //prefix html
		// 	'</div>', //postfix html 
		// 	'as_main_TL', // div id
		// 	'xyz_as_main_TL',
		// 	'3358989042', // slot 
		// 	'5231679780', // channel 
		// 	'r'
		// );
		// // 
		// insertBeforeHTMLByClass('thanks', '<div style="width:200px; margin:30px 0 50px 15px;"><div id="as_lu_1"></div></div>');
 
		// asadRespId(
		// 	'<div>',
		// 	'</div> ',
		// 	"as_lu_1",
		// 	"xyz_as_lu_1",
		// 	"4137072642", ///  
		// 	"9016347043", //   
		// 	"link"
		// );
		// // 
		// // 
		// asadRespId(
		// 	'', //prefix html
		// 	'', //postfix html 
		// 	'as_main_RB', // div id
		// 	'xyz_as_main_RB',
		// 	'3358989042', // slot 
		// 	'7908685007', // channel 
		// 	'r'
		// );
	}
	// ================== FACTS DTP ====================
	if (sci_pg.match(/f_/)) {
		// DTP LU 1/3    
 
		// asadRespId(
		// 	'  <div style="width:95%;margin:0 auto">', //prefix html
		// 	' </div>', //postfix html 
		// 	"sci_aslu_t",
		// 	"xyz_sci_aslu_t",
		// 	"4137072642", ///  
		// 	"6639084213", //   
		// 	"link"
		// );
		// DTP ad 2/3 - sci_as336_b 1ST IN RNDR ORDR - BETTR PRFMNG THN 1/3! 
		// asadRespId(
		// 	'<div style="width:305px;height:255px;">', //prefix html
		// 	'</div>', //postfix html 
		// 	'sci_as336_b', // div id
		// 	'xyz_sci_as336_b',
		// 	'3358989042', // slot 
		// 	'3034879239', // channel 
		// 	'r'
		// );
		// DTP ad 1/3 - 2ND IN RNDR ORDR - *LESS* PRFRMNG THN 2/3! 
		// -- TRY 3RD PRTY HERE
		// asadRespId(
		// 	'<div style="width:305px;height:255px;">', //prefix html
		// 	'</div>', //postfix html 
		// 	'sci_as336_t', // div id
		// 	'xyz_sci_as336_t',
		// 	'3358989042', // slot 
		// 	'4690443157', // channel 
		// 	'r'
		// );
		// DTP LU 2/3 (INLINE)
		// insertAfterHTML('fact15', '<div style="width:90%;margin:10px auto 30px auto;"><div id="as_lu_inl01"></div></div>');

		// asadRespId(
		// 	'<div>',
		// 	'</div> ',
		// 	"as_lu_inl01",
		// 	"xyz_as_lu_inl01",
		// 	"4137072642", ///  
		// 	"8823609291", //   
		// 	"link"
		// );
 
		// asadRespId(
		// 	'  <div style="width:95%;margin:0 auto">', //prefix html
		// 	' </div>', //postfix html 
		// 	"sci_aslu_b",
		// 	"xyz_sci_aslu_b",
		// 	"4137072642", ///  
		// 	"6639084213", //   
		// 	"link"
		// );
		// 
		///// DTP ** THERE IS ad 3/3 IN LFTBR - LAST IN ORDR
		///// (SEE OTHER DTP )
		// 
	}
	//=============== OTHER DTP =======================
	// books
	// asadRespId(
	// 	'<div style="text-align:center;margin:5px 0; padding: 5px 0;border-top:solid 2px #cc0000; border-bottom:solid 2px #cc0000;"> ',
	// 	'</div> ',
	// 	'as_books_TR', // div id
	// 	'xyz_as_books_TR',
	// 	'3358989042', // slot 
	// 	'1798524237', // channel 
	// 	'h'
	// );
	// gifts
	// asadRespId(
	// 	'<div style="text-align:center;margin:5px 0; padding: 5px 0;border-top:solid 2px #cc0000; border-bottom:solid 2px #cc0000;"> ',
	// 	'</div> ',
	// 	'as_str_0a', // div id
	// 	'xyz_as_str_0a',
	// 	'3358989042', // slot 
	// 	'3345278668', // channel 
	// 	'h'
	// );
	// // search
	// writeInnerHTML('sci_aslu_oth', '<div style="background: #D92026;padding:10px 0"><div id="as_srch_lu"></div></div>');
	// asadFixId(
	// 	'<div style="width:468px;height:15px;margin:0 auto;">', //prefix html
	// 	'</div>', //postfix html 
	// 	'as_srch_lu', // div id
	// 	'468', // width
	// 	'15', // height 
	// 	'8792091359', // slot 
	// 	'9884494309' // channel 
	// );
	// // blg
	// asadRespId(
	// 	'<div style="margin:5px;">', //prefix html
	// 	'</div>', //postfix html 
	// 	'sci_blg_aslu_t', // div id
	// 	'xyz_sci_blg_aslu_t',
	// 	'3358989042', // slot 
	// 	'2518698532', // channel 
	// 	'r'
	// );
	// 
	// --- ALL DTP ---
	// 
	if (sci_pg.match(/f_/) || sci_pg == "guestbook") {
		// writeInnerHTML('as_lt_bott', '<div style="background-color:rgba(255, 255, 255, 0.1);width:120px;min-height:600px;overflow:hidden"><div id="as_LB1"></div></div>');
		// asadRespId(
		// 	'<div>', //prefix html
		// 	'</div>', //postfix html 
		// 	'as_LB1', // div id
		// 	'xyz_as_LB1',
		// 	'8537881848', // slot 
		// 	'0605203670', // channel 
		// 	'v'
		// );
	}
 
}
// 
// 
// 
// **********************  MOB	***********************
// 
if (detectmob()) {
	if (sci_pg == "main") {
		// ============ MAIN MOB ==============
		// 
		// 
		// asadRespId(
		// 	'', //prefix html
		// 	'', //postfix html 
		// 	'as_main_TL', // div id
		// 	'xyz_as_main_TL',
		// 	'3358989042', // slot 
		// 	'7908685007', // channel 
		// 	'r'
		// );
		// // MOB MAIN LU 1/1
		// insertBeforeHTML('mprightbar', '<div style="width:90%;margin:50px auto;"><div id="as_lu_1"></div></div>');
		// asadRespId(
		// 	'<div>',
		// 	'</div> ',
		// 	"as_lu_1",
		// 	"xyz_as_lu_1",
		// 	"4137072642", ///  
		// 	"9016347043", //   
		// 	"link"
		// );
 
		// //
		// // 
		// // 
		// asadRespId(
		// 	'', //prefix html
		// 	'', //postfix html 
		// 	'as_main_RB', // div id
		// 	'xyz_as_main_RB',
		// 	'3358989042', // slot 
		// 	'7908685007', // channel 
		// 	'r'
		// );
	}
	// ============ FACTS MOB ==============
	//
	if (sci_pg.match(/f_/)) {
		// 
		// 
		// // MOB ad 2/2 - sci_as336_b 1ST IN RNDR ORDR - MOB: THIS BETTR PRFMNG THN 1/2
		// asadRespId(
		// 	'<div style="max-width:95%;margin:10px auto">',
		// 	'</div>', //postfix html 
		// 	'sci_as336_b', // div id
		// 	'xyz_sci_as336_b',
		// 	'3358989042', // slot 
		// 	'3034879239', // channel 
		// 	'r'
		// );
		// // 
		// // MOB ad 1/2  THIS LESSER PERF THAN 2/2
		// // -- TRY 3RD PRTY HERE
		// asadRespId(
		// 	'<div style="max-width:95%; margin:10px auto">',
		// 	'</div>', //postfix html 
		// 	'sci_as336_t', // div id
		// 	'xyz_sci_as336_t',
		// 	'3358989042', // slot 
		// 	'4690443157', // channel 
		// 	'r'
		// );
		// // 
		// // 
		// // MOB 1/2 LU INLINE FACTS 
		// insertAfterHTML('fact2', '<div style="width:90%; margin:10px auto 20px auto;"><div id="as_lu_inl01"></div></div>');
		// asadRespId(
		// 	'<div>',
		// 	'</div> ',
		// 	"as_lu_inl01",
		// 	"xyz_as_lu_inl01",
		// 	"4137072642", ///  
		// 	"6639084213", //   
		// 	"link"
		// );
 
		// // 
		// // 2/2 LU ON FACTS MOB
		// insertAfterHTMLByClass('nav', '<div id="as_lu_rec_B"></div>');
		// asadRespId(
		// 	'<div style=" margin:10px auto;">',
		// 	'</div><div style="height:10px"></div>',
		// 	"as_lu_rec_B",
		// 	"xyz_as_lu_rec_B",
		// 	"4137072642", ///  
		// 	"8823609291", //   
		// 	"link"
		// );
 
		// 
		// 
		// 
		//
		// 
		// ------------------- disabled --------
		// 
	}
	// ============ OTHER MOB ===============
	// // --- books
	// asadRespId(
	// 	'<div style="text-align:center;margin:5px 0; padding: 5px 0;border-top:solid 2px #cc0000; border-bottom:solid 2px #cc0000;"> ', //prefix html
	// 	'</div> ', //postfix html 
	// 	'as_books_TR', // div id
	// 	'xyz_as_books_TR',
	// 	'3358989042', // slot 
	// 	'1798524237', // channel 
	// 	'r'
	// );
	// // --- gifts
	// asadRespId(
	// 	'<div style="text-align:center;margin:5px 0; padding: 5px 0;border-top:solid 2px #cc0000; border-bottom:solid 2px #cc0000;"> ',
	// 	'</div> ',
	// 	'as_str_0a', // div id
	// 	'xyz_as_str_0a',
	// 	'3358989042', // slot 
	// 	'3345278668', // channel 
	// 	'r'
	// );
	// // --- search
	// // search
	// writeInnerHTML('sci_aslu_oth', ' <div id="as_srch_lu"></div> ');
	// asadRespId(
	// 	'<div>',
	// 	'</div> ',
	// 	"as_srch_lu",
	// 	"xyz_as_srch_lu",
	// 	"4137072642", ///  
	// 	"9884494309", //   
	// 	"link"
	// );
	// // --- blg
	// asadRespId(
	// 	'<div style="width:90%;margin:0 auto;">', //prefix html
	// 	'<div>', //postfix html 
	// 	'sci_blg_aslu_t', // div id
	// 	'xyz_sci_blg_aslu_t',
	// 	'3358989042', // slot 
	// 	'2518698532', // channel 
	// 	'r'
	// );
}
// 
// 
// 
//   --------------------  /AS -------------------------
// 
// 
// 
writeInnerHTML('as_lb160_coolbooks1', '');
// 
/* ------------ BEGIN JQUERY READY ------------------ */
$(document).ready(function() {
	// ============= ALL =================
	// 
	// 
	if (detectmob()) {
		// *** MUST BE 1ST ON $(document).ready ****
		// ELSE CHROME MESS UP IN TABLET!!
		$("#mother").prepend(
			'<div id="mobsubmenu">' +
			'<a id="lb_1_mob" href="#">Submit a Fact</a>' +
			'<a href="/search.html">Find Facts</a>' +
			'<a href="/cool-books.html">Books</a>' +
			'<a href="/gifts.html">Gifts</a>' +
			'</div>' +
			' <div class="mob_flares">' +
			'<div id="addths_mobflares"></div>' +
			'</div>'
		);
	}
	// --------------------- facts -----------------------
	if (sci_pg.match(/f_/)) {
		$('.factsp').each(function() {
			var a = $("b:eq(0)", this).text();
			a = a.replace(/\'\"/g, '');
			var b = $(this).attr("id");
			var c = escape(factpage_url + '#' + b);
			var e = sci_pg_name_lc;
			var d = 'An amazing ' + e + ' fact about ' + a + ': ';
			// $(this).append('<span class="factshare" style="">' +
			// 	'<table><tr>' +
			// 	'<td style="padding:0 2px 0"><a onclick="_gaq.push([\'_trackEvent\',\'fact_share_fb\',\'' +
			// 	c + '\', \'' + e + ' - ' + a + '\' ])" href="https://www.facebook.com/sharer.php?u=' + c + '&t=' +
			// 	d + '"><span class="at300bs at15nc at15t_facebook"></span></a></td>' +
			// 	'<td><a onclick="_gaq.push([\'_trackEvent\',\'fact_share_tw\',\'' + c + '\', \'' +
			// 	e + ' - ' + a + '\' ])" href="https://twitter.com/intent/tweet?via=Sciensational&text=' + d + '&url=' +
			// 	c + '"><span class="at300bs at15nc at15t_twitter"></span></a></td>' +
			// 	'</tr></table>' +
			// 	'</span>');
		});
	}
	// --------------------- index -----------------------
	if (sci_pg == "main") {
		$.getScript("//www.sciensational.com/common/x/j/j/tabletop.js", function() {
			var html = "";

			function init() {
				// tabletop.js to get gdoc data
				Tabletop.init({
					key: '1y_7rqRwq8Kqkymg7ray7qNdH_z7D7k8hCXO5aXZYunM',
					callback: function(data, tabletop) {
						json_data = data.Sheet2.elements;
						$.each(json_data, function(i, value) {
							html += value.HTML; // HTML is sheet's label (label **MUST** for tabletop.js!!)
						});
						writeInnerHTML('fotd', html);
					}
					// simpleSheet: false // false for multiple sheet one.
				});
			}
			try {
				init();
			} catch (e) {
				console.log('tabletop.js failed');
			}
		});
	} //if
	// --------------------- cool-books -----------------------
	if (sci_pg == "books") {
		// MASONRY CSS
		$('body').prepend(
			" <style> .grid-item img {outline:solid 1px white} .grid:after{content:'';display:block;clear:both}.grid-sizer,.grid-item{width:33.333%}@media screen and (min-width:768px){.grid-sizer,.grid-item{width:33.333%}}.grid-item{float:left}.grid-item img{cursor:pointer;display:block;width:100%} </style> "
		);
		var globAmz = "";
		$.when(
			// masonry+imagesloaded
			$.getScript("//cdnjs.cloudflare.com/ajax/libs/masonry/3.3.2/masonry.pkgd.min.js"),
			$.getScript("//cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.1.8/imagesloaded.pkgd.min.js"),
			// tabletop
			$.getScript("//www.sciensational.com/common/x/j/j/tabletop.js"),
			$.Deferred(function(deferred) {
				$(deferred.resolve);
			})
		).done(function() {
			function init(gdId, thisCat) {
				var htmlAmz = "";
				// tabletop.js to get gdoc data
				Tabletop.init({
					key: gdId,
					callback: function(data, tabletop) {
						json_data = data.Sheet2.elements;
						$.each(json_data, function(i, value) {
							htmlAmz += htmlAmzItm(
								value.Title,
								value.Price,
								value.Url,
								value.Image
							);
						});
						masonrify(htmlAmz, 'rec_' + thisCat);
					}
				});
			}
			try {
				init('1lcWOMl5MJFk4RZjbjWdQtfi5PS2_4_rGICpszPtUgXY', 'astronomy');
				init('1BR7zY1tkukVMLrjoCyptWBfce5mkytZdirIUl7yH1m0', 'maths');
				init('1ZelnHbv0qXswPeo50Teis7lYiPyF7t8Q2VbGog-80fI', 'physics');
				init('1dHcqMaDXhVxPlZgEO8wl_sRbCa-ivOMIzu-gkkjWBr8', 'chemistry');
				init('1jE4unfNWfRRjoFxzoVEQtiPLOuOkhYo-SzscieHXjYQ', 'biology');
			} catch (e) {
				console.log('tabletop.js failed');
			}
		});
		// 
		// 
	} // cool-books
	// --------------------- gifts -----------------------
	if (sci_pg == "scstore") {
		// 
		// insertBeforeHTML('as_str_0a', '<div id="eb_rec"></div><div style="padding:100px" id="grid-loading">Loading...</div>');
		function eb_ldr(qry, divId) {
			insertBeforeHTML(divId, '<div id="eb_rec_' + divId + '"></div><div style="padding:100px" id="ldng_' + divId + '">Loading...</div>');
			writeEbayRSS(
				qry, // query
				'eb_rec_' + divId, //divid
				'5337990178', //campaign id
				'', // rand
				8, // numItems
				(detectmob() ? 4 : 2), // rows
				(detectmob() ? 2 : 4), // cols
				'<a rel="nofollow" target="_blank" href="___LINK___"><b style="font-size:' + ((window.innerWidth > 360) ? '14' : '11') + 'px;line-height:1em;display:block;">___TITLE___</b><img src="___THUMBNAIL___"/></a>' // itemTemplate
			);
			$('#ldng_' + divId).remove();
		}
		// 
		$.ajax({
			url: '//www.google.com/jsapi',
			dataType: 'script',
			cache: true,
			success: function() {
				eb_ldr('science, toy', 'rec_science');
				eb_ldr('astronomy, toy', 'rec_astronomy');
				eb_ldr('math, toy', 'rec_maths');
				eb_ldr('physics, toy', 'rec_physics');
				eb_ldr('chemistry, toy', 'rec_chemistry');
				eb_ldr('biology, toy', 'rec_biology');
			}
		});
		// insertBeforeHTML('as_str_0a', tablify(affbnnrs, 1, 2, 'yes'));
		// 
		// 
		// function amzIfr(params) {
		// 	return '' +
		// 		'<iframe style="height:280px;width:100%;overflow:hidden;display:block" src="//www.sciensational.com/common/x/j/c/?s=amz&a=' + params + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		// 		'';
		// }
		// MASONRY CSS
		// $('#rec_astronomy').html(
		// 	amzIfr('astronomy+science___HomeGarden___false___top___1')
		// );
		// $('#rec_maths').html(
		// 	amzIfr('math+science___HomeGarden___false___top___1')
		// );
		// $('#rec_physics').html(
		// 	amzIfr('physics+science___HomeGarden___false___top___1')
		// );
		// $('#rec_chemistry').html(
		// 	amzIfr('chemistry+science___HomeGarden___false___top___1')
		// );
		// $('#rec_biology').html(
		// 	amzIfr('biology+science___HomeGarden___false___top___1')
		// );
		// 
		// 
	} // gifts
	// 
	// 
	// --------------------- search -----------------------
	if (sci_pg == "search") {
		(function() {
			// cse call back
			window.__gcse = {
				callback: myCSECallback
			};

			function myCSECallback() {
				// console.log('EXECUTED');
				// rmve "Cstm srch" txt frm gcse input
				$('input.gsc-input').attr('placeholder', '');
			}
			var cx = '011455411044472103064:knu8pgexq-s';
			var gcse = document.createElement('script');
			gcse.type = 'text/javascript';
			gcse.async = true;
			gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
				'//www.google.com/cse/cse.js?cx=' + cx;
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(gcse, s);
		})();
	}
	// 
	// 
	// ========== ALL JQ LAST =================
	////////////// <GDBSFRM 1/2 :: LINK> //////////////////////// 
	// v1 
	// req detectmob(), viewport(), ga_evCatVal(), JQ 
	// -------------- VARS TO CHANGE -------------
	var gdbsfrm_url = 'https://www.sciensational.com/common/x/j/c/?s=sbmtfct';
	var clc_elem = (detectmob()) ? '#lb_1_mob' : '#lb_1'; // string of onclick elem for jq obj e.g. '#abc' or '.abc'
	var scrolling = "yes"; // 'yes'|'no'
	var gaCat = 'sbmtfct'; // ga categ for ga_evCatVal
	var gaVal = 'inf_sbmtfctBtn: ' + sci_pg || ''; // ga val for ga_evCatVal
	// / -------------- VARS TO CHANGE -------------
	// 
	function fdbk_openClose() {
		if (document.getElementById('fdbk_window')) {
			$('.fdbk_window').remove();
		} else {
			var dimn = (detectmob()) ? 80 : 70;
			$('body').append(
				'<div id="fdbk_window" class="fdbk_window" style="width:' + viewport(dimn, 'vw') + 'px;height:' + viewport(dimn, 'vh') + 'px;background-color:#aaa;position:fixed;left:50%;top:50%;margin-top:-' + (viewport(dimn, 'vh') / 2) + 'px;margin-left:-' + (viewport(dimn, 'vw') / 2) + 'px;outline:solid 3px #aaa;box-shadow:0 0 10px #000;z-index:2147483647" >' +
				'<div style="width:20px;height:20px;position:absolute;right:0;color:white;cursor:pointer;" id="fdbk_close"><img style="width:100%;height:100%" src="https://www.google.com/intl/en_us/mapfiles/close.gif"/></div>' +
				'<iframe style="height:100%;width:100%;display:block" src="' + gdbsfrm_url + '" scrolling="' + scrolling + '" frameborder="0" border="0" ></iframe>' +
				'<div>'
			);
			$("#fdbk_close").on('click', function() {
				$('.fdbk_window').remove();
				$('.fdbk_window').hide();
			});
		}
	}
	$(clc_elem).on('click', function() {
		ga_evCatVal(gaCat, gaVal);
		fdbk_openClose();
		// console.log('tada');
	});
	////////////// </GDBSFRM 1/2 :: LINK> //////////////////////// 
	// 
	//
	// 
	// 
	// 
	// 
	// --- DTP ELEM EXPNDR BLING ---
	function dtpBlng() {
		var blCss = 'z-index:-2147483648;position:absolute;left:6%;right:6%;';
		$('body').append(
			// container 
			'<div style="' + blCss + 'top:' + $('#container').offset().top + 'px;height:' +
			// $('#container').outerHeight() +
			// 
			// $('.tbl_mtbl_td1').outerHeight() +
			// $('#footer').offset().top +
			$('.footertd').offset().top +
			'px;background-color:#FFCC33;"></div>' +
			// 
			'');
	}
	// 
	// --- DTP ---
	if (!detectmob()) {
		// --- /DTP ELEM EXPNDR BLING ---
		dtpBlng(); // 1/2 repeat this on window onload too! (for prop content height)
		// 
		// 
		// 011455411044472103064:knu8pgexq-s
		// www.sciensational.com/search.html
		// 
		// temporry wrkarnd, mov .tagline...
		// TDO: MOV .tagline in html... 
		$("#as_lt_bott").after('<div id="tagline_rec" style="margin:5px;"> </div>');
		$("#tagline_rec").html($(".tagline"));
	}
	// --- /DTP ---
	// 
	// 
	// 
	// ========== ALL LAST =================
	//
});
/* ------------ END JQUERY READY ------------------ */
// 
//////////////////////// VERY LAST WINDOW ON LOAD ///////////////////
// 
$(window).on("load", function() {
	// 
	if (sci_pg.match(/(scstore|books)/)) {
		affLocalize();
	}
	// 
	//////////////////// DTP ///////////////////
	if (!detectmob()) {
		try {
			dtpBlng(); // 2/2 repeat this on window onload too! (for prop content height)
			// 
		} catch (e) {}
		try {
			$("#as_lt_bott").before(
				'<div id="fbPgWdgt_cont" style="background-color:rgba(255, 255, 255, 0.1);position:relative;border:solid 5px #D92026;height:130px;overflow:hidden;">  ' +
				// 
				'<div style="height: 170px; left: -25px; overflow: hidden; position: absolute; top: -25px; transform: scale(0.70); width: 160px;">' +
				// 
				'<iframe style="height:170px;width:100%;overflow:hidden;display:block" src="//www.sciensational.com/common/x/j/c/?s=fbPgWdgt" scrolling="no" frameborder="0" border="0" ></iframe>' +
				// 
				'</div>' +
				'</div>' +
				''
			);
		} catch (e) {}
		// 
		writeInnerHTML('addths_any',
			'<div style="position: absolute; right: 10px; top: 60px;">' +
			'<div style="">' +
			'<div style="height:21px;overflow:hidden"><a rel="nofollow"  addthis:url="' + factpage_url + '" class="addthis_button_facebook_like" style="width:78px; height:20px;overflow:hidden"></a></div>' +
			'</div>' +
			'<div style="margin:5px 0 0 0;">' +
			'<div style="height:21px;width:65px;overflow:hidden"><iframe src="//platform.twitter.com/widgets/follow_button.html?screen_name=sciensational" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:88px; height:21px;" allowTransparency="true"></iframe></div>' +
			'</div>' +
			'</div>' +
			'');
		writeInnerHTML('as_gb_M',
			'<table><tr><td>' +
			'<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.sciensational.com%2F' +
			'&amp;send=false&amp;layout=button_count&amp;width=45&amp;show_faces=false&amp;font&amp;' +
			'colorscheme=light&amp;action=like&amp;height=21" scrolling="no" frameborder="0" ' +
			'style="float:left;margin:0 2px;border:none; overflow:hidden; width:45px; height:21px;" allowTransparency="true"></iframe>' +
			'</td><td>' +
			'<iframe src="//platform.twitter.com/widgets/follow_button.html?screen_name=sciensational&amp;show-count=false" ' +
			'scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:59px; height:21px;" allowTransparency="true"></iframe>' +
			'</td></tr></table>'
		);
		writeInnerHTML('addths_srch',
			'<table><tr><td>' +
			'<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.sciensational.com%2F' +
			'&amp;send=false&amp;layout=button_count&amp;width=45&amp;show_faces=false&amp;font&amp;' +
			'colorscheme=light&amp;action=like&amp;height=21" scrolling="no" frameborder="0" ' +
			'style="float:left;margin:0 2px;border:none; overflow:hidden; width:45px; height:21px;" allowTransparency="true"></iframe>' +
			'</td><td>' +
			'<iframe src="//platform.twitter.com/widgets/follow_button.html?screen_name=sciensational&amp;show-count=false" ' +
			'scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:59px; height:21px;" allowTransparency="true"></iframe>' +
			'</td></tr></table>'
		);
		// 
		// WIN-ONLOAD DTP ALL aff 1/1 cjorion LEFTBAR bottom
		// 1. TEMP-OFF: remov fbPgWdgt_cont 
		// OFF
		/*
		$('#fbPgWdgt_cont').remove();
		// 2. reduce font size of tagline
		$('.tagline').css('font-size', '12px');
		// 3. 
		$('#tagline_rec').after('<a style="display:block;" rel="nofollow" target="_blank" href="https://www.kqzyfj.com/j2102js0ys-FIMLIIMLFHHHKINPPFHKLJJPJOPIGGG" target="_top"> <img src="https://www.ftjcfx.com/oq68snrflj47BA77BA466697CEE469A88E8DE7555" alt="" border="0"/></a>');
		// 
		*/
	}
	// 
	//////////////// MOB /////////////////
	if (detectmob()) {
		// WIN-ONLOAD DTP ALL aff 1/1 cjorion LEFTBAR bottom
		// OFF
		// $('#as_lu_rec_B').after(' <div class="clearer"></div> <a style="display:block;width:200px;margin:10px auto;border: 4px solid #5b1f92;" rel="nofollow" target="_blank"  href="https://www.tkqlhce.com/3r65p-85-7NQUTQQUTNPPPSVTRVNPSTQTTVRPSOOO" target="_top"> <img style="width:100%;" src="https://www.lduhtrp.net/4r70bosgmk58CB88CB5777ADB9D57AB8BBD97A666" alt="" border="0"/></a><div class="clearer"></div> ')
		// 
		addthis_async_append_mob('addths_mobflares', '', '', '');
	}
	// 
	// 
	// 
	// 
	// 
});
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
/* ---- END EXEC ---- */
// UNUSD-FUNCS
function tn_vid() {}

function sci_a_LL() {}

function as_lt_bott() {}

function sci_as336_t() {}

function as_main_RT() {}

function as_main_RB() {}

function as_main_TL() {}

function sci_aslu_t() {}

function sci_aslu_b() {}

function sci_as336_b() {}

function as_books_TR() {}

function as_str_0a() {}

function as_str_0() {}

function as_lftbr() {}

function addths_str() {}

function searchbox2() {}

function as_gb_M() {}

function addths_srch() {}

function as_LLalt_sciencestore1() {}

function addths_twfcb_item(url, title) {}

function as_lb160_sciencestore1() {}

function as_lb160_coolbooks1() {}

function str_recom() {}

function as_str_1() {}

function blurbs() {}

function as_lb160_facts() {}

function as_LB2() {}

function as_glo_bott() {}