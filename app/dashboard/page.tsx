'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, LogOut } from "lucide-react"

type Client = {
    id: number;
    name: string;
    number: string;
    location: string;
}

type Order = {
    id: number;
    clientId: number;
    item: string;
    measurements: string;
    status: string;
    amountPaid: number;
}

export default function DashboardPage() {
    const [clients, setClients] = useState<Client[]>([])
    const [orders, setOrders] = useState<Order[]>([])

    const addClient = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newClient: Client = {
            id: clients.length + 1,
            name: formData.get('name') as string,
            number: formData.get('number') as string,
            location: formData.get('location') as string,
        }
        setClients([...clients, newClient])
        event.currentTarget.reset()
    }

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

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-white p-4 shadow">
                <div className="flex items-center mb-6">
                    <Scissors className="h-6 w-6 mr-2" />
                    <span className="text-xl font-bold">Upholstery Pro</span>
                </div>
                <nav>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Dashboard</Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Clients</Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Orders</Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Reports</Link>
                </nav>
                <div className="absolute bottom-4">
                    <Button variant="ghost" className="w-full justify-start">
                        <LogOut className="mr-2 h-4 w-4" /> Log out
                    </Button>
                </div>
            </aside>
            <main className="flex-1 p-6 overflow-auto">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                <Tabs defaultValue="clients">
                    <TabsList>
                        <TabsTrigger value="clients">Clients</TabsTrigger>
                        <TabsTrigger value="orders">Orders</TabsTrigger>
                    </TabsList>
                    <TabsContent value="clients">
                        <Card>
                            <CardHeader>
                                <CardTitle>Add New Client</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={addClient} className="space-y-4">
                                    <div>
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" name="name" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="number">Phone Number</Label>
                                        <Input id="number" name="number" type="tel" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" name="location" required />
                                    </div>
                                    <Button type="submit">Add Client</Button>
                                </form>
                            </CardContent>
                        </Card>
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle>Client List</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Phone Number</TableHead>
                                            <TableHead>Location</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {clients.map((client) => (
                                            <TableRow key={client.id}>
                                                <TableCell>{client.name}</TableCell>
                                                <TableCell>{client.number}</TableCell>
                                                <TableCell>{client.location}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="orders">
                        <Card>
                            <CardHeader>
                                <CardTitle>Add New Order</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={addOrder} className="space-y-4">
                                    <div>
                                        <Label htmlFor="clientId">Client</Label>
                                        <Select onValueChange={(value) => console.log(value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a client" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {clients.map((client) => (
                                                    <SelectItem key={client.id} value={client.id.toString()}>
                                                        {client.name}
                                                    </SelectItem>
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
                            </CardContent>
                        </Card>
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle>Order List</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Client</TableHead>
                                            <TableHead>Item</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Amount Paid</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {orders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>{clients.find(c => c.id === order.clientId)?.name}</TableCell>
                                                <TableCell>{order.item}</TableCell>
                                                <TableCell>{order.status}</TableCell>
                                                <TableCell>${order.amountPaid.toFixed(2)}</TableCell>
                                                <TableCell>
                                                    <Select
                                                        value={order.status}
                                                        onValueChange={(value) => updateOrderStatus(order.id, value)}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Update status" />
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
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
