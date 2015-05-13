function callback(res) {
	if (!(res[0])) {
		alert('This does not appear to be an SDSS navigate page - nothing copied.');
	}
}

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		file: 'inject.js'
	}, callback);
});