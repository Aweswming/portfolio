import { Skill } from "./Skill";

export function Skills() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-12"
      data-content
      id="skills"
    >
      <div className="skills__area">
        <h3 className="text-lg text-center mb-6">Frontend</h3>

        <div className="flex justify-center gap-x-12">
          <div className="grid items-start gap-y-4">
            <Skill level={3} skill="HTML" />
            <Skill level={2} skill="CSS" />
            <Skill level={2} skill="Js / Ts" />
          </div>

          <div className="grid items-start gap-y-4">
            <Skill level={1} skill="ReactJs" />
            <Skill level={1} skill="NextJs" />
            <Skill level={1} skill="Tailwindcss" />
          </div>
        </div>
      </div>

      <div className="skills__area">
        <h3 className="text-lg text-center mb-6">Backend</h3>

        <div className="flex justify-center gap-x-12">
          <div className="grid items-start gap-y-4">
            <Skill level={3} skill="PHP" />
            <Skill level={2} skill="MySQL" />
          </div>

          <div className="grid items-start gap-y-4">
            <Skill level={2} skill="Node Js" />
          </div>
        </div>
      </div>
    </div>
  );
}
