import stripe from "../../../stripe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create a payment intent with the desired amount
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // Amount in cents
        currency: "usd",
      });

      // Return the payment intent client secret to the client
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while creating the payment intent.",
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
