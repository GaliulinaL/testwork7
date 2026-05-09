import {useState} from 'react';
import './App.css';

import foodImage from './assets/food.png';
import drinkImage from './assets/drink.png';

import AddItem from './components/AddItem';
import OrderDetails from './components/OrderDetails';

const ITEMS = [
    {
        name: 'Hamburger',
        price: 60,
        image: foodImage
    },
    {
        name: 'Cheeseburger',
        price: 75,
        image: foodImage
    },
    {
        name: 'Fries',
        price: 30,
        image: foodImage
    },
    {
        name: 'Shawarma',
        price: 95,
        image: foodImage
    },
    {
        name: 'Tea',
        price: 25,
        image: drinkImage
    },
    {
        name: 'Coffee',
        price: 40,
        image: drinkImage
    },
    {
        name: 'Cola',
        price: 50,
        image: drinkImage
    },
    {
        name: 'Sprite',
        price: 55,
        image: drinkImage
    }
];

const App = () => {

    const [orders, setOrders] = useState<{
        name: string;
        price: number;
        count: number;
    }[]>([]);

    const addItem = (name: string, price: number) => {

        const existingItem = orders.find(item => item.name === name);

        if (existingItem) {
            setOrders(orders.map(item => {
                if (item.name === name) {
                    return {
                        ...item,
                        count: item.count + 1
                    };
                }

                return item;
            }));

            return;
        }

        setOrders([
            ...orders,
            {
                name,
                price,
                count: 1
            }
        ]);
    };

    const deleteItem = (name: string) => {
        setOrders(orders.filter(item => item.name !== name));
    };

    const totalPrice = orders.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);

    return (
        <div className="container">

            <div className="left-block">

                <h2>Order Details</h2>

                <OrderDetails
                    orders={orders}
                    deleteItem={deleteItem}
                    totalPrice={totalPrice}
                />

            </div>

            <div className="right-block">

                <h2>Add Items</h2>

                <div className="items">

                    {ITEMS.map(item => (
                        <AddItem
                            key={item.name}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            add={() => addItem(item.name, item.price)}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
};

export default App;