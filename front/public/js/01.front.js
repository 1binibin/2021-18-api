$('.bt-token').click(onGetToken)
$('.bt-data').click(onGetData)

var token = null;
let userid = 'wonbin';
let apikey = '2dd82e6d-652f-4242-ae65-4b694dae1a25';
let tokenURL = 'http://127.0.0.1:3100/api/sign';
let dataURL = 'http://127.0.0.1:3100/api';

function onGetToken() {
	var data = { userid: userid, apikey: apikey }
	axios.post(tokenURL, data).then(getToken).catch(onError);

	function getToken(r) {
		token = r.data.token;
		console.log(token)
	}
}


function onGetData() {
	let headers = { authorization: token }
	axios.get(dataURL, { headers }).then(getData).catch(onError);

	function getData(r) {
		console.log(r.data);
	}
}

	function onError(err) {
		console.log(err);
	}