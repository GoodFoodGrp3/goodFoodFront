import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentModalComponent } from '../modals/comment-modal/comment-modal.component';
import { Comments } from '../models/comments';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments!:Comments[];
  idButton!: number;

  myArray!: Array<string>;
  refreshPage = false;

  //commentForm: FormGroup;

  constructor( private commentsService:CommentsService,
              private commentService: CommentsService, 
              private formBuilder: FormBuilder,
              private modalService: NgbModal ) { }

  ngOnInit(): void {

    this.getComments();
    //this.initCommentForm();
  }

  refresh(){
    this.ngOnInit();
    this.refreshPage = false;
  }


  openModal(id:number) {
    const modalRef = this.modalService.open(CommentModalComponent,
      {
        backdrop: false,
        //scrollable: true,
        //windowClass: 'myCustomModalClass',
        centered : true,
        keyboard: false,

      });

    modalRef.componentInstance.idButton = id;
    modalRef.componentInstance.comments = this.comments;

    modalRef.result.then((commentCallBack) => {
      if (commentCallBack != null)
      {
        //this.commentCallBack = commentCallBack;
        this.myArray = commentCallBack.split(/([0-9]+)/).filter(Boolean);
        this.updateCommentById(Number(this.myArray[1]),this.myArray[0]);
      }
    });
}

  /* openDeleteModal(commentId:number) {
    const modalRef = this.modalService.open(CommentDeleteComponent,
      {
        backdrop: false,
        //scrollable: true,
        //windowClass: 'myCustomModalClass',
        centered : true,
        keyboard: false,

      });

    modalRef.componentInstance.idButton = commentId;
    modalRef.componentInstance.comments = this.comments;

    modalRef.result.then((deleteCommentCallBack) => {
      if (deleteCommentCallBack != null)
      {
        //this.commentCallBack = commentCallBack;
        this.deleteComment(commentId);
      }
    });
  } */
  /**
   *
   * Iniatilisation Formulaire
   */
/*  initCommentForm(){
    this.commentForm = this.formBuilder.group({
      description: ['',Validators.required]
    })
  }*/

  /**
   *
   * Recuperation des categories
   */
  getComments(){
    this.commentsService.getAllComments().subscribe(
      reponse => {
        this.comments = reponse;
      });
  }

  /**
   *
   * Mise à jour commentaire
   */
  updateCommentById(id:number,comment:string){
    this.commentService.updateComment(id,comment).subscribe({
      next: data => {
        window.location.reload();
        //spinner ?
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });;
  }

  /**
   *
   * Suppression d'un commentaire
   */
  deleteComment(idComment:number) {
    this.commentsService.deleteComment(idComment).subscribe({
      next: data => {
        window.location.reload();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }


}
