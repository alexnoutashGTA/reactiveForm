import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { User } from '../user.model';
import {UsersService} from '../users.service';
import {HttpClientModule} from '@angular/common/http';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      imports: [
        ReactiveFormsModule, HttpClientModule
      ],
      providers: [ UserComponent, UsersService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.debugElement.componentInstance;
    component.user = new User('James', 'james@bond.com' , {city: 'Toronto'});
    fixture.detectChanges();
  });

  it('user component instance instantiated ', () => {
    expect(component).toBeTruthy();
  });

  it('user name test ', () => {
    expect(component.user.name).toBe('James');
  });

  it('user email test', () => {
    expect(component.user.email).toBe('james@bond.com');
  });

  it('user city test', () => {
    expect(component.user.address.city).toBe('Toronto');
  });

});


