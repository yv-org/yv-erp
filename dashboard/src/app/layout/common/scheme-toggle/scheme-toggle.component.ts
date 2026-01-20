import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseConfigService, Scheme } from '@fuse/services/config';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'scheme-toggle',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatTooltipModule],
    templateUrl: './scheme-toggle.component.html',
    styleUrls: ['./scheme-toggle.component.scss'],
})
export class SchemeToggleComponent implements OnInit, OnDestroy {
    scheme: Scheme = 'auto';
    private _unsubscribeAll: Subject<void> = new Subject<void>();

    constructor(private _fuseConfigService: FuseConfigService) {}

    ngOnInit(): void {
        this._fuseConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.scheme = config?.scheme ?? 'auto';
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    setScheme(scheme: Scheme): void {
        this._fuseConfigService.config = { scheme };
    }
}
