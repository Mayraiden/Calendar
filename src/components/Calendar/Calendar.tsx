import './Calendar.css'
import { useChallengeStore } from '../Store/store'
import Calendar from 'react-calendar'
import { useRef, useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

export const CalendarComponent = () => {
	const { completedDays, toggleDay, subscribe } = useChallengeStore()
	const [initialized, setInitialized] = useState(false)
	const unsubscribeRef = useRef<() => void>(null)

	if (!initialized) {
		unsubscribeRef.current = subscribe('user-123') // Замените на реальный ID
		setInitialized(true)
	}

	// Очистка при размонтировании компонента
	// if (typeof window !== 'undefined') {
	//   window.onbeforeunload = () => unsubscribeRef.current?.();
	// }

	return (
		<Calendar
			onChange={() => {}}
			value={null}
			tileClassName={({ date }) =>
				completedDays[date.toISOString().split('T')[0]] ? 'completed-day' : ''
			}
			tileContent={({ date }) =>
				completedDays[date.toISOString().split('T')[0]] ? (
					<CheckIcon className="absolute top-1 right-1 w-5 h-5" />
				) : null
			}
			onClickDay={toggleDay}
		/>
	)
}
