import type { FC } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Scissors, Users, ClipboardList, BarChart3 } from "lucide-react"

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Scissors className="h-6 w-6" />
          <span className="text-slate-200">Tailor App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-4">
  <Link href="/signin" passHref>
    <Button variant="ghost" className="text-sm font-medium">
      Sign In
    </Button>
  </Link>
  <Link href="/signup" passHref>
    <Button className="text-sm font-medium">Sign Up</Button>
  </Link>
</div>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="/classy-man-tailor-shop.jpg?height=600&width=1600"
            alt="Upholstery workshop background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-slate-400">
                  Streamline Your Tailor Business
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-200">
                  Manage clients, track orders, and grow your business with our all-in-one workmanship management solution.
                </p>
              </div>
              <div className="space-x-4">
              <Link href="/signup" passHref>
  <Button className="bg-white text-gray-900 hover:bg-gray-100">Get Started</Button>
</Link>
                <Button variant="outline" className="text-gray-900 border-white hover:bg-white hover:text-gray-100">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-center">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Client Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Easily add and manage client details in one place.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ClipboardList className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Order Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Keep track of all client orders and their statuses.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChart3 className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Business Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Gain valuable insights with detailed reports and analytics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Scissors className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Inventory Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Manage your fabric and supply inventory efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to grow your workmanship business?
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up now and start managing your clients and orders more efficiently.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  {/* <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" /> */}
                 <Link href="/signup"><Button type="submit" className='items-center'>Sign Up</Button></Link> 
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Tailor App. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default LandingPage;