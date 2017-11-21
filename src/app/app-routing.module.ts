import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { WatchesComponent } from './components/watches/watches.component';
import { HistoryComponent } from './components/history/history.component';
import { CraftsmenshipComponent } from './components/craftsmenship/craftsmenship.component';

// import { AuthGuard } from './guards/auth.guard';
// import { NotAuthGuard } from './guards/notAuth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  // { path: 'watches', component: WatchesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'craftsmenship', component: CraftsmenshipComponent },

  { path: '**', component: HomeComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
