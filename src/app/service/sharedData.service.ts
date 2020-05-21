import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {
    public dataContact: any;

    setDataContact(dataContact: any){
        this.dataContact = dataContact;
    }

}