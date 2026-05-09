import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { ContactUs } from './component/contact-us/contact-us';
import { AboutUs } from './component/about-us/about-us';
import { Login } from './component/login/login';
import { Dashboard } from './component/dashboard/dashboard';
import { CourseList } from './component/course-list/course-list';
import { ExamSystem } from './component/exam-system/exam-system';
import { LiveClasses } from './component/live-classes/live-classes';
import { TalentHunt } from './component/talent-hunt/talent-hunt';
import { Admission } from './component/admission/admission';
import { Notices } from './component/notices/notices';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: AboutUs},
    {path: 'contact', component: ContactUs},
    {path: 'login', component: Login},
    {path: 'dashboard', component: Dashboard, canActivate: [authGuard]},
    {path: 'courses', component: CourseList, canActivate: [authGuard]},
    {path: 'exams', component: ExamSystem, canActivate: [authGuard]},
    {path: 'live-classes', component: LiveClasses, canActivate: [authGuard]},
    {path: 'talent-hunt', component: TalentHunt, canActivate: [authGuard]},
    {path: 'admission', component: Admission}, // Keep admission public
    {path: 'notices', component: Notices, canActivate: [authGuard]}
];
