import { FaCheckCircle } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";

function Card() {
  return (
    <main className="bg-light d-flex justify-content-center align-items-center min-vh-100">
        <div className="background-card border-dark text-white m-1 rounded-4 shadow p-4 d-flex flex-column justify-content-start" style={{ height: "41rem", width: "22rem" }}>
            <h4 className="fs-5 fw-bold mb-3">
                Plano black
            </h4>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            Treine em qualquer academia, seja no Brasil ou na América
            Latina. São +2.000 unidades em 16 países!
            </p>
            <div>
                <h6 className="mb-0 text-decoration-line-through fw-light ">
                R$ 159,90
                </h6>
                <span className="card-valor fs-4 fw-bold d-flex justify-content-start align-items-center"
                >R$ 0,00*
                <div className="fs-6 mx-2 fw-light text-color">100% OFF
                </div>
                </span>
                <div className="font-size d-flex gap-2 fw-bold text-white align-items-center" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                <span>no 1º mês,</span>
                <p className="mb-0 fw-normal font-size">depois R$ 159,90/mês</p>
                </div>
            </div>
            <div className="my-4">
                <p style={{fontSize: "0.8rem"}} className="m-0">12 meses de fidelidade</p>
                <p style={{fontSize: "0.8rem"}} className="m-0">Adesão R$ 39,90</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
               <button className="btn btn-warning rounded-5" style={{height:"3rem", width: "18rem"}}>
                <span className="text-dark fw-semibold">Começar agora</span>
                </button> 
            </div>
            <ul className="list-unstyled my-3 m-2">
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <FaCheckCircle
                    size={18}
                    className="text-success flex-shrink-0 mt-1"
                    />
                    <span style={{ lineHeight: "1.4" }}>
                    Acesso ilimitado a +2.000 academias
                    </span>
                </li>

                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <FaCheckCircle
                    size={18}
                    className="text-success flex-shrink-0 mt-1"
                    />
                    <span style={{ lineHeight: "1.4" }}>
                    Leve 5 amigos por mês para treinar com você
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <FaCheckCircle
                    size={18}
                    className="text-success flex-shrink-0 mt-1"
                    />
                    <span style={{ lineHeight: "1.4" }}>
                    Cadeira de massagem
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <FaCheckCircle
                    size={18}
                    className="text-success flex-shrink-0 mt-1"
                    />
                    <span style={{ lineHeight: "1.4" }}>
                    Skeelo App (Audiobook)*
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <FaCheckCircle
                    size={18}
                    className="text-success flex-shrink-0 mt-1"
                    />
                    <span style={{ lineHeight: "1.4" }}>
                    Área de musculação e aeróbicos
                    </span>
                </li>
             </ul>
        </div>
        <div className="bg-white text-dark border-dark m-1 rounded-4 shadow p-4 d-flex flex-column justify-content-start" style={{ height: "41rem", width: "22rem" }}>
            <h4 className="fs-5 fw-bold mb-3">
                Plano Fit
            </h4>
            <p className="text-color-cards" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            Treine em qualquer academia, seja no Brasil ou na América
            Latina. São +2.000 unidades em 16 países!
            </p>
            <div>
                <h6 className="mb-0 text-decoration-line-through fw-light ">
                R$ 149,90
                </h6>
                <span className="card-valor fs-4 fw-bold d-flex justify-content-start align-items-center"
                >R$ 0,00*
                <div className="fs-6 mx-2 fw-light text-color">100% OFF
                </div>
                </span>
                <div className="font-size d-flex gap-2 fw-bold text-color-cards align-items-center" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                <span>no 1º mês,</span>
                <p className="mb-0 fw-normal font-size">depois R$ 149,90/mês</p>
                </div>
            </div>
            <div className="my-4">
                <p style={{fontSize: "0.8rem"}} className="m-0">12 meses de fidelidade</p>
                <p style={{fontSize: "0.8rem"}} className="m-0">Adesão R$ 39,90</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
               <button className="btn btn-warning rounded-5" style={{height:"3rem", width: "18rem"}}>
                <span className="text-dark fw-semibold">Começar agora</span>
                </button> 
            </div>
            <ul className="list-unstyled my-3 m-2">
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through"style={{ lineHeight: "1.4" }}>
                    Acesso ilimitado a +2.000 academias
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through"style={{ lineHeight: "1.4" }}>
                    Leve 5 amigos por mês para treinar com você
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through"style={{ lineHeight: "1.4" }}>
                    Cadeira de massagem
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through"style={{ lineHeight: "1.4" }}>
                    Skeelo App (Audiobook)*
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <FaCheckCircle
                    size={18}
                    className="text-success flex-shrink-0 mt-1"
                    />
                    <span className="text-dark"style={{ lineHeight: "1.4" }}>
                    Área de musculação e aeróbicos
                    </span>
                </li>
             </ul>
        </div>
        <div className="bg-white text-dark border-dark m-1 rounded-4 shadow p-4 d-flex flex-column justify-content-start" style={{ height: "41rem", width: "22rem" }}>
            <h4 className="fs-5 fw-bold mb-3">
                Plano GYM
            </h4>
            <p className="text-color-cards" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            Treine em qualquer academia, seja no Brasil ou na América
            Latina. São +2.000 unidades em 16 países!
            </p>
            <div className="my-2">

                <span className=" card-valor fs-4 fw-bold d-flex justify-content-start align-items-center"
                >R$ 169,90
                <div className="fs-5 fw-light text-color-cards">/mês
                </div>
                </span>
                <div className="font-size d-flex gap-2 fw-bold text-color-cards align-items-center" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                <span>no 1º mês,</span>
                <p className="mb-0 fw-normal font-size">depois R$ 159,90/mês</p>
                </div>
            </div>
            <div className="my-4">
                <p style={{fontSize: "0.8rem"}} className="m-0">Sem fidelidade</p>
                <p style={{fontSize: "0.8rem"}} className="m-0">Adesão grátis</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
               <button className="btn btn-warning rounded-5" style={{height:"3rem", width: "18rem"}}>
                <span className="text-dark fw-semibold">Começar agora</span>
                </button> 
            </div>
            <ul className="list-unstyled my-3 m-2">
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through"style={{ lineHeight: "1.4" }}>
                    Acesso ilimitado a +2.000 academias
                    </span>
                </li>

                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark  flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through" style={{ lineHeight: "1.4" }}>
                    Leve 5 amigos por mês para treinar com você
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark  flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through" style={{ lineHeight: "1.4" }}>
                    Cadeira de massagem
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <MdBlockFlipped
                    size={18}
                    className="text-dark  flex-shrink-0 mt-1"
                    />
                    <span className="text-dark text-decoration-line-through" style={{ lineHeight: "1.4" }}>
                    Skeelo App (Audiobook)*
                    </span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-white fw-semibold">
                    <FaCheckCircle
                    size={18}
                    className="text-success flex-shrink-0 mt-1"
                    />
                    <span className="text-dark" style={{ lineHeight: "1.4" }}>
                    Área de musculação e aeróbicos
                    </span>
                </li>
             </ul>
        </div>
    </main>
  );
}

export default Card;
