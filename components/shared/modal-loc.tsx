import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'

const ModalLocation = ({
  triggerContent,
}: {
  triggerContent: React.ReactNode
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent>
        <DialogHeader>as</DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ModalLocation
