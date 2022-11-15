import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch} from 'react-redux'
import {getProducts} from '../actions/productActions'

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getProducts());
    },[dispatch])

    
  return (
    <Fragment>
        <MetaData title='Esmeralda: Joyería de excelencia y calidad'></MetaData>
       <h1 id='encabezado_productos'>Nuestros productos</h1> 

       <section id='productos' className='container mt-5'>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/img1.png' alt='anillo esmeralda'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id='titulo_producto'><a href='http://localhost:3000'>Anillo de compromiso con esmeralda</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'></div>
                            </div>
                            <span id='No_de_opiniones'>5 reviews</span>
                        </div>
                        <p className='card-text'>$150.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                            Ver detalle
                        </a>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/img2.png' alt='anillo esmeralda'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id='titulo_producto'><a href='http://localhost:3000'>Argollas de matrimonio</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'></div>
                            </div>
                            <span id='No_de_opiniones'>6 reviews</span>
                        </div>
                        <p className='card-text'>$350.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                            Ver detalle
                        </a>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/img3.png' alt='anillo esmeralda'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id='titulo_producto'><a href='http://localhost:3000'>Anillo imitación esmeralda</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'></div>
                            </div>
                            <span id='No_de_opiniones'>5 reviews</span>
                        </div>
                        <p className='card-text'>$50.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                            Ver detalle
                        </a>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/img4.png' alt='anillo esmeralda'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id='titulo_producto'><a href='http://localhost:3000'>Anillo de compromiso con amatista</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'></div>
                            </div>
                            <span id='No_de_opiniones'>8 reviews</span>
                        </div>
                        <p className='card-text'>$100.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                            Ver detalle
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </section>

    </Fragment>
  )
}

export default Home