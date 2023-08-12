import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

const quizListsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET")
      return res.status(405).json({ message: "Only GET requests allowed" });
    let { size } = req.query as { size: string };

    let numberSize = +size;
    if (isNaN(numberSize)) numberSize = 5;
    const data = fs.readFileSync("public/mock-data/quizzes/quiz-lists.json", {
      encoding: "utf-8",
    });
    const quizLists = JSON.parse(data);
    const sliceData = quizLists.slice(0, numberSize);
    return res.status(200).json(sliceData);
  } catch (e) {
    throw e;
  }
};

export default quizListsHandler;
