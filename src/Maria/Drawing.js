import majima from "./Images/majima.png";

function Drawing() {
  return (
    <div>
      <h1>Goro, Majima from the Japanese game "Yakuza 0"</h1>
      <figure>
        <img
          srcSet={majima}
          alt="Drawing of Yakuza 0 character Goro, Majima"
          width="600"
          height="268.6"
        />
        <figcaption> Drawing done on June 18, 2021 </figcaption>
      </figure>
    </div>
  );
}

export default Drawing;
