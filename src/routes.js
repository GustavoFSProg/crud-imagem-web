import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Deletar from './pages/Delete'
import Register from './pages/Regsiter'
import Update from './pages/Update'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" component={Register} />
        <Route path="/update" component={Update} />
        <Route path="/delete" component={Deletar} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
