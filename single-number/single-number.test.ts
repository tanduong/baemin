import { singleNumber } from "./single-number";

function getRandomInt(max: number = 1000) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomizedTestCase() {
  const uniqRandomNumbers = Array.from(
    new Set([getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()])
  );
  const singleNumberValue = uniqRandomNumbers.pop();
  const input = [
    singleNumberValue!,
    ...uniqRandomNumbers.flatMap((n: number) => [n, n, n, n, n]),
  ];
  const len = input.length;

  for (let i = 0; i < len; i++) {
    const index1 = i;
    const index2 = getRandomInt(len);

    const tmp = input[index1];
    input[index1] = input[index2];
    input[index2] = tmp;
  }

  return { input, output: singleNumberValue };
}

describe("singleNumber", () => {
  it("sample case 1", () => {
    expect(singleNumber([1, 1, 0, 1, 1, 1])).toEqual(0);
  });

  it("sample case 2", () => {
    expect(singleNumber([3, 1, 3, 1, 1, 3, 3, 5, 1, 3, 1])).toEqual(5);
  });

  describe("randomized test", () => {
    for (let i = 0; i < 20; i++) {
      it("return correct result", () => {
        const { input, output } = randomizedTestCase();
        expect(singleNumber(input)).toEqual(output);
      });
    }
  });
});
