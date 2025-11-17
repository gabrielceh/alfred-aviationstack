import { SearchHistoryRepository } from "../../domain/repositories";

export class AddToSearchHistoryUsecase {
  private repository: SearchHistoryRepository;

  constructor(repository: SearchHistoryRepository) {
    this.repository = repository;
  }

  async execute(item: string): Promise<void> {
    return await this.repository.addToHistory(item);
  }
}