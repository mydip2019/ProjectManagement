import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const appRoutes: Routes = [

    {                                          // removed square bracket
        path: '',
        loadChildren: './features/home/home.module#HomeModule',
    }, {
        path: 'home',
        loadChildren: './features/home/home.module#HomeModule'
    },
    {
        path: 'contacts',
        loadChildren: './features/contacts/contacts.module#ContactsModule'
    },
    {
        path: 'projects',
        loadChildren: './features/projects/projects.module#ProjectsModule'
    }
    ,
    {
        path: 'task',
        loadChildren: './features/tasks/tasks.module#TasksModule'
    }

    // // 1st Route
    // { path: '', loadChildren: './features/home/home.module#HomeModule' },
    // { path: 'Home', loadChildren: './features/home/home.module#HomeModule' },
    // // 1st Route
    // { path: '/contacts', loadChildren: './features/contacts/contacts.module#ContactsModule' }
    // // 2nd Route
    // , { path: '**', loadChildren: "./features/page-not-found/page-not-found.module#PageNotFoundModule" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [RouterModule],
    providers: []
})


export class AppRoutingModule { }