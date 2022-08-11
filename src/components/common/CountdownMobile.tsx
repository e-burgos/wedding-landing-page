import React, { Fragment } from "react";
import Countdown from "react-countdown-now";
import { counterSection } from "../../data/counterSection";

const CountdownComponent = () => {
  const Completionist = () => (
    <div className="container">
      <div className="countdown">
        <div className="content big-mobile">
          <img src={counterSection.icons.gif} alt="icon" width={200} />
          <span className="title big-title-mobile">Hoy Nos Casamos!</span>
        </div>
        <div className="gold-border big-mobile" />
      </div>
    </div>
  );

  interface Props {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }

  const renderer: React.FunctionComponent<Props> = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="countdown-list wrap mobile">
          <div className="mobile container">
            <div className="countdown">
              <div className="content mobile">
                <span className="digits">{days}</span>
                <span className="title">Días</span>
              </div>
              <div className="gold-border mobile" />
            </div>
          </div>
          <div className="mobile container">
            <div className="countdown">
              <div className="content mobile">
                <span className="digits">{hours}</span>
                <span className="title">Horas</span>
              </div>
              <div className="gold-border mobile" />
            </div>
          </div>
          <div className="mobile container">
            <div className="countdown">
              <div className="content mobile">
                <span className="digits">{minutes}</span>
                <span className="title">Minutos</span>
              </div>
              <div className="gold-border mobile" />
            </div>
          </div>
          <div className="mobile container">
            <div className="countdown">
              <div className="content mobile">
                <span className="digits">{seconds}</span>
                <span className="title">Segundos</span>
              </div>
              <div className="gold-border mobile" />
            </div>
          </div>
        </div>
      );
    }
  };

  const fechaFin = new Date("2022-11-19T19:00:00").getTime();
  return (
    <Fragment>
      <Countdown date={fechaFin} renderer={renderer} />
    </Fragment>
  );
};

export default CountdownComponent;
