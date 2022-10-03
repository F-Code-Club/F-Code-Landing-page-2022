import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Layout from '../components/layout/Layout.component';
import Activities from './Activities';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Timeline from './Timeline';

const publicRoute = [
    {
        path: 'home',
        component: <Home />,
        exact: true,
        restrict: true,
    },
    {
        path: 'activities',
        component: <Activities />,
        exact: true,
        restrict: true,
    },
    {
        path: 'timline',
        component: <Timeline />,
        exact: true,
        restrict: true,
    },
];

const privateRoute = [
    {
        path: 'private',
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
                    <Route exact path="/" element={<Navigate to="/home" />} />
                    <Route exact path="/" element={<PrivateRoute />}>
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
                    <Route exact path="/" element={<PublicRoute />}>
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
