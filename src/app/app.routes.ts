import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Sermons } from './pages/sermons/sermons';
import { Events } from './pages/events/events';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
{ path: '', component: Home },
{ path: 'about', component: About },
{ path: 'sermons', component: Sermons },
{ path: 'events', component: Events },
{ path: 'contact', component: Contact }
];