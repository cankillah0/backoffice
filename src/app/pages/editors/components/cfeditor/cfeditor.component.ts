import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './../../../ui/components/modals/default-modal/default-modal.component';
import { NoticeModal } from './../../../ui/components/modals/notice-modal/notice-modal.component';

@Component({
  selector: 'cfeditor-component',
  templateUrl: './cfeditor.html',
  styleUrls: ['./cfeditor.scss']
})



export class Cfeditor {

  public cfeditorContent:string = '<p>Hello CFEditor</p>';
  private url;

  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit(){}

  ngOnDestroy(){}

  onLinkClick(url : string){
    const activeModal = this.modalService.open(NoticeModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Notice';
    activeModal.componentInstance.modalContent = `This link will redirect you to anonymcasino, which is prohibited in some countries, thus may be blocked. You can access it via proxy service or VPN though.`;
    activeModal.componentInstance.closeEmitter.subscribe(this.onModalContinueClosed.bind(this));
    this.url = url;
  }

  onModalContinueClosed(){
    window.open(this.url, '_blank', 'location=yes,height=750,width=1200,scrollbars=yes,status=yes');
  }
}
