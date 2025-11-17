export interface SearchHistoryRepository {
  getHistory(): Promise<string[]>;
  addToHistory(item: string): Promise<void>;
  deleteFromHistory(item: string): Promise<void>;
}