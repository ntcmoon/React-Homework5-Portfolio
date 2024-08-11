import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <nav>
        <ul className="flex justify-between mx-[80px]">
          <li>
            <a href={"/About"}>About</a>
          </li>
          <li>
            <a href={`/Job`}>Job</a>
          </li>
          <li>
            <a href={`/Portfolio`}>Portfolio</a>
          </li>
          <li>
            <a href={`/Skill`}>Skill</a>
          </li>
          <li>
            <a href={`/Todo`}>Todo</a>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
