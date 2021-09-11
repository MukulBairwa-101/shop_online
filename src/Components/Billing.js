import React,{useContext,useState,useEffect} from 'react'
import { AppContext } from '../assets/context/AppContext';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../assets/Materialui/Grid';

const Billing = () => {
    const {value1,value2,value3,value4,value5,value6,value7,value8}=useContext(AppContext);
    const[cart,setCart]=value2;
    const [total,setTotal] =value3;
    const totalBill =value4;
    const [products,setProducts] =value6;
    const totalProducts =value7;
    const [error,setError]=value5;
    const [grandTotal,setGrandTotal]=value8;
    const [checked,setChecked]=useState(false);
    const Discount = 499;

    const classes = useStyles();

    useEffect(()=>{
    //    console.log(" i called ", totalAmount());
    
       let products =totalProducts();
       setProducts(products); 
    //    couponHandler();
    let sum = totalBill();
    setChecked(false);
    setTotal(sum);
    setGrandTotal(total);
    if(products>=3){
        setChecked(true);
        handleCheckBox();    
    }
    },[cart])
  
    const handleCheckBox =()=>{
        
        if(checked && products>=3){
            setChecked(!checked);
            let sum =totalBill();
            sum= sum-Discount;
            setGrandTotal(sum);
            // setTotal(grandTotal);     
        }
        else {
            setTotal(total)
            setChecked(!checked);
        };
        
       
        // console.log("chekbox clicked",checked);
    }
    // const discountApplied=()=>{
        
    // }
    return (
        <Grid xs={12} className={classes.billPaymentGrid}>
           
            <Grid xs={12} className={classes.billButton}>
                <h3 >Payment</h3>
                <br />
                <hr />
                <Grid className={classes.billText}>
                <p>Total products : {products}</p>
                <span>Total  : Rs.   {total}</span>
                </Grid>
               <Grid>
               <FormControl required  component="fieldset">
                <FormGroup>
                    <FormControlLabel label="  Discount  :    Rs 499  " 
                     control=
                     {error ? 
                        <Checkbox disabled
                        className={classes.checkboxStyle} onClick={handleCheckBox} />
                        :
                        <Checkbox 
                        className={classes.checkboxStyle} onClick={handleCheckBox} />
                    }
                     
                     />
                </FormGroup>
                <FormHelperText  className = {checked ? "discounttext" : "" }  >`{ error? "Buy 3 or more Products to apply discount coupon":"Discount coupon can be applied"}`</FormHelperText>
                </FormControl>
               </Grid>
                <br />
                <hr  />
                <Grid xs={12} className={classes.billText}><span>Grand-Total  : Rs.  {checked?grandTotal:total}</span></Grid>
            </Grid>
           
            <Grid xs={12} className={classes.billButton}><Button variant ="contained" className={classes.checkoutBtn} >Checkout </Button></Grid>
            
            {/* {cart.map((el,id)=>{
                return(
                <div key ={id}>
                    <p>{el.price}</p>
                </div>
            )})} */}
        </Grid>
    )
}

export default Billing
