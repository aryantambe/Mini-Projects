import express from 'express';

const app=express();
const port =3000;


app.get("/",(req,res)=>{
    const obj=new Date(); //creating the date object here to avoid bugs 
    let day=obj.getDay();
    console.log(day)
    if(day===0 || day===6){
        res.render("index.ejs",{days:{dayType:"A weekend",advice:"Chill out brother party"}})
    }
    else{
        res.render("index.ejs",{days:{dayType:"a weekday",advice:"Work hard brother"}}) //sending some variables (like objects in this case) to the ejs templating engine
    }
    
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
    
})