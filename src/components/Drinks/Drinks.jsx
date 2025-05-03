import { Layer } from '../Layer/Layer'
import './Drinks.css'



export const Drinks = ({ name, image, layers, id }) => (

    <div className="drink">
        <div className="drink__product">
            <div className="drink__cup">
                <img src={`http://localhost:4000${image}`} alt={name} />
            </div>
            <div className="drink__info">
                <h3>{name}</h3>
                {layers.map((layer) =>
                    <Layer
                        key={layer.label}
                        color={layer.color}
                        label={layer.label}
                    />)}
            </div>
        </div>

        <form className="drink__controls">
            <input type="hidden" className="order-id" value={id} />
            <button className="order-btn">
                Objednat
            </button>
        </form>
    </div>
)
