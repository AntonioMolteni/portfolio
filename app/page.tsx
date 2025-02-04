import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About</h1>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <Image
          src={"/media/headshot.jpg"}
          alt="Logo"
          width={256}
          height={256}
          className="rounded-full w-40 h-40 object-cover mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <p className="mb-4">
            Hi! I'm Antonio Molteni, I graduated with a BS in Engineering
            Physics and completed a Minor in EECS at UC Berkeley in 2024
            focusing on semiconductor-physics and software development.
          </p>
          <p className="mb-4">
            I enjoy web application development, IT systems, network
            infrastructure, and electronics design. I strive to build systems
            that are elegant, functional and reliable. From time-to-time, I can
            be seen zooming around campus on my bike. For more about my work or
            to connect, feel free to reach out.
          </p>
          <a href="mailto:mrantoniomolteni@gmail.com">
            mrantoniomolteni@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
