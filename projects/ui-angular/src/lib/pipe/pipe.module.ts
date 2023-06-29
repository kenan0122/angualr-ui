import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TimesPipe } from "./times.pipe";
import { RangePipe } from './range.pipe';
import { ArrayRangePipe } from "./array-range.pipe";
import { SafeUrlPipe } from "./safe-url.pipe";
import { TimeConversionPipe } from './time-conversion.pipe';
import {InnerHtmlPipe} from './inner-html.pipe';

const Pipes = [
  TimesPipe,
  RangePipe,
  ArrayRangePipe,
  SafeUrlPipe,
  TimeConversionPipe,
  InnerHtmlPipe
]

@NgModule({
  imports: [CommonModule],
  exports: [...Pipes],
  declarations: [...Pipes]
})
export class PipeModule {}
