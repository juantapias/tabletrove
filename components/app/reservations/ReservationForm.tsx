'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

// import { useAppStateContext } from '@/context/AppStateContext'

import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'

import { CalendarIcon } from 'lucide-react'
import { IconLoader2 } from '@tabler/icons-react'
// import { IBooking } from '@/utils/types'

const FormSchema = z.object({
  name: z.string({
    required_error: 'Este campo es requerido',
  }),
  surname: z.string({
    required_error: 'Este campo es requerido',
  }),
  dni: z.string({
    required_error: 'Este campo es requerido',
  }),
  phone: z.string({
    required_error: 'Este campo es requerido',
  }),
  email: z
    .string({
      required_error: 'Este campo es requerido',
    })
    .email(),
  event: z.string({
    required_error: 'Este campo es requerido',
  }),
  dateEvent: z.coerce.date(),
  timeEvent: z.string({
    required_error: 'Este campo es requerido',
  }),
  people: z.string({
    required_error: 'Este campo es requerido',
  }),
  request: z.string().optional(),
})

export default function ReservationForm() {
  const router = useRouter()
  const pathname = usePathname()
  const restaurantPath = pathname.split('/')[1]
  // const { setBooking } = useAppStateContext()

  const [localLoading, setLocalLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setLocalLoading(true)
    // setBooking(values as unknown as IBooking)
    router.push(`${restaurantPath}/confirmation`)
    setLocalLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombres*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  className='h-10 outline-none rounded-lg indent-2'
                  placeholder='Ingresa tu nombre'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='surname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellidos*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  className='h-10 outline-none rounded-lg indent-2'
                  placeholder='Ingresa tu apellido'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='dni'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cédula*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  className='h-10 outline-none rounded-lg indent-2'
                  placeholder='Ingresa tu dni'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  className='h-10 outline-none rounded-lg indent-2'
                  placeholder='Ingresa tu número de teléfono'
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='email'
                  className='h-10 outline-none rounded-lg indent-2'
                  placeholder='Ingresa tu correo electrónico'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='event'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de evento*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='h-10 outline-none rounded-lg indent-2'>
                    <SelectValue placeholder='Selecciona el tipo de evento' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Cumpleaños'>Cumpleaños</SelectItem>
                  <SelectItem value='Aniversario'>Aniversario</SelectItem>
                  <SelectItem value='Social'>Social</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='dateEvent'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Día*</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}>
                      {field.value ? (
                        format(field.value, 'PPP', { locale: es })
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    locale={es}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='timeEvent'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hora*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='h-10 outline-none rounded-lg indent-2'>
                    <SelectValue placeholder='Selecciona la hora del evento' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='12pm'>12pm</SelectItem>
                  <SelectItem value='1pm'>1pm</SelectItem>
                  <SelectItem value='2pm'>2pm</SelectItem>
                  <SelectItem value='3pm'>3pm</SelectItem>
                  <SelectItem value='4pm'>4pm</SelectItem>
                  <SelectItem value='5pm'>5pm</SelectItem>
                  <SelectItem value='6pm'>6pm</SelectItem>
                  <SelectItem value='7pm'>7pm</SelectItem>
                  <SelectItem value='8pm'>8pm</SelectItem>
                  <SelectItem value='9pm'>9pm</SelectItem>
                  <SelectItem value='10pm'>10pm</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='people'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nr. de comensales*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='h-10 outline-none rounded-lg indent-2'>
                    <SelectValue placeholder='Selecciona la cantidad de invitados' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='+2'>+2</SelectItem>
                  <SelectItem value='+5'>+5</SelectItem>
                  <SelectItem value='+8'>+8</SelectItem>
                  <SelectItem value='+10'>+10</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='request'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Peticiones</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Cuentanos que petición tienes en mente'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className='flex justify-center'>
          <Button type='submit' className='btn-md bg-red-200 mx-auto'>
            {!localLoading ? (
              'Enviar'
            ) : (
              <IconLoader2 className='animate-spin' size={20} />
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
