import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Educators from '../pages/Educators';
import CreateActivity from '../pages/CreateActivity';
import CreateCourse from '../pages/CreateCourse';
import CreateForum from '../pages/CreateForum';
import Forums from '../pages/Forums';
import ShareOptions from '../pages/ShareOptions';
import ShareLinks from '../pages/ShareLinks';
import ShareDocs from '../pages/ShareDocs';
import ShareClass from '../pages/ShareClass';
import Error404 from '../pages/404';

import Layout from '../components/Layout';

const AuthStack = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/home' />
				</Route>

				<Route exact path='/home'>
					<h1>HOME</h1>
				</Route>

				<Route exact path='/profile'>
					<Layout>
						<Profile />
					</Layout>
				</Route>

				<Route exact path='/educators'>
					<Layout>
						<Educators />
					</Layout>
				</Route>

				<Route exact path='/create-activity'>
					<Layout>
						<CreateActivity />
					</Layout>
				</Route>

				<Route exact path='/create-course'>
					<Layout>
						<CreateCourse />
					</Layout>
				</Route>

				<Route exact path='/forums'>
					<Layout>
						<Forums />
					</Layout>
				</Route>

				<Route exact path='/create-forum'>
					<Layout>
						<CreateForum />
					</Layout>
				</Route>

				<Route exact path='/share'>
					<Layout>
						<ShareOptions />
					</Layout>
				</Route>

				<Route exact path='/share/links'>
					<Layout>
						<ShareLinks />
					</Layout>
				</Route>

				<Route exact path='/share/docs'>
					<Layout>
						<ShareDocs />
					</Layout>
				</Route>

				<Route exact path='/share/class'>
					<Layout>
						<ShareClass />
					</Layout>
				</Route>

				<Route path='*'>
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};

export default AuthStack;
