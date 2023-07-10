import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const Product = () => {
    const url = 'https://dummyjson.com/products'

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    //const { id, title, category } = products[];
    //console.log(products);

    /* const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data.products));

    }; */

    const fetchInfo = async () => {
        const response = await axios .get(url).catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data.products));
    };

    useEffect(() => {
        fetchInfo();
    }, []);
    //console.log("products222",products);

    return (
        <>
            <div className='container'>
                <div className='row mx-auto'>
              
            
                    {
                        products.map((item, key) => 
                            <div className='col-sm-12 col-md-3 mt-2 ms-auto' key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <div className="card" style={{ width: '18rem'}}>
                                    <img src={item.thumbnail} className="card-img-top" alt="..." height={200} />
                                    <div className="card-body">
                                        <h6 className="card-title text-center">{item.title}</h6>
                                        <p className="card-text text-center">Price : {item.price}</p>                                      
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )

                    }
                </div>
            </div>




        </>
    )
}

export default Product
