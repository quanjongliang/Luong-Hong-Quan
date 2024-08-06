import { Model } from "sequelize";

export class BaseModel extends Model {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
