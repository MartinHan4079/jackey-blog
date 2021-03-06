import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    IndexComponent,
    SanitizeHtmlPipe,
    PageNotFoundComponent,
    PostDetailComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    IndexComponent,
    PageNotFoundComponent,
    PostDetailComponent,
    FriendComponent
  ]
})
export class CoreModule { }
