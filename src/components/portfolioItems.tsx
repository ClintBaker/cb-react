interface portfolioItem {
  description: string
  name: string
}

export default function PortfolioItems(props: {
  active: any
  setActive: Function
  portfolioItems: Array<portfolioItem>
}) {
  return (
    <div>
      <a href={props.active.link} target="_blank">
        <img
          src={props.active.imgUrl}
          alt="alt"
          className="rounded-lg object-cover"
        />
      </a>
    </div>
  )
}
