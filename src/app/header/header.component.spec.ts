import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo', () => {
    const logoElement = fixture.debugElement.query(By.css('.logo img'));
    expect(logoElement).toBeTruthy();
    expect(logoElement.nativeElement.src).toContain('assets/main-logo.png');
    expect(logoElement.nativeElement.alt).toBe('Logo');
  });

  it('should have navigation links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('.nav-links a'));
    expect(navLinks.length).toBe(2);

    const aboutLink = navLinks[0].nativeElement;
    expect(aboutLink.textContent).toBe('About');
    expect(aboutLink.getAttribute('routerLink')).toBe('/about');

    const productsLink = navLinks[1].nativeElement;
    expect(productsLink.textContent).toBe('Products');
    expect(productsLink.getAttribute('routerLink')).toBe('/products');
  });

  it('should have login and register links', () => {
    const loginRegisterLinks = fixture.debugElement.queryAll(By.css('.login-register a'));
    expect(loginRegisterLinks.length).toBe(2);

    const loginLink = loginRegisterLinks[0].nativeElement;
    expect(loginLink.textContent).toBe('Login');
    expect(loginLink.getAttribute('routerLink')).toBe('/login');

    const registerLink = loginRegisterLinks[1].nativeElement;
    expect(registerLink.textContent).toBe('Register');
    expect(registerLink.getAttribute('routerLink')).toBe('/register');
  });
});
