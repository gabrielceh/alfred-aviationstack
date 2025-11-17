import { SearchHistoryDatasource } from "../../domain/datasources";
import { SearchHistoryRepository } from "../../domain/repositories";

export class SearchHistoryRepositoryImpl implements SearchHistoryRepository {
  private datasource: SearchHistoryDatasource;

  constructor(datasource: SearchHistoryDatasource) {
    this.datasource = datasource;
  }

  async getHistory(): Promise<string[]> {
    return await this.datasource.getHistory();
  }

  async addToHistory(item: string): Promise<void> {
    return await this.datasource.addToHistory(item);
  }

  async deleteFromHistory(item: string): Promise<void> {
    return await this.datasource.deleteFromHistory(item);
  }
}