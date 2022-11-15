import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
       <h1 id='encabezado_productos'>Nuestros productos</h1> 

       <section id='productos' className='container mt-5'>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/img1.png' alt='anillo esmeralda'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id='titulo_producto'><a href='#'>Anillo con esmeralda</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'></div>
                            </div>
                            <span id='No_de_opiniones'>5 reviews</span>
                        </div>
                        <p className='card-text'>$150.000</p><a href='#' id='ver_producto' className='btn btn-block'>
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