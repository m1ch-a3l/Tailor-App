// 'use client'

// import { useState } from 'react'
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Scissors, LogOut, Users, ShoppingBag, Clock, BarChart, LayoutDashboard, UserSquare2, FileText, PieChart, Menu, X } from "lucide-react"

// export default function ReportsPage() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const pathname = usePathname()
'use client'

import { useState } from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Scissors, LogOut, Users, ShoppingBag, Clock, BarChart, LayoutDashboard, UserSquare2, FileText, PieChart, Menu, X, Printer } from "lucide-react"
import { BarChart as BarChartComponent, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { DateRange } from "react-day-picker"

type Order = {
  id: number;
  clientId: number;
  item: string;
  status: string;
  amountPaid: number;
  date: string;
}

export default function ReportsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const pathname = usePathname()

  // Mock data for demonstration purposes
  const orders: Order[] = [
    { id: 1, clientId: 1, item: 'Chair', status: 'Completed', amountPaid: 150, date: '2023-05-01' },
    { id: 2, clientId: 2, item: 'Sofa', status: 'In Progress', amountPaid: 500, date: '2023-05-05' },
    { id: 3, clientId: 3, item: 'Ottoman', status: 'Pending', amountPaid: 100, date: '2023-05-10' },
    { id: 4, clientId: 1, item: 'Dining Chair', status: 'Completed', amountPaid: 200, date: '2023-05-15' },
    { id: 5, clientId: 4, item: 'Armchair', status: 'Completed', amountPaid: 300, date: '2023-05-20' },
  ]

  const filteredOrders = orders.filter(order => {
    const orderDate = new Date(order.date)
    return (!dateRange?.from || orderDate >= dateRange.from) &&
           (!dateRange?.to || orderDate <= dateRange.to)
  })

  const totalRevenue = filteredOrders.reduce((sum, order) => sum + order.amountPaid, 0)
  const averageOrderValue = totalRevenue / filteredOrders.length || 0

  const statusDistribution = filteredOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const monthlyRevenue = filteredOrders.reduce((acc, order) => {
    const month = new Date(order.date).toLocaleString('default', { month: 'long' })
    acc[month] = (acc[month] || 0) + order.amountPaid
    return acc
  }, {} as Record<string, number>)

  const monthlyRevenueData = Object.entries(monthlyRevenue).map(([month, revenue]) => ({
    month,
    revenue
  }))

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between h-16 px-4 border-b md:justify-center">
        <div className="flex items-center">
          <Scissors className="h-6 w-6 text-primary mr-2" />
          <span className="text-xl font-bold text-primary">Tailor App</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-3">
          {[
            { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
            { href: "/clients", icon: UserSquare2, label: "Clients" },
            { href: "/orders", icon: FileText, label: "Orders" },
            { href: "/reports", icon: PieChart, label: "Reports" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start text-gray-600 hover:text-gray-900">
          <LogOut className="mr-2 h-4 w-4" /> Log out
        </Button>
      </div>
    </div>
  )

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar for larger screens */}
//       <aside className="hidden md:block w-64 bg-white shadow-md">
//         <SidebarContent />
//       </aside>

//       {/* Mobile menu */}
//       <div className={`fixed inset-0 z-50 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
//         <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md">
//           <SidebarContent />
//         </div>
//       </div>

//       <main className="flex-1 flex flex-col overflow-hidden">
//         <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(true)}
//           >
//             <Menu className="h-6 w-6" />
//           </Button>
//           <h1 className="text-2xl font-bold">Reports</h1>
//         </header>
return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:block w-64 bg-white shadow-md">
        <SidebarContent />
      </aside>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md">
          <SidebarContent />
        </div>
      </div>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Reports</h1>
          <div className="flex items-center space-x-2">
            <DatePickerWithRange
              date={dateRange}
              onDateChange={(newDateRange) => setDateRange(newDateRange)}
            />
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Revenue chart will be displayed here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Order Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Order status pie chart will be displayed here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p>List of top clients will be displayed here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monthly orders bar chart will be displayed here</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}