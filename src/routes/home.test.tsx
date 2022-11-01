import React, { useEffect, useState } from 'react';
import { GameResult } from '../app/types';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { getGameStatus, updateRows, reset } from '../app/store/rowsSlice';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../app/store/test-utils';
import { Home } from './home';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
	rest.get('/data.json', (req, res, ctx) => {
		return res(ctx.json(['abaco']), ctx.delay(150));
	})
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('Home', async () => {
	renderWithProviders(<Home />);

	expect(screen.getByRole('status')).toBeInTheDocument();
	expect(await screen.findByTestId('table')).toBeInTheDocument();

	fireEvent.keyDown(window, {
		key: 'q'
	});
	fireEvent.keyDown(window, {
		key: 'w'
	});
	fireEvent.keyDown(window, {
		key: 'e'
	});
	fireEvent.keyDown(window, {
		key: 'r'
	});
	fireEvent.keyDown(window, {
		key: 't'
	});
	expect(screen.getAllByText((content, element) => content.includes(`qwert`))).toHaveLength(2);
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'a'
	});
	fireEvent.keyDown(window, {
		key: 'b'
	});
	fireEvent.keyDown(window, {
		key: 'a'
	});
	fireEvent.keyDown(window, {
		key: 'c'
	});
	fireEvent.keyDown(window, {
		key: 'o'
	});
	expect(await screen.findAllByText((content, element) => content.includes('""'))).toHaveLength(2);
	expect(await screen.findByTestId('modal-success')).toBeInTheDocument();
	fireEvent.click(screen.getByTestId('modal-button'));
	expect(() => screen.getByTestId('modal-success')).toThrow();
});
