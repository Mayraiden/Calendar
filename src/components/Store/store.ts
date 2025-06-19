import { create } from 'zustand'
import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../Firebase/firebase'

interface ChallengeStore {
	completedDays: Record<string, boolean>
	toggleDay: (date: Date) => Promise<void>
	subscribe: (userId: string) => () => void
	totalDays: number
}

export const useChallengeStore = create<ChallengeStore>((set) => ({
	completedDays: {},
	totalDays: 100,
	toggleDay: async (date) => {
		const dateKey = date.toISOString().split('T')[0]
		set((state) => {
			const newDays = {
				...state.completedDays,
				[dateKey]: !state.completedDays[dateKey],
			}
			return {
				completedDays: newDays,
				progress: Object.values(newDays).filter(Boolean).length,
			}
		})

		// Опционально: сохраняем после изменения (можно вынести в отдельный метод)
		const { completedDays } = useChallengeStore.getState()
		await setDoc(doc(db, 'challenges', 'user-123'), { completedDays })
	},
	subscribe: (userId) => {
		const unsub = onSnapshot(doc(db, 'challenges', userId), (doc) => {
			if (doc.exists()) set({ completedDays: doc.data().completedDays || {} })
		})
		return unsub
	},
}))
