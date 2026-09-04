import { defineAppSetup } from '@slidev/types'
import { VuePlotly } from 'vue3-plotly'

export default defineAppSetup(({ app }) => {
  // vue3-plotly is an npm component, so Slidev's `components/` auto-import
  // does not see it: register it globally as <v-plotly>.
  app.component('VPlotly', VuePlotly)
})
