window.onload = () => {
    console.log("Hi friend");

    const ovejas = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo'}
    ]

    function countSheeps(sheeps) {
        const oveja = [];

        sheeps.forEach(sheep => {
            if (sheep.color == "rojo" && sheep.name.toLowerCase().includes("a") && sheep.name.toLowerCase().includes("n")) {
                oveja.push(sheep);
            }
        });
        return oveja;
    }

    function countSheepMidudev(ovejas) {
        return ovejas.filter(oveja => {
            const nameLowerCase = oveja.name.toLowerCase();
            return nameLowerCase.includes("a") && nameLowerCase.includes("n") && oveja.color == "rojo";
        })
    }

    const ovejasFiltradas = countSheeps(ovejas);
    console.log("Ovejas filtradas", ovejasFiltradas);

    const ovejasFiltradasMidudev = countSheepMidudev(ovejas);
    console.log('Ovejas filtradas Midudev :>> ', ovejasFiltradasMidudev);
}