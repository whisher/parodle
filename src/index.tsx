import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Root } from './routes/root';
import { ErrorPage } from './routes/error-page';
import { Home } from './routes/home';
import { Info } from './routes/info';
import { Statistics } from './routes/statistics';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/info',
				element: <Info />
			},
			{
				path: '/statistics',
				element: <Statistics />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
