import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilteringComponent } from './filtering.component';

describe('FilteringComponent', () => {
  let component: FilteringComponent;
  let fixture: ComponentFixture<FilteringComponent>;

  const mockProducts = [
    { id: 1, name: 'Product 1', category: 'Electronics', price: 500 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 1500 },
    { id: 3, name: 'Product 3', category: 'Electronics', price: 2500 },
    { id: 4, name: 'Product 4', category: 'Furniture', price: 3500 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteringComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringComponent);
    component = fixture.componentInstance;
    component.products = mockProducts;
    fixture.detectChanges();
  });

  it('should filter products based on price range', () => {
    // Subscribe to filteredProducts event emitter
    component.filteredProducts.subscribe((filtered) => {
      // Expecting 2 products: one in the 1001-2000 range, and one in the 2001-3000 range
      expect(filtered.length).toBe(2);
      expect(filtered).toEqual([
        { id: 2, name: 'Product 2', category: 'Clothing', price: 1500 },
        { id: 3, name: 'Product 3', category: 'Electronics', price: 2500 }
      ]);
    });

    // Simulate selecting price range checkboxes
    component.onRange1001to2000Change({ target: { checked: true } });
    component.onRange2001to3000Change({ target: { checked: true } });

    // Trigger filterProducts()
    component.filterProducts();
  });
});
