import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroesById debe de retornar un heroe por ID ', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroesById debe de retornar undefined si no existe ', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();

    });

    test('getHeroesByOwner debe regresar heroes de DC', () => {
        const owner = "DC";
        const heroesList = getHeroesByOwner(owner);

        expect(heroesList.length).toBe(3);
        expect(heroesList).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

})
