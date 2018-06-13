import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  heightnew;
  widthnew;
  url: string = "";

  setChatImageDimension(width, height) { // this function will effect on indiviadual image
    $('.ewapps__chatr_resize_imageratio').css({ 'object-fit' : ''});
    $('.ewapps__chatr_resize_imageratio').css('width', width + 'px');
    $('.ewapps__chatr_resize_imageratio').css('height', height + 'px');
  }

  imagesize() {
    const image = document.getElementById('my_image') as HTMLImageElement;
    const width = image.naturalWidth;
    const height = image.naturalHeight;


    const dw = 400;
    const dh = 400;
    let minAspectRation: number = 0;

    const a = width / height;
    alert(a);

    alert(width);
    alert(height);


    if ((width > 2 * height) && (width > dw || height > dh)) {
      alert('landscape crop');
      let factor: number ;
      factor = dw / width;
      this.widthnew = width * factor;

      // with 2:1 ratio
      const halfHeightOfWidth = this.widthnew / 2;
      if (height >= halfHeightOfWidth) {
        this.heightnew = halfHeightOfWidth;
      }else {
        this.heightnew = height;
      }

      // if (height > 400) {
      //   this.heightnew = 400;
      // }else {
      //   this.heightnew = height;
      // }
      alert('widthapply-' + this.widthnew + 'heightapply-' + this.heightnew);
      this.setChatImageDimension(this.widthnew, this.heightnew);
      $('.ewapps__chatr_resize_imageratio').css({ 'object-fit' : 'cover'}); // this css apply on individual image
    }else if ((height > 2 * width) && (width > dw || height > dh)) {
      alert('portrait crop');
      let factor: number ;
      factor = dw / height;
      this.heightnew = height * factor;

      // with 2:1 ratio
      const halfWidthOfHeight = this.heightnew / 2;
      if (width >= halfWidthOfHeight) {
        this.widthnew = halfWidthOfHeight;
      }else {
        this.widthnew = width;
      }

      // if (width > 400) {
      //   this.widthnew = 400;
      // }else {
      //   this.widthnew = width;
      // }

      alert('widthapply-' + this.widthnew + 'heightapply-' + this.heightnew);
      this.setChatImageDimension(this.widthnew, this.heightnew);
      $('.ewapps__chatr_resize_imageratio').css({ 'object-fit' : 'cover'}); // this css apply on individual image
    } else if (height <= dw && width <= dw) { // show actual image
      alert('actual image');
      this.heightnew = height;
      this.widthnew = width;
      this.setChatImageDimension(this.widthnew, this.heightnew);
      alert('widthapply-' + this.widthnew + 'heightapply-' + this.heightnew);
    }else if (height > dw && width <= dw) { // show scale image according to height
      alert('scale according to height image');
      let factor : number ;
      factor = dw / height;
      alert('local-' + factor);
      this.widthnew = width * factor;
      this.heightnew = height * factor;
      alert('widthapply-' + this.widthnew + 'heightapply-' + this.heightnew);
      this.setChatImageDimension(this.widthnew, this.heightnew);
    }else if (width > dw && height <= dw) { // show scale image according to width
      alert('scale according to width image');
      let factor : number ;
      factor = dw / width;
      alert('local-' + factor);
      this.widthnew = width * factor;
      this.heightnew = height * factor;
      alert('widthapply-' + this.widthnew + 'heightapply-' + this.heightnew);
      this.setChatImageDimension(this.widthnew, this.heightnew);
    }else if (width > dw && height > dw) { // show scale image according to width and height
      alert('scale according to width and height image');
      let factor : number ;
      if (width >= height) {
        alert('landscape');
       factor = dw / width;
      }else if (height >  width) {
        alert('portrait');
        factor = dw / height;
      }
      alert('local-' + factor);
      this.widthnew = width * factor;
      this.heightnew = height * factor;
      alert('widthapply-' + this.widthnew + 'heightapply-' + this.heightnew);
      this.setChatImageDimension(this.widthnew, this.heightnew);
    }
  }
}
