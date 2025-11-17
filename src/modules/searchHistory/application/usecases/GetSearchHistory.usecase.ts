import { SearchHistoryRepository } from "../../domain/repositories";

export class GetSearchHistoryUsecase {
  private repository: SearchHistoryRepository;

  constructor(repository: SearchHistoryRepository) {
    this.repository = repository;
  }

  async execute(): Promise<string[]> {
    return await this.repository.getHistory();
  }
}