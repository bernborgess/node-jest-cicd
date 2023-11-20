
// 1. Áreas de figuras geométricas

// Retângulo
export function area_rectangle(b: number, h: number) {
    return b * h;
}

// Triângulo
export function area_triangle(b: number, h: number) {
    return b * h / 2;
}

// Círculo
export function area_circle(r: number) {
    return Math.PI * r * r;
}