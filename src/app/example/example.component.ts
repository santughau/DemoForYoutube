import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  email;
  password;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.error('Hello', 'Toastr fun!',{
      positionClass: 'toast-top-center',
      titleClass:"Hello",
      enableHtml: true,
    });
  }
  saveData(){
    console.log(this.email);
    console.log(this.password);
    if(this.email = ''){

      this.showSuccess();
    }
  }

}
