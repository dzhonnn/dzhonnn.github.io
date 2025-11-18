import './Containers.css'

interface GridContainerProps {
  columns: number
  children?: React.ReactNode
  gap?: string
}

function GridContainer({ columns, children, gap }: GridContainerProps) {
  return (
    <div className="grid" style={{ gap: gap, gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr)` }}>
      {children}
    </div>
  )
}

export default GridContainer
