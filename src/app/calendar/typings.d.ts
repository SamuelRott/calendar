declare interface SelectedDay {
  day: string;
  month: string;
  year: string;
}

declare interface Event {
  id: number;
  date: string;
  text: string;
}

declare interface StoredEvents {
  result: Event[];
  ok: boolean;
}
