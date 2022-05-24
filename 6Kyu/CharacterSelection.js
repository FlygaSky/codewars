// https://www.codewars.com/kata/5853213063adbd1b9b0000be
// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

// Input
//     the list of game characters in a 2x6 grid;
//     the initial position of the selection cursor (top-left is (0,0));
//     a list of moves of the selection cursor (which are up, down, left, right);

// Output
//     the list of characters who have been hovered by the selection cursor after all the moves
//     (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

// Rules

// Selection cursor is circular horizontally but not vertically!
// For this easy version the fighters grid layout and the initial position will always be the same in all tests,
// only the list of moves change.

function streetFighterSelection(fighters, position, moves) {
    let selectedFighters = []
    let currentRow = position[0]
    let currentCol = position[1]
    for (i = 0; i < moves.length; i++) {
        if (moves[i] == 'up') {
            if (currentRow == 0) {
                selectedFighters.push(fighters[currentRow][currentCol])
            }
            else if (currentRow > 0) {
                currentRow--
                selectedFighters.push(fighters[currentRow][currentCol])
            }
        }
        if (moves[i] == 'down') {
            if (currentRow == fighters.length - 1) {
                selectedFighters.push(fighters[currentRow][currentCol])
            }
            else if (currentRow < fighters.length - 1) {
                currentRow++
                selectedFighters.push(fighters[currentRow][currentCol])
            }
        }
        if (moves[i] == 'right') {
            if (currentCol == fighters[currentRow].length - 1) {
                currentCol = 0
                selectedFighters.push(fighters[currentRow][currentCol])
            }
            else if (currentCol < fighters[currentRow].length - 1) {
                currentCol++
                selectedFighters.push(fighters[currentRow][currentCol])
            }
        }
        if (moves[i] == 'left') {
            if (currentCol == 0) {
                currentCol = fighters[currentRow].length - 1
                selectedFighters.push(fighters[currentRow][currentCol])
            }
            else if (currentCol > 0) {
                currentCol--
                selectedFighters.push(fighters[currentRow][currentCol])
            }
        }
    }
    return selectedFighters;
}

console.log(streetFighterSelection([
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
], [0, 0], ['right', 'down', 'left', 'left', 'left', 'left', 'right']))