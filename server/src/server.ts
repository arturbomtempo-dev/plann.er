import fastfy from 'fastify';
import { prisma } from './lib/prisma';

const PORT = Number(process.env.PORT) || 3000;
const app = fastfy();

app.get('/cadastrar', async () => {
    await prisma.trip.create({
        data: {
            destination: 'Belo Horizonte',
            starts_at: new Date(),
            ends_at: new Date(),
        },
    });

    return 'Registro cadastrado com sucesso!';
});

app.get('/listar', async () => {
    const trips = await prisma.trip.findMany();

    return trips;
});

app.listen({ port: PORT }).then(() => {
    console.log(`Server is running on port ${PORT}`);
});
