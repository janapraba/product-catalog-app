import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { FilteringComponent } from '../filtering/filtering.component';
import { SortingComponent } from '../sorting/sorting.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from '../sevice/product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  const mockProducts = [
    { name: 'Product 1', price: 100, imageUrl: 'path/to/image1.jpg' },
    { name: 'Product 2', price: 200, imageUrl: 'path/to/image2.jpg' },
    { name: 'Product 3', price: 150, imageUrl: 'path/to/image3.jpg' },
    { name: 'Product 4', price: 250, imageUrl: 'path/to/image4.jpg' },
    { name: 'Product 5', price: 300, imageUrl: 'path/to/image5.jpg' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        FilteringComponent,
        SortingComponent
      ],
      imports: [
        MatPaginatorModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: ProductService, useValue: { getProducts: () => mockProducts } }
      ]
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products and filtered products correctly', () => {
    component.ngOnInit();
    expect(component.products.length).toBe(mockProducts.length);
    expect(component.filteredProducts.length).toBe(mockProducts.length);
  });

  it('should filter products based on filtering component output', () => {
    const filteredProducts = mockProducts.filter(product => product.price > 150);
    component.handleFilteredProducts(filteredProducts);
    expect(component.filteredProducts.length).toBe(filteredProducts.length);
    expect(component.displayedProducts.length).toBe(filteredProducts.length);
  });

  it('should change sort order when handleSortChange is called', () => {
    component.ngOnInit();
    component.handleSortChange('desc');
    expect(component.currentSortOrder).toBe('desc');
    expect(component.filteredProducts[0].price).toBe(300);
    expect(component.filteredProducts[component.filteredProducts.length - 1].price).toBe(100);
  });

});
