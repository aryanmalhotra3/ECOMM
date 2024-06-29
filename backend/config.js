import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: "mongodb+srv://aryan:123456788@cluster0.9ykvv2r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  JWT_SECRET: "coffeee",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};
