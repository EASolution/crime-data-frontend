import { extent } from 'd3-array'
import { scaleLinear, scaleTime } from 'd3-scale'
import { curveCardinal, line } from 'd3-shape'
import { timeParse } from 'd3-time-format'
import React from 'react'

const parse = timeParse('%Y')

const Sparkline = ({ data }) => {
  const [margin, height, width] = [8, 60, 180]
  const clean = data.map(d => Object.assign({ date: parse(d.year), ...d }))

  const x = scaleTime()
    .domain(extent(clean, d => d.date))
    .range([0, width - margin * 2])

  const y = scaleLinear()
    .domain(extent(clean, d => d.rate))
    .range([height - margin * 2, 0])
    .nice()

  const l = line().curve(curveCardinal).x(d => x(d.date)).y(d => y(d.rate))

  return (
    <svg width={width} height={height} style={{ maxWidth: '100%' }}>
      <g transform={`translate(${margin}, ${margin})`}>
        <path d={l(clean)} fill="none" stroke="#ff5e50" strokeWidth="3" />
      </g>
    </svg>
  )
}

export default Sparkline
