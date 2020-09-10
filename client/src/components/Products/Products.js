import React, { Component } from 'react';
import { storeProducts } from '../../data/data';
import { Card, CardImg, CardFooter, CardBody, CardTitle } from 'reactstrap';
import './products.css'


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: storeProducts
        }
    }

    render() {

        const store_product = this.state.products.map((product) => {
            return (
                <div className="col-md-5 col-lg-4 mx-auto col-6 col-sm-12 my-4">
                    <div key={product.id}>
                        <Card>
                            
                                <CardImg
                                className="image"
                                src={product.img}
                                    width="100%"
                                    height="300"
                                    alt={product.title}/>
                            
                            <CardFooter className="footer">
                                <div className="title">
                                    <CardTitle>{product.title}</CardTitle>
                                </div>
                                <CardBody>Rs. {product.price}</CardBody>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            );
        });
        return (
            <React.Fragment>
                <div className=" text-center my-5 heading"> Best Seller Products</div>
                <div className="container mb-5">
                    <div className="row mb-5">

                        {store_product}
                    </div>



                </div>
            </React.Fragment>



        )

    }


}
export default Products;
