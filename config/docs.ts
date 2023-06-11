import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'WDM API',
      version: '1.0.0',
      description: 'API documentation for your Node.js project'
    },
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Development server'

      },
      {
        url:'',
        description: 'Production server'
      }
    ]
  },
  apis: [
    './routes/awards.ts',
    './routes/home.ts',
    './routes/navbar.ts',
    './routes/sponsors.ts',
  ] // replace this with the path to your API routes
};

const specs = swaggerJsdoc(options);

export default specs;