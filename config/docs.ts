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
    "./routes/announcement.ts",
    "./routes/conf.ts",
    "./docs/contactUs.ts",
    "./routes/eventDate.ts",
    "./routes/home.ts",
    "./docs/images.ts",
    "./docs/location.ts",
    "./routes/navbar.ts",
    "./routes/participant.ts",
    "./routes/sponsors.ts",
    "./routes/user.ts",
  ],
};

// Swagger UI options to minimize menus
const swaggerUiOptions = {
  docExpansion: "none",
};

const specs = swaggerJsdoc(options);

export default specs;
export { swaggerUiOptions };
