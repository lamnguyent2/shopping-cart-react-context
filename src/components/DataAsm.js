import React, {createContext, useState, useEffect} from 'react'
import { onValue, ref } from '@firebase/database';
import { dbrealtime } from '../config/config';

// khởi tạo context mới
export const DataContext = createContext();
// Tham số truyền vào là object DataContext.

export const DataAsm = (props) => {
    // Products
    const [products, setProducts] = useState([])

    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.products;
            if (data !== null) {
                Object.values(data).map((todo) => (
                    setProducts((oldArray) => [...oldArray, todo])
                ))
            }
        })
        // fetch('http://localhost:3000/products')
        //     .then(res=>{
        //         return res.json();
        //     })
        //     .then(data=>{
        //         setProducts(data)
        //     })
    },[]);

    // Catalogs
    const [catalogs, setCatalogs] = useState([])

    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.catalogs;
            if (data !== null) {
                Object.values(data).map((todo) => (
                    setCatalogs((oldArray) => [...oldArray, todo])
                ))
            }
        })
        // fetch('http://localhost:3000/catalogs')
        //     .then(res=>{
        //         return res.json();
        //     })
        //     .then(data=>{
        //         setCatalogs(data)
        //     })
    },[]);

    //user
    const [adminUser, setadminUser] = useState([])
    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.users;
            if (data !== null) {
                Object.values(data).map((todo) => (
                    setadminUser((oldArray) => [...oldArray, todo])
                ))
            }
        })
        // fetch('http://localhost:3000/users')
        //     .then(res=>{
        //         return res.json();
        //     })
        //     .then(data=>{
        //         setadminUser(data)
        //     })
    },[]);

    // comment
    const [adminComment, setadminComment] = useState([])
    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.comments;
            if (data !== null) {
                Object.values(data).map((todo) => (
                    setadminComment((oldArray) => [...oldArray, todo])
                ))
            }
        })
        // fetch('http://localhost:3000/comments')
        //     .then(res=>{
        //         return res.json();
        //     })
        //     .then(data=>{
        //         setadminComment(data)
        //     })
    },[]);

    // order
    const [adminOrder, setadminOrder] = useState([])
    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.orders;
            if (data !== null) {
                Object.values(data).map((todo) => (
                    setadminOrder((oldArray) => [...oldArray, todo])
                ))
            }
        })
        // fetch('http://localhost:3000/orders')
        //     .then(res=>{
        //         return res.json();
        //     })
        //     .then(data=>{
        //         setadminOrder(data)
        //     })
    },[]);

    // Cart
    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            cart.forEach((product, index) =>{
                if(product.id===id){
                    product.count++
                }
            })
            setCart([...cart])
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])

    // Like
    const [like, setLike] = useState([])

    const addLike = (id) =>{
        const check = like.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setLike([...like, ...data])
        }
    }

    const value = {
        products: [products, setProducts],
        catalogs: [catalogs, setCatalogs],
        users: [adminUser, setadminUser],
        comments: [adminComment, setadminComment],
        orders: [adminOrder, setadminOrder],
        cart: [cart, setCart],
        addCart: addCart,
        like: [like, setLike],
        addLike: addLike
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}


