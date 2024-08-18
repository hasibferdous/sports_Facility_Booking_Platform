import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";

//create new facility
const createFacilityIntoDB = async (payload: TFacility) => {
  const { name, location } = payload;

  //check if the facility is already exist
  const isFacilityExist = await Facility.findOne({ name, location });
  if (isFacilityExist) {
    throw new AppError(httpStatus.CONFLICT, "This facility is already exist");
  }

  const result = await Facility.create(payload);

  return result;
};

//update facility
const updateFacilityIntoDB = async (id: string, payload: TFacility) => {
  //check if the facility is exist
  const isFacilityExist = await Facility.findById(id);
  if (!isFacilityExist) {
    throw new AppError(httpStatus.NOT_FOUND, "This facility is not exist");
  }

  const result = await Facility.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

//delete facility
const deleteFacilityIntoDB = async (id: string) => {
  //check if the facility is exist
  const isFacilityExist = await Facility.findById(id);
  if (!isFacilityExist) {
    throw new AppError(httpStatus.NOT_FOUND, "This facility is not exist");
  }

  const result = await Facility.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};

//retrieve all facilities
const getAllFacilitiesFromDB = async () => {
  const result = await Facility.find();

  return result;
};

export const FacilityServices = {
  createFacilityIntoDB,
  updateFacilityIntoDB,
  getAllFacilitiesFromDB,
  deleteFacilityIntoDB,
};
