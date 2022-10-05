import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout.component';
import Activities from './Activities';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RegistrationForm from './Registration Form';
import Timeline from './Timeline';

const publicRoute = [
    {
        path: '/',
        component: <Home />,
        exact: true,
        restrict: true,
    },
    {
        path: '/activities',
        component: <Activities />,
        exact: true,
        restrict: true,
    },
    {
        path: '/timeline',
        component: <Timeline />,
        exact: true,
        restrict: true,
    },
    {
        path: '/register',
        component: <RegistrationForm />,
        exact: true,
        restrict: true,
    },
];

const privateRoute = [
    {
        path: '/private',
        component: <Home />,
        exact: true,
        restrict: true,
    },
];

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact element={<PrivateRoute />}>
                        {privateRoute.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                    <Route exact element={<PublicRoute />}>
                        {publicRoute.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                    <Route path="*" element={<p>404</p>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default RouterComponent;
