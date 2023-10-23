import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TapsComponent } from './taps/taps.component';

const routes: Routes = [
    {
        path: '',
        component: TapsComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'employees',
                loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
            },
            {
                path: 'posts',
                loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
            },
            {
                path: 'rooms',
                loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
