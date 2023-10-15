import "./.Events.scss";

function Events() {
  const handleClick2 = () => {
    window.open(
      "https://ra.co/events/1727306", "_blank"); 
  };

  const handleClick1 = () => {
    window.open(
      "https://ra.co/events/1727344", "_blank"); 
  };

  }

  return (
    <section className="events" id="events">
      <div className="events__heading">
        <h2>PREVIOUS EVENTS</h2>
      </div>
      <div className="events__photos">
        <div onClick={handleClick1}className="events__image1"></div>
        <p>
          Our events usually take place in an underground spaces or bars such as
          Sekta Selekta, Święta Krowa. The main genres we focus on are electro,
          breaks, techno and trance.
        </p>
        <div onClick = {handleClick2} className="events__image2"></div>
      </div>
    </section>
  );
}
export default Events;
