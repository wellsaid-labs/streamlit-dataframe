import MUIDataTable from "mui-datatables"
import React, { useEffect } from "react"
import {
  ArrowTable,
  Streamlit,
  withStreamlitConnection
} from "streamlit-component-lib"
import ThemeProvider from "./ThemeProvider"


interface HtmlProps {
  text: string | undefined
}


function Html(props: HtmlProps) {
  if (!props.text) {
    return <span />
  }
  return <span dangerouslySetInnerHTML={{ __html: props.text }} />
}

interface DataframeProps {
  data: ArrowTable
  title: string
}


function getRows(props: DataframeProps) {
  const rows = []
  for (let i = props.data.headerRows; i < props.data.rows; i++) {
    const row = []
    for (let j = 1; j < props.data.columns; j++) {
      const content = props.data.getCell(i, j).content.toString()
      if (content[0] === "<" && content[content.length - 1] === ">") {
        row.push(<Html text={content}></Html>)
      } else {
        row.push(content)
      }
    }
    rows.push(row)
  }
  return rows
}

function getColumns(props: DataframeProps) {
  const columns = []
  for (let j = 1; j < props.data.columns; j++) {
    columns.push(props.data.getCell(0, j).content.toString())
  }
  return columns
}


function Dataframe(props: DataframeProps) {
  if (props.data.headerRows !== 1) {
    throw new Error("Expecting 1 header row.")
  }

  return (
    <MUIDataTable
      title={props.title}
      data={getRows(props)}
      columns={getColumns(props)}
      options={{
        selectableRows: 'none',
        rowHover: false,
        customSearch: (searchQuery, currentRow, columns) => {
          let isFound = false
          currentRow.forEach(col => {
            const content = col == Html ? col.props.text : col.toString()
            if (content.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0) {
              isFound = true
            }
          })
          return isFound
        },
      }}
    />
  )
}


export default withStreamlitConnection((props) => {
  useEffect(() => {
    Streamlit.setFrameHeight()
  })

  if (!props.theme) {
    throw new Error("Expecting theme to be defined.")
  }

  return (
    <ThemeProvider theme={props.theme}>
      <Dataframe title={props.args.title} data={props.args.data} />
    </ThemeProvider>
  )
})
