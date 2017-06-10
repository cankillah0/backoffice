import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./notice-modal.component.scss')],
  templateUrl: './notice-modal.component.html'
})

export class NoticeModal implements OnInit {
  @Output() closeEmitter : EventEmitter<any> = new EventEmitter();
  modalHeader: string;
  modalContent: string = `Lorem ipsum dolor sit amet,
   consectetuer adipiscing elit, sed diam nonummy
   nibh euismod tincidunt ut laoreet dolore magna aliquam
   erat volutpat. Ut wisi enim ad minim veniam, quis
   nostrud exerci tation ullamcorper suscipit lobortis
   nisl ut aliquip ex ea commodo consequat.`;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  closeContinueModal(){
    this.activeModal.close();
    this.closeEmitter.emit();
  }
}
