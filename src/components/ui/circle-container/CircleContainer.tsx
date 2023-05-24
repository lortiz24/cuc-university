
interface Props {
  children: React.ReactNode
}

export const CircleContainer = ({ children }: Props) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}
