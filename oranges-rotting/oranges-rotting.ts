const WHITE_ITEM = 1;
const BLACK_ITEM = 2;

// This Operation is O(1)

function adjacentItems(i: number, j: number, grid: number[][]): number[][] {
  const gridRows: number = grid.length;
  const gridCols: number = grid[0].length;

  return [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]
    .map(([iDelta, jDelta]: number[]) => {
      return [i + iDelta, j + jDelta];
    })
    .filter(
      ([a, b]: number[]) => a >= 0 && b >= 0 && a < gridRows && b < gridCols
    );
}

// This Operation is O(m*n) with m, n is the size of the grid

function findItems(grid: number[][], item: number) {
  const foundItems = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === item) {
        foundItems.push([i, j]);
      }
    }
  }

  return foundItems;
}

// This algorithm is O(m*n) with m, n is the size of the grid
// The reasoning is that each WHITE_ITEM only get added into the unprocessed queue maximum once
// The cost of processing is O(1) (it takes 4 steps but still O(1)).

export const orangesRotting = (grid: number[][]) => {
  let unprocessedBlackItem = findItems(grid, BLACK_ITEM);

  let timer = -2;

  while (unprocessedBlackItem.length > 0) {
    timer += 2;
    const nextUnprocessedBlackItem: number[][] = [];

    unprocessedBlackItem.forEach((item) => {
      const i = item[0];
      const j = item[1];

      adjacentItems(i, j, grid).forEach((item: number[]) => {
        if (grid[item[0]][item[1]] == WHITE_ITEM) {
          grid[item[0]][item[1]] = BLACK_ITEM;
          nextUnprocessedBlackItem.push(item);
        }
      });
    });

    unprocessedBlackItem = nextUnprocessedBlackItem;
  }

  if (findItems(grid, WHITE_ITEM).length > 0) {
    return -1;
  }

  return timer;
};
