window.onload = () => {
    console.log("Hi friend");

    const carta = 'bici coche balón _playstation bici  coche peluche'

    function listGifts(letter) {
        const regalos = {}

        // Elimino los espacios
        letter = letter.trim().split(/\s+/);
        console.log(letter);
        
        // Agrego los regalos al objeto
        letter.forEach(element => {
            if (regalos[element]) { regalos[element] ++ }

            if (!regalos[element] && !element.includes("_")) {
                regalos[element] = 1;
            }
        });
        return regalos;
    }

    const regalos = listGifts(carta);
    console.log(regalos);
}