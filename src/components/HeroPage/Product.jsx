import Layout from "../../HomeLayout/Layout";
import './product.css'

function Product() {

    return (
        <Layout>
            <div className='container'>
                <div className='info-box'>
                    <div className='heading'>
                        <h4>
                            YOUR FEET <br /> DESERVE <br />THE BEST
                        </h4>
                    </div>
                    <div className='info'>
                            <p1>
                                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WUTH OUR SHOES
                            </p1>
                    </div>
                    
                    
                        
                   
                    <div className='button-box'>
                        <button className='btn1'>Shop Now</button>
                        <button className='btn2'>Category</button>
                    </div>

                </div>

                <div className='img-box'>
                    <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/m/y/a/-original-imagtbtdgjtn8n3z.jpeg?q=90&crop=false" alt="Shoe image" />
                </div>

            </div>
        </Layout>
    )
}

export default Product;