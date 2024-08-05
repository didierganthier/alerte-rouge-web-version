import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "./shared/Navbar"
import LayoutComponent from "./shared/LayoutComponent"

export function BlogComponent() {
  return (
    <LayoutComponent dvh>
      <main className="flex-1">
        <section className="py-20 bg-background px-4 md:px-6">
          <div className="container">
            <h2 className="text-4xl font-bold">Blog</h2>
            <p className="mt-4 text-muted-foreground">
              Read the latest stories, updates, and educational content from the Blood Donation Center.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 shadow-md p-2 rounded-md">
                <img
                  src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/447956614_810467731181747_2303879423251724937_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEN46aapSAv5CITQeBN4pKaAGdQMc28nJgAZ1AxzbycmN4NsFdKENhrsl1RqUwS1E7h2cSJ5qGiXHowp_NatxvS&_nc_ohc=Q4HzFrSYaigQ7kNvgHCXYh5&_nc_ht=scontent-lga3-1.xx&oh=00_AYDQs3B-1DoqLzKoa8SKB70f6pWIUJ2J0JDpc2qvlC34jw&oe=66B4FAA3"
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
              <div className="flex items-start gap-4 shadow-md p-2 rounded-md">
                <img
                  src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/447956614_810467731181747_2303879423251724937_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEN46aapSAv5CITQeBN4pKaAGdQMc28nJgAZ1AxzbycmN4NsFdKENhrsl1RqUwS1E7h2cSJ5qGiXHowp_NatxvS&_nc_ohc=Q4HzFrSYaigQ7kNvgHCXYh5&_nc_ht=scontent-lga3-1.xx&oh=00_AYDQs3B-1DoqLzKoa8SKB70f6pWIUJ2J0JDpc2qvlC34jw&oe=66B4FAA3"
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
              <div className="flex items-start gap-4 shadow-md p-2 rounded-md">
                <img
                  src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/447956614_810467731181747_2303879423251724937_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEN46aapSAv5CITQeBN4pKaAGdQMc28nJgAZ1AxzbycmN4NsFdKENhrsl1RqUwS1E7h2cSJ5qGiXHowp_NatxvS&_nc_ohc=Q4HzFrSYaigQ7kNvgHCXYh5&_nc_ht=scontent-lga3-1.xx&oh=00_AYDQs3B-1DoqLzKoa8SKB70f6pWIUJ2J0JDpc2qvlC34jw&oe=66B4FAA3"
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
    </LayoutComponent>
  )
}
