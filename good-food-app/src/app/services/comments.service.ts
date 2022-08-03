 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments, UpdateComment } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments!:Comments[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les commentaires
   */
   getAllComments(): Observable<Comments[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Comments[]>(environment.apiUrl + '/comments',{'headers':headers});
  }
 

  /**
   *
   * Modification d'un commentaire
   */
   updateComment(id : number,content : string){
    const body=JSON.stringify(content).replace(/\\"/g, '');
    const headers = { 'content-type': 'application/json','Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.put<UpdateComment>(environment.apiUrl + '/comments/' + id +'?newContent=' + content,body,{'headers':headers} );
  } 

  /**
   *
   * Suppression d'un commentaire
   */
   deleteComment(id:number){
    const headers = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};
    return this.httpClient.delete<any>(environment.apiUrl + '/comments/' + id,{'headers':headers});
  }
} 

