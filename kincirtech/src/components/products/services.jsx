import {
  FaAws,
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiPhp,
  SiPostgresql,
  SiRuby,
} from "react-icons/si";

export default function products() {
  return (
    <section class="bg-white" id="Services">
      <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
          <div class="flex justify-center items-center">
            <FaAws class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <SiGooglecloud class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <FaAngular class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <FaCss3Alt class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <FaHtml5 class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <SiPhp class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <FaPython class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <FaReact class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <SiRuby class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <SiMongodb class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <SiPostgresql class="w-32 h-32 hover:text-yellow-300" />
          </div>
          <div class="flex justify-center items-center">
            <SiMicrosoftsqlserver class="w-32 h-32 hover:text-yellow-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
