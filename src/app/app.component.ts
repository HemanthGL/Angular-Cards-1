import { Component } from '@angular/core';


interface Plan{
  categ: string,
  price: number,
  userCount: string;
  storageAmt: string;
  publicProjects: boolean;
  communityAccess: boolean;
  privateProjects: boolean;
  phoneSupport: boolean;
  isSubDomain: boolean;
  subDomainAmt: string;
  monthlyStatRep: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap-Demo-Proj';

  cards: Array<Plan>= [
    {
      categ: "FREE" ,
      price: 0,
      userCount : 'Single User',
      storageAmt : '5GB Storage',
      publicProjects: true,
      communityAccess: false,
      privateProjects: false,
      phoneSupport: false,
      isSubDomain: false,
      // try if not mentioned working or no
      subDomainAmt: ' ',
      monthlyStatRep : false 
    },
    {
      categ: "PLUS",
      price: 9,
      userCount: '5 Users',
      storageAmt : '50GB Storage',
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      isSubDomain: true,
      subDomainAmt: 'Free Subdomain',
      monthlyStatRep: false
    },
    {
      categ: "PRO",
      price: 49,
      userCount: 'Unlimited Users',
      storageAmt: '150GB Storage',
      publicProjects:true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      isSubDomain: true,
      subDomainAmt: 'Unlimited Free Subdomains',
      monthlyStatRep: true
    }
  ]

}
