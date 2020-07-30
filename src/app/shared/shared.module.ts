import { SearchPipe } from './pipes/search.pipe';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchPipe
  ],
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
    FormsModule
  ],
  exports: [
    HttpClientModule,
    SearchPipe,
    QuillModule,
    FormsModule
  ]
})
export class SharedModule { }
