function progress(el, pnt, step, max, loop) {
	el.style.width = pnt + "%";
    pnt +=5;
    if (pnt <= max) {
        setTimeout(function () {
	    	progress(el, pnt, step, max, 0);
	    }	, step);
    } else if (pnt >= max && loop > 0) {
    	pnt = 0;
    	el.style.width = pnt + "%";
        setTimeout(function () {
	    	progress(el, pnt, step, max, 0);
	    }	, step);
    }
}