import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../sevice/product.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  displayedProducts: any[] = [];
  pageSize = 10; // Default page size
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentSortOrder: string = 'asc'; // Default sort order

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Fetch the products initially
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products.slice();
    this.updateDisplayedProducts();
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.updateDisplayedProducts(event.pageIndex);
  }

  updateDisplayedProducts(pageIndex: number = 0) {
    this.applySort(); // Sort the filtered products before pagination
    const startIndex = pageIndex * this.pageSize;
    this.displayedProducts = this.filteredProducts.slice(startIndex, startIndex + this.pageSize);
  }

  handleFilteredProducts(filtered: any[]) {
    this.filteredProducts = filtered;
    if (this.paginator) {
      this.paginator.firstPage(); // Reset to the first page
    }
    this.updateDisplayedProducts();
  }

  handleSortChange(sortOrder: string) {
    this.currentSortOrder = sortOrder;
    this.updateDisplayedProducts(); // Update displayed products with sorting applied
  }

  applySort() {
    if (this.currentSortOrder === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.currentSortOrder === 'desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
}
