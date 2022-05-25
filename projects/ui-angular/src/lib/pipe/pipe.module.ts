import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TimesPipe } from "./times.pipe";
import { RangePipe } from './range.pipe';

const Pipes = [
  TimesPipe,
  RangePipe
]

@NgModule({
  imports: [CommonModule],
  exports: [...Pipes],
  declarations: [...Pipes, RangePipe]
})
export class PipeModule {}
