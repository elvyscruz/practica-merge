const sumar = require('./index');

describe("sumar", () => {
  it("should return the sum of two numbers", () => {
    const resultado = sumar(5, 10);
    expect(resultado).toBe(15);
  });
});