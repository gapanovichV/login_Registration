import { Greeting, Login, Registration } from './page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting/>
  },
	{
		path: '/Login',
		element: <Login />,
		errorElement: <div>404</div>,
	},
	{
		path: '/registration',
		element: <Registration />,
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
