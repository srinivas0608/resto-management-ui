import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  alert: boolean = false;

  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')

  });

  ngOnInit() {

    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result) => {
      this.editResto = new FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])

      })
    })
  }

  collection() {
    this.resto.updateResto(this.router.snapshot.params.id, this.editResto.value).subscribe((result) => {
      this.alert = true;
      this.editResto.reset({})
    })
  }

  closeAlert() {
    this.alert = false;
  }

}
