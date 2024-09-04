import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Scissors} from "lucide-react"

export default function Component() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col justify-center w-full max-w-md p-6 m-auto bg-white dark:bg-gray-800 rounded-md shadow-md">
        <div className="flex justify-center mb-8">
          <Scissors className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Create an account</h1>
        <form className="mt-6">
          <div className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" placeholder="••••••••" required />
          </div>
          <div className="flex items-center mb-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="ml-2 text-sm">
              I agree to the{" "}
              <Link href="#" className="text-primary hover:underline">
                Terms and Conditions
              </Link>
            </Label>
          </div>
          <Button className="w-full">Sign Up</Button>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}