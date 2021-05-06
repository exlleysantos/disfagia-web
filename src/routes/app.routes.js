import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Patients from '../pages/Patients';
import PreScreening from '../pages/PreScreening';
import Anamnese from '../pages/Anamnese';

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
					<Redirect to='/profile' />
				</Route>
					<Route exact path='/speech-therapist/pre-triagem'>
						<Layout> 
							<PreScreening/>
						</Layout>
				</Route>

				<Route exact path='/nurse/anamnese'>
					<Layout>
						<Anamnese/>
					</Layout>
				</Route>
				
				<Route exact path='/profile'>
					<Layout>
						<Profile />
					</Layout>
				</Route>

				<Route exact path='/patients'>
					<Layout>
						<Patients />
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
