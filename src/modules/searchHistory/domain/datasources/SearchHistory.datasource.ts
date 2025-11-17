export interface SearchHistoryDatasource {
  getHistory(): Promise<string[]>;
  addToHistory(item: string): Promise<void>;
  deleteFromHistory(item: string): Promise<void>;
}