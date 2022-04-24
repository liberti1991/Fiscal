import { Link } from "react-router-dom";
import styled from "styled-components";

import { DataBaseQuickAccess } from "../../database/DataBaseQuickAccess";

export const Tools = () => {
  return (
    <CardContainer>
      {DataBaseQuickAccess.map((item) => (
        <Card key={item.id}>
          <Link to={item.url}>
            <img src={item.img} />
            <p>{item.title}</p>
          </Link>
        </Card>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.section`
  display: flex;
  margin: 0 auto;
  gap: 20px;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  margin-top: 60px;
`;

const Card = styled.div`
  margin: 0 auto;
  width: 200px;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    border-radius: 20px 20px 0 0;
  }

  p {
    background-color: #424242;
    border-radius: 0 0 20px 20px;
    height: 70px;
    width: 100%;
    color: #fff;
    padding: 15px 10px;
  }
`;
