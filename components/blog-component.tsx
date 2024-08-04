import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "./shared/Navbar"

export function BlogComponent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-background px-4 md:px-6">
          <div className="container">
            <h2 className="text-4xl font-bold">Blog</h2>
            <p className="mt-4 text-muted-foreground">
              Read the latest stories, updates, and educational content from the Blood Donation Center.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 1"
                  width={200}
                  height={150}
                  className="rounded-md"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div>
                  <h4 className="font-medium">The Importance of Blood Donation</h4>
                  <p className="text-muted-foreground">
                    Learn why donating blood is crucial and how it can save lives.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 2"
                  width={200}
                  height={150}
                  className="rounded-md"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div>
                  <h4 className="font-medium">Debunking Blood Donation Myths</h4>
                  <p className="text-muted-foreground">
                    Explore common misconceptions about blood donation and the facts.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post 3"
                  width={200}
                  height={150}
                  className="rounded-md"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div>
                  <h4 className="font-medium">The Blood Donation Process Explained</h4>
                  <p className="text-muted-foreground">
                    Get a step-by-step guide on what to expect when donating blood.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
