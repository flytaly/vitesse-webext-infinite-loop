import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

export const storageDemo = useWebExtensionStorage('webext-demo', 'Storage Demo')

export const storageData = useWebExtensionStorage('storage-data', { timestamp: 0 })
