//3
//4

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     switch (req.url) {
//         case "/":
//             res.writeHead(200);
//             res.write("welcome to home page");
//             break;
//         case "/about":
//             res.writeHead(200);
//             res.write("welcome to about page");
//         break;
//         case "/blog":
//             res.writeHead(200);
//             res.write("welcome to blog page");
//         break;
//         case "/blog/post":
//             res.writeHead(200);
//             res.write("welcome to post page");
//         break;
//         default:
//             res.writeHead(404)
//             res.write("not found");
//             break;
//         }
//         res.end();
//         console.log(res);
//     console.log(req.method);
//     console.log(req.url);
// });

// server.listen(2000);



//5

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     let story = {header: "lake",author:"haim",data: 2021};
//     let storyJson = JSON.stringify(story);
//         res.write(storyJson)
//         res.end();
// });

// server.listen(2000);

//6
//7

// let carsArray = [
//     {model: "mazda",year: 2021,price: 100},
//     {model: "opal",year: 2022,price: 200},
//     {model: "fiat",year: 2023,price: 300}
// ];
// const carsJson = JSON.stringify(carsArray);

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     switch (req.url) {
//         case "/":
//             fs.readFile("./public/index.html","utf-8",(err,data)=>{
//                 if(err){
//                     res.writeHead(404)
//                     res.write("somthing worng");
//                 }
//                 else{
//                     res.write(data);
//                  }
//                  res.end();
//              });
//         break;
    
//         default:
//             res.writeHead(404)
//             res.write("not found");
//         break;
//     }
  
   
// });

// server.listen(2000);


//8

// let productsArray = [
//     {name: "milk",price: 100,image: "https://cdn.pixabay.com/photo/2016/08/11/23/25/glass-1587258_960_720.jpg"},
//     {name: "toy",price: 200,image: "https://cdn.pixabay.com/photo/2016/11/04/23/23/luggage-1799224_960_720.jpg"},
//     {name: "car",price: 300,image: "https://cdn.pixabay.com/photo/2016/11/24/14/00/christmas-tree-1856343_960_720.jpg"}
// ];
// let productsJson = JSON.stringify(productsArray);

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     switch (req.url) {
//         case "/":
//             fs.readFile("./public/index.html","utf-8",(err,data)=>{
//                 if(err){
//                     res.writeHead(404);
//                     res.write("SORRY Somting Worng With Main Page");
//                 }
//                 else{
//                     res.write(data)
//                 }
//                 res.end();
//             });  
//         break;
//         case "/about":
//             fs.readFile("./public/about.html","utf-8",(err,data)=>{
//                 if(err){
//                     res.writeHead(404);
//                     res.write("SORRY Somting Worng With About Page");
//                 }
//                 else{
//                     res.write(data)
//                 }
//                 res.end();
//             });  
//         break;
//         case "/sales":
//             fs.readFile("./public/sales.html","utf-8",(err,data)=>{
//                 if(err){
//                     res.writeHead(404);
//                     res.write("SORRY Somting Worng With Sales Page");
//                 }
//                 else{
//                     res.write(data)
//                 }
//                 res.end();
//             }); 
//         break;
//         case "/products":
//             res.write(productsJson);  
//             res.end();
//         break;
//         case "/product":
//             res.write(productJson);
//             res.end();
//         break;
//         default:
//             res.writeHead(404);
//             res.write("SORRY Somting Worng Baddly")
//         break;
//     }
// });

// server.listen(2001);
