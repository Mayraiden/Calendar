import { useChallengeStore } from '../Store/store'

export const ProgressBar = () => {
	const { completedDays, totalDays } = useChallengeStore()
	const completedCount = Object.values(completedDays).filter(Boolean).length
	const progress = Math.min((completedCount / totalDays) * 100, 100)

	return (
		<div className="h-full text-white">
			<div className="flex justify-between text-sm mb-1">
				<span>
					Прогресс: {completedCount}/{totalDays}
				</span>
				<span>{Math.round(progress)}%</span>
			</div>
			<div className="h-4 bg-white/10 rounded-full overflow-hidden">
				<div
					className="h-full bg-gradient-to-r from-green-400 to-teal-500 transition-all duration-500"
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	)
}
