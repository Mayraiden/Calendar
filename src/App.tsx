import { CalendarComponent } from './components/Calendar/Calendar'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { Tracker } from './components/Tracker/Tracker'
import './main.css'

function App() {
	return (
		<main className="relative w-full min-h-screen bg-[#161920] bg-[url('/BG1.jpg')] bg-cover bg-fixed bg-center">
			<div className="w-full h-full flex flex-col p-2 gap-2 safe-area">
				<div className="flex-1 grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-2 gap-2">
					<div className="lg:col-span-4 lg:row-span-2 h-full min-h-[70vh] lg:min-h-[unset]">
						<CalendarComponent />
					</div>

					<div className="lg:h-full lg:col-span-4 lg:row-span-1 sm:h-[80px]">
						<Tracker />
					</div>

					<div className="lg:col-span-4 lg:row-span-1 h-[80px] lg:h-auto">
						<ProgressBar />
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
