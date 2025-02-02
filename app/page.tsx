import Link from "next/link"

export default function Main() {
  return (
    <>
      <h1>Home</h1>
      <p><Link href="/about">About</Link></p>
    </>
  )
}