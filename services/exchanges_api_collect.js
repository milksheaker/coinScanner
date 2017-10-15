const request=require('request');

function getMarketSummaries(marketSummariesEndpoint){
	request.get({
		url: marketSummariesEndpoint,
	}, function(error, response){
		if(error||response.statusCode !==200){
			console.log('Failed to call:' + marketSummariesEndpoint);
		}else{
			console.log('Markets successfully downloaded:'+JSON.stringify(response));
		}
	});
};

module.exports=getMarketSummaries;