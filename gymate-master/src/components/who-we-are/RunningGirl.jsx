import runningGirl from "../../images/who-we-are/goldrun.webp";

function RunningGirl() {
  return (
    <div className="hidden 2xl:block">
      <img
        src={runningGirl}
        alt="runningGirl"
        className="h-auto w-full animate-float2"
      />
    </div>
  );
}

export default RunningGirl;
