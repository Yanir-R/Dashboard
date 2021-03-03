import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';


interface depositsProps { }

export const Userlogs: React.FC<depositsProps> = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 5,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid {...data} sortingMode={'client'} />
        </div>
      </div>
    </div>
  );
}