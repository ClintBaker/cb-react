import PortfolioNavItem from "./portfolioNavItem";

interface portfolioItem {
  description: string;
  name: string;
  id: any;
}

export default function HorizontalNav(props: {
  active: any;
  setActive: Function;
  portfolioItems: Array<portfolioItem>;
}) {
  return (
    <div>
      {props.portfolioItems.map((item) => (
        <PortfolioNavItem
          key={item.id}
          active={props.active}
          setActive={props.setActive}
          name={item.name}
          description={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
}
