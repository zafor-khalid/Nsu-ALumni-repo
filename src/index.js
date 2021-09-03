/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import AppContainer from './containers/app.container'
import './index.less'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home ';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import MemberDirectory from './components/MemberDirectory/MemberDirectory';
import EventsCalender from './components/EventsCalender/EventsCalender';
import CareerOppurtunities from './components/CareerOppurtunities/CareerOppurtunities';
import AlumniStories from './components/AlumniStories/AlumniStories';
import FundRaising from './components/FundRaising/FundRaising';
import NewsAndPhotos from './components/NewsAndPhotos/NewsAndPhotos';
import { store } from './redux/store'



ReactDOM.render(
  <Provider store={store}>
    <Router>

      <NavigationBar />
      <AppContainer />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/updateprofile" component={UpdateProfile} />
        <Route path="/MemberDirectory" component={MemberDirectory} />
        <Route path="/events" component={EventsCalender} />
        <Route path="/career" component={CareerOppurtunities} />
        <Route path="/stories" component={AlumniStories} />
        <Route path="/fundraising" component={FundRaising} />
        <Route path="/NewsAndPhotos" component={NewsAndPhotos} />
        <Route path="*" component={<h1>nai</h1>} />
      </Switch>

    </Router >
  </Provider >

  ,

  document.getElementById('root')
)
