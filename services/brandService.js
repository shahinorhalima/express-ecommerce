import Brand from "../models/brandModel.js";
const createBrandService = async (data) => {
  const brand = await Brand.create(data);
  return brand;
};

const brandservices = {
  createBrandService,
};

export default brandservices;
