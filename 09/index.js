var matrix = [
    [0, 0, 0, 0],
    [0, 0, 1024, 0],
    [0, 512, 0, 4],
    [0, 2, 0, 0]
];
color_map = {
    2: ['#776e65', '#eee4da'],
    4: ['#776e65', '#ede0c8'],
    8: ['#f9f6f2', '#f2b179'],
    16: ['#f9f6f2', '#f2b179'],
    32: ['#f9f6f2', '#f67c5f'],
    64: ['#f9f6f2', '#f65e3b'],
    128: ['#f9f6f2', '#edcf72'],
    256: ['#f9f6f2', '#edcc61'],
    512: ['#f9f6f2', '#edc850'],
    1024: ['#f9f6f2', '#edc53f'],
    2048: ['#f9f6f2', '#edc22e'],
    0: ['#fff', '#ccc0b3']
}
window.onload = function() {
    paint();
}
var grid = document.getElementById("blkList");
var paint = () => {

    for (let i in [0, 1, 2, 3]) {
        for (let j in [0, 1, 2, 3]) {
            let current = grid.children[parseInt(i * 4) + parseInt(j)];
            current.style["background-color"] = color_map[matrix[i][j]][1];
            current.style["color"] = color_map[matrix[i][j]][0];
            if (matrix[i][j] > 0) {
                var textnode = document.createTextNode(matrix[i][j]);
                current.appendChild(textnode);
            }


        }
    }
};