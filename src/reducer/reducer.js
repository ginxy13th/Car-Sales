import { ADD_FEATURES, REMOVE_FEATURES } from '../actions/actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export default function reducer(state = initialState, action) {
    // console.log(state.car)
    console.log('Before --> Inside Reducer')
    // const id = state.additionalFeatures.findIndex(
    //             feature => feature.id === Number(action.payload)
    //         );
    switch(action.type) {
        case ADD_FEATURES:
            console.log('Inside Reducer')
            return {
                    ...state
                // car: {
                //     ...state.car,
                //     price: state.car.price + state.additionalFeatures[id].price,
                //     features: [
                //         ...state.car.features,
                //         {
                //             feature: state.additionalFeatures[id].name,
                //             price: state.additionalFeatures[id].price
                //         }
                //     ]
                // },
                // additionalFeatures: [...state.additionalFeatures],
                // additionalPrice: state.additionalPrice + state.additionalFeatures.price


            }
        case REMOVE_FEATURES:
            console.log('Inside Reducer 2')
            
            return {
                ...state
                // car: {
                // ...state.car,
                //     price: state.car.price - state.additionalFeatures[id].price,
                //     features: [
                //         ...state.car.features,
                //         {
                //             feature: state.additionalFeatures[id].name,
                //             price: state.additionalFeatures[id].price
                //         }
                //     ]
                // },
                // additionalFeatures: [...state.additionalFeatures],
                // additionalPrice: state.additionalPrice - state.additionalFeatures.price
            }
        default:
            console.log('Inside Reducer 3')

            return state
    }
}
