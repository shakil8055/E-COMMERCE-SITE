import React,{useState} from "react";
import Card from "./components/card";
import Header from "./components/header";
import TopBar from "./components/TopBar";
import logo from "./assets/alfa logo.png"
function App() {
  let [cart, setCart] = useState(0);
  let data =[
    {
      isSale:false,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/61IytOl+V7L._SY741_.jpg",
      productName:"T-Shirts",
      isPrice1:false,
      price1:null,
      isPrice2:true,
      price2:" ₹199.00",
    },
    {
      isSale:true,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/71-+ul3xupL._SX679_.jpg" ,
      productName:"Hoddie",
      isPrice1:true,
      price1:"₹699.00",
      isPrice2:true,
      price2:" ₹499.00",
    },
    {
      isSale:true,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/5187lqXpoVL._SY679_.jpg",
      productName:"Pyjama Set",
      isPrice1:true,
      price1:"₹1099.00",
      isPrice2:true,
      price2:" ₹759.00",
    },
    {
      isSale:false,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/41zk84ka1kL.jpg" ,
      productName:"Jumpsuit",
      isPrice1:true,
      price1:null,
      isPrice2:true,
      price2:" ₹780.00",
    },
    {
      isSale:true,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/51hW54rOs6L._SY550_.jpg" ,
      productName:"Shape Wear",
      isPrice1:true,
      price1:"₹599.00",
      isPrice2:true,
      price2:" ₹389.00",
    },
    {
      isSale:false,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/71IiAPM9JSL._SX522_.jpg" ,
      productName:"Plazo",
      isPrice1:false,
      price1:null,
      isPrice2:true,
      price2:" ₹396.00",
    },
    {
      isSale:true,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/5187kfIjzjL._SY679_.jpg" ,
      productName:"Leggings",
      isPrice1:true,
      price1:"₹559.00",
      isPrice2:true,
      price2:" ₹315.00",
    },
    {
      isSale:false,
      sale:"sale",
      image: "https://m.media-amazon.com/images/I/71U2blrWtIL._SY500_.jpg" ,
      productName:"Patiyala",
      isPrice1:true,
      price1:null,
      isPrice2:true,
      price2:" ₹630.00",
    }
  ]
  return <>
  {}
      <TopBar cart={cart} setCart={setCart}/>
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
        data.map((e,i)=>{
          return  <Card cart={cart} setCart={setCart} data={e} key={i}/> 
        })
      }
            
          </div>
        </div>
      </section>
    <footer className="footer py-5">
    <div className="container"><p className="m-0 text-center ">Copyright &copy; alfa garments 2024</p></div>
</footer>
</>
}

export default App;
