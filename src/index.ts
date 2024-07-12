
//call back
//promise
//async =(function ko promise se return krta he)
//await =(promise ke recive hone ka wait karta he//await ko async ke saath hamesha use krta he .promise ki return value ko variable me store krta he//program ke execution ko specific time tuk suspend krta he// no need of then() changing )

import { resolve } from "path"

//synthetic sugar(kissi complex si cheez ko easy banana jo k likhne me bhi or likhne me bhi assaan banata he.)
function myFun(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("response suseccfull!")
        },2000);
    })
}
///for rejection------
async function task() {
    try{
        let data = await myFun()
        console.log("My response :"+data);
    }catch(error){
        console.log(`My error: ${error}`);
    }
    
    
    
}
task()