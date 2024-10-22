import { Button } from "@/presenters/components/ui/button"
import { DownloadIcon } from "lucide-react"

export function HeroSection() {
  return (
    <main>
      <section className="text-center p-5 h-screen flex flex-col items-center justify-center gap-3 container max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
        <img
          src="/icon.png"
          alt="Logo"
          className="animate-fade-down duration-500 md:max-w-xs"
        />
        <div className="space-y-4 animate-fade-up duration-500 md:max-w-xs lg:max-w-md xl:max-w-lg">
          <h2 className="text-3xl font-black bg-primary text-transparent bg-clip-text lg:text-4xl xl:text-5xl">
            The simplest and minimal pomodoro timer app.
          </h2>
          <div>
            <a
              download
              href="https://cdn.discordapp.com/attachments/1298256853976875048/1298256984822386688/pomodoro_0.1.0_x64_en-US.msi?ex=6718e789&is=67179609&hm=5f286c1f934b501a9ba66fef049f712743ac2639a57bfe7729fd42153f07096e&"
            >
              <Button>
                Download app <DownloadIcon />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
