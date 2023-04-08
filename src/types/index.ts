import { DateTime } from 'luxon';

export interface AgendaItem {
    item: string;
    dt: DateTime;
}