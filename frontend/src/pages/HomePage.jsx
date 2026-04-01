import Home from './Home'
import Explore from './Explore'
import AQIInfo from './AQIInfo/AQIInfoPage'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="animate-fade-in">
        <Home />
      </section>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
          <section className="animate-slide-up py-16" style={{ animationDelay: '0.1s' }}>
            <AQIInfo />
          </section>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
      </div>

      <section className="animate-slide-up py-16" style={{ animationDelay: '0.2s' }}>
        <Explore />
      </section>
    </div>
  )
}
