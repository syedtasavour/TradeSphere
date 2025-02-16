# TradeSphere 📊

**TradeSphere** is an investment and stock tracking platform that enables users to monitor real-time stock prices, manage their investment portfolios, and stay updated with market trends. Developed using the MERN stack (MongoDB, Express.js, React, and Node.js), TradeSphere provides a comprehensive experience for both beginner and experienced investors.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 Show Your Support
If you found this project helpful, give it a ⭐️!

## Features

- **Real-time Stock Data**: Fetch live stock prices and historical data from third-party APIs.
- **Portfolio Management**: Users can create, update, and manage their stock portfolios.
- **Watchlist**: Add favorite stocks to a watchlist for easy tracking.
- **User Authentication**: Secure login and registration with JWT authentication.
- **Responsive Design**: Optimized for all screen sizes and devices.
- **Market Analysis**: Detailed stock charts and analysis for informed investment decisions.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL database)
- **APIs**: Stock Market API (e.g., Alpha Vantage, IEX Cloud)
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Hosted on AWS, Heroku, or DigitalOcean

---

## Getting Started

### Prerequisites

Ensure that you have the following software installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

You will also need an API key from a stock data provider such as **Alpha Vantage** or **IEX Cloud**.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/syedtasavour/tradesphere.git
   cd tradesphere
   ```

2. Install the necessary dependencies:

   ```bash
   # Install server dependencies
   npm install

   # Install client dependencies
   cd client
   npm install
   ```

3. Set up the environment variables in a `.env` file.

---

## Environment Variables

In the root of the project, create a `.env` file and add the following variables:

```bash
# MongoDB
MONGO_URI=your_mongodb_connection_string

# JWT Secret Key
JWT_SECRET=your_secret_key

# Server Port
PORT=5000
```

---

## Usage

After setting up the environment variables, you can run the project locally.

1. Start the backend server:

   ```bash
   npm run server
   ```

2. Start the frontend React app:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use TradeSphere.

---


## Contributing

Contributions are welcome! To contribute to **TradeSphere**, follow these steps:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m 'Add new feature or fix'
   ```
4. Push the changes to your fork:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request with a description of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any questions or suggestions, feel free to reach out:

- **Email**: [TradeSphere@syedtasavour.me](mailto:TradeSphere@syedtasavour.me)
- **LinkedIn**: [linkedin.com/in/syedtasavour](https://linkedin.com/in/syedtasavour)

---

Feel free to contribute by forking the repository and submitting pull requests!

<div align="center">
  <sub>Built with passion (and a lot of coffee) by Syed Tasavour.</sub>
</div>

