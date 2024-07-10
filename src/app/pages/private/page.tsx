'use client'
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function DoctorPage() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <h1>Doctor</h1>
      <Link href='/'>Voltar</Link>
    </>
  )
}