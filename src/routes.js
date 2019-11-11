import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './routes/Dashboard/Dashboard'
import Step1 from './routes/Wizard/Step1/Step1'
import Step2 from './routes/Wizard/Step2/Step2'
import Step3 from './routes/Wizard/Step3/Step3'

export default (
  <Switch> 
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/wizard/step1" component={Step1} />
    <Route exact path="/wizard/step2" component={Step2} />
    <Route exact path="/wizard/step3" component={Step3} />
  </Switch>
)