import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sofa } from "lucide-react"

export default function Component() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col justify-center w-full max-w-md p-6 m-auto bg-white dark:bg-gray-800 rounded-md shadow-md">
        <div className="flex justify-center mb-8">
          <Sofa className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Sign in</h1>
        <form className="mt-6">
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="ml-2 text-sm">
                Remember me
              </Label>
            </div>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full">Sign In</Button>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}