interface ErrorTextProps {
  children?: React.ReactNode
}

function ErrorText({ children }: ErrorTextProps) {
  return <p className="text-red-500">{children}</p>
}

export default ErrorText
