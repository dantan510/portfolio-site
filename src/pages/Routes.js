import Home from './Home'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

export const routes = [
  {
    id: 1,
    title: 'home',
    component: Home,
  },
  {
    id: 2,
    title: 'about',
    component: About,
  },
  {
    id: 3,
    title: 'projects',
    component: Projects,
  },
  {
    id: 4,
    title: 'skills',
    component: Skills
  },
  {
    id: 5,
    title: 'contact',
    component: Contact
  }
];
