
const {Zhiyuan} = require("./model.js");

const ZhiyuanDao={
	find(obj){
		pageCount=Number(obj.pageCount);
		// console.log(1);
		return Zhiyuan.find().limit(pageCount).skip((obj.page-1)*pageCount);
	},
	save(zhangdaninfo){
		zhangdaninfo.create_time=new Date();
		return new Zhiyuan(zhangdaninfo).save();
	},
	findAll(){
		return Zhiyuan.find();
	},
	query(obj){
		return Zhiyuan.find(obj);
	},
	update(obj){
		console.log(obj.no);
		return Zhiyuan.findOneAndUpdate({"no":obj.no},{$set:obj});
	},
	delete(obj){
		console.log(obj);
		return Zhiyuan.remove(obj);
	}
}
module.exports=ZhiyuanDao;