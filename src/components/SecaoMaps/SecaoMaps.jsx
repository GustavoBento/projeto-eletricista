import "./SecaoMaps.css";

export default function SecaoMaps() {
  return (
    <section className="secao-maps">
      <h3>
        minha <span>localização</span>{" "}
      </h3>
      <iframe
        title="mapa do eletricista"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178269.778243947!2d-43.40681792686388!3d-22.897015751831148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d03b5e41409%3A0x316f7c1160fbe18c!2sBeto%20Eletricista!5e0!3m2!1spt-BR!2sbr!4v1713827170335!5m2!1spt-BR!2sbr"
        width="100%"
        height="500"
        style={{border: 0}}
        loading="lazy"
      ></iframe>
    </section>
  );
}
