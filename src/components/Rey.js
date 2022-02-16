import { ButtonAgregar } from './ButtonAgregar';

{/* function Rey({ reyes }) {
    let src = `https://html6.es/img/rey_${reyes[0].nombre}.png`;
    let colors = {backgroundColor : reyes[0].color};
    return (
        <div  style={colors} >
            <h3>{reyes[0].nombre}</h3>
            <img src={src} />
            <p>Precio: ${reyes[0].precio}</p>
            <ButtonAgregar />
        </div>
    )
};

export { Rey };*/}

function Rey({ reyes }) {

    return (
        <ul>
            {reyes.map((king) => {
                let colors = {backgroundColor : king.color};
                return (
                <li key={king.nombre}>
                    <div style={colors} className='cajita_rey' >
                        <h3>{king.nombre}</h3>
                        <img src={`https://html6.es/img/rey_${king.nombre}.png`} alt='foto'/>
                        <p>Precio: ${king.precio}</p>
                        <ButtonAgregar />
                    </div>
                </li>)
            })}
        </ul>
    )
};

export { Rey };