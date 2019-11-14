//////// FOR facts,guestbook,about

/* VARS */
//// PAGELEVEL IS HARDCODED IN HTML.
// 
if (typeof siteSection === 'undefined') {
	siteSection = "main";
}
//// AS_CD IS IN ASAD ITSELF!!!
// 
// 
//
currProt = (document.location.protocol == 'https:') ? 'https:' : 'http:';
sci_pg = siteSection;
if (sci_pg.match(/f_/)) {
	factpage_url = currProt + '//www.sciensational.com/' + document.URL.match(/(https?\:\/\/)([^\/]*\/)([^\/#\?\&]*)(\.html.*)/)[3] + '.html';
} else {
	factpage_url = currProt + '//www.sciensational.com/';
}
// 
// 
// 
// 
/////////// FUNCS //////////////
// 
// 
function detectmob() {
	// v1
	if (window.innerWidth <= 762) {
		return true;
	} else {
		return false;
	}
}

function insertBeforeHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforebegin", html);
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

function addthis_a(aTid, divId, customUrlTitle, url, title, contId, inStyle, addServHtml) {
	/**
	- V3 - 
	*/
	var addthis_id = aTid;
	var markup = addServHtml;
	//
	if (customUrlTitle == "custom") {
		var customUrlHtml = ' addthis:url="' + url + '" addthis:title="' + title + '" class="addthis_button_';
		try {
			markup = addServHtml.replace(/class\="addthis_button_/gm, customUrlHtml);
		} catch (e) {}
	}
	var html = '<style>' + inStyle + '</style>' +
		'<div id="' + contId + '" class="addthis_toolbox addthis_32x32_style ' + contId + '"> ' + markup + '</div>';
	var addthis_config = addthis_config || {};
	addthis_config.pubid = addthis_id;
	// 
	if (document.getElementById('addthisAsyncScript')) {
		/////////////////////
	} else {
		var addthisScript = document.createElement('script');
		addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#domready=1');
		addthisScript.setAttribute('id', 'addthisAsyncScript');
		document.body.appendChild(addthisScript);
	}
	document.getElementById(divId).insertAdjacentHTML("beforeend", html);
	try {
		addthis.toolbox('.' + contId);
	} catch (e) {}
}
// 
//////// IS MODDED!!!! //////////
function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
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
				' data-ad-client="' + '\x63' + 'a' + '-\x70\x75\x62-' + (1185143867926069 + 1078376356185310 + 3426682889248342) + '" ' +
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

function openNav() {
	document.getElementById("leftbar").style.width = "120px";
}

function closeNav() {
	document.getElementById("leftbar").style.width = "0";
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}
/* if #leftbar collapsible */
// 
// 
// ------------------ EXEC -------------------
//
// reg asads are all auto now.
/////////////

	if (siteSection == "search") {
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

//////////////////

appendHTMLByClass('container', '<div style="min-height:60px;width:80%; margin:10px auto 20px auto;"><div id="as_lu_inl01"></div></div>');
asadRespId(
	'<div>',
	'</div> ',
	"as_lu_inl01",
	"xyz_as_lu_inl01",
	"4137072642", ///  
	"6639084213", //   
	"link"
);
// 
// 
$(document).ready(function() {
	switch (siteSection) { // like if (abc == "cou") {}... 
		case "Astronomy":
			$('.nav-link:eq(0)').addClass('active');
			break;
		case "Maths":
			$('.nav-link:eq(1)').addClass('active');
			break;
		case "Physics":
			$('.nav-link:eq(2)').addClass('active');
			break;
		case "Chemistry":
			$('.nav-link:eq(3)').addClass('active');
			break;
		case "Biology":
			$('.nav-link:eq(4)').addClass('active');
			break;
		default:
			//
	}
	///// remove empty Prev or Next 
	if ($('.page-link:eq(0)').attr('href') == "#") {
		$('.page-link:eq(0)').remove();
	}
	if ($('.page-link:eq(1)').attr('href') == "#") {
		$('.page-link:eq(1)').remove();
	}
	////////////// <GDBSFRM 1/2 :: LINK> //////////////////////// 
	// V2: CSS IMP.
	// req detectmob(), viewport(), ga_evCatVal(), JQ 
	// -------------- VARS TO CHANGE -------------
	var gdbsfrm_url = 'https://www.sciensational.com/common/x/j/c/?s=sbmtfct';
	var clc_elem = '#lb_1, .submitfactlistener'; // string of onclick elem for jq obj e.g. '#abc' or '.abc'
	var scrolling = "yes"; // 'yes'|'no'
	var gaCat = 'sbmtfct'; // ga categ for ga_evCatVal
	var gaVal = 'inf_sbmtfctBtn: ' + siteSection || ''; // ga val for ga_evCatVal
	// / -------------- VARS TO CHANGE -------------
	// 
	function fdbk_openClose() {
		if (document.getElementById('fdbk_window')) {
			$('.fdbk_window').remove();
		} else {
			var dimn = (detectmob()) ? 80 : 70;
			$('body').append(
				'<div id="fdbk_window" class="fdbk_window" style="overflow-x:hidden;overflow-y:auto;width:' + viewport(dimn, 'vw') + 'px;background-color:#aaa;position:fixed;left:50%;top:5%;bottom:5%;_margin-top:-' + (viewport(dimn, 'vh') / 2) + 'px;margin-left:-' + (viewport(dimn, 'vw') / 2) + 'px;outline:solid 3px #aaa;box-shadow:0 0 10px #000;z-index:2147483647" >' +
				'<div style="width:20px;height:20px;position:absolute;right:0;color:white;cursor:pointer;" id="fdbk_close"><span style="display:block;color:black;font:bold 24px/1em sans-serif">&times;</span></div>' +
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
	// leftbar fb + tw
	var leftbar_append = '<div class="lbitem lb10" id="lb_10"> <!-- <h3> <a>&nbsp</a> </h3> --> <a rel="nofollow" target="_blank" href="https://www.facebook.com/SciensationalFacts/" title="Sciensational on Facebook"> <span class="sprt bt_fb" title=""></span> </a> </div>' +
		'<div class="lbitem lb10" id="lb_10"> <!-- <h3> <a>&nbsp</a> </h3> --> <a rel="nofollow" target="_blank" href="https://twitter.com/sciensational" title="Sciensational on Twitter"> <span class="sprt bt_tw" title=""></span> </a> </div>';
	appendHTML("leftbar", leftbar_append);
	// 
	// addthis on all
	var addThCont = detectmob() ?
		insertBeforeHTML("headerwrap", '<div style="width:32px;height:160px;background:none;position:absolute;right:13px;"><div id="addThRec"></div></div>') :
		insertBeforeHTML("headerwrap", '<div style="height:32px;background:none;position:absolute;top:160px;left:222px;"><div id="addThRec"></div></div>');
	addthis_a(
		'sciensational', // aTid REQ
		'addThRec', // divId REQ
		'', // customUrlTitle
		'', // url
		'', // title
		'addThRec', // contId REQ
		'', // inStyle
		' <a rel="nofollow" class="addthis_button_facebook"></a><a rel="nofollow" class="addthis_button_twitter"></a><a rel="nofollow" class="addthis_button_email"></a><a rel="nofollow" class="addthis_button_favorites"></a><a rel="nofollow" class="addthis_button_expanded"></a>' // addServHtml
	);
	// 
	// 
	// 
	// 
});
// 
// 
// ------------------ /EXEC -------------------
// 
//