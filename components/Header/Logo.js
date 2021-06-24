import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/logos/bejamas-logo-full.svg"
          alt="Bejamas"
          width={100}
          height={30}
        />
      </a>
    </Link>
  );
};

export default Logo;
