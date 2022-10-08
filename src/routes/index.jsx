import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Layout from '../components/layout/Layout.component';
import App from './Home/App';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import TimeLine from './TimeLine';

const publicRoute = [
    {
        path: 'home',
        component: <App />,
        exact: true,
        restrict: true,
    },
    {
        path: 'home2',
        component: <App />,
        exact: true,
        restrict: true,
    },
    {
        path: 'timeline',
        component: <TimeLine />,
        exact: true,
        restrict: true,
    },
];

const privateRoute = [
    {
        path: 'private',
        component: <App />,
        exact: true,
        restrict: true,
    },
];

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/home2" />} />
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
