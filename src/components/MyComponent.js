
//Diferentes formas de usar Props. Estas son 'como un atributo de html', son variables con datos almacenados.

//Básico.
{/* function MyComponent(props) {
    console.log(props);
    return (
        <>
        <h5>El rey: {props.rey} come {props.reses} reses al mes</h5>
        </>
    )
};

export { MyComponent }; */}

//Destructuring.
{/*} function MyComponent({rey, reses}) {
    return (
        <>
        <h5>El rey: {rey} come {reses} reses al mes</h5>
        </>
    )
};

export { MyComponent }; */}

//Valores por defecto 1
{/*} function MyComponent({rey, reses='2'}) {
    return (
        <>
        <h5>El rey: {rey} come {reses} reses al mes</h5>
        </>
    )
};

export { MyComponent }; */}

//Valores por defecto 2 : MyComponent.defaultProps = {obj}.
 function MyComponent({ rey, reses, vivo }) {
    return (
        <>
            <h5>El rey: {rey} come {reses} reses al mes</h5>
        </>
    )
};
MyComponent.defaultProps = {
    rey: 'Godo',
    reses: 2,
    vivo: 'indefinido'
};
export { MyComponent }; 

//Valores por defecto 3 : array/obj dentro de tag.
{/* function MyComponent({ rey }) {
    return (
        <>
            <h5>El rey: {rey[0]} come {rey[1]} reses al mes</h5>
        </>
    )
};

export { MyComponent }; */}