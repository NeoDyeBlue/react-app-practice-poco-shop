import Card from "./Card";

function Tab(props) {
  const cardElements = props.data.map((item) => (
    <Card key={item.id} data={item} />
  ));

  return <div className="c-products__tab">{cardElements}</div>;
}

export default Tab;
