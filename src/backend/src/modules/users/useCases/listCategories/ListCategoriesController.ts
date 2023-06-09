import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoriesController = container.resolve(ListCategoriesUseCase);

    const categories = await listCategoriesController.execute();

    return response.status(201).json(categories);
  }
}

export { ListCategoriesController };
