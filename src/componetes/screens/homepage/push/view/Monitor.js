import { useEffect, useState } from "react";

export const Monitor = () => {
  const [teste, setTeste] = useState([]);

  useEffect(() => {
    fetch("http://filipe.medianewsonline.com/cadorepark/php/remove.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTeste(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Monitor</h1>
      {teste.map((item) =>(
        <p>{item.valor}</p>
      ))}
    </>
  );
};
