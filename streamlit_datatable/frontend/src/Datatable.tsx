import MUIDataTable from "mui-datatables"
import React from "react"
import {
  ArrowTable,
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

interface DatatableProps {
  data: ArrowTable
  title: string
}


function getRows(props: DatatableProps) {
  const rows = []
  for (let i = props.data.headerRows; i < props.data.rows; i++) {
    const row = []
    for (let j = 1; j < props.data.columns; j++) {
      let content = props.data.getCell(i, j).content
      content = content === null ? "" : content.toString()
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

function getColumns(props: DatatableProps) {
  const columns = []
  for (let j = 1; j < props.data.columns; j++) {
    let content = props.data.getCell(0, j).content
    content = content === null ? "" : content.toString()
    columns.push(content)
  }
  return columns
}


function Datatable(props: DatatableProps) {
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
        customSearch: (searchQuery: string, currentRow: any[]) => {
          let isFound = false
          currentRow.forEach(col => {
            const content = col === Html ? col.props.text : col.toString()
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
  if (!props.theme) {
    throw new Error("Expecting theme to be defined.")
  }

  return (
    <ThemeProvider theme={props.theme}>
      <Datatable title={props.args.title} data={props.args.data} />
    </ThemeProvider>
  )
})
