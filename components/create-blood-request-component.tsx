import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "./shared/Navbar"

export function CreateBloodRequestComponent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-background px-4 md:px-6">
          <div className="container">
            <form className="max-w-2xl mx-auto space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Patient Information</h2>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blood-type">Blood Type</Label>
                    <RadioGroup>
                      <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">A+</label>
                      </div>
                      <RadioGroupItem value="a-negative" id="a-negative">
                        <Label htmlFor="a-negative">A-</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="b-positive" id="b-positive">
                        <Label htmlFor="b-positive">B+</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="b-negative" id="b-negative">
                        <Label htmlFor="b-negative">B-</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="ab-positive" id="ab-positive">
                        <Label htmlFor="ab-positive">AB+</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="ab-negative" id="ab-negative">
                        <Label htmlFor="ab-negative">AB-</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="o-positive" id="o-positive">
                        <Label htmlFor="o-positive">O+</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="o-negative" id="o-negative">
                        <Label htmlFor="o-negative">O-</Label>
                      </RadioGroupItem>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Enter phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hospital">Hospital/Clinic</Label>
                    <Input id="hospital" placeholder="Enter hospital or clinic name" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Blood Request Details</h2>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Needed</Label>
                    <Input id="quantity" type="number" placeholder="Enter quantity" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blood-type-required">Blood Type Required</Label>
                    <RadioGroup>
                      <RadioGroupItem value="a-positive" id="a-positive-required">
                        <Label htmlFor="a-positive-required">A+</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="a-negative" id="a-negative-required">
                        <Label htmlFor="a-negative-required">A-</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="b-positive" id="b-positive-required">
                        <Label htmlFor="b-positive-required">B+</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="b-negative" id="b-negative-required">
                        <Label htmlFor="b-negative-required">B-</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="ab-positive" id="ab-positive-required">
                        <Label htmlFor="ab-positive-required">AB+</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="ab-negative" id="ab-negative-required">
                        <Label htmlFor="ab-negative-required">AB-</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="o-positive" id="o-positive-required">
                        <Label htmlFor="o-positive-required">O+</Label>
                      </RadioGroupItem>
                      <RadioGroupItem value="o-negative" id="o-negative-required">
                        <Label htmlFor="o-negative-required">O-</Label>
                      </RadioGroupItem>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Request</Label>
                    <Textarea id="reason" placeholder="Enter a brief explanation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgent">Urgent Need</Label>
                    <Checkbox id="urgent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="donation-center">Preferred Donation Center</Label>
                    <Input id="donation-center" placeholder="Enter preferred donation center" />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-background py-6 border-t">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Blood Donation Center. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
