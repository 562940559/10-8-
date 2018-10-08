
const {Gongyingshang} = require("./model.js");

const GongyingshangDao={
	find(obj){
		pageCount=Number(obj.pageCount);
		// console.log(1);
		return Gongyingshang.find().limit(pageCount).skip((obj.page-1)*pageCount);
	},
	save(obj){
		obj.create_time=new Date();
		return new Gongyingshang(obj).save();
	},
	findAll(){
		return Gongyingshang.find();
	},
	query(obj){
		console.log(obj);
		return Gongyingshang.find(obj);
	},
	update(obj){
		console.log(obj.no);
		return Gongyingshang.findOneAndUpdate({"no":obj.no},{$set:obj});
	},
	delete(obj){
		console.log(obj.no);
		return Gongyingshang.remove(obj);
	}
}
module.exports=GongyingshangDao;