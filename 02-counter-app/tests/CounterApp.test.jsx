import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas del <CounterApp/>', () => {
    const initialValue = 100;

    test('Debe de hacer match con el snapshot ', () => {
        const { container } = render(<CounterApp value={initialValue} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100 ', () => {
        render(<CounterApp value={initialValue} />);

        expect(screen.getByText(initialValue)).toBeTruthy();
    });

    test('Debe de incrementar con el boton +1 ', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    });

    test('Debe de decrementar con el boton -1 ', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    });

    test('Debe de reiniciar con el boton Reset ', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByLabelText('btn-reset')).toBeTruthy();
    });

})
