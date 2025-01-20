'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useActionState } from "react";

const CredentialsSignInForm = () => {

    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        message: ''
    })

    const SignInButton = () => {
        const { pending } = useFormStatus()
        return (
            <Button disabled={pending} className="w-full" variant={'default'}>
                {pending ? 'Signing in...' : 'Sign in'}
            </Button>
        )
    }

    return (
        <form action={action}>
            <div className="space-y-6">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id='email'
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        defaultValue={signInDefaultValues.email} />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id='password'
                        name="password"
                        type="password"
                        required
                        autoComplete="password"
                        defaultValue={signInDefaultValues.password} />
                </div>
                <div>
                    <SignInButton className='w-full' variant='default'>Sign in</SignInButton>
                </div>
                {data && !data.success && (
                    <div className="text-center text-destructive">{data.message}</div>
                )}
                <div className="text-sm text-center text-muted-foreground">Don&apos; have an account? {''}
                    <Link href='/sing-up' target='_self' className='link '>Sign in</Link>
                </div>
            </div>
        </form>);
}

export default CredentialsSignInForm;