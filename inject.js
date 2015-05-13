var returnval; //The callback result

function write_to_clipboard(text) {
	var input = document.createElement('textarea');
	document.body.appendChild(input);
	input.value = text;
	input.focus();
	input.select();
	document.execCommand('Copy');
	input.remove();
}


function get_tableelem_from_page(elemname) {
	var right_iframe_doc = document.getElementById('near').contentWindow.document;
	var boxdiv = right_iframe_doc.getElementById('query');
	var rows = boxdiv.getElementsByTagName('tr');

	var res;
	for (var i = 0; i < rows.length; i++) {
        var tds = rows[i].getElementsByTagName('td');
        if (tds[0].innerHTML==elemname) {
        	res = tds[1].innerHTML;
        	break;
        }
    }
	return res;
}


if (document.getElementById('near')) {
	var ra = get_tableelem_from_page('ra');
	var dec = get_tableelem_from_page('dec');
	returnval = 'SkyCoord('+ra+'*u.deg, '+dec+'*u.deg)';
	write_to_clipboard(returnval);
} else {
	returnval = '';
}

returnval;