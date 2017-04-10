import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Learn } from './learn';

@NgModule({
  declarations: [
    Learn,
  ],
  imports: [
    IonicModule.forChild(Learn),
  ],
  exports: [
    Learn
  ]
})
export class LearnModule {}
