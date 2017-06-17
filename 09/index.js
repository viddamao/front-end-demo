var matrix = [
    [2, 0, 2, 0],
    [0, 0, 0, 0],
    [4, 0, 2, 0],
    [0, 0, 0, 0]
];
var COLOR_MAP = {
        2: ['white', '#776e65'],
        4: ['white', '#776e65'],
        8: ['white', '#f78e48'],
        16: ['white', '#fc5e2e'],
        32: ['white', '#f67c5f'],
        64: ['white', '#f65e3b'],
        128: ['white', '#edcf72'],
        256: ['white', '#edcc61'],
        512: ['white', '#edc850'],
        1024: ['white', '#edc53f'],
        2048: ['white', '#edc22e'],
        0: ['#fff', '#eee4da']
    }
    //order of up, down, left, right
var LOOP_INDEX = [
    [0, 1, 2, 3],
    [3, 2, 1, 0]
];

var move_block = (direction) => {
    switch (direction) {
        case "up":
            {
                for (let i of[0, 1, 2, 3]) {
                    var queue = [];
                    for (let j of[0, 1, 2, 3]) {
                        if (matrix[j][i] !== 0) {
                            queue.push(matrix[j][i]);
                            matrix[j][i] = 0;
                        }
                    }
                    var j = 0;

                    while (queue.length > 0) {
                        let current = queue.shift();
                        if (current === queue[0]) {
                            matrix[j][i] = current * 2;
                            queue.shift();
                            j++;
                        } else {
                            matrix[j][i] = current;
                            j++;
                        }
                    }
                }
                break;
            }
        case "down":
            {
                for (let i of[0, 1, 2, 3]) {
                    var queue = [];
                    for (let j of[3, 2, 1, 0]) {
                        if (matrix[j][i] !== 0) {
                            queue.push(matrix[j][i]);
                            matrix[j][i] = 0;
                        }
                    }
                    var j = 3;

                    while (queue.length > 0) {
                        let current = queue.shift();
                        if (current === queue[0]) {
                            matrix[j][i] = current * 2;
                            queue.shift();
                            j--;
                        } else {
                            matrix[j][i] = current;
                            j--;
                        }
                    }
                }
                break;
            }
        case "left":
            {
                for (let i of[0, 1, 2, 3]) {
                    var queue = [];
                    for (let j of[0,1,2,3]) {
                        if (matrix[i][j] !== 0) {
                            queue.push(matrix[i][j]);
                            matrix[i][j] = 0;
                        }
                    }
                    var j = 0;

                    while (queue.length > 0) {
                        let current = queue.shift();
                        if (current === queue[0]) {
                            matrix[i][j] = current * 2;
                            queue.shift();
                            j++;
                        } else {
                            matrix[i][j] = current;
                            j++;
                        }
                    }
                }
                break;
            }
        case "right":
            {
                for (let i of[0, 1, 2, 3]) {
                    var queue = [];
                    for (let j of[3, 2, 1, 0]) {
                        if (matrix[i][j] !== 0) {
                            queue.push(matrix[i][j]);
                            matrix[i][j] = 0;
                        }
                    }
                    var j = 3;

                    while (queue.length > 0) {
                        let current = queue.shift();
                        if (current === queue[0]) {
                            matrix[i][j] = current * 2;
                            queue.shift();
                            j--;
                        } else {
                            matrix[i][j] = current;
                            j--;
                        }
                    }
                }
                break;
            }
        default:
            {
                return;
            }
    }


}

window.onload = function() {
    paint();
    document.addEventListener('keydown', function(event) {
        switch (event.code) {
            case "ArrowUp":
                {
                    move_block("up");
                    paint();
                    break;
                }
            case "ArrowDown":
                {
                    move_block("down");
                    paint();
                    break;
                }
            case "ArrowLeft":
                {
                    move_block("left");
                    paint();
                    break;
                }
            case "ArrowRight":
                {
                    move_block("right");
                    paint();
                    break;
                }
            default:
                {
                    return;
                }
                return;
        }
    });
}
var grid = document.getElementById("blkList");
var paint = () => {

    for (let i in [0, 1, 2, 3]) {
        for (let j in [0, 1, 2, 3]) {
            let current = grid.children[parseInt(i * 4) + parseInt(j)];
            current.style["background-color"] = COLOR_MAP[matrix[i][j]][1];
            current.style["opacity"] = 0.85;
            current.style["color"] = COLOR_MAP[matrix[i][j]][0];
            if (current.lastChild != null) {
                current.removeChild(current.lastChild);
            }
            if (matrix[i][j] > 0) {
                var textnode = document.createTextNode(matrix[i][j]);
                current.appendChild(textnode);
            }
        }
    }
};