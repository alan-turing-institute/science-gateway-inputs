import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobInfo } from './jobInfo';
import { DashboardService } from './dashboard.service';
import { JobSummaryComponent } from './jobSummary.component';


@Component({
  selector: "dashboard",
  providers: [DashboardService],
  templateUrl: 'dashboard.component.html',
  styleUrls:['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  jobs: JobInfo [];
  errorMessage: string;
  progress: {value:number, units:string};

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
      localStorage.removeItem("job_id")
      localStorage.removeItem("template_id")
      this.jobs = []
      this.getJobsData()
  }

  getJobsData() {
    this.dashboardService.data
      .subscribe(allJobs => {
        allJobs.map(job => {
          if (job.status.toLowerCase() == "running") {
            this.dashboardService.getProgressInfo(job.id)
                            .subscribe(
                              progress => {
                                  job.progress =  progress
                                  this.jobs.push(job)
                              },
                              error => {
                                this.errorMessage = <any> error
                              });
          }
          else {
            job.progress = {value:0, units: "%", range_min:0, range_max:100}
            this.jobs.push(job)
          }
        })
      })
  }

  cancelJob(id){
    this.dashboardService.cancelJob(id).subscribe(
      message => {console.log("cancelled")},
      error => {this.errorMessage = <any> error}
    )
  }

  deleteJob(id){
    this.jobs = this.jobs.filter(item => item.id !== id);
    this.dashboardService.deleteJob(id).subscribe(
      message => {console.log("deleted")},
      error => {this.errorMessage = <any> error}
    )
  }
}
