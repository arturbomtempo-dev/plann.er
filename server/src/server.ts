import fastfy from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { createTrip } from './routes/create-trip';

const PORT = Number(process.env.PORT) || 3000;
const app = fastfy();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);

app.listen({ port: PORT }).then(() => {
    console.log(`Server is running on port ${PORT}`);
});
