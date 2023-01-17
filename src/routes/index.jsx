import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout.component';
import ScrollToTop from '../utils/helper/ScrollToTop';
import Activities from './Activities';
import BlogDetail from './BlogDetail';
import CommingSoon from './CommingSoon';
import Home from './Home';
import Timeline from './Home/components/Timeline';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Qna from './Qna';
import RegistrationForm from './Registration Form';
import SignUp from './SignUp';

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
        path: '/signup',
        component: <SignUp />,
        exact: true,
        restrict: true,
    },
    {
        path: '/faq',
        component: <Qna />,
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
        path: '/blog/:id',
        component: <BlogDetail />,
        exact: true,
        restrict: true,
    },
];

const privateRoute = [
    {
        path: '/register',
        component: <RegistrationForm />,
        exact: true,
        restrict: true,
    },
];

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
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
                    <Route path="*" element={<CommingSoon />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default RouterComponent;
