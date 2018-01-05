import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { WebService } from '../web.service';
import { FileUploader, FilterFunction, FileUploaderOptions } from 'ng2-file-upload';
import { Observable } from 'rxjs/Rx';
import { AddmenuComponent } from '../addmenu/addmenu.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin },
    WebService
  ]

})
export class ProfileComponent implements OnInit {
  
  data;
  debugger;
  confirmdelete: boolean = false;
  profileId: string = "";
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:5000/upload' });
  Authorization: any;
  uploadedFiles: any[] = [];
  ImageData;
  src;
  add;
  items = [];
  itemCount = 0;
  url;
  name: string;
  cost: string;
  info: string;
  video: string;
  categorytype: string;
  categoryid: string;
  radio: string;
  addbtn: boolean = true;
  updatebtn: boolean = false;

  // itemResource = new DataTableResource(this.items);
  update_profile: boolean = false;
  Categories: any;
  constructor(private Router: Router, private fb: FormBuilder, private WebService: WebService) { }

  @ViewChild('fileInput') fileInput: ElementRef;

  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 900,
    resizeMaxWidth: 567
  };

  ngOnInit() {
    this.bindprofile();
  }

  submit(){
    debugger;
    if (this.profileId == "") {
      this.addprofile();
    }
    else{
      this.updateprofile();
    }
  }

  addprofile() {
    debugger;
    var radio = this.radio;
    var name = this.name;
    var cost = this.cost;
    var info = this.info;
    this.uploader.uploadAll();
    var video = this.uploader.queue[0].file.name;
    var categoryid = this.categorytype;

    this.WebService.Addprofile(this.profileId, radio, name, cost, info, video, categoryid);
    alert("profile is added ");
	location.reload();
  }

  bindprofile() {

    console.log("in add refresh");
    this.WebService.getprofilelist().subscribe(profile => {

      this.items = [];
      for (var i = (profile.length - 1); i >= 0; i--) {
        this.items.push({ 'id': profile[i]._id, 'radio': profile[i].profile.radio, 'name': profile[i].profile.name, 'cost': profile[i].profile.cost, 'info': profile[i].profile.info, 'video': profile[i].profile.video, 'categoryid': profile[i].profile.categoryid })
      }

      // this.itemResource = new DataTableResource(this.items);
      // this.itemResource.count().then(count => this.itemCount = count);
      this.reloadItems({ offset: 0, limit: 5 })
    });

  }
  reloadItems(params) {
    console.log("in reload");
    // this.itemResource.query(params).then(items => this.items = items);
  }

  change(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadedFiles.push(data);
    }
  }

  

  DeleteClicked(event) {
    
    this.profileId = event.id
    var obs = this.WebService.deletemenu(this.profileId).flatMap(profile => {
      this.items = [];
      return Observable.forkJoin([
        Observable.of(profile),
        this.WebService.getprofilelist()
      ]);
    });
    obs.subscribe(
      (result) => {
        var interests = result[0];
        var selections = result[1];
        console.log(interests);
        for (var i = (selections.length - 1); i >= 0; i--) {
          this.items.push({ 'id': selections[i]._id, 'name': selections[i].profile.name, 'cost': selections[i].profile.cost, 'info': selections[i].profile.info, 'video': selections[i].profile.video, 'categoryid': selections[i].profile.categoryid })
        }
        
        // this.itemResource = new DataTableResource(this.items);
        // this.itemResource.count().then(count => this.itemCount = count);
        this.reloadItems({ offset: 0, limit: 5 });
        alert("record is deleted")
		location.reload();
      }
    );
  }

  EditClicked(event) {
    debugger;
    // this.updatebtn = true;
    // this.addbtn = false;
    this.profileId = event.id;

    this.WebService.getProfile(this.profileId).subscribe(profiles => {
      debugger;
      this.radio = profiles.profile.radio;
      this.name = profiles.profile.name;
      this.cost = profiles.profile.cost;
      this.info = profiles.profile.info;
      this.categorytype = profiles.profile.categoryid;

      this.uploader.uploadAll();
      var video = profiles.profile.video;
    });
	
  }


  updateprofile() {
    
    this.update_profile = true;
    var name = this.name;
    var cost = this.cost;
    var info = this.info;
    var video = this.uploader.queue[0].file.name;
    var categoryid = this.categorytype;
    this.WebService.updateprofile(this.profileId, this.radio, name, cost, info, video, categoryid).subscribe(
      (result) => {
        console.log(result);
      })
      alert("record is updated successfully");
      this.profileId="";
	  location.reload();
  }
  files : FileList; 
  getFiles(event){ 
    
      this.files = event.target.files; 
  } 
  logForm(event) { 
    
       console.log(this.files); 
  } 

 Cancle(){
   
 }
  
}


