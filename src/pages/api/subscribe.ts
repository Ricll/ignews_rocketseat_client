import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { stripe } from "../../services/stripe";


export default async (req: NextApiRequest, res: NextApiResponse) => {
if (req.method === 'POST') {
    const session = await getSession({ req })

    const stripeCostumer = stripe.customers.create({
      email: session.user.email
    })



  const stripeCheckoutSession = stripe.checkout.sessions.create({
    customer: (await stripeCostumer).id,
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [
      {price: 'price_1Ib5alL9sURGBlZEoT2HEosw', quantity:1 }
    ],
    
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL
  })

  return res.status(200).json({sessionId: (await stripeCheckoutSession).id})
} else {
  res.setHeader('Allow', 'POST');
  res.status(450).end('Method Allowed')
  }
}