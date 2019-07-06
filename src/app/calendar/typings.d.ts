declare interface SelectedDay {
  day: string;
  month: string;
  year: string;
  event?: boolean;
}

declare interface CalendarEvent {
  id: number;
  date: string;
  text: string;
}

declare interface StoredEvents {
  result: CalendarEvent[];
  ok: boolean;
}
