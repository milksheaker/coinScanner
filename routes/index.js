const express=require('express');
const router = express.Router();

const getMarketSummaries = require('../services/exchanges_api_collect');
const getMarketSummaries = require('../services/exchanges_api_collect');
const getMarketSummaries = require('../services/exchanges_api_collect');
const getMarketSummaries = require('../services/exchanges_api_collect');

const config =require('../config.json');

router.get('/', function(req, res){
	// Get the name of the exchange from request
	const exchangeName = req.query.exchange;

	// Get time of the request
	var time = new Date();
	var nowMinutes=time.getMinutes();
	var nowHours=time.getHours();

	// If there is an exchange indicated
	if(exchangeName){
		// If the exchange's endpoint is defined in config.js
		if(config.hasOwnProperty(exchangeName)){
			getMarketSummaries(config[exchangeName].marketSummariesEndpoint);
		
			// 1- Determine current blocks for 5minute and 1hour intervals

			// 2- Determine past blocks for 5minute and 1hour intervals

			// 3- Request to get past blocks from PostGrel

			// 4- Compute percent change and look for patterns
		}
	}
	//res.redirect('http://www.google.com');
});

// Defines what is avaible public (after require)
module.exports=router;