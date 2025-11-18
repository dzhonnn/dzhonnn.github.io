import './Containers.css'

interface CardContainerProps {
  children?: React.ReactNode
  title?: string
  className?: string
  bgColor?: string
}

function CardContainer({ children, title, className = 'border-2', bgColor = 'rgba(45, 45, 45)' }: CardContainerProps) {
  const _className = `container card ${className}`
  return (
    <div className={_className} style={{ backgroundColor: bgColor }}>
      {title ? <h2 className="card-title border-b-2 mb-4">{title}</h2> : null}
      {children}
    </div>
  )
}

export default CardContainer
