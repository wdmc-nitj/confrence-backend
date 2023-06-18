import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Conference API",
      version: "2.0.0",
      description: "PiXel Perfect Hackathon",
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "Development server",
      },
      {
        url: "https://conference.cyclic.app",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        APIKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    },
    security: [
      {
        APIKeyAuth: [],
      },
    ],
  },
  apis: [
    "./routes/awards.ts",
    "./routes/conf.ts",
    "./routes/eventDate.ts",
    "./routes/home.ts",
    "./routes/navbar.ts",
    "./routes/sponsors.ts",
    "./routes/user.ts",
    "./routes/participant.ts"
  ],
};

const specs = swaggerJsdoc(options);

export default specs;
