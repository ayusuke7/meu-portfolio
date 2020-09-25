import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridPortfolio } from "../../components";
import { actions } from "../../store/ducks/portfolio";
import "./styles.scss";

export default function HomePage({ history }) {
  const dipatch = useDispatch();
  const portfolio = useSelector((state) => state?.portfolio?.data);

  const getPortfolios = () => {
    dipatch(actions.getPortfolios("ayusuke7"));
  };

  useEffect(() => {
    if (portfolio.length === 0) {
      getPortfolios();
    }
  }, []);

  return (
    <div className="home-root">
      <GridPortfolio items={portfolio} />
    </div>
  );
}
