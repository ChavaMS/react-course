import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Get saludo debe retornar "hola Salvador"', () => {
        const name = 'Salvador';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    });
});