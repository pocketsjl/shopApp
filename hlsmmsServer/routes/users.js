var express = require('express');
var router = express.Router();

//引入mysql模块
const mysql=require("mysql");

//数据库配置链接(创建数据库链接)
const conn=mysql.createConnection({
    host   :'localhost',//数据库主机名
    user   :'root',   //数据库账号
    password:'root', //密码
    database :'hlsmms'//使用哪个数据库

});
//打开数据库连接
conn.connect(err=>{
  if(err){
    console.log("数据库连接失败",err.message)
  }
  else{
      console.log("数据库连接成功")
  }
});
//通用的跨域路由
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    next();//放行下面路由
});

//添加路由
router.post("/useradd",(req,res)=>{

    let {username,pass,usergroup}=req.body;

    let sqlStr="insert into userinfo (username,userpwd,usergroup) values(?,?,?)";
    let sqlParmas=[username,pass,usergroup];
    //执行sql语句
    conn.query(sqlStr,sqlParmas,(err,result)=>{
        if(err){
            throw err;
        }else {
            //执行结果
           // res.send("执行结果"+result);
            if(result.affectedRows>0){
                res.json({"isOk":true,"code":1,"msg":"用户添加成功！"});
            }else {
                res.json({"isOk":false,"code":-1,"msg":"用户添加失败！"});
            }
        }
    })

    //res.send("接收到的值:"+username+"_"+pass+"_"+usergroup)
});


router.get("/getusers",(req,res)=>{
    //构造 sql语句
    let sqlStr="select * from userinfo order by userid DESC";//用户id降序

    //执行sql语句
    conn.query(sqlStr,(err,users)=>{
       if(err){
           throw err;

       }else{
           //返回查询用户数据给前端
           res.send(users);
       }
    })


});





module.exports = router;
