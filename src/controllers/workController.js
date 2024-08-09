const asyncHandler = require("express-async-handler");
const WorkModel = require("../models/workModel");

const addWork = asyncHandler(async (req, res) => {
  const { id_user, name, description, date_work } = req.body;
  const newWork = new WorkModel({
    id_user,
    name,
    description,
    date_work,
  });
  const saveNewWork = await newWork.save()
  if(saveNewWork){
    res.status(200).json({
        message: "thêm thành công",
        data: newWork
    })
  }
});

const getWorkByUserId = asyncHandler(async(req,res)=>{
    const { id_user } = req.query;
    try {
        const work = await WorkModel.find({ id_user });
        res.status(200).json(work);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
})

const updateSuccess = asyncHandler(async (req, res) => {
  const { id_work } = req.params;
  const { success} = req.body;
  const result = await WorkModel.findByIdAndUpdate(id_work, {
    success,
  });
  if (result) {
    res.status(200).json({
      message: "sửa thành công",
    });
  }
});

const deleteWork = asyncHandler(async (req, res) => {
  const { id_work } = req.params;
  try {
    const result = await WorkModel.findByIdAndDelete(id_work);
    if (result) {
      res.status(200).json({
        message: "xóa thành công",
      });
    } else {
      res.status(404).json({
        message: "Không tìm thấy công việc",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Có lỗi xảy ra",
      error,
    });
  }
});

module.exports={addWork,getWorkByUserId, updateSuccess, deleteWork}