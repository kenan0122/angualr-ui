import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AllowableValidatorDirective } from "./allowable-format.directive";
import { CheckDirective } from "./check.directive";
import { ChooseEmptyDirective } from "./choose-empty.directive";
import { NonEmptyDirective } from "./no-empty.directive";

const Directives = [
  AllowableValidatorDirective,
  CheckDirective,
  NonEmptyDirective,
  ChooseEmptyDirective
];

@NgModule({
  imports: [CommonModule],
  declarations: [
      ...Directives
  ],
  exports: [
      ...Directives
  ],
})

/**自定义指令模块 */
export class DirectivesModule {
  static forRoot(): ModuleWithProviders<DirectivesModule> {
      return { ngModule: DirectivesModule };
  }
}
