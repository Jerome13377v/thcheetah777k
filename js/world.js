// The entire game world data
const world = {
  blocks: [
    // One block is 58x58
    // The floor
    [0, 974],
    [1, 974],
    [2, 974],
    [3, 974],
    [4, 974],
    [5, 974],
    [6, 974],
    [7, 974],
    [8, 974],
    [9, 974],
    [10, 974],
    [11, 974],
    [12, 974],
    [13, 974],
    [14, 974],
    [15, 974],
    [16, 974],
    [17, 974],
    [18, 974],
    [19, 974],
    [20, 974],
    [21, 974],
    [22, 974],

    // A platform
    [0, 800],
    [1, 800],
    [2, 800],
    [3, 800],
    [4, 800],
    [5, 800],
    [6, 800],
    [7, 800],
    [8, 800],
    [9, 800],
    [10, 800],
    [11, 800],
    [12, 800],
    [13, 800],
    [14, 800],
    [15, 800],
    [16, 800],
    [16, 800],
    [17, 800],
    [18, 800],
    [19, 800],
    [20, 800],
    [21, 800],

    // Another platform
    [2, 646],
    [3, 646],
    [4, 646],
    [5, 646],
    [6, 646],
    [7, 646],
    [8, 646],
    [9, 646],
    [10, 646],
    [11, 646],
    [12, 646],
    [13, 646],
    [14, 646],
    [15, 646],
    [16, 646],
    [17, 646],
    [18, 646],
    [19, 646],
    [20, 646],
    [21, 646],
    [22, 646]
  ],
  doors: [
    [500, 710, "HELLOWORLD"]
  ],
  guards: [
    [500, 500, 700]
  ],
  instructions: [
    // Add move instructions
    [200, 865, "Use the arrow keys to move"],

    // Add jump instructions
    [800, 865, "Use the up key to jump"]
  ]
}
