type IProps = {
  prom: any
}

export default function ArticleProms({ prom }: IProps) {
  const styleBackground = {
    backgroundImage: `url("${prom.thumbnail?.url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }
  return (
    <div
      style={styleBackground}
      className='h-32 w-64 rounded-lg flex items-center justify-center bg-white'
      //   onClick={handleSelectedProduct}
    ></div>
  )
}
