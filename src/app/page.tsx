import { Navbar }   from '@/components/layout/Navbar'
import { Footer }   from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Hero }     from '@/components/sections/Hero'
import { Work }     from '@/components/sections/Work'
import { Process }  from '@/components/sections/Process'
import { About }    from '@/components/sections/About'
import { Contact }  from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
