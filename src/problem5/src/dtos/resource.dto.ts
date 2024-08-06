import { BaseFilter } from "./base.dto";

export class ListResourceDto extends BaseFilter {
  name?: string;
  constructor(data?: Partial<ListResourceDto>) {
    super(data);
    this.name = data?.name;
  }
}

export class UpdateResourceDto {
  name?: string;
  constructor(data?: Partial<UpdateResourceDto>) {
    this.name = data?.name;
  }
}
