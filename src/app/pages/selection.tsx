"use client";
import { Filter, Users } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function HeroSelect() {
  const teams = [
    { name: "All", count: 0, src: null },
    {
      name: "Avengers",
      count: 0,
      src: "https://img.icons8.com/windows/32/FFFFFF/avengers.png",
    },
    {
      name: "X‑Men",
      count: 0,
      src: "https://img.icons8.com/ios-filled/50/FFFFFF/x-men.png",
    },
    {
      name: "Fantastic Four",
      count: 0,
      src: "https://img.icons8.com/windows/32/FFFFFF/fantastic-four.png",
    },
    {
      name: "S.H.I.E.L.D",
      count: 0,
      src: "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/s-h-i-e-l-d.png",
    },
    { name: "Runaways", count: 0, src: "/teams-and-groups/runaways" },
    {
      name: "Guardians of the Galaxy",
      count: 0,
      src: "/teams-and-groups/guardians-of-the-galaxy",
    },
    { name: "Starforce", 
      count: 0, 
      src: "/teams-and-groups/starforce" 
    },
    { name: "Defenders", 
      count: 0, 
      src: "/teams-and-groups/defenders" 
    },
    { name: "Elementals", 
      count: 0, 
      src: "/teams-and-groups/elementals" 
    },
    { name: "Hydra", 
      count: 0, 
      src: "/teams-and-groups/hydra" 
    },
    { name: "Champions", 
      count: 0, 
      src: "/teams-and-groups/champions" 
    },
    {
      name: "Warriors Three",
      count: 0,
      src: "/teams-and-groups/warriors-three",
    },
    { name: "Eternals", 
      count: 0, 
      src: "/teams-and-groups/eternals" 

    },
    { name: "Midnight Sons", 
      count: 0, 
      src: "/teams-and-groups/midnight‑sons" 

    },
    {
      name: "Time Variance Authority",
      count: 0,
      src: "/teams-and-groups/time-variance-authority",
    },
    { name: "Time‑Keepers", 
      count: 0, 
      src: "/teams-and-groups/time‑keepers" 

    },
    { name: "Deviants", 
      count: 0, 
      src: "/teams-and-groups/deviants" 

    },
    { name: "Inhumans", 
      count: 0, 
      src: "/teams-and-groups/inhumans" 
    },
  ];

  const Characters = [
    {
      name: "Hulk",
      realName: "Bruce Banner",
      src: "/Characters/Bruce.jfif",
      team: ["Avengers"],
      description: "Brilliant scientist with incredible strength.",
      tags: ["Strength", "Intelligence", "Speed", "Durability"],
      expertise: ["Science", "Physics", "Chemistry", "Gamma Radiation"],
      colors: {
        primary: "#22c55e", // green-500
        textGradient: ["#4ade80", "#22c55e", "#4ade80"],
        bgGradientFrom: "#0F0F0F",
        bgGradientTo: "#0B0B0B",
        cornerAccent: "rgba(34,197,94,0.1)",
        pulseColor: "rgba(34,197,94,0.05)",
        glowShadow: "rgba(34,197,94,0.2)",
      },
    },
    {
      name: "Captain America",
      realName: "Steve Rogers",
      src: "/Characters/Captain.jfif",
      team: ["Avengers"],
      description: "The shield of the American Revolution.",
      tags: ["Strength", "Intelligence", "Speed", "Durability"],
      expertise: ["Military", "Intelligence", "Superhuman Speed", "Superhuman Durability"],
      colors: {
        primary: "#3b82f6", // blue-500
        textGradient: ["#60a5fa", "#3b82f6", "#60a5fa"],
        bgGradientFrom: "#0F0F0F",
        bgGradientTo: "#0B0B0B",
        cornerAccent: "rgba(59,130,246,0.1)",
        pulseColor: "rgba(59,130,246,0.05)",
        glowShadow: "rgba(59,130,246,0.2)",
      },
    },
    {
      name: "Iron Man",
      realName: "Tony Stark",
      src: "/Characters/Iron.jfif",
      team: ["Avengers"],
      description: "Genius. Billionaire. Playboy. Philanthropist.",
      tags: ["Strength", "Intelligence", "Speed", "Durability"],
      expertise: ["Technology", "Intelligence", "Superhuman Speed", "Superhuman Durability"],
      colors: {
        primary: "#f97316", // orange-500
        textGradient: ["#fbbf24", "#f97316", "#fbbf24"],
        bgGradientFrom: "#0F0F0F",
        bgGradientTo: "#0B0B0B",
        cornerAccent: "rgba(249, 115, 22, 0.1)",
      },
    },
    {
      name: "Thor",
      realName: "Thor Odinson",
      src: "/Characters/Thor.jfif",
      team: ["Avengers"],
      description: "The son of Odin, the king of Asgard.",
      tags: ["Strength", "Intelligence", "Speed", "Durability"],
      expertise: ["Superhuman Strength", "Superhuman Intelligence", "Superhuman Speed", "Superhuman Durability"],
      colors: {
        primary: "#f97316", // orange-500
        textGradient: ["#fbbf24", "#f97316", "#fbbf24"],
        bgGradientFrom: "#0F0F0F",
        bgGradientTo: "#0B0B0B",
        cornerAccent: "rgba(249, 115, 22, 0.1)",
      },
    },
  ];



  const visibleTeams = teams.slice(0, 5);
  const overflowTeams = teams.slice(5);

    return (
      <div className="/*Global*/ flex flex-col  w-full h-screen   bg-gradient-to-br from-gray-900 via-gray-900 to-slate-900">
        {/* Team Filter */}
        <section className="p-10 h-20 w-full flex items-center justify-center  border-gray-200 ">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 hidden sm:block " />
              <span className="hidden sm:block md:block text-gray-400 font-medium ">
                Filter by Team:
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                {visibleTeams.map((team, idx) => (
                  <button
                    key={team.name}
                    className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 font-medium text-gray-400 transition-colors duration-200 sm:px-6 hover:bg-gray-100 dark:hover:bg-gray-800 active`}
                  >
                    {idx === 0 ? (
                      <Users className="text-sm" />
                    ) : team.src ? (
                      <img
                        width="22"
                        height="22"
                        src={team.src}
                        alt={team.name.toLowerCase()}
                      />
                    ) : null}
                    <span className="hidden  md:block lg:block text-sm">
                      {team.name}
                    </span>
                  </button>
                ))}

                {overflowTeams.length > 0 && (
                  <div className="flex ">
                    <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 font-medium text-gray-400 transition-colors duration-200 sm:px-6 hover:bg-gray-100 dark:hover:bg-gray-800 active">
                      <span className=" text-sm">+{overflowTeams.length}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-screen flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className=" 
              /* Global */ p-5 w-full h-screen flex flex-wrap overflow-y-auto items-center justify-center gap-5 
              "
          >
          {Characters.map((character, idx) => {
            const { name, realName, src, team, description, tags, expertise, colors } = character;

            return (
            <div key={idx} className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="text-white rounded-3xl border shadow-2xl duration-700 z-10 relative backdrop-blur-xl overflow-hidden w-[225px]"
                style={{
                  backgroundImage: `linear-gradient(to top right, ${colors.bgGradientFrom}, ${colors.bgGradientTo})`,
                  borderColor: `${colors.primary}33`,
                  boxShadow: `0 10px 30px ${colors.glowShadow}`,
                }}>
                <div className="absolute inset-0 z-0 overflow-hidden">
                      <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          backgroundImage: `linear-gradient(to top right, ${colors.primary}0D, ${colors.primary}1A)`, // 5%-10%
                          opacity: 0.4,
                        }}
                      />
                      <div
                        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl transform transition-all duration-700 animate-bounce delay-500"
                        style={{ backgroundImage: `linear-gradient(to top right, ${colors.primary}1A, transparent)` }}
                      />
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full blur-xl animate-ping"
                    style={{ backgroundImage: `linear-gradient(to top right, ${colors.primary}1A, transparent)` }}
                  ></div>
                  <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full blur-lg animate-ping delay-1000"
                    style={{ backgroundImage: `linear-gradient(to top right, ${colors.primary}1A, transparent)` }}
                  ></div>
                  <div className="absolute inset-0-skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"
                    style={{ backgroundImage: `linear-gradient(to top right, ${colors.primary}1A, transparent)` }}></div>
                </div>

                <div className="p-8 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border border-green-500/10 animate-pulse delay-500"></div>
                      <div style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="p-6 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-green-500/20">
                        <div className="transform group-hover:rotate-180 transition-transform duration-700" >
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                      <p
                        className="text-3xl font-bold bg-clip-text text-transparent animate-pulse"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${colors.textGradient.join(', ')})`,
                        }}
                      >
                        {name}
                      </p>
                    </div>

                    <div className="space-y-1 max-w-sm">
                      <p className="text-white font-semibold text-base transform group-hover:scale-185 transition-transform duration-300">
                        {realName}
                      </p>
                      <p className=" border h-10 flex items-center justify-center rounded-xl p-1 text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                        {team}
                      </p>
                      <p className="mt-5 text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                        {description}
                      </p>
                      <div>
                        <div className="mt-5 items-center flex flex-wrap justify-center gap-2" >
                        {expertise.map((expertise) => (
                          <p key={expertise} className="border w-30 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl p-1 text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                            {expertise}
                          </p>
                        ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

                    <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
                
                {/* UNIQUE HERO IDENTIFIER */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            )
          })}
          </div>
          {/* Right Panel */}
          <div className=" w-full h-screen flex items-center justify-center ">
            <div className="text-gray-400 italic">Right Panel (Details/Stats)</div>
          </div>
        </div>
      </div>
    );
}

