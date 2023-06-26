import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexedDBPhotoPage } from './indexed-dbphoto.page';

describe('IndexedDBPhotoPage', () => {
  let component: IndexedDBPhotoPage;
  let fixture: ComponentFixture<IndexedDBPhotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndexedDBPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
