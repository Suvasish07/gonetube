import { Component, OnInit } from '@angular/core';
import {DownloadService} from '../service/download.service';
import Swal from 'sweetalert2';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoUrl: any;
  videoUrlDetails:any;
  videoDetailsArr:any=[];
  constructor(private downloadservice: DownloadService) { }

  ngOnInit() {
  }

  searchVideos() {
    // document.getElementById("loader").style.display = "block";
    // document.getElementById("videolist").style.display = "none";
 
    this.downloadservice.searchVideosService(this.videoUrl).subscribe((data) => {
 
     this.videoUrlDetails = data;
     if (this.videoUrlDetails.status === true) {
      this.videoDetailsArr=this.videoUrlDetails.data
      // document.getElementById("loader").style.display = "none";
      // document.getElementById("videolist").style.display = "block";
      $('html,body').animate({
       scrollTop: $(".videodiv").offset().top},
       'slow');
     } else {
      
     }
    });
  }
  clearURL() {
    this.videoUrl = '';
 
  }

}
