import { Routes, Route } from "react-router-dom";

import { MyProfile } from "../componetes/screens/homepage/MyProfile";
import { Tools } from "../componetes/screens/homepage/Tools";
import { Monitoring } from "../componetes/screens/homepage/Monitoring";
import { Support } from "../componetes/screens/homepage/Support";

import { Push } from "../componetes/screens/homepage/Push";
import { RegistrationData } from "../componetes/screens/homepage/push/view/RegistrationData";
import { DigitalCertificate } from "../componetes/screens/homepage/push/view/DigitalCertificate";
import { Monitor } from "../componetes/screens/homepage/push/view/Monitor";

export const ROUTES = () => {
  return (
    <Routes>
      <Route index element={<MyProfile />} />
      <Route path="perfil" element={<MyProfile />} />
      <Route path="ferramentas" element={<Tools />} />
      <Route path="monitoramento" element={<Monitoring />} />
      <Route path="push" element={<Push />}>
        <Route index element={<RegistrationData />} />
        <Route path="dados-cadastrais" element={<RegistrationData />} />
        <Route path="certificado-digital" element={<DigitalCertificate />} />
        <Route path="monitor" element={<Monitor />} />
      </Route>
      <Route path="/suporte" element={<Support />} />
    </Routes>
  );
};
