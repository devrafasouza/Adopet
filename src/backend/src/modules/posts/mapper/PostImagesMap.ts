import { instanceToPlain } from 'class-transformer';

import { IPostImagesResponseDTO } from '../dtos/IPostImagesResponseDTO';
import { PostImages } from '../infra/typeorm/entities/PostImages';

class PostImagesMap {
  static toDTO({
    id,
    image_name,
    image_url,
  }: PostImages): IPostImagesResponseDTO {
    const postImages = instanceToPlain({
      id,
      image_name,
      image_url,
    });

    return postImages;
  }
}

export { PostImagesMap };
