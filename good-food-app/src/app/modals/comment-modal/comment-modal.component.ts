import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Comments } from 'src/app/models/comments';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],
})
export class CommentModalComponent implements OnInit {

  textareaForm = new FormGroup({
    content: new FormControl('', [Validators.required])
  });

  @Input() public comments!: Comments[];
  @Input() public idButton!:number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  private idcomment!:number;

  constructor(public activeModal: NgbActiveModal) {


  }

  private commentCallBack!:string;

  ngOnInit(): void {

    this.comments.forEach((comment, index) => {
      if(comment.comment_id == this.idButton)
      {
        this.idcomment = comment.comment_id;
        this.textareaForm.get('content')!.setValue(comment.content);
        //this.commentCallBack = this.textareaForm.get('content')?.value + comment.comment_id;
      }
    });
  }


  closeModal() {
    this.activeModal.dismiss();
    //window.location.reload();
  }

  validateModal(){

    this.commentCallBack = this.textareaForm.get('content')?.value + this.idcomment ;
    this.activeModal.close(this.commentCallBack);
  }

}
