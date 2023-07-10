import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct, addToCart} from '../../redux/actions/productAction';


const SingleProduct = () => {
    const product = useSelector((state) => state.product);
    const { images, title, price, description, category } = product;

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const { productId } = useParams();
    const url = `https://dummyjson.com/products/${productId}`;


    const fetchProductDetail = async () => {
        const response = await axios.get(url).catch(err => {
            console.log('Err', err);
        });

        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }

    }, [productId]);


    const handleAddToCart = () => {
        dispatch(addToCart(cart));
        console.log(cart)
      };

    return (
        <>
            <div className='container'>
                {Object.keys(product).length === 0 ? (
                    <div> ...Loading</div>
                ) : (
                    <div className='row ms-auto text-center'>

                        <div className='col-sm-12 col-md-4 p-5'>
                            <Carousel autoPlay={false} interval={2000} showStatus={false}>
                                <div>
                                    <img src={images[0]} />
                                </div>
                                <div>
                                    <img src={images[1]} />
                                </div>
                                <div>
                                    <img src={images[2]} />
                                </div>
                            </Carousel>
                        </div>
                        <div className='col-sm-12 col-md-8 p-5'>
                            <h2>{title}</h2>
                            <p><strong>description:</strong>{description}</p>
                            <p>price : {price}</p>
                            <p>category: {category}</p>
                            <button type="button" onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SingleProduct
