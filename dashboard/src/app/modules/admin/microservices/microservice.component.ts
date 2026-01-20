import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FuseConfigService } from '@fuse/services/config';
import {
    MicroserviceInfo,
    MICROSERVICES,
} from 'app/modules/admin/microservices/microservices.data';

@Component({
    selector: 'microservice-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule, MatButtonModule],
    templateUrl: './microservice.component.html',
    styleUrls: ['./microservice.component.scss'],
})
export class MicroserviceDashboardComponent implements OnInit {
    microservice?: MicroserviceInfo;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _fuseConfigService: FuseConfigService
    ) {}

    ngOnInit(): void {
        this._fuseConfigService.config = {
            layout: 'classic',
            theme: 'theme-teal',
            scheme: 'auto',
        };

        const serviceId = this._activatedRoute.snapshot.paramMap.get(
            'serviceId'
        );

        if (!serviceId) {
            this._router.navigate(['/super-admin']);
            return;
        }

        this.microservice = MICROSERVICES.find(
            (service) => service.id === serviceId
        );
    }
}
