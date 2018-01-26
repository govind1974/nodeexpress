
/*
 * GET home page.
 */

exports.index = function(req, res){
  
	
	var jdata = { "title": 'hello', "message":'world'};
	res.render('test', jdata);
	//res.render('calcsubmit',{first: v1,second:v2,result:res});
};
exports.calc = function(req, res){
	  
	var v1 = req.query.txt1;
	var v2 = req.query.txt2;
	var v3 = v1 * v2;
	res.render('calcsubmit',{first: v1,second:v2,result:v3});
};