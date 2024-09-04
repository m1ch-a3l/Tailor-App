// 'use client'

// import { useState } from 'react'
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Scissors, LogOut, Users, ShoppingBag, Clock, BarChart, LayoutDashboard, UserSquare2, FileText, PieChart, Menu, X } from "lucide-react"

// type Client = {
//   id: number;
//   name: string;
// }

// type Order = {
//   id: number;
//   clientId: number;
//   item: string;
//   measurements: string;
//   status: string;
//   amountPaid: number;
//   date: string;
// }

// export default function OrdersPage() {
//   const [clients, setClients] = useState<Client[]>([])
//   const [orders, setOrders] = useState<Order[]>([])
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const pathname = usePathname()

//   const addOrder = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     const formData = new FormData(event.currentTarget)
//     const newOrder: Order = {
//       id: orders.length + 1,
//       clientId: parseInt(formData.get('clientId') as string),
//       item: formData.get('item') as string,
//       measurements: formData.get('measurements') as string,
//       status: 'Pending',
//       amountPaid: 0,
//       date: new Date().toISOString(),
//     }
//     setOrders([...orders, newOrder])
//     event.currentTarget.reset()
//   }

//   const updateOrderStatus = (orderId: number, newStatus: string) => {
//     setOrders(orders.map(order => 
//       order.id === orderId ? { ...order, status: newStatus } : order
//     ))
//   }

//   const updatePayment = (orderId: number, amount: string) => {
//     setOrders(orders.map(order => 
//       order.id === orderId ? { ...order, amountPaid: order.amountPaid + parseFloat(amount) } : order
//     ))
//   }

//   const SidebarContent = () => (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center justify-between h-16 px-4 border-b md:justify-center">
//         <div className="flex items-center">
//           <Scissors className="h-6 w-6 text-primary mr-2" />
//           <span className="text-xl font-bold text-primary">Tailor App</span>
//         </div>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <X className="h-6 w-6" />
//         </Button>
//       </div>
//       <nav className="flex-1 overflow-y-auto py-4">
//         <ul className="space-y-2 px-3">
//           {[
//             { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
//             { href: "/clients", icon: UserSquare2, label: "Clients" },
//             { href: "/orders", icon: FileText, label: "Orders" },
//             { href: "/reports", icon: PieChart, label: "Reports" },
//           ].map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                   pathname === item.href
//                     ? "bg-primary text-primary-foreground"
//                     : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <item.icon className="h-5 w-5 mr-3" />
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="p-4 border-t">
//         <Button variant="outline" className="w-full justify-start text-gray-600 hover:text-gray-900">
//           <LogOut className="mr-2 h-4 w-4" /> Log out
//         </Button>
//       </div>
//     </div>
//   )

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
//           <h1 className="text-2xl font-bold">Orders</h1>
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button>Add Order</Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Add New Order</DialogTitle>
//               </DialogHeader>
//               <form onSubmit={addOrder} className="space-y-4">
//                 <div>
//                   <Label htmlFor="clientId">Client</Label>
//                   <Select name="clientId" required>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a client" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {clients.map((client) => (
//                         <SelectItem key={client.id} value={client.id.toString()}>{client.name}</SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div>
//                   <Label htmlFor="item">Item</Label>
//                   <Input id="item" name="item" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="measurements">Measurements</Label>
//                   <Textarea id="measurements" name="measurements" required />
//                 </div>
//                 <Button type="submit">Add Order</Button>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </header>
//         <div className="flex-1 overflow-auto p-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Order List</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Client</TableHead>
//                       <TableHead>Item</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Amount Paid</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {orders.map((order) => (
//                       <TableRow key={order.id}>
//                         <TableCell>{clients.find(c => c.id === order.clientId)?.name}</TableCell>
//                         <TableCell>{order.item}</TableCell>
//                         <TableCell>{order.status}</TableCell>
//                         <TableCell>${order.amountPaid.toFixed(2)}</TableCell>
//                         <TableCell>
//                           <Select onValueChange={(value) => updateOrderStatus(order.id, value)}>
//                             <SelectTrigger>
//                               <SelectValue placeholder={order.status} />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="Pending">Pending</SelectItem>
//                               <SelectItem value="In Progress">In Progress</SelectItem>
//                               <SelectItem value="Completed">Completed</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <Input
//                             type="number"
//                             placeholder="Amount"
//                             className="mt-2"
//                             onBlur={(e) => updatePayment(order.id, e.target.value)}
//                           />
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Scissors, LogOut, Users, ShoppingBag, Clock, BarChart, LayoutDashboard, UserSquare2, FileText, PieChart, Menu, X, Plus, Search } from "lucide-react"
import { DateRange } from "react-day-picker"

type Client = {
  id: number;
  name: string;
}

type Order = {
  id: number;
  clientId: number;
  item: string;
  measurements: string;
  status: string;
  amountPaid: number;
  date: string;
}

export default function OrdersPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const pathname = usePathname()

  const addOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newOrder: Order = {
      id: orders.length + 1,
      clientId: parseInt(formData.get('clientId') as string),
      item: formData.get('item') as string,
      measurements: formData.get('measurements') as string,
      status: 'Pending',
      amountPaid: 0,
      date: new Date().toISOString(),
    }
    setOrders([...orders, newOrder])
    event.currentTarget.reset()
  }

  const updateOrderStatus = (orderId: number, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const updatePayment = (orderId: number, amount: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, amountPaid: order.amountPaid + parseFloat(amount) } : order
    ))
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      clients.find(c => c.id === order.clientId)?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
    
    const orderDate = new Date(order.date)
    const matchesDateRange = 
      (!dateRange?.from || orderDate >= dateRange.from) &&
      (!dateRange?.to || orderDate <= dateRange.to)

    return matchesSearch && matchesDateRange
  })

  const totalRevenue = filteredOrders.reduce((sum, order) => sum + order.amountPaid, 0)

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
          <h1 className="text-2xl font-bold">Orders</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Order
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Order</DialogTitle>
              </DialogHeader>
              <form onSubmit={addOrder} className="space-y-4">
                <div>
                  <Label htmlFor="clientId">Client</Label>
                  <Select name="clientId" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a client" />
                    </SelectTrigger>
                    <SelectContent>
                      {clients.map((client) => (
                        <SelectItem key={client.id} value={client.id.toString()}>{client.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="item">Item</Label>
                  <Input id="item" name="item" required />
                </div>
                <div>
                  <Label htmlFor="measurements">Measurements</Label>
                  <Textarea id="measurements" name="measurements" required />
                </div>
                <Button type="submit">Add Order</Button>
              </form>
            </DialogContent>
          </Dialog>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Total Orders</p>
                  <p className="text-2xl font-bold">{filteredOrders.length}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order List</CardTitle>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search orders..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DatePickerWithRange
                  date={dateRange}
                  onDateChange={(newDateRange) => setDateRange(newDateRange)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount Paid</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{clients.find(c => c.id === order.clientId)?.name}</TableCell>
                        <TableCell>{order.item}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>${order.amountPaid.toFixed(2)}</TableCell>
                        <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Select onValueChange={(value) => updateOrderStatus(order.id, value)}>
                            <SelectTrigger>
                              <SelectValue placeholder={order.status} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Pending">Pending</SelectItem>
                              <SelectItem value="In Progress">In Progress</SelectItem>
                              <SelectItem value="Completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            type="number"
                            placeholder="Amount"
                            className="mt-2"
                            onBlur={(e) => updatePayment(order.id, e.target.value)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}