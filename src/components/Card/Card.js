
import React from "react";
import Forecast from "../Forecast/Forecast";
import Spinner from "../Spinner/Spinner";
import { StyledCard } from "./StyledCard";
import TemperatureChart from "../TemperatureChart/TemperatureChart";

function Card({ data, imageUrl }) {
  if (!data || !data.days || data.days.length === 0) {
    return (
      <StyledCard>
        <div className="cardContainer">
          <div className="glassCard">
            <Spinner />
          </div>
        </div>
      </StyledCard>
    );
  }

  let date = new Date(data.days[0].datetime);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

    let formatedDate =
  daysOfWeek[date.getDay()] +
  ", " +
  date.getDate().toString() +
  " " +
  months[date.getMonth()] +
  " " +
  date.getFullYear();


  return (
    <StyledCard>
      <div className="cardContainer">
        <div className="glassCard">
          <div>
            <div className="d-flex flex-column flex-lg-row justify-content-evenly">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <div className="flex-summary" style={{ fontSize: "28px" }}>
                    {data.resolvedAddress}
                  </div>
                  <div className="flex-summary">{formatedDate}</div>
                </div>
                <div
                  className="p-2 d-flex flex-row justify-content-center"
                  style={{ gap: "50px" }}
                >
                  <div>
                    <img src={imageUrl} alt="" />
                  </div>
                  <div>
                    <div className="main-temp">
                      {(((data.days[0].temp - 32) * 5) / 9).toFixed(2)}&deg;
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: "500",
                        fontSize: "22px",
                      }}
                    >
                      {data.days[0].conditions}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <div className="flex-details">
                      <div className="flex-value">
                        {(((data.days[0].tempmax - 32) * 5) / 9).toFixed(2)}
                        &#8451;
                      </div>
                      <div className="flex-key">Max</div>
                    </div>
                    <div className="flex-details">
                      <div className="flex-value">
                        {(((data.days[0].feelslike - 32) * 5) / 9).toFixed(2)}
                        &#8451;
                      </div>
                      <div className="flex-key">Feels Like</div>
                    </div>
                    <div className="flex-details">
                      <div className="flex-value">{data.days[0].sunrise}</div>
                      <div className="flex-key">Sunrise</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <div className="flex-details">
                      <div className="flex-value">
                        {(((data.days[0].tempmin - 32) * 5) / 9).toFixed(2)}
                        &#8451;
                      </div>
                      <div className="flex-key">Min</div>
                    </div>
                    <div className="flex-details">
                      <div className="flex-value">{data.days[0].humidity}</div>
                      <div className="flex-key">Humidity</div>
                    </div>
                    <div className="flex-details">
                      <div className="flex-value">{data.days[0].sunset}</div>
                      <div className="flex-key">Sunset</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Forecast data={data} />
            <TemperatureChart data={data.days} />
          </div>

          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
