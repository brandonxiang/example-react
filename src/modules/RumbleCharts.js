import React from 'react'
import {Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title} from 'rumble-charts'

const series = [{data:[1,2,3]},{data:[5,7,11]},{data:[13,17,19]}]

export default class Demo extends React.Component{
  render(){
    return <Chart width={400} height={400} series={series} minY={0}>
      <Bars />
      <Lines interpolation="basis-open"/>
      <Dots />
    </Chart>;
  }
}
