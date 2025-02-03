# Number Classifier API

This project is an API that takes an integer as input and returns interesting mathematical properties about it, along with a fun fact. The API calculates whether the number is prime, perfect, or an Armstrong number, provides the sum of its digits, and returns a fun fact obtained from the Numbers API.

## Features

- **Input Validation:**
  Validates that the provided input is a valid integer.

- **Mathematical Properties:**

  - **Prime Check:** Determines if the number is prime.
  - **Perfect Check:** Determines if the number is a perfect number.
  - **Armstrong Check:** Determines if the number is an Armstrong number.
  - **Digit Sum:** Calculates the sum of the digits of the number.
  - **Properties Array:** Returns one of the following based on the checks:
    - `["armstrong", "odd"]`
    - `["armstrong", "even"]`
    - `["odd"]`
    - `["even"]`

- **Fun Fact:**
  Retrieves a fun fact from the [Numbers API](http://numbersapi.com/#42) using the `math` category.

- **CORS Enabled:**
  Cross-Origin Resource Sharing is enabled, making the API accessible from any client.

- **JSON Responses:**
  All responses are formatted in JSON. In case of invalid input, the API returns an error JSON with a 400 status code.

## API Endpoint

**GET** `/api/classify-number?number=<number>`

### Successful Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

```json
{
  "number": "alphabet",
  "error": true
}
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/number-classifier-api.git
   cd number-classifier-api
   ```

2. **Install Dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up Environment (Optional):**

   If you need to specify a custom port, you can create a `.env` file in the project root:

   ```bash
   PORT=2121
   ```

## Running the API Locally

Start the server using:

```bash
npm run start
```

The API should be accessible at http://localhost:2121/api/classify-number.

## Technologies Used

- **Node.js & Express:** Server framework.
- **TypeScript:** For type safety.
- **Axios:** For making HTTP requests to the Numbers API.
- **CORS:** Middleware for handling cross-origin requests.
