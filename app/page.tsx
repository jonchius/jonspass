export default function Main() {

  const generatePassword = (passwordSize) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    let password = ""
    for (let i = 0; i < passwordSize; i++) {
      const index = Math.floor(Math.random() * characters.length)
      password += characters[index]
    }    
    return password
  }

  return (
    <>
      <h1>JONSPASS</h1>      

      <p>Here is your random password: </p>

      <p className="password">{generatePassword(12)}</p>
    </>
  )
}