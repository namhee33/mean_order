var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return{
		show: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		add: function(req, res){
			console.log('hello from add customer!', req.body.name, req.body.created_at);
			var new_customer = new Customer({name: req.body.name, created_at: req.body.created_at});
			new_customer.save(function(err){
				if(err){
					console.log('fail to add to database!');
				}else{
					console.log('successfully added to the database');
					module.exports.show(req, res);
				}
			})

		},
		remove: function(req, res){
			console.log('hello from remove customer!', req.body._id);
			Customer.remove({_id:req.body._id}, function(err){
				if(err){
					console.log('can\'t remove it from the DB');
				}else{
					console.log('successfully removed from the DB');
					module.exports.show(req, res);
				}
			})
		}

	}

})();

