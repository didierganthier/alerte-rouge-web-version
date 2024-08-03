import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "./shared/Navbar"
import FlowbiteRadioItem from "./shared/FlowbiteRadioItem"

export function CreateBloodRequestComponent() {

  const bloodTypes = [
    { label: "A+", value: "a-positive" },
    { label: "A-", value: "a-negative" },
    { label: "B+", value: "b-positive" },
    { label: "B-", value: "b-negative" },
    { label: "AB+", value: "ab-positive" },
    { label: "AB-", value: "ab-negative" },
    { label: "O+", value: "o-positive" },
    { label: "O-", value: "o-negative" },
  ]

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
                  <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Blood Type</h3>
                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      {bloodTypes.map((type) => (
                        <li key={type.value} className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                          <div className="flex items-center ps-3">
                            <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{type.label}</label>
                          </div>
                        </li>
                      ))}
                    </ul>
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
                    {/* <Label htmlFor="blood-type-required">Blood Type Required</Label>
                    <RadioGroup>
                      {bloodTypes.map((type) => (
                        <FlowbiteRadioItem key={type.value} id={type.value} text={type.label} />
                      ))}
                    </RadioGroup> */}

                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Blood Type Required</h3>
                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      {bloodTypes.map((type) => (
                        <li key={type.value} className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                          <div className="flex items-center ps-3">
                            <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{type.label}</label>
                          </div>
                        </li>
                      ))}
                    </ul>

                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Request</Label>
                    <Textarea id="reason" placeholder="Enter a brief explanation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgent">
                      Urgent Need </Label>
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
