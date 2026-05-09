import './OrderDetails.css';

interface Props {
    orders: {
        name: string;
        price: number;
        count: number;
    }[];

    deleteItem: (name: string) => void;

    totalPrice: number;
}

const OrderDetails = ({orders, deleteItem, totalPrice}: Props) => {

    return (
        <div>

            {orders.length === 0 ? (
                <p>Add an order</p>
            ) : (
                <>
                    {orders.map(item => (
                        <div
                            className="order-item"
                            key={item.name}
                        >

                            <div>
                                {item.name} x{item.count}
                            </div>

                            <div>
                                {item.price * item.count} KGS
                            </div>

                            <button
                                onClick={() => deleteItem(item.name)}
                            >
                                X
                            </button>

                        </div>
                    ))}

                    <h3 className="total-price">
                        Total price: {totalPrice} KGS
                    </h3>
                </>
            )}

        </div>
    );
};

export default OrderDetails;