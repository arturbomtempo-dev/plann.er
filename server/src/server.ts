import fastfy from 'fastify';
import cors from '@fastify/cors';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { createTrip } from './routes/create-trip';
import { confirmTrip } from './routes/confirm-trip';

const PORT = Number(process.env.PORT) || 3000;
const app = fastfy();

app.register(cors, {
    origin: '*',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(confirmTrip);

app.listen({ port: PORT }).then(() => {
    console.log(`Server is running on port ${PORT}`);
});
