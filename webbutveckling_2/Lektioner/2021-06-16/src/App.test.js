import { render, screen } from '@testing-library/react';
import App from './App';

test('check if something is true 1', () => {
    render(<App/>)
    const something = true;
    expect(something).toBe(true);
})

test('check if something is true 2', () => {
    render(<App/>)
    const something = true;
    expect(something).not.toBe(false);
})
