import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('renders app component', () => {
        const appElement = screen.getByTestId('app');
        expect(appElement).toBeInTheDocument();
    });

    test('renders dropdown component', () => {
        const dropdownElement = screen.getByTestId('dropdown');
        expect(dropdownElement).toBeInTheDocument();
    });

    test('clicking on dropdown button toggles dropdown menu', () => {
        const dropdownButton = screen.getByTestId('dropdown-button');
        const dropdownMenu = screen.getByTestId('dropdown-menu');
        fireEvent.click(dropdownButton);
        expect(dropdownMenu).toHaveClass('show');
        fireEvent.click(dropdownButton);
        expect(dropdownMenu).not.toHaveClass('show');
    });

    test('clicking on pagination item changes page', () => {
        const paginationItem = screen.getByTestId('pagination-item-2');
        fireEvent.click(paginationItem);
        expect(paginationItem).toHaveClass('active');
    });

    test('clicking on random button shuffles data', () => {
        const randomButton = screen.getByTestId('random-button');
        const cardElements = screen.getAllByTestId('card');
        const initialCardOrder = cardElements.map(card => card.textContent);
        fireEvent.click(randomButton);
        const shuffledCardElements = screen.getAllByTestId('card');
        const shuffledCardOrder = shuffledCardElements.map(card => card.textContent);
        expect(shuffledCardOrder).not.toEqual(initialCardOrder);
    });
});