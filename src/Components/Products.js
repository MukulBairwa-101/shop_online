import React ,{useContext}from 'react'
import Data from "../assets/productsData/Data"
import {Link} from "react-router-dom"
import {AppContext} from "../assets/context/AppContext";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from "../assets/Materialui/Grid"

// import {ButtonStyle} from "../assets/Materialui/Grid"
import Button from '@material-ui/core/Button';
const Products = () => {
const [spacing, setSpacing] = React.useState(2)
const classes = useStyles();
    const {value1,value2}=useContext(AppContext);
    // const [count,setCount]=useContext(AppContext);
    const[count,setCount]=value1;
    const[cart,setCart]=value2;
    // const [cart,setCart]=useContext(AppContext);
    const addProduct =(el)=>{
        // console.log(el)
        if(!cart.includes(el)){
        setCart([...cart,el])
        setCount(count+1);
        }
        el.quantity+=1
    }
    // console.log(cart);
    
    return (
        <>
        {/* <div className="product">
            {Data.map((el,id)=>
                <>
                    <div key ={id} className="item" >
                        <div className="image-div">
                        <img src={el.image}  />
                        </div>
                        <p>{el.title}</p>
                        <p>Price:Rs.{el.price}</p>
                        <div className="buttons"> 
                        <Link to ="/">{el.Details}</Link>
                        <button onClick ={()=>addProduct(el)}>{el.Button}</button>
                        </div>
                    </div>
                    
                </>
            )}
        </div> */}
        <Grid container className={classes.root} spacing={2}>
             <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
          {Data.map((el,id) => (
              <>
            <Grid key={id} item>
              <Paper className={classes.paper}>
                    <Grid  >
                        <img src={el.image} className="image"   />
                    </Grid>
                        <p className="title">{el.title}</p>
                        <p className="title">Price:Rs.<span>{el.price}</span></p>
                    <Grid className="buttons"> 
                        <Link to ="/"className={classes.detailBtn}>{el.Details}</Link>
                        <Button variant="contained" className={classes.addToCartBtn}  onClick ={()=>addProduct(el)}>{el.Button}</Button>
                    </Grid>
              </Paper>
            </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
        </>
    )
}

export default Products;
