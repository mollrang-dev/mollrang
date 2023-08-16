import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

const quizAnswerSubmitApi = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    if (req.method !== "POST")
      return res.status(405).json({ message: "Only POST requests allowed" });
    const { quizId } = req.query as { quizId: string };
    return res.status(200).json({});
  } catch (e) {
    throw e;
  }
};

export default quizAnswerSubmitApi;
