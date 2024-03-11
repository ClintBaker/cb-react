import SmallNavItem from "./smallNavItem";

interface portfolioItem {
  description: string;
  name: string;
  id: any;
}

export default function SmallNav(props: {
  active: any;
  setActive: Function;
  portfolioItems: Array<portfolioItem>;
}) {
  return (
    <div>
      <div>
        {props.portfolioItems.map((item) => (
          <SmallNavItem
            key={item.id}
            active={props.active}
            setActive={props.setActive}
            name={item.name}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
