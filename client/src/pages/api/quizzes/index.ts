import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

const quizListsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Only GET requests allowed" });

  const { size = 5 } = req.query as { size: string };
  const data = fs.readFileSync("public/mock-data/quizzes/quiz-lists.json", {
    encoding: "utf-8",
  });
  const quizLists = JSON.parse(data);
  const sliceData = quizLists.slice(0, size);
  return res.status(200).json(sliceData);
};

export default quizListsHandler;
