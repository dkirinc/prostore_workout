'use client'


import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { ShippingAddress } from "@/types";
import { shippingAddressSchema } from "@/lib/validators";

const ShippingAddressForm = ({ address }: { address: ShippingAddress }) => {
    return (<>Shipping Address Form</>);
}

export default ShippingAddressForm;