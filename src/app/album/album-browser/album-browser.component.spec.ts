import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumBrowserComponent } from './album-browser.component';

describe('AlbumBrowserComponent', () => {
  let component: AlbumBrowserComponent;
  let fixture: ComponentFixture<AlbumBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
