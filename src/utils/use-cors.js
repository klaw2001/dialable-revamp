import NextCors from 'nextjs-cors';

const corsOptions = {
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin: '*',
  optionsSuccessStatus: 200,
};

export const handleCors = async (req, res) => {
  await NextCors(req, res, corsOptions);
};
