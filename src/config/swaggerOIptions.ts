const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Clerking Express API with Swagger',
            version: '0.1.0',
            description:
                'This is a simple CRUD API application made with Express and documented with Swagger',
        },
        servers: [
            {
                url: 'http://127.0.0.1:8888',
            },
        ],
        tags: [{ name: 'User', description: 'User management' }],
    },
    apis: ['./src/routes/*.ts'],
};

export default swaggerOptions;
