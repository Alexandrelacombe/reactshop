import { plantList } from '../datas/plantList';

function ShoppingList() {
	return(
        <div>
            <ul>
                {plantList.map((plant) => (
                    <li key={`${plant.category}`}>{ plant.category }</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{ plant.name }</li>
                ))}
            </ul>
        </div>
        );
}

export default ShoppingList;