import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';


@Component({
  selector: 'app-navbarcc',
  templateUrl: './navbarcc.component.html',
  styleUrls: ['./navbarcc.component.css']
})
export class NavbarccComponent {

  @ViewChildren('ico') icons: QueryList<ElementRef> = new QueryList;

  focus(elem: any, index: number) {
    let previous = index - 1;
    let previous1 = index - 2;
    let next = index + 1;
    let next2 = index + 2;

    if (previous == -2) {
      console.log("first element");
      elem.style.transform = "scale(1) translateY(-10px)";
    } else if (next == this.icons.length) {
      elem.style.transform = "scale(1) translateY(-10px)";
      console.log("last element");
    } else {
      elem.style.transform = "scale(1) translateY(-10px)";
      this.icons.toArray()[previous].nativeElement.style.transform = "scale(1.2) translateY(-6px)";
      this.icons.toArray()[previous1].nativeElement.style.transform = "scale(1.1)";
      this.icons.toArray()[next].nativeElement.style.transform = "scale(1.2) translateY(-6px)";
      this.icons.toArray()[next2].nativeElement.style.transform = "scale(1.1)";
    }
  }

  resetIcons(): void {
    this.icons.forEach((item: ElementRef) => {
      item.nativeElement.style.transform = "scale(1) translateY(0px)";
    });
  }
}
