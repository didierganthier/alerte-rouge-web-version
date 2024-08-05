import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import Navbar from "./shared/Navbar"
import LayoutComponent from "./shared/LayoutComponent"

export function DonorPortalComponent() {
  return (
    <LayoutComponent dvh>
      <main className="flex-1 flex justify-center items-center">
        <section className="py-20 bg-background w-full max-w-4xl">
          <div className="container">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-center">Donor Portal</h2>
                <div className="mt-6 space-y-4">
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-medium">Appointment Scheduling</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="date">Select a date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full">
                                <span id="date">Select a date</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0 max-w-[276px]">
                              <Calendar />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <Label htmlFor="time">Select a time</Label>
                          <Select>
                            <SelectTrigger id="time">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="9am">9:00 AM</SelectItem>
                              <SelectItem value="10am">10:00 AM</SelectItem>
                              <SelectItem value="11am">11:00 AM</SelectItem>
                              <SelectItem value="12pm">12:00 PM</SelectItem>
                              <SelectItem value="1pm">1:00 PM</SelectItem>
                              <SelectItem value="2pm">2:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button type="submit" className="w-full">
                          Schedule Appointment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-medium">Donation History</h3>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Eligibility</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>2023-04-15</TableCell>
                            <TableCell>Main Street Clinic</TableCell>
                            <TableCell>Eligible</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2022-11-20</TableCell>
                            <TableCell>Downtown Donation Center</TableCell>
                            <TableCell>Eligible</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2022-06-01</TableCell>
                            <TableCell>Community Center</TableCell>
                            <TableCell>Eligible</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-medium">Eligibility Status</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Age</span>
                          <span>Eligible</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Weight</span>
                          <span>Eligible</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Health Conditions</span>
                          <span>Eligible</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Medications</span>
                          <span>Eligible</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Travel History</span>
                          <span>Eligible</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-medium">Communication Preferences</h3>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="email-updates">Email Updates</Label>
                            <Switch id="email-updates" />
                          </div>
                          <div>
                            <Label htmlFor="text-alerts">Text Alerts</Label>
                            <Switch id="text-alerts" />
                          </div>
                          <div>
                            <Label htmlFor="phone-calls">Phone Calls</Label>
                            <Switch id="phone-calls" />
                          </div>
                          <Button type="submit" className="w-full">
                            Save Preferences
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutComponent>
  )
}
