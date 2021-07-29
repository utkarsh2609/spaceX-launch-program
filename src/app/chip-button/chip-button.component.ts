import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-chip-button',
    templateUrl: './chip-button.component.html',
    styleUrls: ['./chip-button.component.scss']
})
export class ChipButtonComponent implements OnInit {
    @Input() chips: any = [];
    @Input() initialChips: any = [];
    @Output() chipSelected = new EventEmitter<any>();

    chipCollection: Map<any, boolean> = new Map<any, boolean>();

    ngOnInit(): void {
        this.resetChips();

        const selected = this.getSelected();
        this.chipSelected.emit(selected);
    }

    private resetChips() {
        for (const chip of this.chips) {
            this.chipCollection.set(chip, false);
        }
    }

    isSelected(chip: any) {
        return this.chipCollection.get(chip);
    }

    onClick($event: Event, chip: any) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selectChip(chip);

        const selected = this.getSelected();
        this.chipSelected.emit(selected);
    }

    selectChip(chip: any) {
        if (this.chipCollection.get(chip)) {
            this.chipCollection.set(chip, false);
        } else {
            this.resetChips();
            this.chipCollection.set(chip, true);
        }
    }

    getSelected() {
        const selected: any[] = [];

        Array.from(this.chipCollection.entries(), (v: [any, boolean]) => {
            if (v['1']) {
                selected.push(v['0']);
            }
        });

        return selected;
    }
}
