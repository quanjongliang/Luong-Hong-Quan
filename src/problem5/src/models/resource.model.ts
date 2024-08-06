import { DataTypes, Sequelize } from "sequelize";
import { BaseModel } from "./base.model";
export const RESOURCE_TABLE_NAME = "Resources";
export class Resource extends BaseModel {
  declare name: string;
}

export const ResourceModel = (sequelize: Sequelize) => {
  const model = Resource.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: RESOURCE_TABLE_NAME,
      timestamps: true,
    }
  );
  return model;
};
