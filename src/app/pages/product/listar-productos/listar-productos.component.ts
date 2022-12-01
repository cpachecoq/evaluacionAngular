import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/product';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent {

  title = "Listar Datos"

  product:Product=new Product()

  constructor (private router: Router) {}

}
