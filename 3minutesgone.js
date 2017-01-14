function progress(el, pnt, tim, step, max, loop) {
	// set the width of the element
	el.style.width = pnt + "%";
	// increase percentage
    pnt += step;
    if (pnt <= max) {
        setTimeout(function () {
	    	progress(el, pnt, tim, step, max, loop);
	    }	, tim);
    } else if (pnt >= max && loop > 0) {
    	pnt = 0;
    	el.style.width = pnt + "%";
        setTimeout(function () {
	    	progress(el, pnt, tim, step, max, loop);
	    }	, tim);
    }
}