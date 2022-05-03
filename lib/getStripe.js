import { loadStripe } from "@stripe/stripe-js";

let strpeProdmise

const getStripe = () => {
    if (!strpeProdmise) {
        strpeProdmise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE)
    }

    return strpeProdmise
}

export default getStripe