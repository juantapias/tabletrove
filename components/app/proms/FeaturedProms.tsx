import Slider from 'react-slick'
import { Skeleton } from '@/components/ui/skeleton'
import ArticleFeaturedProms from './ArticleFeaturedProms'

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
                    <ArticleFeaturedProms key={key} />
                  ))
                : Array.from(new Array(5)).map((_, key) => (
                    <Skeleton key={key} className='h-[400px] w-full' />
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
