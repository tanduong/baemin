import { orangesRotting } from "./oranges-rotting";

describe("orangesRotting", () => {
  it("sample case 1", () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 0],
      [0, 2, 1],
    ];

    expect(orangesRotting(grid)).toEqual(6);
  });

  it("sample case 2", () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 2],
    ];

    expect(orangesRotting(grid)).toEqual(-1);
  });

  it("sample case 3", () => {
    const grid = [
      [1, 1, 1],
      [0, 1, 1],
      [1, 1, 2],
    ];

    expect(orangesRotting(grid)).toEqual(8);
  });

  it("sample case 4", () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 2],
    ];

    expect(orangesRotting(grid)).toEqual(-1);
  });

  it("sample case 5", () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ];

    expect(orangesRotting(grid)).toEqual(-1);
  });

  it("sample case 6", () => {
    const grid = [
      [1, 1, 1],
      [1, 2, 0],
      [1, 0, 2],
    ];

    expect(orangesRotting(grid)).toEqual(4);
  });
});
