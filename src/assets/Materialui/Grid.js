import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import { BiBorderRadius } from 'react-icons/bi';


export const useStyles = makeStyles(() => ({
    
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 380,
    width: 230,
    margin: "2rem",
    display: "flex",
    flexDirection:'column',
    justifyContent:'space-between'
  },
  addToCartBtn:{
          color:"white",
          backgroundColor:'#4d4e4f',
          fontSize:".6rem",
          '&:hover': {
            backgroundColor: '#393a3b',
            boxShadow: 'none',
          },
  },
  addMore:{
    color:"white",
    backgroundColor:'#134e8a',
    fontSize:"1rem",
   
    '&:hover': {
      backgroundColor: '#1a5187',
      boxShadow: 'none',
    },
},
  deleteBtn:{
    fontSize:"1rem",
    borderRadius:"1rem",
    color:"#b53535",
    padding: "0"

},
  detailBtn:{
    color:"#1a5e7d",
    textDecoration:"none",
    fontSize:"1rem",
    letterSpacing:".1rem",
    marginRight:".5rem",
  },
  cartContainer:{
    display: "flex",
    justifyContent:"flex-end",
    backgroundColor:"#f5f5f5",
    height:"70vh",
  },
  cartPaper:{
    height: 50,
    width: 540,
    margin: "1rem",
    display: "flex",
    flexDirection:'row',
    justifyContent:'space-around',
    textAlign:"center",
    fontFamily: "'Montserrat', sans-serif",
  },
  cartProductDetail:{
    width:200,
    fontSize:".9rem",
    
  },
  btnGroup:{
    display: "flex",
    justifyContent:"space-around",
    margin:".5rem",
    padding: ".5rem",
    width:300
  },
  input:{
    width:50,
    textAlign:"center",
    border:".05rem solid #ebebeb "
  },
  billGrid:{
    textAlign:"center",
    border:".05rem solid ebebeb",
    
  },
  billPaymentGrid:{
    paddingLeft:"2rem",
    fontWeight:"400",
    fontFamily:"'Montserrat', sans-serif"
    
  },
  billButton:{
    marginTop:"1rem",
    backgroundColor:"white",
    padding:"1rem",
    borderRadius:".5rem",
    boxShadow:".02rem .09rem .9rem #b3b3b3",
    fontSize:".7rem",
  },
  billText:{
    margin: "1rem",
    fontSize:"1.3rem",
    color:"#545454",
  },
  checkboxStyle:{
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checkoutBtn:{
    color:"white",
    backgroundColor:'#0a0a0a',
    fontSize:".8rem",
    margin:".5rem",
    width:"200px",
    fontWeight:"600",
    letterSpacing:".3rem",
    '&:hover': {
      backgroundColor: 'white',
      color:"#0a0a0a",
      boxShadow: 'none',
      border:".009rem solid #6b6b6b"
    },
},
emptyCartBtn:{
  fontSize:"2.8rem",
  width:50,
  borderRadius:"3.5rem",
  padding:".5rem",
  margin:"2rem",

}
  // btnGroupItem:{
  //   fontSize:"1.5rem",
  //   width:40,
  //   textAlign:'center',
  //   backgroundColor:"#e0dede",
  //   color:"#4f4f4f",
  //   border:".1rem solid #e0dede ",
  //   borderRadius:".3rem",
  //   marginRight:".2rem",
  //   boxShadow:".04rem .05rem black",
  //   cursor: "pointer",
  //   '&:hover': {
  //     backgroundColor: '#bfbfbf',
  //     boxShadow: 'none',
  //   },

  // }


}));

// export const useStyles =makeStyles({
//     addToCartBtn:{
//       color:"white",
//       backgroundColor:'#4d4e4f'
//     }
// })(Button)
const MuiGrid =()=>{
const [spacing, setSpacing] = React.useState(2)
const classes = useStyles();

  return (
    // <Grid container className={classes.root} spacing={2}>
    //   <Grid item xs={12}>
    //     <Grid container justifyContent="center" spacing={spacing}>
    //       {[0, 1, 2].map((value) => (
    //         <Grid key={value} item>
    //           <Paper className={classes.paper} />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Grid>
    // </Grid>
    <></>
  )
}

export default MuiGrid;