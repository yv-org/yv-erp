/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'superAdmin',
        title: 'Super Admin Console',
        type: 'basic',
        icon: 'heroicons_outline:server-stack',
        link: '/super-admin',
    },
    {
        id: 'microservices',
        title: 'Microservices',
        type: 'group',
        icon: 'heroicons_outline:squares-2x2',
        children: [
            {
                id: 'gateway',
                title: 'Gateway',
                type: 'basic',
                icon: 'heroicons_outline:chip',
                link: '/microservices/gateway',
            },
            {
                id: 'userService',
                title: 'User Service',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/microservices/user-service',
            },
            {
                id: 'reporting',
                title: 'Reporting & Analytics',
                type: 'basic',
                icon: 'heroicons_outline:sparkles',
                link: '/microservices/reporting-service',
            },
        ],
    },
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'superAdmin',
        title: 'Super Admin Console',
        type: 'basic',
        icon: 'heroicons_outline:server-stack',
    },
    {
        id: 'microservices',
        title: 'Microservices',
        type: 'group',
        icon: 'heroicons_outline:squares-2x2',
    },
];

export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'superAdmin',
        title: 'Super Admin Console',
        type: 'basic',
        icon: 'heroicons_outline:server-stack',
    },
    {
        id: 'microservices',
        title: 'Microservices',
        type: 'group',
        icon: 'heroicons_outline:squares-2x2',
    },
];

export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'superAdmin',
        title: 'Super Admin Console',
        type: 'basic',
        icon: 'heroicons_outline:server-stack',
    },
    {
        id: 'microservices',
        title: 'Microservices',
        type: 'group',
        icon: 'heroicons_outline:squares-2x2',
    },
];
