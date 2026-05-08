import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { ContactUs } from './component/contact-us/contact-us';
import { AboutUs } from './component/about-us/about-us';



export const routes: Routes = [

    {path: '', component: Home},
    {path: 'about', component: AboutUs},
    {path: 'contact', component: ContactUs}
];
