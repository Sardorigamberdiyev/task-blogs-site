export function extractLocalStorage<T extends object>(key: string): T | null {
	const item = localStorage.getItem(key);
	try {
		return item && JSON.parse(item);
	} catch (e) {
		return {} as T;
	}
}
