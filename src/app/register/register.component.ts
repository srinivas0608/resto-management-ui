import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert: boolean = false;
  register = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl('')

  })

  constructor(private resto: RestoService) { }

  ngOnInit() {
  }

  collection() {
      this.resto.registerUser(this.register.value).subscribe((result) => {
      console.warn("result", result)
      this.alert = true;
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
