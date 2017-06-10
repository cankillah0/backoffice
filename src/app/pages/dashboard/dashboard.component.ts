import {Component} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SmartTables} from "../tables/components/smartTables/smartTables.component";
import {SessionService} from "../../services/sessionService";

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
  providers: [SessionService]
})
export class Dashboard {

  constructor(private sessionService : SessionService) {
    this.sessionService.getSessions().then(this.onSessionsReceived.bind(this));
  }

  onSessionsReceived(data){
    var d = data.map(this.parseDates);
    debugger;
    this.source.load(data.map(this.parseDates));
  }

  parseDates(object){
    object.date     = new Date(object.date).toLocaleString();
    object.lastDate = new Date(object.lastDate).toLocaleString();
    return object;
  }

  query: string = '';

  settings = {
    add: {
      //addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      //createButtonContent: '<i class="ion-checkmark"></i>',
      //cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      //editButtonContent: '<i class="ion-edit"></i>',
      //saveButtonContent: '<i class="ion-checkmark"></i>',
      //cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      //deleteButtonContent: '<i class="ion-trash-a"></i>',
      //confirmDelete: true
    },
    hideSubHeader : true,
    columns: {
      sessionId: {
        title: 'Session ID',
        type: 'string'
      },
      type: {
        title: 'Method type',
        type: 'string'
      },
      date: {
        title: 'Date',
        type: 'date'
      },
      lastDate:{
        title: 'Last action',
        type: 'date'
      },
      balance: {
        title: 'Start balance',
        type: 'number'
      },
      curBalance :{
        title: 'Current balance',
        type: 'number'
      },
      spinsCount :{
        title: 'Spins count',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
}
