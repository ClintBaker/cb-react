const activeClass =
  "cursor-pointer bg-blue-400 bg-opacity-45 rounded-lg p-4 border-[1px] border-blue-400";
const inactiveClass =
  "p-4 cursor-pointer hover:bg-blue-500 hover:bg-opacity-45 hover:rounded-lg border-[1px] border-transparent";

export default function portfolioNavItem(props: {
  name: string;
  description: string;
  active: any;
  setActive: Function;
  id: any;
}) {
  const { name, description } = props;

  function handleClick() {
    props.setActive(props.id);
  }
  return (
    <div
      onClick={handleClick}
      className={props.active.id === props.id ? activeClass : inactiveClass}
    >
      <h4 className="text-xl">{name}</h4>
      <p className="mt-4 text-sm">{description}</p>
    </div>
  );
}
