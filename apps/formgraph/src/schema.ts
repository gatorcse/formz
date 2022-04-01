/** @format */

import SchemaBuilder from "@pothos/core"
import { Giraffe } from "./giraffe"

const builder = new SchemaBuilder({})

builder.objectType(Giraffe, {
  name: "Giraffe",
  description: "Long necks, cool patterns, taller than you.",
  fields: (t) => ({
    name: t.exposeString("name", {}),
    age: t.int({
      resolve: (parent) => {
        const ageDifMs = Date.now() - parent.birthday.getTime()
        const ageDate = new Date(ageDifMs)
        return Math.abs(ageDate.getFullYear() - 1970)
      },
    }),
    height: t.float({
      resolve: (parent) => parent.heightInMeters,
    }),
  }),
})

builder.queryType({
  fields: (t) => ({
    giraffe: t.field({
      type: Giraffe,
      resolve: () =>
        new Giraffe("James", new Date(Date.UTC(2012, 11, 12)), 5.2),
    }),
  }),
})

export const schema = builder.toSchema({})
