import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
//import { CFEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';
import { DefaultModal } from './../ui/components/modals/default-modal/default-modal.component';

import { routing }       from './editors.routing';
import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { Cfeditor } from './components/cfeditor/cfeditor.component';
import {UiModule} from "../ui/ui.module";
import {NoticeModal} from "../ui/components/modals/notice-modal/notice-modal.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    UiModule,
    //CFEditorModule,
    routing
  ],
  declarations: [
    Editors,
    Ckeditor,
    Cfeditor
  ],
  entryComponents: [DefaultModal, NoticeModal]
})
export class EditorsModule {
}
