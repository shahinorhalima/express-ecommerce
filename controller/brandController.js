import brandservices from "../services/brandService.js";

const createbrandController = async (req, res) => {
  console.log(`api hit brand create`);
  try {
    await brandservices.createBrandService({
      brandName: req.body.brandName,
      brandLogo: req.file ? req.file.path : "",
    });
    res.status(201).json({
      status: "success",
      message: "brand created successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const brandControllers = {
  createbrandController,
};

export default brandControllers;
