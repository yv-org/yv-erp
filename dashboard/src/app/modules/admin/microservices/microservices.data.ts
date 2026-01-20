export type MicroserviceStatus = 'Stable' | 'Degraded' | 'Issue';

export interface MicroserviceInfo {
    id: string;
    name: string;
    description: string;
    owner: string;
    status: MicroserviceStatus;
    version: string;
    uptime: string;
    lastDeploy: string;
    gradient: string;
    stats: Array<{ label: string; value: string }>;
    endpoints: Array<{ label: string; path: string }>;
}

export const MICROSERVICES: MicroserviceInfo[] = [
    {
        id: 'gateway',
        name: 'Gateway Service',
        description:
            'API gateway, rate limiting, and routing layer that fronts every connected microservice.',
        owner: 'Platform Ops',
        status: 'Stable',
        version: '2.4.1',
        uptime: '99.98%',
        lastDeploy: '2 minutes ago',
        gradient: 'linear-gradient(135deg,#6366f1,#ec4899)',
        stats: [
            { label: 'Average latency', value: '72 ms' },
            { label: 'Requests / min', value: '4,220' },
            { label: 'Error ratio', value: '0.2%' },
        ],
        endpoints: [
            { label: 'Health', path: '/management/health' },
            { label: 'Routes', path: '/api/routes' },
            { label: 'Authentication', path: '/oauth2/authorize' },
        ],
    },
    {
        id: 'user-service',
        name: 'User Identity Service',
        description:
            'Handles user profiles, permissions, and session management for all client apps.',
        owner: 'Identity Team',
        status: 'Stable',
        version: '5.7.0',
        uptime: '99.92%',
        lastDeploy: '35 minutes ago',
        gradient: 'linear-gradient(135deg,#0ea5e9,#22d3ee)',
        stats: [
            { label: 'Active sessions', value: '6,200' },
            { label: 'Sign-in success', value: '99.1%' },
            { label: 'Account creations', value: '182 / day' },
        ],
        endpoints: [
            { label: 'Auth', path: '/api/auth' },
            { label: 'Profile', path: '/api/common/user' },
            { label: 'Tokens', path: '/api/auth/sign-in-with-token' },
        ],
    },
    {
        id: 'reporting-service',
        name: 'Analytics & Reporting',
        description:
            'Aggregates metrics, exports reports, and feeds dashboards via scheduled jobs.',
        owner: 'Insights Squad',
        status: 'Degraded',
        version: '3.2.4',
        uptime: '97.45%',
        lastDeploy: '3 hours ago',
        gradient: 'linear-gradient(135deg,#22d3ee,#4ade80)',
        stats: [
            { label: 'Batch jobs', value: '5 running' },
            { label: 'Report freshness', value: '12 minutes' },
            { label: 'Failed exports', value: '1 today' },
        ],
        endpoints: [
            { label: 'Daily exports', path: '/api/reports/daily' },
            { label: 'Insights API', path: '/api/insights' },
            { label: 'Metrics stream', path: '/services/metrics-stream' },
        ],
    },
];
