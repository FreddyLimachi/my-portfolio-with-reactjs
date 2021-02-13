import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar } from './Navbar';
import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { ProjectDetails } from './ProjectDetails';
import { NotFound } from './NotFound'
import { ParticlesNasa } from './Particles';


function App() {
    return (
        <Router>
            <ParticlesNasa/>
            <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/sobre-mi' component={AboutMe} />
                    <Route exact path='/proyectos' component={Projects} />
                    <Route exact path='/contacto' component={Contact} />
                    <Route exact path='/proyectos/:id' component={ProjectDetails} />
                    <Route component={NotFound} />
                </Switch>
             
        </Router>
    );
}

export default App;
