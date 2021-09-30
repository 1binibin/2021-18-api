$('.bt-token').click(onGetToken)
function onGetToken() {
	let userid = 'wonbin';
	let apikey = '2dd82e6d-652f-4242-ae65-4b694dae1a25';
	let apiURL = 'http://127.0.0.1:3100/api/sign';
	var data = { userid: userid, apikey: apikey }
	axios.post(apiURL, data).then(onResult).catch(onError);

	function onResult(r) {
		console.log(r.data);
	}


	function onError(err) {
		console.log(err);
	}
}