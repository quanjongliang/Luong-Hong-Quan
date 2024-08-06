import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { ListResourceDto, UpdateResourceDto } from "../dtos";
import db from "../models";
import baseController from "./base.controller";

async function create(req: Request, res: Response) {
  const { body } = req;
  const resource = await db.resources.create(body);
  return baseController.responseData(res, resource);
}
async function getAll(req: Request, res: Response) {
  const dto = new ListResourceDto(req.query);
  const { rows: resources, count } = await db.resources.findAndCountAll({
    limit: dto?.limit,
    offset: dto?.skip,
    where: {
      ...(dto?.name && { name: { [Op.substring]: dto.name } }),
    },
    order: [["id", "DESC"]],
  });
  return baseController.responseData(res, resources, {
    total: count,
    skip: dto?.skip,
    limit: dto?.limit,
  });
}

async function getById(req: Request, res: Response, next: NextFunction) {
  const id = req.params?.id;
  try {
    const resource = await db.resources.findOne({
      where: { id },
    });
    if (!resource) {
      return baseController.throwError(`Resource id ${id} not found!`, 404);
    }
    return baseController.responseData(res, resource);
  } catch (error) {
    next(error);
  }
}

async function updateById(req: Request, res: Response, next: NextFunction) {
  const id = req.params?.id;
  try {
    const [affectedCount] = await db.resources.update(
      new UpdateResourceDto(req.body),
      {
        where: { id },
      }
    );
    if (!affectedCount) {
      return baseController.throwError(`Resource id ${id} not found!`, 404);
    }
    return getById(req, res, next);
  } catch (error) {
    next(error);
  }
}

async function deleteById(req: Request, res: Response, next: NextFunction) {
  const id = req.params?.id;
  try {
    const affectedCount = await db.resources.destroy({
      where: { id },
    });
    if (!affectedCount) {
      return baseController.throwError(`Resource id ${id} not found!`, 404);
    }
    return baseController.responseData(res, {
      message: "Delete successfully.",
    });
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
