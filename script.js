let cart = [];
let prices = {
  Burger:199,
  Pizza:299,
  "Paneer Butter Masala":210,
  "Chicken Biryani": 350
};

function add(item){
  cart.push(item);
  update();
}

function update(){
  let list=document.getElementById("list");
  list.innerHTML="";
  let total=0;

  cart.forEach(i=>{
    total+=prices[i];
    let li=document.createElement("li");
    li.innerText=i+" - ₹"+prices[i];
    list.appendChild(li);
  });

  document.getElementById("total").innerText="Total: ₹"+total;
}

function order(){
  if(cart.length==0){
    alert("Cart empty!");
    return;
  }

  document.getElementById("statusText").innerText="Order Placed ✔";

  setTimeout(()=>document.getElementById("statusText").innerText="Cooking 🍳",2000);
  setTimeout(()=>document.getElementById("statusText").innerText="Out for Delivery 🚚",4000);
  setTimeout(()=>document.getElementById("statusText").innerText="Delivered 🎉",6000);

  cart=[];
  update();
}

function sendMsg(e){
  e.preventDefault();
  alert("Message Sent ✔ We will contact you soon!");
}