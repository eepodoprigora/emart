import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {addItem, delItem} from "../redux/action";
import {NavLink} from "react-router-dom";

const Cart = ()=> {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const handleClose = (item) => {
        dispatch(delItem(item))
    }
    const handleAdd = (item) => {
      dispatch(addItem(item))
    }
    const handleDel = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=> handleClose(cartItem)} className="btn-close float-end"></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title}
                                 height='200px' width='180px'/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>
                                {cartItem.qty} X ${cartItem.price} = $
                                {cartItem.qty * cartItem.price}
                            </p>
                            <button className='btn btn-outline-dark me-4' onClick={()=> handleDel(cartItem)}>
                                <i className='fa fa-minus'></i>
                            </button>
                            <button className='btn btn-outline-dark me-4' onClick={()=> handleAdd(cartItem)}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5" >
                <div className="container py-4">
                    <div className='row '>
                      <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const  button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink className='btn btn-outline-dark mb-5 w-25 mx-auto' to='/checkout'>Proceed to Checkout</NavLink>
                </div>
            </div>
        )
    }

    return( <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !==0 && button()}
</> )
}
export default Cart