import './Containers.css'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

function Container({ children, className, style }: ContainerProps) {
  const _className = `container ${className}`

  return (
    <div className={_className} style={style}>
      {children}
    </div>
  )
}

export default Container
