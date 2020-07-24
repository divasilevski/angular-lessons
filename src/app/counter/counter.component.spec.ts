import {CounterComponent} from "./counter.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';


describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture: ComponentFixture<CounterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })

    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
    //fixture.debugElement
    //fixture.nativeElement
  })

  it('should be created', () => {
    expect(component).toBeDefined()
  })

})
