/** @format */

import { prisma } from "@prisma/client"
import { builder } from "../builder"

builder.prismaObject("InputField", {
  findUnique: (inf) => ({ id: inf.id }),
  fields: (t) => ({
    id: t.exposeID("id"),
  }),
})
