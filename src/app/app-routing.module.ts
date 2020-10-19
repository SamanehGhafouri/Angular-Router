import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';


const routes: Routes = [
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), },
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  // forRoot() -> to ensures that the app only instantiates one RouterModule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
