const express = require('express')
const app = express();
const cors = require('cors');
const db = require('./connect-db');

app.use(cors());//這是很重要讓CORS，跨伺服器取值的一個開通代碼
app.use(express.urlencoded());


app.get('/',function(req,res){
    res.send('Hello World');
})

app.get('/member',async(req,res)=>{ //req = request 請求 ， res = responde 回應
   //先不要寫res.send ，這樣的寫法效果跟return差不多一樣。送了以後以下都不執行。
   const sql = 'SELECT * FROM `room_photo`';

   const [rs] = await db.query(sql);

    res.json({DB:rs, userLogin: true,Chung: "issoHandsome"});
      }
    );

    app.post('/member',async(req,res)=>{ //req = request 請求 ， res = responde 回應
        //先不要寫res.send ，這樣的寫法效果跟return差不多一樣。送了以後以下都不執行。
       console.log('member post',req.body);
       const sql = 'SELECT * FROM `room_photo` WHERE sid =?';

       const [rs] = await db.query(sql,[req.body.sid]);
    
        res.json(rs);
     } );
    
    
//這是新增多一個頁面，function裡面可以做執行。就跟那個網頁做require和post 在這裡function做呼叫


// app.post('/',function(req,res){
//     res.send('Hello World');
// })//可以做傳送東西。
console.log('Server started at: http://localhost:3000');
app.listen(3000);