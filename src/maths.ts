
// 1. Áreas de figuras geométricas

// Retângulo
export function area_retangulo(b: number, h: number) {
    return b * h;
}

// Triângulo
export function area_triangulo(b: number, h: number) {
    return b * h / 2;
}

// Círculo
export function area_circulo(r: number) {
    return Math.PI * r * r;
}