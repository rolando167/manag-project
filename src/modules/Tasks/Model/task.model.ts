export class Task {
    id: number;
    title: string;
    description: string;
    created_at: string;
    created_by: number;
    status: 'OPEN' | 'DONE';
}