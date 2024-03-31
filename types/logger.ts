export interface Ilogger {
    eventType: 'event' | 'error';
    eventName: string;
    content: string;
}