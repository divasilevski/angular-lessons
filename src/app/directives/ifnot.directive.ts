import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      // Показать 
      this.viewConteiner.createEmbeddedView(this.templateRef)
    } else {
      // скрыть
      this.viewConteiner.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>,
    private viewConteiner: ViewContainerRef) { }

}
