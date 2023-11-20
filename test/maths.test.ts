import { area_circle } from "../src/maths";

describe("Maths module", () => {

    test("Area of circle of radius 1 is PI", () => {
        expect(area_circle(1)).toBe(Math.PI);
    })

})