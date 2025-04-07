import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this cabin, <br />
        so you don&apos;t miss out on great deals!
      </p>
    </div>
  );
}

export default LoginMessage;
