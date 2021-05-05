import axios from 'axios'
import {createStore} from 'vuex'


export default createStore ({
    state() {
        return {
            products: [],
            perPage: 4,
            pagination: {
               
            },
            searchArray: [],
            designersArray: []
        }
    },
    mutations: {
        setProductsToState(state, payload) {
            state.products = payload
            
        }
    },
    actions: {
        getProductsFromApi({commit}) {
           
               const {data} = axios.get('https://coursework-2-1fb7f-default-rtdb.firebaseio.com/products/.json') 
              

           .then((products) => {
               const value = Object.values(products.data)
            commit('setProductsToState', value)
            return value
           })
           .catch((error) => {
               console.log(error)
               return error
           })
          
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        PERPAGE(state) {
            return state.perPage
        },
       
    }
})