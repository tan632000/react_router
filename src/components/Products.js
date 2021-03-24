import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product'

class Products extends Component {
    render() {
        var products = [
            {
                id : 1,
                name : 'A1',
                price : 10,
                slug : 'A1'
            },
            {
                id : 2,
                name : 'A2',
                price : 11,
                slug : 'A2'
            },
            {
                id : 3,
                name : 'A3',
                price : 12,
                slug : 'A3'
            },
        ]
        var result = products.map((product, index) => {
            var {match} = this.props
            var url = match.url
            return (
                <NavLink to={`${url}/${product.slug}`} key={index} >
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        })
        
        var {location} = this.props
        console.log(location)
        return (
            <div className="container">
                <h1>Danh sach san pham</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product}></Route>    
                </div> 
            </div>
        );
    }
}

export default Products