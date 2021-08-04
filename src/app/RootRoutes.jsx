// import React from 'react';
// import { Redirect } from 'react-router-dom';

import dashboardRoutes from './views/routes';

// const errorRoute = [
// 	{
// 		component: () => <Redirect to='/session/404' />,
// 	},
// ];

const routes = [...dashboardRoutes /* ...errorRoute */];

export default routes;
