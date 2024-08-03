import { cn } from '@/lib/utils'

interface MaxWidthProps {
  children: React.ReactNode
  className?: string
}

const MaxWidth: React.FC<MaxWidthProps> = ({ children, className }) => {
  return <div className={cn('xl:px-44 px-8', className)}>{children}</div>
}

export default MaxWidth
