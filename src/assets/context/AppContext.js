import React,{useState,createContext} from "react";

export const AppContext = createContext();

export const Provider = (props) => {
    const [count, setCount] = useState(0);

    // const [open,setOpen]=useState("close");
    // const [cart,setCart]=useState([ {
    //     id:1,
    //     title:"Mens denim jeans",
    //     // image:prod7,
    //     price:"Rs 600",
    // }]);
    const [cart,setCart]=useState([]);
    const [total,setTotal]=useState(0);
    const [grandTotal,setGrandTotal]=useState(0);
    const [products,setProducts]=useState(0);
    const[error,setError]=useState(true);
    
     const totalAmount =()=>{
      let amount =cart.reduce((total,el)=>{
        console.log(el.price)
        total += (el.price)*el.quantity
        // if(products>=3){
        //   total += (el.price)*el.quantity - Discount;
        // }
        // else total += (el.price)*el.quantity
      return total
    },0);
    return amount;
    }
    const totalProducts =()=>{
      let products = cart.reduce((products,el)=>{
        products += el.quantity;
        if(products>=3){
          // setError("Discount coupon can be applied");
          setError(false);
          console.log(error)
        }
        else setError(true);
      return products
      },0)
     return products;
    }
    //   const couponHandler =()=>{
    //     if(products>=3){
    //         // setError("Discount coupon can be applied");
    //         setError(false);
    //         console.log(error)
    //     }
    // }
     // if(add){
      //   let amount =cart.reduce((total,el)=>{
      //     console.log(el.price)
      //     total += (el.price)*el.quantity 
      //   return total
      // },0);
      // return amount;
      // }
      // else if(add){
      //   let amount =cart.reduce((total,el)=>{
      //     console.log(el.price)
      //     total -= (el.price)*el.quantity
      //   return total
      // },0);
      // return amount;
      // }
      //  else "mmks"
    // const global ={value1:[count,setCount],value2:[cart,setCart],value3:[total,setTotal],value4:{totalAmount}}
    
    return (
      <AppContext.Provider value={{value1:[count,setCount],value2:[cart,setCart],value3:[total,setTotal],value4:totalAmount,value5:[error,setError],value6:[products,setProducts],value7:totalProducts,value8:[grandTotal,setGrandTotal]}}>
        {props.children}
      </AppContext.Provider>
    )
  }
  