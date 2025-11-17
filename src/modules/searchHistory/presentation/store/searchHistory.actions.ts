export interface SearchHistoryActions {
  setHasHydrated(value: boolean): void;
  addItem(item: string): void;
  deleteItems(item: string): void;
}