import React,{useState} from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
function ModalSuccessCheckout({isOpen,setIsOpen}) {
    const close = ()=>{
        setIsOpen(false)
    }
  return (
    <>
      <Dialog open={isOpen} as="div" className="fixed top-0 left-0  z-10 focus:outline-none" onClose={()=>{return}}>
        <div className="fixed inset-0 z-10 w-screen  bg-slate-900/95 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Checkout successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ModalSuccessCheckout