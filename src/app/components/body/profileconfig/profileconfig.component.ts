import { Component } from '@angular/core';

@Component({
    selector: 'app-profileconfig',
    templateUrl: './profileconfig.component.html'
})

export class ProfileconComponent {
   
    selectedFile: File = null;

    onFileSelected(event){
        this.selectedFile = <File>event.target.files[0];
        console.log(event);
    }

    onUpload(){
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
    }

}
