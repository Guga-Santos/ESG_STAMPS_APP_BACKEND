import 'dotenv/config';
import app from './app';
import Populate from './mockSeeds/populate';
import connectToDatabase from './models/connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    const populate = new Populate();
    populate.companySeed();
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });