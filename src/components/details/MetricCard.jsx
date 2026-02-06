import './DetailsCards.css';

export function MetricCard({ metric }) {
  return (
    <section className="smallCard">
      <div className="smallCard__title">{metric.title}</div>

      <div className="smallCard__row">
        <div>
          <div className="smallCard__big">{metric.leftBig}</div>
          <div className="smallCard__label">{metric.leftLabel}</div>
        </div>

        <div className="smallCard__right">
          <div className="smallCard__big">{metric.rightBig}</div>
          <div className="smallCard__label">{metric.rightLabel}</div>
        </div>
      </div>

      <div className="smallCard__footer">
        <div className="smallCard__footerLabel">{metric.footerLeft}</div>
        <div className="smallCard__footerValue">{metric.footerRight}</div>
      </div>
    </section>
  );
}
