import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  private modalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }
  
  openModal() {
    this.modalState.next(true);
  }

  closeModal() {
    this.modalState.next(false);
  }

  getModalState(): Observable<boolean> {
    return this.modalState.asObservable();
  }
}