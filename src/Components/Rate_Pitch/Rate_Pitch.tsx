import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reduxState } from "../../index";
import { updateRate, updatePitch } from "../../Redux/Actions";

const Rate_Pitch = () => {
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  const rateval = useSelector((state: reduxState) => state.rate);
  const pitchVal = useSelector((state: reduxState) => state.pitch);
  const dispatch = useDispatch();

  const chgRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRate(parseFloat(event.target.value));
  };

  const chgPitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPitch(parseFloat(event.target.value));
    console.log(pitch);
  };

  useEffect(() => {
    dispatch(updateRate(rate));
  }, [rate]);

  useEffect(() => {
    dispatch(updatePitch(pitch));
  }, [pitch]);

  return (
    <div>
      <div className="form-group form-control-lg">
        <label htmlFor="rate" className="text-white">
          Rate
        </label>
        <div id="rate-value" className="badge badge-primary ml-3">
          {rateval}
        </div>
        <input
          type="range"
          id="rate"
          className="custom-range"
          min="0.5"
          max="2"
          value={rate}
          step="0.1"
          onChange={chgRate}
        />
      </div>
      {/*  */}
      <div className="form-group form-control-lg">
        <label htmlFor="pitch" className="text-white">
          Pitch
        </label>
        <div id="pitch-value" className="badge badge-primary ml-3">
          {pitchVal}
        </div>
        <input
          type="range"
          id="pitch"
          className="custom-range"
          min="0"
          max="2"
          value={pitch}
          step="0.1"
          onChange={chgPitch}
        />
      </div>
    </div>
  );
};

export default Rate_Pitch;
