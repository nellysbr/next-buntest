import Image from "next/image";
import ContactForm from "@/components/ContactForm/ContactForm";
export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center items-start">
          <div className="w-full md:w-[1480px]">
            <Image
              src={"/assets/images/light-car.webp"}
              alt="Novo Fiat Pulse"
              title="Novo Fiat Pulse"
              width={1200}
              height={754}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-[325px] bg-red-700 flex flex-col p-8 mb-12">
            <div className="mb-4">
              <p className="text-3xl text-white font-bold">
                RECEBA{" "}
                <span className="text-[#e4b236]">
                  NOVIDADES DO MAIOR LANÇAMENTO DA FIAT
                </span>{" "}
                NOS ÚLTIMOS 10 ANOS.
              </p>
            </div>
            <div className="mb-5">
              <p className="text-white">
                Preencha o formulário abaixo e fique por dentro.
              </p>
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
