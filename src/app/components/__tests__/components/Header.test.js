import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../layout/header.tsx';
import '@testing-library/jest-dom';

describe('Header Component', () => {
    test('should render without crashing', () => {
        render(<Header />);
        // Check if components render
        expect(screen.getByPlaceholderText(/Search ShowOps/i)).toBeInTheDocument();
    });

    test('should handle search input', () => {
        render(<Header />);
        const searchInput = screen.getByPlaceholderText(/Search ShowOps/i);
        fireEvent.change(searchInput, { target: { value: 'New Search' } });
        expect(searchInput.value).toBe('New Search');
    });
    //
    test('should handle search key command', () => {
        render(<Header />);
        const commandKey = screen.getByText('S');
        fireEvent.click(commandKey);
        // Add further checks or mocks for functionality triggered by the key command
        // For example, checking if a search function is called
    });
    //
    // test('should render notification button', () => {
    //     render(<Header />);
    //     const bellButton = screen.getByRole('button', { name: /bell icon/i });
    //     fireEvent.click(bellButton);
    //     // Add further checks or mocks for functionality triggered by the bell button click
    //     // For example, checking if a notification function is called
    // });
    //
    // test('should render avatar', () => {
    //     render(<Header />);
    //     const avatar = screen.getByRole('img', { name: /JD/i });
    //     expect(avatar).toBeInTheDocument();
    //     // Add further checks or mocks for functionality related to the avatar
    // });
});
