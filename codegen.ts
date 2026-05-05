import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  config: {
    scalars: {
      uuid: "string",
      timestamptz: "string",
      bigint: "number",
      float8: "number",
      numeric: "number",
      jsonb: "Record<string, unknown>",
      date: "string",
      time: "string",
      timetz: "string",
    },
    enumsAsTypes: true,
  },
  schema: {
    "http://192.168.0.129:5280/v1/graphql": {
      headers: {
        "x-hasura-admin-secret":
          process.env.HASURA_ADMIN_SECRET ?? "NjcG3SpuPmuIqGom442F1bwk6Vi4qzLjpfYSQAfuZtv",
      },
    },
  },
  generates: {
    "./src/gql/base-types.ts": {
      documents: ["./src/graphql/**/*.graphql"],
      plugins: ["typescript"],
    },
    "./src": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "~@/gql/base-types",
      },
      documents: ["./src/graphql/**/*.graphql"],
      plugins: ["typescript-operations", "typescript-urql"],
      config: {
        withHooks: true,
        documentMode: "documentNode",
      },
    },
  },
};

export default config;
