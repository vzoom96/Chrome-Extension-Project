$("#butt").click(function(){
	$.get("https://api.pinterest.com/v3/search/pins/", {"query":"facebook addiction", "access_token":"MTQzNTg1MDo0MzMzMzA5MzI4MDQ1MDU3OTU6MnwxMzkwNjk5MDA1OjAtLTg4YzFiYjc1ZmE0Y2RhNDRjYTVmNjZkYTVmMjZkNTgwNjlhYmQzNWY="},function(data,status){
	    alert("Data: " + data + "\nStatus: " + status);
	});
});