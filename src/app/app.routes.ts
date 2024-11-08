import { Routes } from '@angular/router';
import { SkillsFormularComponent } from './skills-formular/skills-formular.component';
import { JobResultComponent } from './job-result/job-result.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/formular',
        pathMatch: 'full',
    },
    {
        path: 'formular',
        component: SkillsFormularComponent
    },
    {
        path: 'result',
        component: JobResultComponent
    }
];
