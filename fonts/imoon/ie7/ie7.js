/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'imoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'imoon-medal': '&#xe92d;',
		'imoon-camera': '&#xe92c;',
		'imoon-plus': '&#xe92b;',
		'imoon-accordion': '&#xe901;',
		'imoon-arbor': '&#xe902;',
		'imoon-balalaika': '&#xe903;',
		'imoon-bar': '&#xe904;',
		'imoon-barrel': '&#xe905;',
		'imoon-billiard': '&#xe906;',
		'imoon-books': '&#xe907;',
		'imoon-carpet': '&#xe908;',
		'imoon-chest': '&#xe909;',
		'imoon-child': '&#xe90a;',
		'imoon-clock': '&#xe90b;',
		'imoon-clock2': '&#xe90c;',
		'imoon-cook': '&#xe90d;',
		'imoon-couple': '&#xe90e;',
		'imoon-fire': '&#xe90f;',
		'imoon-fireplace': '&#xe910;',
		'imoon-fish': '&#xe911;',
		'imoon-gate': '&#xe912;',
		'imoon-gram': '&#xe913;',
		'imoon-jug': '&#xe914;',
		'imoon-leather': '&#xe915;',
		'imoon-libra': '&#xe916;',
		'imoon-light': '&#xe917;',
		'imoon-logo': '&#xe918;',
		'imoon-nature': '&#xe919;',
		'imoon-organ': '&#xe91a;',
		'imoon-piano': '&#xe91b;',
		'imoon-present': '&#xe91c;',
		'imoon-sigar': '&#xe91d;',
		'imoon-smoke': '&#xe91e;',
		'imoon-sofa': '&#xe91f;',
		'imoon-sprite': '&#xe920;',
		'imoon-statue': '&#xe921;',
		'imoon-street_lamp': '&#xe922;',
		'imoon-swords': '&#xe923;',
		'imoon-table': '&#xe924;',
		'imoon-tv-1': '&#xe925;',
		'imoon-tv': '&#xe926;',
		'imoon-vase': '&#xe927;',
		'imoon-water': '&#xe928;',
		'imoon-window': '&#xe929;',
		'imoon-wood_table': '&#xe92a;',
		'imoon-link': '&#xe900;',
		'imoon-brief': '&#xe92e;',
		'imoon-share': '&#xe92f;',
		'imoon-vk': '&#xe930;',
		'imoon-twitter': '&#xe931;',
		'imoon-fb': '&#xe932;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/imoon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
