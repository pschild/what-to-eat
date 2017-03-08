import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-inline-edit',
    templateUrl: './inline-edit.component.html',
    styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements OnInit {

    @Input() value: string;
    @Input() resetValueAfterSave: boolean = false;
    @Input() clearValueOnEdit: boolean = false;
    @Output() saveEvent: EventEmitter<string> = new EventEmitter();

    initialValue: string;
    editMode: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    handleLabelClicked() {
        this.initialValue = this.value;
        this.editMode = true;
        if (this.clearValueOnEdit) {
            this.value = '';
        }
    }

    handleAbortClicked() {
        this.value = this.initialValue;
        this.editMode = false;
    }

    handleSaveClicked() {
        this.saveEvent.emit(this.value);
        this.editMode = false;
        if (this.resetValueAfterSave) {
            this.value = this.initialValue;
        }
    }

}
