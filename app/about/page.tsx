import Link from "next/link"

export default function About() {

  return ( 
    <div>
      <h1>About</h1>
      <p>This is my about page!</p>
      <p><Link href="/">Go back to home page</Link></p>
    </div>  
  )

}