import IPostImagesDTO from './IPostImagesDTO';

interface IPostDTO {
  id?: string | undefined;
  title?: string;
  description?: string;
  phone_number?: string;
  cep?: string;
  city?: string;
  district?: string;
  street?: string;
  house_number?: string;
  category_name?: string;
  images?: IPostImagesDTO[] | undefined;
}

export default IPostDTO;
