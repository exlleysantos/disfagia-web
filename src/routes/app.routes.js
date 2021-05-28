import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Patients from '../pages/Patients';
import PreScreening from '../pages/PreScreening';
import Anamnese from '../pages/Anamnese';
import Notify from '../pages/Notify';
import Error404 from '../pages/404';
import SubjectiveNutritionalAssessment from '../pages/SubjectiveNutritionalAssessment';
import ProfilePatient from '../pages/ProfilePatient'
import Layout from '../components/Layout';
import MeasurementTechniques from '../pages/MeasurementTechniques';
import Register from '../pages/Register';

const AuthStack = () => {
	return (
		<Router>
			<Switch>

				<Route exact path='/'>
					<Redirect to='/profile' />
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
				
				<Route exact path='/patient-profile'>
					<ProfilePatient/>
				</Route>
				<Route exact path='/patients/notify'>
					<Layout>
						<Notify/>
					</Layout>
				</Route>
				<Route exact path='/patients/anamnese'>
					<Layout>
						<Register/>
					</Layout>
				</Route>
				<Route exact path='/patients/new'>
					<Layout>
						<Anamnese/>
					</Layout>
				</Route>

				<Route exact path ='/nutritionist/subjective-nutritional-assessment'>
					<Layout>
						<SubjectiveNutritionalAssessment/>
					</Layout>
				</Route>
				<Route exact path ='/nutritionist/measurement-techniques'>
					<Layout>
						<MeasurementTechniques/>
					</Layout>
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
				

				<Route path='*'>
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};

export default AuthStack;
