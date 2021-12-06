window.onload = () => {
    console.log("Hi friend");

    function createXmasTree(height) {
        console.log(`⬇🎄 Árbol de ${height} pisos 🎄⬇`);
        let tree = '';
        const leave = '*';
        const backfill = '_';
        const trunk = '#';
        const newLine = "\n"
        const maxWidth = height * 2 - 1;
        const midWidth = maxWidth / 2;

        if (height < 1 || height > 100) {
            alert("El árbol tiene que tener una altura mínima de 1 y máximo de 100")
            return false;
        }

        // Build the tree
        for (let i = 0; i < height; i++) {
            const spaces = backfill.repeat(midWidth - i);
            const leaves = leave.repeat(i * 2 + 1);
            tree += spaces + leaves + spaces + newLine;
        }

        // Build trunk
        const spaces = backfill.repeat(midWidth);
        const treeTrunk = spaces + trunk + spaces + "\n";
        tree += treeTrunk.repeat(2);

        return tree.slice(0, -1);
    }

    console.log(createXmasTree(5));
}