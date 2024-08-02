import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "./shared/Navbar"
import Hero from "./shared/Hero"

export function HowToDonateComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero imageUrl="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/448493417_18027875672504500_5076156659139404508_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHx9LoWGU5L12fJbk9YSP95cI91TjSwd4Fwj3VONLB3gQPBEu4uGWgDPznZDuxnrDcpgMkdCTb2npfYarwuDlA5&_nc_ohc=b2B4jUFVbL4Q7kNvgHgQkJ-&_nc_ht=scontent-sof1-1.xx&oh=00_AYAYFiUv4JFbiUPiYJ7n5c4gWPOmwASDp-scyRo1_yXmyQ&oe=66B2B75A" />
      <main className="flex-grow">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-center">How to Donate</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-center">Step-by-step Process</h3>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                      <li>Schedule an appointment at your nearest Blood Donation Center.</li>
                      <li>Complete a brief health questionnaire to ensure your eligibility.</li>
                      <li>Relax as our trained staff collects your blood donation.</li>
                      <li>Enjoy a complimentary snack and drink to replenish your fluids.</li>
                      <li>Schedule your next donation appointment before you leave.</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-center">FAQs</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <h4 className="font-medium">Who can donate blood?</h4>
                        <p className="text-muted-foreground">
                          Most healthy adults aged 16-69 can donate blood. There are some eligibility requirements, such
                          as minimum weight and certain medical conditions.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">How often can I donate?</h4>
                        <p className="text-muted-foreground">
                          You can typically donate blood every 56 days, or about 6 times per year.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">What should I do before donating?</h4>
                        <p className="text-muted-foreground">
                          Drink plenty of fluids, eat a healthy meal, and avoid skipping meals before your donation.
                          This will help you feel your best during and after the process.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">What happens after I donate?</h4>
                        <p className="text-muted-foreground">
                          After your donation, you&apos;ll be asked to rest and have a snack to help replenish your fluids.
                          Our staff will provide instructions on post-donation care, such as avoiding strenuous activity
                          for the rest of the day.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-center">Pre-Donation Guidelines</h3>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                      <li>Drink plenty of fluids in the days leading up to your donation.</li>
                      <li>Eat a healthy, iron-rich meal before your appointment.</li>
                      <li>Avoid alcohol for 24-48 hours prior to donating.</li>
                      <li>Get a good night&apos;s sleep the night before.</li>
                      <li>Avoid strenuous exercise for 24-48 hours after your donation.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-center">Post-Donation Care</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <h4 className="font-medium">Immediately After Donating</h4>
                        <p className="text-muted-foreground">
                          After your donation, you&apos;ll be asked to rest and have a snack or drink to help replenish your
                          fluids. Our staff will provide instructions on post-donation care, such as avoiding strenuous
                          activity for the rest of the day.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">In the Days After</h4>
                        <p className="text-muted-foreground">
                          It&apos;s important to continue drinking plenty of fluids and avoid strenuous exercise for 24-48
                          hours after your donation. This will help your body recover and replace the donated blood.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Feeling Unwell?</h4>
                        <p className="text-muted-foreground">
                          If you experience any unusual symptoms, such as dizziness, nausea, or prolonged fatigue,
                          please contact us or your healthcare provider right away.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background py-6 border-t">
        <div className="container mx-auto flex items-center justify-between px-4">
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
