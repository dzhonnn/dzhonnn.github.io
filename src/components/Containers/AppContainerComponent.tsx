import './Containers.css'

interface AppContainerProps {
  children?: React.ReactNode
}

function AppContainer({ children }: AppContainerProps) {
  return <div className="app">{children}</div>
}

export default AppContainer
