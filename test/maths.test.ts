import {
    area_circle,
    area_rectangle,
    area_triangle
} from "../src/maths";

describe("Maths module", () => {

    test("Area of 2x5 rectangle is 10", () => {
        expect(area_rectangle(2, 5)).toBe(10);
    })

    test("Area of 2x3 triangle is 3", () => {
        expect(area_triangle(2, 3)).toBe(3);
    })

    test("Area of circle of radius 1 is PI", () => {
        expect(area_circle(1)).toBe(Math.PI);
    })

})