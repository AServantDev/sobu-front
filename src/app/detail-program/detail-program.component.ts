import { Component, OnInit } from '@angular/core';
import { ShredProgram } from '../model/shredProgram';
import { DataserviceService } from '../services/dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { BuildProgram } from '../model/buildProgram';

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styleUrls: ['./detail-program.component.css']
})
export class DetailProgramComponent implements OnInit {
  shred: ShredProgram;
  build: BuildProgram;

  constructor(private dataService: DataserviceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneShred();
    this.getOneBuild();
  }

  getOneShred(){
    const shredId = +this.route.snapshot.paramMap.get("shred");
    console.log(shredId);
     this.dataService.getShred(shredId).subscribe(shred => this.shred = shred );
  }
  getOneBuild(){
    const buildId = +this.route.snapshot.paramMap.get("shred");
    
     this.dataService.getBuild(buildId).subscribe(build => this.build = build );
  }
}
