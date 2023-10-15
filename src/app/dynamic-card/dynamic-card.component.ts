import { Component, Input } from '@angular/core';

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
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent {
  @Input() declare details: Plan;
}
