import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'twitter-clone-ws-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  public onCloseModal(): void {
    this.closeModal.emit();
  }
}
