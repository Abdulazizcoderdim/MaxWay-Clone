import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const SheetModal = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="max-lg:block hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className="w-full">
        <SheetHeader>
          <SheetTitle>Menyu</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SheetModal
