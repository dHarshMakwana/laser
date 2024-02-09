"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);

  const apparatus = [
    {
      id: 1,
      name: "Laser Light",
      description: "Serves as the primary source of light for detection.",
    },
    { id: 2, name: "3.7v Battery", description: "Powers the entire system." },
    {
      id: 3,
      name: "3x Mirror",
      description: "Reflects the laser light to create a secure perimeter.",
    },
    {
      id: 4,
      name: "BC547 Transistor",
      description: "Acts as an electronic switch or amplifier.",
    },
    {
      id: 5,
      name: "100k OHM",
      description: "Manages voltage and current within the circuit.",
    },
    {
      id: 6,
      name: "Cardboard",
      description:
        "Provides a base structure for the installation of the system components.",
    },
    {
      id: 6,
      name: "Wires",
      description:
        "Establish connections and deliver power among all elements.",
    },
    {
      id: 7,
      name: "Buzzer",
      description:
        "Emits an audible alarm when the security system is breached.",
    },
    {
      id: 8,
      name: "5mm LDR",
      description:
        "Reacts to alterations in laser light intensity, triggering the alarm.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 gradiant">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center gap-28">
          <section data-aos="fade-up" className="flex flex-col gap-8">
            <h1 className="mt-6 text-9xl font-bold">Laser Security</h1>
            <div className="flex gap-4 text-xl font-bold">
              <div>presented by :</div>
              <div className="flex gap-2">
                <p>Harsh Poojary</p>
                <p>Sahil Rewale</p>
                <p>Harsh Makwana</p>
                <p>Pratham Pawar</p>
                <p>Atharva Puranik</p>
                <p>Aryan More</p>
              </div>
            </div>
          </section>
          <section className="flex flex-wrap gap-8">
            <p data-aos="fade-right" className="text-xl text-left md:w-1/2">
              1. The purpose is to conceptualize and execute a Laser-Based
              Security System designed to safeguard households from any
              unauthorized intervention. An alarm will be activated when an
              intrusion attempt is detected, enhancing the{` property's `}{" "}
              security dimension. <br /> <br /> 2. Embark on the design and
              establishment of a cost-effective laser system that optimizes
              efficiency without compromising on its integral functionality.
            </p>
            <Image
              data-aos="fade-left"
              src="/house.jpeg"
              alt="laser"
              width={500}
              height={500}
            />
          </section>
          <section className="w-full">
            <h2
              data-aos="fade-right"
              className="text-6xl text-left font-bold mb-8"
            >
              Utilization of Apparatus
            </h2>
            <div className="flex gap-6">
              <div className="flex flex-col gap-6">
                {apparatus.slice(0, 5).map((item, index) => (
                  <div
                    data-aos="zoom-in"
                    key={index}
                    className="flex gap-2 text-xl"
                  >
                    <span>{item.id}.</span>{" "}
                    <h3 className="font-bold whitespace-nowrap">
                      {item.name}:
                    </h3>
                    <p className="text-lg">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                {apparatus.slice(6, 9).map((item, index) => (
                  <div
                    data-aos="zoom-in"
                    key={index}
                    className="flex gap-2 text-xl"
                  >
                    <span>{item.id}.</span>{" "}
                    <h3 className="font-bold whitespace-nowrap">
                      {item.name}:
                    </h3>
                    <p className="text-lg">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <h2
              data-aos="fade-right"
              className="text-6xl text-left font-bold mb-8"
            >
              Applications:
            </h2>
            <p data-aos="fade-left" className="text-xl text-left">
              1. Home Security System: The designed laser-based system ensures
              the security of residential properties by alerting owners of any
              unauthorized intrusion attempts.
              <br />
              <br />
              2. Large Property Security: The system can be effectively
              implemented in oversized properties, such as military
              installations, to ensure comprehensive coverage and heightened
              security measures.
            </p>
          </section>
          <section className="flex flex-col gap-8">
            <h2
              data-aos="fade-right"
              className="text-6xl text-left font-bold mb-8"
            >
              Working principle
            </h2>
            <div className="flex gap-4 text-xl font-bold justify-between items-center">
              <p data-aos="fade-right" className="text-left w-1/2">
                This circuit consists of several components: an LDR (Light
                Dependent Resistor) that changes its resistance based on light
                intensity, a 100k ohm resistor to limit current and create a
                voltage drop, a transistor <strong> {`"BC457" `}</strong> that
                acts as a switch, and a buzzer. When exposed to sufficient
                light, the LDR’s resistance decreases, causing Q1 to turn on and
                activate the buzzer, producing an audible alert sound.
              </p>
              <Image
                data-aos="fade-left"
                src="/circuit.jpeg"
                alt="laser"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <h2
              data-aos="fade-right"
              className="text-6xl text-left font-bold mb-8"
            >
              How LDR Works
            </h2>
            <div className="flex gap-4 text-xl font-bold justify-between items-center">
              <p data-aos="fade-right" className="text-left w-1/2">
                When the levels of light are high, the Light Dependent Resistor
                (LDR) exhibits high resistance, obstructing current flow to the
                base of the transistors. As a result, the buzzer remains silent
                due to the restricted current flow.
                <br />
                <br />
                Conversely, When the levels of light are low, its resistance
                decreases, enabling the flow of current to the first{" "}
                {`transistor's `}
                base and subsequently to the second transistor. This movement of
                current activates the buzzer.
              </p>
              <img
                data-aos="fade-left"
                src="/ldr.gif"
                alt="laser"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section>
            <h2
              data-aos="fade-right"
              className="text-6xl text-left font-bold mb-8"
            >
              Operation
            </h2>
            <p data-aos="fade-right" className="text-xl text-left">
              In its normal operational state, when {`there's `} no intruder,
              the laser beam reflects off the mirrors and is received by the
              Light Dependent Resistor (LDR). During this period, the resistance
              of the LDR is low, which allows the current to flow through the
              transistor. Resulting from this, the transistor remains turned off
              and there is no sound from the buzzer. Any shift from this
              normalcy, as by an intruder crossing the laser {`beam's `} path,
              results in the interruption of the reflected light. This change
              consequently triggers an increase in the {`LDR's `} resistance
              which activates the transistor. Upon the{` transistor's `}{" "}
              activation, the buzzer rings, alerting the property owner or the
              security personnel of a potential intrusion.
            </p>
          </section>
          <section className="h-[100vh]">
            <h1 data-aos="fade-up" className="mt-6 text-9xl font-bold">
              Thank you
            </h1>
          </section>
        </main>
      </div>
    </>
  );
}
