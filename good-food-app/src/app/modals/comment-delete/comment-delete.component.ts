import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.css']
})
export class CommentDeleteComponent implements OnInit {

  inputForm = new FormGroup({
    content: new FormControl('', [Validators.required])
  });

  @Input() public comments!: Comments[];
  @Input() public idButton!:number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  private deleteCommentCallBack!:string;

  ngOnInit(): void {

    this.comments.forEach((comment, index) => {
      if(comment.comment_id == this.idButton)
      {
       // this.inputForm.get('content')!.setValue(comment.comment_id);
        //this.deleteCommentCallBack = this.inputForm.get('content')?.value;
      }
    });

  }

  closeModal() {
    this.activeModal.dismiss();
  }

  validateModal(){
    this.deleteCommentCallBack = this.inputForm.get('content')?.value;
    this.activeModal.close(this.deleteCommentCallBack);
  }
}
