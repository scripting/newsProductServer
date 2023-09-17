const myVersion = "0.5.0", myProductName = "newsproduct";  

const fs = require ("fs");
const request = require ("request"); 
const davehttp = require ("davehttp");  
const utils = require ("daveutils");  

var config = { 
	port: process.env.PORT || 1408,
	flLogToConsole: true,
	flTraceOnError: false, //davehttp does not try to catch the error
	flAllowAccessFromAnywhere: true
	};


function getContentFromFeedland (urlTemplate, callback) {
	if (urlTemplate === undefined) {
		const message = "Can't get the news product because template parameter isn't provided.";
		callback ({message});
		}
	else {
		var urlServer = "https://feedland.org/newsproduct?template=" + urlTemplate;
		console.log ("getContentFromFeedland: urlServer == " + urlServer);
		request (urlServer, function (err, response, htmltext) {
			if (err) {
				callback (err);
				}
			else {
				if ((response.statusCode >= 200) && (response.statusCode <= 299)) {
					callback (undefined, htmltext);
					}
				else {
					const message = "HTTP error == " + response.statusCode;
					callback ({message});
					}
				}
			});
		}
	}

davehttp.start (config, function (theRequest) {
	const params = theRequest.params;
	function returnError (err) {
		theRequest.httpReturn (500, "text/plain", err.message);
		}
	function returnHtml (htmltext) {
		theRequest.httpReturn (200, "text/html", htmltext);
		}
	function httpReturn (err, htmltext) {
		if (err) {
			returnError (err);
			}
		else {
			returnHtml (htmltext);
			}
		}
	switch (theRequest.lowerpath) {
		case "/":
			getContentFromFeedland (params.template, httpReturn);
			return;
		case "/now":
			theRequest.httpReturn (200, "text/plain", new Date ());
			return;
		default:
			theRequest.httpReturn (404, "text/plain", "Not found.");
			return;
		}
	});


