
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Layout from './components/layout';
import ToDoListDetail from './pages/todolistdetail';
import Home from './pages/Home'
import Dashboard from './pages/sidebar'
import TodolistEdit from './components/TodolistEdit';
import Mainhome from './pages/Mainhome';
import Service from './components/service';
function App() {
 

  return (
    <Router>
    <>
    <div className="app">
   
        <Switch>
       
        <Route exact path="/dashboard" component={Dashboard} />

  
          <Route exact path="/todos/:id" component={ToDoListDetail} />
          <Route path="/todos/:id/edit" component={TodolistEdit} />
          <Layout> <Route exact path="/" component={Mainhome} /></Layout>
         
          {/* Add more routes for other pages */}
        </Switch>
     
    </div>
    
    </>
    </Router>
  )
}

export default App
