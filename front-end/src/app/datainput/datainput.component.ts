import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Router} from "@angular/router";
import appconfig from '../appconfig/appconfig';

@Component({
  selector: 'app-datainput',
  templateUrl: './datainput.component.html',
  styleUrls: ['./datainput.component.css']
})
export class DatainputComponent implements OnInit {
	data;
		 NTRP;
		 NFUE;
		 NFFE;
		 NBUE;
		 NBFE; 

		 OFUE; 
		 OFFE;
		 OBUE;
		 OBFE;

		 DF;
		 FS_pct;
		 FSW_pct;

		 FW;
		 BW;

		 PNW;
		 PNL;
		 PNLN;
		 PNLW;

		 OW;
		 OFE;
		 OUE; 
                
  constructor(private http: Http,private router: Router) { 
	  this.data =[];

  }

  ngOnInit() {
	   if(!localStorage.getItem('key')){
      this.router.navigate(['/login'], { fragment: 'top' });
    }
  }
  onSubmit(){
	  let link =appconfig.hosturl+'/calculate';
	  let body = {
		 NTRP:this.NTRP,
		 NFUE:this.NFUE,
		 NFFE:this.NFFE,
		 NBUE:this.NBUE,
		 NBFE:this.NBFE,
		 OFUE:this.OFUE,
		 OFFE:this.OFFE,
		 OBUE:this.OBUE,
		 OBFE:this.OBFE,
		 DF:this.DF,
		 FS_pct:this.FS_pct,
		 FSW_pct:this.FSW_pct,
		 FW:this.FW,
		 BW:this.BW,
		 PNW:this.PNW,
		 PNL:this.PNL,
		 PNLN:this.PNLN,
		 PNLW:this.PNLW,
		 OW:this.OW,
		 OFE:this.OFE,
		 OUE:this.OUE,
		 user_id:localStorage.getItem('key')
	  }
	  this.http.post(link , body)
	  .subscribe((res:any) => {
		  this.data =JSON.parse(res._body);
		  this.NTRP =null;
		  this.NFUE =null;
		  this.NFFE =null;
		  this.NBUE =null;
		  this.NBFE =null;
		  this.OFUE =null;
		  this.OFFE =null;
		  this.OBUE =null;
		  this.OBFE =null;
		  this.DF =null;
		  this.FS_pct =null;
		  this.FSW_pct =null;
		  this.FW =null;
		  this.BW =null;
		  this.PNW =null;
		  this.PNL =null;
		  this.PNLN =null;
		  this.PNLW =null;
		  this.OW =null;
		  this.OFE =null;
		  this.OUE =null;
    },(err)=>{
      console.log(err);
	  this.NTRP =null;
		  this.NFUE =null;
		  this.NFFE =null;
		  this.NBUE =null;
		  this.NBFE =null;
		  this.OFUE =null;
		  this.OFFE =null;
		  this.OBUE =null;
		  this.OBFE =null;
		  this.DF =null;
		  this.FS_pct =null;
		  this.FSW_pct =null;
		  this.FW =null;
		  this.BW =null;
		  this.PNW =null;
		  this.PNL =null;
		  this.PNLN =null;
		  this.PNLW =null;
		  this.OW =null;
		  this.OFE =null;
		  this.OUE =null;
    });
  }

}
