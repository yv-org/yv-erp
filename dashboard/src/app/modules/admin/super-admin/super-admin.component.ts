import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FuseConfigService } from '@fuse/services/config';
import {
    MicroserviceInfo,
    MICROSERVICES,
} from 'app/modules/admin/microservices/microservices.data';

@Component({
    selector: 'super-admin-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule, MatButtonModule],
    templateUrl: './super-admin.component.html',
    styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminDashboardComponent implements OnInit {
    microservices: MicroserviceInfo[] = MICROSERVICES;

    constructor(private _fuseConfigService: FuseConfigService) {}

    get averageUptime(): string {
        if (!this.microservices.length) {
            return '0%';
        }

        const total = this.microservices.reduce((sum, service) => {
            const numeric = parseFloat(service.uptime.replace('%', '')) || 0;
            return sum + numeric;
        }, 0);

        return `${(total / this.microservices.length).toFixed(2)}%`;
    }

    get degradedServices(): number {
        return this.microservices.filter(
            (service) => service.status !== 'Stable'
        ).length;
    }

    ngOnInit(): void {
        this._fuseConfigService.config = {
            layout: 'futuristic',
            theme: 'theme-brand',
            scheme: 'auto',
        };
    }
}
