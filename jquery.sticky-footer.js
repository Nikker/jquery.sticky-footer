/*!
 * jQuery Sticky Footer v0.0.1 (https://github.com/Nikker/jquery.sticky-footer)
 * Copyright 2016 Nikki DelRosso
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
  throw new Error('The jQuery sticky footer extension requires jQuery!');
}

jQuery.fn.stickyFooter = function() {

	var $ = jQuery;
	var that = this;

	var setSticky = function() {
		var footer = $(that);

		// Reset CSS - yes, if you use these, they'll be overwritten
		footer.css({
			'position': '',
			'bottom': '',
			'left': '',
			'width': ''
		});

		if (footer.offset().top + footer.outerHeight() < $(window).height()) {
			footer.css({
				'position': 'fixed',
				'bottom': 0,
				'left': 0,
				'width': '100%'
			});
		}
	};

	setSticky();
	$(window).resize(setSticky);
};
