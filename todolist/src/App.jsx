
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Layout from './components/layout';
import ToDoListDetail from './pages/todolistdetail';
import Home from './pages/Home'
import Dashboard from './pages/sidebar'
import TodolistEdit from './components/TodolistEdit';
function App() {
 

  return (
    <Router>
    <>
    <div className="app">
    <Layout>
        <Switch>
        <Route exact path="/" component={Dashboard} />
          <Route exact path="/home" component={Home} />
  
          <Route exact path="/todos/:id" component={ToDoListDetail} />
          <Route path="/todos/:id/edit" component={TodolistEdit} />

          {/* Add more routes for other pages */}
        </Switch>
      </Layout>
    </div>
    
    </>
    </Router>
  )
}

export default App
