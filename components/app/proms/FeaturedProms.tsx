import Slider from 'react-slick'
import { Skeleton } from '@/components/ui/skeleton'

type IProps = {
  loading: boolean
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function FeaturedProms({ loading }: IProps) {
  return (
    <div>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-2'>
          <div className='w-full'>
            <Slider {...settings}>
              {!loading
                ? Array.from(new Array(5)).map((_, key) => (
                    <div key={key} className='h-[400px] bg-red-300'>
                      <div className='h-full flex items-center justify-center'>
                        <h1>Promoción</h1>
                      </div>
                    </div>
                  ))
                : Array.from(new Array(5)).map((_, key) => (
                    <Skeleton key={key} className='h-[128px] w-[256px]' />
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
