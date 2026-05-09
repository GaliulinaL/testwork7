import './AddItem.css';

interface Props {
    name: string;
    price: number;
    image: string;
    add: () => void;
}

const AddItem = ({name, price, image, add}: Props) => {
    return (
        <div
            className="item-card"
            onClick={add}
        >

            <img src={image} alt={name}/>

            <div>
                <h3>{name}</h3>
                <p>Price: {price} KGS</p>
            </div>

        </div>
    );
};

export default AddItem;