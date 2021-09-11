import React ,{useContext,useEffect,useState}from 'react'
import { AppContext } from '../assets/context/AppContext';
import {MdDelete} from "../assets/icons/Icons"
import Billing from "../Components/Billing";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../assets/Materialui/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {MdTouchApp}from "../assets/icons/Icons";
import {GiShoppingBag} from "../assets/icons/Icons"
const Cart = () => {
    // const [cart,setCart]=useContext([AppContext]);
    const {value1,value2,value3,value4,value5,value6,value7}=useContext(AppContext);
    const[count,setCount]=value1;
    const[cart,setCart]=value2;
    const [total,setTotal] =value3;
    const totalBill =value4;
    const [products,setProducts] =value6;
    const totalProducts =value7;
    // const [add,setAdd]=value5;
    const [quantity,setQuantity]=useState(0);
    // const [total,setTotal] =value3
    const classes = useStyles();


    
    const addMore =async(el)=>{
        // setQuantity(quantity+1);
            
        el.quantity+=1
        // console.log(el.quantity)
        setQuantity(el.quantity)
        // setCount(count+1);
        // setAdd(true);   
        let products = await totalProducts();
        setProducts(products) 
        let sum =  await totalBill();
        setTotal(sum);    
        // setAdd(!add);
    }
    const decreaseQuantity =async(el)=>{
        
        if(el.quantity>0){
            el.quantity-=1;
            setQuantity(el.quantity);
        }
        else el.quantity=0;
        // setAdd(true)
        let products = await totalProducts();
        setProducts(products) 
        let sum = await totalBill();
        setTotal(sum);    
        // setAdd(!add)   
    }
    // const countOccurences=(hardCopy,el)=>hardCopy.reduce((a,v)=>((v===el?a+1:a)))
    
    const removeFromCart =async (el,prevCount)=>{

        let hardCopy=[...cart];
        // count occurence of each el in cart
        // let occur=countOccurences(hardCopy,el);
        // console.log(occur)
        //remove el
        let products = await totalProducts();
        setProducts(products) 
        hardCopy=hardCopy.filter((item)=>item.id !== el.id);
        setCart(hardCopy);
        setCount(count-1)
        // if(count==="NaN"){setCount(value1)}
        
    }
    const handleChange =(el)=>{
        setQuantity(el.quantity)
    }
    const cartItems=cart.map((el,id)=>{
        return(
            
            <Grid container key ={id}   >
                
                 <Grid item xs={12} >
                      <Paper className={classes.cartPaper} >
                          
                             <img src={el.image} />
                             <div className={classes.cartProductDetail}>
                             <p>{el.title}</p>
                             <span><p>Price :  Rs. {el.price}</p></span> 
                             </div>
                           
                            <div className={classes.btnGroup}>
                                <Button variant="contained"  onClick={()=>decreaseQuantity(el)}>-</Button>
                                {/* <button className={classes.btnGroupItem} onClick={()=>decreaseQuantity(el)}>-</button> */}
                                <input  type ="text" className={classes.input} value ={el.quantity} onChange={()=>handleChange(el)} />
                                <Button  variant="contained" className={classes.addMore} onClick={()=>addMore(el)}>+</Button>
                                {/* <button onClick={()=>removeFromCart(el)}>{<MdDelete />}</button> */}
                                <IconButton aria-label="delete"  onClick={()=>removeFromCart(el)} className={classes.deleteBtn}><MdDelete /></IconButton>
                            </div>

                        </Paper>
                 </Grid>
                 
        </Grid>
        )
        
        
    })
    return (
        <Grid container spacing={3} className={classes.cartContainer} >
         {/* <div className="product">
            { cartItems}
            {count?"":"cart is empty"}
               
        </div> */}
        <Grid item xs ={4} className={classes.billGrid} >
            <Billing  />
        </Grid>
            {count ?
            <Grid item xs={8} style ={{display:"flex",justifyContent:"flex-end"}} >
            <Scrollbars style={{ width: "70%", height:350 }}>
                    <GiShoppingBag />Shopping bag
                    { cartItems}
                    </Scrollbars> 
            </Grid>
            :
            <Grid item xs={8} style ={{display:"flex",justifyContent:"center"}} >
                <div className="cartEmpty">
                <p>no products in the cart</p>
                <h2>Didn't Shop yet ?</h2>
                <p>Shop Now</p>
                <Button variant="contained" size="small" href="/" color="primary" className={classes.emptyCartBtn}>
                    <MdTouchApp />
                </Button>
                </div>
                
            </Grid>
            
            }
        
        </Grid>
    )
}

export default Cart;
