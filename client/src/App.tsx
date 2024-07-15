import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateTripPage } from './pages/CreateTrip';
import { TripDetailsPage } from './pages/TripDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <CreateTripPage />,
    },
    {
        path: '/trips/:tripId',
        element: <TripDetailsPage />,
    },
]);

export function App() {
    return <RouterProvider router={router} />;
}
