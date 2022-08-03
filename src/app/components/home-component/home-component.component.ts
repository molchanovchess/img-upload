import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public url = "../../assets/upload.jpg";

  onselectFile(e: any) {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  public options = [
    { id: '1', name: 'Select animation...' },
    { id: '2', name: 'Zoom ++' },
    { id: '3', name: 'Rotate' },
  ];
  public selectedOption = this.options[0].id;

  public zoom: boolean = false;
  public rotation: boolean = false;


  public cropLeft: number = 0;
  public cropRight: number = 0;
  public cropTop: number = 0;
  public cropBottom: number = 0;

  animationZoom() {
    this.zoom = true;
    setTimeout(() => this.zoom = false, 2000);
  }
  animationRotate() {
    this.rotation = true;
    setTimeout(() => this.rotation = false, 2000);
  }

  selectedOpt(selectedOption: string) {
    if (selectedOption === "2") {
      this.animationZoom();
    }
    if (selectedOption === "3") {
      this.animationRotate();
    }
  }

}