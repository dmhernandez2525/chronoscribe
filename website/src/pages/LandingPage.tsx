import {
  FileText,
  Search,
  Clock,
  Shield,
  HelpCircle,
  FolderTree,
  Sparkles,
  Github
} from 'lucide-react'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-950 to-secondary-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-2">
            <FileText className="h-7 w-7 sm:h-8 sm:w-8 text-primary-500" />
            <span className="text-lg sm:text-xl font-bold">ChronoScribe</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
            <a href="#features" className="text-sm sm:text-base text-secondary-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm sm:text-base text-secondary-300 hover:text-white transition-colors">How It Works</a>
            <a href="https://github.com/dmhernandez2525/chronoscribe" className="flex items-center gap-2 bg-secondary-800 hover:bg-secondary-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-secondary-300 bg-clip-text text-transparent">
          Transform Your Handwritten Legacy<br className="hidden sm:block" /> Into a Searchable Archive
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-secondary-300 mb-6 md:mb-8 max-w-3xl mx-auto">
          AI-powered transcription with human-in-the-loop clarification.
          Automatically organize years of handwritten notes, sketches, and documents
          into a chronological, searchable archive. All while keeping your data local.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://github.com/dmhernandez2525/chronoscribe#installation"
            className="bg-primary-600 hover:bg-primary-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="border border-secondary-600 hover:bg-secondary-800 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Learn More
          </a>
        </div>

        {/* Terminal Preview */}
        <div className="mt-10 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-secondary-900 rounded-lg border border-secondary-700 overflow-hidden shadow-2xl">
            <div className="bg-secondary-800 px-3 sm:px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-secondary-400 text-sm">Terminal</span>
            </div>
            <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm text-left overflow-x-auto">
              <p className="text-secondary-400">$ chronoscribe watch</p>
              <p className="text-green-400 mt-2">✓ Watching ~/ChronoScribe/inbox/</p>
              <p className="text-secondary-300 mt-4">New file detected: invention_sketch_001.png</p>
              <p className="text-secondary-400">  → Preprocessing...</p>
              <p className="text-secondary-400">  → Transcribing with Azure Vision...</p>
              <p className="text-secondary-400">  → Analyzing content...</p>
              <p className="text-green-400">  ✓ Saved to archive/2019/03/2019-03-15_invention_001/</p>
              <p className="text-yellow-400 mt-4">⚠ 2 clarifications pending (run 'chronoscribe clarify')</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why ChronoScribe?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <FeatureCard
            icon={<HelpCircle className="h-8 w-8 text-primary-500" />}
            title="Clarification System"
            description="When AI is uncertain, it asks you specific questions instead of guessing. No more proofreading entire documents."
          />
          <FeatureCard 
            icon={<Clock className="h-8 w-8 text-primary-500" />}
            title="Chronological Timeline"
            description="Automatically extracts dates and organizes documents on a timeline. Your life's documents, finally organized."
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-primary-500" />}
            title="Local-First Privacy"
            description="All processing happens on your machine. Cloud APIs are optional and only used for transcription with your consent."
          />
          <FeatureCard 
            icon={<Sparkles className="h-8 w-8 text-primary-500" />}
            title="Multi-Provider AI"
            description="Leverages Azure, Google, OpenAI, and local Ollama. Maximizes 6,000+ free API calls per month."
          />
          <FeatureCard 
            icon={<Search className="h-8 w-8 text-primary-500" />}
            title="Full-Text Search"
            description="Search across all your transcribed documents instantly. Find that invention sketch from 2019 in seconds."
          />
          <FeatureCard 
            icon={<FolderTree className="h-8 w-8 text-primary-500" />}
            title="Organized Archives"
            description="Each document gets its own folder with original, transcription, analysis, and metadata. Clean provenance forever."
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <Step number={1} title="Drop documents in the inbox">
              Scan your handwritten notes, sketches, or documents and drop them in ~/ChronoScribe/inbox/
            </Step>
            <Step number={2} title="AI transcribes and analyzes">
              ChronoScribe automatically processes each document: preprocessing, transcription, date extraction, and categorization.
            </Step>
            <Step number={3} title="Review clarifications">
              When the AI is uncertain, it queues specific questions. Answer them at your convenience with 'chronoscribe clarify'.
            </Step>
            <Step number={4} title="Search your archive">
              Your documents are organized chronologically and fully searchable. Find anything with 'chronoscribe search'.
            </Step>
          </div>
        </div>
      </section>

      {/* CLI Commands */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Simple CLI Interface</h2>
        <div className="max-w-2xl mx-auto bg-secondary-900 rounded-lg border border-secondary-700 overflow-hidden">
          <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm space-y-3 sm:space-y-4 overflow-x-auto">
            <CommandLine cmd="chronoscribe init" desc="Set up ChronoScribe" />
            <CommandLine cmd="chronoscribe watch" desc="Start watching for new documents" />
            <CommandLine cmd="chronoscribe process scan.png" desc="Process a single file" />
            <CommandLine cmd='chronoscribe search "solar heater"' desc="Search your archive" />
            <CommandLine cmd="chronoscribe clarify" desc="Review pending clarifications" />
            <CommandLine cmd="chronoscribe timeline --year 2019" desc="View documents by date" />
            <CommandLine cmd="chronoscribe stats --usage" desc="See statistics and API usage" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Digitize Your Legacy?</h2>
        <p className="text-base md:text-xl text-secondary-300 mb-6 md:mb-8 max-w-2xl mx-auto">
          ChronoScribe is open source and free to use. Get started in minutes.
        </p>
        <a 
          href="https://github.com/dmhernandez2525/chronoscribe" 
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          <Github className="h-5 w-5" />
          View on GitHub
        </a>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 border-t border-secondary-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500" />
            <span className="font-semibold text-sm sm:text-base">ChronoScribe</span>
          </div>
          <p className="text-secondary-400 text-xs sm:text-sm">
            MIT License. Built with Python, Click, and Rich.
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-secondary-800/50 border border-secondary-700 rounded-lg p-4 sm:p-6 hover:border-primary-500/50 transition-colors">
      <div className="mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-secondary-300">{description}</p>
    </div>
  )
}

function Step({ number, title, children }: { number: number, title: string, children: React.ReactNode }) {
  return (
    <div className="flex gap-3 sm:gap-6">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-secondary-300">{children}</p>
      </div>
    </div>
  )
}

function CommandLine({ cmd, desc }: { cmd: string, desc: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
      <div className="flex-1 min-w-0">
        <span className="text-secondary-400">$ </span>
        <span className="text-green-400 break-all sm:break-normal">{cmd}</span>
      </div>
      <span className="text-secondary-500 text-xs shrink-0 pl-4 sm:pl-0"># {desc}</span>
    </div>
  )
}

export default LandingPage
