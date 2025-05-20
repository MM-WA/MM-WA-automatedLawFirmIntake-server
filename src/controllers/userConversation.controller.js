import asynHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";
import sendEmail from "../utils/mailConfig.js";
import sendRequestToGPT from "../utils/chatGptConfig.js";



const handleConversation = asynHandler(async (req, res) => {
  try {
    const incomingMessages = req.body 
    const response = await sendRequestToGPT(incomingMessages)

    if(!response) {
      throw new ApiError(500, "Internal server error.")
    }

    res.status(200).json(new ApiResponse(200, response))
  } catch (error) {
    console.log(error)
    throw new ApiError(500, "Internal server error.")
  }
});

const sendMail = asynHandler(async (req, res) => {
  try {
    const infoObject = req.body
    const mailResponse = await sendEmail(infoObject)

    if(!mailResponse) {
      throw new ApiError(500, "Something went wrong while send eamil.")
    }

    res.status(200).json(new ApiResponse(200, "Email sent successfully", mailResponse.response))
  } catch (error) {
    throw new ApiError(500, "Something went wrong while send eamil.")
  }
});



export {
  handleConversation,
  sendMail
};
