function Card(props) {
  const storageTags = props.data.specs.storage.map((tag, index) => (
    <p key={`${props.data.id}${index}`} className="c-card__tag">
      {tag.ram}GB / {tag.rom}GB
    </p>
  ));

  return (
    <div className="c-card">
      <div className="c-card__image-wrap">
        <img
          className="c-card__image"
          src={require(`../images/phones/${props.data.image}`)}
          alt="phone image"
        />
      </div>
      <div className="c-card__info-wrapper">
        <h2 className="c-card__header c-card__header--anim-fade-toleft">
          {props.data.name}
        </h2>
        <h2 className="c-card__header c-card__header--absolute c-card__header--anim-fade-toright">
          {props.data.price}
        </h2>
        <div className="c-card__tags-desc-wrapper">
          <p className="c-card__description">{props.data.description}</p>
          {storageTags}
        </div>
      </div>
      <div className="c-card__buttons-wrapper">
        <button className="c-button c-button--text-only c-button--margin-right">
          Learn more <span className="c-button--arrow-text">»</span>
        </button>
        <button className="c-button">Buy now</button>
      </div>
    </div>
  );
}

export default Card;
