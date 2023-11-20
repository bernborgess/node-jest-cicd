import { area_circulo } from "../src/maths";

describe("Maths module", () => {

    test("Area of circle of radius 1 is PI", () => {
        expect(area_circulo(1)).toBe(Math.PI);
    })

})