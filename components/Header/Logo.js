import Link from "next/link";
import Image from "next/image";

const Logo = ({ isWideScreen }) => {
  const width = isWideScreen ? 170 : 100;
  const height = isWideScreen ? 52 : 30;

  return (
    <Link href="/">
      <a>
        <Image
          src="/images/logos/bejamas-logo-full.svg"
          alt="Bejamas"
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
};

export default Logo;
