import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './core/index/index.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FriendComponent } from './core/friend/friend.component';
import { PostDetailComponent } from './core/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'frient', component: FriendComponent },
  { path: 'article/:sha', component: PostDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
