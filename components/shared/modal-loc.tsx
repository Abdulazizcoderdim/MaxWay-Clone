import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const ModalLocation = ({
  triggerContent,
}: {
  triggerContent: React.ReactNode
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent className="w-full max-w-5xl">
        <DialogHeader>
          <div className="">
            <h1 className="text-2xl font-extrabold">
              Select the type of reception
            </h1>
            <p className="text-gray-500">To see your current menu</p>
            <div className="mt-4 flex gap-x-3">
              <div className="flex w-1/2 flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <Button className="w-full rounded-full" variant="outline">
                      Delivery
                    </Button>
                    <Button className="w-full rounded-full" variant={'outline'}>
                      Takeaway
                    </Button>
                  </div>
                  <Input className='rounded-lg' placeholder="Delivery address" />
                </div>

                <Button className='rounded-full' variant={'outline'}>Select</Button>
              </div>
              <div className="w-1/2 min-h-[400px]">
                <iframe
                  src="https://yandex.uz/map-widget/v1/?from=api-maps&ll=69.303762%2C41.304940&origin=jsapi_2_1_79&z=11"
                  className="h-full rounded-lg w-full"
                  frameBorder="1"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ModalLocation
