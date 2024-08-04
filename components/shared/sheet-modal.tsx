import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import SelectModal from './select'

const SheetModal = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="max-lg:block hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className="w-full">
        <SheetHeader className='p-5'>
          <SheetTitle>Menyu</SheetTitle>
          <div className='space-y-4 w-full'>
            <SelectModal/>
            <h1>Kirish</h1>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SheetModal
