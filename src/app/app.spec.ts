
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the hero heading', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const heading = element.querySelector('h1');

    expect(heading?.textContent).toContain(
      'digital experiences.'
    );
  });

  it('should link to the GitHub profile', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const githubLink = element.querySelector<HTMLAnchorElement>(
      'a[href="https://github.com/MatheusGoetz"]'
    );

    expect(githubLink).not.toBeNull();
  });
});
