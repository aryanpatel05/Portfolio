"use client";

import Image from "next/image";
import { useState } from "react";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";
import { NdaModal } from "./ui/nda-modal";

const websiteProjectImageClass =
  "absolute left-1/2 top-5 z-10 max-h-[98%] w-[108%] -translate-x-1/2 scale-[1.18] object-contain object-top sm:top-6";

const WEBSITE_PROJECT_IDS = new Set([1, 2, 3, 4, 5, 8]);

export const RecentProjects = () => {
  const [ndaModal, setNdaModal] = useState<{
    open: boolean;
    title: string;
  }>({ open: false, title: "" });

  const openNdaModal = (title: string) => {
    setNdaModal({ open: true, title });
  };

  const closeNdaModal = () => {
    setNdaModal({ open: false, title: "" });
  };

  return (
    <section id="projects" className="mt-8 pb-20 pt-24">
      <NdaModal
        open={ndaModal.open}
        onClose={closeNdaModal}
        projectTitle={ndaModal.title}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4">
        <h1 className="heading mb-2">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>

        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-[15px] sm:grid-cols-2">
        {projects.map(({ id, des, iconLists, img, link, title, ...rest }) => {
          const nda = "nda" in rest && rest.nda === true;
          const clientBadge =
            "clientBadge" in rest ? rest.clientBadge : undefined;

            return (
              <div
                key={id}
                className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
              >
                <PinContainer
                  title="Visit"
                  href={nda ? undefined : link}
                  onVisitClick={nda ? () => openNdaModal(title) : undefined}
                >
                  <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                    <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                      <Image
                        height={330}
                        width={552}
                        src="/bg.png"
                        alt="bg-img"
                      />
                    </div>

                    <Image
                      height={300}
                      width={464}
                      src={img}
                      alt={title}
                      className={
                        WEBSITE_PROJECT_IDS.has(id)
                          ? websiteProjectImageClass
                          : "absolute bottom-0 left-1/2 z-10 max-h-full -translate-x-1/2 object-contain"
                      }
                    />
                  </div>

                  <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                    {title}
                  </h1>

                  <p className="line-clamp-2 text-[11px] font-light leading-snug md:text-xs lg:text-[17px] lg:font-normal lg:leading-snug">
                    {des}
                  </p>

                  <div
                    className={`mb-3 mt-7 flex items-center ${clientBadge ? "justify-between" : ""}`}
                  >
                    <div className="flex items-center">
                      {iconLists.map((icon, i) => (
                        <div
                          key={icon}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                          style={{
                            transform: `translateX(-${5 * i * 2}px)`,
                          }}
                        >
                          <Image
                            height={40}
                            width={40}
                            src={icon}
                            alt={icon}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>

                    {clientBadge && (
                      <div className="flex shrink-0 items-center gap-2 text-sm text-purple lg:text-base">
                        <Image
                          height={20}
                          width={30}
                          src={clientBadge.flag}
                          alt={`${clientBadge.label} flag`}
                          className="h-4 w-6 rounded-sm object-cover lg:h-5 lg:w-7"
                        />
                        <span className="font-semibold">{clientBadge.label}</span>
                      </div>
                    )}
                  </div>
                </PinContainer>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
