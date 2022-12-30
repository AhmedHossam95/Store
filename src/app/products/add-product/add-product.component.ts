import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  isPending = false;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  saveProduct() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.isPending = true;
      this.productsService.postProduct(product).subscribe(() => {
        this.router.navigateByUrl('products');
      });
    }
  }
}
