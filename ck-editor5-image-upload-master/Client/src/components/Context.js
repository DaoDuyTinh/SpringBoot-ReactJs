import React from 'react';

export const DataContext = React.createContext();

class DataProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            product:[
                {
                    "id": 10,
                    "sale": false,
                    "type": true,
                    "image": "home/images/mt320.png",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 31,
                            "name": "home/images/mt320-01.png"
                        },
                        {
                            "id": 32,
                            "name": "home/images/mt320-02.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 9,
                            "product_re": 2
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "MT-320\n",
                    "size": "5",
                    "color": "1",
                    "percent": 0,
                    "price": 125000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 21.0,
                    "productNumber": 5,
                    "massFraction": 211.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 5.0,
                    "priceNet": 0
                },
                {
                    "id": 12,
                    "sale": false,
                    "type": true,
                    "image": "home/images/mt15.png",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 34,
                            "name": "home/images/mt15-01.png"
                        },
                        {
                            "id": 35,
                            "name": "home/images/mt15-02.png"
                        },
                        {
                            "id": 36,
                            "name": "home/images/mt15-03.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 11,
                            "product_re": 2
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "MT-15",
                    "size": "5",
                    "color": "1",
                    "percent": 0,
                    "price": 145000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 21.0,
                    "productNumber": 5,
                    "massFraction": 21.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 5.0,
                    "priceNet": 0
                },
                {
                    "id": 1,
                    "sale": false,
                    "type": true,
                    "image": "home/images/exciter150.png",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 5,
                            "name": "home/images/exciter150-01.png"
                        },
                        {
                            "id": 6,
                            "name": "home/images/exciter150-02.png"
                        },
                        {
                            "id": 7,
                            "name": "home/images/exciter150-03.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 10,
                            "product_re": 2
                        },
                        {
                            "id": 13,
                            "product_re": 3
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "Exciter 150",
                    "size": "1",
                    "color": "1",
                    "percent": 0,
                    "price": 50000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 146465.0,
                    "productNumber": 1,
                    "massFraction": 1.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 1.0,
                    "priceNet": 0
                },
                {
                    "id": 2,
                    "sale": false,
                    "type": true,
                    "image": "home/images/exciter155.png\n",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 3,
                            "name": "home/images/exciter155-01.png"
                        },
                        {
                            "id": 8,
                            "name": "home/images/exciter155-02.png"
                        },
                        {
                            "id": 9,
                            "name": "home/images/exciter155-03.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 1,
                            "product_re": 1
                        },
                        {
                            "id": 15,
                            "product_re": 3
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "Exciter 155",
                    "size": "100",
                    "color": "1",
                    "percent": 0,
                    "price": 52000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 331.0,
                    "productNumber": 100,
                    "massFraction": 3123.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 150.0,
                    "priceNet": 0
                },
                {
                    "id": 3,
                    "sale": false,
                    "type": true,
                    "image": "home/images/jupiter.png",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 10,
                            "name": "home/images/jupiter-01.png"
                        },
                        {
                            "id": 11,
                            "name": "home/images/jupiter-02.png"
                        },
                        {
                            "id": 12,
                            "name": "home/images/jupiter-03.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 2,
                            "product_re": 1
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "Jupiter GP",
                    "size": "2",
                    "color": "1",
                    "percent": 0,
                    "price": 30000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 2132134.0,
                    "productNumber": 12,
                    "massFraction": 331.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 125.0,
                    "priceNet": 0
                },
                {
                    "id": 4,
                    "sale": false,
                    "type": true,
                    "image": "home/images/sirius.png",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 13,
                            "name": "home/images/sirius-01.png"
                        },
                        {
                            "id": 14,
                            "name": "home/images/sirius-02.png"
                        },
                        {
                            "id": 15,
                            "name": "home/images/sirius-03.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 3,
                            "product_re": 1
                        },
                        {
                            "id": 14,
                            "product_re": 3
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "Sirius",
                    "size": "12",
                    "color": "1",
                    "percent": 0,
                    "price": 21000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 1212121.0,
                    "productNumber": 100,
                    "massFraction": 123.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 21.0,
                    "priceNet": 0
                },
                {
                    "id": 9,
                    "sale": false,
                    "type": true,
                    "image": "home/images/r15.png",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 28,
                            "name": "home/images/r15-01.png"
                        },
                        {
                            "id": 29,
                            "name": "home/images/r15-02.png"
                        },
                        {
                            "id": 30,
                            "name": "home/images/r15-03.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 8,
                            "product_re": 2
                        },
                        {
                            "id": 18,
                            "product_re": 3
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "R15",
                    "size": "5",
                    "color": "1",
                    "percent": 0,
                    "price": 110000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 21.0,
                    "productNumber": 5,
                    "massFraction": 12.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 5.0,
                    "priceNet": 0
                },
                {
                    "id": 11,
                    "sale": false,
                    "type": true,
                    "image": "home/images/yzf320.png",
                    "status": true,
                    "category": {
                        "id": 1,
                        "name": "Yamaha",
                        "image": "dsdada",
                        "idCategory": 1
                    },
                    "productimage": [
                        {
                            "id": 1,
                            "name": "home/images/yzf320-01.png"
                        },
                        {
                            "id": 2,
                            "name": "home/images/yzf320-02.png"
                        },
                        {
                            "id": 4,
                            "name": "home/images/yzf320-03.png"
                        }
                    ],
                    "productrelate": [
                        {
                            "id": 12,
                            "product_re": 2
                        }
                    ],
                    "checkoutcart": null,
                    "addtocart": null,
                    "name": "YZF-320",
                    "size": "5",
                    "color": "1",
                    "percent": 0,
                    "price": 150000000,
                    "sellStartDate": "2000-01-01",
                    "horsePower": 1.0,
                    "productNumber": 5,
                    "massFraction": 112.0,
                    "sellEndDate": "2000-01-01",
                    "weight": 5.0,
                    "priceNet": 0
                }
            ],
            cart:[]
        };
    }
    addCart = (id)=>{
        const {product, cart} = this.state;
        const data = product.filter(pro =>{
            return pro.id === id
        })
        this.setState({cart: [...cart,...data]});
    }
    render (){
        const {product, cart} = this.state;
        const {addCart}= this;
        return (
                <DataContext.Provider value={{product, addCart, cart}}>
                    {this.props.children}
                </DataContext.Provider>
        )
    }
}
export default DataProvider