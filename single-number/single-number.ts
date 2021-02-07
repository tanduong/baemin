export const singleNumber = (nums: number[]): number | undefined => {
    const counter: {[key: string]: number} = {}
    nums.forEach((num: number) => {
        const key = num.toString()
        counter[key] = (counter[key] || 0) + 1
    })

    for (const key in counter) {
        if (counter[key] === 1) {
            return +key
        }
    }
}