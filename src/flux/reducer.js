import {
    CREATE_PRODUCT,
    REMOVE_PRODUCT
} from './actionTypes';

const inittialState = {
    products: [
        {
            id: 1,
            name: 'Produto',
            price: 10
        }
    ]
};

const product = (state = inittialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                products: [
                    ...state.products,
                    {
                        ...action.payload,
                        id: Math.floor(Math.random() * 100) + 1
                    }
                ]
            };

        case REMOVE_PRODUCT:
            return {
                products: [...state.products.filter(
                    (product) => product.id !== action.payload)]
            };

        default:
            return state;
    }
};

export default product;
