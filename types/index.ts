import { z } from 'zod'
import { insertProductSchema, insertcartSchema, cartItemSchema, shippingAddressSchema } from '@/lib/validators'

export type Product = z.infer<typeof insertProductSchema> & {
    id: string,
    rating: string,
    createdAt: Date,
}

export type Cart = z.infer<typeof insertcartSchema>
export type CartItem = z.infer<typeof cartItemSchema>
export type ShippingAddress = z.infer<typeof shippingAddressSchema>
