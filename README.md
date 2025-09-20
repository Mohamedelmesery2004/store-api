# Store API

A RESTful API for an e-commerce store built with Node.js and Express. This API provides endpoints for managing products, orders, and users with authentication.

## Features

- **Product Management**: CRUD operations for products with filtering, sorting, and pagination


## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohamedelmesery2004/store-api.git
cd store-api
```

2. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## API Documentation

Once the server is running, you can access the API documentation at:
- API Base URL: `http://localhost:5000/api/v1`
- For detailed API documentation, import the Postman collection from `/docs/postman-collection.json`

## Available Endpoints


### Product Endpoints
- `GET /api/v1/products` - Get all products (with filtering, sorting, pagination)
- `GET /api/v1/products/:id` - Get single product
- `POST /api/v1/products` - Create new product 
- `PUT /api/v1/products/:id` - Update product 
- `DELETE /api/v1/products/:id` - Delete product 




## Project Structure

```
store-api/
├── config/           # Database and configuration files
├── controllers/      # Route controllers
├── middleware/       # Custom middleware (auth, error handling)
├── models/           # Mongoose models
├── routes/           # API routes
├── utils/            # Utility functions and helpers
├── validators/       # Request validation schemas
├── .env.example      # Environment variables example
├── .gitignore        # Git ignore file
├── package.json      # NPM dependencies and scripts
└── server.js         # Application entry point
```

## Usage Examples


### Create a Product 
```javascript
// POST /api/v1/products
{
  "name": "Wireless Headphones",
  "price": 149.99,
  "feature": true,
  "rating": 4.8,
  "company": "ikea"
}

```


## Development Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon


## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Mohamed Elmesery - [GitHub](https://github.com/Mohamedelmesery2004)

Project Link: [https://github.com/Mohamedelmesery2004/store-api](https://github.com/Mohamedelmesery2004/store-api)

## Support

If you have any questions or issues, please open an issue on GitHub or contact me directly.
