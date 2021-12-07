window.onload = () => {
    console.log("Hi friend");

    function contains(store, product) {
        let result = false;

        for (const [key, value] of Object.entries(store)) {
            if (typeof (store[key]) === "object") {
                result = contains(value, product)
                if (result) return true;
            }
            if (typeof (store[key]) === "string") {
                if (value === product) {
                    result = true;
                }
            }
        }
        return result;
    }

    const almacen = {
        'estanteria1': {
            'cajon1': {
                'producto1': 'camiseta',
                'producto2': 'fanta',
                'producto3': 'sprite'
            }
        },
        'estanteria2': {
            'cajon1': 'vacio',
            'cajon2': {
                'producto1': 'pantalones',
                'producto2': 'camiseta' // <- ¡Está aquí!
            }
        }
    }

    const otroAlmacen = {
        'baul': {
            'fondo': {
                'objeto': 'cd-rom',
                'otro-objeto': 'disquette',
                'otra-cosa': 'mando'
            }
        }
    }

    console.log(contains(almacen, "camiseta"))
}