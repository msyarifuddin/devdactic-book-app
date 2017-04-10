import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Read } from './read';

@NgModule({
  declarations: [
    Read,
  ],
  imports: [
    IonicModule.forChild(Read),
  ],
  exports: [
    Read
  ]
})
export class ReadModule {}
