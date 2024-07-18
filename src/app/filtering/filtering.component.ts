import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {
  categories: string[] = [];
  selectedCategories: string[] = [];
  @Input() products: any[] = [];
  @Output() filteredProducts: EventEmitter<any[]> = new EventEmitter<any[]>();
  minPrice: number | null = null;
  maxPrice: number | null = null;
  below1000Checked: boolean = false;
  range1001to2000Checked: boolean = false;
  range2001to3000Checked: boolean = false;
  range3001to4000Checked: boolean = false;
  originalProducts: any[] = []; // Store original unfiltered products
  filteredProductsList: any[] = []; 

  // Subjects for debouncing
  private minPriceSubject: Subject<number | null> = new Subject();
  private maxPriceSubject: Subject<number | null> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.originalProducts = [...this.products]; // Save a copy of original products
    this.extractCategoriesFromProducts();
    this.filterProducts();

    // Set up debounced listeners for min and max price changes
    this.minPriceSubject.pipe(debounceTime(300)).subscribe(value => {
      this.minPrice = value;
      this.filterProducts();
    });
    this.maxPriceSubject.pipe(debounceTime(300)).subscribe(value => {
      this.maxPrice = value;
      this.filterProducts();
    });
  }

  extractCategoriesFromProducts() {
    const categoriesSet = new Set<string>();
    this.products.forEach(product => {
      if (product.category) {
        categoriesSet.add(product.category);
      }
    });
    this.categories = Array.from(categoriesSet);
    this.selectedCategories = Array.from(categoriesSet);
  }

  onCategoryChange(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.filterProducts();
  }

  onMinPriceChange(event: any) {
    const value = event.target.value !== '' ? parseInt(event.target.value, 10) : null;
    this.minPriceSubject.next(value);
  }

  onMaxPriceChange(event: any) {
    const value = event.target.value !== '' ? parseInt(event.target.value, 10) : null;
    this.maxPriceSubject.next(value);
  }

  onBelow1000Change(event: any) {
    this.below1000Checked = event.target.checked;
    this.filterProducts();
  }

  onRange1001to2000Change(event: any) {
    this.range1001to2000Checked = event.target.checked;
    this.filterProducts();
  }

  onRange2001to3000Change(event: any) {
    this.range2001to3000Checked = event.target.checked;
    this.filterProducts();
  }

  onRange3001to4000Change(event: any) {
    this.range3001to4000Checked = event.target.checked;
    this.filterProducts();
  }

  filterProducts() {
    let filtered = [...this.originalProducts]; 
  
    // Apply category filter
    
    filtered = filtered.filter(product =>
      this.selectedCategories.includes(product.category)
    );
  
    // Apply min/max price filters

    if (this.minPrice !== null) {
      filtered = filtered.filter(product => product.price >= this.minPrice!);
    }
    if (this.maxPrice !== null) {
      filtered = filtered.filter(product => product.price <= this.maxPrice!);
    }
  
    // Apply additional price range checkboxes collectively
    
    if (this.below1000Checked || this.range1001to2000Checked || this.range2001to3000Checked || this.range3001to4000Checked) {
      filtered = filtered.filter(product => {
        return (
          (this.below1000Checked && product.price < 1000) ||
          (this.range1001to2000Checked && product.price >= 1001 && product.price <= 2000) ||
          (this.range2001to3000Checked && product.price >= 2001 && product.price <= 3000) ||
          (this.range3001to4000Checked && product.price >= 3001 && product.price <= 4000)
        );
      });
    }
    this.filteredProductsList = filtered;
    this.filteredProducts.emit(filtered);
  }

  clearAllCategory() {
    this.selectedCategories = [];
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    categoryCheckboxes.forEach((checkbox: any) => {
      checkbox.checked = false;
    });
    this.filterProducts();
  }

  selectAllCategories() {
    this.selectedCategories = [...this.categories];
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    categoryCheckboxes.forEach((checkbox: any) => {
      checkbox.checked = true;
    });
    this.filterProducts();
  }

  clearAllPrice() {
    this.below1000Checked = false;
    this.range1001to2000Checked = false;
    this.range2001to3000Checked = false;
    this.range3001to4000Checked = false;
    const priceCheckboxes = document.querySelectorAll('.price-checkbox');
    priceCheckboxes.forEach((checkbox: any) => {
      checkbox.checked = false;
    });
    this.minPrice = null;
    this.maxPrice = null;
    this.filterProducts();
  }

  selectAllPrice() {
    this.below1000Checked = true;
    this.range1001to2000Checked = true;
    this.range2001to3000Checked = true;
    this.range3001to4000Checked = true;
    const priceCheckboxes = document.querySelectorAll('.price-checkbox');
    priceCheckboxes.forEach((checkbox: any) => {
      checkbox.checked = true;
    });
    this.filterProducts();
  }

  clearPriceRange() {
    this.minPrice = null;
    this.maxPrice = null;
    const minInput = document.querySelector<HTMLInputElement>('.min-price-input');
    const maxInput = document.querySelector<HTMLInputElement>('.max-price-input');
    if (minInput) minInput.value = '';
    if (maxInput) maxInput.value = '';
    this.filterProducts();
  }
}
