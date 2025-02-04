import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { digitSum, getProperties, isPerfect, isPrime } from "./utils";

const app: Express = express();
const PORT = process.env.PORT || 2121;

app.use(cors());

async function getFunFact(n: number): Promise<string> {
  try {
    const response = await axios.get(`http://numbersapi.com/${n}/math`);
    return response.data;
  } catch (error) {
    console.log(error);
    return "No fun fact available.";
  }
}

app.get(
  "/api/classify-number",
  async (req: Request, res: Response): Promise<void> => {
    const rawNumber = req.query.number as string;

    // Convert raw input to a number
    const number = Number(rawNumber);

    // Check if the conversion yields a number,
    // ensure it is an integer,
    // and that the original string does not contain a decimal point or exponential notation.
    if (
      isNaN(number) ||
      !Number.isInteger(number) ||
      rawNumber.includes(".") ||
      rawNumber.toLowerCase().includes("e")
    ) {
      res.status(400).json({
        number: "alphabet",
        error: true,
      });
      return;
    }

    try {
      const funFact = await getFunFact(number);
      const result = {
        number: number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties: getProperties(number),
        digit_sum: digitSum(number),
        fun_fact: funFact,
      };

      res.json(result);
    } catch (error) {
      res.status(400).json({
        number: "alphabet",
        error: true,
      });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

export default app;
