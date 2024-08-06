export class BaseFilter {
  skip?: number;
  limit?: number;
  constructor(data?: Partial<BaseFilter>) {
    this.skip = Number(data?.skip || 0);
    this.limit = data?.limit ? Number(data?.limit) : data?.limit;
  }
}
