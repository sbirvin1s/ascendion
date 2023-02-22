/*========== EXTERNAL MODULES ========== */
import { setupWorker } from 'msw'

/*========== INTERNAL MODULES ========== */
import { handlers } from './handlers'

/*========== EXPORTS ========== */
export const worker = setupWorker(...handlers)