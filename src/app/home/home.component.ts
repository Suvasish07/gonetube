import { Component, OnInit } from '@angular/core';
import {DownloadService} from '../service/download.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
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
  playurllink: string;
  trustedDashboardUrl: SafeResourceUrl;
  constructor(private downloadservice: DownloadService, private sanitizer: DomSanitizer) { 
    this.trustedDashboardUrl = '';
  }

  ngOnInit() {
  }

  searchVideos() {
    $('.loader').show();
    $('.loader1').show();
    $('.loader2').show();
    document.getElementById("videolist").style.display = "none";
 
    this.downloadservice.searchVideosService(this.videoUrl).subscribe((data) => {
 
     this.videoUrlDetails = data;
     if (this.videoUrlDetails.status === true) {
      this.videoDetailsArr=this.videoUrlDetails.data
      $('.loader').hide();
      $('.loader1').hide();
      $('.loader2').hide();      document.getElementById("videolist").style.display = "block";
      $('html,body').animate({
       scrollTop: $('#videolist').offset().top},
       'slow');
     } else {
      
     }
    });
  }
  clearURL() {
    this.videoUrl = '';
 
  }

  playVideo(url){
    let urlvalue = url;
    let id = urlvalue.split('=');
    this.playurllink = 'https://www.youtube.com/embed/' + id[1];
    this.trustedDashboardUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.playurllink);
  
  }

}
