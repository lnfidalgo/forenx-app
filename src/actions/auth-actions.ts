'use server'

import { User } from "@prisma/client"
import prisma from "../lib/prisma"
import { Prisma } from "@prisma/client"

export async function registerUser(user: Omit<User, 'id' | 'phone' | 'emailVerified' | 'image'>) {

  const bcrypt = require('bcrypt')

  try {
    const result = prisma.user.create({
      data: {
        ...user,
        password: await bcrypt.hash(user.password, 10)
      },
    })

    return result
  } catch (error) {
    console.log(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return { error: 'I Wrote this in auth-action.' }
      }
    }

    return { error: 'An unexpected error ocurred.' }
  }
}