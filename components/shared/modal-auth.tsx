'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const AuthLocation = ({
  triggerContent,
}: {
  triggerContent: React.ReactNode
}) => {
  const [phone, setPhone] = useState< string>("+998")
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <div className="lg:text-center space-y-5 pt-10">
            <h1 className="text-3xl font-bold">Tizimga kirish</h1>
            <p className="text-gray-500">
              Telefon raqamingiz bilan tizimga kiring
            </p>
            <form className="flex flex-col gap-y-3 justify-start text-start">
              <label htmlFor="phone">Telefon raqam</label>
              <Input
                onChange={(e) => setPhone(e.target.value)}
                type="string"
                id="phone"
                className="rounded-xl"
                value={phone}
              />
              <Button className="rounded-full" variant={'outline'}>
                Kodni yuborish
              </Button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AuthLocation
