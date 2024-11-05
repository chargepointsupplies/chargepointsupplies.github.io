import Image from "next/image";
import MenuItem from "../components/Menu-Item";
export default function Home() {
  return (
    <div className="">
      <p className="text-4xl text-center">Hello, Fabian!</p>
        <MenuItem 
        title="Arroz con Habichuelas"
        price="4.99 $"
        description="Sabe buenito, hecho con habichuelas hechas a mano y arroz directito de china"
        imageSrc="https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80" />
    </div>
  );
}
