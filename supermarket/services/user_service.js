//用户业务逻辑处理
const UserDao = require("../dao/user_dao.js");

const UserService = {
	//注册
	register(req,res,next){
		//获取用户注册信息
		const{username,password} = req.body;
		//保存到数据库中
		UserDao.save({username,password})
			.then((dahta)=>{
				res.json({res_code:1,res_error:"",res_body:data});
			})
			.catch((err)=>{
				res.json({res_code:0,res_error:"",res_body:{}});
			});
	},
	login(){

	},
	logout(){

	}
};

module.exports = UserService;