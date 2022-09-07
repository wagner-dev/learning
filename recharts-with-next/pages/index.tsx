import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'
import _ from 'lodash'


const ChartPage: NextPage = () => {

  return (
        <Chart 
          chartType='LineChart'
          data={[['Ano', 'Vendas', 'Despesas'], ['2001', 0 ,23], ['2002', 2, 38], ['2003', 122, 30], ['2004', 232, 53]]}
          options={{
            title: 'Performace da empresa',
            curveType: 'function',
            intervals: 'line',
            series: [
              {color: 'green', lineWidth: 2},
              {color: 'red',lineWidth: 2}
            ],
            legend: {
              position: 'bottom'
            }
          }}
          width='80%'
          height="400px"
        />
  )
}

export default ChartPage